/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { GeneralName } from '@peculiar/asn1-x509';
import { AttributeCertificate, Holder } from '@peculiar/asn1-x509-attr';
import { AsnData } from './asn_data';
import { Extension, TExtensionValue } from './extension';
import { Attribute, TAttributeValue } from './attribute';
interface ISignature {
    algorithm: string;
    value: BufferSource;
}
export declare class X509AttributeCertificate extends AsnData<AttributeCertificate> {
    readonly serialNumber: string;
    readonly version: number;
    readonly notBefore: Date;
    readonly notAfter: Date;
    readonly validity: string;
    extensions: Extension<TExtensionValue>[];
    attributes: Attribute<TAttributeValue>[];
    thumbprints: Record<string, string>;
    readonly issuer: GeneralName[];
    holder: Holder;
    constructor(raw: string);
    get signature(): ISignature;
    parseExtensions(): void;
    parseAttributes(): void;
    getThumbprint(algorithm?: globalThis.AlgorithmIdentifier): Promise<void>;
    exportAsBase64(): string;
    exportAsHexFormatted(): string;
    exportAsPemFormatted(): string;
    get commonName(): string;
}
export {};
