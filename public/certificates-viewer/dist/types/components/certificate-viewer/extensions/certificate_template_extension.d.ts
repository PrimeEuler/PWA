/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { CertificateTemplate } from '@peculiar/asn1-x509-microsoft';
import { Extension } from '../../../crypto/extension';
interface ICertificateTemplateExtensionProps {
    extension: Extension<CertificateTemplate>;
}
export declare const CertificateTemplateExtension: FunctionalComponent<ICertificateTemplateExtensionProps>;
export {};
