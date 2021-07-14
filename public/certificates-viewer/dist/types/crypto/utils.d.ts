export declare const base64Clarify: (base64: string) => string;
export declare const hexFormat: (hex: string) => string;
export declare const base64Format: (base64: string) => string;
export declare const certificateRawToBuffer: (raw: string) => ArrayBuffer;
export declare const getCertificateThumbprint: (algorithm: globalThis.AlgorithmIdentifier, data: ArrayBuffer) => Promise<ArrayBuffer>;
