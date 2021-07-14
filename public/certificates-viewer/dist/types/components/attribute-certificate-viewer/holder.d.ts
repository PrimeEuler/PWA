/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
import type { X509AttributeCertificate } from '../../crypto';
interface IHolderProps {
    holder: X509AttributeCertificate['holder'];
}
export declare const Holder: FunctionalComponent<IHolderProps>;
export {};
