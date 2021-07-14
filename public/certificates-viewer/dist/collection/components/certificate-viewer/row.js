/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import isLink from '../../utils/is_link';
export const RowTitle = (props) => {
    const { value } = props;
    if (!value) {
        return null;
    }
    return (h("tr", { class: "title" },
        h("td", { colSpan: 2 },
            h("peculiar-typography", { type: "h6" }, value))));
};
export const RowValue = (props) => {
    const { name, value, monospace, collapse, href, extraValue, } = props;
    if (!name) {
        return null;
    }
    if (value === undefined || value === null) {
        return null;
    }
    let elementValue;
    if (collapse) {
        elementValue = (h("peculiar-text-hider", null, value));
    }
    else {
        elementValue = value;
    }
    const hasValue = !!value.toString();
    return (h("tr", null,
        h("td", { colSpan: hasValue ? 1 : 2 },
            h("peculiar-typography", { color: "grey_5" },
                name,
                hasValue ? ':' : '')),
        hasValue && (h("td", { class: {
                monospace,
            } }, (isLink(value.toString()) || href) ? (h("peculiar-link", { href: href || value.toString() }, value)) : (h("peculiar-typography", { monospace: monospace },
            elementValue,
            extraValue))))));
};
