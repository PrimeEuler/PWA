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
const getValueRank = (value) => {
    let ratio = 1;
    if (value / 100 > 1) {
        ratio = 100;
    }
    else if (value / 10 > 1) {
        ratio = 10;
    }
    return `${value}/${5 * ratio}`;
};
export const ValuationRankingAttribute = (props) => {
    const { attribute } = props;
    const values = Object.keys(attribute.value).map((keyName) => ([
        getValueRank(attribute.value[keyName]),
        h("br", null),
    ]));
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Value", value: values })));
};
