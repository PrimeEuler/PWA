/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h, Prop, State, Watch, } from '@stencil/core';
import { X509AttributeCertificate } from '../../crypto';
import { Signature } from '../certificate-viewer/signature';
import { Attributes } from '../certificate-viewer/attributes';
import { Thumbprints } from '../certificate-viewer/thumbprints';
import { Extensions } from '../certificate-viewer/extensions';
import { BasicInformation } from '../certificate-viewer/basic_information';
import { Miscellaneous } from '../certificate-viewer/miscellaneous';
import { Issuer } from './issuer';
import { Holder } from './holder';
export class AttributeCertificateViewer {
    constructor() {
        this.isDecodeInProcess = true;
        this.getAuthKeyIdParentLink = (value) => { var _a; return (_a = this.authKeyIdParentLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getAuthKeyIdSiblingsLink = (value) => { var _a; return (_a = this.authKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getSubjectKeyIdChildrenLink = (value) => { var _a; return (_a = this.subjectKeyIdChildrenLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
        this.getSubjectKeyIdSiblingsLink = (value) => { var _a; return (_a = this.subjectKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
    }
    componentWillLoad() {
        this.decodeCertificate(this.certificate);
    }
    async decodeCertificate(certificate) {
        this.isDecodeInProcess = true;
        try {
            if (certificate instanceof X509AttributeCertificate) {
                this.certificateDecoded = certificate;
            }
            else if (typeof certificate === 'string') {
                this.certificateDecoded = new X509AttributeCertificate(certificate);
            }
            else {
                return;
            }
            this.certificateDecoded.parseExtensions();
            this.certificateDecoded.parseAttributes();
            await this.certificateDecoded.getThumbprint('SHA-1');
            await this.certificateDecoded.getThumbprint('SHA-256');
        }
        catch (error) {
            this.certificateDecodeError = error;
            console.error('Error certificate parse:', error);
        }
        this.isDecodeInProcess = false;
    }
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    watchCertificateAndDecode(newValue, oldValue) {
        if (typeof newValue === 'string' && typeof oldValue === 'string') {
            if (newValue !== oldValue) {
                this.decodeCertificate(newValue);
            }
            return;
        }
        if (newValue instanceof X509AttributeCertificate
            && oldValue instanceof X509AttributeCertificate) {
            if (newValue.serialNumber !== oldValue.serialNumber) {
                this.decodeCertificate(newValue);
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    getLEILink(value) {
        return `https://search.gleif.org/#/record/${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getDNSNameLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getIPAddressLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    renderErrorState() {
        return (h("div", { class: "status_wrapper" },
            h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is error for attribute certificate decode.")));
    }
    // eslint-disable-next-line class-methods-use-this
    renderEmptyState() {
        return (h("div", { class: "status_wrapper" },
            h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is no attribute certificate available.")));
    }
    render() {
        if (this.certificateDecodeError) {
            return this.renderErrorState();
        }
        if (!this.certificateDecoded) {
            return this.renderEmptyState();
        }
        return (h(Host, null,
            h("table", null,
                h(BasicInformation, Object.assign({}, this.certificateDecoded)),
                h(Issuer, { issuer: this.certificateDecoded.issuer }),
                h(Holder, { holder: this.certificateDecoded.holder }),
                h(Signature, { signature: this.certificateDecoded.signature }),
                h(Thumbprints, { thumbprints: this.certificateDecoded.thumbprints }),
                h(Attributes, { attributes: this.certificateDecoded.attributes, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }),
                h(Extensions, { extensions: this.certificateDecoded.extensions, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }),
                this.download && (h(Miscellaneous, { certificate: this.certificateDecoded })))));
    }
    static get is() { return "peculiar-attribute-certificate-viewer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["../certificate-viewer/certificate-viewer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["../certificate-viewer/certificate-viewer.css"]
    }; }
    static get properties() { return {
        "certificate": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "AttributeCertificateProp",
                "resolved": "X509AttributeCertificate | string",
                "references": {
                    "AttributeCertificateProp": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The certificate value for decode and show details. Use PEM or DER."
            },
            "attribute": "certificate",
            "reflect": false
        },
        "download": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "If `true` - component will show split-button to download certificate as PEM or DER."
            },
            "attribute": "download",
            "reflect": false
        },
        "authKeyIdParentLink": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": " https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}",
                        "name": "example"
                    }],
                "text": "Authority Key Identifier extension parent link.\n<br />\n**NOTE**: `{{authKeyId}}` will be replaced to value from the extension."
            },
            "attribute": "auth-key-id-parent-link",
            "reflect": true
        },
        "authKeyIdSiblingsLink": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": " https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}",
                        "name": "example"
                    }],
                "text": "Authority Key Identifier extension siblings link.\n<br />\n**NOTE**: `{{authKeyId}}` will be replaced to value from the extension."
            },
            "attribute": "auth-key-id-siblings-link",
            "reflect": true
        },
        "subjectKeyIdChildrenLink": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": " https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}",
                        "name": "example"
                    }],
                "text": "Subject Key Identifier extension children link.\n<br />\n**NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension."
            },
            "attribute": "subject-key-id-children-link",
            "reflect": true
        },
        "subjectKeyIdSiblingsLink": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": " https://some.com/{{subjectKeyId}}",
                        "name": "example"
                    }],
                "text": "Subject Key Identifier extension siblings link.\n<br />\n**NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension."
            },
            "attribute": "subject-key-id-siblings-link",
            "reflect": true
        }
    }; }
    static get states() { return {
        "isDecodeInProcess": {}
    }; }
    static get watchers() { return [{
            "propName": "certificate",
            "methodName": "watchCertificateAndDecode"
        }]; }
}
