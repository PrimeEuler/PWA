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
export const IssuerName = (props) => {
    const { name, issuerDnLink } = props;
    if (!name || !name.length) {
        return null;
    }
    const title = l10n.getString('issuerName');
    return [
        h(RowTitle, { value: issuerDnLink ? (h("peculiar-link", { href: issuerDnLink, type: "h6" }, title)) : title }),
        name.map((n) => (h(RowValue, { name: n.name || n.type, value: n.value }))),
    ];
};
