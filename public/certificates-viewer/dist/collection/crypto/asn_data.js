/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _asn, _raw;
import { AsnConvert } from '@peculiar/asn1-schema';
import { BufferSourceConverter } from 'pvtsutils';
export class AsnData {
    constructor(...args) {
        _asn.set(this, void 0);
        _raw.set(this, void 0);
        if (args.length === 1) {
            // asn
            // eslint-disable-next-line prefer-destructuring
            __classPrivateFieldSet(this, _asn, args[0]);
            __classPrivateFieldSet(this, _raw, AsnConvert.serialize(__classPrivateFieldGet(this, _asn)));
        }
        else {
            // raw, type
            __classPrivateFieldSet(this, _asn, AsnConvert.parse(args[0], args[1]));
            __classPrivateFieldSet(this, _raw, BufferSourceConverter.toArrayBuffer(args[0]));
        }
    }
    get asn() {
        return __classPrivateFieldGet(this, _asn);
    }
    get raw() {
        return __classPrivateFieldGet(this, _raw);
    }
}
_asn = new WeakMap(), _raw = new WeakMap();
