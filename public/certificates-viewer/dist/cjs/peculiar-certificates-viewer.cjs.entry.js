'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2973f90a.js');
const download = require('./download-a176e2ff.js');
const l10n = require('./l10n-3b052a56.js');

const certificatesViewerCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;min-width:280px;overflow:auto;position:relative;background:white;background:rgba(var(--pv-color-light-rgb), 1)}table{width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0}table thead{background-color:rgba(53, 132, 247, 0.07);background-color:rgba(var(--pv-color-primary-rgb), 0.07)}table tr td{vertical-align:middle}table tbody tr:not(.expanded_summary){cursor:pointer}table tr{border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1)}table th{padding:15px 10px;border-width:1px;border-style:solid;border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1)}table td{padding:8px 10px;border-width:1px;border-style:solid;border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1)}table .col_issuer,table .col_name,table .col_public_key{width:16%}table .col_actions,table .col_tests{width:18%}table.m_extra .col_issuer,table.m_extra .col_name,table.m_extra .col_public_key{width:12%}table.m_extra .col_actions,table.m_extra .col_tests{width:17%}table tr.expanded td:not(:last-child){border-right-color:transparent}table tr.expanded td{border-bottom-color:transparent}.expanded{border-bottom-color:transparent;background-color:rgba(53, 132, 247, 0.04);background-color:rgba(var(--pv-color-primary-rgb), 0.04)}table tr.expanded_summary{background-color:rgba(53, 132, 247, 0.04);background-color:rgba(var(--pv-color-primary-rgb), 0.04)}table tr.expanded_summary td{vertical-align:top;padding:10px 20px 26px}@-webkit-keyframes fadeIn{0%{opacity:0.001}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0.001}100%{opacity:1}}.modal_wrapper{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:auto;padding:10px;text-align:center;background:rgba(42, 49, 52, 0.9);background:rgba(var(--pv-color-dark-rgb), 0.9);-webkit-animation:fadeIn 300ms;animation:fadeIn 300ms}.modal_wrapper:before{display:inline-block;vertical-align:middle;width:0;height:100%;content:\"\"}.modal_content{position:relative;display:inline-block;vertical-align:middle;width:100%;max-width:900px;text-align:left;border-radius:3px;overflow:hidden;background-color:white;background-color:rgba(var(--pv-color-light-rgb), 1)}.modal_title{background-color:rgba(53, 132, 247, 0.07);background-color:rgba(var(--pv-color-primary-rgb), 0.07);border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1);border-bottom-width:1px;border-bottom-style:solid;padding:17px 60px 17px 20px;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.modal_close{cursor:pointer;border:none;background-color:transparent;position:absolute;top:0;bottom:0;right:0;padding:0 12px;-webkit-transition:opacity 100ms;transition:opacity 100ms;outline:none}.modal_close:hover{opacity:0.6}.modal_close svg{fill:#2a3134;fill:rgba(var(--pv-color-dark-rgb), 1)}.button_table_action{margin:2px}.mobile_title{display:none}.status_wrapper{height:85px;text-align:center;pointer-events:none}.search_section{background-color:rgba(53, 132, 247, 0.07);background-color:rgba(var(--pv-color-primary-rgb), 0.07);border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1);height:50px;padding:10px;border-width:1px 1px 0 1px;border-style:solid}.input_search{height:100%;width:100%;border-radius:3px;border-width:1px;border-style:solid;padding:0 14px;font-size:12px;outline:none;border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1);color:#2a3134;color:rgba(var(--pv-color-dark-rgb), 1)}.input_search::-moz-placeholder{color:#d1d5d9;color:rgba(var(--pv-color-grey_3-rgb), 1)}.input_search:-ms-input-placeholder{color:#d1d5d9;color:rgba(var(--pv-color-grey_3-rgb), 1)}.input_search::-webkit-input-placeholder{color:#d1d5d9;color:rgba(var(--pv-color-grey_3-rgb), 1)}.input_search::-ms-input-placeholder{color:#d1d5d9;color:rgba(var(--pv-color-grey_3-rgb), 1)}.input_search::placeholder{color:#d1d5d9;color:rgba(var(--pv-color-grey_3-rgb), 1)}.loading_container{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(42, 49, 52, 0.3);background:rgba(var(--pv-color-dark-rgb), 0.3);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.align_center{text-align:center}@media (hover: hover){table tbody tr:not(.expanded_summary):hover{background-color:rgba(53, 132, 247, 0.04);background-color:rgba(var(--pv-color-primary-rgb), 0.04)}}@media (max-width: 900px){table,tbody,tr,td{display:block}thead{display:none}tr{padding:0 15px;border-width:1px;border-style:solid}tr:not(:first-child){margin-top:-1px}tr:not(.expanded_summary) td:first-child{border:none !important}table td{padding-left:0;padding-right:0;border-width:1px 0 0 0 !important;border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr.expanded_summary td{padding:15px 0}.mobile_title{display:inline-block;width:90px;vertical-align:middle}.modal_title{padding:17px 60px 17px 15px}.content{display:inline-block;width:calc(100% - 90px);vertical-align:middle;text-align:left}.expanded_summary{border-top-color:transparent;padding-bottom:10px}.expanded_summary td:before{content:none}.status_wrapper{height:266px;display:table-cell}.search_section{height:60px;padding:15px}.align_center{text-align:inherit}}";

const CertificatesViewer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
                const decoded = new download.X509Certificate(certificate.value);
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
        download.Download.certificate.asPEM(certificate.body.exportAsPemFormatted(), certificate.name || certificate.body.commonName);
    }
    // eslint-disable-next-line class-methods-use-this
    onClickDownloadAsDer(certificate, e) {
        e.stopPropagation();
        download.Download.certificate.asPEM(certificate.body.exportAsHexFormatted(), certificate.name || certificate.body.commonName);
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
        return (index.h("tr", { class: "expanded_summary" }, index.h("td", { colSpan: colSpan }, index.h("peculiar-certificate-summary", { certificate: certificate, showIssuer: !certificate.isRoot }))));
    }
    // eslint-disable-next-line class-methods-use-this
    renderCertificateTests(tests) {
        if (!tests) {
            return null;
        }
        const elems = [];
        if (tests.valid) {
            elems.push((index.h("peculiar-button", { class: "button_table_action", href: tests.valid, target: "_blank" }, l10n.l10n.getString('valid'))));
        }
        if (tests.revoked) {
            elems.push((index.h("peculiar-button", { class: "button_table_action", href: tests.revoked, target: "_blank" }, l10n.l10n.getString('revoked'))));
        }
        if (tests.expired) {
            elems.push((index.h("peculiar-button", { class: "button_table_action", href: tests.expired, target: "_blank" }, l10n.l10n.getString('expired'))));
        }
        return elems;
    }
    renderContentState() {
        const searchHighlight = this.highlightWithSearch
            ? this.search
            : '';
        const content = [];
        this.certificatesDecoded.forEach((certificate, index$1) => {
            const isExpandedRow = index$1 === this.expandedRow;
            const publicKeyValue = download.OIDs[certificate.body.signature.algorithm]
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
                index.h("tr", { class: {
                        expanded: isExpandedRow,
                    }, onClick: this.onClickRow.bind(this, index$1),
                    // eslint-disable-next-line react/no-array-index-key
                    key: index$1 }, !this.isHasRoots && (index.h("td", null, index.h("peculiar-typography", { class: "mobile_title", color: "grey_5" }, l10n.l10n.getString('issuer'), ":"), index.h("peculiar-typography", { class: "content" }, index.h("peculiar-highlight-words", { search: searchHighlight }, certificate.body.issuerCommonName)))), index.h("td", null, index.h("peculiar-typography", { class: "mobile_title", color: "grey_5" }, l10n.l10n.getString('name'), ":"), index.h("peculiar-typography", { class: "content" }, index.h("peculiar-highlight-words", { search: searchHighlight }, certificate.name || certificate.body.commonName))), index.h("td", null, index.h("peculiar-typography", { class: "mobile_title", color: "grey_5" }, l10n.l10n.getString('publicKey'), ":"), index.h("peculiar-typography", { class: "content" }, index.h("peculiar-highlight-words", { search: searchHighlight }, publicKeyValue))), index.h("td", null, index.h("peculiar-typography", { class: "mobile_title", color: "grey_5" }, l10n.l10n.getString('fingerprint'), "\u00A0 (SHA-1):"), index.h("peculiar-typography", { class: "content", monospace: true }, index.h("peculiar-highlight-words", { search: searchHighlight }, certificate.body.thumbprints['SHA-1']))), index.h("td", { class: "align_center" }, index.h("peculiar-typography", { class: "mobile_title", color: "grey_5" }, l10n.l10n.getString('actions'), ":"), index.h("span", { class: "content" }, index.h("peculiar-button", { onClick: this.onClickDetails.bind(this, certificate.body), class: "button_table_action" }, l10n.l10n.getString('details')), index.h("peculiar-button-split", { onClick: this.onClickDownloadAsPem.bind(this, certificate), actions: [{
                            text: l10n.l10n.getString('download.der'),
                            onClick: this.onClickDownloadAsDer.bind(this, certificate),
                        }], class: "button_table_action" }, l10n.l10n.getString('download.pem')))), this.isHasTests && (index.h("td", { class: "align_center" }, index.h("peculiar-typography", { class: "mobile_title", color: "grey_5" }, l10n.l10n.getString('testURLs'), ":"), index.h("span", { class: "content" }, this.renderCertificateTests(certificate.tests))))),
                isExpandedRow && this.renderExpandedRow(certificate.body),
            ]);
        });
        return content;
    }
    renderCertificateDetailsModal() {
        if (!this.certificateSelectedForDetails) {
            return null;
        }
        return (index.h("div", { class: "modal_wrapper" }, index.h("div", { class: "modal_content" }, index.h("div", { class: "modal_title" }, index.h("peculiar-typography", { type: "h4" }, l10n.l10n.getString('certificateDetails')), index.h("button", { class: "modal_close", onClick: this.onClickModalClose, type: "button" }, index.h("svg", { width: "30", height: "30", viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.7204 14.375L21.0654 19.7185C21.3115 19.9658 21.3115 20.3693 21.0654 20.6154L20.615 21.0645C20.3689 21.3118 19.9667 21.3118 19.7181 21.0645L14.3744 15.721L9.03194 21.0645C8.78327 21.3118 8.3811 21.3118 8.13371 21.0645L7.68459 20.6154C7.43847 20.3693 7.43847 19.9658 7.68459 19.7185L13.0296 14.375L7.68459 9.03155C7.43847 8.78417 7.43847 8.38074 7.68459 8.13463L8.13371 7.68554C8.3811 7.43815 8.78327 7.43815 9.03194 7.68554L14.3744 13.029L19.7181 7.68554C19.9667 7.43815 20.3689 7.43815 20.615 7.68554L21.0654 8.13463C21.3115 8.38074 21.3115 8.78417 21.0654 9.03155L15.7204 14.375Z" })))), index.h("peculiar-certificate-viewer", { certificate: this.certificateSelectedForDetails }))));
    }
    renderSearch() {
        if (!this.filterWithSearch && !this.highlightWithSearch) {
            return null;
        }
        return (index.h("div", { class: "search_section" }, index.h("input", { onInput: this.onSearchChange, type: "search", value: "", class: "input_search", disabled: !this.certificatesDecoded.length, placeholder: "Search" })));
    }
    // eslint-disable-next-line class-methods-use-this
    renderEmptyState() {
        return (index.h("tr", null, index.h("td", { class: "status_wrapper", colSpan: 5 }, index.h("peculiar-typography", { type: "b1", align: "center" }, "There are no certificates available."))));
    }
    renderEmptySearchState() {
        return (index.h("tr", null, index.h("td", { class: "status_wrapper", colSpan: 5 }, index.h("peculiar-typography", { type: "b1", align: "center" }, "No results found for \u201C", this.search, "\u201C"))));
    }
    // eslint-disable-next-line class-methods-use-this
    renderLoadingState() {
        return (index.h("div", { class: "loading_container" }, index.h("peculiar-circular-progress", null)));
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
        return (index.h(index.Host, null, this.renderSearch(), index.h("table", { class: {
                m_extra: this.isHasTests || !this.isHasRoots,
            } }, index.h("thead", null, index.h("tr", null, !this.isHasRoots && (index.h("th", { class: "col_issuer" }, index.h("peculiar-typography", { type: "h7", align: "left" }, l10n.l10n.getString('issuer')))), index.h("th", { class: "col_name" }, index.h("peculiar-typography", { type: "h7", align: "left" }, l10n.l10n.getString('name'))), index.h("th", { class: "col_public_key" }, index.h("peculiar-typography", { type: "h7", align: "left" }, l10n.l10n.getString('publicKey'))), index.h("th", { class: "col_fingerprint" }, index.h("peculiar-typography", { type: "h7", align: "left" }, l10n.l10n.getString('fingerprint'), "\u00A0 (SHA-1)")), index.h("th", { class: "col_actions" }, index.h("peculiar-typography", { type: "h7", align: "center" }, l10n.l10n.getString('actions'))), this.isHasTests && (index.h("th", { class: "col_tests" }, index.h("peculiar-typography", { type: "h7", align: "center" }, l10n.l10n.getString('testURLs')))))), index.h("tbody", null, this.renderBody())), this.renderCertificateDetailsModal(), this.isDecodeInProcess && this.renderLoadingState()));
    }
    static get watchers() { return {
        "certificates": ["watchCertificates"]
    }; }
};
CertificatesViewer.style = certificatesViewerCss;

exports.peculiar_certificates_viewer = CertificatesViewer;
