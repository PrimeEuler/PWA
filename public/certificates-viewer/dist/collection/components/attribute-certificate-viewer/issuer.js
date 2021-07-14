/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { RowTitle } from '../certificate-viewer/row';
import { GeneralNamePart } from '../certificate-viewer/extensions/general_name_part';
import { l10n } from '../../utils';
export const Issuer = (props) => {
    const { issuer } = props;
    if (!issuer) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('issuer') }),
        issuer.map((item) => (h(GeneralNamePart, { generalName: item, getDNSNameLink: () => '', getIPAddressLink: () => '' }))),
    ];
};
