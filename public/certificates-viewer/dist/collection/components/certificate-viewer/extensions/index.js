/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { KeyUsage, BasicConstraints, ExtendedKeyUsage, SubjectKeyIdentifier, AuthorityKeyIdentifier, CRLDistributionPoints, AuthorityInfoAccessSyntax, SubjectAlternativeName, CertificatePolicies, NameConstraints, CRLReason, SubjectDirectoryAttributes, PrivateKeyUsagePeriod, EntrustVersionInfo, } from '@peculiar/asn1-x509';
import { CertificateTransparency } from '@peculiar/asn1-cert-transparency';
import { CertificateTemplate, EnrollCertTypeChoice, CaVersion, } from '@peculiar/asn1-x509-microsoft';
import { QCStatements, BiometricSyntax } from '@peculiar/asn1-x509-qualified';
import { NetscapeComment, NetscapeCertType } from '@peculiar/asn1-x509-netscape';
import { LeiRoles, LeiChoice } from '@peculiar/asn1-lei';
import { Timestamp, ArchiveRevInfo } from '@peculiar/asn1-adobe-acrobat';
import { RowTitle } from '../row';
import { KeyUsageExtension } from './key_usage_extension';
import { BasicConstraintsExtension } from './basic_constraints_extension';
import { ExtendedKeyUsageExtension } from './extended_key_usage_extension';
import { SubjectKeyIdentifierExtension } from './subject_key_identifier_extension';
import { AuthorityKeyIdentifierExtension } from './authority_key_identifier_extension';
import { CRLDistributionPointsExtension } from './crl_distribution_points_extension';
import { AuthorityInfoAccessSyntaxExtension } from './authority_info_access_syntax_extension';
import { SubjectAlternativeNameExtension } from './subject_alternative_name_extension';
import { CertificatePoliciesExtension } from './certificate_policies_extension';
import { CertificateTransparencyExtension } from './certificate_transparency_extension';
import { NameConstraintsExtension } from './name_constraints_extension';
import { CertificateTemplateExtension } from './certificate_template_extension';
import { EnrollCertTypeChoiceExtension } from './enroll_cert_type_extension';
import { CaVersionExtension } from './ca_version_extension';
import { QCStatementsExtension } from './qc_statements_extension';
import { NetscapeCommentExtension } from './netscape_comment_extension';
import { NetscapeCertTypeExtension } from './netscape_cert_type_extension';
import { LeiRolesExtension } from './lei_roles_extendsion';
import { LeiExtension } from './lei_extension';
import { TimestampExtension } from './timestamp_extension';
import { ArchiveRevInfoExtension } from './archive_rev_info_extension';
import { CRLReasonExtension } from './crl_reason_extension';
import { SubjectDirectoryAttributesExtension } from './subject_directory_attributes_extension';
import { AsStringExtension } from './as_string_extension';
import { BasicExtension } from './basic_extension';
import { PrivateKeyUsagePeriodExtension } from './private_key_usage_period_extension';
import { EntrustVersionInfoExtension } from './entrust_version_info_extension';
import { BiometricSyntaxExtension } from './biometric_syntax_extension';
export const Extensions = (props) => {
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
