/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { BasicAttribute } from './basic_attribute';
import { NamePart } from './name_part';
export const NameAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(NamePart, { name: attribute.value })));
};
