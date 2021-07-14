/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h, Prop, } from '@stencil/core';
import { dateShort, l10n } from '../../utils';
export class CertificateSummary {
    constructor() {
        this.showIssuer = true;
    }
    // eslint-disable-next-line class-methods-use-this
    renderRow(name, value, monospace) {
        return (h("tr", null,
            h("td", null,
                h("peculiar-typography", { color: "grey_5" },
                    name,
                    ":")),
            h("td", null,
                h("peculiar-typography", { class: "meta_value", monospace: monospace }, value))));
    }
    render() {
        return (h(Host, null,
            h("table", null,
                h("tbody", null,
                    this.renderRow(l10n.getString('subjectName'), this.certificate.subjectToString()),
                    this.showIssuer && this.renderRow(l10n.getString('issuerName'), this.certificate.issuerToString()),
                    this.renderRow(l10n.getString('serialNumber'), this.certificate.serialNumber, true),
                    this.renderRow(l10n.getString('version'), this.certificate.version),
                    this.renderRow(l10n.getString('validity'), this.certificate.validity),
                    this.renderRow(l10n.getString('issued'), dateShort(this.certificate.notBefore)),
                    this.renderRow(l10n.getString('expired'), dateShort(this.certificate.notAfter))))));
    }
    static get is() { return "peculiar-certificate-summary"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["certificate-summary.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["certificate-summary.css"]
    }; }
    static get properties() { return {
        "certificate": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "X509Certificate",
                "resolved": "X509Certificate",
                "references": {
                    "X509Certificate": {
                        "location": "import",
                        "path": "../../crypto"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "showIssuer": {
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
                "text": ""
            },
            "attribute": "show-issuer",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
}
