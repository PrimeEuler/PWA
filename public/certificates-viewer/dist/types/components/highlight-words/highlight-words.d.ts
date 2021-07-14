/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare class HighlightWords {
    host: HTMLElement;
    search: string;
    private tag;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    handleHighlightSearch(): void;
    resetHighlightSearch(source: string): string;
    render(): any;
}
