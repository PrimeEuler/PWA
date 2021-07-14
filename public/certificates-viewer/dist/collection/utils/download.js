/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Convert } from 'pvtsutils';
import downloadFromBuffer from './download_from_buffer';
export class Download {
}
Download.certificate = {
    asPEM: (pem, name) => {
        downloadFromBuffer(Convert.FromString(pem), 'application/pkix-cert', name, 'cer');
    },
    asDER: (hex, name) => {
        downloadFromBuffer(Convert.FromString(hex), 'application/pkix-cert', name, 'cer');
    },
};
Download.certificateRequest = {
    asPEM: (pem, name) => {
        downloadFromBuffer(Convert.FromString(pem), 'application/pkcs10', name, 'csr');
    },
    asDER: (hex, name) => {
        downloadFromBuffer(Convert.FromString(hex), 'application/pkcs10', name, 'csr');
    },
};
