/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { RowValue } from '../row';
import logs from '../../../constants/logs';
import { dateShort } from '../../../utils';
import { BasicExtension } from './basic_extension';
export const CertificateTransparencyExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.toJSON().map((signedCertificateTimestamp) => ([
        h(RowValue, { name: "SCT Version", value: signedCertificateTimestamp.version + 1 }),
        h(RowValue, { name: "Log Operator", value: logs[signedCertificateTimestamp.logId] || signedCertificateTimestamp.logId }),
        h(RowValue, { name: "Log Key ID", value: signedCertificateTimestamp.logId, monospace: true }),
        h(RowValue, { name: "Timestamp", value: dateShort(signedCertificateTimestamp.timestamp) }),
        h(RowValue, { name: "Signature Algorithm", value: `${signedCertificateTimestamp.hashAlgorithm} ${signedCertificateTimestamp.signatureAlgorithm}`.toUpperCase() }),
        h(RowValue, { name: "Signature", value: signedCertificateTimestamp.signature, monospace: true }),
        h("tr", null,
            h("td", null),
            h("td", null)),
    ]))));
};
