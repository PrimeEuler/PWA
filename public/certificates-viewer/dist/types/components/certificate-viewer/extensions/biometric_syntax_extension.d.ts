/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { BiometricSyntax } from '@peculiar/asn1-x509-qualified';
import { Extension } from '../../../crypto/extension';
interface IBiometricSyntaxExtensionProps {
    extension: Extension<BiometricSyntax>;
}
export declare const BiometricSyntaxExtension: FunctionalComponent<IBiometricSyntaxExtensionProps>;
export {};
