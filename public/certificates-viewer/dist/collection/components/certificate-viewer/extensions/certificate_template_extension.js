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
export const CertificateTemplateExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Template ID", value: extension.value.templateID }),
        h(RowValue, { name: "Template Major Version", value: extension.value.templateMajorVersion }),
        h(RowValue, { name: "Template Minor Version", value: extension.value.templateMinorVersion })));
};
