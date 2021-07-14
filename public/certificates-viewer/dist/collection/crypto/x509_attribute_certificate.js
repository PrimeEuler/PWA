/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { AsnConvert } from '@peculiar/asn1-schema';
import { AttributeCertificate } from '@peculiar/asn1-x509-attr';
import { Convert } from 'pvtsutils';
import { dateDiff } from '../utils';
import { AsnData } from './asn_data';
import { Extension } from './extension';
import { Attribute } from './attribute';
import { certificateRawToBuffer, hexFormat, base64Format, getCertificateThumbprint, } from './utils';
export class X509AttributeCertificate extends AsnData {
    constructor(raw) {
        var _a;
        super(certificateRawToBuffer(raw), AttributeCertificate);
        this.thumbprints = {};
        const { acinfo } = this.asn;
        this.serialNumber = Convert.ToHex(acinfo.serialNumber);
        this.version = acinfo.version;
        const notBefore = acinfo.attrCertValidityPeriod.notBeforeTime;
        if (!notBefore) {
            throw new Error("Cannot get 'notBefore' value");
        }
        this.notBefore = notBefore;
        const notAfter = acinfo.attrCertValidityPeriod.notAfterTime;
        if (!notAfter) {
            throw new Error("Cannot get 'notAfter' value");
        }
        this.notAfter = notAfter;
        this.validity = dateDiff(this.notBefore, this.notAfter);
        this.issuer = acinfo.issuer.v1Form || ((_a = acinfo.issuer.v2Form) === null || _a === void 0 ? void 0 : _a.issuerName);
        this.holder = acinfo.holder;
    }
    get signature() {
        const { signatureValue, signatureAlgorithm } = this.asn;
        return {
            value: signatureValue,
            algorithm: signatureAlgorithm.algorithm,
        };
    }
    parseExtensions() {
        const { acinfo } = this.asn;
        if (acinfo.extensions) {
            this.extensions = acinfo.extensions
                .map((e) => new Extension(AsnConvert.serialize(e)));
        }
    }
    parseAttributes() {
        const { acinfo } = this.asn;
        if (acinfo.attributes) {
            this.attributes = acinfo.attributes
                .map((e) => new Attribute(AsnConvert.serialize(e)));
        }
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
    exportAsBase64() {
        return Convert.ToBase64(this.raw);
    }
    exportAsHexFormatted() {
        return hexFormat(Convert.ToHex(this.raw));
    }
    exportAsPemFormatted() {
        return `-----BEGIN ATTRIBUTE CERTIFICATE-----\n${base64Format(this.exportAsBase64())}\n-----END ATTRIBUTE CERTIFICATE-----`;
    }
    get commonName() {
        return `attribute-certificate-${this.thumbprints['SHA-1']}`;
    }
}
