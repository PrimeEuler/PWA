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
export const SubjectAlternativeNameExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((gn) => (h(GeneralNamePart, Object.assign({ generalName: gn }, props))))));
};
