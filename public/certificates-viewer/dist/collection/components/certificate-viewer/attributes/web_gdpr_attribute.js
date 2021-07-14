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
export const WebGdprAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Assessment Authority", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.assessmentAuthority, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Assessment Location", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.assessmentLocation, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Assessment Ref", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.assessmentRef, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Data Storage Territory", value: attribute.value.dataStorageTerritory }),
        h(RowValue, { name: "Description", value: attribute.value.description })));
};
