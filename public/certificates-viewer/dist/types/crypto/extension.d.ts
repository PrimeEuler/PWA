/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Extension as AsnExtension, AuthorityInfoAccessSyntax, AuthorityKeyIdentifier, BasicConstraints, CertificateIssuer, CertificatePolicies, CRLDistributionPoints, CRLReason, ExtendedKeyUsage, InhibitAnyPolicy, InvalidityDate, KeyUsage, NameConstraints, PolicyConstraints, PolicyMappings, SubjectDirectoryAttributes, SubjectKeyIdentifier, PrivateKeyUsagePeriod, EntrustVersionInfo } from '@peculiar/asn1-x509';
import { QCStatements, BiometricSyntax } from '@peculiar/asn1-x509-qualified';
import { CertificateTemplate, EnrollCertTypeChoice, CaVersion } from '@peculiar/asn1-x509-microsoft';
import { NetscapeComment, NetscapeCertType } from '@peculiar/asn1-x509-netscape';
import { LeiChoice, LeiRoles } from '@peculiar/asn1-lei';
import { CertificateTransparency } from '@peculiar/asn1-cert-transparency';
import { Timestamp, ArchiveRevInfo } from '@peculiar/asn1-adobe-acrobat';
import { AsnData } from './asn_data';
export declare type TExtensionValue = AuthorityInfoAccessSyntax | AuthorityKeyIdentifier | BasicConstraints | CertificateIssuer | CertificatePolicies | CRLDistributionPoints | CRLReason | ExtendedKeyUsage | InhibitAnyPolicy | InvalidityDate | NameConstraints | PolicyConstraints | PolicyMappings | SubjectDirectoryAttributes | SubjectKeyIdentifier | QCStatements | CertificateTemplate | EnrollCertTypeChoice | NetscapeComment | LeiChoice | LeiRoles | CertificateTransparency | Timestamp | ArchiveRevInfo | KeyUsage | NetscapeCertType | CaVersion | PrivateKeyUsagePeriod | EntrustVersionInfo | BiometricSyntax | string;
export declare class Extension<T extends TExtensionValue> extends AsnData<AsnExtension> {
    readonly value: T;
    private getAsnExtnValue;
    constructor(raw: BufferSource);
}
