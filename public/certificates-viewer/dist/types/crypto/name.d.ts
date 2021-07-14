/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Name as AsnName } from '@peculiar/asn1-x509';
export interface INameJSON {
    type: string;
    name: string;
    shortName: string;
    value: string;
}
export declare class Name {
    #private;
    constructor(data: BufferSource | AsnName);
    toJSON(): INameJSON[];
}
