/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ECParameters } from '@peculiar/asn1-ecc';
import { RSAPublicKey } from '@peculiar/asn1-rsa';
import { Certificate } from '@peculiar/asn1-x509';
import { INameJSON } from './name';
import { Extension, TExtensionValue } from './extension';
import { AsnData } from './asn_data';
export interface ISignature {
    algorithm: string;
    value: BufferSource;
}
export interface IPublicKey {
    algorithm: string;
    value: BufferSource;
    params?: ECParameters | RSAPublicKey;
}
export declare class X509Certificate extends AsnData<Certificate> {
    readonly serialNumber: string;
    readonly subject: INameJSON[];
    readonly issuer: INameJSON[];
    readonly notBefore: Date;
    readonly notAfter: Date;
    readonly validity: string;
    extensions: Extension<TExtensionValue>[];
    readonly version: number;
    thumbprints: Record<string, string>;
    constructor(raw: string);
    parseExtensions(): void;
    get publicKey(): IPublicKey;
    get signature(): ISignature;
    exportAsBase64(): string;
    exportAsHexFormatted(): string;
    exportAsPemFormatted(): string;
    getThumbprint(algorithm?: globalThis.AlgorithmIdentifier): Promise<void>;
    get commonName(): string;
    get issuerCommonName(): string;
    get isRoot(): boolean;
    subjectToString(): string;
    issuerToString(): string;
}
