/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import type { Name } from '@peculiar/asn1-x509';
import type { Attribute } from '../../../crypto/attribute';
interface INameAttributeProps {
    attribute: Attribute<Name>;
}
export declare const NameAttribute: FunctionalComponent<INameAttributeProps>;
export {};
