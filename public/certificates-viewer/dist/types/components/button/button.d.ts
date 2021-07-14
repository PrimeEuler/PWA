/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare class Button {
    fill?: 'stroke' | 'fill';
    /**
     * Set to true to disable the button.
     * */
    disabled?: boolean;
    /**
     * When set, the underlying button will be rendered as an `<a>` with
     * this `href` instead of a `<button>`.
     * */
    href?: string;
    /**
     * Tells the browser where to open the link. Only used when `href` is set.
     * */
    target: '_blank' | '_parent' | '_self' | '_top';
    onClick?: (event: MouseEvent) => void;
    handleClick: (event: MouseEvent) => void;
    render(): any;
}
