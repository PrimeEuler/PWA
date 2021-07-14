/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { AuthorityInfoAccessSyntax } from '@peculiar/asn1-x509';
import { Extension } from '../../../crypto/extension';
interface IAuthorityInfoAccessSyntaxExtensionProps extends IGeneralNameOptions {
    extension: Extension<AuthorityInfoAccessSyntax>;
}
export declare const AuthorityInfoAccessSyntaxExtension: FunctionalComponent<IAuthorityInfoAccessSyntaxExtensionProps>;
export {};
