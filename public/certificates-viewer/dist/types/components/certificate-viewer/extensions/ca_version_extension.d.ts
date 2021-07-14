/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { CaVersion } from '@peculiar/asn1-x509-microsoft';
import { Extension } from '../../../crypto/extension';
interface ICaVersionExtensionProps {
    extension: Extension<CaVersion>;
}
export declare const CaVersionExtension: FunctionalComponent<ICaVersionExtensionProps>;
export {};
