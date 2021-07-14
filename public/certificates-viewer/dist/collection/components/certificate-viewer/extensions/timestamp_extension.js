/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { RowValue } from '../row';
import { BasicExtension } from './basic_extension';
import { GeneralNamePart } from './general_name_part';
export const TimestampExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Version", value: extension.value.version }),
        h(GeneralNamePart, Object.assign({ generalName: extension.value.location }, props)),
        h(RowValue, { name: "Requires Auth", value: extension.value.requiresAuth ? 'YES' : 'NO' })));
};
