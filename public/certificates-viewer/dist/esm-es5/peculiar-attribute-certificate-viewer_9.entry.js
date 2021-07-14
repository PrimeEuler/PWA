var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve({
            value: reader.result,
            fileName: file.name,
            fileSize: file.size,
            sourceMime: file.type,
        }); };
        reader.onerror = function () { return reject(reader.error); };
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
var Attribute = /** @class */ (function (_super) {
    __extends(Attribute, _super);
    function Attribute(raw) {
        var _this = _super.call(this, raw, Attribute$1) || this;
        var asnExtnValue = _this.getAsnExtnValue();
        switch (_this.asn.type) {
            case id_DomainNameBeneficiary:
                _this.value = AsnParser.parse(asnExtnValue, DomainNameBeneficiary);
                break;
            case id_DomainNameLegalRepresentative:
                _this.value = AsnParser.parse(asnExtnValue, DomainNameLegalRepresentative);
                break;
            case id_DomainNameOwner:
                _this.value = AsnParser.parse(asnExtnValue, DomainNameOwner);
                break;
            case id_DomainNameTechnicalOperator:
                _this.value = AsnParser.parse(asnExtnValue, DomainNameTechnicalOperator);
                break;
            case id_TypeRelationship:
                _this.value = AsnParser.parse(asnExtnValue, TypeRelationship);
                break;
            case id_ActivityDescription:
                _this.value = AsnParser.parse(asnExtnValue, ActivityDescription);
                break;
            case id_WebGDPR:
                _this.value = AsnParser.parse(asnExtnValue, WebGDPR);
                break;
            case id_InsuranceValue:
                _this.value = AsnParser.parse(asnExtnValue, InsuranceValue);
                break;
            case id_ValuationRanking:
                _this.value = AsnParser.parse(asnExtnValue, ValuationRanking);
                break;
            case id_pkcs9_at_challengePassword:
                _this.value = AsnParser.parse(asnExtnValue, ChallengePassword);
                break;
            case id_pkcs9_at_unstructuredName:
                _this.value = AsnParser.parse(asnExtnValue, UnstructuredName);
                break;
            case id_pkcs9_at_extensionRequest: {
                var extensionRequest = AsnParser.parse(asnExtnValue, ExtensionRequest);
                _this.value = extensionRequest
                    .map(function (e) { return new Extension(AsnConvert.serialize(e)); });
                break;
            }
            default:
                _this.value = index.Convert.ToHex(asnExtnValue);
        }
        return _this;
    }
    Attribute.prototype.getAsnExtnValue = function () {
        return this.asn.values[0];
    };
    return Attribute;
}(AsnData));
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X509AttributeCertificate = /** @class */ (function (_super) {
    __extends(X509AttributeCertificate, _super);
    function X509AttributeCertificate(raw) {
        var _this = this;
        var _a;
        _this = _super.call(this, certificateRawToBuffer(raw), AttributeCertificate) || this;
        _this.thumbprints = {};
        var acinfo = _this.asn.acinfo;
        _this.serialNumber = index.Convert.ToHex(acinfo.serialNumber);
        _this.version = acinfo.version;
        var notBefore = acinfo.attrCertValidityPeriod.notBeforeTime;
        if (!notBefore) {
            throw new Error("Cannot get 'notBefore' value");
        }
        _this.notBefore = notBefore;
        var notAfter = acinfo.attrCertValidityPeriod.notAfterTime;
        if (!notAfter) {
            throw new Error("Cannot get 'notAfter' value");
        }
        _this.notAfter = notAfter;
        _this.validity = dateDiff(_this.notBefore, _this.notAfter);
        _this.issuer = acinfo.issuer.v1Form || ((_a = acinfo.issuer.v2Form) === null || _a === void 0 ? void 0 : _a.issuerName);
        _this.holder = acinfo.holder;
        return _this;
    }
    Object.defineProperty(X509AttributeCertificate.prototype, "signature", {
        get: function () {
            var _c = this.asn, signatureValue = _c.signatureValue, signatureAlgorithm = _c.signatureAlgorithm;
            return {
                value: signatureValue,
                algorithm: signatureAlgorithm.algorithm,
            };
        },
        enumerable: false,
        configurable: true
    });
    X509AttributeCertificate.prototype.parseExtensions = function () {
        var acinfo = this.asn.acinfo;
        if (acinfo.extensions) {
            this.extensions = acinfo.extensions
                .map(function (e) { return new Extension(AsnConvert.serialize(e)); });
        }
    };
    X509AttributeCertificate.prototype.parseAttributes = function () {
        var acinfo = this.asn.acinfo;
        if (acinfo.attributes) {
            this.attributes = acinfo.attributes
                .map(function (e) { return new Attribute(AsnConvert.serialize(e)); });
        }
    };
    X509AttributeCertificate.prototype.getThumbprint = function (algorithm) {
        if (algorithm === void 0) { algorithm = 'SHA-1'; }
        return __awaiter(this, void 0, void 0, function () {
            var thumbprint, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getCertificateThumbprint(algorithm, this.raw)];
                    case 1:
                        thumbprint = _c.sent();
                        this.thumbprints[algorithm['name'] || algorithm] = index.Convert.ToHex(thumbprint);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _c.sent();
                        console.error('Error thumbprint get:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    X509AttributeCertificate.prototype.exportAsBase64 = function () {
        return index.Convert.ToBase64(this.raw);
    };
    X509AttributeCertificate.prototype.exportAsHexFormatted = function () {
        return hexFormat(index.Convert.ToHex(this.raw));
    };
    X509AttributeCertificate.prototype.exportAsPemFormatted = function () {
        return "-----BEGIN ATTRIBUTE CERTIFICATE-----\n" + base64Format(this.exportAsBase64()) + "\n-----END ATTRIBUTE CERTIFICATE-----";
    };
    Object.defineProperty(X509AttributeCertificate.prototype, "commonName", {
        get: function () {
            return "attribute-certificate-" + this.thumbprints['SHA-1'];
        },
        enumerable: false,
        configurable: true
    });
    return X509AttributeCertificate;
}(AsnData));
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CSR = /** @class */ (function (_super) {
    __extends(CSR, _super);
    function CSR(raw) {
        var _this = _super.call(this, certificateRawToBuffer(raw), CertificationRequest) || this;
        _this.thumbprints = {};
        var certificationRequestInfo = _this.asn.certificationRequestInfo;
        _this.subject = new Name(certificationRequestInfo.subject).toJSON();
        _this.version = certificationRequestInfo.version;
        return _this;
    }
    Object.defineProperty(CSR.prototype, "publicKey", {
        get: function () {
            var _c = this.asn.certificationRequestInfo.subjectPKInfo, subjectPublicKey = _c.subjectPublicKey, algorithm = _c.algorithm;
            var params;
            if (algorithm.algorithm === id_ecPublicKey && algorithm.parameters) {
                params = AsnConvert.parse(algorithm.parameters, ECParameters);
            }
            if (algorithm.algorithm === id_rsaEncryption) {
                params = AsnConvert.parse(subjectPublicKey, RSAPublicKey);
            }
            var spki = AsnConvert.serialize(this.asn.certificationRequestInfo.subjectPKInfo);
            return {
                params: params,
                value: spki,
                algorithm: algorithm.algorithm,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSR.prototype, "signature", {
        get: function () {
            var _c = this.asn, signature = _c.signature, signatureAlgorithm = _c.signatureAlgorithm;
            return {
                value: signature,
                algorithm: signatureAlgorithm.algorithm,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CSR.prototype, "commonName", {
        get: function () {
            if (!this.subject) {
                return '';
            }
            for (var i = 0; i < this.subject.length; i += 1) {
                var name = this.subject[i];
                if (name.shortName === 'CN' || name.shortName === 'E' || name.shortName === 'O') {
                    return name.value;
                }
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    CSR.prototype.getThumbprint = function (algorithm) {
        if (algorithm === void 0) { algorithm = 'SHA-1'; }
        return __awaiter(this, void 0, void 0, function () {
            var thumbprint, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getCertificateThumbprint(algorithm, this.raw)];
                    case 1:
                        thumbprint = _c.sent();
                        this.thumbprints[algorithm['name'] || algorithm] = index.Convert.ToHex(thumbprint);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _c.sent();
                        console.error('Error thumbprint get:', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CSR.prototype.parseAttributes = function () {
        var certificationRequestInfo = this.asn.certificationRequestInfo;
        if (certificationRequestInfo.attributes) {
            this.attributes = certificationRequestInfo.attributes
                .map(function (e) { return new Attribute(AsnConvert.serialize(e)); });
        }
    };
    CSR.prototype.exportAsBase64 = function () {
        return index.Convert.ToBase64(this.raw);
    };
    CSR.prototype.exportAsHexFormatted = function () {
        return hexFormat(index.Convert.ToHex(this.raw));
    };
    CSR.prototype.exportAsPemFormatted = function () {
        return "-----BEGIN CERTIFICATE REQUEST-----\n" + base64Format(this.exportAsBase64()) + "\n-----END CERTIFICATE REQUEST-----";
    };
    return CSR;
}(AsnData));
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getStringByOID(value) {
    var oid = OIDs[value];
    if (oid) {
        return oid + " (" + value + ")";
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
var RowTitle = function (props) {
    var value = props.value;
    if (!value) {
        return null;
    }
    return (h("tr", { class: "title" }, h("td", { colSpan: 2 }, h("peculiar-typography", { type: "h6" }, value))));
};
var RowValue = function (props) {
    var name = props.name, value = props.value, monospace = props.monospace, collapse = props.collapse, href = props.href, extraValue = props.extraValue;
    if (!name) {
        return null;
    }
    if (value === undefined || value === null) {
        return null;
    }
    var elementValue;
    if (collapse) {
        elementValue = (h("peculiar-text-hider", null, value));
    }
    else {
        elementValue = value;
    }
    var hasValue = !!value.toString();
    return (h("tr", null, h("td", { colSpan: hasValue ? 1 : 2 }, h("peculiar-typography", { color: "grey_5" }, name, hasValue ? ':' : '')), hasValue && (h("td", { class: {
            monospace: monospace,
        } }, (isLink(value.toString()) || href) ? (h("peculiar-link", { href: href || value.toString() }, value)) : (h("peculiar-typography", { monospace: monospace }, elementValue, extraValue))))));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Signature = function (props) {
    var signature = props.signature;
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
var BasicAttribute = function (props, children) {
    var attribute = props.attribute;
    return ([
        h(RowValue, { name: "Name", value: getStringByOID(attribute.asn.type) }),
        children,
        h("tr", null, h("td", { colSpan: 2, class: "divider" }, h("span", { class: "bg_fill" }))),
    ]);
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NamePart = function (props) {
    var name = props.name;
    if (!name) {
        return null;
    }
    return name.map(function (relativeDistinguishedName) { return (relativeDistinguishedName.map(function (attributeTypeAndValue) { return (h(RowValue, { name: OIDs[attributeTypeAndValue.type] || attributeTypeAndValue.type, value: attributeTypeAndValue.value.toString() })); })); });
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NameAttribute = function (props) {
    var attribute = props.attribute;
    return (h(BasicAttribute, { attribute: attribute }, h(NamePart, { name: attribute.value })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var names = {
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
var GeneralNamePart = function (props) {
    var generalName = props.generalName, getDNSNameLink = props.getDNSNameLink, getIPAddressLink = props.getIPAddressLink;
    if (!generalName) {
        return null;
    }
    return Object.keys(generalName).map(function (name) {
        var value = generalName[name];
        if (value instanceof Name$1) {
            return [
                h(RowValue, { name: names[name] || name, value: "" }),
                value.map(function (relativeDistinguishedName) { return (relativeDistinguishedName.map(function (attributeTypeAndValue) { return (h(RowValue, { name: OIDs[attributeTypeAndValue.type] || attributeTypeAndValue.type, value: attributeTypeAndValue.value.toString() })); })); }),
            ];
        }
        if (value instanceof OtherName) {
            var text = AsnParser.parse(value.value, DisplayText);
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
var ActivityDescriptionAttribute = function (props) {
    var attribute = props.attribute;
    return (h(BasicAttribute, { attribute: attribute }, h(RowValue, { name: "Code Authority", value: "" }), h(GeneralNamePart, { generalName: attribute.value.codeAuthority, getDNSNameLink: function () { return ''; }, getIPAddressLink: function () { return ''; } }), h(RowValue, { name: "Code Id", value: "" }), h(GeneralNamePart, { generalName: attribute.value.codeId, getDNSNameLink: function () { return ''; }, getIPAddressLink: function () { return ''; } }), h(RowValue, { name: "Short Name", value: attribute.value.shortName }), h(RowValue, { name: "Short Description", value: attribute.value.shortDescription })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WebGdprAttribute = function (props) {
    var attribute = props.attribute;
    return (h(BasicAttribute, { attribute: attribute }, h(RowValue, { name: "Assessment Authority", value: "" }), h(GeneralNamePart, { generalName: attribute.value.assessmentAuthority, getDNSNameLink: function () { return ''; }, getIPAddressLink: function () { return ''; } }), h(RowValue, { name: "Assessment Location", value: "" }), h(GeneralNamePart, { generalName: attribute.value.assessmentLocation, getDNSNameLink: function () { return ''; }, getIPAddressLink: function () { return ''; } }), h(RowValue, { name: "Assessment Ref", value: "" }), h(GeneralNamePart, { generalName: attribute.value.assessmentRef, getDNSNameLink: function () { return ''; }, getIPAddressLink: function () { return ''; } }), h(RowValue, { name: "Data Storage Territory", value: attribute.value.dataStorageTerritory }), h(RowValue, { name: "Description", value: attribute.value.description })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var InsuranceValueAttribute = function (props) {
    var attribute = props.attribute;
    var value = attribute.value.base + " * 10^" + attribute.value.degree + " " + attribute.value.location;
    return (h(BasicAttribute, { attribute: attribute }, h(RowValue, { name: "Value", value: value })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var TypeRelationshipAttribute = function (props) {
    var attribute = props.attribute;
    return (h(BasicAttribute, { attribute: attribute }, Object.keys(attribute.value).map(function (keyName) { return (h(RowValue, { name: keyName, value: attribute.value[keyName].toNumber() ? 'YES' : 'NO' })); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var getValueRank = function (value) {
    var ratio = 1;
    if (value / 100 > 1) {
        ratio = 100;
    }
    else if (value / 10 > 1) {
        ratio = 10;
    }
    return value + "/" + 5 * ratio;
};
var ValuationRankingAttribute = function (props) {
    var attribute = props.attribute;
    var values = Object.keys(attribute.value).map(function (keyName) { return ([
        getValueRank(attribute.value[keyName]),
        h("br", null),
    ]); });
    return (h(BasicAttribute, { attribute: attribute }, h(RowValue, { name: "Value", value: values })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AsStringAttribute = function (props) {
    var attribute = props.attribute;
    return (h(BasicAttribute, { attribute: attribute }, h(RowValue, { name: "Value", value: attribute.value, monospace: true })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var UnstructuredNameAttribute = function (props) {
    var attribute = props.attribute;
    return (h(BasicAttribute, { attribute: attribute }, h(RowValue, { name: "Value", value: attribute.value.utf8String })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ChallengePasswordAttribute = function (props) {
    var attribute = props.attribute;
    return (h(BasicAttribute, { attribute: attribute }, h(RowValue, { name: "Value", value: attribute.value.toString() })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Attributes = function (props) {
    var attributes = props.attributes;
    if (!attributes || !attributes.length) {
        return null;
    }
    return ([
        h(RowTitle, { value: "Attributes" }),
        attributes.map(function (attribute) {
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
var Thumbprints = function (props) {
    var thumbprints = props.thumbprints;
    if (!thumbprints) {
        return null;
    }
    var keys = Object.keys(thumbprints);
    if (!keys.length) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('fingerprints') }),
        keys.map(function (name) { return (h(RowValue, { name: name, value: thumbprints[name], monospace: true })); }),
    ];
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BasicExtension = function (props, children) {
    var extension = props.extension;
    return ([
        h(RowValue, { name: "Name", value: getStringByOID(extension.asn.extnID) }),
        h(RowValue, { name: "Critical", value: extension.asn.critical ? 'YES' : 'NO' }),
        children,
        h("tr", null, h("td", { colSpan: 2, class: "divider" }, h("span", { class: "bg_fill" }))),
    ]);
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KeyUsageExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Usage", value: extension.value.toJSON().join(', ') })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BasicConstraintsExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Certificate Authority", value: extension.value.cA ? 'YES' : 'NO' }), h(RowValue, { name: "Path Length Constraint", value: extension.value.pathLenConstraint })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ExtendedKeyUsageExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (usage, arrayIndex) { return (h(RowValue, { name: "Purpose #" + (arrayIndex + 1), value: getStringByOID(usage) })); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var SubjectKeyIdentifierExtension = function (props) {
    var extension = props.extension, getSubjectKeyIdChildrenLink = props.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink = props.getSubjectKeyIdSiblingsLink;
    var keyId = index.Convert.ToHex(extension.value.buffer);
    var childrenLink = getSubjectKeyIdChildrenLink(keyId);
    var siblingsLink = getSubjectKeyIdSiblingsLink(keyId);
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Key ID", value: keyId, monospace: true, extraValue: [
            childrenLink && (h("span", null, "\u00A0[", h("peculiar-link", { href: childrenLink }, "children"), "]")),
            siblingsLink && (h("span", null, "\u00A0[", h("peculiar-link", { href: siblingsLink }, "siblings"), "]")),
        ] })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AuthorityKeyIdentifierExtension = function (props) {
    var extension = props.extension, getAuthKeyIdParentLink = props.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink = props.getAuthKeyIdSiblingsLink;
    var keyId = index.Convert.ToHex(extension.value.keyIdentifier.buffer);
    var parentLink = getAuthKeyIdParentLink(keyId);
    var siblingsLink = getAuthKeyIdSiblingsLink(keyId);
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Key ID", value: keyId, monospace: true, extraValue: [
            parentLink && (h("span", null, "\u00A0[", h("peculiar-link", { href: parentLink }, "parents"), "]")),
            siblingsLink && (h("span", null, "\u00A0[", h("peculiar-link", { href: siblingsLink }, "siblings"), "]")),
        ] })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CRLDistributionPointsExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (point) {
        var _a;
        return ((_a = point === null || point === void 0 ? void 0 : point.distributionPoint) === null || _a === void 0 ? void 0 : _a.fullName.map(function (gn) { return (h(GeneralNamePart, Object.assign({ generalName: gn }, props))); }));
    })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AuthorityInfoAccessSyntaxExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (description, arrayIndex) { return ([
        h(RowValue, { name: "Method #" + (arrayIndex + 1), value: getStringByOID(description.accessMethod) }),
        h(GeneralNamePart, Object.assign({ generalName: description.accessLocation }, props)),
    ]); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var SubjectAlternativeNameExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (gn) { return (h(GeneralNamePart, Object.assign({ generalName: gn }, props))); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CertificatePoliciesExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (policy, arrayIndex) {
        var _a;
        return ([
            h(RowValue, { name: "Policy ID #" + (arrayIndex + 1), value: getStringByOID(policy.policyIdentifier) }),
            (_a = policy.policyQualifiers) === null || _a === void 0 ? void 0 : _a.map(function (qualifierInfo, indexInfo) {
                var data = [
                    h(RowValue, { name: "Qualifier ID #" + (indexInfo + 1), value: getStringByOID(qualifierInfo.policyQualifierId) }),
                ];
                if (qualifierInfo.policyQualifierId === '1.3.6.1.5.5.7.2.1') {
                    var value = AsnParser.parse(qualifierInfo.qualifier, DisplayText);
                    data.push(h(RowValue, { name: "Value", value: value.toString() }));
                }
                if (qualifierInfo.policyQualifierId === '1.3.6.1.5.5.7.2.2') {
                    var value = AsnParser.parse(qualifierInfo.qualifier, UserNotice);
                    if (value.explicitText) {
                        data.push(h(RowValue, { name: "Value", value: value.explicitText.toString() }));
                    }
                }
                return data;
            }),
            h("tr", null, h("td", null), h("td", null)),
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
var logs = {
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
var CertificateTransparencyExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.toJSON().map(function (signedCertificateTimestamp) { return ([
        h(RowValue, { name: "SCT Version", value: signedCertificateTimestamp.version + 1 }),
        h(RowValue, { name: "Log Operator", value: logs[signedCertificateTimestamp.logId] || signedCertificateTimestamp.logId }),
        h(RowValue, { name: "Log Key ID", value: signedCertificateTimestamp.logId, monospace: true }),
        h(RowValue, { name: "Timestamp", value: dateShort(signedCertificateTimestamp.timestamp) }),
        h(RowValue, { name: "Signature Algorithm", value: (signedCertificateTimestamp.hashAlgorithm + " " + signedCertificateTimestamp.signatureAlgorithm).toUpperCase() }),
        h(RowValue, { name: "Signature", value: signedCertificateTimestamp.signature, monospace: true }),
        h("tr", null, h("td", null), h("td", null)),
    ]); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NameConstraintsExtension = function (props) {
    var _a, _b;
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, (_a = extension.value.excludedSubtrees) === null || _a === void 0 ? void 0 :
        _a.map(function (generalSubtree) { return (h(GeneralNamePart, Object.assign({ generalName: generalSubtree.base }, props))); }), (_b = extension.value.permittedSubtrees) === null || _b === void 0 ? void 0 :
        _b.map(function (generalSubtree) { return (h(GeneralNamePart, Object.assign({ generalName: generalSubtree.base }, props))); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CertificateTemplateExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Template ID", value: extension.value.templateID }), h(RowValue, { name: "Template Major Version", value: extension.value.templateMajorVersion }), h(RowValue, { name: "Template Minor Version", value: extension.value.templateMinorVersion })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var EnrollCertTypeChoiceExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Name", value: extension.value.toString() })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CaVersionExtension = function (props) {
    var extension = props.extension;
    var version = extension.value.getVersion();
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Certificate Index", value: version.certificateIndex }), h(RowValue, { name: "Key Index", value: version.keyIndex })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QCStatementsExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (statement, arrayIndex) { return (h(RowValue, { name: "Statement #" + (arrayIndex + 1), value: getStringByOID(statement.statementId) })); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NetscapeCommentExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Comment", value: extension.value.value })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NetscapeCertTypeExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Type", value: extension.value.toJSON().join(', ') })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LeiRolesExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Role", value: extension.value.text })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LeiExtension = function (props) {
    var extension = props.extension, getLEILink = props.getLEILink;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Identifier", value: extension.value.text, href: getLEILink(extension.value.text) })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var TimestampExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Version", value: extension.value.version }), h(GeneralNamePart, Object.assign({ generalName: extension.value.location }, props)), h(RowValue, { name: "Requires Auth", value: extension.value.requiresAuth ? 'YES' : 'NO' })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ArchiveRevInfoExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Version", value: extension.value.version })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CRLReasonExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Reason", value: extension.value.toJSON() })));
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
var SubjectDirectoryAttributesExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (attribute, arrayIndex) { return ([
        h(RowValue, { name: "Attribute #" + (arrayIndex + 1), value: getStringByOID(attribute.type) }),
        h(RowValue, { name: "Value #" + (arrayIndex + 1), value: getAttributeValue(attribute) }),
        h("tr", null, h("td", null), h("td", null)),
    ]); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AsStringExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Value", value: extension.value, monospace: true })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PrivateKeyUsagePeriodExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Not Before", value: dateShort(extension.value.notBefore) }), h(RowValue, { name: "Not After", value: dateShort(extension.value.notAfter) })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var EntrustVersionInfoExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, h(RowValue, { name: "Version", value: extension.value.entrustVers }), h(RowValue, { name: "Info Flags", value: extension.value.entrustInfoFlags.toJSON().join(', ') })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BiometricSyntaxExtension = function (props) {
    var extension = props.extension;
    return (h(BasicExtension, { extension: extension }, extension.value.map(function (data, arrayIndex) { return ([
        h(RowValue, { name: "Biometric Oid #" + (arrayIndex + 1), value: getStringByOID(data.typeOfBiometricData.biometricDataOid) }),
        h(RowValue, { name: "Biometric Type #" + (arrayIndex + 1), value: data.typeOfBiometricData.predefinedBiometricType }),
        h(RowValue, { name: "Algorithm #" + (arrayIndex + 1), value: getStringByOID(data.hashAlgorithm.algorithm) }),
        h(RowValue, { name: "Biometric Hash #" + (arrayIndex + 1), value: index.Convert.ToHex(data.biometricDataHash.buffer), monospace: true }),
        h(RowValue, { name: "Source Uri #" + (arrayIndex + 1), value: data.sourceDataUri }),
        h("tr", null, h("td", null), h("td", null)),
    ]); })));
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Extensions = function (props) {
    var extensions = props.extensions, title = props.title;
    if (!extensions || !extensions.length) {
        return null;
    }
    return ([
        h(RowTitle, { value: title || 'Extensions' }),
        extensions.map(function (extension) {
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
var BasicInformation = function (props) {
    var serialNumber = props.serialNumber, version = props.version, validity = props.validity, notBefore = props.notBefore, notAfter = props.notAfter;
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
var Miscellaneous = function (props) {
    var certificate = props.certificate;
    return [
        h(RowTitle, { value: l10n.getString('miscellaneous') }),
        h("tr", null, h("td", { class: "vertical_align_middle" }, h("peculiar-typography", { color: "grey_5" }, l10n.getString('download'), ":")), h("td", null, h("peculiar-button-split", { onClick: downloadCertificateAsPem.bind(undefined, certificate), actions: [{
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
var Issuer = function (props) {
    var issuer = props.issuer;
    if (!issuer) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('issuer') }),
        issuer.map(function (item) { return (h(GeneralNamePart, { generalName: item, getDNSNameLink: function () { return ''; }, getIPAddressLink: function () { return ''; } })); }),
    ];
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Holder = function (props) {
    var holder = props.holder;
    if (!holder) {
        return null;
    }
    var baseCertificateID = holder.baseCertificateID, objectDigestInfo = holder.objectDigestInfo;
    return [
        h(RowTitle, { value: l10n.getString('holder') }),
        baseCertificateID && ([
            baseCertificateID.issuer.map(function (item) { return (h(GeneralNamePart, { generalName: item, getDNSNameLink: function () { return ''; }, getIPAddressLink: function () { return ''; } })); }),
            h("tr", null, h("td", null), h("td", null)),
            h(RowValue, { name: l10n.getString('serialNumber'), value: index.Convert.ToHex(baseCertificateID.serial), monospace: true }),
            h("tr", null, h("td", null), h("td", null)),
        ]),
        objectDigestInfo && ([
            h(RowValue, { name: l10n.getString('digestInfo'), value: "" }),
            h(RowValue, { name: l10n.getString('algorithm'), value: getStringByOID(objectDigestInfo.digestAlgorithm.algorithm) }),
            h(RowValue, { name: l10n.getString('value'), value: index.Convert.ToHex(objectDigestInfo.objectDigest), monospace: true }),
            h(RowValue, { name: l10n.getString('type'), value: objectDigestInfo.digestedObjectType }),
        ]),
    ];
};
var certificateViewerCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:white;background:rgba(var(--pv-color-light-rgb), 1)}th,td{border:none}table{width:100%;margin-bottom:30px;border-spacing:0;border-collapse:collapse}table .title td{border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table td:first-child{padding-left:30px;width:130px;padding-right:10px}table td:last-child{padding-right:30px;width:calc(100% - 130px)}table td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td.vertical_align_middle{vertical-align:middle}table .title:first-child td{padding-top:15px}table .title+tr td{padding-top:15px}table td.monospace{max-width:0}table .divider{padding-top:15px;padding-bottom:15px}.divider .bg_fill{background-color:rgba(209, 213, 217, 0.5);background-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr:last-child .divider{padding-top:0;opacity:0}.divider span{display:block;height:1px}.status_wrapper{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{padding-right:15px;padding-left:15px;width:100%}table .title+tr td{padding-top:5px}table .title+tr td:first-child{padding-top:15px}table td.monospace{width:100%;max-width:none}}:host([data-view=mobile]) table,:host([data-view=mobile]) tr,:host([data-view=mobile]) td{display:block}:host([data-view=mobile]) table td:last-child,:host([data-view=mobile]) table td:first-child{padding-right:15px;padding-left:15px;width:100%}:host([data-view=mobile]) table .title+tr td{padding-top:5px}:host([data-view=mobile]) table .title+tr td:first-child{padding-top:15px}:host([data-view=mobile]) table td.monospace{width:100%;max-width:none}";
var AttributeCertificateViewer = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.isDecodeInProcess = true;
        this.getAuthKeyIdParentLink = function (value) { var _a; return (_a = _this.authKeyIdParentLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getAuthKeyIdSiblingsLink = function (value) { var _a; return (_a = _this.authKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getSubjectKeyIdChildrenLink = function (value) { var _a; return (_a = _this.subjectKeyIdChildrenLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
        this.getSubjectKeyIdSiblingsLink = function (value) { var _a; return (_a = _this.subjectKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
    }
    class_1.prototype.componentWillLoad = function () {
        this.decodeCertificate(this.certificate);
    };
    class_1.prototype.decodeCertificate = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isDecodeInProcess = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        if (certificate instanceof X509AttributeCertificate) {
                            this.certificateDecoded = certificate;
                        }
                        else if (typeof certificate === 'string') {
                            this.certificateDecoded = new X509AttributeCertificate(certificate);
                        }
                        else {
                            return [2 /*return*/];
                        }
                        this.certificateDecoded.parseExtensions();
                        this.certificateDecoded.parseAttributes();
                        return [4 /*yield*/, this.certificateDecoded.getThumbprint('SHA-1')];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.certificateDecoded.getThumbprint('SHA-256')];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_3 = _c.sent();
                        this.certificateDecodeError = error_3;
                        console.error('Error certificate parse:', error_3);
                        return [3 /*break*/, 5];
                    case 5:
                        this.isDecodeInProcess = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    class_1.prototype.watchCertificateAndDecode = function (newValue, oldValue) {
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
    };
    // eslint-disable-next-line class-methods-use-this
    class_1.prototype.getLEILink = function (value) {
        return "https://search.gleif.org/#/record/" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_1.prototype.getDNSNameLink = function (value) {
        return "https://censys.io/ipv4?q=" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_1.prototype.getIPAddressLink = function (value) {
        return "https://censys.io/ipv4?q=" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_1.prototype.renderErrorState = function () {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is error for attribute certificate decode.")));
    };
    // eslint-disable-next-line class-methods-use-this
    class_1.prototype.renderEmptyState = function () {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is no attribute certificate available.")));
    };
    class_1.prototype.render = function () {
        if (this.certificateDecodeError) {
            return this.renderErrorState();
        }
        if (!this.certificateDecoded) {
            return this.renderEmptyState();
        }
        return (h(Host, null, h("table", null, h(BasicInformation, Object.assign({}, this.certificateDecoded)), h(Issuer, { issuer: this.certificateDecoded.issuer }), h(Holder, { holder: this.certificateDecoded.holder }), h(Signature, { signature: this.certificateDecoded.signature }), h(Thumbprints, { thumbprints: this.certificateDecoded.thumbprints }), h(Attributes, { attributes: this.certificateDecoded.attributes, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), h(Extensions, { extensions: this.certificateDecoded.extensions, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), this.download && (h(Miscellaneous, { certificate: this.certificateDecoded })))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "certificate": ["watchCertificateAndDecode"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
AttributeCertificateViewer.style = certificateViewerCss;
var buttonCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;width:auto;cursor:pointer;position:relative;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;--pv-button-padding-end:5px;--pv-button-padding-start:5px}.button{font-family:\"Open Sans\", \"Arial\", sans-serif;font-family:var(--pv-font-family);font-size:13px;font-size:var(--pv-font-size-b3);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;border-style:solid;border-width:1px;font-weight:400;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;vertical-align:middle;cursor:inherit;height:30px;line-height:30px;border-radius:2px;padding:0 5px;padding:0 var(--pv-button-padding-end) 0 var(--pv-button-padding-start)}.button::-moz-focus-inner{border:0}.button:focus{outline:none;-webkit-box-shadow:0 4px 10px 0 rgba(var(--pv-color-dark-rgb), 0.1);box-shadow:0 4px 10px 0 rgba(var(--pv-color-dark-rgb), 0.1)}.button[disabled]{opacity:0.5;cursor:not-allowed}.button_stroke{border-color:rgba(53, 132, 247, 0.3);border-color:rgba(var(--pv-color-primary-rgb), 0.3);color:#3584f7;color:rgba(var(--pv-color-primary-rgb), 1);background-color:transparent}.button_fill{border-color:#3584f7;border-color:rgba(var(--pv-color-primary-rgb), 1);background-color:#3584f7;background-color:rgba(var(--pv-color-primary-rgb), 1);color:white;color:rgba(var(--pv-color-light-rgb), 1)}.button_label{-webkit-transition:opacity 200ms;transition:opacity 200ms}.button:hover .button_label{opacity:0.7}";
var Button = /** @class */ (function () {
    function Button(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.fill = 'stroke';
        this.handleClick = function (event) {
            if (_this.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            if (_this.onClick) {
                _this.onClick(event);
            }
        };
    }
    Button.prototype.render = function () {
        var isLink = !!this.href;
        var TagType = isLink ? 'a' : 'button';
        return (h(TagType, { class: {
                button: true,
                button_stroke: this.fill === 'stroke',
                button_fill: this.fill === 'fill',
                button_disabled: this.disabled,
            }, disabled: this.disabled, type: !isLink && 'button', href: isLink && this.href, target: isLink && this.target ? this.target : null, rel: isLink && 'noreferrer noopener', onClick: this.handleClick, part: "base" }, h("span", { part: "label", class: "button_label" }, h("slot", null))));
    };
    return Button;
}());
Button.style = buttonCss;
var buttonSplitCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;vertical-align:top;position:relative;white-space:nowrap;font-size:0}.button_split_icon{width:7px;height:5px;display:inline-block;vertical-align:middle}.button_split_with_icon{width:25px;border-bottom-left-radius:0;border-top-left-radius:0}.button_split_with_icon.m_open::part(base):before{position:fixed;width:100%;height:100%;top:0;left:0;content:\"\"}.button_split_action{width:100%}.button_split_container{position:absolute;bottom:calc(100% + 1px);left:0;width:100%;border-radius:2px;-webkit-box-shadow:0px -2px 1px rgb(var(--pv-color-light-rgb)), 0px 0px 10px rgba(var(--pv-color-dark-rgb), 0.0241168);box-shadow:0px -2px 1px rgb(var(--pv-color-light-rgb)), 0px 0px 10px rgba(var(--pv-color-dark-rgb), 0.0241168);z-index:1}.button_split>peculiar-button:first-of-type::part(base){border-top-right-radius:0;border-bottom-right-radius:0}.button_split>peculiar-button:last-of-type::part(base){border-top-left-radius:0;border-bottom-left-radius:0}.button_split>peculiar-button:not(:first-child){margin-left:-1px}";
var ButtonSplit = /** @class */ (function () {
    function ButtonSplit(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.fill = 'stroke';
        this.actions = [];
        this.open = false;
        this.onClickSplitButton = function (event) {
            event.stopPropagation();
            _this.open = !_this.open;
        };
    }
    ButtonSplit.prototype.onClickActiveButton = function (action, event) {
        this.open = false;
        action(event);
    };
    ButtonSplit.prototype.renderActiveSplitState = function () {
        var _this = this;
        if (!this.open) {
            return null;
        }
        return (h("div", { class: "button_split_container" }, this.actions.map(function (action) { return (h("peculiar-button", { fill: "fill", class: "button_split_action", onClick: _this.onClickActiveButton.bind(_this, action.onClick) }, action.text)); })));
    };
    ButtonSplit.prototype.render = function () {
        return (h("div", { class: {
                button_split: true,
            } }, h("peculiar-button", { fill: this.fill, onClick: this.onClick }, h("slot", null)), h("peculiar-button", { fill: this.fill, onClick: this.onClickSplitButton, class: {
                button_split_with_icon: true,
                m_open: this.open,
            } }, h("svg", { viewBox: "0 0 7 5", xmlns: "http://www.w3.org/2000/svg", class: "button_split_icon" }, h("path", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z" }))), this.renderActiveSplitState()));
    };
    return ButtonSplit;
}());
ButtonSplit.style = buttonSplitCss;
var certificateDecoderCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;display:block;width:100%;font-size:0}.textarea{min-height:300px;width:100%;border-radius:3px;border-width:1px;border-style:solid;padding:14px;font-family:monospace;resize:vertical;background-color:white;background-color:rgba(var(--pv-color-light-rgb), 1);border-color:#d1d5d9;border-color:rgba(var(--pv-color-grey_3-rgb), 1);color:#2a3134;color:rgba(var(--pv-color-dark-rgb), 1);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);font-size:14px;font-size:var(--pv-font-size-h7)}.controls{margin-top:10px}.button{position:relative}.button:not(:first-child){margin-left:10px}.viewer{margin-top:64px}.input_file{opacity:0;width:100%;height:100%;top:0;left:0;display:block;position:absolute}";
var CertificateDecoder = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.onClickDecode = function () {
            var value = _this.inputPaste.value;
            if (value) {
                _this.decode(value);
            }
        };
        this.onClickExample = function () {
            _this.decode(_this.certificateExample);
        };
        this.onClickClear = function () {
            _this.clearValue();
        };
        this.onChangeInputFile = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var element, file;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        element = e.target;
                        if (!element.files) return [3 /*break*/, 2];
                        return [4 /*yield*/, readAsBinaryString(element.files[0])];
                    case 1:
                        file = _c.sent();
                        if (typeof file.value === 'string') {
                            this.decode(file.value);
                        }
                        element.value = '';
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.onDropFile = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var element, file;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        e.stopPropagation();
                        e.preventDefault();
                        element = e.dataTransfer;
                        if (!element.files) return [3 /*break*/, 2];
                        return [4 /*yield*/, readAsBinaryString(element.files[0])];
                    case 1:
                        file = _c.sent();
                        if (typeof file.value === 'string') {
                            this.decode(file.value);
                        }
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
    }
    class_2.prototype.componentDidLoad = function () {
        var _this = this;
        var parsedHash = history.parseHash(window.location.search);
        if (parsedHash.cert) {
            /**
             * Prevent Stencil warning about re-render
             */
            setTimeout(function () { return _this.decode(parsedHash.cert); }, 100);
        }
    };
    class_2.prototype.clearValue = function () {
        this.inputPaste.value = '';
        this.certificateDecoded = null;
        history.replace({ search: '' });
    };
    class_2.prototype.setValue = function (value) {
        this.certificateDecoded = value;
        this.inputPaste.value = value.exportAsPemFormatted();
        history.replace({
            search: history.queryStringify({
                cert: value.exportAsBase64(),
            }),
        });
    };
    class_2.prototype.decode = function (certificate) {
        var isPem$1 = isPem(certificate);
        var isX509Pem$1 = isX509Pem(certificate);
        var isPkcs10Pem$1 = isPkcs10Pem(certificate);
        var isX509AttributePem$1 = isX509AttributePem(certificate);
        var decoded;
        var decodeError;
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
    };
    class_2.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("textarea", { placeholder: "Certificate DER or PEM", class: "textarea", ref: function (el) { _this.inputPaste = el; }, onDrop: this.onDropFile }), h("div", { class: "controls" }, h("peculiar-button", { fill: "fill", class: "button", onClick: this.onClickDecode }, "Decode"), h("peculiar-button", { class: "button" }, "Choose file", h("input", { type: "file", class: "input_file", accept: "application/pkix-cert,application/x-x509-ca-cert,application/x-x509-user-cert,application/pkcs10,.csr,.req", onChange: this.onChangeInputFile, value: "" })), h("peculiar-button", { class: "button", onClick: this.onClickClear }, "Clear"), this.certificateExample && (h("peculiar-button", { class: "button", onClick: this.onClickExample }, "Example"))), this.certificateDecoded instanceof X509Certificate && (h("peculiar-certificate-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true })), this.certificateDecoded instanceof X509AttributeCertificate && (h("peculiar-attribute-certificate-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true })), this.certificateDecoded instanceof CSR && (h("peculiar-csr-viewer", { certificate: this.certificateDecoded, class: "viewer", download: true }))));
    };
    return class_2;
}());
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
        var length = publicKey.params['modulus'].byteLength;
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
var PublicKey = function (props) {
    var _a;
    var publicKey = props.publicKey;
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
var SubjectName = function (props) {
    var name = props.name;
    if (!name || !name.length) {
        return null;
    }
    return [
        h(RowTitle, { value: l10n.getString('subjectName') }),
        name.map(function (n) { return (h(RowValue, { name: n.name || n.type, value: n.value })); }),
    ];
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IssuerName = function (props) {
    var name = props.name, issuerDnLink = props.issuerDnLink;
    if (!name || !name.length) {
        return null;
    }
    var title = l10n.getString('issuerName');
    return [
        h(RowTitle, { value: issuerDnLink ? (h("peculiar-link", { href: issuerDnLink, type: "h6" }, title)) : title }),
        name.map(function (n) { return (h(RowValue, { name: n.name || n.type, value: n.value })); }),
    ];
};
var certificateViewerCss$1 = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:white;background:rgba(var(--pv-color-light-rgb), 1)}th,td{border:none}table{width:100%;margin-bottom:30px;border-spacing:0;border-collapse:collapse}table .title td{border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table td:first-child{padding-left:30px;width:130px;padding-right:10px}table td:last-child{padding-right:30px;width:calc(100% - 130px)}table td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td.vertical_align_middle{vertical-align:middle}table .title:first-child td{padding-top:15px}table .title+tr td{padding-top:15px}table td.monospace{max-width:0}table .divider{padding-top:15px;padding-bottom:15px}.divider .bg_fill{background-color:rgba(209, 213, 217, 0.5);background-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr:last-child .divider{padding-top:0;opacity:0}.divider span{display:block;height:1px}.status_wrapper{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{padding-right:15px;padding-left:15px;width:100%}table .title+tr td{padding-top:5px}table .title+tr td:first-child{padding-top:15px}table td.monospace{width:100%;max-width:none}}:host([data-view=mobile]) table,:host([data-view=mobile]) tr,:host([data-view=mobile]) td{display:block}:host([data-view=mobile]) table td:last-child,:host([data-view=mobile]) table td:first-child{padding-right:15px;padding-left:15px;width:100%}:host([data-view=mobile]) table .title+tr td{padding-top:5px}:host([data-view=mobile]) table .title+tr td:first-child{padding-top:15px}:host([data-view=mobile]) table td.monospace{width:100%;max-width:none}";
var CertificateViewer = /** @class */ (function () {
    function class_3(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.isDecodeInProcess = true;
        this.getAuthKeyIdParentLink = function (value) { var _a; return (_a = _this.authKeyIdParentLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getAuthKeyIdSiblingsLink = function (value) { var _a; return (_a = _this.authKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{authKeyId}}', value); };
        this.getSubjectKeyIdChildrenLink = function (value) { var _a; return (_a = _this.subjectKeyIdChildrenLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
        this.getSubjectKeyIdSiblingsLink = function (value) { var _a; return (_a = _this.subjectKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
    }
    class_3.prototype.componentWillLoad = function () {
        this.decodeCertificate(this.certificate);
    };
    class_3.prototype.decodeCertificate = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isDecodeInProcess = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        if (certificate instanceof X509Certificate) {
                            this.certificateDecoded = certificate;
                        }
                        else if (typeof certificate === 'string') {
                            this.certificateDecoded = new X509Certificate(certificate);
                        }
                        else {
                            return [2 /*return*/];
                        }
                        this.certificateDecoded.parseExtensions();
                        return [4 /*yield*/, this.certificateDecoded.getThumbprint('SHA-1')];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.certificateDecoded.getThumbprint('SHA-256')];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _c.sent();
                        this.certificateDecodeError = error_4;
                        console.error('Error certificate parse:', error_4);
                        return [3 /*break*/, 5];
                    case 5:
                        this.isDecodeInProcess = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    class_3.prototype.watchCertificateAndDecode = function (newValue, oldValue) {
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
    };
    // eslint-disable-next-line class-methods-use-this
    class_3.prototype.getLEILink = function (value) {
        return "https://search.gleif.org/#/record/" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_3.prototype.getDNSNameLink = function (value) {
        return "https://censys.io/ipv4?q=" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_3.prototype.getIPAddressLink = function (value) {
        return "https://censys.io/ipv4?q=" + value;
    };
    class_3.prototype.getIssuerDnLink = function () {
        return this.issuerDnLink;
    };
    // eslint-disable-next-line class-methods-use-this
    class_3.prototype.renderErrorState = function () {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is error for certificate decode.")));
    };
    // eslint-disable-next-line class-methods-use-this
    class_3.prototype.renderEmptyState = function () {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is no certificate available.")));
    };
    class_3.prototype.render = function () {
        if (this.certificateDecodeError) {
            return this.renderErrorState();
        }
        if (!this.certificateDecoded) {
            return this.renderEmptyState();
        }
        return (h(Host, { "data-view": this.view }, h("table", null, h(BasicInformation, Object.assign({}, this.certificateDecoded)), h(SubjectName, { name: this.certificateDecoded.subject }), h(IssuerName, { name: this.certificateDecoded.issuer, issuerDnLink: this.getIssuerDnLink() }), h(PublicKey, { publicKey: this.certificateDecoded.publicKey }), h(Signature, { signature: this.certificateDecoded.signature }), h(Thumbprints, { thumbprints: this.certificateDecoded.thumbprints }), h(Extensions, { extensions: this.certificateDecoded.extensions, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), this.download && (h(Miscellaneous, { certificate: this.certificateDecoded })))));
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "certificate": ["watchCertificateAndDecode"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_3;
}());
CertificateViewer.style = certificateViewerCss$1;
var certificateViewerCss$2 = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:white;background:rgba(var(--pv-color-light-rgb), 1)}th,td{border:none}table{width:100%;margin-bottom:30px;border-spacing:0;border-collapse:collapse}table .title td{border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table td:first-child{padding-left:30px;width:130px;padding-right:10px}table td:last-child{padding-right:30px;width:calc(100% - 130px)}table td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td.vertical_align_middle{vertical-align:middle}table .title:first-child td{padding-top:15px}table .title+tr td{padding-top:15px}table td.monospace{max-width:0}table .divider{padding-top:15px;padding-bottom:15px}.divider .bg_fill{background-color:rgba(209, 213, 217, 0.5);background-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr:last-child .divider{padding-top:0;opacity:0}.divider span{display:block;height:1px}.status_wrapper{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{padding-right:15px;padding-left:15px;width:100%}table .title+tr td{padding-top:5px}table .title+tr td:first-child{padding-top:15px}table td.monospace{width:100%;max-width:none}}:host([data-view=mobile]) table,:host([data-view=mobile]) tr,:host([data-view=mobile]) td{display:block}:host([data-view=mobile]) table td:last-child,:host([data-view=mobile]) table td:first-child{padding-right:15px;padding-left:15px;width:100%}:host([data-view=mobile]) table .title+tr td{padding-top:5px}:host([data-view=mobile]) table .title+tr td:first-child{padding-top:15px}:host([data-view=mobile]) table td.monospace{width:100%;max-width:none}";
var CsrViewer = /** @class */ (function () {
    function class_4(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.isDecodeInProcess = true;
        this.getAuthKeyIdParentLink = function (value) { return value; };
        this.getAuthKeyIdSiblingsLink = function (value) { return value; };
        this.getSubjectKeyIdChildrenLink = function (value) { var _a; return (_a = _this.subjectKeyIdChildrenLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
        this.getSubjectKeyIdSiblingsLink = function (value) { var _a; return (_a = _this.subjectKeyIdSiblingsLink) === null || _a === void 0 ? void 0 : _a.replace('{{subjectKeyId}}', value); };
    }
    class_4.prototype.componentWillLoad = function () {
        this.decodeCertificate(this.certificate);
    };
    class_4.prototype.decodeCertificate = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isDecodeInProcess = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        if (certificate instanceof CSR) {
                            this.certificateDecoded = certificate;
                        }
                        else if (typeof certificate === 'string') {
                            this.certificateDecoded = new CSR(certificate);
                        }
                        else {
                            return [2 /*return*/];
                        }
                        this.certificateDecoded.parseAttributes();
                        return [4 /*yield*/, this.certificateDecoded.getThumbprint('SHA-1')];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.certificateDecoded.getThumbprint('SHA-256')];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_5 = _c.sent();
                        this.certificateDecodeError = error_5;
                        console.error('Error certificate parse:', error_5);
                        return [3 /*break*/, 5];
                    case 5:
                        this.isDecodeInProcess = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Rerun decodeCertificate if previuos value not equal current value
     */
    class_4.prototype.watchCertificateAndDecode = function (newValue, oldValue) {
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
    };
    // eslint-disable-next-line class-methods-use-this
    class_4.prototype.getLEILink = function (value) {
        return "https://search.gleif.org/#/record/" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_4.prototype.getDNSNameLink = function (value) {
        return "https://censys.io/ipv4?q=" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_4.prototype.getIPAddressLink = function (value) {
        return "https://censys.io/ipv4?q=" + value;
    };
    // eslint-disable-next-line class-methods-use-this
    class_4.prototype.renderErrorState = function () {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is error for certificate request decode.")));
    };
    // eslint-disable-next-line class-methods-use-this
    class_4.prototype.renderEmptyState = function () {
        return (h("div", { class: "status_wrapper" }, h("peculiar-typography", { type: "b1", class: "interaction_text" }, "There is no certificate request available.")));
    };
    class_4.prototype.getExtensionRequestAttribute = function () {
        if (!this.certificateDecoded) {
            return undefined;
        }
        return this.certificateDecoded.attributes
            .find(function (attribute) { return attribute.asn.type === '1.2.840.113549.1.9.14'; });
    };
    class_4.prototype.render = function () {
        if (this.certificateDecodeError) {
            return this.renderErrorState();
        }
        if (!this.certificateDecoded) {
            return this.renderEmptyState();
        }
        var extensionRequestAttribute = this.getExtensionRequestAttribute();
        return (h(Host, { "data-view": this.view }, h("table", null, h(SubjectName, { name: this.certificateDecoded.subject }), h(PublicKey, { publicKey: this.certificateDecoded.publicKey }), h(Signature, { signature: this.certificateDecoded.signature }), h(Thumbprints, { thumbprints: this.certificateDecoded.thumbprints }), h(Attributes, { attributes: this.certificateDecoded.attributes, getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), h(Extensions, { extensions: extensionRequestAttribute === null || extensionRequestAttribute === void 0 ? void 0 : extensionRequestAttribute.value, title: "Extension Request", getLEILink: this.getLEILink, getDNSNameLink: this.getDNSNameLink, getIPAddressLink: this.getIPAddressLink, getAuthKeyIdParentLink: this.getAuthKeyIdParentLink, getAuthKeyIdSiblingsLink: this.getAuthKeyIdSiblingsLink, getSubjectKeyIdChildrenLink: this.getSubjectKeyIdChildrenLink, getSubjectKeyIdSiblingsLink: this.getSubjectKeyIdSiblingsLink }), this.download && (h(Miscellaneous, { certificate: this.certificateDecoded })))));
    };
    Object.defineProperty(class_4, "watchers", {
        get: function () {
            return {
                "certificate": ["watchCertificateAndDecode"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_4;
}());
CsrViewer.style = certificateViewerCss$2;
var linkCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;display:inline-block}.link{font-family:\"Open Sans\", \"Arial\", sans-serif;font-family:var(--pv-font-family);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);line-height:1.4;line-height:var(--pv-line-height-normal);color:#3584f7;color:rgba(var(--pv-color-primary-rgb), 1);font-weight:400;margin:0;padding:0}.link_type_h4{font-size:17px;font-size:var(--pv-font-size-h4);font-weight:600}.link_type_h6{font-size:15px;font-size:var(--pv-font-size-h6);font-weight:600}.link_type_h7{font-size:14px;font-size:var(--pv-font-size-h7);font-weight:600}.link_type_b1{font-size:15px;font-size:var(--pv-font-size-b1)}.link_type_b3{font-size:13px;font-size:var(--pv-font-size-b3)}.link:hover{text-decoration:none}";
var Link = /** @class */ (function () {
    function Link(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Typography type.
         */
        this.type = 'b3';
    }
    Link.prototype.render = function () {
        var _c;
        return (h("a", { href: this.href, target: "_blank", rel: "noreferrer noopener", class: (_c = {
                    link: true
                },
                _c["link_type_" + (this.type || 'b3')] = true,
                _c) }, h("slot", null)));
    };
    return Link;
}());
Link.style = linkCss;
var textHiderCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%}.text{display:inline-block;width:calc(100% - 60px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0}.text.m_opened{white-space:initial}.action{vertical-align:top;display:inline-block;width:60px;text-align:right;position:relative;top:-6px}.button_action{width:30px}.expand_icon{width:7px;height:5px;display:inline-block}.m_opened .expand_icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}";
var TextHider = /** @class */ (function () {
    function TextHider(hostRef) {
        registerInstance(this, hostRef);
        this.textExpand = createEvent(this, "textExpand", 7);
        this.opened = false;
    }
    TextHider.prototype.textExpandHandler = function () {
        this.opened = !this.opened;
    };
    TextHider.prototype.render = function () {
        return (h(Host, null, h("div", { class: "root" }, h("div", { class: {
                text: true,
                m_opened: this.opened,
            } }, h("slot", null)), h("div", { class: "action" }, h("peculiar-button", { onClick: this.textExpand.emit, class: {
                button_action: true,
                m_opened: this.opened,
            }, fill: this.opened ? 'fill' : 'stroke' }, h("svg", { viewBox: "0 0 7 5", xmlns: "http://www.w3.org/2000/svg", class: "expand_icon" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", fill: "currentColor", d: "M5.459.124c.934.001 1.442.994.84 1.644L4.425 3.794c-.44.475-1.244.475-1.684 0L.862 1.764C.26 1.115.77.12 1.705.122l3.754.003z" })))))));
    };
    return TextHider;
}());
TextHider.style = textHiderCss;
var typographyCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;display:block}.typography{font-family:\"Open Sans\", \"Arial\", sans-serif;font-family:var(--pv-font-family);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);line-height:1.4;line-height:var(--pv-line-height-normal);font-weight:400;margin:0;padding:0;display:block}.typography_type_h4{font-size:17px;font-size:var(--pv-font-size-h4);font-weight:600}.typography_type_h6{font-size:15px;font-size:var(--pv-font-size-h6);font-weight:600}.typography_type_h7{font-size:14px;font-size:var(--pv-font-size-h7);font-weight:600}.typography_type_b1{font-size:15px;font-size:var(--pv-font-size-b1)}.typography_type_b3{font-size:13px;font-size:var(--pv-font-size-b3)}.typography_color_dark{color:#2a3134;color:rgba(var(--pv-color-dark-rgb), 1)}.typography_color_light{color:white;color:rgba(var(--pv-color-light-rgb), 1)}.typography_color_grey_3{color:#d1d5d9;color:rgba(var(--pv-color-grey_3-rgb), 1)}.typography_color_grey_5{color:#869196;color:rgba(var(--pv-color-grey_5-rgb), 1)}.typography_color_attention{color:#f7a831;color:rgba(var(--pv-color-attention-rgb), 1)}.typography_color_primary{color:#3584f7;color:rgba(var(--pv-color-primary-rgb), 1)}.typography_ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.typography_monospace{font-family:monospace}.typography_align_left{text-align:left}.typography_align_center{text-align:center}.typography_align_right{text-align:right}";
var PeculiarTypography = /** @class */ (function () {
    function PeculiarTypography(hostRef) {
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
    PeculiarTypography.prototype.render = function () {
        var _c;
        var TagType = this.type && this.type.includes('h') ? this.type : 'p';
        return (h(TagType, { class: (_c = {
                    typography: true
                },
                _c["typography_type_" + (this.type || 'b3')] = true,
                _c["typography_color_" + (this.color || 'dark')] = true,
                _c["typography_align_" + this.align] = !!this.align,
                _c.typography_ellipsis = this.ellipsis,
                _c.typography_monospace = this.monospace,
                _c) }, h("slot", null)));
    };
    return PeculiarTypography;
}());
PeculiarTypography.style = typographyCss;
export { AttributeCertificateViewer as peculiar_attribute_certificate_viewer, Button as peculiar_button, ButtonSplit as peculiar_button_split, CertificateDecoder as peculiar_certificate_decoder, CertificateViewer as peculiar_certificate_viewer, CsrViewer as peculiar_csr_viewer, Link as peculiar_link, TextHider as peculiar_text_hider, PeculiarTypography as peculiar_typography };
