/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
import type { INameJSON } from '../../crypto/name';
interface ISubjectNameProps {
    name: INameJSON[];
    issuerDnLink?: string;
}
export declare const IssuerName: FunctionalComponent<ISubjectNameProps>;
export {};
