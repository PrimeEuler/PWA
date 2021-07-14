/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { CSR } from '../../crypto';
import { l10n } from '../../utils';
import { Download } from '../../utils/download';
import { RowTitle } from './row';
function downloadCertificateAsPem(certificate) {
    if (certificate instanceof CSR) {
        Download.certificateRequest.asPEM(certificate.exportAsPemFormatted(), certificate.commonName);
    }
    else {
        Download.certificate.asPEM(certificate.exportAsPemFormatted(), certificate.commonName);
    }
}
function downloadCertificateAsDer(certificate) {
    if (certificate instanceof CSR) {
        Download.certificateRequest.asDER(certificate.exportAsHexFormatted(), certificate.commonName);
    }
    else {
        Download.certificate.asDER(certificate.exportAsHexFormatted(), certificate.commonName);
    }
}
export const Miscellaneous = (props) => {
    const { certificate } = props;
    return [
        h(RowTitle, { value: l10n.getString('miscellaneous') }),
        h("tr", null,
            h("td", { class: "vertical_align_middle" },
                h("peculiar-typography", { color: "grey_5" },
                    l10n.getString('download'),
                    ":")),
            h("td", null,
                h("peculiar-button-split", { onClick: downloadCertificateAsPem.bind(this, certificate), actions: [{
                            text: l10n.getString('download.der'),
                            onClick: downloadCertificateAsDer.bind(this, certificate),
                        }] }, l10n.getString('download.pem')))),
    ];
};
