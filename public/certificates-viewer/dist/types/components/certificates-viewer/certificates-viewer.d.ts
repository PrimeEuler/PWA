/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { X509Certificate } from '../../crypto';
export interface ICertificate {
    value: string;
    name?: string;
    tests?: {
        valid?: string;
        revoked?: string;
        expired?: string;
    };
}
interface ICertificateDecoded {
    body: X509Certificate;
    tests?: ICertificate['tests'];
    name?: string;
}
export declare class CertificatesViewer {
    /**
     * List of certificates values for decode and show in the list.
     * <br />
     * **NOTE**: If you do not provide a `name` value when
     * invocing the component it will take the first Subject CN value.
     * <br />
     * **NOTE**: If you do not provide a `tests` this column will be ommited from the rendered page.
     * <br />
     * **NOTE**: If the supplied certificates are self-signed the issuer column will be ommited.
     */
    certificates: ICertificate[];
    /**
     * Use filter in the list when search is changed.
     */
    filterWithSearch: boolean;
    /**
     * Use highlight chapters in the list when search is changed.
     */
    highlightWithSearch: boolean;
    search: string;
    certificatesDecoded: ICertificateDecoded[];
    expandedRow?: number;
    certificateSelectedForDetails?: X509Certificate;
    isDecodeInProcess: boolean;
    private isHasTests;
    private isHasRoots;
    componentWillLoad(): void;
    watchCertificates(newValue: ICertificate[], oldValue: ICertificate[]): void;
    certificatesDecodeAndSet(): Promise<void>;
    onClickDownloadAsPem(certificate: ICertificateDecoded, e: MouseEvent): void;
    onClickDownloadAsDer(certificate: ICertificateDecoded, e: MouseEvent): void;
    onClickDetails: (certificate: X509Certificate, e: MouseEvent) => void;
    onClickModalClose: () => void;
    onClickRow(index: number): void;
    renderExpandedRow(certificate: X509Certificate): any;
    renderCertificateTests(tests: ICertificateDecoded['tests']): any[];
    renderContentState(): any[];
    renderCertificateDetailsModal(): any;
    renderSearch(): any;
    renderEmptyState(): any;
    renderEmptySearchState(): any;
    renderLoadingState(): any;
    renderBody(): any;
    onSearchChange: (e: any) => void;
    render(): any;
}
export {};
