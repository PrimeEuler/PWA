import { r as registerInstance, h, H as Host, g as getElement } from './index-5ef692cc.js';
import { l as l10n, a as dateShort } from './l10n-f34672bf.js';
var certificateSummaryCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%}td{border:none;padding:0}table{width:100%;border-spacing:0;border-collapse:collapse}td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td:first-child{width:130px;padding-right:10px}table td:last-child{width:calc(100% - 130px)}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{width:100%}}";
var CertificateSummary = /** @class */ (function () {
    function CertificateSummary(hostRef) {
        registerInstance(this, hostRef);
        this.showIssuer = true;
    }
    // eslint-disable-next-line class-methods-use-this
    CertificateSummary.prototype.renderRow = function (name, value, monospace) {
        return (h("tr", null, h("td", null, h("peculiar-typography", { color: "grey_5" }, name, ":")), h("td", null, h("peculiar-typography", { class: "meta_value", monospace: monospace }, value))));
    };
    CertificateSummary.prototype.render = function () {
        return (h(Host, null, h("table", null, h("tbody", null, this.renderRow(l10n.getString('subjectName'), this.certificate.subjectToString()), this.showIssuer && this.renderRow(l10n.getString('issuerName'), this.certificate.issuerToString()), this.renderRow(l10n.getString('serialNumber'), this.certificate.serialNumber, true), this.renderRow(l10n.getString('version'), this.certificate.version), this.renderRow(l10n.getString('validity'), this.certificate.validity), this.renderRow(l10n.getString('issued'), dateShort(this.certificate.notBefore)), this.renderRow(l10n.getString('expired'), dateShort(this.certificate.notAfter))))));
    };
    return CertificateSummary;
}());
CertificateSummary.style = certificateSummaryCss;
var circularProgressCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%}@-webkit-keyframes circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes circular-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:100, 200;stroke-dashoffset:-15}to{stroke-dasharray:100, 200;stroke-dashoffset:-120}}@keyframes circular-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:100, 200;stroke-dashoffset:-15}to{stroke-dasharray:100, 200;stroke-dashoffset:-120}}.circle_progress{margin:0 auto}.circle_progress_svg{-webkit-animation:circular-rotate 1.4s linear infinite;animation:circular-rotate 1.4s linear infinite}.circle_progress_circle{stroke-linecap:round;-webkit-animation:circular-dash 1.4s ease-in-out infinite;animation:circular-dash 1.4s ease-in-out infinite;stroke-dasharray:80, 200;stroke-dashoffset:0;stroke:#3584f7;stroke:rgba(var(--pv-color-primary-rgb), 1)}.circle_progress_backdrop{stroke:#d1d5d9;stroke:rgba(var(--pv-color-grey_3-rgb), 1)}";
var CircularProgress = /** @class */ (function () {
    function CircularProgress(hostRef) {
        registerInstance(this, hostRef);
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
    CircularProgress.prototype.render = function () {
        return (h(Host, null, h("div", { class: "circle_progress", style: {
                width: this.size + "px",
                height: this.size + "px",
            } }, h("svg", { class: "circle_progress_svg", viewBox: "0 0 " + this.box + " " + this.box }, h("circle", { class: "circle_progress_backdrop", cx: this.box / 2, cy: this.box / 2, r: (this.box / 2) - 5, fill: "none", style: {
                strokeWidth: this.width + "px",
            } }), h("circle", { class: "circle_progress_circle", cx: this.box / 2, cy: this.box / 2, r: (this.box / 2) - 5, fill: "none", style: {
                strokeWidth: this.width + "px",
            } })))));
    };
    return CircularProgress;
}());
CircularProgress.style = circularProgressCss;
var highlightWordsCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline}::slotted(mark){background-color:rgba(247, 168, 49, 0.4);background-color:rgba(var(--pv-color-attention-rgb), 0.4)}";
var HighlightWords = /** @class */ (function () {
    function HighlightWords(hostRef) {
        registerInstance(this, hostRef);
        this.tag = 'mark';
    }
    HighlightWords.prototype.componentDidLoad = function () {
        this.handleHighlightSearch();
    };
    HighlightWords.prototype.componentDidUpdate = function () {
        this.handleHighlightSearch();
    };
    HighlightWords.prototype.handleHighlightSearch = function () {
        var basicString = this.resetHighlightSearch(this.host.innerHTML);
        var result = basicString;
        if (this.search) {
            var substring = new RegExp("(" + this.search + ")", 'gi');
            result = basicString.replace(substring, "<" + this.tag + ">$1</" + this.tag + ">");
        }
        this.host.innerHTML = result;
    };
    HighlightWords.prototype.resetHighlightSearch = function (source) {
        // eslint-disable-next-line no-useless-escape
        var substring = new RegExp("</?" + this.tag + ">", 'g');
        return source.replace(substring, '');
    };
    HighlightWords.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(HighlightWords.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return HighlightWords;
}());
HighlightWords.style = highlightWordsCss;
export { CertificateSummary as peculiar_certificate_summary, CircularProgress as peculiar_circular_progress, HighlightWords as peculiar_highlight_words };
