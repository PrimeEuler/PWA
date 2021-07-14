/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { LeiChoice } from '@peculiar/asn1-lei';
import { Extension } from '../../../crypto/extension';
interface ILeiExtensionProps extends ILeiOptions {
    extension: Extension<LeiChoice>;
}
export declare const LeiExtension: FunctionalComponent<ILeiExtensionProps>;
export {};
