/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Prop, } from '@stencil/core';
export class Link {
    constructor() {
        /**
         * Typography type.
         */
        this.type = 'b3';
    }
    render() {
        return (h("a", { href: this.href, target: "_blank", rel: "noreferrer noopener", class: {
                link: true,
                [`link_type_${this.type || 'b3'}`]: true,
            } },
            h("slot", null)));
    }
    static get is() { return "peculiar-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["link.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["link.css"]
    }; }
    static get properties() { return {
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "href",
            "reflect": true
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'h4' | 'h6' | 'h7' | 'b1' | 'b3'",
                "resolved": "\"b1\" | \"b3\" | \"h4\" | \"h6\" | \"h7\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Typography type."
            },
            "attribute": "type",
            "reflect": true,
            "defaultValue": "'b3'"
        }
    }; }
}
