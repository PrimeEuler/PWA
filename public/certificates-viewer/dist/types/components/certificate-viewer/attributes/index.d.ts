/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import type { Attribute, TAttributeValue } from '../../../crypto/attribute';
interface IAttributesPtops extends IGeneralNameOptions, ILeiOptions, IAuthorityKeyIdentifierOptions, ISubjectKeyIdentifierOptions {
    attributes: Attribute<TAttributeValue>[];
}
export declare const Attributes: FunctionalComponent<IAttributesPtops>;
export {};
