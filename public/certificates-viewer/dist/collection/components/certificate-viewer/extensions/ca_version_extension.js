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
export const CaVersionExtension = (props) => {
    const { extension } = props;
    const version = extension.value.getVersion();
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Certificate Index", value: version.certificateIndex }),
        h(RowValue, { name: "Key Index", value: version.keyIndex })));
};
