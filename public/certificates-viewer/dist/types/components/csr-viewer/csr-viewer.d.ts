/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { CSR } from '../../crypto';
export declare type CsrProp = string | CSR;
export declare class CsrViewer {
    certificateDecoded: CSR;
    certificateDecodeError: Error;
    /**
     * The certificate value for decode and show details. Use PEM or DER.
     */
    certificate: CsrProp;
    /**
     * If `true` - component will show split-button to download certificate as PEM or DER.
     */
    download?: boolean;
    /**
     * Subject Key Identifier extension children link.
     * <br />
     * **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
     * @example
     *  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}
     */
    subjectKeyIdChildrenLink?: string;
    /**
     * Subject Key Identifier extension siblings link.
     * <br />
     * **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
     * @example
     *  https://some.com/{{subjectKeyId}}
     */
    subjectKeyIdSiblingsLink?: string;
    /**
     * Choose view type instead @media.
     */
    view?: 'mobile';
    isDecodeInProcess: boolean;
    componentWillLoad(): void;
    private decodeCertificate;
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    watchCertificateAndDecode(newValue: CsrProp, oldValue: CsrProp): void;
    private getAuthKeyIdParentLink;
    private getAuthKeyIdSiblingsLink;
    private getSubjectKeyIdChildrenLink;
    private getSubjectKeyIdSiblingsLink;
    private getLEILink;
    private getDNSNameLink;
    private getIPAddressLink;
    private renderErrorState;
    private renderEmptyState;
    private getExtensionRequestAttribute;
    render(): any;
}
