/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { RowValue } from '../row';
import { getStringByOID } from '../get_string_by_oid';
import { BasicExtension } from './basic_extension';
export const ExtendedKeyUsageExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((usage, arrayIndex) => (h(RowValue, { name: `Purpose #${arrayIndex + 1}`, value: getStringByOID(usage) })))));
};
