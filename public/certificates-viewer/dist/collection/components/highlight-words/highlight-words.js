/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h, Element, Prop, } from '@stencil/core';
export class HighlightWords {
    constructor() {
        this.tag = 'mark';
    }
    componentDidLoad() {
        this.handleHighlightSearch();
    }
    componentDidUpdate() {
        this.handleHighlightSearch();
    }
    handleHighlightSearch() {
        const basicString = this.resetHighlightSearch(this.host.innerHTML);
        let result = basicString;
        if (this.search) {
            const substring = new RegExp(`(${this.search})`, 'gi');
            result = basicString.replace(substring, `<${this.tag}>$1</${this.tag}>`);
        }
        this.host.innerHTML = result;
    }
    resetHighlightSearch(source) {
        // eslint-disable-next-line no-useless-escape
        const substring = new RegExp(`<\/?${this.tag}>`, 'g');
        return source.replace(substring, '');
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "peculiar-highlight-words"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["highlight-words.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["highlight-words.css"]
    }; }
    static get properties() { return {
        "search": {
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
            "attribute": "search",
            "reflect": false
        }
    }; }
    static get elementRef() { return "host"; }
}
