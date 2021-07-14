/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import type { UnstructuredName } from '@peculiar/asn1-pkcs9';
import type { Attribute } from '../../../crypto/attribute';
interface IUnstructuredNameAttributeProps {
    attribute: Attribute<UnstructuredName>;
}
export declare const UnstructuredNameAttribute: FunctionalComponent<IUnstructuredNameAttributeProps>;
export {};
