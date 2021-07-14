/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Prop, State, } from '@stencil/core';
export class ButtonSplit {
    constructor() {
        this.fill = 'stroke';
        this.actions = [];
        this.open = false;
        this.onClickSplitButton = (event) => {
            event.stopPropagation();
            this.open = !this.open;
        };
    }
    onClickActiveButton(action, event) {
        this.open = false;
        action(event);
    }
    renderActiveSplitState() {
        if (!this.open) {
            return null;
        }
        return (h("div", { class: "button_split_container" }, this.actions.map((action) => (h("peculiar-button", { fill: "fill", class: "button_split_action", onClick: this.onClickActiveButton.bind(this, action.onClick) }, action.text)))));
    }
    render() {
        return (h("div", { class: {
                button_split: true,
            } },
            h("peculiar-button", { fill: this.fill, onClick: this.onClick },
                h("slot", null)),
            h("peculiar-button", { fill: this.fill, onClick: this.onClickSplitButton, class: {
                    button_split_with_icon: true,
                    m_open: this.open,
                } },
                h("svg", { viewBox: "0 0 7 5", xmlns: "http://www.w3.org/2000/svg", class: "button_split_icon" },
                    h("path", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z" }))),
            this.renderActiveSplitState()));
    }
    static get is() { return "peculiar-button-split"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button-split.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button-split.css"]
    }; }
    static get properties() { return {
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "fill": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'stroke' | 'fill'",
                "resolved": "\"fill\" | \"stroke\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fill",
            "reflect": false,
            "defaultValue": "'stroke'"
        },
        "actions": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "IAction[]",
                "resolved": "IAction[]",
                "references": {
                    "IAction": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        }
    }; }
    static get states() { return {
        "open": {}
    }; }
}
