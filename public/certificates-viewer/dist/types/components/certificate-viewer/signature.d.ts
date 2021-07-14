/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
import { ISignature } from '../../crypto';
interface ISignatureProps {
    signature: ISignature;
}
export declare const Signature: FunctionalComponent<ISignatureProps>;
export {};
