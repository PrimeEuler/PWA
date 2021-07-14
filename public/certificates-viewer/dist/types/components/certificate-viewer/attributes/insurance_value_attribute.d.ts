/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import type { InsuranceValue } from '@peculiar/asn1-ntqwac';
import type { Attribute } from '../../../crypto/attribute';
interface IInsuranceValueAttributeProps {
    attribute: Attribute<InsuranceValue>;
}
export declare const InsuranceValueAttribute: FunctionalComponent<IInsuranceValueAttributeProps>;
export {};
