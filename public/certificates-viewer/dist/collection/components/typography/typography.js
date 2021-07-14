/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Prop, } from '@stencil/core';
export class PeculiarTypography {
    constructor() {
        /**
         * Typography type.
         */
        this.type = 'b3';
        /**
         * Component color from theme.
         */
        this.color = 'dark';
    }
    render() {
        const TagType = this.type && this.type.includes('h') ? this.type : 'p';
        return (h(TagType, { class: {
                typography: true,
                [`typography_type_${this.type || 'b3'}`]: true,
                [`typography_color_${this.color || 'dark'}`]: true,
                [`typography_align_${this.align}`]: !!this.align,
                typography_ellipsis: this.ellipsis,
                typography_monospace: this.monospace,
            } },
            h("slot", null)));
    }
    static get is() { return "peculiar-typography"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["typography.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["typography.css"]
    }; }
    static get properties() { return {
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
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ColorType",
                "resolved": "\"attention\" | \"dark\" | \"grey_3\" | \"grey_5\" | \"light\" | \"primary\"",
                "references": {
                    "ColorType": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Component color from theme."
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'dark'"
        },
        "align": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'left' | 'center' | 'right'",
                "resolved": "\"center\" | \"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Text align."
            },
            "attribute": "align",
            "reflect": false
        },
        "ellipsis": {
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
                "text": "If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis."
            },
            "attribute": "ellipsis",
            "reflect": false
        },
        "monospace": {
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
            "attribute": "monospace",
            "reflect": false
        }
    }; }
}
