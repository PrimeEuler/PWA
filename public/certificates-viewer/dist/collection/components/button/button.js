/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Prop, } from '@stencil/core';
export class Button {
    constructor() {
        this.fill = 'stroke';
        this.handleClick = (event) => {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (this.onClick) {
                this.onClick(event);
            }
        };
    }
    render() {
        const isLink = !!this.href;
        const TagType = isLink ? 'a' : 'button';
        return (h(TagType, { class: {
                button: true,
                button_stroke: this.fill === 'stroke',
                button_fill: this.fill === 'fill',
                button_disabled: this.disabled,
            }, disabled: this.disabled, type: !isLink && 'button', href: isLink && this.href, target: isLink && this.target ? this.target : null, rel: isLink && 'noreferrer noopener', onClick: this.handleClick, part: "base" },
            h("span", { part: "label", class: "button_label" },
                h("slot", null))));
    }
    static get is() { return "peculiar-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "fill": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'stroke' | 'fill'",
                "resolved": "\"fill\" | \"stroke\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fill",
            "reflect": false,
            "defaultValue": "'stroke'"
        },
        "disabled": {
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
                "text": "Set to true to disable the button."
            },
            "attribute": "disabled",
            "reflect": true
        },
        "href": {
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
                "tags": [],
                "text": "When set, the underlying button will be rendered as an `<a>` with\nthis `href` instead of a `<button>`."
            },
            "attribute": "href",
            "reflect": false
        },
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'_blank' | '_parent' | '_self' | '_top'",
                "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Tells the browser where to open the link. Only used when `href` is set."
            },
            "attribute": "target",
            "reflect": false
        },
        "onClick": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(event: MouseEvent) => void",
                "resolved": "(event: MouseEvent) => void",
                "references": {
                    "MouseEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
