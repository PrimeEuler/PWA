/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { Convert } from 'pvtsutils';
import { RowValue } from '../row';
import { getStringByOID } from '../get_string_by_oid';
import { BasicExtension } from './basic_extension';
export const BiometricSyntaxExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((data, arrayIndex) => ([
        h(RowValue, { name: `Biometric Oid #${arrayIndex + 1}`, value: getStringByOID(data.typeOfBiometricData.biometricDataOid) }),
        h(RowValue, { name: `Biometric Type #${arrayIndex + 1}`, value: data.typeOfBiometricData.predefinedBiometricType }),
        h(RowValue, { name: `Algorithm #${arrayIndex + 1}`, value: getStringByOID(data.hashAlgorithm.algorithm) }),
        h(RowValue, { name: `Biometric Hash #${arrayIndex + 1}`, value: Convert.ToHex(data.biometricDataHash.buffer), monospace: true }),
        h(RowValue, { name: `Source Uri #${arrayIndex + 1}`, value: data.sourceDataUri }),
        h("tr", null,
            h("td", null),
            h("td", null)),
    ]))));
};
