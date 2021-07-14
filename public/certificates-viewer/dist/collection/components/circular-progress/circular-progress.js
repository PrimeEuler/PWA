/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h, Prop, } from '@stencil/core';
export class CircularProgress {
    constructor() {
        /**
         * Width/height of progress circle.
         */
        this.size = 24;
        /**
         * Stroke width of progress bar circle.
         */
        this.width = 4;
        this.box = 50;
    }
    render() {
        return (h(Host, null,
            h("div", { class: "circle_progress", style: {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                } },
                h("svg", { class: "circle_progress_svg", viewBox: `0 0 ${this.box} ${this.box}` },
                    h("circle", { class: "circle_progress_backdrop", cx: this.box / 2, cy: this.box / 2, r: (this.box / 2) - 5, fill: "none", style: {
                            strokeWidth: `${this.width}px`,
                        } }),
                    h("circle", { class: "circle_progress_circle", cx: this.box / 2, cy: this.box / 2, r: (this.box / 2) - 5, fill: "none", style: {
                            strokeWidth: `${this.width}px`,
                        } })))));
    }
    static get is() { return "peculiar-circular-progress"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["circular-progress.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["circular-progress.css"]
    }; }
    static get properties() { return {
        "size": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Width/height of progress circle."
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "24"
        },
        "width": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Stroke width of progress bar circle."
            },
            "attribute": "width",
            "reflect": false,
            "defaultValue": "4"
        }
    }; }
}
