/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ArchiveRevInfo } from '@peculiar/asn1-adobe-acrobat';
import { Extension } from '../../../crypto/extension';
interface IArchiveRevInfoExtensionProps {
    extension: Extension<ArchiveRevInfo>;
}
export declare const ArchiveRevInfoExtension: FunctionalComponent<IArchiveRevInfoExtensionProps>;
export {};
