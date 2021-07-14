/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { Convert } from 'pvtsutils';
import { RowTitle, RowValue } from '../certificate-viewer/row';
import { getStringByOID } from '../certificate-viewer/get_string_by_oid';
import { GeneralNamePart } from '../certificate-viewer/extensions/general_name_part';
import { l10n } from '../../utils';
export const Holder = (props) => {
    const { holder } = props;
    if (!holder) {
        return null;
    }
    const { baseCertificateID, objectDigestInfo } = holder;
    return [
        h(RowTitle, { value: l10n.getString('holder') }),
        baseCertificateID && ([
            baseCertificateID.issuer.map((item) => (h(GeneralNamePart, { generalName: item, getDNSNameLink: () => '', getIPAddressLink: () => '' }))),
            h("tr", null,
                h("td", null),
                h("td", null)),
            h(RowValue, { name: l10n.getString('serialNumber'), value: Convert.ToHex(baseCertificateID.serial), monospace: true }),
            h("tr", null,
                h("td", null),
                h("td", null)),
        ]),
        objectDigestInfo && ([
            h(RowValue, { name: l10n.getString('digestInfo'), value: "" }),
            h(RowValue, { name: l10n.getString('algorithm'), value: getStringByOID(objectDigestInfo.digestAlgorithm.algorithm) }),
            h(RowValue, { name: l10n.getString('value'), value: Convert.ToHex(objectDigestInfo.objectDigest), monospace: true }),
            h(RowValue, { name: l10n.getString('type'), value: objectDigestInfo.digestedObjectType }),
        ]),
    ];
};
