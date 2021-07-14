/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent } from '../../stencil-public-runtime';
interface IRowTitleProps {
    value: string | string[];
}
export declare const RowTitle: FunctionalComponent<IRowTitleProps>;
interface IRowValueProps {
    name: string | string[];
    value: string | number;
    monospace?: boolean;
    collapse?: boolean;
    href?: string;
    extraValue?: Element[];
}
export declare const RowValue: FunctionalComponent<IRowValueProps>;
export {};
