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
export const TypeRelationshipAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute }, Object.keys(attribute.value).map((keyName) => (h(RowValue, { name: keyName, value: attribute.value[keyName].toNumber() ? 'YES' : 'NO' })))));
};
