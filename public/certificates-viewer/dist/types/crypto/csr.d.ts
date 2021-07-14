/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ECParameters } from '@peculiar/asn1-ecc';
import { RSAPublicKey } from '@peculiar/asn1-rsa';
import { CertificationRequest } from '@peculiar/asn1-csr';
import { AsnData } from './asn_data';
import { INameJSON } from './name';
import { Attribute, TAttributeValue } from './attribute';
interface ISignature {
    algorithm: string;
    value: BufferSource;
}
interface IPublicKey {
    algorithm: string;
    value: BufferSource;
    params?: ECParameters | RSAPublicKey;
}
export declare class CSR extends AsnData<CertificationRequest> {
    readonly subject: INameJSON[];
    readonly version: number;
    attributes: Attribute<TAttributeValue>[];
    thumbprints: Record<string, string>;
    constructor(raw: string);
    get publicKey(): IPublicKey;
    get signature(): ISignature;
    get commonName(): string;
    getThumbprint(algorithm?: globalThis.AlgorithmIdentifier): Promise<void>;
    parseAttributes(): void;
    exportAsBase64(): string;
    exportAsHexFormatted(): string;
    exportAsPemFormatted(): string;
}
export {};
