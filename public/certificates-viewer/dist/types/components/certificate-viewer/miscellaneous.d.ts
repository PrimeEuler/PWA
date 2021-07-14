/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
import { X509Certificate, X509AttributeCertificate, CSR } from '../../crypto';
declare type CertificateType = X509Certificate | X509AttributeCertificate | CSR;
interface IMiscellaneousProps {
    certificate: CertificateType;
}
export declare const Miscellaneous: FunctionalComponent<IMiscellaneousProps>;
export {};
