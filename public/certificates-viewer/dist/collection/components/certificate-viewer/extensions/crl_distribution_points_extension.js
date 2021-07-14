/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { BasicExtension } from './basic_extension';
import { GeneralNamePart } from './general_name_part';
export const CRLDistributionPointsExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((point) => {
        var _a;
        return ((_a = point === null || point === void 0 ? void 0 : point.distributionPoint) === null || _a === void 0 ? void 0 : _a.fullName.map((gn) => (h(GeneralNamePart, Object.assign({ generalName: gn }, props)))));
    })));
};
