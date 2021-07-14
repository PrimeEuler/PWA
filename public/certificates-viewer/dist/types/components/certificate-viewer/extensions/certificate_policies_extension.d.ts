/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { CertificatePolicies } from '@peculiar/asn1-x509';
import { Extension } from '../../../crypto/extension';
interface ICertificatePoliciesExtensionProps {
    extension: Extension<CertificatePolicies>;
}
export declare const CertificatePoliciesExtension: FunctionalComponent<ICertificatePoliciesExtensionProps>;
export {};
