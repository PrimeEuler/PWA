/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ColorType } from '../../interface';
export declare class PeculiarTypography {
    /**
     * Typography type.
     */
    type: 'h4' | 'h6' | 'h7' | 'b1' | 'b3';
    /**
     * Component color from theme.
     */
    color: ColorType;
    /**
     * Text align.
     */
    align?: 'left' | 'center' | 'right';
    /**
     * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     */
    ellipsis?: boolean;
    monospace?: boolean;
    render(): any;
}
