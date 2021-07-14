/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { LeiRoles } from '@peculiar/asn1-lei';
import { Extension } from '../../../crypto/extension';
interface ILeiRolesExtensionProps {
    extension: Extension<LeiRoles>;
}
export declare const LeiRolesExtension: FunctionalComponent<ILeiRolesExtensionProps>;
export {};
