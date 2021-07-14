/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { Extension, TExtensionValue } from '../../../crypto/extension';
interface IBasicExtensionProps {
    extension: Extension<TExtensionValue>;
}
export declare const BasicExtension: FunctionalComponent<IBasicExtensionProps>;
export {};
