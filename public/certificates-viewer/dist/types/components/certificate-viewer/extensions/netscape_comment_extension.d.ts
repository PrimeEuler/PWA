/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { NetscapeComment } from '@peculiar/asn1-x509-netscape';
import { Extension } from '../../../crypto/extension';
interface INetscapeCommentExtensionProps {
    extension: Extension<NetscapeComment>;
}
export declare const NetscapeCommentExtension: FunctionalComponent<INetscapeCommentExtensionProps>;
export {};
