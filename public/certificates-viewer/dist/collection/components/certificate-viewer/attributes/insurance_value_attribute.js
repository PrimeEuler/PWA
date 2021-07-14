/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { BasicAttribute } from './basic_attribute';
import { RowValue } from '../row';
export const InsuranceValueAttribute = (props) => {
    const { attribute } = props;
    const value = `${attribute.value.base} * 10^${attribute.value.degree} ${attribute.value.location}`;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Value", value: value })));
};
