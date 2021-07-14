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
import { getAttributeValue } from './attribute_value';
export const SubjectDirectoryAttributesExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((attribute, arrayIndex) => ([
        h(RowValue, { name: `Attribute #${arrayIndex + 1}`, value: getStringByOID(attribute.type) }),
        h(RowValue, { name: `Value #${arrayIndex + 1}`, value: getAttributeValue(attribute) }),
        h("tr", null,
            h("td", null),
            h("td", null)),
    ]))));
};
