/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h, Prop, Event, Listen, } from '@stencil/core';
export class TextHider {
    constructor() {
        this.opened = false;
    }
    textExpandHandler() {
        this.opened = !this.opened;
    }
    render() {
        return (h(Host, null,
            h("div", { class: "root" },
                h("div", { class: {
                        text: true,
                        m_opened: this.opened,
                    } },
                    h("slot", null)),
                h("div", { class: "action" },
                    h("peculiar-button", { onClick: this.textExpand.emit, class: {
                            button_action: true,
                            m_opened: this.opened,
                        }, fill: this.opened ? 'fill' : 'stroke' },
                        h("svg", { viewBox: "0 0 7 5", xmlns: "http://www.w3.org/2000/svg", class: "expand_icon" },
                            h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", fill: "currentColor", d: "M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z" })))))));
    }
    static get is() { return "peculiar-text-hider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["text-hider.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["text-hider.css"]
    }; }
    static get properties() { return {
        "opened": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "opened",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "textExpand",
            "name": "textExpand",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get listeners() { return [{
            "name": "textExpand",
            "method": "textExpandHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
