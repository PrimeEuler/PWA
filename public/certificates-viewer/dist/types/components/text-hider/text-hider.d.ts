/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter } from '../../stencil-public-runtime';
export declare class TextHider {
    opened: boolean;
    textExpand: EventEmitter;
    textExpandHandler(): void;
    render(): any;
}
