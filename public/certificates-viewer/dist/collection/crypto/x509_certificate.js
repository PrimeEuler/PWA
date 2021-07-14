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
import { Certificate } from '@peculiar/asn1-x509';
import { Convert } from 'pvtsutils';
import { dateDiff } from '../utils';
import { Name } from './name';
import { Extension } from './extension';
import { AsnData } from './asn_data';
import { certificateRawToBuffer, hexFormat, base64Format, getCertificateThumbprint, } from './utils';
export class X509Certificate extends AsnData {
    constructor(raw) {
        super(certificateRawToBuffer(raw), Certificate);
        this.thumbprints = {};
        const { tbsCertificate } = this.asn;
        this.serialNumber = Convert.ToHex(tbsCertificate.serialNumber);
        this.subject = new Name(tbsCertificate.subject).toJSON();
        this.issuer = new Name(tbsCertificate.issuer).toJSON();
        this.version = tbsCertificate.version + 1;
        const notBefore = tbsCertificate.validity.notBefore.utcTime
            || tbsCertificate.validity.notBefore.generalTime;
        if (!notBefore) {
            throw new Error("Cannot get 'notBefore' value");
        }
        this.notBefore = notBefore;
        const notAfter = tbsCertificate.validity.notAfter.utcTime
            || tbsCertificate.validity.notAfter.generalTime;
        if (!notAfter) {
            throw new Error("Cannot get 'notAfter' value");
        }
        this.notAfter = notAfter;
        this.validity = dateDiff(this.notBefore, this.notAfter);
    }
    parseExtensions() {
        const { tbsCertificate } = this.asn;
        if (tbsCertificate.extensions) {
            this.extensions = tbsCertificate.extensions
                .map((e) => new Extension(AsnConvert.serialize(e)));
        }
    }
    get publicKey() {
        const { subjectPublicKey, algorithm } = this.asn.tbsCertificate.subjectPublicKeyInfo;
        let params;
        if (algorithm.algorithm === id_ecPublicKey && algorithm.parameters) {
            params = AsnConvert.parse(algorithm.parameters, ECParameters);
        }
        if (algorithm.algorithm === id_rsaEncryption) {
            params = AsnConvert.parse(subjectPublicKey, RSAPublicKey);
        }
        const spki = AsnConvert.serialize(this.asn.tbsCertificate.subjectPublicKeyInfo);
        return {
            params,
            value: spki,
            algorithm: algorithm.algorithm,
        };
    }
    get signature() {
        const { signatureValue, signatureAlgorithm } = this.asn;
        return {
            value: signatureValue,
            algorithm: signatureAlgorithm.algorithm,
        };
    }
    exportAsBase64() {
        return Convert.ToBase64(this.raw);
    }
    exportAsHexFormatted() {
        return hexFormat(Convert.ToHex(this.raw));
    }
    exportAsPemFormatted() {
        return `-----BEGIN CERTIFICATE-----\n${base64Format(this.exportAsBase64())}\n-----END CERTIFICATE-----`;
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
    get issuerCommonName() {
        if (!this.issuer) {
            return '';
        }
        for (let i = 0; i < this.issuer.length; i += 1) {
            const name = this.issuer[i];
            if (name.shortName === 'CN') {
                return name.value;
            }
            if (name.shortName === 'E') {
                return name.value;
            }
        }
        return '';
    }
    get isRoot() {
        return JSON.stringify(this.issuer) === JSON.stringify(this.subject);
    }
    subjectToString() {
        if (!this.subject) {
            return '';
        }
        return this.subject
            .map((name) => (`${name.shortName}=${name.value}`))
            .join(', ');
    }
    issuerToString() {
        if (!this.issuer) {
            return '';
        }
        return this.issuer
            .map((name) => (`${name.shortName}=${name.value}`))
            .join(', ');
    }
}
