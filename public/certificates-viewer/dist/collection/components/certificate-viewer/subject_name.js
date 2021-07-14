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
export const SubjectName = (props) => {
    const { name } = props;
    if (!name || !name.length) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('subjectName') }),
        name.map((n) => (h(RowValue, { name: n.name || n.type, value: n.value }))),
    ];
};
