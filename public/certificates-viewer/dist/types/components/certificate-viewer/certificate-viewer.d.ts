/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { X509Certificate } from '../../crypto';
export declare type CertificateProp = string | X509Certificate;
export declare class CertificateViewer {
    certificateDecoded: X509Certificate;
    certificateDecodeError: Error;
    /**
     * The certificate value for decode and show details. Use PEM or DER.
     */
    certificate: CertificateProp;
    /**
     * If `true` - component will show split-button to download certificate as PEM or DER.
     */
    download?: boolean;
    /**
     * Authority Key Identifier extension parent link.
     * <br />
     * **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
     * @example
     *  https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}
     */
    authKeyIdParentLink?: string;
    /**
     * Authority Key Identifier extension siblings link.
     * <br />
     * **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
     * @example
     *  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}
     */
    authKeyIdSiblingsLink?: string;
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
     * Issuer DN link.
     * **NOTE**: HTML component attribute must be `issuer-dn-link`.
     */
    issuerDnLink?: string;
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
    watchCertificateAndDecode(newValue: CertificateProp, oldValue: CertificateProp): void;
    private getAuthKeyIdParentLink;
    private getAuthKeyIdSiblingsLink;
    private getSubjectKeyIdChildrenLink;
    private getSubjectKeyIdSiblingsLink;
    private getLEILink;
    private getDNSNameLink;
    private getIPAddressLink;
    private getIssuerDnLink;
    private renderErrorState;
    private renderEmptyState;
    render(): any;
}
