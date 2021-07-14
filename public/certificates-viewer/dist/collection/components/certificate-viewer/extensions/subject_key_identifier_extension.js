/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { Convert } from 'pvtsutils';
import { RowValue } from '../row';
import { BasicExtension } from './basic_extension';
export const SubjectKeyIdentifierExtension = (props) => {
    const { extension, getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink } = props;
    const keyId = Convert.ToHex(extension.value.buffer);
    const childrenLink = getSubjectKeyIdChildrenLink(keyId);
    const siblingsLink = getSubjectKeyIdSiblingsLink(keyId);
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Key ID", value: keyId, monospace: true, extraValue: [
                childrenLink && (h("span", null,
                    "\u00A0[",
                    h("peculiar-link", { href: childrenLink }, "children"),
                    "]")),
                siblingsLink && (h("span", null,
                    "\u00A0[",
                    h("peculiar-link", { href: siblingsLink }, "siblings"),
                    "]")),
            ] })));
};
