/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { AsnConvert } from '@peculiar/asn1-schema';
import { ECParameters, id_ecPublicKey } from '@peculiar/asn1-ecc';
import { id_rsaEncryption, RSAPublicKey } from '@peculiar/asn1-rsa';
import { CertificationRequest } from '@peculiar/asn1-csr';
import { Convert } from 'pvtsutils';
import { AsnData } from './asn_data';
import { Name } from './name';
import { Attribute } from './attribute';
import { certificateRawToBuffer, hexFormat, base64Format, getCertificateThumbprint, } from './utils';
export class CSR extends AsnData {
    constructor(raw) {
        super(certificateRawToBuffer(raw), CertificationRequest);
        this.thumbprints = {};
        const { certificationRequestInfo } = this.asn;
        this.subject = new Name(certificationRequestInfo.subject).toJSON();
        this.version = certificationRequestInfo.version;
    }
    get publicKey() {
        const { subjectPublicKey, algorithm } = this.asn.certificationRequestInfo.subjectPKInfo;
        let params;
        if (algorithm.algorithm === id_ecPublicKey && algorithm.parameters) {
            params = AsnConvert.parse(algorithm.parameters, ECParameters);
        }
        if (algorithm.algorithm === id_rsaEncryption) {
            params = AsnConvert.parse(subjectPublicKey, RSAPublicKey);
        }
        const spki = AsnConvert.serialize(this.asn.certificationRequestInfo.subjectPKInfo);
        return {
            params,
            value: spki,
            algorithm: algorithm.algorithm,
        };
    }
    get signature() {
        const { signature, signatureAlgorithm } = this.asn;
        return {
            value: signature,
            algorithm: signatureAlgorithm.algorithm,
        };
    }
    get commonName() {
        if (!this.subject) {
            return '';
        }
        for (let i = 0; i < this.subject.length; i += 1) {
            const name = this.subject[i];
            if (name.shortName === 'CN' || name.shortName === 'E' || name.shortName === 'O') {
                return name.value;
            }
        }
        return '';
    }
    async getThumbprint(algorithm = 'SHA-1') {
        try {
            const thumbprint = await getCertificateThumbprint(algorithm, this.raw);
            this.thumbprints[algorithm['name'] || algorithm] = Convert.ToHex(thumbprint);
        }
        catch (error) {
            console.error('Error thumbprint get:', error);
        }
    }
    parseAttributes() {
        const { certificationRequestInfo } = this.asn;
        if (certificationRequestInfo.attributes) {
            this.attributes = certificationRequestInfo.attributes
                .map((e) => new Attribute(AsnConvert.serialize(e)));
        }
    }
    exportAsBase64() {
        return Convert.ToBase64(this.raw);
    }
    exportAsHexFormatted() {
        return hexFormat(Convert.ToHex(this.raw));
    }
    exportAsPemFormatted() {
        return `-----BEGIN CERTIFICATE REQUEST-----\n${base64Format(this.exportAsBase64())}\n-----END CERTIFICATE REQUEST-----`;
    }
}
