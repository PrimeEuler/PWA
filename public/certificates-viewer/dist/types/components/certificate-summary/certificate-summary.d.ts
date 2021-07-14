/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { X509Certificate } from '../../crypto';
export declare class CertificateSummary {
    certificate: X509Certificate;
    showIssuer?: boolean;
    renderRow(name: string | string[], value: string | number, monospace?: boolean): any;
    render(): any;
}
