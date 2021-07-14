/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
interface IBasicInformationProps {
    serialNumber: string;
    version: number;
    validity: string;
    notBefore: Date;
    notAfter: Date;
}
export declare const BasicInformation: FunctionalComponent<IBasicInformationProps>;
export {};
