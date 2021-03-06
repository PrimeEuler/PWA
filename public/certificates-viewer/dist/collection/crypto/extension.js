/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Convert } from 'pvtsutils';
import { Extension as AsnExtension, id_pe_authorityInfoAccess, AuthorityInfoAccessSyntax, id_ce_authorityKeyIdentifier, AuthorityKeyIdentifier, id_ce_basicConstraints, BasicConstraints, id_ce_certificateIssuer, CertificateIssuer, id_ce_certificatePolicies, CertificatePolicies, id_ce_cRLDistributionPoints, CRLDistributionPoints, id_ce_cRLReasons, CRLReason, id_ce_extKeyUsage, ExtendedKeyUsage, id_ce_inhibitAnyPolicy, InhibitAnyPolicy, id_ce_invalidityDate, InvalidityDate, id_ce_issuerAltName, IssueAlternativeName, id_ce_keyUsage, KeyUsage, id_ce_nameConstraints, NameConstraints, id_ce_policyConstraints, PolicyConstraints, id_ce_policyMappings, PolicyMappings, id_ce_subjectAltName, SubjectAlternativeName, id_ce_subjectDirectoryAttributes, SubjectDirectoryAttributes, id_ce_subjectKeyIdentifier, SubjectKeyIdentifier, id_ce_privateKeyUsagePeriod, PrivateKeyUsagePeriod, id_entrust_entrustVersInfo, EntrustVersionInfo, } from '@peculiar/asn1-x509';
import { id_pe_qcStatements, QCStatements, id_pe_biometricInfo, BiometricSyntax, } from '@peculiar/asn1-x509-qualified';
import { id_certificateTemplate, CertificateTemplate, id_enrollCertType, EnrollCertTypeChoice, id_caVersion, CaVersion, } from '@peculiar/asn1-x509-microsoft';
import { id_netscapeComment, NetscapeComment, id_netscapeCertType, NetscapeCertType, } from '@peculiar/asn1-x509-netscape';
import { AsnParser } from '@peculiar/asn1-schema';
import { id_lei, LeiChoice, id_lei_roles, LeiRoles, } from '@peculiar/asn1-lei';
import { id_certificateTransparency, CertificateTransparency, } from '@peculiar/asn1-cert-transparency';
import { id_adbe_timestamp, Timestamp, id_adbe_archiveRevInfo, ArchiveRevInfo, } from '@peculiar/asn1-adobe-acrobat';
import { AsnData } from './asn_data';
export class Extension extends AsnData {
    constructor(raw) {
        super(raw, AsnExtension);
        const asnExtnValue = this.getAsnExtnValue();
        switch (this.asn.extnID) {
            case id_pe_authorityInfoAccess:
                this.value = AsnParser.parse(asnExtnValue, AuthorityInfoAccessSyntax);
                break;
            case id_ce_authorityKeyIdentifier:
                this.value = AsnParser.parse(asnExtnValue, AuthorityKeyIdentifier);
                break;
            case id_ce_basicConstraints:
                this.value = AsnParser.parse(asnExtnValue, BasicConstraints);
                break;
            case id_ce_certificateIssuer:
                this.value = AsnParser.parse(asnExtnValue, CertificateIssuer);
                break;
            case id_ce_certificatePolicies:
                this.value = AsnParser.parse(asnExtnValue, CertificatePolicies);
                break;
            case id_ce_cRLDistributionPoints:
            case '2.5.29.46':
                this.value = AsnParser.parse(asnExtnValue, CRLDistributionPoints);
                break;
            case id_ce_cRLReasons:
                this.value = AsnParser.parse(asnExtnValue, CRLReason);
                break;
            case id_ce_extKeyUsage:
                this.value = AsnParser.parse(asnExtnValue, ExtendedKeyUsage);
                break;
            case id_ce_inhibitAnyPolicy:
                this.value = AsnParser.parse(asnExtnValue, InhibitAnyPolicy);
                break;
            case id_ce_invalidityDate:
                this.value = AsnParser.parse(asnExtnValue, InvalidityDate);
                break;
            case id_ce_issuerAltName:
                this.value = AsnParser.parse(asnExtnValue, IssueAlternativeName);
                break;
            case id_ce_keyUsage:
                this.value = AsnParser.parse(asnExtnValue, KeyUsage);
                break;
            case id_ce_nameConstraints:
                this.value = AsnParser.parse(asnExtnValue, NameConstraints);
                break;
            case id_ce_policyConstraints:
                this.value = AsnParser.parse(asnExtnValue, PolicyConstraints);
                break;
            case id_ce_policyMappings:
                this.value = AsnParser.parse(asnExtnValue, PolicyMappings);
                break;
            case id_ce_subjectAltName:
                this.value = AsnParser.parse(asnExtnValue, SubjectAlternativeName);
                break;
            case id_ce_subjectDirectoryAttributes:
                this.value = AsnParser.parse(asnExtnValue, SubjectDirectoryAttributes);
                break;
            case id_ce_subjectKeyIdentifier:
                this.value = AsnParser.parse(asnExtnValue, SubjectKeyIdentifier);
                break;
            case id_pe_qcStatements:
                this.value = AsnParser.parse(asnExtnValue, QCStatements);
                break;
            case id_certificateTemplate:
                this.value = AsnParser.parse(asnExtnValue, CertificateTemplate);
                break;
            case id_enrollCertType:
                this.value = AsnParser.parse(asnExtnValue, EnrollCertTypeChoice);
                break;
            case id_netscapeComment:
                this.value = AsnParser.parse(asnExtnValue, NetscapeComment);
                break;
            case id_netscapeCertType:
                this.value = AsnParser.parse(asnExtnValue, NetscapeCertType);
                break;
            case id_caVersion:
                this.value = AsnParser.parse(asnExtnValue, CaVersion);
                break;
            case id_certificateTransparency:
                this.value = AsnParser.parse(asnExtnValue, CertificateTransparency);
                break;
            case id_lei:
                this.value = AsnParser.parse(asnExtnValue, LeiChoice);
                break;
            case id_lei_roles:
                this.value = AsnParser.parse(asnExtnValue, LeiRoles);
                break;
            case id_adbe_timestamp:
                this.value = AsnParser.parse(asnExtnValue, Timestamp);
                break;
            case id_adbe_archiveRevInfo:
                this.value = AsnParser.parse(asnExtnValue, ArchiveRevInfo);
                break;
            case id_ce_privateKeyUsagePeriod:
                this.value = AsnParser.parse(asnExtnValue, PrivateKeyUsagePeriod);
                break;
            case id_entrust_entrustVersInfo:
                this.value = AsnParser.parse(asnExtnValue, EntrustVersionInfo);
                break;
            case '2.16.724.1.2.2.4.1':
            case id_pe_biometricInfo:
                this.value = AsnParser.parse(asnExtnValue, BiometricSyntax);
                break;
            default:
                this.value = Convert.ToHex(asnExtnValue);
                console.warn('Didn\'t detect parser for extension:', this.asn.extnID);
        }
    }
    getAsnExtnValue() {
        return this.asn.extnValue.buffer;
    }
}
