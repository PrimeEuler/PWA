/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { OIDs } from '../../../constants/oids';
import { RowValue } from '../row';
export const NamePart = (props) => {
    const { name } = props;
    if (!name) {
        return null;
    }
    return name.map((relativeDistinguishedName) => (relativeDistinguishedName.map((attributeTypeAndValue) => (h(RowValue, { name: OIDs[attributeTypeAndValue.type] || attributeTypeAndValue.type, value: attributeTypeAndValue.value.toString() })))));
};
