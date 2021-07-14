/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { X509Certificate, X509AttributeCertificate, CSR } from '../../crypto';
export declare class CertificateDecoder {
    private inputPaste?;
    /**
     * The example certificate value for decode and show details. Use PEM or DER.
     */
    certificateExample?: string;
    certificateDecoded: X509Certificate | X509AttributeCertificate | CSR;
    componentDidLoad(): void;
    private onClickDecode;
    private onClickExample;
    private onClickClear;
    private onChangeInputFile;
    private onDropFile;
    clearValue(): void;
    setValue(value: X509Certificate | X509AttributeCertificate | CSR): void;
    decode(certificate: string): void;
    render(): any;
}
