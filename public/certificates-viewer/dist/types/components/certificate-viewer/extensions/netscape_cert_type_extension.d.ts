/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { NetscapeCertType } from '@peculiar/asn1-x509-netscape';
import { Extension } from '../../../crypto/extension';
interface INetscapeCertTypeExtensionProps {
    extension: Extension<NetscapeCertType>;
}
export declare const NetscapeCertTypeExtension: FunctionalComponent<INetscapeCertTypeExtensionProps>;
export {};
