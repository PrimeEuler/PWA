/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { Convert } from 'pvtsutils';
import { l10n } from '../../utils';
import { getStringByOID } from './get_string_by_oid';
import { RowTitle, RowValue } from './row';
function getPublicKeyModulus(publicKey) {
    var _a;
    if ((_a = publicKey.params) === null || _a === void 0 ? void 0 : _a['modulus']) {
        let length = publicKey.params['modulus'].byteLength;
        if (length % 2) {
            length -= 1;
        }
        return length * 8;
    }
    return null;
}
function getPublicKeyExponent(publicKey) {
    var _a;
    if ((_a = publicKey.params) === null || _a === void 0 ? void 0 : _a['publicExponent']) {
        return publicKey.params['publicExponent'].byteLength === 3
            ? 65537
            : 3;
    }
    return null;
}
export const PublicKey = (props) => {
    var _a;
    const { publicKey } = props;
    if (!publicKey) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('publicKeyInfo') }),
        h(RowValue, { name: l10n.getString('algorithm'), value: getStringByOID(publicKey.algorithm) }),
        h(RowValue, { name: l10n.getString('namedCurve'), value: getStringByOID((_a = publicKey.params) === null || _a === void 0 ? void 0 : _a['namedCurve']) }),
        h(RowValue, { name: l10n.getString('exponent'), value: getPublicKeyExponent(publicKey) }),
        h(RowValue, { name: l10n.getString('modulus'), value: getPublicKeyModulus(publicKey) }),
        h(RowValue, { name: l10n.getString('value'), value: Convert.ToHex(publicKey.value), monospace: true, collapse: true }),
    ];
};
