/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { getStringByOID } from '../get_string_by_oid';
import { RowValue } from '../row';
export const BasicAttribute = (props, children) => {
    const { attribute } = props;
    return ([
        h(RowValue, { name: "Name", value: getStringByOID(attribute.asn.type) }),
        children,
        h("tr", null,
            h("td", { colSpan: 2, class: "divider" },
                h("span", { class: "bg_fill" }))),
    ]);
};
