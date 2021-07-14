/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { BasicAttribute } from './basic_attribute';
import { GeneralNamePart } from '../extensions/general_name_part';
import { RowValue } from '../row';
export const ActivityDescriptionAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Code Authority", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.codeAuthority, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Code Id", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.codeId, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Short Name", value: attribute.value.shortName }),
        h(RowValue, { name: "Short Description", value: attribute.value.shortDescription })));
};
