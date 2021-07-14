'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2973f90a.js');
const l10n = require('./l10n-3b052a56.js');

const certificateSummaryCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%}td{border:none;padding:0}table{width:100%;border-spacing:0;border-collapse:collapse}td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td:first-child{width:130px;padding-right:10px}table td:last-child{width:calc(100% - 130px)}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{width:100%}}";

const CertificateSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showIssuer = true;
    }
    // eslint-disable-next-line class-methods-use-this
    renderRow(name, value, monospace) {
        return (index.h("tr", null, index.h("td", null, index.h("peculiar-typography", { color: "grey_5" }, name, ":")), index.h("td", null, index.h("peculiar-typography", { class: "meta_value", monospace: monospace }, value))));
    }
    render() {
        return (index.h(index.Host, null, index.h("table", null, index.h("tbody", null, this.renderRow(l10n.l10n.getString('subjectName'), this.certificate.subjectToString()), this.showIssuer && this.renderRow(l10n.l10n.getString('issuerName'), this.certificate.issuerToString()), this.renderRow(l10n.l10n.getString('serialNumber'), this.certificate.serialNumber, true), this.renderRow(l10n.l10n.getString('version'), this.certificate.version), this.renderRow(l10n.l10n.getString('validity'), this.certificate.validity), this.renderRow(l10n.l10n.getString('issued'), l10n.dateShort(this.certificate.notBefore)), this.renderRow(l10n.l10n.getString('expired'), l10n.dateShort(this.certificate.notAfter))))));
    }
};
CertificateSummary.style = certificateSummaryCss;

const circularProgressCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%}@-webkit-keyframes circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes circular-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:100, 200;stroke-dashoffset:-15}to{stroke-dasharray:100, 200;stroke-dashoffset:-120}}@keyframes circular-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:100, 200;stroke-dashoffset:-15}to{stroke-dasharray:100, 200;stroke-dashoffset:-120}}.circle_progress{margin:0 auto}.circle_progress_svg{-webkit-animation:circular-rotate 1.4s linear infinite;animation:circular-rotate 1.4s linear infinite}.circle_progress_circle{stroke-linecap:round;-webkit-animation:circular-dash 1.4s ease-in-out infinite;animation:circular-dash 1.4s ease-in-out infinite;stroke-dasharray:80, 200;stroke-dashoffset:0;stroke:#3584f7;stroke:rgba(var(--pv-color-primary-rgb), 1)}.circle_progress_backdrop{stroke:#d1d5d9;stroke:rgba(var(--pv-color-grey_3-rgb), 1)}";

const CircularProgress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, null, index.h("div", { class: "circle_progress", style: {
                width: `${this.size}px`,
                height: `${this.size}px`,
            } }, index.h("svg", { class: "circle_progress_svg", viewBox: `0 0 ${this.box} ${this.box}` }, index.h("circle", { class: "circle_progress_backdrop", cx: this.box / 2, cy: this.box / 2, r: (this.box / 2) - 5, fill: "none", style: {
                strokeWidth: `${this.width}px`,
            } }), index.h("circle", { class: "circle_progress_circle", cx: this.box / 2, cy: this.box / 2, r: (this.box / 2) - 5, fill: "none", style: {
                strokeWidth: `${this.width}px`,
            } })))));
    }
};
CircularProgress.style = circularProgressCss;

const highlightWordsCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline}::slotted(mark){background-color:rgba(247, 168, 49, 0.4);background-color:rgba(var(--pv-color-attention-rgb), 0.4)}";

const HighlightWords = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, null, index.h("slot", null)));
    }
    get host() { return index.getElement(this); }
};
HighlightWords.style = highlightWordsCss;

exports.peculiar_certificate_summary = CertificateSummary;
exports.peculiar_circular_progress = CircularProgress;
exports.peculiar_highlight_words = HighlightWords;
