/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
export function readAsBinaryString(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
            value: reader.result,
            fileName: file.name,
            fileSize: file.size,
            sourceMime: file.type,
        });
        reader.onerror = () => reject(reader.error);
        reader.readAsBinaryString(file);
    });
}
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
export function readAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
            value: reader.result,
            fileName: file.name,
            fileSize: file.size,
            sourceMime: file.type,
        });
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(file);
    });
}
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
export function readAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
            value: reader.result,
            fileName: file.name,
            fileSize: file.size,
            sourceMime: file.type,
        });
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}
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
export function readAsText(file, options) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
            value: reader.result,
            fileName: file.name,
            fileSize: file.size,
            sourceMime: file.type,
        });
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file, options);
    });
}
