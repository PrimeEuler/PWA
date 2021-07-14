/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Convert } from 'pvtsutils';
export function getAttributeValue(attribute) {
    return Convert.ToString(attribute.values[0]);
}
