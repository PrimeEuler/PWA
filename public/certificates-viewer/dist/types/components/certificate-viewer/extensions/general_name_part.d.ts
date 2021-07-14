/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { GeneralName } from '@peculiar/asn1-x509';
interface IGeneralNamePartProps extends IGeneralNameOptions {
    generalName: GeneralName;
}
export declare const GeneralNamePart: FunctionalComponent<IGeneralNamePartProps>;
export {};
