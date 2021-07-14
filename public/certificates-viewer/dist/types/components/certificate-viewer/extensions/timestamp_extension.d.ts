/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { Timestamp } from '@peculiar/asn1-adobe-acrobat';
import { Extension } from '../../../crypto/extension';
interface ITimestampExtensionProps extends IGeneralNameOptions {
    extension: Extension<Timestamp>;
}
export declare const TimestampExtension: FunctionalComponent<ITimestampExtensionProps>;
export {};
