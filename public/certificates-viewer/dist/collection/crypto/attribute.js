/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Convert } from 'pvtsutils';
import { AsnParser, AsnConvert } from '@peculiar/asn1-schema';
import { Attribute as AsnAttribute } from '@peculiar/asn1-x509';
import { id_DomainNameBeneficiary, DomainNameBeneficiary, id_DomainNameLegalRepresentative, DomainNameLegalRepresentative, id_DomainNameOwner, DomainNameOwner, id_DomainNameTechnicalOperator, DomainNameTechnicalOperator, id_TypeRelationship, TypeRelationship, id_ActivityDescription, ActivityDescription, id_WebGDPR, WebGDPR, id_InsuranceValue, InsuranceValue, id_ValuationRanking, ValuationRanking, } from '@peculiar/asn1-ntqwac';
import { id_pkcs9_at_extensionRequest, ExtensionRequest, id_pkcs9_at_challengePassword, ChallengePassword, id_pkcs9_at_unstructuredName, UnstructuredName, } from '@peculiar/asn1-pkcs9';
import { Extension } from './extension';
import { AsnData } from './asn_data';
export class Attribute extends AsnData {
    constructor(raw) {
        super(raw, AsnAttribute);
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
                this.value = Convert.ToHex(asnExtnValue);
        }
    }
    getAsnExtnValue() {
        return this.asn.values[0];
    }
}
