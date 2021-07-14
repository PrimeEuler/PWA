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
export const NameConstraintsExtension = (props) => {
    var _a, _b;
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, (_a = extension.value.excludedSubtrees) === null || _a === void 0 ? void 0 :
        _a.map((generalSubtree) => (h(GeneralNamePart, Object.assign({ generalName: generalSubtree.base }, props)))), (_b = extension.value.permittedSubtrees) === null || _b === void 0 ? void 0 :
        _b.map((generalSubtree) => (h(GeneralNamePart, Object.assign({ generalName: generalSubtree.base }, props))))));
};
