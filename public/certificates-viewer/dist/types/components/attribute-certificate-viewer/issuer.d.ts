/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
import type { X509AttributeCertificate } from '../../crypto';
interface IIssuerProps {
    issuer: X509AttributeCertificate['issuer'];
}
export declare const Issuer: FunctionalComponent<IIssuerProps>;
export {};
