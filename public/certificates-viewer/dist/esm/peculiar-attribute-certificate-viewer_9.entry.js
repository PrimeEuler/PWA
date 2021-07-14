import { h, r as registerInstance, H as Host, c as createEvent } from './index-5ef692cc.js';
import { A as AsnData, a as Attribute$1, i as index, b as id_pkcs9_at_extensionRequest, c as AsnParser, E as ExtensionRequest, d as Extension, e as AsnConvert, f as id_pkcs9_at_unstructuredName, U as UnstructuredName, g as id_pkcs9_at_challengePassword, C as ChallengePassword, h as id_ValuationRanking, V as ValuationRanking, j as id_InsuranceValue, I as InsuranceValue, k as id_WebGDPR, W as WebGDPR, l as id_ActivityDescription, m as ActivityDescription, n as id_TypeRelationship, T as TypeRelationship, o as id_DomainNameTechnicalOperator, D as DomainNameTechnicalOperator, p as id_DomainNameOwner, q as DomainNameOwner, r as id_DomainNameLegalRepresentative, s as DomainNameLegalRepresentative, t as id_DomainNameBeneficiary, u as DomainNameBeneficiary, v as certificateRawToBuffer, w as AttributeCertificate, x as getCertificateThumbprint, y as hexFormat, z as base64Format, B as CertificationRequest, N as Name, F as id_ecPublicKey, G as ECParameters, H as id_rsaEncryption, R as RSAPublicKey, O as OIDs, J as Name$1, K as OtherName, L as DisplayText, M as EDIPartyName, P as UserNotice, Q as KeyUsage, S as BasicConstraints, X as ExtendedKeyUsage, Y as SubjectKeyIdentifier, Z as AuthorityKeyIdentifier, _ as CRLDistributionPoints, $ as AuthorityInfoAccessSyntax, a0 as SubjectAlternativeName, a1 as CertificatePolicies, a2 as CertificateTransparency, a3 as NameConstraints, a4 as CertificateTemplate, a5 as EnrollCertTypeChoice, a6 as CaVersion, a7 as QCStatements, a8 as NetscapeComment, a9 as NetscapeCertType, aa as LeiRoles, ab as LeiChoice, ac as Timestamp, ad as ArchiveRevInfo, ae as CRLReason, af as SubjectDirectoryAttributes, ag as PrivateKeyUsagePeriod, ah as EntrustVersionInfo, ai as BiometricSyntax, aj as Download, ak as isPem, al as isX509Pem, am as isPkcs10Pem, an as isX509AttributePem, ao as X509Certificate } from './download-69df8cfc.js';
import { d as dateDiff, l as l10n, a as dateShort, h as history } from './l10n-f34672bf.js';

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Read file as Binary string
 *
 * @example
 * ```js
 *    const file = new File(['file'], 'file.pdf', { type: 'text/plain' });
 *    readAsBinaryString(file)
 *      .then(result => console.log('Readed success', result))
 *      .catch(err => console.log('An error occured when reading file', err));
 * ```
 */
function readAsBinaryString(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
            value: reader.result,
            fileName: file.name,
            fileSize: file.size,
            sourceMime: file.type,
        });
        reader.onerror = () => reject(reader.error);
        reader.readAsBinaryString(file);
    });
}

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class Attribute extends AsnData {
    constructor(raw) {
        super(raw, Attribute$1);
        const asnExtnValue = this.getAsnExtnValue();
        switch (this.asn.type) {
            case id_DomainNameBeneficiary:
                this.value = AsnParser.parse(asnExtnValue, DomainNameBeneficiary);
                break;
            case id_DomainNameLegalRepresentative:
                this.value = AsnParser.parse(asnExtnValue, DomainNameLegalRepresentative);
                break;
            case id_DomainNameOwner:
                this.value = AsnParser.parse(asnExtnValue, DomainNameOwner);
                break;
            case id_DomainNameTechnicalOperator:
                this.value = AsnParser.parse(asnExtnValue, DomainNameTechnicalOperator);
                break;
            case id_TypeRelationship:
                this.value = AsnParser.parse(asnExtnValue, TypeRelationship);
                break;
            case id_ActivityDescription:
                this.value = AsnParser.parse(asnExtnValue, ActivityDescription);
                break;
            case id_WebGDPR:
                this.value = AsnParser.parse(asnExtnValue, WebGDPR);
                break;
            case id_InsuranceValue:
                this.value = AsnParser.parse(asnExtnValue, InsuranceValue);
                break;
            case id_ValuationRanking:
                this.value = AsnParser.parse(asnExtnValue, ValuationRanking);
                break;
            case id_pkcs9_at_challengePassword:
                this.value = AsnParser.parse(asnExtnValue, ChallengePassword);
                break;
            case id_pkcs9_at_unstructuredName:
                this.value = AsnParser.parse(asnExtnValue, UnstructuredName);
                break;
            case id_pkcs9_at_extensionRequest: {
                const extensionRequest = AsnParser.parse(asnExtnValue, ExtensionRequest);
                this.value = extensionRequest
                    .map((e) => new Extension(AsnConvert.serialize(e)));
                break;
            }
            default:
                this.value = index.Convert.ToHex(asnExtnValue);
        }
    }
    getAsnExtnValue() {
        return this.asn.values[0];
    }
}

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class X509AttributeCertificate extends AsnData {
    constructor(raw) {
        var _a;
        super(certificateRawToBuffer(raw), AttributeCertificate);
        this.thumbprints = {};
        const { acinfo } = this.asn;
        this.serialNumber = index.Convert.ToHex(acinfo.serialNumber);
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
            this.thumbprints[algorithm['name'] || algorithm] = index.Convert.ToHex(thumbprint);
        }
        catch (error) {
            console.error('Error thumbprint get:', error);
        }
    }
    exportAsBase64() {
        return index.Convert.ToBase64(this.raw);
    }
    exportAsHexFormatted() {
        return hexFormat(index.Convert.ToHex(this.raw));
    }
    exportAsPemFormatted() {
        return `-----BEGIN ATTRIBUTE CERTIFICATE-----\n${base64Format(this.exportAsBase64())}\n-----END ATTRIBUTE CERTIFICATE-----`;
    }
    get commonName() {
        return `attribute-certificate-${this.thumbprints['SHA-1']}`;
    }
}

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class CSR extends AsnData {
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
            this.thumbprints[algorithm['name'] || algorithm] = index.Convert.ToHex(thumbprint);
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
        return index.Convert.ToBase64(this.raw);
    }
    exportAsHexFormatted() {
        return hexFormat(index.Convert.ToHex(this.raw));
    }
    exportAsPemFormatted() {
        return `-----BEGIN CERTIFICATE REQUEST-----\n${base64Format(this.exportAsBase64())}\n-----END CERTIFICATE REQUEST-----`;
    }
}

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getStringByOID(value) {
    const oid = OIDs[value];
    if (oid) {
        return `${oid} (${value})`;
    }
    return value;
}

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function isLink(value) {
    return value.indexOf('http') === 0;
}

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const RowTitle = (props) => {
    const { value } = props;
    if (!value) {
        return null;
    }
    return (h("tr", { class: "title" },
        h("td", { colSpan: 2 },
            h("peculiar-typography", { type: "h6" }, value))));
};
const RowValue = (props) => {
    const { name, value, monospace, collapse, href, extraValue, } = props;
    if (!name) {
        return null;
    }
    if (value === undefined || value === null) {
        return null;
    }
    let elementValue;
    if (collapse) {
        elementValue = (h("peculiar-text-hider", null, value));
    }
    else {
        elementValue = value;
    }
    const hasValue = !!value.toString();
    return (h("tr", null,
        h("td", { colSpan: hasValue ? 1 : 2 },
            h("peculiar-typography", { color: "grey_5" },
                name,
                hasValue ? ':' : '')),
        hasValue && (h("td", { class: {
                monospace,
            } }, (isLink(value.toString()) || href) ? (h("peculiar-link", { href: href || value.toString() }, value)) : (h("peculiar-typography", { monospace: monospace },
            elementValue,
            extraValue))))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Signature = (props) => {
    const { signature } = props;
    if (!signature) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('signature') }),
        h(RowValue, { name: l10n.getString('algorithm'), value: getStringByOID(signature.algorithm) }),
        h(RowValue, { name: l10n.getString('value'), value: index.Convert.ToHex(signature.value), monospace: true, collapse: true }),
    ];
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const BasicAttribute = (props, children) => {
    const { attribute } = props;
    return ([
        h(RowValue, { name: "Name", value: getStringByOID(attribute.asn.type) }),
        children,
        h("tr", null,
            h("td", { colSpan: 2, class: "divider" },
                h("span", { class: "bg_fill" }))),
    ]);
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const NamePart = (props) => {
    const { name } = props;
    if (!name) {
        return null;
    }
    return name.map((relativeDistinguishedName) => (relativeDistinguishedName.map((attributeTypeAndValue) => (h(RowValue, { name: OIDs[attributeTypeAndValue.type] || attributeTypeAndValue.type, value: attributeTypeAndValue.value.toString() })))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const NameAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(NamePart, { name: attribute.value })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const names = {
    otherName: 'Other Name',
    rfc822Name: 'RFC 822 Name',
    dNSName: 'DNS Name',
    x400Address: 'X400 Address',
    directoryName: 'Directory Name',
    ediPartyName: 'Edi Party Name ',
    uniformResourceIdentifier: 'URI',
    iPAddress: 'IP Address',
    registeredID: 'Registered ID',
};
const GeneralNamePart = (props) => {
    const { generalName, getDNSNameLink, getIPAddressLink } = props;
    if (!generalName) {
        return null;
    }
    return Object.keys(generalName).map((name) => {
        const value = generalName[name];
        if (value instanceof Name$1) {
            return [
                h(RowValue, { name: names[name] || name, value: "" }),
                value.map((relativeDistinguishedName) => (relativeDistinguishedName.map((attributeTypeAndValue) => (h(RowValue, { name: OIDs[attributeTypeAndValue.type] || attributeTypeAndValue.type, value: attributeTypeAndValue.value.toString() }))))),
            ];
        }
        if (value instanceof OtherName) {
            const text = AsnParser.parse(value.value, DisplayText);
            return (h(RowValue, { name: OIDs[value.typeId], value: text.toString() }));
        }
        if (index.BufferSourceConverter.isBufferSource(value)) {
            return (h(RowValue, { name: names[name] || name, value: index.Convert.ToString(value) }));
        }
        if (value instanceof EDIPartyName) {
            return (h(RowValue, { name: names[name] || name, value: index.Convert.ToString(value.partyName) }));
        }
        if (name === 'dNSName') {
            return (h(RowValue, { name: names[name] || name, value: value, href: getDNSNameLink(value) }));
        }
        if (name === 'iPAddress') {
            return (h(RowValue, { name: names[name] || name, value: value, href: getIPAddressLink(value) }));
        }
        return (h(RowValue, { name: names[name] || name, value: value }));
    });
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ActivityDescriptionAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Code Authority", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.codeAuthority, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Code Id", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.codeId, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Short Name", value: attribute.value.shortName }),
        h(RowValue, { name: "Short Description", value: attribute.value.shortDescription })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const WebGdprAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Assessment Authority", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.assessmentAuthority, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Assessment Location", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.assessmentLocation, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Assessment Ref", value: "" }),
        h(GeneralNamePart, { generalName: attribute.value.assessmentRef, getDNSNameLink: () => '', getIPAddressLink: () => '' }),
        h(RowValue, { name: "Data Storage Territory", value: attribute.value.dataStorageTerritory }),
        h(RowValue, { name: "Description", value: attribute.value.description })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const InsuranceValueAttribute = (props) => {
    const { attribute } = props;
    const value = `${attribute.value.base} * 10^${attribute.value.degree} ${attribute.value.location}`;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Value", value: value })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const TypeRelationshipAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute }, Object.keys(attribute.value).map((keyName) => (h(RowValue, { name: keyName, value: attribute.value[keyName].toNumber() ? 'YES' : 'NO' })))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getValueRank = (value) => {
    let ratio = 1;
    if (value / 100 > 1) {
        ratio = 100;
    }
    else if (value / 10 > 1) {
        ratio = 10;
    }
    return `${value}/${5 * ratio}`;
};
const ValuationRankingAttribute = (props) => {
    const { attribute } = props;
    const values = Object.keys(attribute.value).map((keyName) => ([
        getValueRank(attribute.value[keyName]),
        h("br", null),
    ]));
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Value", value: values })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const AsStringAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Value", value: attribute.value, monospace: true })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const UnstructuredNameAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Value", value: attribute.value.utf8String })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ChallengePasswordAttribute = (props) => {
    const { attribute } = props;
    return (h(BasicAttribute, { attribute: attribute },
        h(RowValue, { name: "Value", value: attribute.value.toString() })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Attributes = (props) => {
    const { attributes } = props;
    if (!attributes || !attributes.length) {
        return null;
    }
    return ([
        h(RowTitle, { value: "Attributes" }),
        attributes.map((attribute) => {
            try {
                if (attribute.value instanceof Name$1) {
                    return (h(NameAttribute, { attribute: attribute }));
                }
                if (attribute.value instanceof ActivityDescription) {
                    return (h(ActivityDescriptionAttribute, { attribute: attribute }));
                }
                if (attribute.value instanceof WebGDPR) {
                    return (h(WebGdprAttribute, { attribute: attribute }));
                }
                if (attribute.value instanceof InsuranceValue) {
                    return (h(InsuranceValueAttribute, { attribute: attribute }));
                }
                if (attribute.value instanceof TypeRelationship) {
                    return (h(TypeRelationshipAttribute, { attribute: attribute }));
                }
                if (attribute.value instanceof ValuationRanking) {
                    return (h(ValuationRankingAttribute, { attribute: attribute }));
                }
                if (attribute.value instanceof UnstructuredName) {
                    return (h(UnstructuredNameAttribute, { attribute: attribute }));
                }
                if (attribute.value instanceof ChallengePassword) {
                    return (h(ChallengePasswordAttribute, { attribute: attribute }));
                }
                if (typeof attribute.value === 'string') {
                    return (h(AsStringAttribute, { attribute: attribute }));
                }
                return (h(BasicAttribute, { attribute: attribute }));
            }
            catch (error) {
                console.error('Error render attribute:', attribute.asn.type);
                return null;
            }
        }),
    ]);
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Thumbprints = (props) => {
    const { thumbprints } = props;
    if (!thumbprints) {
        return null;
    }
    const keys = Object.keys(thumbprints);
    if (!keys.length) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('fingerprints') }),
        keys.map((name) => (h(RowValue, { name: name, value: thumbprints[name], monospace: true }))),
    ];
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const BasicExtension = (props, children) => {
    const { extension } = props;
    return ([
        h(RowValue, { name: "Name", value: getStringByOID(extension.asn.extnID) }),
        h(RowValue, { name: "Critical", value: extension.asn.critical ? 'YES' : 'NO' }),
        children,
        h("tr", null,
            h("td", { colSpan: 2, class: "divider" },
                h("span", { class: "bg_fill" }))),
    ]);
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const KeyUsageExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Usage", value: extension.value.toJSON().join(', ') })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const BasicConstraintsExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Certificate Authority", value: extension.value.cA ? 'YES' : 'NO' }),
        h(RowValue, { name: "Path Length Constraint", value: extension.value.pathLenConstraint })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ExtendedKeyUsageExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((usage, arrayIndex) => (h(RowValue, { name: `Purpose #${arrayIndex + 1}`, value: getStringByOID(usage) })))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const SubjectKeyIdentifierExtension = (props) => {
    const { extension, getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink } = props;
    const keyId = index.Convert.ToHex(extension.value.buffer);
    const childrenLink = getSubjectKeyIdChildrenLink(keyId);
    const siblingsLink = getSubjectKeyIdSiblingsLink(keyId);
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Key ID", value: keyId, monospace: true, extraValue: [
                childrenLink && (h("span", null,
                    "\u00A0[",
                    h("peculiar-link", { href: childrenLink }, "children"),
                    "]")),
                siblingsLink && (h("span", null,
                    "\u00A0[",
                    h("peculiar-link", { href: siblingsLink }, "siblings"),
                    "]")),
            ] })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const AuthorityKeyIdentifierExtension = (props) => {
    const { extension, getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink } = props;
    const keyId = index.Convert.ToHex(extension.value.keyIdentifier.buffer);
    const parentLink = getAuthKeyIdParentLink(keyId);
    const siblingsLink = getAuthKeyIdSiblingsLink(keyId);
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Key ID", value: keyId, monospace: true, extraValue: [
                parentLink && (h("span", null,
                    "\u00A0[",
                    h("peculiar-link", { href: parentLink }, "parents"),
                    "]")),
                siblingsLink && (h("span", null,
                    "\u00A0[",
                    h("peculiar-link", { href: siblingsLink }, "siblings"),
                    "]")),
            ] })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const CRLDistributionPointsExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((point) => {
        var _a;
        return ((_a = point === null || point === void 0 ? void 0 : point.distributionPoint) === null || _a === void 0 ? void 0 : _a.fullName.map((gn) => (h(GeneralNamePart, Object.assign({ generalName: gn }, props)))));
    })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const AuthorityInfoAccessSyntaxExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((description, arrayIndex) => ([
        h(RowValue, { name: `Method #${arrayIndex + 1}`, value: getStringByOID(description.accessMethod) }),
        h(GeneralNamePart, Object.assign({ generalName: description.accessLocation }, props)),
    ]))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const SubjectAlternativeNameExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((gn) => (h(GeneralNamePart, Object.assign({ generalName: gn }, props))))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const CertificatePoliciesExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((policy, arrayIndex) => {
        var _a;
        return ([
            h(RowValue, { name: `Policy ID #${arrayIndex + 1}`, value: getStringByOID(policy.policyIdentifier) }),
            (_a = policy.policyQualifiers) === null || _a === void 0 ? void 0 : _a.map((qualifierInfo, indexInfo) => {
                const data = [
                    h(RowValue, { name: `Qualifier ID #${indexInfo + 1}`, value: getStringByOID(qualifierInfo.policyQualifierId) }),
                ];
                if (qualifierInfo.policyQualifierId === '1.3.6.1.5.5.7.2.1') {
                    const value = AsnParser.parse(qualifierInfo.qualifier, DisplayText);
                    data.push(h(RowValue, { name: "Value", value: value.toString() }));
                }
                if (qualifierInfo.policyQualifierId === '1.3.6.1.5.5.7.2.2') {
                    const value = AsnParser.parse(qualifierInfo.qualifier, UserNotice);
                    if (value.explicitText) {
                        data.push(h(RowValue, { name: "Value", value: value.explicitText.toString() }));
                    }
                }
                return data;
            }),
            h("tr", null,
                h("td", null),
                h("td", null)),
        ]);
    })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const logs = {
    '9606c02c690033aa1d145f59c6e2648d0549f0df96aab8db915a70d8ecf390a5': 'Akamai CT',
    '39376f545f7b4607f59742d768cd5d2437bf3473b6534a4834bcf72e681c83c9': 'Alpha CT',
    a577ac9ced7548dd8f025b67a241089df86e0f476ec203c2ecbedb185f282638: 'CNNIC CT',
    cdb5179b7fc1c046feea31136a3f8f002e6182faf8896fecc8b2f5b5ab604900: 'Certly.IO',
    '1fbc36e002ede97f40199e86b3573b8a4217d80187746ad0da03a06054d20df4': 'Cloudflare “Nimbus2017”',
    db74afeecb29ecb1feca3e716d2ce5b9aabb36f7847183c75d9d4f37b61fbf64: 'Cloudflare “Nimbus2018”',
    '747eda8331ad331091219cce254f4270c2bffd5e422008c6373579e6107bcc56': 'Cloudflare “Nimbus2019”',
    '5ea773f9df56c0e7b536487dd049e0327a919a0c84a112128418759681714558': 'Cloudflare “Nimbus2020”',
    '4494652eb0eeceafc44007d8a8fe28c0dae682bed8cb31b53fd33396b5b681a8': 'Cloudflare “Nimbus2021”',
    '41c8cab1df22464a10c6a13a0942875e4e318b1b03ebeb4bc768f090629606f6': 'Cloudflare “Nimbus2022”',
    '7a328c54d8b72db620ea38e0521ee98416703213854d3bd22bc13a57a352eb52': 'Cloudflare “Nimbus2023”',
    '6ff141b5647e4222f7ef052cefae7c21fd608e27d2af5a6e9f4b8a37d6633ee5': 'DigiCert Nessie2018',
    fe446108b1d01ab78a62ccfeab6ab2b2babff3abdad80a4d8b30df2d0008830c: 'DigiCert Nessie2019',
    c652a0ec48ceb3fcab170992c43a87413309e80065a26252401ba3362a17c565: 'DigiCert Nessie2020',
    eec095ee8d72640f92e3c3b91bc712a3696a097b4b6a1a1438e647b2cbedc5f9: 'DigiCert Nessie2021',
    '51a3b0f5fd01799c566db837788f0ca47acc1b27cbf79e88429a0dfed48b05e5': 'DigiCert Nessie2022',
    b3737707e18450f86386d605a9dc11094a792db1670c0b87dcf0030e7936a59a: 'DigiCert Nessie2023',
    '5614069a2fd7c2ecd3f5e1bd44b23ec74676b9bc99115cc0ef949855d689d0dd': 'DigiCert Server',
    '8775bfe7597cf88c43995fbdf36eff568d475636ff4ab560c1b4eaff5ea0830f': 'DigiCert Server 2',
    c1164ae0a772d2d4392dc80ac10770d4f0c49bde991a4840c1fa075164f63360: 'DigiCert Yeti2018',
    e2694bae26e8e94009e8861bb63b83d43ee7fe7488fba48f2893019dddf1dbfe: 'DigiCert Yeti2019',
    f095a459f200d18240102d2f93888ead4bfe1d47e399e1d034a6b0a8aa8eb273: 'DigiCert Yeti2020',
    '5cdc4392fee6ab4544b15e9ad456e61037fbd5fa47dca17394b25ee6f6c70eca': 'DigiCert Yeti2021',
    '2245450759552456963fa12ff1f76d86e0232663adc04b7f5dc6835c6ee20f02': 'DigiCert Yeti2022',
    '35cf191bbfb16c57bf0fad4c6d42cbbbb627202651ea3fe12aefa803c33bd64c': 'DigiCert Yeti2023',
    '717ea7420975be84a2723553f1777c26dd51af4e102144094d9019b462fb6668': 'GDCA 1',
    '14308d90ccd030135005c01ca526d81e84e87624e39b6248e08f724aea3bb42a': 'GDCA 2',
    c9cf890a21109c666cc17a3ed065c930d0e0135a9feba85af14210b8072421aa: 'GDCA CT #1',
    '924a30f909336ff435d6993a10ac75a2c641728e7fc2d659ae6188ffad40ce01': 'GDCA CT #2',
    fad4c97cc49ee2f8ac85c5ea5cea09d0220dbbf4e49c6b50662ff868f86b8c28: 'Google “Argon2017”',
    a4501269055a15545e6211ab37bc103f62ae5576a45e4b1714453e1b22106a25: 'Google “Argon2018”',
    '63f2dbcde83bcc2ccf0b728427576b33a48d61778fbd75a638b1c768544bd88d': 'Google “Argon2019”',
    b21e05cc8ba2cd8a204e8766f92bb98a2520676bdafa70e7b249532def8b905e: 'Google “Argon2020”',
    f65c942fd1773022145418083094568ee34d131933bfdf0c2f200bcc4ef164e3: 'Google “Argon2021”',
    '2979bef09e393921f056739f63a577e5be577d9c600af8f94d5d265c255dc784': 'Google “Argon2022”',
    '68f698f81f6482be3a8ceeb9281d4cfc71515d6793d444d10a67acbb4f4ffbc4': 'Google “Aviator”',
    c3bf03a7e1ca8841c607bae3ff4270fca5ec45b186ebbe4e2cf3fc778630f5f6: 'Google “Crucible”',
    '1d024b8eb1498b344dfd87ea3efc0996f7506f235d1d497061a4773c439c25fb': 'Google “Daedalus”',
    '293c519654c83965baaa50fc5807d4b76fbf587a2972dca4c30cf4e54547f478': 'Google “Icarus”',
    a4b90990b418581487bb13a2cc67700a3c359804f91bdfb8e377cd0ec80ddc10: 'Google “Pilot”',
    ee4bbdb775ce60bae142691fabe19e66a30f7e5fb072d88300c47b897aa8fdcb: 'Google “Rocketeer”',
    bbd9dfbc1f8a71b593942397aa927b473857950aab52e81a909664368e1ed185: 'Google “Skydiver”',
    '52eb4b225ec896974850675f23e43bc1d021e3214ce52ecd5fa87c203cdfca03': 'Google “Solera2018”',
    '0b760e9a8b9a682f88985b15e947501a56446bba8830785c3842994386450c00': 'Google “Solera2019”',
    '1fc72ce5a1b799f400c359bff96ca3913548e8644220610952e9ba1774f7bac7': 'Google “Solera2020”',
    a3c99845e80ab7ce00157b3742df0207dd272b2b602ecf98ee2c12db9c5ae7e7: 'Google “Solera2021”',
    '697aafca1a6b536fae21205046debad7e0eaea13d2432e6e9d8fb379f2b9aaf3': 'Google “Solera2022”',
    a899d8780c9290aaf462f31880ccfbd52451e970d0fbf591ef75b0d99b645681: 'Google “Submariner”',
    b0cc83e5a5f97d6baf7c09cc284904872ac7e88b132c6350b7c6fd26e16c6c77: 'Google “Testtube”',
    b10cd559a6d67846811f7df9a51532739ac48d703bea0323da5d38755bc0ad4e: 'Google “Xenon2018”',
    '084114980071532c16190460bcfc47fdc2653afa292c72b37ff863ae29ccc9f0': 'Google “Xenon2019”',
    '07b75c1be57d68fff1b0c61d2315c7bae6577c5794b76aeebc613a1a69d3a21c': 'Google “Xenon2020”',
    '7d3ef2f88fff88556824c2c0ca9e5289792bc50e78097f2e6a9768997e22f0d7': 'Google “Xenon2021”',
    '46a555eb75fa912030b5a28969f4f37d112c4174befd49b885abf2fc70fe6d47': 'Google “Xenon2022”',
    '7461b4a09cfb3d41d75159575b2e7649a445a8d27709b0cc564a6482b7eb41a3': 'Izenpe',
    '8941449c70742e06b9fc9ce7b116ba0024aa36d59af44f0204404f00f7ea8566': 'Izenpe “Argi”',
    '296afa2d568bca0d2ea844956ae9721fc35fa355ecda99693aafd458a71aefdd': 'Let“s Encrypt ”Clicky”',
    '537b69a3564335a9c04904e39593b2c298eb8d7a6e83023635c627248cd6b440': 'Nordu “flimsy”',
    aae70b7f3cb8d566c86c2f16979c9f445f69ab0eb4535589b2f77a030104f3cd: 'Nordu “plausible”',
    e0127629e90496564e3d0147984498aa48f8adb16600eb7902a1ef9909906273: 'PuChuangSiDa CT',
    cf55e28923497c340d5206d05353aeb25834b52f1f8dc9526809f212efdd7ca6: 'SHECA CT 1',
    '32dc59c2d4c41968d56e14bc61ac8f0e45db39faf3c155aa4252f5001fa0c623': 'SHECA CT 2',
    db76fdadac65e7d09508886e2159bd8b90352f5fead3e3dc5e22eb350acc7b98: 'Sectigo (Comodo) “Dodo” CT',
    '6f5376ac31f03119d89900a45115ff77151c11d902c10029068db2089a37d913': 'Sectigo (Comodo) “Mammoth” CT',
    '5581d4c2169036014aea0b9b573c53f0c0e43878702508172fa3aa1d0713d30c': 'Sectigo (Comodo) “Sabre” CT',
    '34bb6ad6c3df9c03eea8a499ff7891486c9d5e5cac92d01f7bfd1bce19db48ef': 'StartCom',
    ddeb1d2b7a0d4fa6208b81ad8168707e2e8e9d01d55c888d3d11c4cdb6ecbecc: 'Symantec',
    a7ce4a4e6207e0addee5fdaa4b1f86768767b5d002a55d47310e7e670a95eab2: 'Symantec Deneb',
    '15970488d7b997a05beb52512adee8d2e8b4a3165264121a9fabfbd5f85ad93f': 'Symantec “Sirius”',
    bc78e1dfc5f63c684649334da10fa15f0979692009c081b4f3f6917f3ed9b8a5: 'Symantec “Vega”',
    b0b784bc81c0ddc47544e883f05985bb9077d134d8ab88b2b2e533980b8e508b: 'Up In The Air “Behind the Sofa”',
    ac3b9aed7fa9674757159e6d7d575672f9d98100941e9bdeffeca1313b75782d: 'Venafi',
    '03019df3fd85a69a8ebd1facc6da9ba73e469774fe77f579fc5a08b8328c1d6b': 'Venafi Gen2 CT',
    '41b2dc2e89e63ce4af1ba7bb29bf68c6dee6f9f1cc047e30dffae3b3ba259263': 'WoSign',
    '63d0006026dde10bb0601f452446965ee2b6ea2cd4fbc95ac866a550af9075b7': 'WoSign 2',
    '9e4ff73dc3ce220b69217c899e468076abf8d78636d5ccfc85a31a75628ba88b': 'WoSign CT #1',
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const CertificateTransparencyExtension = (props) => {
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

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const NameConstraintsExtension = (props) => {
    var _a, _b;
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, (_a = extension.value.excludedSubtrees) === null || _a === void 0 ? void 0 :
        _a.map((generalSubtree) => (h(GeneralNamePart, Object.assign({ generalName: generalSubtree.base }, props)))), (_b = extension.value.permittedSubtrees) === null || _b === void 0 ? void 0 :
        _b.map((generalSubtree) => (h(GeneralNamePart, Object.assign({ generalName: generalSubtree.base }, props))))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const CertificateTemplateExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Template ID", value: extension.value.templateID }),
        h(RowValue, { name: "Template Major Version", value: extension.value.templateMajorVersion }),
        h(RowValue, { name: "Template Minor Version", value: extension.value.templateMinorVersion })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const EnrollCertTypeChoiceExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Name", value: extension.value.toString() })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const CaVersionExtension = (props) => {
    const { extension } = props;
    const version = extension.value.getVersion();
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Certificate Index", value: version.certificateIndex }),
        h(RowValue, { name: "Key Index", value: version.keyIndex })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const QCStatementsExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((statement, arrayIndex) => (h(RowValue, { name: `Statement #${arrayIndex + 1}`, value: getStringByOID(statement.statementId) })))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const NetscapeCommentExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Comment", value: extension.value.value })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const NetscapeCertTypeExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Type", value: extension.value.toJSON().join(', ') })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const LeiRolesExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Role", value: extension.value.text })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const LeiExtension = (props) => {
    const { extension, getLEILink } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Identifier", value: extension.value.text, href: getLEILink(extension.value.text) })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const TimestampExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Version", value: extension.value.version }),
        h(GeneralNamePart, Object.assign({ generalName: extension.value.location }, props)),
        h(RowValue, { name: "Requires Auth", value: extension.value.requiresAuth ? 'YES' : 'NO' })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ArchiveRevInfoExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Version", value: extension.value.version })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const CRLReasonExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Reason", value: extension.value.toJSON() })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getAttributeValue(attribute) {
    return index.Convert.ToString(attribute.values[0]);
}

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const SubjectDirectoryAttributesExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((attribute, arrayIndex) => ([
        h(RowValue, { name: `Attribute #${arrayIndex + 1}`, value: getStringByOID(attribute.type) }),
        h(RowValue, { name: `Value #${arrayIndex + 1}`, value: getAttributeValue(attribute) }),
        h("tr", null,
            h("td", null),
            h("td", null)),
    ]))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const AsStringExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Value", value: extension.value, monospace: true })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const PrivateKeyUsagePeriodExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Not Before", value: dateShort(extension.value.notBefore) }),
        h(RowValue, { name: "Not After", value: dateShort(extension.value.notAfter) })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const EntrustVersionInfoExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension },
        h(RowValue, { name: "Version", value: extension.value.entrustVers }),
        h(RowValue, { name: "Info Flags", value: extension.value.entrustInfoFlags.toJSON().join(', ') })));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const BiometricSyntaxExtension = (props) => {
    const { extension } = props;
    return (h(BasicExtension, { extension: extension }, extension.value.map((data, arrayIndex) => ([
        h(RowValue, { name: `Biometric Oid #${arrayIndex + 1}`, value: getStringByOID(data.typeOfBiometricData.biometricDataOid) }),
        h(RowValue, { name: `Biometric Type #${arrayIndex + 1}`, value: data.typeOfBiometricData.predefinedBiometricType }),
        h(RowValue, { name: `Algorithm #${arrayIndex + 1}`, value: getStringByOID(data.hashAlgorithm.algorithm) }),
        h(RowValue, { name: `Biometric Hash #${arrayIndex + 1}`, value: index.Convert.ToHex(data.biometricDataHash.buffer), monospace: true }),
        h(RowValue, { name: `Source Uri #${arrayIndex + 1}`, value: data.sourceDataUri }),
        h("tr", null,
            h("td", null),
            h("td", null)),
    ]))));
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Extensions = (props) => {
    const { extensions, title } = props;
    if (!extensions || !extensions.length) {
        return null;
    }
    return ([
        h(RowTitle, { value: title || 'Extensions' }),
        extensions.map((extension) => {
            try {
                if (extension.value instanceof KeyUsage) {
                    return (h(KeyUsageExtension, { extension: extension }));
                }
                if (extension.value instanceof BasicConstraints) {
                    return (h(BasicConstraintsExtension, { extension: extension }));
                }
                if (extension.value instanceof ExtendedKeyUsage) {
                    return (h(ExtendedKeyUsageExtension, { extension: extension }));
                }
                if (extension.value instanceof SubjectKeyIdentifier) {
                    return (h(SubjectKeyIdentifierExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof AuthorityKeyIdentifier) {
                    return (h(AuthorityKeyIdentifierExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof CRLDistributionPoints) {
                    return (h(CRLDistributionPointsExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof AuthorityInfoAccessSyntax) {
                    return (h(AuthorityInfoAccessSyntaxExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof SubjectAlternativeName) {
                    return (h(SubjectAlternativeNameExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof CertificatePolicies) {
                    return (h(CertificatePoliciesExtension, { extension: extension }));
                }
                if (extension.value instanceof CertificateTransparency) {
                    return (h(CertificateTransparencyExtension, { extension: extension }));
                }
                if (extension.value instanceof NameConstraints) {
                    return (h(NameConstraintsExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof CertificateTemplate) {
                    return (h(CertificateTemplateExtension, { extension: extension }));
                }
                if (extension.value instanceof EnrollCertTypeChoice) {
                    return (h(EnrollCertTypeChoiceExtension, { extension: extension }));
                }
                if (extension.value instanceof CaVersion) {
                    return (h(CaVersionExtension, { extension: extension }));
                }
                if (extension.value instanceof QCStatements) {
                    return (h(QCStatementsExtension, { extension: extension }));
                }
                if (extension.value instanceof NetscapeComment) {
                    return (h(NetscapeCommentExtension, { extension: extension }));
                }
                if (extension.value instanceof NetscapeCertType) {
                    return (h(NetscapeCertTypeExtension, { extension: extension }));
                }
                if (extension.value instanceof LeiRoles) {
                    return (h(LeiRolesExtension, { extension: extension }));
                }
                if (extension.value instanceof LeiChoice) {
                    return (h(LeiExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof Timestamp) {
                    return (h(TimestampExtension, Object.assign({ extension: extension }, props)));
                }
                if (extension.value instanceof ArchiveRevInfo) {
                    return (h(ArchiveRevInfoExtension, { extension: extension }));
                }
                if (extension.value instanceof CRLReason) {
                    return (h(CRLReasonExtension, { extension: extension }));
                }
                if (extension.value instanceof SubjectDirectoryAttributes) {
                    return (h(SubjectDirectoryAttributesExtension, { extension: extension }));
                }
                if (extension.value instanceof PrivateKeyUsagePeriod) {
                    return (h(PrivateKeyUsagePeriodExtension, { extension: extension }));
                }
                if (extension.value instanceof EntrustVersionInfo) {
                    return (h(EntrustVersionInfoExtension, { extension: extension }));
                }
                if (extension.value instanceof BiometricSyntax) {
                    return (h(BiometricSyntaxExtension, { extension: extension }));
                }
                if (typeof extension.value === 'string') {
                    return (h(AsStringExtension, { extension: extension }));
                }
                return (h(BasicExtension, { extension: extension }));
            }
            catch (error) {
                console.error('Error render extension:', extension.asn.extnID);
                return null;
            }
        }),
    ]);
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const BasicInformation = (props) => {
    const { serialNumber, version, validity, notBefore, notAfter, } = props;
    return [
        h(RowTitle, { value: l10n.getString('basicInformation') }),
        h(RowValue, { name: l10n.getString('serialNumber'), value: serialNumber, monospace: true }),
        h(RowValue, { name: l10n.getString('version'), value: version }),
        h(RowValue, { name: l10n.getString('validity'), value: validity }),
        h(RowValue, { name: l10n.getString('issued'), value: dateShort(notBefore) }),
        h(RowValue, { name: l10n.getString('expired'), value: dateShort(notAfter) }),
    ];
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
const Miscellaneous = (props) => {
    const { certificate } = props;
    return [
        h(RowTitle, { value: l10n.getString('miscellaneous') }),
        h("tr", null,
            h("td", { class: "vertical_align_middle" },
                h("peculiar-typography", { color: "grey_5" },
                    l10n.getString('download'),
                    ":")),
            h("td", null,
                h("peculiar-button-split", { onClick: downloadCertificateAsPem.bind(undefined, certificate), actions: [{
                            text: l10n.getString('download.der'),
                            onClick: downloadCertificateAsDer.bind(undefined, certificate),
                        }] }, l10n.getString('download.pem')))),
    ];
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Issuer = (props) => {
    const { issuer } = props;
    if (!issuer) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('issuer') }),
        issuer.map((item) => (h(GeneralNamePart, { generalName: item, getDNSNameLink: () => '', getIPAddressLink: () => '' }))),
    ];
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Holder = (props) => {
    const { holder } = props;
    if (!holder) {
        return null;
    }
    const { baseCertificateID, objectDigestInfo } = holder;
    return [
        h(RowTitle, { value: l10n.getString('holder') }),
        baseCertificateID && ([
            baseCertificateID.issuer.map((item) => (h(GeneralNamePart, { generalName: item, getDNSNameLink: () => '', getIPAddressLink: () => '' }))),
            h("tr", null,
                h("td", null),
                h("td", null)),
            h(RowValue, { name: l10n.getString('serialNumber'), value: index.Convert.ToHex(baseCertificateID.serial), monospace: true }),
            h("tr", null,
                h("td", null),
                h("td", null)),
        ]),
        objectDigestInfo && ([
            h(RowValue, { name: l10n.getString('digestInfo'), value: "" }),
            h(RowValue, { name: l10n.getString('algorithm'), value: getStringByOID(objectDigestInfo.digestAlgorithm.algorithm) }),
            h(RowValue, { name: l10n.getString('value'), value: index.Convert.ToHex(objectDigestInfo.objectDigest), monospace: true }),
            h(RowValue, { name: l10n.getString('type'), value: objectDigestInfo.digestedObjectType }),
        ]),
    ];
};

const certificateViewerCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:white;background:rgba(var(--pv-color-light-rgb), 1)}th,td{border:none}table{width:100%;margin-bottom:30px;border-spacing:0;border-collapse:collapse}table .title td{border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table td:first-child{padding-left:30px;width:130px;padding-right:10px}table td:last-child{padding-right:30px;width:calc(100% - 130px)}table td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td.vertical_align_middle{vertical-align:middle}table .title:first-child td{padding-top:15px}table .title+tr td{padding-top:15px}table td.monospace{max-width:0}table .divider{padding-top:15px;padding-bottom:15px}.divider .bg_fill{background-color:rgba(209, 213, 217, 0.5);background-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr:last-child .divider{padding-top:0;opacity:0}.divider span{display:block;height:1px}.status_wrapper{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{padding-right:15px;padding-left:15px;width:100%}table .title+tr td{padding-top:5px}table .title+tr td:first-child{padding-top:15px}table td.monospace{width:100%;max-width:none}}:host([data-view=mobile]) table,:host([data-view=mobile]) tr,:host([data-view=mobile]) td{display:block}:host([data-view=mobile]) table td:last-child,:host([data-view=mobile]) table td:first-child{padding-right:15px;padding-left:15px;width:100%}:host([data-view=mobile]) table .title+tr td{padding-top:5px}:host([data-view=mobile]) table .title+tr td:first-child{padding-top:15px}:host([data-view=mobile]) table td.monospace{width:100%;max-width:none}";

const AttributeCertificateViewer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDecodeInProcess = true;
        this.getAuthKeyIdParentLink = (value) => { var _a; return (_a = this.authKeyIdParentLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getAuthKeyIdSiblingsLink = (value) => { var _a; return (_a = this.authKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getSubjectKeyIdChildrenLink = (value) => { var _a; return (_a = this.subjectKeyIdChildrenLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
        this.getSubjectKeyIdSiblingsLink = (value) => { var _a; return (_a = this.subjectKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
    }
    componentWillLoad() {
        this.decodeCertificate(this.certificate);
    }
    async decodeCertificate(certificate) {
        this.isDecodeInProcess = true;
        try {
            if (certificate instanceof X509AttributeCertificate) {
                this.certificateDecoded = certificate;
            }
            else if (typeof certificate === 'string') {
                this.certificateDecoded = new X509AttributeCertificate(certificate);
            }
            else {
                return;
            }
            this.certificateDecoded.parseExtensions();
            this.certificateDecoded.parseAttributes();
            await this.certificateDecoded.getThumbprint('SHA-1');
            await this.certificateDecoded.getThumbprint('SHA-256');
        }
        catch (error) {
            this.certificateDecodeError = error;
            console.error('Error certificate parse:', error);
        }
        this.isDecodeInProcess = false;
    }
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    watchCertificateAndDecode(newValue, oldValue) {
        if (typeof newValue === 'string' && typeof oldValue === 'string') {
            if (newValue !== oldValue) {
                this.decodeCertificate(newValue);
            }
            return;
        }
        if (newValue instanceof X509AttributeCertificate
            && oldValue instanceof X509AttributeCertificate) {
            if (newValue.serialNumber !== oldValue.serialNumber) {
                this.decodeCertificate(newValue);
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    getLEILink(value) {
        return `https://search.gleif.org/#/record/${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getDNSNameLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getIPAddressLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    renderErrorState() {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is error for attribute certificate decode.")));
    }
    // eslint-disable-next-line class-methods-use-this
    renderEmptyState() {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is no attribute certificate available.")));
    }
    render() {
        if (this.certificateDecodeError) {
            return this.renderErrorState();
        }
        if (!this.certificateDecoded) {
            return this.renderEmptyState();
        }
        return (h(Host, null, h("table", null, h(BasicInformation, Object.assign({}, this.certificateDecoded)), h(Issuer, { issuer: this.certificateDecoded.issuer }), h(Holder, { holder: this.certificateDecoded.holder }), h(Signature, { signature: this.certificateDecoded.signature }), h(Thumbprints, { thumbprints: this.certificateDecoded.thumbprints }), h(Attributes, { attributes: this.certificateDecoded.attributes, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), h(Extensions, { extensions: this.certificateDecoded.extensions, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), this.download && (h(Miscellaneous, { certificate: this.certificateDecoded })))));
    }
    static get watchers() { return {
        "certificate": ["watchCertificateAndDecode"]
    }; }
};
AttributeCertificateViewer.style = certificateViewerCss;

const buttonCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;width:auto;cursor:pointer;position:relative;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;--pv-button-padding-end:5px;--pv-button-padding-start:5px}.button{font-family:\"Open Sans\", \"Arial\", sans-serif;font-family:var(--pv-font-family);font-size:13px;font-size:var(--pv-font-size-b3);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;border-style:solid;border-width:1px;font-weight:400;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;vertical-align:middle;cursor:inherit;height:30px;line-height:30px;border-radius:2px;padding:0 5px;padding:0 var(--pv-button-padding-end) 0 var(--pv-button-padding-start)}.button::-moz-focus-inner{border:0}.button:focus{outline:none;-webkit-box-shadow:0 4px 10px 0 rgba(var(--pv-color-dark-rgb), 0.1);box-shadow:0 4px 10px 0 rgba(var(--pv-color-dark-rgb), 0.1)}.button[disabled]{opacity:0.5;cursor:not-allowed}.button_stroke{border-color:rgba(53, 132, 247, 0.3);border-color:rgba(var(--pv-color-primary-rgb), 0.3);color:#3584f7;color:rgba(var(--pv-color-primary-rgb), 1);background-color:transparent}.button_fill{border-color:#3584f7;border-color:rgba(var(--pv-color-primary-rgb), 1);background-color:#3584f7;background-color:rgba(var(--pv-color-primary-rgb), 1);color:white;color:rgba(var(--pv-color-light-rgb), 1)}.button_label{-webkit-transition:opacity 200ms;transition:opacity 200ms}.button:hover .button_label{opacity:0.7}";

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fill = 'stroke';
        this.handleClick = (event) => {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (this.onClick) {
                this.onClick(event);
            }
        };
    }
    render() {
        const isLink = !!this.href;
        const TagType = isLink ? 'a' : 'button';
        return (h(TagType, { class: {
                button: true,
                button_stroke: this.fill === 'stroke',
                button_fill: this.fill === 'fill',
                button_disabled: this.disabled,
            }, disabled: this.disabled, type: !isLink && 'button', href: isLink && this.href, target: isLink && this.target ? this.target : null, rel: isLink && 'noreferrer noopener', onClick: this.handleClick, part: "base" }, h("span", { part: "label", class: "button_label" }, h("slot", null))));
    }
};
Button.style = buttonCss;

const buttonSplitCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;vertical-align:top;position:relative;white-space:nowrap;font-size:0}.button_split_icon{width:7px;height:5px;display:inline-block;vertical-align:middle}.button_split_with_icon{width:25px;border-bottom-left-radius:0;border-top-left-radius:0}.button_split_with_icon.m_open::part(base):before{position:fixed;width:100%;height:100%;top:0;left:0;content:\"\"}.button_split_action{width:100%}.button_split_container{position:absolute;bottom:calc(100% + 1px);left:0;width:100%;border-radius:2px;-webkit-box-shadow:0px -2px 1px rgb(var(--pv-color-light-rgb)), 0px 0px 10px rgba(var(--pv-color-dark-rgb), 0.0241168);box-shadow:0px -2px 1px rgb(var(--pv-color-light-rgb)), 0px 0px 10px rgba(var(--pv-color-dark-rgb), 0.0241168);z-index:1}.button_split>peculiar-button:first-of-type::part(base){border-top-right-radius:0;border-bottom-right-radius:0}.button_split>peculiar-button:last-of-type::part(base){border-top-left-radius:0;border-bottom-left-radius:0}.button_split>peculiar-button:not(:first-child){margin-left:-1px}";

const ButtonSplit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fill = 'stroke';
        this.actions = [];
        this.open = false;
        this.onClickSplitButton = (event) => {
            event.stopPropagation();
            this.open = !this.open;
        };
    }
    onClickActiveButton(action, event) {
        this.open = false;
        action(event);
    }
    renderActiveSplitState() {
        if (!this.open) {
            return null;
        }
        return (h("div", { class: "button_split_container" }, this.actions.map((action) => (h("peculiar-button", { fill: "fill", class: "button_split_action", onClick: this.onClickActiveButton.bind(this, action.onClick) }, action.text)))));
    }
    render() {
        return (h("div", { class: {
                button_split: true,
            } }, h("peculiar-button", { fill: this.fill, onClick: this.onClick }, h("slot", null)), h("peculiar-button", { fill: this.fill, onClick: this.onClickSplitButton, class: {
                button_split_with_icon: true,
                m_open: this.open,
            } }, h("svg", { viewBox: "0 0 7 5", xmlns: "http://www.w3.org/2000/svg", class: "button_split_icon" }, h("path", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z" }))), this.renderActiveSplitState()));
    }
};
ButtonSplit.style = buttonSplitCss;

const certificateDecoderCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;display:block;width:100%;font-size:0}.textarea{min-height:300px;width:100%;border-radius:3px;border-width:1px;border-style:solid;padding:14px;font-family:monospace;resize:vertical;background-color:white;background-color:rgba(var(--pv-color-light-rgb), 1);border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1);color:#2a3134;color:rgba(var(--pv-color-dark-rgb), 1);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);font-size:14px;font-size:var(--pv-font-size-h7)}.controls{margin-top:10px}.button{position:relative}.button:not(:first-child){margin-left:10px}.viewer{margin-top:64px}.input_file{opacity:0;width:100%;height:100%;top:0;left:0;display:block;position:absolute}";

const CertificateDecoder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClickDecode = () => {
            const { value } = this.inputPaste;
            if (value) {
                this.decode(value);
            }
        };
        this.onClickExample = () => {
            this.decode(this.certificateExample);
        };
        this.onClickClear = () => {
            this.clearValue();
        };
        this.onChangeInputFile = async (e) => {
            const element = e.target;
            if (element.files) {
                const file = await readAsBinaryString(element.files[0]);
                if (typeof file.value === 'string') {
                    this.decode(file.value);
                }
                element.value = '';
            }
        };
        this.onDropFile = async (e) => {
            e.stopPropagation();
            e.preventDefault();
            const element = e.dataTransfer;
            if (element.files) {
                const file = await readAsBinaryString(element.files[0]);
                if (typeof file.value === 'string') {
                    this.decode(file.value);
                }
            }
        };
    }
    componentDidLoad() {
        const parsedHash = history.parseHash(window.location.search);
        if (parsedHash.cert) {
            /**
             * Prevent Stencil warning about re-render
             */
            setTimeout(() => this.decode(parsedHash.cert), 100);
        }
    }
    clearValue() {
        this.inputPaste.value = '';
        this.certificateDecoded = null;
        history.replace({ search: '' });
    }
    setValue(value) {
        this.certificateDecoded = value;
        this.inputPaste.value = value.exportAsPemFormatted();
        history.replace({
            search: history.queryStringify({
                cert: value.exportAsBase64(),
            }),
        });
    }
    decode(certificate) {
        const isPem$1 = isPem(certificate);
        const isX509Pem$1 = isX509Pem(certificate);
        const isPkcs10Pem$1 = isPkcs10Pem(certificate);
        const isX509AttributePem$1 = isX509AttributePem(certificate);
        let decoded;
        let decodeError;
        if (isPem$1 && !(isX509Pem$1 || isX509AttributePem$1 || isPkcs10Pem$1)) {
            this.clearValue();
            alert('Unsupported file type. Please try to use Certificate/AttributeCertificate/CertificateRequest.');
            return;
        }
        try {
            if (isX509Pem$1) {
                decoded = new X509Certificate(certificate);
            }
            if (isX509AttributePem$1) {
                decoded = new X509AttributeCertificate(certificate);
            }
            if (isPkcs10Pem$1) {
                decoded = new CSR(certificate);
            }
        }
        catch (error) {
            decodeError = error;
        }
        if (!decoded) {
            try {
                decoded = new X509Certificate(certificate);
            }
            catch (error) {
                decodeError = error;
            }
        }
        if (!decoded) {
            try {
                decoded = new X509AttributeCertificate(certificate);
            }
            catch (error) {
                decodeError = error;
            }
        }
        if (!decoded) {
            try {
                decoded = new CSR(certificate);
            }
            catch (error) {
                decodeError = error;
            }
        }
        if (!decoded) {
            this.clearValue();
            console.log(decodeError);
            alert('Error decoding file. Please try to use Certificate/AttributeCertificate/CertificateRequest.');
        }
        else {
            this.setValue(decoded);
        }
    }
    render() {
        return (h(Host, null, h("textarea", { placeholder: "Certificate DER or PEM", class: "textarea", ref: (el) => { this.inputPaste = el; }, onDrop: this.onDropFile }), h("div", { class: "controls" }, h("peculiar-button", { fill: "fill", class: "button", onClick: this.onClickDecode }, "Decode"), h("peculiar-button", { class: "button" }, "Choose file", h("input", { type: "file", class: "input_file", accept: "application/pkix-cert,application/x-x509-ca-cert,application/x-x509-user-cert,application/pkcs10,.csr,.req", onChange: this.onChangeInputFile, value: "" })), h("peculiar-button", { class: "button", onClick: this.onClickClear }, "Clear"), this.certificateExample && (h("peculiar-button", { class: "button", onClick: this.onClickExample }, "Example"))), this.certificateDecoded instanceof X509Certificate && (h("peculiar-certificate-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true })), this.certificateDecoded instanceof X509AttributeCertificate && (h("peculiar-attribute-certificate-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true })), this.certificateDecoded instanceof CSR && (h("peculiar-csr-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true }))));
    }
};
CertificateDecoder.style = certificateDecoderCss;

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getPublicKeyModulus(publicKey) {
    var _a;
    if ((_a = publicKey.params) === null || _a === void 0 ? void 0 : _a['modulus']) {
        let length = publicKey.params['modulus'].byteLength;
        if (length % 2) {
            length -= 1;
        }
        return length * 8;
    }
    return null;
}
function getPublicKeyExponent(publicKey) {
    var _a;
    if ((_a = publicKey.params) === null || _a === void 0 ? void 0 : _a['publicExponent']) {
        return publicKey.params['publicExponent'].byteLength === 3
            ? 65537
            : 3;
    }
    return null;
}
const PublicKey = (props) => {
    var _a;
    const { publicKey } = props;
    if (!publicKey) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('publicKeyInfo') }),
        h(RowValue, { name: l10n.getString('algorithm'), value: getStringByOID(publicKey.algorithm) }),
        h(RowValue, { name: l10n.getString('namedCurve'), value: getStringByOID((_a = publicKey.params) === null || _a === void 0 ? void 0 : _a['namedCurve']) }),
        h(RowValue, { name: l10n.getString('exponent'), value: getPublicKeyExponent(publicKey) }),
        h(RowValue, { name: l10n.getString('modulus'), value: getPublicKeyModulus(publicKey) }),
        h(RowValue, { name: l10n.getString('value'), value: index.Convert.ToHex(publicKey.value), monospace: true, collapse: true }),
    ];
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const SubjectName = (props) => {
    const { name } = props;
    if (!name || !name.length) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('subjectName') }),
        name.map((n) => (h(RowValue, { name: n.name || n.type, value: n.value }))),
    ];
};

/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const IssuerName = (props) => {
    const { name, issuerDnLink } = props;
    if (!name || !name.length) {
        return null;
    }
    const title = l10n.getString('issuerName');
    return [
        h(RowTitle, { value: issuerDnLink ? (h("peculiar-link", { href: issuerDnLink, type: "h6" }, title)) : title }),
        name.map((n) => (h(RowValue, { name: n.name || n.type, value: n.value }))),
    ];
};

const certificateViewerCss$1 = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:white;background:rgba(var(--pv-color-light-rgb), 1)}th,td{border:none}table{width:100%;margin-bottom:30px;border-spacing:0;border-collapse:collapse}table .title td{border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table td:first-child{padding-left:30px;width:130px;padding-right:10px}table td:last-child{padding-right:30px;width:calc(100% - 130px)}table td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td.vertical_align_middle{vertical-align:middle}table .title:first-child td{padding-top:15px}table .title+tr td{padding-top:15px}table td.monospace{max-width:0}table .divider{padding-top:15px;padding-bottom:15px}.divider .bg_fill{background-color:rgba(209, 213, 217, 0.5);background-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr:last-child .divider{padding-top:0;opacity:0}.divider span{display:block;height:1px}.status_wrapper{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{padding-right:15px;padding-left:15px;width:100%}table .title+tr td{padding-top:5px}table .title+tr td:first-child{padding-top:15px}table td.monospace{width:100%;max-width:none}}:host([data-view=mobile]) table,:host([data-view=mobile]) tr,:host([data-view=mobile]) td{display:block}:host([data-view=mobile]) table td:last-child,:host([data-view=mobile]) table td:first-child{padding-right:15px;padding-left:15px;width:100%}:host([data-view=mobile]) table .title+tr td{padding-top:5px}:host([data-view=mobile]) table .title+tr td:first-child{padding-top:15px}:host([data-view=mobile]) table td.monospace{width:100%;max-width:none}";

const CertificateViewer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDecodeInProcess = true;
        this.getAuthKeyIdParentLink = (value) => { var _a; return (_a = this.authKeyIdParentLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getAuthKeyIdSiblingsLink = (value) => { var _a; return (_a = this.authKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getSubjectKeyIdChildrenLink = (value) => { var _a; return (_a = this.subjectKeyIdChildrenLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
        this.getSubjectKeyIdSiblingsLink = (value) => { var _a; return (_a = this.subjectKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
    }
    componentWillLoad() {
        this.decodeCertificate(this.certificate);
    }
    async decodeCertificate(certificate) {
        this.isDecodeInProcess = true;
        try {
            if (certificate instanceof X509Certificate) {
                this.certificateDecoded = certificate;
            }
            else if (typeof certificate === 'string') {
                this.certificateDecoded = new X509Certificate(certificate);
            }
            else {
                return;
            }
            this.certificateDecoded.parseExtensions();
            await this.certificateDecoded.getThumbprint('SHA-1');
            await this.certificateDecoded.getThumbprint('SHA-256');
        }
        catch (error) {
            this.certificateDecodeError = error;
            console.error('Error certificate parse:', error);
        }
        this.isDecodeInProcess = false;
    }
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    watchCertificateAndDecode(newValue, oldValue) {
        if (typeof newValue === 'string' && typeof oldValue === 'string') {
            if (newValue !== oldValue) {
                this.decodeCertificate(newValue);
            }
            return;
        }
        if (newValue instanceof X509Certificate && oldValue instanceof X509Certificate) {
            if (newValue.serialNumber !== oldValue.serialNumber) {
                this.decodeCertificate(newValue);
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    getLEILink(value) {
        return `https://search.gleif.org/#/record/${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getDNSNameLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getIPAddressLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    getIssuerDnLink() {
        return this.issuerDnLink;
    }
    // eslint-disable-next-line class-methods-use-this
    renderErrorState() {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is error for certificate decode.")));
    }
    // eslint-disable-next-line class-methods-use-this
    renderEmptyState() {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is no certificate available.")));
    }
    render() {
        if (this.certificateDecodeError) {
            return this.renderErrorState();
        }
        if (!this.certificateDecoded) {
            return this.renderEmptyState();
        }
        return (h(Host, { "data-view": this.view }, h("table", null, h(BasicInformation, Object.assign({}, this.certificateDecoded)), h(SubjectName, { name: this.certificateDecoded.subject }), h(IssuerName, { name: this.certificateDecoded.issuer, issuerDnLink: this.getIssuerDnLink() }), h(PublicKey, { publicKey: this.certificateDecoded.publicKey }), h(Signature, { signature: this.certificateDecoded.signature }), h(Thumbprints, { thumbprints: this.certificateDecoded.thumbprints }), h(Extensions, { extensions: this.certificateDecoded.extensions, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), this.download && (h(Miscellaneous, { certificate: this.certificateDecoded })))));
    }
    static get watchers() { return {
        "certificate": ["watchCertificateAndDecode"]
    }; }
};
CertificateViewer.style = certificateViewerCss$1;

const certificateViewerCss$2 = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:white;background:rgba(var(--pv-color-light-rgb), 1)}th,td{border:none}table{width:100%;margin-bottom:30px;border-spacing:0;border-collapse:collapse}table .title td{border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table td:first-child{padding-left:30px;width:130px;padding-right:10px}table td:last-child{padding-right:30px;width:calc(100% - 130px)}table td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td.vertical_align_middle{vertical-align:middle}table .title:first-child td{padding-top:15px}table .title+tr td{padding-top:15px}table td.monospace{max-width:0}table .divider{padding-top:15px;padding-bottom:15px}.divider .bg_fill{background-color:rgba(209, 213, 217, 0.5);background-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr:last-child .divider{padding-top:0;opacity:0}.divider span{display:block;height:1px}.status_wrapper{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{padding-right:15px;padding-left:15px;width:100%}table .title+tr td{padding-top:5px}table .title+tr td:first-child{padding-top:15px}table td.monospace{width:100%;max-width:none}}:host([data-view=mobile]) table,:host([data-view=mobile]) tr,:host([data-view=mobile]) td{display:block}:host([data-view=mobile]) table td:last-child,:host([data-view=mobile]) table td:first-child{padding-right:15px;padding-left:15px;width:100%}:host([data-view=mobile]) table .title+tr td{padding-top:5px}:host([data-view=mobile]) table .title+tr td:first-child{padding-top:15px}:host([data-view=mobile]) table td.monospace{width:100%;max-width:none}";

const CsrViewer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDecodeInProcess = true;
        this.getAuthKeyIdParentLink = (value) => value;
        this.getAuthKeyIdSiblingsLink = (value) => value;
        this.getSubjectKeyIdChildrenLink = (value) => { var _a; return (_a = this.subjectKeyIdChildrenLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
        this.getSubjectKeyIdSiblingsLink = (value) => { var _a; return (_a = this.subjectKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
    }
    componentWillLoad() {
        this.decodeCertificate(this.certificate);
    }
    async decodeCertificate(certificate) {
        this.isDecodeInProcess = true;
        try {
            if (certificate instanceof CSR) {
                this.certificateDecoded = certificate;
            }
            else if (typeof certificate === 'string') {
                this.certificateDecoded = new CSR(certificate);
            }
            else {
                return;
            }
            this.certificateDecoded.parseAttributes();
            await this.certificateDecoded.getThumbprint('SHA-1');
            await this.certificateDecoded.getThumbprint('SHA-256');
        }
        catch (error) {
            this.certificateDecodeError = error;
            console.error('Error certificate parse:', error);
        }
        this.isDecodeInProcess = false;
    }
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    watchCertificateAndDecode(newValue, oldValue) {
        if (typeof newValue === 'string' && typeof oldValue === 'string') {
            if (newValue !== oldValue) {
                this.decodeCertificate(newValue);
            }
            return;
        }
        if (newValue instanceof CSR
            && oldValue instanceof CSR) {
            if (newValue.commonName !== oldValue.commonName) {
                this.decodeCertificate(newValue);
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    getLEILink(value) {
        return `https://search.gleif.org/#/record/${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getDNSNameLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    getIPAddressLink(value) {
        return `https://censys.io/ipv4?q=${value}`;
    }
    // eslint-disable-next-line class-methods-use-this
    renderErrorState() {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is error for certificate request decode.")));
    }
    // eslint-disable-next-line class-methods-use-this
    renderEmptyState() {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is no certificate request available.")));
    }
    getExtensionRequestAttribute() {
        if (!this.certificateDecoded) {
            return undefined;
        }
        return this.certificateDecoded.attributes
            .find((attribute) => attribute.asn.type === '1.2.840.113549.1.9.14');
    }
    render() {
        if (this.certificateDecodeError) {
            return this.renderErrorState();
        }
        if (!this.certificateDecoded) {
            return this.renderEmptyState();
        }
        const extensionRequestAttribute = this.getExtensionRequestAttribute();
        return (h(Host, { "data-view": this.view }, h("table", null, h(SubjectName, { name: this.certificateDecoded.subject }), h(PublicKey, { publicKey: this.certificateDecoded.publicKey }), h(Signature, { signature: this.certificateDecoded.signature }), h(Thumbprints, { thumbprints: this.certificateDecoded.thumbprints }), h(Attributes, { attributes: this.certificateDecoded.attributes, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), h(Extensions, { extensions: extensionRequestAttribute === null || extensionRequestAttribute === void 0 ? void 0 : extensionRequestAttribute.value, title: "Extension Request", getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), this.download && (h(Miscellaneous, { certificate: this.certificateDecoded })))));
    }
    static get watchers() { return {
        "certificate": ["watchCertificateAndDecode"]
    }; }
};
CsrViewer.style = certificateViewerCss$2;

const linkCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;display:inline-block}.link{font-family:\"Open Sans\", \"Arial\", sans-serif;font-family:var(--pv-font-family);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);line-height:1.4;line-height:var(--pv-line-height-normal);color:#3584f7;color:rgba(var(--pv-color-primary-rgb), 1);font-weight:400;margin:0;padding:0}.link_type_h4{font-size:17px;font-size:var(--pv-font-size-h4);font-weight:600}.link_type_h6{font-size:15px;font-size:var(--pv-font-size-h6);font-weight:600}.link_type_h7{font-size:14px;font-size:var(--pv-font-size-h7);font-weight:600}.link_type_b1{font-size:15px;font-size:var(--pv-font-size-b1)}.link_type_b3{font-size:13px;font-size:var(--pv-font-size-b3)}.link:hover{text-decoration:none}";

const Link = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Typography type.
         */
        this.type = 'b3';
    }
    render() {
        return (h("a", { href: this.href, target: "_blank", rel: "noreferrer noopener", class: {
                link: true,
                [`link_type_${this.type || 'b3'}`]: true,
            } }, h("slot", null)));
    }
};
Link.style = linkCss;

const textHiderCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%}.text{display:inline-block;width:calc(100% - 60px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0}.text.m_opened{white-space:initial}.action{vertical-align:top;display:inline-block;width:60px;text-align:right;position:relative;top:-6px}.button_action{width:30px}.expand_icon{width:7px;height:5px;display:inline-block}.m_opened .expand_icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}";

const TextHider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textExpand = createEvent(this, "textExpand", 7);
        this.opened = false;
    }
    textExpandHandler() {
        this.opened = !this.opened;
    }
    render() {
        return (h(Host, null, h("div", { class: "root" }, h("div", { class: {
                text: true,
                m_opened: this.opened,
            } }, h("slot", null)), h("div", { class: "action" }, h("peculiar-button", { onClick: this.textExpand.emit, class: {
                button_action: true,
                m_opened: this.opened,
            }, fill: this.opened ? 'fill' : 'stroke' }, h("svg", { viewBox: "0 0 7 5", xmlns: "http://www.w3.org/2000/svg", class: "expand_icon" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", fill: "currentColor", d: "M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z" })))))));
    }
};
TextHider.style = textHiderCss;

const typographyCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;display:block}.typography{font-family:\"Open Sans\", \"Arial\", sans-serif;font-family:var(--pv-font-family);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);line-height:1.4;line-height:var(--pv-line-height-normal);font-weight:400;margin:0;padding:0;display:block}.typography_type_h4{font-size:17px;font-size:var(--pv-font-size-h4);font-weight:600}.typography_type_h6{font-size:15px;font-size:var(--pv-font-size-h6);font-weight:600}.typography_type_h7{font-size:14px;font-size:var(--pv-font-size-h7);font-weight:600}.typography_type_b1{font-size:15px;font-size:var(--pv-font-size-b1)}.typography_type_b3{font-size:13px;font-size:var(--pv-font-size-b3)}.typography_color_dark{color:#2a3134;color:rgba(var(--pv-color-dark-rgb), 1)}.typography_color_light{color:white;color:rgba(var(--pv-color-light-rgb), 1)}.typography_color_grey_3{color:#d1d5d9;color:rgba(var(--pv-color-grey_3-rgb), 1)}.typography_color_grey_5{color:#869196;color:rgba(var(--pv-color-grey_5-rgb), 1)}.typography_color_attention{color:#f7a831;color:rgba(var(--pv-color-attention-rgb), 1)}.typography_color_primary{color:#3584f7;color:rgba(var(--pv-color-primary-rgb), 1)}.typography_ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.typography_monospace{font-family:monospace}.typography_align_left{text-align:left}.typography_align_center{text-align:center}.typography_align_right{text-align:right}";

const PeculiarTypography = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Typography type.
         */
        this.type = 'b3';
        /**
         * Component color from theme.
         */
        this.color = 'dark';
    }
    render() {
        const TagType = this.type && this.type.includes('h') ? this.type : 'p';
        return (h(TagType, { class: {
                typography: true,
                [`typography_type_${this.type || 'b3'}`]: true,
                [`typography_color_${this.color || 'dark'}`]: true,
                [`typography_align_${this.align}`]: !!this.align,
                typography_ellipsis: this.ellipsis,
                typography_monospace: this.monospace,
            } }, h("slot", null)));
    }
};
PeculiarTypography.style = typographyCss;

export { AttributeCertificateViewer as peculiar_attribute_certificate_viewer, Button as peculiar_button, ButtonSplit as peculiar_button_split, CertificateDecoder as peculiar_certificate_decoder, CertificateViewer as peculiar_certificate_viewer, CsrViewer as peculiar_csr_viewer, Link as peculiar_link, TextHider as peculiar_text_hider, PeculiarTypography as peculiar_typography };
