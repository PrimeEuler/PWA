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
export const LeiExtension = (props) => {
    const { extension, getLEILink } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Identifier", value: extension.value.text, href: getLEILink(extension.value.text) })));
};
