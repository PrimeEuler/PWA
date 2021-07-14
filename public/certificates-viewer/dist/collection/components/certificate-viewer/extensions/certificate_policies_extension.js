/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { UserNotice, DisplayText } from '@peculiar/asn1-x509';
import { AsnParser } from '@peculiar/asn1-schema';
import { RowValue } from '../row';
import { getStringByOID } from '../get_string_by_oid';
import { BasicExtension } from './basic_extension';
export const CertificatePoliciesExtension = (props) => {
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
