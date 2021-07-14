/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../../stencil-public-runtime';
import type { ActivityDescription } from '@peculiar/asn1-ntqwac';
import { Attribute } from '../../../crypto/attribute';
interface IActivityDescriptionAttributeProps {
    attribute: Attribute<ActivityDescription>;
}
export declare const ActivityDescriptionAttribute: FunctionalComponent<IActivityDescriptionAttributeProps>;
export {};
