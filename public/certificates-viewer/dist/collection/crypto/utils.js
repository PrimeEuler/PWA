import { Convert } from 'pvtsutils';
import { validator } from '../utils';
import { cryptoProvider } from './provider';
export const base64Clarify = (base64) => (base64
    .replace(/.*base64,/, '')
    .replace(/-----.+-----/g, '')
    .replace(/[\s\r\n]/g, ''));
export const hexFormat = (hex) => (hex
    .replace(/(.{32})/g, '$1\n')
    .replace(/(.{4})/g, '$1 ')
    .trim());
export const base64Format = (base64) => (base64
    .replace(/(.{64})/g, '$1\n'));
export const certificateRawToBuffer = (raw) => {
    const rawClarified = base64Clarify(raw);
    let buffer;
    if (validator.isHex(rawClarified)) {
        buffer = Convert.FromHex(rawClarified);
    }
    else if (validator.isBase64(rawClarified) || validator.isPem(rawClarified)) {
        buffer = Convert.FromBase64(rawClarified);
    }
    else {
        buffer = Convert.FromBinary(raw);
    }
    return buffer;
};
export const getCertificateThumbprint = async (algorithm, data) => {
    const crypto = cryptoProvider.get();
    return crypto.subtle.digest(algorithm, data);
};
