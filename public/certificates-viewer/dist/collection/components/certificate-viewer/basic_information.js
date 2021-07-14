/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { dateShort, l10n } from '../../utils';
import { RowTitle, RowValue } from './row';
export const BasicInformation = (props) => {
    const { serialNumber, version, validity, notBefore, notAfter, } = props;
    return [
        h(RowTitle, { value: l10n.getString('basicInformation') }),
        h(RowValue, { name: l10n.getString('serialNumber'), value: serialNumber, monospace: true }),
        h(RowValue, { name: l10n.getString('version'), value: version }),
        h(RowValue, { name: l10n.getString('validity'), value: validity }),
        h(RowValue, { name: l10n.getString('issued'), value: dateShort(notBefore) }),
        h(RowValue, { name: l10n.getString('expired'), value: dateShort(notAfter) }),
    ];
};
