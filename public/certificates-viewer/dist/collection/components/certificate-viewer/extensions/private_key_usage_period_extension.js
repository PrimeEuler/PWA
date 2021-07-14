/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { RowValue } from '../row';
import { dateShort } from '../../../utils';
import { BasicExtension } from './basic_extension';
export const PrivateKeyUsagePeriodExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Not Before", value: dateShort(extension.value.notBefore) }),
        h(RowValue, { name: "Not After", value: dateShort(extension.value.notAfter) })));
};
