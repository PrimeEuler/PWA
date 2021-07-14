/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Attribute as AsnAttribute } from '@peculiar/asn1-x509';
import { DomainNameBeneficiary, DomainNameLegalRepresentative, DomainNameOwner, DomainNameTechnicalOperator, TypeRelationship, ActivityDescription, WebGDPR, InsuranceValue, ValuationRanking } from '@peculiar/asn1-ntqwac';
import { ChallengePassword, UnstructuredName } from '@peculiar/asn1-pkcs9';
import { Extension, TExtensionValue } from './extension';
import { AsnData } from './asn_data';
export declare type TAttributeValue = DomainNameBeneficiary | DomainNameLegalRepresentative | DomainNameOwner | DomainNameTechnicalOperator | TypeRelationship | ActivityDescription | WebGDPR | InsuranceValue | ValuationRanking | Extension<TExtensionValue>[] | ChallengePassword | UnstructuredName | string;
export declare class Attribute<T extends TAttributeValue> extends AsnData<AsnAttribute> {
    readonly value: T;
    private getAsnExtnValue;
    constructor(raw: BufferSource);
}
