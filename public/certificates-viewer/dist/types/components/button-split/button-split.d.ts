/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export interface IAction {
    text: string | string[];
    onClick: (event: MouseEvent) => void;
}
export declare class ButtonSplit {
    onClick: (event: MouseEvent) => void;
    fill: 'stroke' | 'fill';
    actions: IAction[];
    open: boolean;
    onClickSplitButton: (event: MouseEvent) => void;
    onClickActiveButton(action: IAction['onClick'], event: MouseEvent): void;
    renderActiveSplitState(): any;
    render(): any;
}
