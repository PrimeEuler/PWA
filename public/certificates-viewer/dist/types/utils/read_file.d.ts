/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare type FileValue = string | ArrayBuffer | null;
export interface IFileDataType extends Blob {
    name?: string;
    mimeType?: string;
    lastModified?: number;
}
export interface IReadFileResult {
    value: FileValue;
    fileName: string | undefined;
    fileSize: number | undefined;
    sourceMime: string | undefined;
}
/**
 * Read file as Binary string
 *
 * @example
 * ```js
 *    const file = new File(['file'], 'file.pdf', { type: 'text/plain' });
 *    readAsBinaryString(file)
 *      .then(result => console.log('Readed success', result))
 *      .catch(err => console.log('An error occured when reading file', err));
 * ```
 */
export declare function readAsBinaryString(file: IFileDataType): Promise<IReadFileResult>;
/**
 * Read file as ArrayBuffer
 *
 * @example
 * ```js
 *    const file = new File(['file'], 'file.pdf', { type: 'text/plain' });
 *    readAsArrayBuffer(file)
 *      .then(result => console.log('Readed success', result))
 *      .catch(err => console.log('An error occured when reading file', err));
 * ```
 */
export declare function readAsArrayBuffer(file: IFileDataType): Promise<IReadFileResult>;
/**
 * Read file as Data URL
 *
 * @example
 * ```js
 *    const file = new File(['file'], 'file.pdf', { type: 'text/plain' });
 *    readAsDataUrl(file)
 *      .then(result => console.log('Readed success', result))
 *      .catch(err => console.log('An error occured when reading file', err));
 * ```
 */
export declare function readAsDataUrl(file: IFileDataType): Promise<IReadFileResult>;
/**
 * Read file as Text
 *
 * @example
 * ```js
 *    const file = new File(['file'], 'file.pdf', { type: 'text/plain' });
 *    readAsText(file)
 *      .then(result => console.log('Readed success', result))
 *      .catch(err => console.log('An error occured when reading file', err));
 * ```
 */
export declare function readAsText(file: IFileDataType, options?: string): Promise<IReadFileResult>;
