/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Download from buffer
 *
 * @example
 * ```js
 *    import { downloadFromBuffer } from 'ui-utils';
 *
 *    downloadFromBuffer(arrayBufferValue, 'applciation/pdf', 'myFile', 'pdf');
 * ```
 */
export default function downloadFromBuffer(value: ArrayBuffer, mime: string, name: string, extension: string): Promise<unknown>;
