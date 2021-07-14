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
var _asn;
import { Name as AsnName } from '@peculiar/asn1-x509';
import { AsnParser } from '@peculiar/asn1-schema';
import { BufferSourceConverter } from 'pvtsutils';
import { OIDs, OIDsShort } from '../constants/oids';
export class Name {
    constructor(data) {
        _asn.set(this, new AsnName());
        if (BufferSourceConverter.isBufferSource(data)) {
            __classPrivateFieldSet(this, _asn, AsnParser.parse(data, AsnName));
        }
        else {
            __classPrivateFieldSet(this, _asn, data);
        }
    }
    toJSON() {
        const res = [];
        __classPrivateFieldGet(this, _asn).forEach((o) => (o.forEach((a) => {
            res.push({
                type: a.type,
                name: OIDs[a.type],
                shortName: OIDsShort[a.type],
                value: a.value.toString(),
            });
        })));
        return res;
    }
}
_asn = new WeakMap();
