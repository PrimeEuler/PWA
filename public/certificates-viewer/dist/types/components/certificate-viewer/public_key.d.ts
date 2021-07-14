/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
import { IPublicKey } from '../../crypto';
interface IPublicKeyProps {
    publicKey: IPublicKey;
}
export declare const PublicKey: FunctionalComponent<IPublicKeyProps>;
export {};
