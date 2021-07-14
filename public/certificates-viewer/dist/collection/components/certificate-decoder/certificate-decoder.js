/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Host, h, State, Prop, } from '@stencil/core';
import { validator, history, readAsBinaryString } from '../../utils';
import { X509Certificate, X509AttributeCertificate, CSR } from '../../crypto';
export class CertificateDecoder {
    constructor() {
        this.onClickDecode = () => {
            const { value } = this.inputPaste;
            if (value) {
                this.decode(value);
            }
        };
        this.onClickExample = () => {
            this.decode(this.certificateExample);
        };
        this.onClickClear = () => {
            this.clearValue();
        };
        this.onChangeInputFile = async (e) => {
            const element = e.target;
            if (element.files) {
                const file = await readAsBinaryString(element.files[0]);
                if (typeof file.value === 'string') {
                    this.decode(file.value);
                }
                element.value = '';
            }
        };
        this.onDropFile = async (e) => {
            e.stopPropagation();
            e.preventDefault();
            const element = e.dataTransfer;
            if (element.files) {
                const file = await readAsBinaryString(element.files[0]);
                if (typeof file.value === 'string') {
                    this.decode(file.value);
                }
            }
        };
    }
    componentDidLoad() {
        const parsedHash = history.parseHash(window.location.search);
        if (parsedHash.cert) {
            /**
             * Prevent Stencil warning about re-render
             */
            setTimeout(() => this.decode(parsedHash.cert), 100);
        }
    }
    clearValue() {
        this.inputPaste.value = '';
        this.certificateDecoded = null;
        history.replace({ search: '' });
    }
    setValue(value) {
        this.certificateDecoded = value;
        this.inputPaste.value = value.exportAsPemFormatted();
        history.replace({
            search: history.queryStringify({
                cert: value.exportAsBase64(),
            }),
        });
    }
    decode(certificate) {
        const isPem = validator.isPem(certificate);
        const isX509Pem = validator.isX509Pem(certificate);
        const isPkcs10Pem = validator.isPkcs10Pem(certificate);
        const isX509AttributePem = validator.isX509AttributePem(certificate);
        let decoded;
        let decodeError;
        if (isPem && !(isX509Pem || isX509AttributePem || isPkcs10Pem)) {
            this.clearValue();
            alert('Unsupported file type. Please try to use Certificate/AttributeCertificate/CertificateRequest.');
            return;
        }
        try {
            if (isX509Pem) {
                decoded = new X509Certificate(certificate);
            }
            if (isX509AttributePem) {
                decoded = new X509AttributeCertificate(certificate);
            }
            if (isPkcs10Pem) {
                decoded = new CSR(certificate);
            }
        }
        catch (error) {
            decodeError = error;
        }
        if (!decoded) {
            try {
                decoded = new X509Certificate(certificate);
            }
            catch (error) {
                decodeError = error;
            }
        }
        if (!decoded) {
            try {
                decoded = new X509AttributeCertificate(certificate);
            }
            catch (error) {
                decodeError = error;
            }
        }
        if (!decoded) {
            try {
                decoded = new CSR(certificate);
            }
            catch (error) {
                decodeError = error;
            }
        }
        if (!decoded) {
            this.clearValue();
            console.log(decodeError);
            alert('Error decoding file. Please try to use Certificate/AttributeCertificate/CertificateRequest.');
        }
        else {
            this.setValue(decoded);
        }
    }
    render() {
        return (h(Host, null,
            h("textarea", { placeholder: "Certificate DER or PEM", class: "textarea", ref: (el) => { this.inputPaste = el; }, onDrop: this.onDropFile }),
            h("div", { class: "controls" },
                h("peculiar-button", { fill: "fill", class: "button", onClick: this.onClickDecode }, "Decode"),
                h("peculiar-button", { class: "button" },
                    "Choose file",
                    h("input", { type: "file", class: "input_file", accept: "application/pkix-cert,application/x-x509-ca-cert,application/x-x509-user-cert,application/pkcs10,.csr,.req", onChange: this.onChangeInputFile, value: "" })),
                h("peculiar-button", { class: "button", onClick: this.onClickClear }, "Clear"),
                this.certificateExample && (h("peculiar-button", { class: "button", onClick: this.onClickExample }, "Example"))),
            this.certificateDecoded instanceof X509Certificate && (h("peculiar-certificate-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true })),
            this.certificateDecoded instanceof X509AttributeCertificate && (h("peculiar-attribute-certificate-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true })),
            this.certificateDecoded instanceof CSR && (h("peculiar-csr-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true }))));
    }
    static get is() { return "peculiar-certificate-decoder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["certificate-decoder.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["certificate-decoder.css"]
    }; }
    static get properties() { return {
        "certificateExample": {
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
                "text": "The example certificate value for decode and show details. Use PEM or DER."
            },
            "attribute": "certificate-example",
            "reflect": false
        }
    }; }
    static get states() { return {
        "certificateDecoded": {}
    }; }
}
