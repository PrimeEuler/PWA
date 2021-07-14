/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { l10n } from '../../utils';
import { RowTitle, RowValue } from './row';
export const Thumbprints = (props) => {
    const { thumbprints } = props;
    if (!thumbprints) {
        return null;
    }
    const keys = Object.keys(thumbprints);
    if (!keys.length) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('fingerprints') }),
        keys.map((name) => (h(RowValue, { name: name, value: thumbprints[name], monospace: true }))),
    ];
};
