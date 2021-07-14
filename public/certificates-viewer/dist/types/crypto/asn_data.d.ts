/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare class AsnData<T> {
    #private;
    constructor(raw: BufferSource, type: {
        new (): T;
    });
    get asn(): T;
    get raw(): ArrayBuffer;
}
