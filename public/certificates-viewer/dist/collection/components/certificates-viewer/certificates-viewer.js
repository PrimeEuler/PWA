/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Prop, State, Watch, Host, } from '@stencil/core';
import { X509Certificate } from '../../crypto';
import { OIDs } from '../../constants/oids';
import { Download } from '../../utils/download';
import { l10n } from '../../utils';
export class CertificatesViewer {
    constructor() {
        /**
         * List of certificates values for decode and show in the list.
         * <br />
         * **NOTE**: If you do not provide a `name` value when
         * invocing the component it will take the first Subject CN value.
         * <br />
         * **NOTE**: If you do not provide a `tests` this column will be ommited from the rendered page.
         * <br />
         * **NOTE**: If the supplied certificates are self-signed the issuer column will be ommited.
         */
        this.certificates = [];
        /**
         * Use filter in the list when search is changed.
         */
        this.filterWithSearch = true;
        /**
         * Use highlight chapters in the list when search is changed.
         */
        this.highlightWithSearch = true;
        this.search = '';
        this.certificatesDecoded = [];
        this.isDecodeInProcess = true;
        this.isHasTests = false;
        this.isHasRoots = false;
        this.onClickDetails = (certificate, e) => {
            e.stopPropagation();
            this.certificateSelectedForDetails = certificate;
        };
        this.onClickModalClose = () => {
            this.certificateSelectedForDetails = undefined;
        };
        this.onSearchChange = (e) => {
            this.search = e.target.value
                .trim();
        };
    }
    componentWillLoad() {
        this.certificatesDecodeAndSet();
    }
    watchCertificates(newValue, oldValue) {
        /**
         * Prevent rerender after set the same `certificates` prop.
         */
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.certificatesDecodeAndSet();
        }
    }
    async certificatesDecodeAndSet() {
        let hasTests = false;
        let hasRoots = false;
        if (!Array.isArray(this.certificates)) {
            return;
        }
        const data = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const certificate of this.certificates) {
            try {
                const decoded = new X509Certificate(certificate.value);
                await decoded.getThumbprint('SHA-1');
                data.push({
                    body: decoded,
                    tests: certificate.tests,
                    name: certificate.name,
                });
                if (!hasRoots && decoded.isRoot) {
                    hasRoots = true;
                }
                if (!hasTests) {
                    if (certificate.tests
                        && (certificate.tests.expired || certificate.tests.revoked || certificate.tests.valid)) {
                        hasTests = true;
                    }
                }
            }
            catch (error) {
                console.error('Error certificate parse:', error);
            }
        }
        this.isHasTests = hasTests;
        this.isHasRoots = hasRoots;
        this.isDecodeInProcess = false;
        this.certificatesDecoded = data;
    }
    // eslint-disable-next-line class-methods-use-this
    onClickDownloadAsPem(certificate, e) {
        e.stopPropagation();
        Download.certificate.asPEM(certificate.body.exportAsPemFormatted(), certificate.name || certificate.body.commonName);
    }
    // eslint-disable-next-line class-methods-use-this
    onClickDownloadAsDer(certificate, e) {
        e.stopPropagation();
        Download.certificate.asPEM(certificate.body.exportAsHexFormatted(), certificate.name || certificate.body.commonName);
    }
    onClickRow(index) {
        const isExpandedRowClicked = this.expandedRow === index;
        this.expandedRow = isExpandedRowClicked
            ? undefined
            : index;
    }
    renderExpandedRow(certificate) {
        let colSpan = 4;
        if (this.isHasTests) {
            colSpan += 1;
        }
        if (!this.isHasRoots) {
            colSpan += 1;
        }
        return (h("tr", { class: "expanded_summary" },
            h("td", { colSpan: colSpan },
                h("peculiar-certificate-summary", { certificate: certificate, showIssuer: !certificate.isRoot }))));
    }
    // eslint-disable-next-line class-methods-use-this
    renderCertificateTests(tests) {
        if (!tests) {
            return null;
        }
        const elems = [];
        if (tests.valid) {
            elems.push((h("peculiar-button", { class: "button_table_action", href: tests.valid, target: "_blank" }, l10n.getString('valid'))));
        }
        if (tests.revoked) {
            elems.push((h("peculiar-button", { class: "button_table_action", href: tests.revoked, target: "_blank" }, l10n.getString('revoked'))));
        }
        if (tests.expired) {
            elems.push((h("peculiar-button", { class: "button_table_action", href: tests.expired, target: "_blank" }, l10n.getString('expired'))));
        }
        return elems;
    }
    renderContentState() {
        const searchHighlight = this.highlightWithSearch
            ? this.search
            : '';
        const content = [];
        this.certificatesDecoded.forEach((certificate, index) => {
            const isExpandedRow = index === this.expandedRow;
            const publicKeyValue = OIDs[certificate.body.signature.algorithm]
                || certificate.body.signature.algorithm;
            if (this.filterWithSearch && this.search) {
                const certificateStringForSearch = [
                    publicKeyValue,
                    certificate.body.issuerCommonName,
                    certificate.name,
                    certificate.body.commonName,
                    certificate.body.thumbprints['SHA-1'],
                ]
                    .join(' ')
                    .toLowerCase();
                if (certificateStringForSearch.indexOf(this.search.toLowerCase()) === -1) {
                    return;
                }
            }
            content.push([
                h("tr", { class: {
                        expanded: isExpandedRow,
                    }, onClick: this.onClickRow.bind(this, index), 
                    // eslint-disable-next-line react/no-array-index-key
                    key: index },
                    !this.isHasRoots && (h("td", null,
                        h("peculiar-typography", { class: "mobile_title", color: "grey_5" },
                            l10n.getString('issuer'),
                            ":"),
                        h("peculiar-typography", { class: "content" },
                            h("peculiar-highlight-words", { search: searchHighlight }, certificate.body.issuerCommonName)))),
                    h("td", null,
                        h("peculiar-typography", { class: "mobile_title", color: "grey_5" },
                            l10n.getString('name'),
                            ":"),
                        h("peculiar-typography", { class: "content" },
                            h("peculiar-highlight-words", { search: searchHighlight }, certificate.name || certificate.body.commonName))),
                    h("td", null,
                        h("peculiar-typography", { class: "mobile_title", color: "grey_5" },
                            l10n.getString('publicKey'),
                            ":"),
                        h("peculiar-typography", { class: "content" },
                            h("peculiar-highlight-words", { search: searchHighlight }, publicKeyValue))),
                    h("td", null,
                        h("peculiar-typography", { class: "mobile_title", color: "grey_5" },
                            l10n.getString('fingerprint'),
                            "\u00A0 (SHA-1):"),
                        h("peculiar-typography", { class: "content", monospace: true },
                            h("peculiar-highlight-words", { search: searchHighlight }, certificate.body.thumbprints['SHA-1']))),
                    h("td", { class: "align_center" },
                        h("peculiar-typography", { class: "mobile_title", color: "grey_5" },
                            l10n.getString('actions'),
                            ":"),
                        h("span", { class: "content" },
                            h("peculiar-button", { onClick: this.onClickDetails.bind(this, certificate.body), class: "button_table_action" }, l10n.getString('details')),
                            h("peculiar-button-split", { onClick: this.onClickDownloadAsPem.bind(this, certificate), actions: [{
                                        text: l10n.getString('download.der'),
                                        onClick: this.onClickDownloadAsDer.bind(this, certificate),
                                    }], class: "button_table_action" }, l10n.getString('download.pem')))),
                    this.isHasTests && (h("td", { class: "align_center" },
                        h("peculiar-typography", { class: "mobile_title", color: "grey_5" },
                            l10n.getString('testURLs'),
                            ":"),
                        h("span", { class: "content" }, this.renderCertificateTests(certificate.tests))))),
                isExpandedRow && this.renderExpandedRow(certificate.body),
            ]);
        });
        return content;
    }
    renderCertificateDetailsModal() {
        if (!this.certificateSelectedForDetails) {
            return null;
        }
        return (h("div", { class: "modal_wrapper" },
            h("div", { class: "modal_content" },
                h("div", { class: "modal_title" },
                    h("peculiar-typography", { type: "h4" }, l10n.getString('certificateDetails')),
                    h("button", { class: "modal_close", onClick: this.onClickModalClose, type: "button" },
                        h("svg", { width: "30", height: "30", viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg" },
                            h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.7204 14.375L21.0654 19.7185C21.3115 19.9658 21.3115 20.3693 21.0654 20.6154L20.615 21.0645C20.3689 21.3118 19.9667 21.3118 19.7181 21.0645L14.3744 15.721L9.03194 21.0645C8.78327 21.3118 8.3811 21.3118 8.13371 21.0645L7.68459 20.6154C7.43847 20.3693 7.43847 19.9658 7.68459 19.7185L13.0296 14.375L7.68459 9.03155C7.43847 8.78417 7.43847 8.38074 7.68459 8.13463L8.13371 7.68554C8.3811 7.43815 8.78327 7.43815 9.03194 7.68554L14.3744 13.029L19.7181 7.68554C19.9667 7.43815 20.3689 7.43815 20.615 7.68554L21.0654 8.13463C21.3115 8.38074 21.3115 8.78417 21.0654 9.03155L15.7204 14.375Z" })))),
                h("peculiar-certificate-viewer", { certificate: this.certificateSelectedForDetails }))));
    }
    renderSearch() {
        if (!this.filterWithSearch && !this.highlightWithSearch) {
            return null;
        }
        return (h("div", { class: "search_section" },
            h("input", { onInput: this.onSearchChange, type: "search", value: "", class: "input_search", disabled: !this.certificatesDecoded.length, placeholder: "Search" })));
    }
    // eslint-disable-next-line class-methods-use-this
    renderEmptyState() {
        return (h("tr", null,
            h("td", { class: "status_wrapper", colSpan: 5 },
                h("peculiar-typography", { type: "b1", align: "center" }, "There are no certificates available."))));
    }
    renderEmptySearchState() {
        return (h("tr", null,
            h("td", { class: "status_wrapper", colSpan: 5 },
                h("peculiar-typography", { type: "b1", align: "center" },
                    "No results found for \u201C",
                    this.search,
                    "\u201C"))));
    }
    // eslint-disable-next-line class-methods-use-this
    renderLoadingState() {
        return (h("div", { class: "loading_container" },
            h("peculiar-circular-progress", null)));
    }
    renderBody() {
        if (this.isDecodeInProcess) {
            return null;
        }
        if (!this.certificatesDecoded.length) {
            return this.renderEmptyState();
        }
        const contentState = this.renderContentState();
        if (this.search && !contentState.length) {
            return this.renderEmptySearchState();
        }
        return contentState;
    }
    render() {
        return (h(Host, null,
            this.renderSearch(),
            h("table", { class: {
                    m_extra: this.isHasTests || !this.isHasRoots,
                } },
                h("thead", null,
                    h("tr", null,
                        !this.isHasRoots && (h("th", { class: "col_issuer" },
                            h("peculiar-typography", { type: "h7", align: "left" }, l10n.getString('issuer')))),
                        h("th", { class: "col_name" },
                            h("peculiar-typography", { type: "h7", align: "left" }, l10n.getString('name'))),
                        h("th", { class: "col_public_key" },
                            h("peculiar-typography", { type: "h7", align: "left" }, l10n.getString('publicKey'))),
                        h("th", { class: "col_fingerprint" },
                            h("peculiar-typography", { type: "h7", align: "left" },
                                l10n.getString('fingerprint'),
                                "\u00A0 (SHA-1)")),
                        h("th", { class: "col_actions" },
                            h("peculiar-typography", { type: "h7", align: "center" }, l10n.getString('actions'))),
                        this.isHasTests && (h("th", { class: "col_tests" },
                            h("peculiar-typography", { type: "h7", align: "center" }, l10n.getString('testURLs')))))),
                h("tbody", null, this.renderBody())),
            this.renderCertificateDetailsModal(),
            this.isDecodeInProcess && this.renderLoadingState()));
    }
    static get is() { return "peculiar-certificates-viewer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["certificates-viewer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["certificates-viewer.css"]
    }; }
    static get properties() { return {
        "certificates": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ICertificate[]",
                "resolved": "ICertificate[]",
                "references": {
                    "ICertificate": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "List of certificates values for decode and show in the list.\n<br />\n**NOTE**: If you do not provide a `name` value when\ninvocing the component it will take the first Subject CN value.\n<br />\n**NOTE**: If you do not provide a `tests` this column will be ommited from the rendered page.\n<br />\n**NOTE**: If the supplied certificates are self-signed the issuer column will be ommited."
            },
            "defaultValue": "[]"
        },
        "filterWithSearch": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Use filter in the list when search is changed."
            },
            "attribute": "filter-with-search",
            "reflect": false,
            "defaultValue": "true"
        },
        "highlightWithSearch": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Use highlight chapters in the list when search is changed."
            },
            "attribute": "highlight-with-search",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "search": {},
        "certificatesDecoded": {},
        "expandedRow": {},
        "certificateSelectedForDetails": {},
        "isDecodeInProcess": {}
    }; }
    static get watchers() { return [{
            "propName": "certificates",
            "methodName": "watchCertificates"
        }]; }
}
