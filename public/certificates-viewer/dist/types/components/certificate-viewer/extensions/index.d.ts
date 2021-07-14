/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { Extension, TExtensionValue } from '../../../crypto/extension';
interface IExtensionsProps extends IGeneralNameOptions, ILeiOptions, IAuthorityKeyIdentifierOptions, ISubjectKeyIdentifierOptions {
    extensions: Extension<TExtensionValue>[];
    title?: string;
}
export declare const Extensions: FunctionalComponent<IExtensionsProps>;
export {};
