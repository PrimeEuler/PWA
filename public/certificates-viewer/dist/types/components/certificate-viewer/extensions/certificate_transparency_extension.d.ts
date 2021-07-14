/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import type { CertificateTransparency } from '@peculiar/asn1-cert-transparency';
import type { Extension } from '../../../crypto/extension';
interface ICertificateTransparencyExtensionProps {
    extension: Extension<CertificateTransparency>;
}
export declare const CertificateTransparencyExtension: FunctionalComponent<ICertificateTransparencyExtensionProps>;
export {};
