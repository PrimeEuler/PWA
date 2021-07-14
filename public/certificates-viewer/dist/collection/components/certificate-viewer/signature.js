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
export const Signature = (props) => {
    const { signature } = props;
    if (!signature) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('signature') }),
        h(RowValue, { name: l10n.getString('algorithm'), value: getStringByOID(signature.algorithm) }),
        h(RowValue, { name: l10n.getString('value'), value: Convert.ToHex(signature.value), monospace: true, collapse: true }),
    ];
};
