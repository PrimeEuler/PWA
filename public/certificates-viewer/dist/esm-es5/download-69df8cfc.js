var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { c as createCommonjsModule, u as unwrapExports, b as commonjsGlobal, d as dateDiff } from './l10n-f34672bf.js';
//**************************************************************************************
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS
/**
 * Get value for input parameters, or set a default value
 * @param {Object} parameters
 * @param {string} name
 * @param defaultValue
 */
function getParametersValue(parameters, name, defaultValue) {
    // noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
    if ((parameters instanceof Object) === false)
        return defaultValue;
    // noinspection NonBlockStatementBodyJS
    if (name in parameters)
        return parameters[name];
    return defaultValue;
}
//**************************************************************************************
/**
 * Converts "ArrayBuffer" into a hexdecimal string
 * @param {ArrayBuffer} inputBuffer
 * @param {number} [inputOffset=0]
 * @param {number} [inputLength=inputBuffer.byteLength]
 * @param {boolean} [insertSpace=false]
 * @returns {string}
 */
function bufferToHexCodes(inputBuffer, inputOffset, inputLength, insertSpace) {
    if (inputOffset === void 0) { inputOffset = 0; }
    if (inputLength === void 0) { inputLength = (inputBuffer.byteLength - inputOffset); }
    if (insertSpace === void 0) { insertSpace = false; }
    var result = "";
    for (var _i = 0, _e = (new Uint8Array(inputBuffer, inputOffset, inputLength)); _i < _e.length; _i++) {
        var item = _e[_i];
        // noinspection ChainedFunctionCallJS
        var str = item.toString(16).toUpperCase();
        // noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
        if (str.length === 1)
            result += "0";
        result += str;
        // noinspection NonBlockStatementBodyJS
        if (insertSpace)
            result += " ";
    }
    return result.trim();
}
//**************************************************************************************
// noinspection JSValidateJSDoc, FunctionWithMultipleReturnPointsJS
/**
 * Check input "ArrayBuffer" for common functions
 * @param {LocalBaseBlock} baseBlock
 * @param {ArrayBuffer} inputBuffer
 * @param {number} inputOffset
 * @param {number} inputLength
 * @returns {boolean}
 */
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
    // noinspection ConstantOnRightSideOfComparisonJS
    if ((inputBuffer instanceof ArrayBuffer) === false) {
        // noinspection JSUndefinedPropertyAssignment
        baseBlock.error = "Wrong parameter: inputBuffer must be \"ArrayBuffer\"";
        return false;
    }
    // noinspection ConstantOnRightSideOfComparisonJS
    if (inputBuffer.byteLength === 0) {
        // noinspection JSUndefinedPropertyAssignment
        baseBlock.error = "Wrong parameter: inputBuffer has zero length";
        return false;
    }
    // noinspection ConstantOnRightSideOfComparisonJS
    if (inputOffset < 0) {
        // noinspection JSUndefinedPropertyAssignment
        baseBlock.error = "Wrong parameter: inputOffset less than zero";
        return false;
    }
    // noinspection ConstantOnRightSideOfComparisonJS
    if (inputLength < 0) {
        // noinspection JSUndefinedPropertyAssignment
        baseBlock.error = "Wrong parameter: inputLength less than zero";
        return false;
    }
    // noinspection ConstantOnRightSideOfComparisonJS
    if ((inputBuffer.byteLength - inputOffset - inputLength) < 0) {
        // noinspection JSUndefinedPropertyAssignment
        baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
        return false;
    }
    return true;
}
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS
/**
 * Convert number from 2^base to 2^10
 * @param {Uint8Array} inputBuffer
 * @param {number} inputBase
 * @returns {number}
 */
function utilFromBase(inputBuffer, inputBase) {
    var result = 0;
    // noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
    if (inputBuffer.length === 1)
        return inputBuffer[0];
    // noinspection ConstantOnRightSideOfComparisonJS, NonBlockStatementBodyJS
    for (var i = (inputBuffer.length - 1); i >= 0; i--)
        result += inputBuffer[(inputBuffer.length - 1) - i] * Math.pow(2, inputBase * i);
    return result;
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS
/**
 * Convert number from 2^10 to 2^base
 * @param {!number} value The number to convert
 * @param {!number} base The base for 2^base
 * @param {number} [reserved=0] Pre-defined number of bytes in output array (-1 = limited by function itself)
 * @returns {ArrayBuffer}
 */
function utilToBase(value, base, reserved) {
    if (reserved === void 0) { reserved = (-1); }
    var internalReserved = reserved;
    var internalValue = value;
    var result = 0;
    var biggest = Math.pow(2, base);
    // noinspection ConstantOnRightSideOfComparisonJS
    for (var i = 1; i < 8; i++) {
        if (value < biggest) {
            var retBuf = void 0;
            // noinspection ConstantOnRightSideOfComparisonJS
            if (internalReserved < 0) {
                retBuf = new ArrayBuffer(i);
                result = i;
            }
            else {
                // noinspection NonBlockStatementBodyJS
                if (internalReserved < i)
                    return (new ArrayBuffer(0));
                retBuf = new ArrayBuffer(internalReserved);
                result = internalReserved;
            }
            var retView = new Uint8Array(retBuf);
            // noinspection ConstantOnRightSideOfComparisonJS
            for (var j = (i - 1); j >= 0; j--) {
                var basis = Math.pow(2, j * base);
                retView[result - j - 1] = Math.floor(internalValue / basis);
                internalValue -= (retView[result - j - 1]) * basis;
            }
            return retBuf;
        }
        biggest *= Math.pow(2, base);
    }
    return new ArrayBuffer(0);
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS
/**
 * Concatenate two ArrayBuffers
 * @param {...ArrayBuffer} buffers Set of ArrayBuffer
 */
function utilConcatBuf() {
    var buffers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        buffers[_i] = arguments[_i];
    }
    //region Initial variables
    var outputLength = 0;
    var prevLength = 0;
    //endregion
    //region Calculate output length
    // noinspection NonBlockStatementBodyJS
    for (var _e = 0, buffers_1 = buffers; _e < buffers_1.length; _e++) {
        var buffer = buffers_1[_e];
        outputLength += buffer.byteLength;
    }
    //endregion
    var retBuf = new ArrayBuffer(outputLength);
    var retView = new Uint8Array(retBuf);
    for (var _f = 0, buffers_2 = buffers; _f < buffers_2.length; _f++) {
        var buffer = buffers_2[_f];
        // noinspection NestedFunctionCallJS
        retView.set(new Uint8Array(buffer), prevLength);
        prevLength += buffer.byteLength;
    }
    return retBuf;
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS
/**
 * Concatenate two Uint8Array
 * @param {...Uint8Array} views Set of Uint8Array
 */
function utilConcatView() {
    var views = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        views[_i] = arguments[_i];
    }
    //region Initial variables
    var outputLength = 0;
    var prevLength = 0;
    //endregion
    //region Calculate output length
    // noinspection NonBlockStatementBodyJS
    for (var _e = 0, views_1 = views; _e < views_1.length; _e++) {
        var view = views_1[_e];
        outputLength += view.length;
    }
    //endregion
    var retBuf = new ArrayBuffer(outputLength);
    var retView = new Uint8Array(retBuf);
    for (var _f = 0, views_2 = views; _f < views_2.length; _f++) {
        var view = views_2[_f];
        retView.set(view, prevLength);
        prevLength += view.length;
    }
    return retView;
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS
/**
 * Decoding of "two complement" values
 * The function must be called in scope of instance of "hexBlock" class ("valueHex" and "warnings" properties must be present)
 * @returns {number}
 */
function utilDecodeTC() {
    var buf = new Uint8Array(this.valueHex);
    // noinspection ConstantOnRightSideOfComparisonJS
    if (this.valueHex.byteLength >= 2) {
        //noinspection JSBitwiseOperatorUsage, ConstantOnRightSideOfComparisonJS, LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
        var condition1 = (buf[0] === 0xFF) && (buf[1] & 0x80);
        // noinspection ConstantOnRightSideOfComparisonJS, LocalVariableNamingConventionJS, MagicNumberJS, NonShortCircuitBooleanExpressionJS
        var condition2 = (buf[0] === 0x00) && ((buf[1] & 0x80) === 0x00);
        // noinspection NonBlockStatementBodyJS
        if (condition1 || condition2)
            this.warnings.push("Needlessly long format");
    }
    //region Create big part of the integer
    var bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    var bigIntView = new Uint8Array(bigIntBuffer);
    // noinspection NonBlockStatementBodyJS
    for (var i = 0; i < this.valueHex.byteLength; i++)
        bigIntView[i] = 0;
    // noinspection MagicNumberJS, NonShortCircuitBooleanExpressionJS
    bigIntView[0] = (buf[0] & 0x80); // mask only the biggest bit
    var bigInt = utilFromBase(bigIntView, 8);
    //endregion
    //region Create small part of the integer
    var smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    var smallIntView = new Uint8Array(smallIntBuffer);
    // noinspection NonBlockStatementBodyJS
    for (var j = 0; j < this.valueHex.byteLength; j++)
        smallIntView[j] = buf[j];
    // noinspection MagicNumberJS
    smallIntView[0] &= 0x7F; // mask biggest bit
    var smallInt = utilFromBase(smallIntView, 8);
    //endregion
    return (smallInt - bigInt);
}
//**************************************************************************************
// noinspection FunctionWithMultipleLoopsJS, FunctionWithMultipleReturnPointsJS
/**
 * Encode integer value to "two complement" format
 * @param {number} value Value to encode
 * @returns {ArrayBuffer}
 */
function utilEncodeTC(value) {
    // noinspection ConstantOnRightSideOfComparisonJS, ConditionalExpressionJS
    var modValue = (value < 0) ? (value * (-1)) : value;
    var bigInt = 128;
    // noinspection ConstantOnRightSideOfComparisonJS
    for (var i = 1; i < 8; i++) {
        if (modValue <= bigInt) {
            // noinspection ConstantOnRightSideOfComparisonJS
            if (value < 0) {
                var smallInt = bigInt - modValue;
                var retBuf_1 = utilToBase(smallInt, 8, i);
                var retView_1 = new Uint8Array(retBuf_1);
                // noinspection MagicNumberJS
                retView_1[0] |= 0x80;
                return retBuf_1;
            }
            var retBuf = utilToBase(modValue, 8, i);
            var retView = new Uint8Array(retBuf);
            //noinspection JSBitwiseOperatorUsage, MagicNumberJS, NonShortCircuitBooleanExpressionJS
            if (retView[0] & 0x80) {
                //noinspection JSCheckFunctionSignatures
                var tempBuf = retBuf.slice(0);
                var tempView = new Uint8Array(tempBuf);
                retBuf = new ArrayBuffer(retBuf.byteLength + 1);
                // noinspection ReuseOfLocalVariableJS
                retView = new Uint8Array(retBuf);
                // noinspection NonBlockStatementBodyJS
                for (var k = 0; k < tempBuf.byteLength; k++)
                    retView[k + 1] = tempView[k];
                // noinspection MagicNumberJS
                retView[0] = 0x00;
            }
            return retBuf;
        }
        bigInt *= Math.pow(2, 8);
    }
    return (new ArrayBuffer(0));
}
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS, ParameterNamingConventionJS
/**
 * Compare two array buffers
 * @param {!ArrayBuffer} inputBuffer1
 * @param {!ArrayBuffer} inputBuffer2
 * @returns {boolean}
 */
function isEqualBuffer(inputBuffer1, inputBuffer2) {
    // noinspection NonBlockStatementBodyJS
    if (inputBuffer1.byteLength !== inputBuffer2.byteLength)
        return false;
    // noinspection LocalVariableNamingConventionJS
    var view1 = new Uint8Array(inputBuffer1);
    // noinspection LocalVariableNamingConventionJS
    var view2 = new Uint8Array(inputBuffer2);
    for (var i = 0; i < view1.length; i++) {
        // noinspection NonBlockStatementBodyJS
        if (view1[i] !== view2[i])
            return false;
    }
    return true;
}
//**************************************************************************************
// noinspection FunctionWithMultipleReturnPointsJS
/**
 * Pad input number with leade "0" if needed
 * @returns {string}
 * @param {number} inputNumber
 * @param {number} fullLength
 */
function padNumber(inputNumber, fullLength) {
    var str = inputNumber.toString(10);
    // noinspection NonBlockStatementBodyJS
    if (fullLength < str.length)
        return "";
    var dif = fullLength - str.length;
    var padding = new Array(dif);
    // noinspection NonBlockStatementBodyJS
    for (var i = 0; i < dif; i++)
        padding[i] = "0";
    var paddingString = padding.join("");
    return paddingString.concat(str);
}
//**************************************************************************************
/* eslint-disable indent */
//**************************************************************************************
//region Declaration of global variables
//**************************************************************************************
var powers2 = [new Uint8Array([1])];
var digitsString = "0123456789";
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration for "LocalBaseBlock" class
//**************************************************************************************
/**
 * Class used as a base block for all remaining ASN.1 classes
 * @typedef LocalBaseBlock
 * @interface
 * @property {number} blockLength
 * @property {string} error
 * @property {Array.<string>} warnings
 * @property {ArrayBuffer} valueBeforeDecode
 */
var LocalBaseBlock = /** @class */ (function () {
    //**********************************************************************************
    /**
     * Constructor for "LocalBaseBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueBeforeDecode]
     */
    function LocalBaseBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        /**
         * @type {number} blockLength
         */
        this.blockLength = getParametersValue(parameters, "blockLength", 0);
        /**
         * @type {string} error
         */
        this.error = getParametersValue(parameters, "error", "");
        /**
         * @type {Array.<string>} warnings
         */
        this.warnings = getParametersValue(parameters, "warnings", []);
        //noinspection JSCheckFunctionSignatures
        /**
         * @type {ArrayBuffer} valueBeforeDecode
         */
        if ("valueBeforeDecode" in parameters)
            this.valueBeforeDecode = parameters.valueBeforeDecode.slice(0);
        else
            this.valueBeforeDecode = new ArrayBuffer(0);
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalBaseBlock.blockName = function () {
        return "baseBlock";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
     */
    LocalBaseBlock.prototype.toJSON = function () {
        return {
            blockName: this.constructor.blockName(),
            blockLength: this.blockLength,
            error: this.error,
            warnings: this.warnings,
            valueBeforeDecode: bufferToHexCodes(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength)
        };
    };
    return LocalBaseBlock;
}());
//**************************************************************************************
//endregion
//**************************************************************************************
//region Description for "HexBlock" class
//**************************************************************************************
/**
 * Class used as a base block for all remaining ASN.1 classes
 * @extends LocalBaseBlock
 * @typedef HexBlock
 * @property {number} blockLength
 * @property {string} error
 * @property {Array.<string>} warnings
 * @property {ArrayBuffer} valueBeforeDecode
 * @property {boolean} isHexOnly
 * @property {ArrayBuffer} valueHex
 */
//noinspection JSUnusedLocalSymbols
var HexBlock = function (BaseClass) { return /** @class */ (function (_super) {
    __extends(LocalHexBlockMixin, _super);
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Constructor for "HexBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function LocalHexBlockMixin(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        /**
         * @type {boolean}
         */
        _this.isHexOnly = getParametersValue(parameters, "isHexOnly", false);
        /**
         * @type {ArrayBuffer}
         */
        if ("valueHex" in parameters)
            _this.valueHex = parameters.valueHex.slice(0);
        else
            _this.valueHex = new ArrayBuffer(0);
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalHexBlockMixin.blockName = function () {
        return "hexBlock";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalHexBlockMixin.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        //region Getting Uint8Array from ArrayBuffer
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        //endregion
        //region Initial checks
        if (intBuffer.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
        }
        //endregion
        //region Copy input buffer to internal buffer
        this.valueHex = inputBuffer.slice(inputOffset, inputOffset + inputLength);
        //endregion
        this.blockLength = inputLength;
        return (inputOffset + inputLength);
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalHexBlockMixin.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        if (this.isHexOnly !== true) {
            this.error = "Flag \"isHexOnly\" is not set, abort";
            return new ArrayBuffer(0);
        }
        if (sizeOnly === true)
            return new ArrayBuffer(this.valueHex.byteLength);
        //noinspection JSCheckFunctionSignatures
        return this.valueHex.slice(0);
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalHexBlockMixin.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.blockName = this.constructor.blockName();
        object.isHexOnly = this.isHexOnly;
        object.valueHex = bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
        return object;
    };
    return LocalHexBlockMixin;
}(BaseClass)); };
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of identification block class
//**************************************************************************************
var LocalIdentificationBlock = /** @class */ (function (_super) {
    __extends(LocalIdentificationBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalBaseBlock" class
     * @param {Object} [parameters={}]
     * @property {Object} [idBlock]
     */
    function LocalIdentificationBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this) || this;
        if ("idBlock" in parameters) {
            //region Properties from hexBlock class
            _this.isHexOnly = getParametersValue(parameters.idBlock, "isHexOnly", false);
            _this.valueHex = getParametersValue(parameters.idBlock, "valueHex", new ArrayBuffer(0));
            //endregion
            _this.tagClass = getParametersValue(parameters.idBlock, "tagClass", (-1));
            _this.tagNumber = getParametersValue(parameters.idBlock, "tagNumber", (-1));
            _this.isConstructed = getParametersValue(parameters.idBlock, "isConstructed", false);
        }
        else {
            _this.tagClass = (-1);
            _this.tagNumber = (-1);
            _this.isConstructed = false;
        }
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalIdentificationBlock.blockName = function () {
        return "identificationBlock";
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalIdentificationBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        //region Initial variables
        var firstOctet = 0;
        var retBuf;
        var retView;
        //endregion
        switch (this.tagClass) {
            case 1:
                firstOctet |= 0x00; // UNIVERSAL
                break;
            case 2:
                firstOctet |= 0x40; // APPLICATION
                break;
            case 3:
                firstOctet |= 0x80; // CONTEXT-SPECIFIC
                break;
            case 4:
                firstOctet |= 0xC0; // PRIVATE
                break;
            default:
                this.error = "Unknown tag class";
                return (new ArrayBuffer(0));
        }
        if (this.isConstructed)
            firstOctet |= 0x20;
        if ((this.tagNumber < 31) && (!this.isHexOnly)) {
            retBuf = new ArrayBuffer(1);
            retView = new Uint8Array(retBuf);
            if (!sizeOnly) {
                var number = this.tagNumber;
                number &= 0x1F;
                firstOctet |= number;
                retView[0] = firstOctet;
            }
            return retBuf;
        }
        if (this.isHexOnly === false) {
            var encodedBuf = utilToBase(this.tagNumber, 7);
            var encodedView = new Uint8Array(encodedBuf);
            var size = encodedBuf.byteLength;
            retBuf = new ArrayBuffer(size + 1);
            retView = new Uint8Array(retBuf);
            retView[0] = (firstOctet | 0x1F);
            if (!sizeOnly) {
                for (var i = 0; i < (size - 1); i++)
                    retView[i + 1] = encodedView[i] | 0x80;
                retView[size] = encodedView[size - 1];
            }
            return retBuf;
        }
        retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
        retView = new Uint8Array(retBuf);
        retView[0] = (firstOctet | 0x1F);
        if (sizeOnly === false) {
            var curView = new Uint8Array(this.valueHex);
            for (var i = 0; i < (curView.length - 1); i++)
                retView[i + 1] = curView[i] | 0x80;
            retView[this.valueHex.byteLength] = curView[curView.length - 1];
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    LocalIdentificationBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        //region Getting Uint8Array from ArrayBuffer
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        //endregion
        //region Initial checks
        if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return (-1);
        }
        //endregion
        //region Find tag class
        var tagClassMask = intBuffer[0] & 0xC0;
        switch (tagClassMask) {
            case 0x00:
                this.tagClass = (1); // UNIVERSAL
                break;
            case 0x40:
                this.tagClass = (2); // APPLICATION
                break;
            case 0x80:
                this.tagClass = (3); // CONTEXT-SPECIFIC
                break;
            case 0xC0:
                this.tagClass = (4); // PRIVATE
                break;
            default:
                this.error = "Unknown tag class";
                return (-1);
        }
        //endregion
        //region Find it's constructed or not
        this.isConstructed = (intBuffer[0] & 0x20) === 0x20;
        //endregion
        //region Find tag number
        this.isHexOnly = false;
        var tagNumberMask = intBuffer[0] & 0x1F;
        //region Simple case (tag number < 31)
        if (tagNumberMask !== 0x1F) {
            this.tagNumber = (tagNumberMask);
            this.blockLength = 1;
        }
        //endregion
        //region Tag number bigger or equal to 31
        else {
            var count = 1;
            this.valueHex = new ArrayBuffer(255);
            var tagNumberBufferMaxLength = 255;
            var intTagNumberBuffer = new Uint8Array(this.valueHex);
            //noinspection JSBitwiseOperatorUsage
            while (intBuffer[count] & 0x80) {
                intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
                count++;
                if (count >= intBuffer.length) {
                    this.error = "End of input reached before message was fully decoded";
                    return (-1);
                }
                //region In case if tag number length is greater than 255 bytes (rare but possible case)
                if (count === tagNumberBufferMaxLength) {
                    tagNumberBufferMaxLength += 255;
                    var tempBuffer_1 = new ArrayBuffer(tagNumberBufferMaxLength);
                    var tempBufferView_1 = new Uint8Array(tempBuffer_1);
                    for (var i = 0; i < intTagNumberBuffer.length; i++)
                        tempBufferView_1[i] = intTagNumberBuffer[i];
                    this.valueHex = new ArrayBuffer(tagNumberBufferMaxLength);
                    intTagNumberBuffer = new Uint8Array(this.valueHex);
                }
                //endregion
            }
            this.blockLength = (count + 1);
            intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F; // Write last byte to buffer
            //region Cut buffer
            var tempBuffer = new ArrayBuffer(count);
            var tempBufferView = new Uint8Array(tempBuffer);
            for (var i = 0; i < count; i++)
                tempBufferView[i] = intTagNumberBuffer[i];
            this.valueHex = new ArrayBuffer(count);
            intTagNumberBuffer = new Uint8Array(this.valueHex);
            intTagNumberBuffer.set(tempBufferView);
            //endregion
            //region Try to convert long tag number to short form
            if (this.blockLength <= 9)
                this.tagNumber = utilFromBase(intTagNumberBuffer, 7);
            else {
                this.isHexOnly = true;
                this.warnings.push("Tag too long, represented as hex-coded");
            }
            //endregion
        }
        //endregion
        //endregion
        //region Check if constructed encoding was using for primitive type
        if (((this.tagClass === 1)) &&
            (this.isConstructed)) {
            switch (this.tagNumber) {
                case 1: // Boolean
                case 2: // REAL
                case 5: // Null
                case 6: // OBJECT IDENTIFIER
                case 9: // REAL
                case 13: // RELATIVE OBJECT IDENTIFIER
                case 14: // Time
                case 23:
                case 24:
                case 31:
                case 32:
                case 33:
                case 34:
                    this.error = "Constructed encoding used for primitive type";
                    return (-1);
            }
        }
        //endregion
        return (inputOffset + this.blockLength); // Return current offset in input buffer
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName: string,
     *  tagClass: number,
     *  tagNumber: number,
     *  isConstructed: boolean,
     *  isHexOnly: boolean,
     *  valueHex: ArrayBuffer,
     *  blockLength: number,
     *  error: string, warnings: Array.<string>,
     *  valueBeforeDecode: string}}
     */
    LocalIdentificationBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.blockName = this.constructor.blockName();
        object.tagClass = this.tagClass;
        object.tagNumber = this.tagNumber;
        object.isConstructed = this.isConstructed;
        return object;
    };
    return LocalIdentificationBlock;
}(HexBlock(LocalBaseBlock)));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of length block class
//**************************************************************************************
var LocalLengthBlock = /** @class */ (function (_super) {
    __extends(LocalLengthBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalLengthBlock" class
     * @param {Object} [parameters={}]
     * @property {Object} [lenBlock]
     */
    function LocalLengthBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this) || this;
        if ("lenBlock" in parameters) {
            _this.isIndefiniteForm = getParametersValue(parameters.lenBlock, "isIndefiniteForm", false);
            _this.longFormUsed = getParametersValue(parameters.lenBlock, "longFormUsed", false);
            _this.length = getParametersValue(parameters.lenBlock, "length", 0);
        }
        else {
            _this.isIndefiniteForm = false;
            _this.longFormUsed = false;
            _this.length = 0;
        }
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalLengthBlock.blockName = function () {
        return "lengthBlock";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    LocalLengthBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        //region Getting Uint8Array from ArrayBuffer
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        //endregion
        //region Initial checks
        if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return (-1);
        }
        if (intBuffer[0] === 0xFF) {
            this.error = "Length block 0xFF is reserved by standard";
            return (-1);
        }
        //endregion
        //region Check for length form type
        this.isIndefiniteForm = intBuffer[0] === 0x80;
        //endregion
        //region Stop working in case of indefinite length form
        if (this.isIndefiniteForm === true) {
            this.blockLength = 1;
            return (inputOffset + this.blockLength);
        }
        //endregion
        //region Check is long form of length encoding using
        this.longFormUsed = !!(intBuffer[0] & 0x80);
        //endregion
        //region Stop working in case of short form of length value
        if (this.longFormUsed === false) {
            this.length = (intBuffer[0]);
            this.blockLength = 1;
            return (inputOffset + this.blockLength);
        }
        //endregion
        //region Calculate length value in case of long form
        var count = intBuffer[0] & 0x7F;
        if (count > 8) // Too big length value
         {
            this.error = "Too big integer";
            return (-1);
        }
        if ((count + 1) > intBuffer.length) {
            this.error = "End of input reached before message was fully decoded";
            return (-1);
        }
        var lengthBufferView = new Uint8Array(count);
        for (var i = 0; i < count; i++)
            lengthBufferView[i] = intBuffer[i + 1];
        if (lengthBufferView[count - 1] === 0x00)
            this.warnings.push("Needlessly long encoded length");
        this.length = utilFromBase(lengthBufferView, 8);
        if (this.longFormUsed && (this.length <= 127))
            this.warnings.push("Unnecessary usage of long length form");
        this.blockLength = count + 1;
        //endregion
        return (inputOffset + this.blockLength); // Return current offset in input buffer
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalLengthBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        //region Initial variables
        var retBuf;
        var retView;
        //endregion
        if (this.length > 127)
            this.longFormUsed = true;
        if (this.isIndefiniteForm) {
            retBuf = new ArrayBuffer(1);
            if (sizeOnly === false) {
                retView = new Uint8Array(retBuf);
                retView[0] = 0x80;
            }
            return retBuf;
        }
        if (this.longFormUsed === true) {
            var encodedBuf = utilToBase(this.length, 8);
            if (encodedBuf.byteLength > 127) {
                this.error = "Too big length";
                return (new ArrayBuffer(0));
            }
            retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
            if (sizeOnly === true)
                return retBuf;
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);
            retView[0] = encodedBuf.byteLength | 0x80;
            for (var i = 0; i < encodedBuf.byteLength; i++)
                retView[i + 1] = encodedView[i];
            return retBuf;
        }
        retBuf = new ArrayBuffer(1);
        if (sizeOnly === false) {
            retView = new Uint8Array(retBuf);
            retView[0] = this.length;
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
     */
    LocalLengthBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.blockName = this.constructor.blockName();
        object.isIndefiniteForm = this.isIndefiniteForm;
        object.longFormUsed = this.longFormUsed;
        object.length = this.length;
        return object;
    };
    return LocalLengthBlock;
}(LocalBaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of value block class
//**************************************************************************************
var ValueBlock = /** @class */ (function (_super) {
    __extends(ValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "ValueBlock" class
     * @param {Object} [parameters={}]
     */
    function ValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        return _super.call(this, parameters) || this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    ValueBlock.blockName = function () {
        return "valueBlock";
    };
    //**********************************************************************************
    //noinspection JSUnusedLocalSymbols,JSUnusedLocalSymbols,JSUnusedLocalSymbols
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    ValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Throw an exception for a function which needs to be specified in extended classes
        throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        //endregion
    };
    //**********************************************************************************
    //noinspection JSUnusedLocalSymbols
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    ValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        //region Throw an exception for a function which needs to be specified in extended classes
        throw TypeError("User need to make a specific function in a class which extends \"ValueBlock\"");
        //endregion
    };
    return ValueBlock;
}(LocalBaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic ASN.1 block class
//**************************************************************************************
var BaseBlock = /** @class */ (function (_super) {
    __extends(BaseBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "BaseBlock" class
     * @param {Object} [parameters={}]
     * @property {Object} [primitiveSchema]
     * @property {string} [name]
     * @property {boolean} [optional]
     * @param valueBlockType Type of value block
     */
    function BaseBlock(parameters, valueBlockType) {
        if (parameters === void 0) { parameters = {}; }
        if (valueBlockType === void 0) { valueBlockType = ValueBlock; }
        var _this = _super.call(this, parameters) || this;
        if ("name" in parameters)
            _this.name = parameters.name;
        if ("optional" in parameters)
            _this.optional = parameters.optional;
        if ("primitiveSchema" in parameters)
            _this.primitiveSchema = parameters.primitiveSchema;
        _this.idBlock = new LocalIdentificationBlock(parameters);
        _this.lenBlock = new LocalLengthBlock(parameters);
        _this.valueBlock = new valueBlockType(parameters);
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    BaseBlock.blockName = function () {
        return "BaseBlock";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    BaseBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    BaseBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        var retBuf;
        var idBlockBuf = this.idBlock.toBER(sizeOnly);
        var valueBlockSizeBuf = this.valueBlock.toBER(true);
        this.lenBlock.length = valueBlockSizeBuf.byteLength;
        var lenBlockBuf = this.lenBlock.toBER(sizeOnly);
        retBuf = utilConcatBuf(idBlockBuf, lenBlockBuf);
        var valueBlockBuf;
        if (sizeOnly === false)
            valueBlockBuf = this.valueBlock.toBER(sizeOnly);
        else
            valueBlockBuf = new ArrayBuffer(this.lenBlock.length);
        retBuf = utilConcatBuf(retBuf, valueBlockBuf);
        if (this.lenBlock.isIndefiniteForm === true) {
            var indefBuf = new ArrayBuffer(2);
            if (sizeOnly === false) {
                var indefView = new Uint8Array(indefBuf);
                indefView[0] = 0x00;
                indefView[1] = 0x00;
            }
            retBuf = utilConcatBuf(retBuf, indefBuf);
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
     */
    BaseBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.idBlock = this.idBlock.toJSON();
        object.lenBlock = this.lenBlock.toJSON();
        object.valueBlock = this.valueBlock.toJSON();
        if ("name" in this)
            object.name = this.name;
        if ("optional" in this)
            object.optional = this.optional;
        if ("primitiveSchema" in this)
            object.primitiveSchema = this.primitiveSchema.toJSON();
        return object;
    };
    //**********************************************************************************
    BaseBlock.prototype.toString = function () {
        return this.constructor.blockName() + " : " + bufferToHexCodes(this.valueBlock.valueHex);
    };
    return BaseBlock;
}(LocalBaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic block for all PRIMITIVE types
//**************************************************************************************
var LocalPrimitiveValueBlock = /** @class */ (function (_super) {
    __extends(LocalPrimitiveValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalPrimitiveValueBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueBeforeDecode]
     */
    function LocalPrimitiveValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        //region Variables from "hexBlock" class
        if ("valueHex" in parameters)
            _this.valueHex = parameters.valueHex.slice(0);
        else
            _this.valueHex = new ArrayBuffer(0);
        _this.isHexOnly = getParametersValue(parameters, "isHexOnly", true);
        return _this;
        //endregion
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    LocalPrimitiveValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        //region Getting Uint8Array from ArrayBuffer
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        //endregion
        //region Initial checks
        if (intBuffer.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
        }
        //endregion
        //region Copy input buffer into internal buffer
        this.valueHex = new ArrayBuffer(intBuffer.length);
        var valueHexView = new Uint8Array(this.valueHex);
        for (var i = 0; i < intBuffer.length; i++)
            valueHexView[i] = intBuffer[i];
        //endregion
        this.blockLength = inputLength;
        return (inputOffset + inputLength);
    };
    //**********************************************************************************
    //noinspection JSUnusedLocalSymbols
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalPrimitiveValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        return this.valueHex.slice(0);
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalPrimitiveValueBlock.blockName = function () {
        return "PrimitiveValueBlock";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
     */
    LocalPrimitiveValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.valueHex = bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
        object.isHexOnly = this.isHexOnly;
        return object;
    };
    return LocalPrimitiveValueBlock;
}(ValueBlock));
//**************************************************************************************
var Primitive = /** @class */ (function (_super) {
    __extends(Primitive, _super);
    //**********************************************************************************
    /**
     * Constructor for "Primitive" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function Primitive(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalPrimitiveValueBlock) || this;
        _this.idBlock.isConstructed = false;
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Primitive.blockName = function () {
        return "PRIMITIVE";
    };
    return Primitive;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of basic block for all CONSTRUCTED types
//**************************************************************************************
var LocalConstructedValueBlock = /** @class */ (function (_super) {
    __extends(LocalConstructedValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalConstructedValueBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalConstructedValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.value = getParametersValue(parameters, "value", []);
        _this.isIndefiniteForm = getParametersValue(parameters, "isIndefiniteForm", false);
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    LocalConstructedValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Store initial offset and length
        var initialOffset = inputOffset;
        var initialLength = inputLength;
        //endregion
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        //region Getting Uint8Array from ArrayBuffer
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        //endregion
        //region Initial checks
        if (intBuffer.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
        }
        //endregion
        //region Aux function
        function checkLen(indefiniteLength, length) {
            if (indefiniteLength === true)
                return 1;
            return length;
        }
        //endregion
        var currentOffset = inputOffset;
        while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
            var returnObject = LocalFromBER(inputBuffer, currentOffset, inputLength);
            if (returnObject.offset === (-1)) {
                this.error = returnObject.result.error;
                this.warnings.concat(returnObject.result.warnings);
                return (-1);
            }
            currentOffset = returnObject.offset;
            this.blockLength += returnObject.result.blockLength;
            inputLength -= returnObject.result.blockLength;
            this.value.push(returnObject.result);
            if ((this.isIndefiniteForm === true) && (returnObject.result.constructor.blockName() === EndOfContent.blockName()))
                break;
        }
        if (this.isIndefiniteForm === true) {
            if (this.value[this.value.length - 1].constructor.blockName() === EndOfContent.blockName())
                this.value.pop();
            else
                this.warnings.push("No EndOfContent block encoded");
        }
        //region Copy "inputBuffer" to "valueBeforeDecode"
        this.valueBeforeDecode = inputBuffer.slice(initialOffset, initialOffset + initialLength);
        //endregion
        return currentOffset;
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalConstructedValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        var retBuf = new ArrayBuffer(0);
        for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);
            retBuf = utilConcatBuf(retBuf, valueBuf);
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalConstructedValueBlock.blockName = function () {
        return "ConstructedValueBlock";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
     */
    LocalConstructedValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.isIndefiniteForm = this.isIndefiniteForm;
        object.value = [];
        for (var i = 0; i < this.value.length; i++)
            object.value.push(this.value[i].toJSON());
        return object;
    };
    return LocalConstructedValueBlock;
}(ValueBlock));
//**************************************************************************************
var Constructed = /** @class */ (function (_super) {
    __extends(Constructed, _super);
    //**********************************************************************************
    /**
     * Constructor for "Constructed" class
     * @param {Object} [parameters={}]
     */
    function Constructed(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalConstructedValueBlock) || this;
        _this.idBlock.isConstructed = true;
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Constructed.blockName = function () {
        return "CONSTRUCTED";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    Constructed.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    Constructed.prototype.toString = function () {
        var values = [];
        for (var _i = 0, _e = this.valueBlock.value; _i < _e.length; _i++) {
            var value = _e[_i];
            values.push(value.toString().split("\n").map(function (o) { return "  " + o; }).join("\n"));
        }
        var blockName = this.idBlock.tagClass === 3
            ? "[" + this.idBlock.tagNumber + "]"
            : this.constructor.blockName();
        return values.length
            ? blockName + " :\n" + values.join("\n") // items
            : blockName + " :"; // empty
    };
    return Constructed;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 EndOfContent type class
//**************************************************************************************
var LocalEndOfContentValueBlock = /** @class */ (function (_super) {
    __extends(LocalEndOfContentValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalEndOfContentValueBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalEndOfContentValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        return _super.call(this, parameters) || this;
    }
    //**********************************************************************************
    //noinspection JSUnusedLocalSymbols,JSUnusedLocalSymbols
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number}
     */
    LocalEndOfContentValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region There is no "value block" for EndOfContent type and we need to return the same offset
        return inputOffset;
        //endregion
    };
    //**********************************************************************************
    //noinspection JSUnusedLocalSymbols
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalEndOfContentValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        return new ArrayBuffer(0);
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalEndOfContentValueBlock.blockName = function () {
        return "EndOfContentValueBlock";
    };
    return LocalEndOfContentValueBlock;
}(ValueBlock));
//**************************************************************************************
var EndOfContent = /** @class */ (function (_super) {
    __extends(EndOfContent, _super);
    //**********************************************************************************
    function EndOfContent(paramaters) {
        if (paramaters === void 0) { paramaters = {}; }
        var _this = _super.call(this, paramaters, LocalEndOfContentValueBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 0; // EndOfContent
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    EndOfContent.blockName = function () {
        return "EndOfContent";
    };
    return EndOfContent;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Boolean type class
//**************************************************************************************
var LocalBooleanValueBlock = /** @class */ (function (_super) {
    __extends(LocalBooleanValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalBooleanValueBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalBooleanValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.value = getParametersValue(parameters, "value", false);
        _this.isHexOnly = getParametersValue(parameters, "isHexOnly", false);
        if ("valueHex" in parameters)
            _this.valueHex = parameters.valueHex.slice(0);
        else {
            _this.valueHex = new ArrayBuffer(1);
            if (_this.value === true) {
                var view = new Uint8Array(_this.valueHex);
                view[0] = 0xFF;
            }
        }
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalBooleanValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        //region Getting Uint8Array from ArrayBuffer
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        //endregion
        if (inputLength > 1)
            this.warnings.push("Boolean value encoded in more then 1 octet");
        this.isHexOnly = true;
        //region Copy input buffer to internal array
        this.valueHex = new ArrayBuffer(intBuffer.length);
        var view = new Uint8Array(this.valueHex);
        for (var i = 0; i < intBuffer.length; i++)
            view[i] = intBuffer[i];
        //endregion
        if (utilDecodeTC.call(this) !== 0)
            this.value = true;
        else
            this.value = false;
        this.blockLength = inputLength;
        return (inputOffset + inputLength);
    };
    //**********************************************************************************
    //noinspection JSUnusedLocalSymbols
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalBooleanValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        return this.valueHex;
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalBooleanValueBlock.blockName = function () {
        return "BooleanValueBlock";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
     */
    LocalBooleanValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.value = this.value;
        object.isHexOnly = this.isHexOnly;
        object.valueHex = bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
        return object;
    };
    return LocalBooleanValueBlock;
}(ValueBlock));
//**************************************************************************************
var Boolean = /** @class */ (function (_super) {
    __extends(Boolean, _super);
    //**********************************************************************************
    /**
     * Constructor for "Boolean" class
     * @param {Object} [parameters={}]
     */
    function Boolean(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalBooleanValueBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 1; // Boolean
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Boolean.blockName = function () {
        return "BOOLEAN";
    };
    //**********************************************************************************
    Boolean.prototype.toString = function () {
        return this.constructor.blockName() + " : " + this.valueBlock.value;
    };
    return Boolean;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Sequence and Set type classes
//**************************************************************************************
var Sequence = /** @class */ (function (_super) {
    __extends(Sequence, _super);
    //**********************************************************************************
    /**
     * Constructor for "Sequence" class
     * @param {Object} [parameters={}]
     */
    function Sequence(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 16; // Sequence
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Sequence.blockName = function () {
        return "SEQUENCE";
    };
    return Sequence;
}(Constructed));
//**************************************************************************************
var Set = /** @class */ (function (_super) {
    __extends(Set, _super);
    //**********************************************************************************
    /**
     * Constructor for "Set" class
     * @param {Object} [parameters={}]
     */
    function Set(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 17; // Set
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Set.blockName = function () {
        return "SET";
    };
    return Set;
}(Constructed));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Null type class
//**************************************************************************************
var Null = /** @class */ (function (_super) {
    __extends(Null, _super);
    //**********************************************************************************
    /**
     * Constructor for "Null" class
     * @param {Object} [parameters={}]
     */
    function Null(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalBaseBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 5; // Null
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Null.blockName = function () {
        return "NULL";
    };
    //**********************************************************************************
    //noinspection JSUnusedLocalSymbols
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    Null.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        if (this.lenBlock.length > 0)
            this.warnings.push("Non-zero length of value block for Null type");
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        this.blockLength += inputLength;
        if ((inputOffset + inputLength) > inputBuffer.byteLength) {
            this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
            return (-1);
        }
        return (inputOffset + inputLength);
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    Null.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        var retBuf = new ArrayBuffer(2);
        if (sizeOnly === true)
            return retBuf;
        var retView = new Uint8Array(retBuf);
        retView[0] = 0x05;
        retView[1] = 0x00;
        return retBuf;
    };
    //**********************************************************************************
    Null.prototype.toString = function () {
        return "" + this.constructor.blockName();
    };
    return Null;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 OctetString type class
//**************************************************************************************
var LocalOctetStringValueBlock = /** @class */ (function (_super) {
    __extends(LocalOctetStringValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalOctetStringValueBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function LocalOctetStringValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.isConstructed = getParametersValue(parameters, "isConstructed", false);
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalOctetStringValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = 0;
        if (this.isConstructed === true) {
            this.isHexOnly = false;
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === (-1))
                return resultOffset;
            for (var i = 0; i < this.value.length; i++) {
                var currentBlockName = this.value[i].constructor.blockName();
                if (currentBlockName === EndOfContent.blockName()) {
                    if (this.isIndefiniteForm === true)
                        break;
                    else {
                        this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
                        return (-1);
                    }
                }
                if (currentBlockName !== OctetString.blockName()) {
                    this.error = "OCTET STRING may consists of OCTET STRINGs only";
                    return (-1);
                }
            }
        }
        else {
            this.isHexOnly = true;
            resultOffset = _super.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            this.blockLength = inputLength;
        }
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalOctetStringValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        if (this.isConstructed === true)
            return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
        var retBuf = new ArrayBuffer(this.valueHex.byteLength);
        if (sizeOnly === true)
            return retBuf;
        if (this.valueHex.byteLength === 0)
            return retBuf;
        retBuf = this.valueHex.slice(0);
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalOctetStringValueBlock.blockName = function () {
        return "OctetStringValueBlock";
    };
    //**********************************************************************************
    LocalOctetStringValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.isConstructed = this.isConstructed;
        object.isHexOnly = this.isHexOnly;
        object.valueHex = bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
        return object;
    };
    return LocalOctetStringValueBlock;
}(HexBlock(LocalConstructedValueBlock)));
//**************************************************************************************
var OctetString = /** @class */ (function (_super) {
    __extends(OctetString, _super);
    //**********************************************************************************
    /**
     * Constructor for "OctetString" class
     * @param {Object} [parameters={}]
     */
    function OctetString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalOctetStringValueBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 4; // OctetString
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    OctetString.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isConstructed = this.idBlock.isConstructed;
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        //region Ability to encode empty OCTET STRING
        if (inputLength === 0) {
            if (this.idBlock.error.length === 0)
                this.blockLength += this.idBlock.blockLength;
            if (this.lenBlock.error.length === 0)
                this.blockLength += this.lenBlock.blockLength;
            return inputOffset;
        }
        //endregion
        if (!this.valueBlock.isConstructed) {
            var buf = inputBuffer.slice(inputOffset, inputOffset + inputLength);
            try {
                var asn = fromBER(buf);
                if (asn.offset !== -1 && asn.offset === inputLength) {
                    this.valueBlock.value = [asn.result];
                }
            }
            catch (e) {
                // nothing
            }
        }
        return _super.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    OctetString.blockName = function () {
        return "OCTET STRING";
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Checking that two OCTETSTRINGs are equal
     * @param {OctetString} octetString
     */
    OctetString.prototype.isEqual = function (octetString) {
        //region Check input type
        if ((octetString instanceof OctetString) === false)
            return false;
        //endregion
        //region Compare two JSON strings
        if (JSON.stringify(this) !== JSON.stringify(octetString))
            return false;
        //endregion
        return true;
    };
    //**********************************************************************************
    OctetString.prototype.toString = function () {
        if (this.valueBlock.isConstructed || (this.valueBlock.value && this.valueBlock.value.length)) {
            return Constructed.prototype.toString.call(this);
        }
        else {
            return this.constructor.blockName() + " : " + bufferToHexCodes(this.valueBlock.valueHex);
        }
    };
    return OctetString;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 BitString type class
//**************************************************************************************
var LocalBitStringValueBlock = /** @class */ (function (_super) {
    __extends(LocalBitStringValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalBitStringValueBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function LocalBitStringValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.unusedBits = getParametersValue(parameters, "unusedBits", 0);
        _this.isConstructed = getParametersValue(parameters, "isConstructed", false);
        _this.blockLength = _this.valueHex.byteLength;
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalBitStringValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Ability to decode zero-length BitString value
        if (inputLength === 0)
            return inputOffset;
        //endregion
        var resultOffset = (-1);
        //region If the BISTRING supposed to be a constructed value
        if (this.isConstructed === true) {
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === (-1))
                return resultOffset;
            for (var i = 0; i < this.value.length; i++) {
                var currentBlockName = this.value[i].constructor.blockName();
                if (currentBlockName === EndOfContent.blockName()) {
                    if (this.isIndefiniteForm === true)
                        break;
                    else {
                        this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
                        return (-1);
                    }
                }
                if (currentBlockName !== BitString.blockName()) {
                    this.error = "BIT STRING may consists of BIT STRINGs only";
                    return (-1);
                }
                if ((this.unusedBits > 0) && (this.value[i].valueBlock.unusedBits > 0)) {
                    this.error = "Using of \"unused bits\" inside constructive BIT STRING allowed for least one only";
                    return (-1);
                }
                this.unusedBits = this.value[i].valueBlock.unusedBits;
                if (this.unusedBits > 7) {
                    this.error = "Unused bits for BitString must be in range 0-7";
                    return (-1);
                }
            }
            return resultOffset;
        }
        //endregion
        //region If the BitString supposed to be a primitive value
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        this.unusedBits = intBuffer[0];
        if (this.unusedBits > 7) {
            this.error = "Unused bits for BitString must be in range 0-7";
            return (-1);
        }
        if (!this.unusedBits) {
            var buf = inputBuffer.slice(inputOffset + 1, inputOffset + inputLength);
            try {
                var asn = fromBER(buf);
                if (asn.offset !== -1 && asn.offset === (inputLength - 1)) {
                    this.value = [asn.result];
                }
            }
            catch (e) {
                // nothing
            }
        }
        //region Copy input buffer to internal buffer
        this.valueHex = new ArrayBuffer(intBuffer.length - 1);
        var view = new Uint8Array(this.valueHex);
        for (var i = 0; i < (inputLength - 1); i++)
            view[i] = intBuffer[i + 1];
        //endregion
        this.blockLength = intBuffer.length;
        return (inputOffset + inputLength);
        //endregion
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalBitStringValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        if (this.isConstructed === true)
            return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly);
        if (sizeOnly === true)
            return (new ArrayBuffer(this.valueHex.byteLength + 1));
        if (this.valueHex.byteLength === 0)
            return (new ArrayBuffer(0));
        var curView = new Uint8Array(this.valueHex);
        var retBuf = new ArrayBuffer(this.valueHex.byteLength + 1);
        var retView = new Uint8Array(retBuf);
        retView[0] = this.unusedBits;
        for (var i = 0; i < this.valueHex.byteLength; i++)
            retView[i + 1] = curView[i];
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalBitStringValueBlock.blockName = function () {
        return "BitStringValueBlock";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {{blockName, blockLength, error, warnings, valueBeforeDecode}|{blockName: string, blockLength: number, error: string, warnings: Array.<string>, valueBeforeDecode: string}}
     */
    LocalBitStringValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.unusedBits = this.unusedBits;
        object.isConstructed = this.isConstructed;
        object.isHexOnly = this.isHexOnly;
        object.valueHex = bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
        return object;
    };
    return LocalBitStringValueBlock;
}(HexBlock(LocalConstructedValueBlock)));
//**************************************************************************************
var BitString = /** @class */ (function (_super) {
    __extends(BitString, _super);
    //**********************************************************************************
    /**
     * Constructor for "BitString" class
     * @param {Object} [parameters={}]
     */
    function BitString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalBitStringValueBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 3; // BitString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    BitString.blockName = function () {
        return "BIT STRING";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    BitString.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        //region Ability to encode empty BitString
        if (inputLength === 0)
            return inputOffset;
        //endregion
        this.valueBlock.isConstructed = this.idBlock.isConstructed;
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        return _super.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
    };
    //**********************************************************************************
    /**
     * Checking that two BITSTRINGs are equal
     * @param {BitString} bitString
     */
    BitString.prototype.isEqual = function (bitString) {
        //region Check input type
        if ((bitString instanceof BitString) === false)
            return false;
        //endregion
        //region Compare two JSON strings
        if (JSON.stringify(this) !== JSON.stringify(bitString))
            return false;
        //endregion
        return true;
    };
    //**********************************************************************************
    BitString.prototype.toString = function () {
        if (this.valueBlock.isConstructed || (this.valueBlock.value && this.valueBlock.value.length)) {
            return Constructed.prototype.toString.call(this);
        }
        else {
            // convert bytes to bits
            var bits = [];
            var valueHex = new Uint8Array(this.valueBlock.valueHex);
            for (var _i = 0, valueHex_1 = valueHex; _i < valueHex_1.length; _i++) {
                var byte = valueHex_1[_i];
                bits.push(byte.toString(2).padStart(8, "0"));
            }
            return this.constructor.blockName() + " : " + bits.join("");
        }
    };
    return BitString;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Integer type class
//**************************************************************************************
/**
 * @extends ValueBlock
 */
var LocalIntegerValueBlock = /** @class */ (function (_super) {
    __extends(LocalIntegerValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalIntegerValueBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function LocalIntegerValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        if ("value" in parameters)
            _this.valueDec = parameters.value;
        return _this;
    }
    Object.defineProperty(LocalIntegerValueBlock.prototype, "valueHex", {
        //**********************************************************************************
        /**
         * Getter for "valueHex"
         * @returns {ArrayBuffer}
         */
        get: function () {
            return this._valueHex;
        },
        //**********************************************************************************
        /**
         * Setter for "valueHex"
         * @param {ArrayBuffer} _value
         */
        set: function (_value) {
            this._valueHex = _value.slice(0);
            if (_value.byteLength >= 4) {
                this.warnings.push("Too big Integer for decoding, hex only");
                this.isHexOnly = true;
                this._valueDec = 0;
            }
            else {
                this.isHexOnly = false;
                if (_value.byteLength > 0)
                    this._valueDec = utilDecodeTC.call(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalIntegerValueBlock.prototype, "valueDec", {
        //**********************************************************************************
        /**
         * Getter for "valueDec"
         * @returns {number}
         */
        get: function () {
            return this._valueDec;
        },
        //**********************************************************************************
        /**
         * Getter for "valueDec"
         * @param {number} _value
         */
        set: function (_value) {
            this._valueDec = _value;
            this.isHexOnly = false;
            this._valueHex = utilEncodeTC(_value);
        },
        enumerable: false,
        configurable: true
    });
    //**********************************************************************************
    /**
     * Base function for converting block from DER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 DER encoded array
     * @param {!number} inputOffset Offset in ASN.1 DER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @param {number} [expectedLength=0] Expected length of converted "valueHex" buffer
     * @returns {number} Offset after least decoded byte
     */
    LocalIntegerValueBlock.prototype.fromDER = function (inputBuffer, inputOffset, inputLength, expectedLength) {
        if (expectedLength === void 0) { expectedLength = 0; }
        var offset = this.fromBER(inputBuffer, inputOffset, inputLength);
        if (offset === (-1))
            return offset;
        var view = new Uint8Array(this._valueHex);
        if ((view[0] === 0x00) && ((view[1] & 0x80) !== 0)) {
            var updatedValueHex = new ArrayBuffer(this._valueHex.byteLength - 1);
            var updatedView = new Uint8Array(updatedValueHex);
            updatedView.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));
            this._valueHex = updatedValueHex.slice(0);
        }
        else {
            if (expectedLength !== 0) {
                if (this._valueHex.byteLength < expectedLength) {
                    if ((expectedLength - this._valueHex.byteLength) > 1)
                        expectedLength = this._valueHex.byteLength + 1;
                    var updatedValueHex = new ArrayBuffer(expectedLength);
                    var updatedView = new Uint8Array(updatedValueHex);
                    updatedView.set(view, expectedLength - this._valueHex.byteLength);
                    this._valueHex = updatedValueHex.slice(0);
                }
            }
        }
        return offset;
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (DER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalIntegerValueBlock.prototype.toDER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        var view = new Uint8Array(this._valueHex);
        switch (true) {
            case ((view[0] & 0x80) !== 0):
                {
                    var updatedValueHex = new ArrayBuffer(this._valueHex.byteLength + 1);
                    var updatedView = new Uint8Array(updatedValueHex);
                    updatedView[0] = 0x00;
                    updatedView.set(view, 1);
                    this._valueHex = updatedValueHex.slice(0);
                }
                break;
            case ((view[0] === 0x00) && ((view[1] & 0x80) === 0)):
                {
                    var updatedValueHex = new ArrayBuffer(this._valueHex.byteLength - 1);
                    var updatedView = new Uint8Array(updatedValueHex);
                    updatedView.set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1));
                    this._valueHex = updatedValueHex.slice(0);
                }
                break;
        }
        return this.toBER(sizeOnly);
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalIntegerValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = _super.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
        if (resultOffset === (-1))
            return resultOffset;
        this.blockLength = inputLength;
        return (inputOffset + inputLength);
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalIntegerValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        //noinspection JSCheckFunctionSignatures
        return this.valueHex.slice(0);
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalIntegerValueBlock.blockName = function () {
        return "IntegerValueBlock";
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalIntegerValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.valueDec = this.valueDec;
        return object;
    };
    //**********************************************************************************
    /**
     * Convert current value to decimal string representation
     */
    LocalIntegerValueBlock.prototype.toString = function () {
        //region Aux functions
        function viewAdd(first, second) {
            //region Initial variables
            var c = new Uint8Array([0]);
            var firstView = new Uint8Array(first);
            var secondView = new Uint8Array(second);
            var firstViewCopy = firstView.slice(0);
            var firstViewCopyLength = firstViewCopy.length - 1;
            var secondViewCopy = secondView.slice(0);
            var secondViewCopyLength = secondViewCopy.length - 1;
            var value = 0;
            var max = (secondViewCopyLength < firstViewCopyLength) ? firstViewCopyLength : secondViewCopyLength;
            var counter = 0;
            //endregion
            for (var i = max; i >= 0; i--, counter++) {
                switch (true) {
                    case (counter < secondViewCopy.length):
                        value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
                        break;
                    default:
                        value = firstViewCopy[firstViewCopyLength - counter] + c[0];
                }
                c[0] = value / 10;
                switch (true) {
                    case (counter >= firstViewCopy.length):
                        firstViewCopy = utilConcatView(new Uint8Array([value % 10]), firstViewCopy);
                        break;
                    default:
                        firstViewCopy[firstViewCopyLength - counter] = value % 10;
                }
            }
            if (c[0] > 0)
                firstViewCopy = utilConcatView(c, firstViewCopy);
            return firstViewCopy.slice(0);
        }
        function power2(n) {
            if (n >= powers2.length) {
                for (var p = powers2.length; p <= n; p++) {
                    var c = new Uint8Array([0]);
                    var digits_1 = (powers2[p - 1]).slice(0);
                    for (var i = (digits_1.length - 1); i >= 0; i--) {
                        var newValue = new Uint8Array([(digits_1[i] << 1) + c[0]]);
                        c[0] = newValue[0] / 10;
                        digits_1[i] = newValue[0] % 10;
                    }
                    if (c[0] > 0)
                        digits_1 = utilConcatView(c, digits_1);
                    powers2.push(digits_1);
                }
            }
            return powers2[n];
        }
        function viewSub(first, second) {
            //region Initial variables
            var b = 0;
            var firstView = new Uint8Array(first);
            var secondView = new Uint8Array(second);
            var firstViewCopy = firstView.slice(0);
            var firstViewCopyLength = firstViewCopy.length - 1;
            var secondViewCopy = secondView.slice(0);
            var secondViewCopyLength = secondViewCopy.length - 1;
            var value;
            var counter = 0;
            //endregion
            for (var i = secondViewCopyLength; i >= 0; i--, counter++) {
                value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;
                switch (true) {
                    case (value < 0):
                        b = 1;
                        firstViewCopy[firstViewCopyLength - counter] = value + 10;
                        break;
                    default:
                        b = 0;
                        firstViewCopy[firstViewCopyLength - counter] = value;
                }
            }
            if (b > 0) {
                for (var i = (firstViewCopyLength - secondViewCopyLength + 1); i >= 0; i--, counter++) {
                    value = firstViewCopy[firstViewCopyLength - counter] - b;
                    if (value < 0) {
                        b = 1;
                        firstViewCopy[firstViewCopyLength - counter] = value + 10;
                    }
                    else {
                        b = 0;
                        firstViewCopy[firstViewCopyLength - counter] = value;
                        break;
                    }
                }
            }
            return firstViewCopy.slice();
        }
        //endregion
        //region Initial variables
        var firstBit = (this._valueHex.byteLength * 8) - 1;
        var digits = new Uint8Array((this._valueHex.byteLength * 8) / 3);
        var bitNumber = 0;
        var currentByte;
        var asn1View = new Uint8Array(this._valueHex);
        var result = "";
        var flag = false;
        //endregion
        //region Calculate number
        for (var byteNumber = (this._valueHex.byteLength - 1); byteNumber >= 0; byteNumber--) {
            currentByte = asn1View[byteNumber];
            for (var i = 0; i < 8; i++) {
                if ((currentByte & 1) === 1) {
                    switch (bitNumber) {
                        case firstBit:
                            digits = viewSub(power2(bitNumber), digits);
                            result = "-";
                            break;
                        default:
                            digits = viewAdd(digits, power2(bitNumber));
                    }
                }
                bitNumber++;
                currentByte >>= 1;
            }
        }
        //endregion
        //region Print number
        for (var i = 0; i < digits.length; i++) {
            if (digits[i])
                flag = true;
            if (flag)
                result += digitsString.charAt(digits[i]);
        }
        if (flag === false)
            result += digitsString.charAt(0);
        //endregion
        return result;
    };
    return LocalIntegerValueBlock;
}(HexBlock(ValueBlock)));
//**************************************************************************************
var Integer = /** @class */ (function (_super) {
    __extends(Integer, _super);
    //**********************************************************************************
    /**
     * Constructor for "Integer" class
     * @param {Object} [parameters={}]
     */
    function Integer(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalIntegerValueBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 2; // Integer
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Integer.blockName = function () {
        return "INTEGER";
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Compare two Integer object, or Integer and ArrayBuffer objects
     * @param {!Integer|ArrayBuffer} otherValue
     * @returns {boolean}
     */
    Integer.prototype.isEqual = function (otherValue) {
        if (otherValue instanceof Integer) {
            if (this.valueBlock.isHexOnly && otherValue.valueBlock.isHexOnly) // Compare two ArrayBuffers
                return isEqualBuffer(this.valueBlock.valueHex, otherValue.valueBlock.valueHex);
            if (this.valueBlock.isHexOnly === otherValue.valueBlock.isHexOnly)
                return (this.valueBlock.valueDec === otherValue.valueBlock.valueDec);
            return false;
        }
        if (otherValue instanceof ArrayBuffer)
            return isEqualBuffer(this.valueBlock.valueHex, otherValue);
        return false;
    };
    //**********************************************************************************
    /**
     * Convert current Integer value from BER into DER format
     * @returns {Integer}
     */
    Integer.prototype.convertToDER = function () {
        var integer = new Integer({ valueHex: this.valueBlock.valueHex });
        integer.valueBlock.toDER();
        return integer;
    };
    //**********************************************************************************
    /**
     * Convert current Integer value from DER to BER format
     * @returns {Integer}
     */
    Integer.prototype.convertFromDER = function () {
        var expectedLength = (this.valueBlock.valueHex.byteLength % 2) ? (this.valueBlock.valueHex.byteLength + 1) : this.valueBlock.valueHex.byteLength;
        var integer = new Integer({ valueHex: this.valueBlock.valueHex });
        integer.valueBlock.fromDER(integer.valueBlock.valueHex, 0, integer.valueBlock.valueHex.byteLength, expectedLength);
        return integer;
    };
    //**********************************************************************************
    Integer.prototype.toString = function () {
        var hex = bufferToHexCodes(this.valueBlock.valueHex);
        var bigInt = BigInt("0x" + hex);
        return this.constructor.blockName() + " : " + bigInt.toString();
    };
    return Integer;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 Enumerated type class
//**************************************************************************************
var Enumerated = /** @class */ (function (_super) {
    __extends(Enumerated, _super);
    //**********************************************************************************
    /**
     * Constructor for "Enumerated" class
     * @param {Object} [parameters={}]
     */
    function Enumerated(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 10; // Enumerated
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Enumerated.blockName = function () {
        return "ENUMERATED";
    };
    return Enumerated;
}(Integer));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of ASN.1 ObjectIdentifier type class
//**************************************************************************************
var LocalSidValueBlock = /** @class */ (function (_super) {
    __extends(LocalSidValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalSidValueBlock" class
     * @param {Object} [parameters={}]
     * @property {number} [valueDec]
     * @property {boolean} [isFirstSid]
     */
    function LocalSidValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.valueDec = getParametersValue(parameters, "valueDec", -1);
        _this.isFirstSid = getParametersValue(parameters, "isFirstSid", false);
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalSidValueBlock.blockName = function () {
        return "sidBlock";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalSidValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        if (inputLength === 0)
            return inputOffset;
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        this.valueHex = new ArrayBuffer(inputLength);
        var view = new Uint8Array(this.valueHex);
        for (var i = 0; i < inputLength; i++) {
            view[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00)
                break;
        }
        //region Ajust size of valueHex buffer
        var tempValueHex = new ArrayBuffer(this.blockLength);
        var tempView = new Uint8Array(tempValueHex);
        for (var i = 0; i < this.blockLength; i++)
            tempView[i] = view[i];
        //noinspection JSCheckFunctionSignatures
        this.valueHex = tempValueHex.slice(0);
        view = new Uint8Array(this.valueHex);
        //endregion
        if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return (-1);
        }
        if (view[0] === 0x00)
            this.warnings.push("Needlessly long format of SID encoding");
        if (this.blockLength <= 8)
            this.valueDec = utilFromBase(view, 7);
        else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
        }
        return (inputOffset + this.blockLength);
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalSidValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        //region Initial variables
        var retBuf;
        var retView;
        //endregion
        if (this.isHexOnly) {
            if (sizeOnly === true)
                return (new ArrayBuffer(this.valueHex.byteLength));
            var curView = new Uint8Array(this.valueHex);
            retBuf = new ArrayBuffer(this.blockLength);
            retView = new Uint8Array(retBuf);
            for (var i = 0; i < (this.blockLength - 1); i++)
                retView[i] = curView[i] | 0x80;
            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retBuf;
        }
        var encodedBuf = utilToBase(this.valueDec, 7);
        if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return (new ArrayBuffer(0));
        }
        retBuf = new ArrayBuffer(encodedBuf.byteLength);
        if (sizeOnly === false) {
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);
            for (var i = 0; i < (encodedBuf.byteLength - 1); i++)
                retView[i] = encodedView[i] | 0x80;
            retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Create string representation of current SID block
     * @returns {string}
     */
    LocalSidValueBlock.prototype.toString = function () {
        var result = "";
        if (this.isHexOnly === true)
            result = bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
        else {
            if (this.isFirstSid) {
                var sidValue = this.valueDec;
                if (this.valueDec <= 39)
                    result = "0.";
                else {
                    if (this.valueDec <= 79) {
                        result = "1.";
                        sidValue -= 40;
                    }
                    else {
                        result = "2.";
                        sidValue -= 80;
                    }
                }
                result += sidValue.toString();
            }
            else
                result = this.valueDec.toString();
        }
        return result;
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalSidValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.valueDec = this.valueDec;
        object.isFirstSid = this.isFirstSid;
        return object;
    };
    return LocalSidValueBlock;
}(HexBlock(LocalBaseBlock)));
//**************************************************************************************
var LocalObjectIdentifierValueBlock = /** @class */ (function (_super) {
    __extends(LocalObjectIdentifierValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalObjectIdentifierValueBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function LocalObjectIdentifierValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.fromString(getParametersValue(parameters, "value", ""));
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalObjectIdentifierValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = inputOffset;
        while (inputLength > 0) {
            var sidBlock = new LocalSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
            if (resultOffset === (-1)) {
                this.blockLength = 0;
                this.error = sidBlock.error;
                return resultOffset;
            }
            if (this.value.length === 0)
                sidBlock.isFirstSid = true;
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
        }
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalObjectIdentifierValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        var retBuf = new ArrayBuffer(0);
        for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);
            if (valueBuf.byteLength === 0) {
                this.error = this.value[i].error;
                return (new ArrayBuffer(0));
            }
            retBuf = utilConcatBuf(retBuf, valueBuf);
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Create "LocalObjectIdentifierValueBlock" class from string
     * @param {string} string Input string to convert from
     * @returns {boolean}
     */
    LocalObjectIdentifierValueBlock.prototype.fromString = function (string) {
        this.value = []; // Clear existing SID values
        var pos1 = 0;
        var pos2 = 0;
        var sid = "";
        var flag = false;
        do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === (-1))
                sid = string.substr(pos1);
            else
                sid = string.substr(pos1, pos2 - pos1);
            pos1 = pos2 + 1;
            if (flag) {
                var sidBlock = this.value[0];
                var plus = 0;
                switch (sidBlock.valueDec) {
                    case 0:
                        break;
                    case 1:
                        plus = 40;
                        break;
                    case 2:
                        plus = 80;
                        break;
                    default:
                        this.value = []; // clear SID array
                        return false; // ???
                }
                var parsedSID = parseInt(sid, 10);
                if (isNaN(parsedSID))
                    return true;
                sidBlock.valueDec = parsedSID + plus;
                flag = false;
            }
            else {
                var sidBlock = new LocalSidValueBlock();
                sidBlock.valueDec = parseInt(sid, 10);
                if (isNaN(sidBlock.valueDec))
                    return true;
                if (this.value.length === 0) {
                    sidBlock.isFirstSid = true;
                    flag = true;
                }
                this.value.push(sidBlock);
            }
        } while (pos2 !== (-1));
        return true;
    };
    //**********************************************************************************
    /**
     * Converts "LocalObjectIdentifierValueBlock" class to string
     * @returns {string}
     */
    LocalObjectIdentifierValueBlock.prototype.toString = function () {
        var result = "";
        var isHexOnly = false;
        for (var i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            var sidStr = this.value[i].toString();
            if (i !== 0)
                result = result + ".";
            if (isHexOnly) {
                sidStr = "{" + sidStr + "}";
                if (this.value[i].isFirstSid)
                    result = "2.{" + sidStr + " - 80}";
                else
                    result += sidStr;
            }
            else
                result += sidStr;
        }
        return result;
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalObjectIdentifierValueBlock.blockName = function () {
        return "ObjectIdentifierValueBlock";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalObjectIdentifierValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.value = this.toString();
        object.sidArray = [];
        for (var i = 0; i < this.value.length; i++)
            object.sidArray.push(this.value[i].toJSON());
        return object;
    };
    return LocalObjectIdentifierValueBlock;
}(ValueBlock));
//**************************************************************************************
/**
 * @extends BaseBlock
 */
var ObjectIdentifier = /** @class */ (function (_super) {
    __extends(ObjectIdentifier, _super);
    //**********************************************************************************
    /**
     * Constructor for "ObjectIdentifier" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function ObjectIdentifier(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalObjectIdentifierValueBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 6; // OBJECT IDENTIFIER
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    ObjectIdentifier.blockName = function () {
        return "OBJECT IDENTIFIER";
    };
    //**********************************************************************************
    ObjectIdentifier.prototype.toString = function () {
        return this.constructor.blockName() + " : " + this.valueBlock.toString();
    };
    return ObjectIdentifier;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of all string's classes
//**************************************************************************************
var LocalUtf8StringValueBlock = /** @class */ (function (_super) {
    __extends(LocalUtf8StringValueBlock, _super);
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Constructor for "LocalUtf8StringValueBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalUtf8StringValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.isHexOnly = true;
        _this.value = ""; // String representation of decoded ArrayBuffer
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalUtf8StringValueBlock.blockName = function () {
        return "Utf8StringValueBlock";
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalUtf8StringValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.value = this.value;
        return object;
    };
    return LocalUtf8StringValueBlock;
}(HexBlock(LocalBaseBlock)));
//**************************************************************************************
/**
 * @extends BaseBlock
 */
var Utf8String = /** @class */ (function (_super) {
    __extends(Utf8String, _super);
    //**********************************************************************************
    /**
     * Constructor for "Utf8String" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function Utf8String(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalUtf8StringValueBlock) || this;
        if ("value" in parameters)
            _this.fromString(parameters.value);
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 12; // Utf8String
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Utf8String.blockName = function () {
        return "UTF8String";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    Utf8String.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHex);
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Function converting ArrayBuffer into ASN.1 internal string
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     */
    Utf8String.prototype.fromBuffer = function (inputBuffer) {
        this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));
        try {
            //noinspection JSDeprecatedSymbols
            this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value));
        }
        catch (ex) {
            this.warnings.push("Error during \"decodeURIComponent\": " + ex + ", using raw string");
        }
    };
    //**********************************************************************************
    /**
     * Function converting JavaScript string into ASN.1 internal class
     * @param {!string} inputString ASN.1 BER encoded array
     */
    Utf8String.prototype.fromString = function (inputString) {
        //noinspection JSDeprecatedSymbols
        var str = unescape(encodeURIComponent(inputString));
        var strLen = str.length;
        this.valueBlock.valueHex = new ArrayBuffer(strLen);
        var view = new Uint8Array(this.valueBlock.valueHex);
        for (var i = 0; i < strLen; i++)
            view[i] = str.charCodeAt(i);
        this.valueBlock.value = inputString;
    };
    //**********************************************************************************
    Utf8String.prototype.toString = function () {
        return this.constructor.blockName() + " : " + this.valueBlock.value;
    };
    return Utf8String;
}(BaseBlock));
//**************************************************************************************
//region Declaration of ASN.1 RelativeObjectIdentifier type class
//**************************************************************************************
var LocalRelativeSidValueBlock = /** @class */ (function (_super) {
    __extends(LocalRelativeSidValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalRelativeSidValueBlock" class
     * @param {Object} [parameters={}]
     * @property {number} [valueDec]
     */
    function LocalRelativeSidValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.valueDec = getParametersValue(parameters, "valueDec", -1);
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalRelativeSidValueBlock.blockName = function () {
        return "relativeSidBlock";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalRelativeSidValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        if (inputLength === 0)
            return inputOffset;
        //region Basic check for parameters
        //noinspection JSCheckFunctionSignatures
        if (checkBufferParams(this, inputBuffer, inputOffset, inputLength) === false)
            return (-1);
        //endregion
        var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
        this.valueHex = new ArrayBuffer(inputLength);
        var view = new Uint8Array(this.valueHex);
        for (var i = 0; i < inputLength; i++) {
            view[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00)
                break;
        }
        //region Ajust size of valueHex buffer
        var tempValueHex = new ArrayBuffer(this.blockLength);
        var tempView = new Uint8Array(tempValueHex);
        for (var i = 0; i < this.blockLength; i++)
            tempView[i] = view[i];
        //noinspection JSCheckFunctionSignatures
        this.valueHex = tempValueHex.slice(0);
        view = new Uint8Array(this.valueHex);
        //endregion
        if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return (-1);
        }
        if (view[0] === 0x00)
            this.warnings.push("Needlessly long format of SID encoding");
        if (this.blockLength <= 8)
            this.valueDec = utilFromBase(view, 7);
        else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
        }
        return (inputOffset + this.blockLength);
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalRelativeSidValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        //region Initial variables
        var retBuf;
        var retView;
        //endregion
        if (this.isHexOnly) {
            if (sizeOnly === true)
                return (new ArrayBuffer(this.valueHex.byteLength));
            var curView = new Uint8Array(this.valueHex);
            retBuf = new ArrayBuffer(this.blockLength);
            retView = new Uint8Array(retBuf);
            for (var i = 0; i < (this.blockLength - 1); i++)
                retView[i] = curView[i] | 0x80;
            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retBuf;
        }
        var encodedBuf = utilToBase(this.valueDec, 7);
        if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return (new ArrayBuffer(0));
        }
        retBuf = new ArrayBuffer(encodedBuf.byteLength);
        if (sizeOnly === false) {
            var encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);
            for (var i = 0; i < (encodedBuf.byteLength - 1); i++)
                retView[i] = encodedView[i] | 0x80;
            retView[encodedBuf.byteLength - 1] = encodedView[encodedBuf.byteLength - 1];
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Create string representation of current SID block
     * @returns {string}
     */
    LocalRelativeSidValueBlock.prototype.toString = function () {
        var result = "";
        if (this.isHexOnly === true)
            result = bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
        else {
            result = this.valueDec.toString();
        }
        return result;
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalRelativeSidValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.valueDec = this.valueDec;
        return object;
    };
    return LocalRelativeSidValueBlock;
}(HexBlock(LocalBaseBlock)));
//**************************************************************************************
var LocalRelativeObjectIdentifierValueBlock = /** @class */ (function (_super) {
    __extends(LocalRelativeObjectIdentifierValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalRelativeObjectIdentifierValueBlock" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function LocalRelativeObjectIdentifierValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.fromString(getParametersValue(parameters, "value", ""));
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalRelativeObjectIdentifierValueBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = inputOffset;
        while (inputLength > 0) {
            var sidBlock = new LocalRelativeSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
            if (resultOffset === (-1)) {
                this.blockLength = 0;
                this.error = sidBlock.error;
                return resultOffset;
            }
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
        }
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    LocalRelativeObjectIdentifierValueBlock.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        var retBuf = new ArrayBuffer(0);
        for (var i = 0; i < this.value.length; i++) {
            var valueBuf = this.value[i].toBER(sizeOnly);
            if (valueBuf.byteLength === 0) {
                this.error = this.value[i].error;
                return (new ArrayBuffer(0));
            }
            retBuf = utilConcatBuf(retBuf, valueBuf);
        }
        return retBuf;
    };
    //**********************************************************************************
    /**
     * Create "LocalRelativeObjectIdentifierValueBlock" class from string
     * @param {string} string Input string to convert from
     * @returns {boolean}
     */
    LocalRelativeObjectIdentifierValueBlock.prototype.fromString = function (string) {
        this.value = []; // Clear existing SID values
        var pos1 = 0;
        var pos2 = 0;
        var sid = "";
        do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === (-1))
                sid = string.substr(pos1);
            else
                sid = string.substr(pos1, pos2 - pos1);
            pos1 = pos2 + 1;
            var sidBlock = new LocalRelativeSidValueBlock();
            sidBlock.valueDec = parseInt(sid, 10);
            if (isNaN(sidBlock.valueDec))
                return true;
            this.value.push(sidBlock);
        } while (pos2 !== (-1));
        return true;
    };
    //**********************************************************************************
    /**
     * Converts "LocalRelativeObjectIdentifierValueBlock" class to string
     * @returns {string}
     */
    LocalRelativeObjectIdentifierValueBlock.prototype.toString = function () {
        var result = "";
        var isHexOnly = false;
        for (var i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            var sidStr = this.value[i].toString();
            if (i !== 0)
                result = result + ".";
            if (isHexOnly) {
                sidStr = "{" + sidStr + "}";
                result += sidStr;
            }
            else
                result += sidStr;
        }
        return result;
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalRelativeObjectIdentifierValueBlock.blockName = function () {
        return "RelativeObjectIdentifierValueBlock";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalRelativeObjectIdentifierValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.value = this.toString();
        object.sidArray = [];
        for (var i = 0; i < this.value.length; i++)
            object.sidArray.push(this.value[i].toJSON());
        return object;
    };
    return LocalRelativeObjectIdentifierValueBlock;
}(ValueBlock));
//**************************************************************************************
/**
 * @extends BaseBlock
 */
var RelativeObjectIdentifier = /** @class */ (function (_super) {
    __extends(RelativeObjectIdentifier, _super);
    //**********************************************************************************
    /**
     * Constructor for "RelativeObjectIdentifier" class
     * @param {Object} [parameters={}]
     * @property {ArrayBuffer} [valueHex]
     */
    function RelativeObjectIdentifier(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalRelativeObjectIdentifierValueBlock) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 13; // RELATIVE OBJECT IDENTIFIER
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    RelativeObjectIdentifier.blockName = function () {
        return "RelativeObjectIdentifier";
    };
    return RelativeObjectIdentifier;
}(BaseBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
/**
 * @extends LocalBaseBlock
 * @extends HexBlock
 */
var LocalBmpStringValueBlock = /** @class */ (function (_super) {
    __extends(LocalBmpStringValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalBmpStringValueBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalBmpStringValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.isHexOnly = true;
        _this.value = "";
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalBmpStringValueBlock.blockName = function () {
        return "BmpStringValueBlock";
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalBmpStringValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.value = this.value;
        return object;
    };
    return LocalBmpStringValueBlock;
}(HexBlock(LocalBaseBlock)));
//**************************************************************************************
/**
 * @extends BaseBlock
 */
var BmpString = /** @class */ (function (_super) {
    __extends(BmpString, _super);
    //**********************************************************************************
    /**
     * Constructor for "BmpString" class
     * @param {Object} [parameters={}]
     */
    function BmpString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalBmpStringValueBlock) || this;
        if ("value" in parameters)
            _this.fromString(parameters.value);
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 30; // BmpString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    BmpString.blockName = function () {
        return "BMPString";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    BmpString.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHex);
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Function converting ArrayBuffer into ASN.1 internal string
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     */
    BmpString.prototype.fromBuffer = function (inputBuffer) {
        //noinspection JSCheckFunctionSignatures
        var copyBuffer = inputBuffer.slice(0);
        var valueView = new Uint8Array(copyBuffer);
        for (var i = 0; i < valueView.length; i += 2) {
            var temp = valueView[i];
            valueView[i] = valueView[i + 1];
            valueView[i + 1] = temp;
        }
        this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(copyBuffer));
    };
    //**********************************************************************************
    /**
     * Function converting JavaScript string into ASN.1 internal class
     * @param {!string} inputString ASN.1 BER encoded array
     */
    BmpString.prototype.fromString = function (inputString) {
        var strLength = inputString.length;
        this.valueBlock.valueHex = new ArrayBuffer(strLength * 2);
        var valueHexView = new Uint8Array(this.valueBlock.valueHex);
        for (var i = 0; i < strLength; i++) {
            var codeBuf = utilToBase(inputString.charCodeAt(i), 8);
            var codeView = new Uint8Array(codeBuf);
            if (codeView.length > 2)
                continue;
            var dif = 2 - codeView.length;
            for (var j = (codeView.length - 1); j >= 0; j--)
                valueHexView[i * 2 + j + dif] = codeView[j];
        }
        this.valueBlock.value = inputString;
    };
    //**********************************************************************************
    BmpString.prototype.toString = function () {
        return this.constructor.blockName() + " : " + this.valueBlock.value;
    };
    return BmpString;
}(BaseBlock));
//**************************************************************************************
var LocalUniversalStringValueBlock = /** @class */ (function (_super) {
    __extends(LocalUniversalStringValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalUniversalStringValueBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalUniversalStringValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.isHexOnly = true;
        _this.value = "";
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalUniversalStringValueBlock.blockName = function () {
        return "UniversalStringValueBlock";
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalUniversalStringValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.value = this.value;
        return object;
    };
    return LocalUniversalStringValueBlock;
}(HexBlock(LocalBaseBlock)));
//**************************************************************************************
/**
 * @extends BaseBlock
 */
var UniversalString = /** @class */ (function (_super) {
    __extends(UniversalString, _super);
    //**********************************************************************************
    /**
     * Constructor for "UniversalString" class
     * @param {Object} [parameters={}]
     */
    function UniversalString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalUniversalStringValueBlock) || this;
        if ("value" in parameters)
            _this.fromString(parameters.value);
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 28; // UniversalString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    UniversalString.blockName = function () {
        return "UniversalString";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    UniversalString.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHex);
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Function converting ArrayBuffer into ASN.1 internal string
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     */
    UniversalString.prototype.fromBuffer = function (inputBuffer) {
        //noinspection JSCheckFunctionSignatures
        var copyBuffer = inputBuffer.slice(0);
        var valueView = new Uint8Array(copyBuffer);
        for (var i = 0; i < valueView.length; i += 4) {
            valueView[i] = valueView[i + 3];
            valueView[i + 1] = valueView[i + 2];
            valueView[i + 2] = 0x00;
            valueView[i + 3] = 0x00;
        }
        this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
    };
    //**********************************************************************************
    /**
     * Function converting JavaScript string into ASN.1 internal class
     * @param {!string} inputString ASN.1 BER encoded array
     */
    UniversalString.prototype.fromString = function (inputString) {
        var strLength = inputString.length;
        this.valueBlock.valueHex = new ArrayBuffer(strLength * 4);
        var valueHexView = new Uint8Array(this.valueBlock.valueHex);
        for (var i = 0; i < strLength; i++) {
            var codeBuf = utilToBase(inputString.charCodeAt(i), 8);
            var codeView = new Uint8Array(codeBuf);
            if (codeView.length > 4)
                continue;
            var dif = 4 - codeView.length;
            for (var j = (codeView.length - 1); j >= 0; j--)
                valueHexView[i * 4 + j + dif] = codeView[j];
        }
        this.valueBlock.value = inputString;
    };
    //**********************************************************************************
    UniversalString.prototype.toString = function () {
        return this.constructor.blockName() + " : " + this.valueBlock.value;
    };
    return UniversalString;
}(BaseBlock));
//**************************************************************************************
var LocalSimpleStringValueBlock = /** @class */ (function (_super) {
    __extends(LocalSimpleStringValueBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalSimpleStringValueBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalSimpleStringValueBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.value = "";
        _this.isHexOnly = true;
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalSimpleStringValueBlock.blockName = function () {
        return "SimpleStringValueBlock";
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    LocalSimpleStringValueBlock.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.value = this.value;
        return object;
    };
    return LocalSimpleStringValueBlock;
}(HexBlock(LocalBaseBlock)));
//**************************************************************************************
/**
 * @extends BaseBlock
 */
var LocalSimpleStringBlock = /** @class */ (function (_super) {
    __extends(LocalSimpleStringBlock, _super);
    //**********************************************************************************
    /**
     * Constructor for "LocalSimpleStringBlock" class
     * @param {Object} [parameters={}]
     */
    function LocalSimpleStringBlock(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters, LocalSimpleStringValueBlock) || this;
        if ("value" in parameters)
            _this.fromString(parameters.value);
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    LocalSimpleStringBlock.blockName = function () {
        return "SIMPLESTRING";
    };
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    LocalSimpleStringBlock.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHex);
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Function converting ArrayBuffer into ASN.1 internal string
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     */
    LocalSimpleStringBlock.prototype.fromBuffer = function (inputBuffer) {
        this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(inputBuffer));
    };
    //**********************************************************************************
    /**
     * Function converting JavaScript string into ASN.1 internal class
     * @param {!string} inputString ASN.1 BER encoded array
     */
    LocalSimpleStringBlock.prototype.fromString = function (inputString) {
        var strLen = inputString.length;
        this.valueBlock.valueHex = new ArrayBuffer(strLen);
        var view = new Uint8Array(this.valueBlock.valueHex);
        for (var i = 0; i < strLen; i++)
            view[i] = inputString.charCodeAt(i);
        this.valueBlock.value = inputString;
    };
    //**********************************************************************************
    LocalSimpleStringBlock.prototype.toString = function () {
        return this.constructor.blockName() + " : " + this.valueBlock.value;
    };
    return LocalSimpleStringBlock;
}(BaseBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var NumericString = /** @class */ (function (_super) {
    __extends(NumericString, _super);
    //**********************************************************************************
    /**
     * Constructor for "NumericString" class
     * @param {Object} [parameters={}]
     */
    function NumericString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 18; // NumericString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    NumericString.blockName = function () {
        return "NumericString";
    };
    return NumericString;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var PrintableString = /** @class */ (function (_super) {
    __extends(PrintableString, _super);
    //**********************************************************************************
    /**
     * Constructor for "PrintableString" class
     * @param {Object} [parameters={}]
     */
    function PrintableString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 19; // PrintableString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    PrintableString.blockName = function () {
        return "PrintableString";
    };
    return PrintableString;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var TeletexString = /** @class */ (function (_super) {
    __extends(TeletexString, _super);
    //**********************************************************************************
    /**
     * Constructor for "TeletexString" class
     * @param {Object} [parameters={}]
     */
    function TeletexString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 20; // TeletexString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    TeletexString.blockName = function () {
        return "TeletexString";
    };
    return TeletexString;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var VideotexString = /** @class */ (function (_super) {
    __extends(VideotexString, _super);
    //**********************************************************************************
    /**
     * Constructor for "VideotexString" class
     * @param {Object} [parameters={}]
     */
    function VideotexString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 21; // VideotexString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    VideotexString.blockName = function () {
        return "VideotexString";
    };
    return VideotexString;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var IA5String = /** @class */ (function (_super) {
    __extends(IA5String, _super);
    //**********************************************************************************
    /**
     * Constructor for "IA5String" class
     * @param {Object} [parameters={}]
     */
    function IA5String(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 22; // IA5String
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    IA5String.blockName = function () {
        return "IA5String";
    };
    return IA5String;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var GraphicString = /** @class */ (function (_super) {
    __extends(GraphicString, _super);
    //**********************************************************************************
    /**
     * Constructor for "GraphicString" class
     * @param {Object} [parameters={}]
     */
    function GraphicString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 25; // GraphicString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    GraphicString.blockName = function () {
        return "GraphicString";
    };
    return GraphicString;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var VisibleString = /** @class */ (function (_super) {
    __extends(VisibleString, _super);
    //**********************************************************************************
    /**
     * Constructor for "VisibleString" class
     * @param {Object} [parameters={}]
     */
    function VisibleString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 26; // VisibleString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    VisibleString.blockName = function () {
        return "VisibleString";
    };
    return VisibleString;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var GeneralString = /** @class */ (function (_super) {
    __extends(GeneralString, _super);
    //**********************************************************************************
    /**
     * Constructor for "GeneralString" class
     * @param {Object} [parameters={}]
     */
    function GeneralString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 27; // GeneralString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    GeneralString.blockName = function () {
        return "GeneralString";
    };
    return GeneralString;
}(LocalSimpleStringBlock));
//**************************************************************************************
/**
 * @extends LocalSimpleStringBlock
 */
var CharacterString = /** @class */ (function (_super) {
    __extends(CharacterString, _super);
    //**********************************************************************************
    /**
     * Constructor for "CharacterString" class
     * @param {Object} [parameters={}]
     */
    function CharacterString(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 29; // CharacterString
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    CharacterString.blockName = function () {
        return "CharacterString";
    };
    return CharacterString;
}(LocalSimpleStringBlock));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of all date and time classes
//**************************************************************************************
/**
 * @extends VisibleString
 */
var UTCTime = /** @class */ (function (_super) {
    __extends(UTCTime, _super);
    //**********************************************************************************
    /**
     * Constructor for "UTCTime" class
     * @param {Object} [parameters={}]
     * @property {string} [value] String representatio of the date
     * @property {Date} [valueDate] JavaScript "Date" object
     */
    function UTCTime(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.year = 0;
        _this.month = 0;
        _this.day = 0;
        _this.hour = 0;
        _this.minute = 0;
        _this.second = 0;
        //region Create UTCTime from ASN.1 UTC string value
        if ("value" in parameters) {
            _this.fromString(parameters.value);
            _this.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
            var view = new Uint8Array(_this.valueBlock.valueHex);
            for (var i = 0; i < parameters.value.length; i++)
                view[i] = parameters.value.charCodeAt(i);
        }
        //endregion
        //region Create GeneralizedTime from JavaScript Date type
        if ("valueDate" in parameters) {
            _this.fromDate(parameters.valueDate);
            _this.valueBlock.valueHex = _this.toBuffer();
        }
        //endregion
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 23; // UTCTime
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    UTCTime.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHex);
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Function converting ArrayBuffer into ASN.1 internal string
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     */
    UTCTime.prototype.fromBuffer = function (inputBuffer) {
        this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
    };
    //**********************************************************************************
    /**
     * Function converting ASN.1 internal string into ArrayBuffer
     * @returns {ArrayBuffer}
     */
    UTCTime.prototype.toBuffer = function () {
        var str = this.toString();
        var buffer = new ArrayBuffer(str.length);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < str.length; i++)
            view[i] = str.charCodeAt(i);
        return buffer;
    };
    //**********************************************************************************
    /**
     * Function converting "Date" object into ASN.1 internal string
     * @param {!Date} inputDate JavaScript "Date" object
     */
    UTCTime.prototype.fromDate = function (inputDate) {
        this.year = inputDate.getUTCFullYear();
        this.month = inputDate.getUTCMonth() + 1;
        this.day = inputDate.getUTCDate();
        this.hour = inputDate.getUTCHours();
        this.minute = inputDate.getUTCMinutes();
        this.second = inputDate.getUTCSeconds();
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Function converting ASN.1 internal string into "Date" object
     * @returns {Date}
     */
    UTCTime.prototype.toDate = function () {
        return (new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second)));
    };
    //**********************************************************************************
    /**
     * Function converting JavaScript string into ASN.1 internal class
     * @param {!string} inputString ASN.1 BER encoded array
     */
    UTCTime.prototype.fromString = function (inputString) {
        //region Parse input string
        var parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
        var parserArray = parser.exec(inputString);
        if (parserArray === null) {
            this.error = "Wrong input string for convertion";
            return;
        }
        //endregion
        //region Store parsed values
        var year = parseInt(parserArray[1], 10);
        if (year >= 50)
            this.year = 1900 + year;
        else
            this.year = 2000 + year;
        this.month = parseInt(parserArray[2], 10);
        this.day = parseInt(parserArray[3], 10);
        this.hour = parseInt(parserArray[4], 10);
        this.minute = parseInt(parserArray[5], 10);
        this.second = parseInt(parserArray[6], 10);
        //endregion
    };
    //**********************************************************************************
    /**
     * Function converting ASN.1 internal class into JavaScript string
     * @returns {string}
     */
    UTCTime.prototype.toString = function () {
        var outputArray = new Array(7);
        outputArray[0] = padNumber(((this.year < 2000) ? (this.year - 1900) : (this.year - 2000)), 2);
        outputArray[1] = padNumber(this.month, 2);
        outputArray[2] = padNumber(this.day, 2);
        outputArray[3] = padNumber(this.hour, 2);
        outputArray[4] = padNumber(this.minute, 2);
        outputArray[5] = padNumber(this.second, 2);
        outputArray[6] = "Z";
        return outputArray.join("");
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    UTCTime.blockName = function () {
        return "UTCTime";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    UTCTime.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.year = this.year;
        object.month = this.month;
        object.day = this.day;
        object.hour = this.hour;
        object.minute = this.minute;
        object.second = this.second;
        return object;
    };
    return UTCTime;
}(VisibleString));
//**************************************************************************************
/**
 * @extends VisibleString
 */
var GeneralizedTime = /** @class */ (function (_super) {
    __extends(GeneralizedTime, _super);
    //**********************************************************************************
    /**
     * Constructor for "GeneralizedTime" class
     * @param {Object} [parameters={}]
     * @property {string} [value] String representatio of the date
     * @property {Date} [valueDate] JavaScript "Date" object
     */
    function GeneralizedTime(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.year = 0;
        _this.month = 0;
        _this.day = 0;
        _this.hour = 0;
        _this.minute = 0;
        _this.second = 0;
        _this.millisecond = 0;
        //region Create UTCTime from ASN.1 UTC string value
        if ("value" in parameters) {
            _this.fromString(parameters.value);
            _this.valueBlock.valueHex = new ArrayBuffer(parameters.value.length);
            var view = new Uint8Array(_this.valueBlock.valueHex);
            for (var i = 0; i < parameters.value.length; i++)
                view[i] = parameters.value.charCodeAt(i);
        }
        //endregion
        //region Create GeneralizedTime from JavaScript Date type
        if ("valueDate" in parameters) {
            _this.fromDate(parameters.valueDate);
            _this.valueBlock.valueHex = _this.toBuffer();
        }
        //endregion
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 24; // GeneralizedTime
        return _this;
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    GeneralizedTime.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        var resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm === true) ? inputLength : this.lenBlock.length);
        if (resultOffset === (-1)) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHex);
        if (this.idBlock.error.length === 0)
            this.blockLength += this.idBlock.blockLength;
        if (this.lenBlock.error.length === 0)
            this.blockLength += this.lenBlock.blockLength;
        if (this.valueBlock.error.length === 0)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    };
    //**********************************************************************************
    /**
     * Function converting ArrayBuffer into ASN.1 internal string
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     */
    GeneralizedTime.prototype.fromBuffer = function (inputBuffer) {
        this.fromString(String.fromCharCode.apply(null, new Uint8Array(inputBuffer)));
    };
    //**********************************************************************************
    /**
     * Function converting ASN.1 internal string into ArrayBuffer
     * @returns {ArrayBuffer}
     */
    GeneralizedTime.prototype.toBuffer = function () {
        var str = this.toString();
        var buffer = new ArrayBuffer(str.length);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < str.length; i++)
            view[i] = str.charCodeAt(i);
        return buffer;
    };
    //**********************************************************************************
    /**
     * Function converting "Date" object into ASN.1 internal string
     * @param {!Date} inputDate JavaScript "Date" object
     */
    GeneralizedTime.prototype.fromDate = function (inputDate) {
        this.year = inputDate.getUTCFullYear();
        this.month = inputDate.getUTCMonth() + 1;
        this.day = inputDate.getUTCDate();
        this.hour = inputDate.getUTCHours();
        this.minute = inputDate.getUTCMinutes();
        this.second = inputDate.getUTCSeconds();
        this.millisecond = inputDate.getUTCMilliseconds();
    };
    //**********************************************************************************
    //noinspection JSUnusedGlobalSymbols
    /**
     * Function converting ASN.1 internal string into "Date" object
     * @returns {Date}
     */
    GeneralizedTime.prototype.toDate = function () {
        return (new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)));
    };
    //**********************************************************************************
    /**
     * Function converting JavaScript string into ASN.1 internal class
     * @param {!string} inputString ASN.1 BER encoded array
     */
    GeneralizedTime.prototype.fromString = function (inputString) {
        //region Initial variables
        var isUTC = false;
        var timeString = "";
        var dateTimeString = "";
        var fractionPart = 0;
        var parser;
        var hourDifference = 0;
        var minuteDifference = 0;
        //endregion
        //region Convert as UTC time
        if (inputString[inputString.length - 1] === "Z") {
            timeString = inputString.substr(0, inputString.length - 1);
            isUTC = true;
        }
        //endregion
        //region Convert as local time
        else {
            //noinspection JSPrimitiveTypeWrapperUsage
            var number = new Number(inputString[inputString.length - 1]);
            if (isNaN(number.valueOf()))
                throw new Error("Wrong input string for convertion");
            timeString = inputString;
        }
        //endregion
        //region Check that we do not have a "+" and "-" symbols inside UTC time
        if (isUTC) {
            if (timeString.indexOf("+") !== (-1))
                throw new Error("Wrong input string for convertion");
            if (timeString.indexOf("-") !== (-1))
                throw new Error("Wrong input string for convertion");
        }
        //endregion
        //region Get "UTC time difference" in case of local time
        else {
            var multiplier = 1;
            var differencePosition = timeString.indexOf("+");
            var differenceString = "";
            if (differencePosition === (-1)) {
                differencePosition = timeString.indexOf("-");
                multiplier = (-1);
            }
            if (differencePosition !== (-1)) {
                differenceString = timeString.substr(differencePosition + 1);
                timeString = timeString.substr(0, differencePosition);
                if ((differenceString.length !== 2) && (differenceString.length !== 4))
                    throw new Error("Wrong input string for convertion");
                //noinspection JSPrimitiveTypeWrapperUsage
                var number = new Number(differenceString.substr(0, 2));
                if (isNaN(number.valueOf()))
                    throw new Error("Wrong input string for convertion");
                hourDifference = multiplier * number;
                if (differenceString.length === 4) {
                    //noinspection JSPrimitiveTypeWrapperUsage
                    number = new Number(differenceString.substr(2, 2));
                    if (isNaN(number.valueOf()))
                        throw new Error("Wrong input string for convertion");
                    minuteDifference = multiplier * number;
                }
            }
        }
        //endregion
        //region Get position of fraction point
        var fractionPointPosition = timeString.indexOf("."); // Check for "full stop" symbol
        if (fractionPointPosition === (-1))
            fractionPointPosition = timeString.indexOf(","); // Check for "comma" symbol
        //endregion
        //region Get fraction part
        if (fractionPointPosition !== (-1)) {
            //noinspection JSPrimitiveTypeWrapperUsage
            var fractionPartCheck = new Number("0" + timeString.substr(fractionPointPosition));
            if (isNaN(fractionPartCheck.valueOf()))
                throw new Error("Wrong input string for convertion");
            fractionPart = fractionPartCheck.valueOf();
            dateTimeString = timeString.substr(0, fractionPointPosition);
        }
        else
            dateTimeString = timeString;
        //endregion
        //region Parse internal date
        switch (true) {
            case (dateTimeString.length === 8): // "YYYYMMDD"
                parser = /(\d{4})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== (-1))
                    throw new Error("Wrong input string for convertion"); // Here we should not have a "fraction point"
                break;
            case (dateTimeString.length === 10): // "YYYYMMDDHH"
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== (-1)) {
                    var fractionResult = 60 * fractionPart;
                    this.minute = Math.floor(fractionResult);
                    fractionResult = 60 * (fractionResult - this.minute);
                    this.second = Math.floor(fractionResult);
                    fractionResult = 1000 * (fractionResult - this.second);
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            case (dateTimeString.length === 12): // "YYYYMMDDHHMM"
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== (-1)) {
                    var fractionResult = 60 * fractionPart;
                    this.second = Math.floor(fractionResult);
                    fractionResult = 1000 * (fractionResult - this.second);
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            case (dateTimeString.length === 14): // "YYYYMMDDHHMMSS"
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== (-1)) {
                    var fractionResult = 1000 * fractionPart;
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            default:
                throw new Error("Wrong input string for convertion");
        }
        //endregion
        //region Put parsed values at right places
        var parserArray = parser.exec(dateTimeString);
        if (parserArray === null)
            throw new Error("Wrong input string for convertion");
        for (var j = 1; j < parserArray.length; j++) {
            switch (j) {
                case 1:
                    this.year = parseInt(parserArray[j], 10);
                    break;
                case 2:
                    this.month = parseInt(parserArray[j], 10);
                    break;
                case 3:
                    this.day = parseInt(parserArray[j], 10);
                    break;
                case 4:
                    this.hour = parseInt(parserArray[j], 10) + hourDifference;
                    break;
                case 5:
                    this.minute = parseInt(parserArray[j], 10) + minuteDifference;
                    break;
                case 6:
                    this.second = parseInt(parserArray[j], 10);
                    break;
                default:
                    throw new Error("Wrong input string for convertion");
            }
        }
        //endregion
        //region Get final date
        if (isUTC === false) {
            var tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
            this.year = tempDate.getUTCFullYear();
            this.month = tempDate.getUTCMonth();
            this.day = tempDate.getUTCDay();
            this.hour = tempDate.getUTCHours();
            this.minute = tempDate.getUTCMinutes();
            this.second = tempDate.getUTCSeconds();
            this.millisecond = tempDate.getUTCMilliseconds();
        }
        //endregion
    };
    //**********************************************************************************
    /**
     * Function converting ASN.1 internal class into JavaScript string
     * @returns {string}
     */
    GeneralizedTime.prototype.toString = function () {
        var outputArray = [];
        outputArray.push(padNumber(this.year, 4));
        outputArray.push(padNumber(this.month, 2));
        outputArray.push(padNumber(this.day, 2));
        outputArray.push(padNumber(this.hour, 2));
        outputArray.push(padNumber(this.minute, 2));
        outputArray.push(padNumber(this.second, 2));
        if (this.millisecond !== 0) {
            outputArray.push(".");
            outputArray.push(padNumber(this.millisecond, 3));
        }
        outputArray.push("Z");
        return outputArray.join("");
    };
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    GeneralizedTime.blockName = function () {
        return "GeneralizedTime";
    };
    //**********************************************************************************
    /**
     * Convertion for the block to JSON object
     * @returns {Object}
     */
    GeneralizedTime.prototype.toJSON = function () {
        var object = {};
        //region Seems at the moment (Sep 2016) there is no way how to check method is supported in "super" object
        try {
            object = _super.prototype.toJSON.call(this);
        }
        catch (ex) { }
        //endregion
        object.year = this.year;
        object.month = this.month;
        object.day = this.day;
        object.hour = this.hour;
        object.minute = this.minute;
        object.second = this.second;
        object.millisecond = this.millisecond;
        return object;
    };
    return GeneralizedTime;
}(VisibleString));
//**************************************************************************************
/**
 * @extends Utf8String
 */
var DATE = /** @class */ (function (_super) {
    __extends(DATE, _super);
    //**********************************************************************************
    /**
     * Constructor for "DATE" class
     * @param {Object} [parameters={}]
     */
    function DATE(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 31; // DATE
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    DATE.blockName = function () {
        return "DATE";
    };
    return DATE;
}(Utf8String));
//**************************************************************************************
/**
 * @extends Utf8String
 */
var TimeOfDay = /** @class */ (function (_super) {
    __extends(TimeOfDay, _super);
    //**********************************************************************************
    /**
     * Constructor for "TimeOfDay" class
     * @param {Object} [parameters={}]
     */
    function TimeOfDay(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 32; // TimeOfDay
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    TimeOfDay.blockName = function () {
        return "TimeOfDay";
    };
    return TimeOfDay;
}(Utf8String));
//**************************************************************************************
/**
 * @extends Utf8String
 */
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    //**********************************************************************************
    /**
     * Constructor for "DateTime" class
     * @param {Object} [parameters={}]
     */
    function DateTime(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 33; // DateTime
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    DateTime.blockName = function () {
        return "DateTime";
    };
    return DateTime;
}(Utf8String));
//**************************************************************************************
/**
 * @extends Utf8String
 */
var Duration = /** @class */ (function (_super) {
    __extends(Duration, _super);
    //**********************************************************************************
    /**
     * Constructor for "Duration" class
     * @param {Object} [parameters={}]
     */
    function Duration(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 34; // Duration
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    Duration.blockName = function () {
        return "Duration";
    };
    return Duration;
}(Utf8String));
//**************************************************************************************
/**
 * @extends Utf8String
 */
var TIME = /** @class */ (function (_super) {
    __extends(TIME, _super);
    //**********************************************************************************
    /**
     * Constructor for "Time" class
     * @param {Object} [parameters={}]
     */
    function TIME(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this, parameters) || this;
        _this.idBlock.tagClass = 1; // UNIVERSAL
        _this.idBlock.tagNumber = 14; // Time
        return _this;
    }
    //**********************************************************************************
    /**
     * Aux function, need to get a block name. Need to have it here for inhiritence
     * @returns {string}
     */
    TIME.blockName = function () {
        return "TIME";
    };
    return TIME;
}(Utf8String));
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Choice
//**************************************************************************************
var Choice = /** @class */ (function () {
    //**********************************************************************************
    /**
     * Constructor for "Choice" class
     * @param {Object} [parameters={}]
     * @property {Array} [value] Array of ASN.1 types for make a choice from
     * @property {boolean} [optional]
     */
    function Choice(parameters) {
        if (parameters === void 0) { parameters = {}; }
        this.value = getParametersValue(parameters, "value", []);
        this.optional = getParametersValue(parameters, "optional", false);
    }
    return Choice;
}());
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Any
//**************************************************************************************
var Any = /** @class */ (function () {
    //**********************************************************************************
    /**
     * Constructor for "Any" class
     * @param {Object} [parameters={}]
     * @property {string} [name]
     * @property {boolean} [optional]
     */
    function Any(parameters) {
        if (parameters === void 0) { parameters = {}; }
        this.name = getParametersValue(parameters, "name", "");
        this.optional = getParametersValue(parameters, "optional", false);
    }
    return Any;
}());
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type Repeated
//**************************************************************************************
var Repeated = /** @class */ (function () {
    //**********************************************************************************
    /**
     * Constructor for "Repeated" class
     * @param {Object} [parameters={}]
     * @property {string} [name]
     * @property {boolean} [optional]
     */
    function Repeated(parameters) {
        if (parameters === void 0) { parameters = {}; }
        this.name = getParametersValue(parameters, "name", "");
        this.optional = getParametersValue(parameters, "optional", false);
        this.value = getParametersValue(parameters, "value", new Any());
        this.local = getParametersValue(parameters, "local", false); // Could local or global array to store elements
    }
    return Repeated;
}());
//**************************************************************************************
//endregion
//**************************************************************************************
//region Declaration of special ASN.1 schema type RawData
//**************************************************************************************
/**
 * @description Special class providing ability to have "toBER/fromBER" for raw ArrayBuffer
 */
var RawData = /** @class */ (function () {
    //**********************************************************************************
    /**
     * Constructor for "Repeated" class
     * @param {Object} [parameters={}]
     * @property {string} [name]
     * @property {boolean} [optional]
     */
    function RawData(parameters) {
        if (parameters === void 0) { parameters = {}; }
        this.data = getParametersValue(parameters, "data", new ArrayBuffer(0));
    }
    //**********************************************************************************
    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     */
    RawData.prototype.fromBER = function (inputBuffer, inputOffset, inputLength) {
        this.data = inputBuffer.slice(inputOffset, inputLength);
        return (inputOffset + inputLength);
    };
    //**********************************************************************************
    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
     * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    RawData.prototype.toBER = function (sizeOnly) {
        if (sizeOnly === void 0) { sizeOnly = false; }
        return this.data;
    };
    return RawData;
}());
//**************************************************************************************
//endregion
//**************************************************************************************
//region Major ASN.1 BER decoding function
//**************************************************************************************
/**
 * Internal library function for decoding ASN.1 BER
 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @param {!number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
 * @param {!number} inputLength Maximum length of array of bytes which can be using in this function
 * @returns {{offset: number, result: Object}}
 */
function LocalFromBER(inputBuffer, inputOffset, inputLength) {
    var incomingOffset = inputOffset; // Need to store initial offset since "inputOffset" is changing in the function
    //region Local function changing a type for ASN.1 classes
    function localChangeType(inputObject, newType) {
        if (inputObject instanceof newType)
            return inputObject;
        var newObject = new newType();
        newObject.idBlock = inputObject.idBlock;
        newObject.lenBlock = inputObject.lenBlock;
        newObject.warnings = inputObject.warnings;
        //noinspection JSCheckFunctionSignatures
        newObject.valueBeforeDecode = inputObject.valueBeforeDecode.slice(0);
        return newObject;
    }
    //endregion
    //region Create a basic ASN.1 type since we need to return errors and warnings from the function
    var returnObject = new BaseBlock({}, Object);
    //endregion
    //region Basic check for parameters
    var baseBlock = new LocalBaseBlock();
    if (checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) === false) {
        returnObject.error = baseBlock.error;
        return {
            offset: (-1),
            result: returnObject
        };
    }
    //endregion
    //region Getting Uint8Array from ArrayBuffer
    var intBuffer = new Uint8Array(inputBuffer, inputOffset, inputLength);
    //endregion
    //region Initial checks
    if (intBuffer.length === 0) {
        returnObject.error = "Zero buffer length";
        return {
            offset: (-1),
            result: returnObject
        };
    }
    //endregion
    //region Decode indentifcation block of ASN.1 BER structure
    var resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
    returnObject.warnings.concat(returnObject.idBlock.warnings);
    if (resultOffset === (-1)) {
        returnObject.error = returnObject.idBlock.error;
        return {
            offset: (-1),
            result: returnObject
        };
    }
    inputOffset = resultOffset;
    inputLength -= returnObject.idBlock.blockLength;
    //endregion
    //region Decode length block of ASN.1 BER structure
    resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
    returnObject.warnings.concat(returnObject.lenBlock.warnings);
    if (resultOffset === (-1)) {
        returnObject.error = returnObject.lenBlock.error;
        return {
            offset: (-1),
            result: returnObject
        };
    }
    inputOffset = resultOffset;
    inputLength -= returnObject.lenBlock.blockLength;
    //endregion
    //region Check for usign indefinite length form in encoding for primitive types
    if ((returnObject.idBlock.isConstructed === false) &&
        (returnObject.lenBlock.isIndefiniteForm === true)) {
        returnObject.error = "Indefinite length form used for primitive encoding form";
        return {
            offset: (-1),
            result: returnObject
        };
    }
    //endregion
    //region Switch ASN.1 block type
    var newASN1Type = BaseBlock;
    switch (returnObject.idBlock.tagClass) {
        //region UNIVERSAL
        case 1:
            //region Check for reserved tag numbers
            if ((returnObject.idBlock.tagNumber >= 37) &&
                (returnObject.idBlock.isHexOnly === false)) {
                returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
                return {
                    offset: (-1),
                    result: returnObject
                };
            }
            //endregion
            switch (returnObject.idBlock.tagNumber) {
                //region EndOfContent type
                case 0:
                    //region Check for EndOfContent type
                    if ((returnObject.idBlock.isConstructed === true) &&
                        (returnObject.lenBlock.length > 0)) {
                        returnObject.error = "Type [UNIVERSAL 0] is reserved";
                        return {
                            offset: (-1),
                            result: returnObject
                        };
                    }
                    //endregion
                    newASN1Type = EndOfContent;
                    break;
                //endregion
                //region Boolean type
                case 1:
                    newASN1Type = Boolean;
                    break;
                //endregion
                //region Integer type
                case 2:
                    newASN1Type = Integer;
                    break;
                //endregion
                //region BitString type
                case 3:
                    newASN1Type = BitString;
                    break;
                //endregion
                //region OctetString type
                case 4:
                    newASN1Type = OctetString;
                    break;
                //endregion
                //region Null type
                case 5:
                    newASN1Type = Null;
                    break;
                //endregion
                //region OBJECT IDENTIFIER type
                case 6:
                    newASN1Type = ObjectIdentifier;
                    break;
                //endregion
                //region Enumerated type
                case 10:
                    newASN1Type = Enumerated;
                    break;
                //endregion
                //region Utf8String type
                case 12:
                    newASN1Type = Utf8String;
                    break;
                //endregion
                //region Time type
                //region RELATIVE OBJECT IDENTIFIER type
                case 13:
                    newASN1Type = RelativeObjectIdentifier;
                    break;
                //endregion
                case 14:
                    newASN1Type = TIME;
                    break;
                //endregion
                //region ASN.1 reserved type
                case 15:
                    returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
                    return {
                        offset: (-1),
                        result: returnObject
                    };
                //endregion
                //region Sequence type
                case 16:
                    newASN1Type = Sequence;
                    break;
                //endregion
                //region Set type
                case 17:
                    newASN1Type = Set;
                    break;
                //endregion
                //region NumericString type
                case 18:
                    newASN1Type = NumericString;
                    break;
                //endregion
                //region PrintableString type
                case 19:
                    newASN1Type = PrintableString;
                    break;
                //endregion
                //region TeletexString type
                case 20:
                    newASN1Type = TeletexString;
                    break;
                //endregion
                //region VideotexString type
                case 21:
                    newASN1Type = VideotexString;
                    break;
                //endregion
                //region IA5String type
                case 22:
                    newASN1Type = IA5String;
                    break;
                //endregion
                //region UTCTime type
                case 23:
                    newASN1Type = UTCTime;
                    break;
                //endregion
                //region GeneralizedTime type
                case 24:
                    newASN1Type = GeneralizedTime;
                    break;
                //endregion
                //region GraphicString type
                case 25:
                    newASN1Type = GraphicString;
                    break;
                //endregion
                //region VisibleString type
                case 26:
                    newASN1Type = VisibleString;
                    break;
                //endregion
                //region GeneralString type
                case 27:
                    newASN1Type = GeneralString;
                    break;
                //endregion
                //region UniversalString type
                case 28:
                    newASN1Type = UniversalString;
                    break;
                //endregion
                //region CharacterString type
                case 29:
                    newASN1Type = CharacterString;
                    break;
                //endregion
                //region BmpString type
                case 30:
                    newASN1Type = BmpString;
                    break;
                //endregion
                //region DATE type
                case 31:
                    newASN1Type = DATE;
                    break;
                //endregion
                //region TimeOfDay type
                case 32:
                    newASN1Type = TimeOfDay;
                    break;
                //endregion
                //region Date-Time type
                case 33:
                    newASN1Type = DateTime;
                    break;
                //endregion
                //region Duration type
                case 34:
                    newASN1Type = Duration;
                    break;
                //endregion
                //region default
                default:
                    {
                        var newObject = void 0;
                        if (returnObject.idBlock.isConstructed === true)
                            newObject = new Constructed();
                        else
                            newObject = new Primitive();
                        newObject.idBlock = returnObject.idBlock;
                        newObject.lenBlock = returnObject.lenBlock;
                        newObject.warnings = returnObject.warnings;
                        returnObject = newObject;
                    }
                //endregion
            }
            break;
        //endregion
        //region All other tag classes
        case 2: // APPLICATION
        case 3: // CONTEXT-SPECIFIC
        case 4: // PRIVATE
        default:
            {
                if (returnObject.idBlock.isConstructed === true)
                    newASN1Type = Constructed;
                else
                    newASN1Type = Primitive;
            }
        //endregion
    }
    //endregion
    //region Change type and perform BER decoding
    returnObject = localChangeType(returnObject, newASN1Type);
    resultOffset = returnObject.fromBER(inputBuffer, inputOffset, (returnObject.lenBlock.isIndefiniteForm === true) ? inputLength : returnObject.lenBlock.length);
    //endregion
    //region Coping incoming buffer for entire ASN.1 block
    returnObject.valueBeforeDecode = inputBuffer.slice(incomingOffset, incomingOffset + returnObject.blockLength);
    //endregion
    return {
        offset: resultOffset,
        result: returnObject
    };
}
//**************************************************************************************
/**
 * Major function for decoding ASN.1 BER array into internal library structuries
 * @param {!ArrayBuffer} inputBuffer ASN.1 BER encoded array of bytes
 */
function fromBER(inputBuffer) {
    if (inputBuffer.byteLength === 0) {
        var result = new BaseBlock({}, Object);
        result.error = "Input buffer has zero length";
        return {
            offset: (-1),
            result: result
        };
    }
    return LocalFromBER(inputBuffer, 0, inputBuffer.byteLength);
}
//**************************************************************************************
//endregion
//**************************************************************************************
//region Major scheme verification function
//**************************************************************************************
/**
 * Compare of two ASN.1 object trees
 * @param {!Object} root Root of input ASN.1 object tree
 * @param {!Object} inputData Input ASN.1 object tree
 * @param {!Object} inputSchema Input ASN.1 schema to compare with
 * @return {{verified: boolean}|{verified:boolean, result: Object}}
 */
function compareSchema(root, inputData, inputSchema) {
    //region Special case for Choice schema element type
    if (inputSchema instanceof Choice) {
        for (var j = 0; j < inputSchema.value.length; j++) {
            var result = compareSchema(root, inputData, inputSchema.value[j]);
            if (result.verified === true) {
                return {
                    verified: true,
                    result: root
                };
            }
        }
        {
            var _result = {
                verified: false,
                result: {
                    error: "Wrong values for Choice type"
                }
            };
            if (inputSchema.hasOwnProperty("name"))
                _result.name = inputSchema.name;
            return _result;
        }
    }
    //endregion
    //region Special case for Any schema element type
    if (inputSchema instanceof Any) {
        //region Add named component of ASN.1 schema
        if (inputSchema.hasOwnProperty("name"))
            root[inputSchema.name] = inputData;
        //endregion
        return {
            verified: true,
            result: root
        };
    }
    //endregion
    //region Initial check
    if ((root instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong root object" }
        };
    }
    if ((inputData instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 data" }
        };
    }
    if ((inputSchema instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    if (("idBlock" in inputSchema) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    //endregion
    //region Comparing idBlock properties in ASN.1 data and ASN.1 schema
    //region Encode and decode ASN.1 schema idBlock
    /// <remarks>This encoding/decoding is neccessary because could be an errors in schema definition</remarks>
    if (("fromBER" in inputSchema.idBlock) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    if (("toBER" in inputSchema.idBlock) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    var encodedId = inputSchema.idBlock.toBER(false);
    if (encodedId.byteLength === 0) {
        return {
            verified: false,
            result: { error: "Error encoding idBlock for ASN.1 schema" }
        };
    }
    var decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);
    if (decodedOffset === (-1)) {
        return {
            verified: false,
            result: { error: "Error decoding idBlock for ASN.1 schema" }
        };
    }
    //endregion
    //region tagClass
    if (inputSchema.idBlock.hasOwnProperty("tagClass") === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
        return {
            verified: false,
            result: root
        };
    }
    //endregion
    //region tagNumber
    if (inputSchema.idBlock.hasOwnProperty("tagNumber") === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
        return {
            verified: false,
            result: root
        };
    }
    //endregion
    //region isConstructed
    if (inputSchema.idBlock.hasOwnProperty("isConstructed") === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
        return {
            verified: false,
            result: root
        };
    }
    //endregion
    //region isHexOnly
    if (("isHexOnly" in inputSchema.idBlock) === false) // Since 'isHexOnly' is an inhirited property
     {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" }
        };
    }
    if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
        return {
            verified: false,
            result: root
        };
    }
    //endregion
    //region valueHex
    if (inputSchema.idBlock.isHexOnly === true) {
        if (("valueHex" in inputSchema.idBlock) === false) // Since 'valueHex' is an inhirited property
         {
            return {
                verified: false,
                result: { error: "Wrong ASN.1 schema" }
            };
        }
        var schemaView = new Uint8Array(inputSchema.idBlock.valueHex);
        var asn1View = new Uint8Array(inputData.idBlock.valueHex);
        if (schemaView.length !== asn1View.length) {
            return {
                verified: false,
                result: root
            };
        }
        for (var i = 0; i < schemaView.length; i++) {
            if (schemaView[i] !== asn1View[1]) {
                return {
                    verified: false,
                    result: root
                };
            }
        }
    }
    //endregion
    //endregion
    //region Add named component of ASN.1 schema
    if (inputSchema.hasOwnProperty("name")) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
        if (inputSchema.name !== "")
            root[inputSchema.name] = inputData;
    }
    //endregion
    //region Getting next ASN.1 block for comparition
    if (inputSchema.idBlock.isConstructed === true) {
        var admission = 0;
        var result = { verified: false };
        var maxLength = inputSchema.valueBlock.value.length;
        if (maxLength > 0) {
            if (inputSchema.valueBlock.value[0] instanceof Repeated)
                maxLength = inputData.valueBlock.value.length;
        }
        //region Special case when constructive value has no elements
        if (maxLength === 0) {
            return {
                verified: true,
                result: root
            };
        }
        //endregion
        //region Special case when "inputData" has no values and "inputSchema" has all optional values
        if ((inputData.valueBlock.value.length === 0) &&
            (inputSchema.valueBlock.value.length !== 0)) {
            var _optional = true;
            for (var i = 0; i < inputSchema.valueBlock.value.length; i++)
                _optional = _optional && (inputSchema.valueBlock.value[i].optional || false);
            if (_optional === true) {
                return {
                    verified: true,
                    result: root
                };
            }
            //region Delete early added name of block
            if (inputSchema.hasOwnProperty("name")) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                if (inputSchema.name !== "")
                    delete root[inputSchema.name];
            }
            //endregion
            root.error = "Inconsistent object length";
            return {
                verified: false,
                result: root
            };
        }
        //endregion
        for (var i = 0; i < maxLength; i++) {
            //region Special case when there is an "optional" element of ASN.1 schema at the end
            if ((i - admission) >= inputData.valueBlock.value.length) {
                if (inputSchema.valueBlock.value[i].optional === false) {
                    var _result = {
                        verified: false,
                        result: root
                    };
                    root.error = "Inconsistent length between ASN.1 data and schema";
                    //region Delete early added name of block
                    if (inputSchema.hasOwnProperty("name")) {
                        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                        if (inputSchema.name !== "") {
                            delete root[inputSchema.name];
                            _result.name = inputSchema.name;
                        }
                    }
                    //endregion
                    return _result;
                }
            }
            //endregion
            else {
                //region Special case for Repeated type of ASN.1 schema element
                if (inputSchema.valueBlock.value[0] instanceof Repeated) {
                    result = compareSchema(root, inputData.valueBlock.value[i], inputSchema.valueBlock.value[0].value);
                    if (result.verified === false) {
                        if (inputSchema.valueBlock.value[0].optional === true)
                            admission++;
                        else {
                            //region Delete early added name of block
                            if (inputSchema.hasOwnProperty("name")) {
                                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                                if (inputSchema.name !== "")
                                    delete root[inputSchema.name];
                            }
                            //endregion
                            return result;
                        }
                    }
                    if (("name" in inputSchema.valueBlock.value[0]) && (inputSchema.valueBlock.value[0].name.length > 0)) {
                        var arrayRoot = {};
                        if (("local" in inputSchema.valueBlock.value[0]) && (inputSchema.valueBlock.value[0].local === true))
                            arrayRoot = inputData;
                        else
                            arrayRoot = root;
                        if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined")
                            arrayRoot[inputSchema.valueBlock.value[0].name] = [];
                        arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[i]);
                    }
                }
                //endregion
                else {
                    result = compareSchema(root, inputData.valueBlock.value[i - admission], inputSchema.valueBlock.value[i]);
                    if (result.verified === false) {
                        if (inputSchema.valueBlock.value[i].optional === true)
                            admission++;
                        else {
                            //region Delete early added name of block
                            if (inputSchema.hasOwnProperty("name")) {
                                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                                if (inputSchema.name !== "")
                                    delete root[inputSchema.name];
                            }
                            //endregion
                            return result;
                        }
                    }
                }
            }
        }
        if (result.verified === false) // The situation may take place if last element is "optional" and verification failed
         {
            var _result = {
                verified: false,
                result: root
            };
            //region Delete early added name of block
            if (inputSchema.hasOwnProperty("name")) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                if (inputSchema.name !== "") {
                    delete root[inputSchema.name];
                    _result.name = inputSchema.name;
                }
            }
            //endregion
            return _result;
        }
        return {
            verified: true,
            result: root
        };
    }
    //endregion
    //region Ability to parse internal value for primitive-encoded value (value of OctetString, for example)
    if (("primitiveSchema" in inputSchema) &&
        ("valueHex" in inputData.valueBlock)) {
        //region Decoding of raw ASN.1 data
        var asn1_1 = fromBER(inputData.valueBlock.valueHex);
        if (asn1_1.offset === (-1)) {
            var _result = {
                verified: false,
                result: asn1_1.result
            };
            //region Delete early added name of block
            if (inputSchema.hasOwnProperty("name")) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, "");
                if (inputSchema.name !== "") {
                    delete root[inputSchema.name];
                    _result.name = inputSchema.name;
                }
            }
            //endregion
            return _result;
        }
        //endregion
        return compareSchema(root, asn1_1.result, inputSchema.primitiveSchema);
    }
    return {
        verified: true,
        result: root
    };
    //endregion
}
//**************************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
 * ASN.1 schema verification for ArrayBuffer data
 * @param {!ArrayBuffer} inputBuffer Input BER-encoded ASN.1 data
 * @param {!Object} inputSchema Input ASN.1 schema to verify against to
 * @return {{verified: boolean}|{verified:boolean, result: Object}}
 */
function verifySchema(inputBuffer, inputSchema) {
    //region Initial check
    if ((inputSchema instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema type" }
        };
    }
    //endregion
    //region Decoding of raw ASN.1 data
    var asn1 = fromBER(inputBuffer);
    if (asn1.offset === (-1)) {
        return {
            verified: false,
            result: asn1.result
        };
    }
    //endregion
    //region Compare ASN.1 struct with input schema
    return compareSchema(asn1.result, asn1.result, inputSchema);
    //endregion
}
//**************************************************************************************
//endregion
//**************************************************************************************
//region Major function converting JSON to ASN.1 objects
//**************************************************************************************
//noinspection JSUnusedGlobalSymbols
/**
 * Converting from JSON to ASN.1 objects
 * @param {string|Object} json JSON string or object to convert to ASN.1 objects
 */
function fromJSON(json) {
    // TODO Implement
}
//**************************************************************************************
//endregion
//**************************************************************************************
var asn1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    HexBlock: HexBlock,
    ValueBlock: ValueBlock,
    BaseBlock: BaseBlock,
    Primitive: Primitive,
    Constructed: Constructed,
    EndOfContent: EndOfContent,
    Boolean: Boolean,
    Sequence: Sequence,
    Set: Set,
    Null: Null,
    OctetString: OctetString,
    BitString: BitString,
    Integer: Integer,
    Enumerated: Enumerated,
    ObjectIdentifier: ObjectIdentifier,
    Utf8String: Utf8String,
    RelativeObjectIdentifier: RelativeObjectIdentifier,
    BmpString: BmpString,
    UniversalString: UniversalString,
    NumericString: NumericString,
    PrintableString: PrintableString,
    TeletexString: TeletexString,
    VideotexString: VideotexString,
    IA5String: IA5String,
    GraphicString: GraphicString,
    VisibleString: VisibleString,
    GeneralString: GeneralString,
    CharacterString: CharacterString,
    UTCTime: UTCTime,
    GeneralizedTime: GeneralizedTime,
    DATE: DATE,
    TimeOfDay: TimeOfDay,
    DateTime: DateTime,
    Duration: Duration,
    TIME: TIME,
    Choice: Choice,
    Any: Any,
    Repeated: Repeated,
    RawData: RawData,
    fromBER: fromBER,
    compareSchema: compareSchema,
    verifySchema: verifySchema,
    fromJSON: fromJSON
});
var AsnTypeTypes;
(function (AsnTypeTypes) {
    AsnTypeTypes[AsnTypeTypes["Sequence"] = 0] = "Sequence";
    AsnTypeTypes[AsnTypeTypes["Set"] = 1] = "Set";
    AsnTypeTypes[AsnTypeTypes["Choice"] = 2] = "Choice";
})(AsnTypeTypes || (AsnTypeTypes = {}));
var AsnPropTypes;
(function (AsnPropTypes) {
    AsnPropTypes[AsnPropTypes["Any"] = 1] = "Any";
    AsnPropTypes[AsnPropTypes["Boolean"] = 2] = "Boolean";
    AsnPropTypes[AsnPropTypes["OctetString"] = 3] = "OctetString";
    AsnPropTypes[AsnPropTypes["BitString"] = 4] = "BitString";
    AsnPropTypes[AsnPropTypes["Integer"] = 5] = "Integer";
    AsnPropTypes[AsnPropTypes["Enumerated"] = 6] = "Enumerated";
    AsnPropTypes[AsnPropTypes["ObjectIdentifier"] = 7] = "ObjectIdentifier";
    AsnPropTypes[AsnPropTypes["Utf8String"] = 8] = "Utf8String";
    AsnPropTypes[AsnPropTypes["BmpString"] = 9] = "BmpString";
    AsnPropTypes[AsnPropTypes["UniversalString"] = 10] = "UniversalString";
    AsnPropTypes[AsnPropTypes["NumericString"] = 11] = "NumericString";
    AsnPropTypes[AsnPropTypes["PrintableString"] = 12] = "PrintableString";
    AsnPropTypes[AsnPropTypes["TeletexString"] = 13] = "TeletexString";
    AsnPropTypes[AsnPropTypes["VideotexString"] = 14] = "VideotexString";
    AsnPropTypes[AsnPropTypes["IA5String"] = 15] = "IA5String";
    AsnPropTypes[AsnPropTypes["GraphicString"] = 16] = "GraphicString";
    AsnPropTypes[AsnPropTypes["VisibleString"] = 17] = "VisibleString";
    AsnPropTypes[AsnPropTypes["GeneralString"] = 18] = "GeneralString";
    AsnPropTypes[AsnPropTypes["CharacterString"] = 19] = "CharacterString";
    AsnPropTypes[AsnPropTypes["UTCTime"] = 20] = "UTCTime";
    AsnPropTypes[AsnPropTypes["GeneralizedTime"] = 21] = "GeneralizedTime";
    AsnPropTypes[AsnPropTypes["DATE"] = 22] = "DATE";
    AsnPropTypes[AsnPropTypes["TimeOfDay"] = 23] = "TimeOfDay";
    AsnPropTypes[AsnPropTypes["DateTime"] = 24] = "DateTime";
    AsnPropTypes[AsnPropTypes["Duration"] = 25] = "Duration";
    AsnPropTypes[AsnPropTypes["TIME"] = 26] = "TIME";
    AsnPropTypes[AsnPropTypes["Null"] = 27] = "Null";
})(AsnPropTypes || (AsnPropTypes = {}));
var AsnAnyConverter = {
    fromASN: function (value) { return value instanceof Null ? null : value.valueBeforeDecode; },
    toASN: function (value) {
        if (value === null) {
            return new Null();
        }
        var schema = fromBER(value);
        if (schema.result.error) {
            throw new Error(schema.result.error);
        }
        return schema.result;
    },
};
var AsnIntegerConverter = {
    fromASN: function (value) { return value.valueBlock.valueHex.byteLength > 4
        ? value.valueBlock.toString()
        : value.valueBlock.valueDec; },
    toASN: function (value) { return new Integer({ value: value }); },
};
var AsnEnumeratedConverter = {
    fromASN: function (value) { return value.valueBlock.valueDec; },
    toASN: function (value) { return new Enumerated({ value: value }); },
};
var AsnIntegerArrayBufferConverter = {
    fromASN: function (value) { return value.valueBlock.valueHex; },
    toASN: function (value) { return new Integer({ valueHex: value }); },
};
var AsnBitStringConverter = {
    fromASN: function (value) { return value.valueBlock.valueHex; },
    toASN: function (value) { return new BitString({ valueHex: value }); },
};
var AsnObjectIdentifierConverter = {
    fromASN: function (value) { return value.valueBlock.toString(); },
    toASN: function (value) { return new ObjectIdentifier({ value: value }); },
};
var AsnBooleanConverter = {
    fromASN: function (value) { return value.valueBlock.value; },
    toASN: function (value) { return new Boolean({ value: value }); },
};
var AsnOctetStringConverter = {
    fromASN: function (value) { return value.valueBlock.valueHex; },
    toASN: function (value) { return new OctetString({ valueHex: value }); },
};
function createStringConverter(Asn1Type) {
    return {
        fromASN: function (value) { return value.valueBlock.value; },
        toASN: function (value) { return new Asn1Type({ value: value }); },
    };
}
var AsnUtf8StringConverter = createStringConverter(Utf8String);
var AsnBmpStringConverter = createStringConverter(BmpString);
var AsnUniversalStringConverter = createStringConverter(UniversalString);
var AsnNumericStringConverter = createStringConverter(NumericString);
var AsnPrintableStringConverter = createStringConverter(PrintableString);
var AsnTeletexStringConverter = createStringConverter(TeletexString);
var AsnVideotexStringConverter = createStringConverter(VideotexString);
var AsnIA5StringConverter = createStringConverter(IA5String);
var AsnGraphicStringConverter = createStringConverter(GraphicString);
var AsnVisibleStringConverter = createStringConverter(VisibleString);
var AsnGeneralStringConverter = createStringConverter(GeneralString);
var AsnCharacterStringConverter = createStringConverter(CharacterString);
var AsnUTCTimeConverter = {
    fromASN: function (value) { return value.toDate(); },
    toASN: function (value) { return new UTCTime({ valueDate: value }); },
};
var AsnGeneralizedTimeConverter = {
    fromASN: function (value) { return value.toDate(); },
    toASN: function (value) { return new GeneralizedTime({ valueDate: value }); },
};
var AsnNullConverter = {
    fromASN: function (value) { return null; },
    toASN: function (value) {
        return new Null();
    },
};
function defaultConverter(type) {
    switch (type) {
        case AsnPropTypes.Any:
            return AsnAnyConverter;
        case AsnPropTypes.BitString:
            return AsnBitStringConverter;
        case AsnPropTypes.BmpString:
            return AsnBmpStringConverter;
        case AsnPropTypes.Boolean:
            return AsnBooleanConverter;
        case AsnPropTypes.CharacterString:
            return AsnCharacterStringConverter;
        case AsnPropTypes.Enumerated:
            return AsnEnumeratedConverter;
        case AsnPropTypes.GeneralString:
            return AsnGeneralStringConverter;
        case AsnPropTypes.GeneralizedTime:
            return AsnGeneralizedTimeConverter;
        case AsnPropTypes.GraphicString:
            return AsnGraphicStringConverter;
        case AsnPropTypes.IA5String:
            return AsnIA5StringConverter;
        case AsnPropTypes.Integer:
            return AsnIntegerConverter;
        case AsnPropTypes.Null:
            return AsnNullConverter;
        case AsnPropTypes.NumericString:
            return AsnNumericStringConverter;
        case AsnPropTypes.ObjectIdentifier:
            return AsnObjectIdentifierConverter;
        case AsnPropTypes.OctetString:
            return AsnOctetStringConverter;
        case AsnPropTypes.PrintableString:
            return AsnPrintableStringConverter;
        case AsnPropTypes.TeletexString:
            return AsnTeletexStringConverter;
        case AsnPropTypes.UTCTime:
            return AsnUTCTimeConverter;
        case AsnPropTypes.UniversalString:
            return AsnUniversalStringConverter;
        case AsnPropTypes.Utf8String:
            return AsnUtf8StringConverter;
        case AsnPropTypes.VideotexString:
            return AsnVideotexStringConverter;
        case AsnPropTypes.VisibleString:
            return AsnVisibleStringConverter;
        default:
            return null;
    }
}
var build = createCommonjsModule(function (module, exports) {
    /**
     * Copyright (c) 2020, Peculiar Ventures, All rights reserved.
     */
    (function (global, factory) {
        factory(exports);
    }(commonjsGlobal, (function (exports) {
        var BufferSourceConverter = /** @class */ (function () {
            function BufferSourceConverter() {
            }
            BufferSourceConverter.isArrayBuffer = function (data) {
                return Object.prototype.toString.call(data) === '[object ArrayBuffer]';
            };
            BufferSourceConverter.toArrayBuffer = function (data) {
                var buf = this.toUint8Array(data);
                if (buf.byteOffset || buf.length) {
                    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
                }
                return buf.buffer;
            };
            BufferSourceConverter.toUint8Array = function (data) {
                return this.toView(data, Uint8Array);
            };
            BufferSourceConverter.toView = function (data, type) {
                if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
                    return new type(data.buffer, data.byteOffset, data.byteLength);
                }
                if (this.isArrayBuffer(data)) {
                    return new type(data);
                }
                if (this.isArrayBufferView(data)) {
                    return new type(data.buffer, data.byteOffset, data.byteLength);
                }
                throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
            };
            BufferSourceConverter.isBufferSource = function (data) {
                return this.isArrayBufferView(data)
                    || this.isArrayBuffer(data);
            };
            BufferSourceConverter.isArrayBufferView = function (data) {
                return ArrayBuffer.isView(data)
                    || (data && this.isArrayBuffer(data.buffer));
            };
            return BufferSourceConverter;
        }());
        var Convert = /** @class */ (function () {
            function Convert() {
            }
            Convert.isHex = function (data) {
                return typeof data === "string"
                    && /^[a-z0-9]+$/i.test(data);
            };
            Convert.isBase64 = function (data) {
                return typeof data === "string"
                    && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(data);
            };
            Convert.isBase64Url = function (data) {
                return typeof data === "string"
                    && /^[a-zA-Z0-9-_]+$/i.test(data);
            };
            Convert.ToString = function (buffer, enc) {
                if (enc === void 0) { enc = "utf8"; }
                var buf = BufferSourceConverter.toUint8Array(buffer);
                switch (enc.toLowerCase()) {
                    case "utf8":
                        return this.ToUtf8String(buf);
                    case "binary":
                        return this.ToBinary(buf);
                    case "hex":
                        return this.ToHex(buf);
                    case "base64":
                        return this.ToBase64(buf);
                    case "base64url":
                        return this.ToBase64Url(buf);
                    default:
                        throw new Error("Unknown type of encoding '" + enc + "'");
                }
            };
            Convert.FromString = function (str, enc) {
                if (enc === void 0) { enc = "utf8"; }
                if (!str) {
                    return new ArrayBuffer(0);
                }
                switch (enc.toLowerCase()) {
                    case "utf8":
                        return this.FromUtf8String(str);
                    case "binary":
                        return this.FromBinary(str);
                    case "hex":
                        return this.FromHex(str);
                    case "base64":
                        return this.FromBase64(str);
                    case "base64url":
                        return this.FromBase64Url(str);
                    default:
                        throw new Error("Unknown type of encoding '" + enc + "'");
                }
            };
            Convert.ToBase64 = function (buffer) {
                var buf = BufferSourceConverter.toUint8Array(buffer);
                if (typeof btoa !== "undefined") {
                    var binary = this.ToString(buf, "binary");
                    return btoa(binary);
                }
                else {
                    return Buffer.from(buf).toString("base64");
                }
            };
            Convert.FromBase64 = function (base64) {
                var formatted = this.formatString(base64);
                if (!formatted) {
                    return new ArrayBuffer(0);
                }
                if (!Convert.isBase64(formatted)) {
                    throw new TypeError("Argument 'base64Text' is not Base64 encoded");
                }
                if (typeof atob !== "undefined") {
                    return this.FromBinary(atob(formatted));
                }
                else {
                    return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
                }
            };
            Convert.FromBase64Url = function (base64url) {
                var formatted = this.formatString(base64url);
                if (!formatted) {
                    return new ArrayBuffer(0);
                }
                if (!Convert.isBase64Url(formatted)) {
                    throw new TypeError("Argument 'base64url' is not Base64Url encoded");
                }
                return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
            };
            Convert.ToBase64Url = function (data) {
                return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
            };
            Convert.FromUtf8String = function (text) {
                var s = unescape(encodeURIComponent(text));
                var uintArray = new Uint8Array(s.length);
                for (var i = 0; i < s.length; i++) {
                    uintArray[i] = s.charCodeAt(i);
                }
                return uintArray.buffer;
            };
            Convert.ToUtf8String = function (buffer) {
                var buf = BufferSourceConverter.toUint8Array(buffer);
                var encodedString = "";
                for (var i = 0; i < buf.length; i++) {
                    encodedString += String.fromCharCode(buf[i]);
                }
                var decodedString = decodeURIComponent(escape(encodedString));
                return decodedString;
            };
            Convert.FromBinary = function (text) {
                var stringLength = text.length;
                var resultView = new Uint8Array(stringLength);
                for (var i = 0; i < stringLength; i++) {
                    resultView[i] = text.charCodeAt(i);
                }
                return resultView.buffer;
            };
            Convert.ToBinary = function (buffer) {
                var buf = BufferSourceConverter.toUint8Array(buffer);
                var res = "";
                for (var i = 0; i < buf.length; i++) {
                    res += String.fromCharCode(buf[i]);
                }
                return res;
            };
            Convert.ToHex = function (buffer) {
                var buf = BufferSourceConverter.toUint8Array(buffer);
                var splitter = "";
                var res = [];
                var len = buf.length;
                for (var i = 0; i < len; i++) {
                    var char = buf[i].toString(16).padStart(2, "0");
                    res.push(char);
                }
                return res.join(splitter);
            };
            Convert.FromHex = function (hexString) {
                var formatted = this.formatString(hexString);
                if (!formatted) {
                    return new ArrayBuffer(0);
                }
                if (!Convert.isHex(formatted)) {
                    throw new TypeError("Argument 'hexString' is not HEX encoded");
                }
                if (formatted.length % 2) {
                    formatted = "0" + formatted;
                }
                var res = new Uint8Array(formatted.length / 2);
                for (var i = 0; i < formatted.length; i = i + 2) {
                    var c = formatted.slice(i, i + 2);
                    res[i / 2] = parseInt(c, 16);
                }
                return res.buffer;
            };
            Convert.Base64Padding = function (base64) {
                var padCount = 4 - (base64.length % 4);
                if (padCount < 4) {
                    for (var i = 0; i < padCount; i++) {
                        base64 += "=";
                    }
                }
                return base64;
            };
            Convert.formatString = function (data) {
                return (data === null || data === void 0 ? void 0 : data.replace(/[\n\r\t ]/g, "")) || "";
            };
            return Convert;
        }());
        function assign(target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            var res = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                var obj = arguments[i];
                for (var prop in obj) {
                    res[prop] = obj[prop];
                }
            }
            return res;
        }
        function combine() {
            var buf = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                buf[_i] = arguments[_i];
            }
            var totalByteLength = buf.map(function (item) { return item.byteLength; }).reduce(function (prev, cur) { return prev + cur; });
            var res = new Uint8Array(totalByteLength);
            var currentPos = 0;
            buf.map(function (item) { return new Uint8Array(item); }).forEach(function (arr) {
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var item2 = arr_1[_i];
                    res[currentPos++] = item2;
                }
            });
            return res.buffer;
        }
        function isEqual(bytes1, bytes2) {
            if (!(bytes1 && bytes2)) {
                return false;
            }
            if (bytes1.byteLength !== bytes2.byteLength) {
                return false;
            }
            var b1 = new Uint8Array(bytes1);
            var b2 = new Uint8Array(bytes2);
            for (var i = 0; i < bytes1.byteLength; i++) {
                if (b1[i] !== b2[i]) {
                    return false;
                }
            }
            return true;
        }
        exports.BufferSourceConverter = BufferSourceConverter;
        exports.Convert = Convert;
        exports.assign = assign;
        exports.combine = combine;
        exports.isEqual = isEqual;
        Object.defineProperty(exports, '__esModule', { value: true });
    })));
});
var index = unwrapExports(build);
var BitString$1 = /** @class */ (function () {
    function BitString$1(params, unusedBits) {
        if (unusedBits === void 0) { unusedBits = 0; }
        this.unusedBits = 0;
        this.value = new ArrayBuffer(0);
        if (params) {
            if (typeof params === "number") {
                this.fromNumber(params);
            }
            else if (index.BufferSourceConverter.isBufferSource(params)) {
                this.unusedBits = unusedBits;
                this.value = index.BufferSourceConverter.toArrayBuffer(params);
            }
            else {
                throw TypeError("Unsupported type of 'params' argument for BitString");
            }
        }
    }
    BitString$1.prototype.fromASN = function (asn) {
        if (!(asn instanceof BitString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");
        }
        this.unusedBits = asn.valueBlock.unusedBits;
        this.value = asn.valueBlock.valueHex;
        return this;
    };
    BitString$1.prototype.toASN = function () {
        return new BitString({ unusedBits: this.unusedBits, valueHex: this.value });
    };
    BitString$1.prototype.toSchema = function (name) {
        return new BitString({ name: name });
    };
    BitString$1.prototype.toNumber = function () {
        var res = "";
        var uintArray = new Uint8Array(this.value);
        for (var _i = 0, uintArray_1 = uintArray; _i < uintArray_1.length; _i++) {
            var octet = uintArray_1[_i];
            res += octet.toString(2).padStart(8, "0");
        }
        res = res.split("").reverse().join("");
        if (this.unusedBits) {
            res = res.slice(this.unusedBits).padStart(this.unusedBits, "0");
        }
        return parseInt(res, 2);
    };
    BitString$1.prototype.fromNumber = function (value) {
        var bits = value.toString(2);
        var octetSize = (bits.length + 7) >> 3;
        this.unusedBits = (octetSize << 3) - bits.length;
        var octets = new Uint8Array(octetSize);
        bits = bits.padStart(octetSize << 3, "0").split("").reverse().join("");
        var index = 0;
        while (index < octetSize) {
            octets[index] = parseInt(bits.slice(index << 3, (index << 3) + 8), 2);
            index++;
        }
        this.value = octets.buffer;
    };
    return BitString$1;
}());
var OctetString$1 = /** @class */ (function () {
    function OctetString$1(param) {
        if (typeof param === "number") {
            this.buffer = new ArrayBuffer(param);
        }
        else {
            if (index.BufferSourceConverter.isBufferSource(param)) {
                this.buffer = index.BufferSourceConverter.toArrayBuffer(param);
            }
            else if (Array.isArray(param)) {
                this.buffer = new Uint8Array(param);
            }
            else {
                this.buffer = new ArrayBuffer(0);
            }
        }
    }
    Object.defineProperty(OctetString$1.prototype, "byteLength", {
        get: function () {
            return this.buffer.byteLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OctetString$1.prototype, "byteOffset", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    OctetString$1.prototype.fromASN = function (asn) {
        if (!(asn instanceof OctetString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
        }
        this.buffer = asn.valueBlock.valueHex;
        return this;
    };
    OctetString$1.prototype.toASN = function () {
        return new OctetString({ valueHex: this.buffer });
    };
    OctetString$1.prototype.toSchema = function (name) {
        return new OctetString({ name: name });
    };
    return OctetString$1;
}());
function isConvertible(target) {
    if (target && target.prototype) {
        if (target.prototype.toASN && target.prototype.fromASN) {
            return true;
        }
        else {
            return isConvertible(target.prototype);
        }
    }
    else {
        return !!(target && target.toASN && target.fromASN);
    }
}
function isTypeOfArray(target) {
    var _a;
    if (target) {
        var proto = Object.getPrototypeOf(target);
        if (((_a = proto === null || proto === void 0 ? void 0 : proto.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === Array) {
            return true;
        }
        return isTypeOfArray(proto);
    }
    return false;
}
function isArrayEqual(bytes1, bytes2) {
    if (!(bytes1 && bytes2)) {
        return false;
    }
    if (bytes1.byteLength !== bytes2.byteLength) {
        return false;
    }
    var b1 = new Uint8Array(bytes1);
    var b2 = new Uint8Array(bytes2);
    for (var i = 0; i < bytes1.byteLength; i++) {
        if (b1[i] !== b2[i]) {
            return false;
        }
    }
    return true;
}
var AsnSchemaStorage = /** @class */ (function () {
    function AsnSchemaStorage() {
        this.items = new WeakMap();
    }
    AsnSchemaStorage.prototype.has = function (target) {
        return this.items.has(target);
    };
    AsnSchemaStorage.prototype.get = function (target) {
        var _a, _b, _c, _d;
        var schema = this.items.get(target);
        if (!schema) {
            throw new Error("Cannot get schema for '" + ((_d = (_c = (_b = (_a = target) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b.constructor) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : target) + "' target");
        }
        return schema;
    };
    AsnSchemaStorage.prototype.cache = function (target) {
        var schema = this.get(target);
        if (!schema.schema) {
            schema.schema = this.create(target, true);
        }
    };
    AsnSchemaStorage.prototype.createDefault = function (target) {
        var schema = {
            type: AsnTypeTypes.Sequence,
            items: {},
        };
        var parentSchema = this.findParentSchema(target);
        if (parentSchema) {
            Object.assign(schema, parentSchema);
            schema.items = Object.assign({}, schema.items, parentSchema.items);
        }
        return schema;
    };
    AsnSchemaStorage.prototype.create = function (target, useNames) {
        var schema = this.items.get(target) || this.createDefault(target);
        var asn1Value = [];
        for (var key in schema.items) {
            var item = schema.items[key];
            var name = useNames ? key : "";
            var asn1Item = void 0;
            if (typeof (item.type) === "number") {
                var Asn1TypeName = AsnPropTypes[item.type];
                var Asn1Type = asn1[Asn1TypeName];
                if (!Asn1Type) {
                    throw new Error("Cannot get ASN1 class by name '" + Asn1TypeName + "'");
                }
                asn1Item = new Asn1Type({ name: name });
            }
            else if (isConvertible(item.type)) {
                var instance = new item.type();
                asn1Item = instance.toSchema(name);
            }
            else if (item.optional) {
                var itemSchema = this.get(item.type);
                if (itemSchema.type === AsnTypeTypes.Choice) {
                    asn1Item = new Any({ name: name });
                }
                else {
                    asn1Item = this.create(item.type, false);
                    asn1Item.name = name;
                }
            }
            else {
                asn1Item = new Any({ name: name });
            }
            var optional = !!item.optional || item.defaultValue !== undefined;
            if (item.repeated) {
                asn1Item.name = "";
                var Container = item.repeated === "set"
                    ? Set
                    : Sequence;
                asn1Item = new Container({
                    name: "",
                    value: [
                        new Repeated({
                            name: name,
                            value: asn1Item,
                        }),
                    ],
                });
            }
            if (item.context !== null && item.context !== undefined) {
                if (item.implicit) {
                    if (typeof item.type === "number" || isConvertible(item.type)) {
                        var Container = item.repeated
                            ? Constructed
                            : Primitive;
                        asn1Value.push(new Container({
                            name: name,
                            optional: optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: item.context,
                            },
                        }));
                    }
                    else {
                        this.cache(item.type);
                        var isRepeated = !!item.repeated;
                        var value = !isRepeated
                            ? this.get(item.type).schema
                            : asn1Item;
                        value = value.valueBlock ? value.valueBlock.value : value.value;
                        asn1Value.push(new Constructed({
                            name: !isRepeated ? name : "",
                            optional: optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: item.context,
                            },
                            value: value,
                        }));
                    }
                }
                else {
                    asn1Value.push(new Constructed({
                        optional: optional,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: item.context,
                        },
                        value: [asn1Item],
                    }));
                }
            }
            else {
                asn1Item.optional = optional;
                asn1Value.push(asn1Item);
            }
        }
        switch (schema.type) {
            case AsnTypeTypes.Sequence:
                return new Sequence({ value: asn1Value, name: "" });
            case AsnTypeTypes.Set:
                return new Set({ value: asn1Value, name: "" });
            case AsnTypeTypes.Choice:
                return new Choice({ value: asn1Value, name: "" });
            default:
                throw new Error("Unsupported ASN1 type in use");
        }
    };
    AsnSchemaStorage.prototype.set = function (target, schema) {
        this.items.set(target, schema);
        return this;
    };
    AsnSchemaStorage.prototype.findParentSchema = function (target) {
        var parent = target.__proto__;
        if (parent) {
            var schema = this.items.get(parent);
            return schema || this.findParentSchema(parent);
        }
        return null;
    };
    return AsnSchemaStorage;
}());
var schemaStorage = new AsnSchemaStorage();
var AsnType = function (options) { return function (target) {
    var schema;
    if (!schemaStorage.has(target)) {
        schema = schemaStorage.createDefault(target);
        schemaStorage.set(target, schema);
    }
    else {
        schema = schemaStorage.get(target);
    }
    Object.assign(schema, options);
}; };
var AsnProp = function (options) { return function (target, propertyKey) {
    var schema;
    if (!schemaStorage.has(target.constructor)) {
        schema = schemaStorage.createDefault(target.constructor);
        schemaStorage.set(target.constructor, schema);
    }
    else {
        schema = schemaStorage.get(target.constructor);
    }
    var copyOptions = Object.assign({}, options);
    if (typeof copyOptions.type === "number" && !copyOptions.converter) {
        var defaultConverter$1 = defaultConverter(options.type);
        if (!defaultConverter$1) {
            throw new Error("Cannot get default converter for property '" + propertyKey + "' of " + target.constructor.name);
        }
        copyOptions.converter = defaultConverter$1;
    }
    schema.items[propertyKey] = copyOptions;
}; };
var AsnSchemaValidationError = /** @class */ (function (_super) {
    __extends(AsnSchemaValidationError, _super);
    function AsnSchemaValidationError() {
        var _this = _super.apply(this, arguments) || this;
        _this.schemas = [];
        return _this;
    }
    return AsnSchemaValidationError;
}(Error));
var AsnParser = /** @class */ (function () {
    function AsnParser() {
    }
    AsnParser.parse = function (data, target) {
        var buf;
        if (data instanceof ArrayBuffer) {
            buf = data;
        }
        else if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
            buf = new Uint8Array(data).buffer;
        }
        else if (ArrayBuffer.isView(data) || data.buffer instanceof ArrayBuffer) {
            buf = data.buffer;
        }
        else {
            throw new TypeError("Wrong type of 'data' argument");
        }
        var asn1Parsed = fromBER(buf);
        if (asn1Parsed.result.error) {
            throw new Error(asn1Parsed.result.error);
        }
        var res = this.fromASN(asn1Parsed.result, target);
        return res;
    };
    AsnParser.fromASN = function (asn1Schema, target) {
        var _this = this;
        var _a;
        try {
            if (isConvertible(target)) {
                var value = new target();
                return value.fromASN(asn1Schema);
            }
            var schema_1 = schemaStorage.get(target);
            schemaStorage.cache(target);
            var targetSchema = schema_1.schema;
            if (asn1Schema.constructor === Constructed && schema_1.type !== AsnTypeTypes.Choice) {
                targetSchema = new Constructed({
                    idBlock: {
                        tagClass: 3,
                        tagNumber: asn1Schema.idBlock.tagNumber,
                    },
                    value: schema_1.schema.valueBlock.value,
                });
                for (var key in schema_1.items) {
                    delete asn1Schema[key];
                }
            }
            var asn1ComparedSchema = compareSchema(asn1Schema, asn1Schema, targetSchema);
            if (!asn1ComparedSchema.verified) {
                throw new AsnSchemaValidationError("Data does not match to " + target.name + " ASN1 schema. " + asn1ComparedSchema.result.error);
            }
            var res = new target();
            if (isTypeOfArray(target)) {
                if (typeof schema_1.itemType === "number") {
                    var converter_1 = defaultConverter(schema_1.itemType);
                    if (!converter_1) {
                        throw new Error("Cannot get default converter for array item of " + target.name + " ASN1 schema");
                    }
                    return target.from(asn1Schema.valueBlock.value, function (element) { return converter_1.fromASN(element); });
                }
                else {
                    return target.from(asn1Schema.valueBlock.value, function (element) { return _this.fromASN(element, schema_1.itemType); });
                }
            }
            var _loop_1 = function (key) {
                if (!asn1Schema[key]) {
                    return "continue";
                }
                var schemaItem = schema_1.items[key];
                if (typeof (schemaItem.type) === "number" || isConvertible(schemaItem.type)) {
                    var converter_2 = (_a = schemaItem.converter) !== null && _a !== void 0 ? _a : (isConvertible(schemaItem.type)
                        ? new schemaItem.type()
                        : null);
                    if (!converter_2) {
                        throw new Error("Converter is empty");
                    }
                    if (schemaItem.repeated) {
                        if (schemaItem.implicit) {
                            var Container = schemaItem.repeated === "sequence"
                                ? Sequence
                                : Set;
                            var newItem = new Container();
                            newItem.valueBlock = asn1Schema[key].valueBlock;
                            var value = fromBER(newItem.toBER(false)).result.valueBlock.value;
                            res[key] = Array.from(value, function (element) { return converter_2.fromASN(element); });
                        }
                        else {
                            res[key] = Array.from(asn1Schema[key], function (element) { return converter_2.fromASN(element); });
                        }
                    }
                    else {
                        var value = asn1Schema[key];
                        if (schemaItem.implicit) {
                            var newItem = void 0;
                            if (isConvertible(schemaItem.type)) {
                                newItem = new schemaItem.type().toSchema("");
                            }
                            else {
                                var Asn1TypeName = AsnPropTypes[schemaItem.type];
                                var Asn1Type = asn1[Asn1TypeName];
                                if (!Asn1Type) {
                                    throw new Error("Cannot get '" + Asn1TypeName + "' class from asn1js module");
                                }
                                newItem = new Asn1Type();
                            }
                            newItem.valueBlock = value.valueBlock;
                            value = fromBER(newItem.toBER(false)).result;
                        }
                        res[key] = converter_2.fromASN(value);
                    }
                }
                else {
                    if (schemaItem.repeated) {
                        res[key] = Array.from(asn1Schema[key], function (element) { return _this.fromASN(element, schemaItem.type); });
                    }
                    else {
                        res[key] = this_1.fromASN(asn1Schema[key], schemaItem.type);
                    }
                }
            };
            var this_1 = this;
            for (var key in schema_1.items) {
                _loop_1(key);
            }
            return res;
        }
        catch (error) {
            if (error instanceof AsnSchemaValidationError) {
                error.schemas.push(target.name);
            }
            throw error;
        }
    };
    return AsnParser;
}());
var AsnSerializer = /** @class */ (function () {
    function AsnSerializer() {
    }
    AsnSerializer.serialize = function (obj) {
        if (obj instanceof BaseBlock) {
            return obj.toBER(false);
        }
        return this.toASN(obj).toBER(false);
    };
    AsnSerializer.toASN = function (obj) {
        var _this = this;
        if (obj && isConvertible(obj.constructor)) {
            return obj.toASN();
        }
        var target = obj.constructor;
        var schema = schemaStorage.get(target);
        schemaStorage.cache(target);
        var asn1Value = [];
        if (schema.itemType) {
            if (typeof schema.itemType === "number") {
                var converter_3 = defaultConverter(schema.itemType);
                if (!converter_3) {
                    throw new Error("Cannot get default converter for array item of " + target.name + " ASN1 schema");
                }
                asn1Value = obj.map(function (o) { return converter_3.toASN(o); });
            }
            else {
                asn1Value = obj.map(function (o) { return _this.toAsnItem({ type: schema.itemType }, "[]", target, o); });
            }
        }
        else {
            for (var key in schema.items) {
                var schemaItem = schema.items[key];
                var objProp = obj[key];
                if (objProp === undefined
                    || schemaItem.defaultValue === objProp
                    || (typeof schemaItem.defaultValue === "object" && typeof objProp === "object"
                        && isArrayEqual(this.serialize(schemaItem.defaultValue), this.serialize(objProp)))) {
                    continue;
                }
                var asn1Item = AsnSerializer.toAsnItem(schemaItem, key, target, objProp);
                if (typeof schemaItem.context === "number") {
                    if (schemaItem.implicit) {
                        if (!schemaItem.repeated
                            && (typeof schemaItem.type === "number" || isConvertible(schemaItem.type))) {
                            var value = {};
                            value.valueHex = asn1Item instanceof Null ? asn1Item.valueBeforeDecode : asn1Item.valueBlock.toBER();
                            asn1Value.push(new Primitive(Object.assign({ optional: schemaItem.optional, idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context,
                                } }, value)));
                        }
                        else {
                            asn1Value.push(new Constructed({
                                optional: schemaItem.optional,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context,
                                },
                                value: asn1Item.valueBlock.value,
                            }));
                        }
                    }
                    else {
                        asn1Value.push(new Constructed({
                            optional: schemaItem.optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: schemaItem.context,
                            },
                            value: [asn1Item],
                        }));
                    }
                }
                else if (schemaItem.repeated) {
                    asn1Value = asn1Value.concat(asn1Item);
                }
                else {
                    asn1Value.push(asn1Item);
                }
            }
        }
        var asnSchema;
        switch (schema.type) {
            case AsnTypeTypes.Sequence:
                asnSchema = new Sequence({ value: asn1Value });
                break;
            case AsnTypeTypes.Set:
                asnSchema = new Set({ value: asn1Value });
                break;
            case AsnTypeTypes.Choice:
                if (!asn1Value[0]) {
                    throw new Error("Schema '" + target.name + "' has wrong data. Choice cannot be empty.");
                }
                asnSchema = asn1Value[0];
                break;
        }
        return asnSchema;
    };
    AsnSerializer.toAsnItem = function (schemaItem, key, target, objProp) {
        var _this = this;
        var asn1Item;
        if (typeof (schemaItem.type) === "number") {
            var converter_4 = schemaItem.converter;
            if (!converter_4) {
                throw new Error("Property '" + key + "' doesn't have converter for type " + AsnPropTypes[schemaItem.type] + " in schema '" + target.name + "'");
            }
            if (schemaItem.repeated) {
                var items = Array.from(objProp, function (element) { return converter_4.toASN(element); });
                var Container = schemaItem.repeated === "sequence"
                    ? Sequence
                    : Set;
                asn1Item = new Container({
                    value: items,
                });
            }
            else {
                asn1Item = converter_4.toASN(objProp);
            }
        }
        else {
            if (schemaItem.repeated) {
                var items = Array.from(objProp, function (element) { return _this.toASN(element); });
                var Container = schemaItem.repeated === "sequence"
                    ? Sequence
                    : Set;
                asn1Item = new Container({
                    value: items,
                });
            }
            else {
                asn1Item = this.toASN(objProp);
            }
        }
        return asn1Item;
    };
    return AsnSerializer;
}());
var AsnArray = /** @class */ (function (_super) {
    __extends(AsnArray, _super);
    function AsnArray(items) {
        if (items === void 0) { items = []; }
        var _this = this;
        if (typeof items === "number") {
            _this = _super.call(this, items) || this;
        }
        else {
            _this = _super.call(this) || this;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                _this.push(item);
            }
        }
        return _this;
    }
    return AsnArray;
}(Array));
var AsnConvert = /** @class */ (function () {
    function AsnConvert() {
    }
    AsnConvert.serialize = function (obj) {
        return AsnSerializer.serialize(obj);
    };
    AsnConvert.parse = function (data, target) {
        return AsnParser.parse(data, target);
    };
    return AsnConvert;
}());
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
var ECParameters = /** @class */ (function () {
    function ECParameters(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return ECParameters;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ECParameters.prototype, "namedCurve", void 0);
ECParameters = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ECParameters);
var ECPrivateKey = /** @class */ (function () {
    function ECPrivateKey(params) {
        if (params === void 0) { params = {}; }
        this.version = 1;
        this.privateKey = new OctetString$1();
        Object.assign(this, params);
    }
    return ECPrivateKey;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ECPrivateKey.prototype, "version", void 0);
__decorate([
    AsnProp({ type: OctetString$1 })
], ECPrivateKey.prototype, "privateKey", void 0);
__decorate([
    AsnProp({ type: ECParameters, context: 0, optional: true })
], ECPrivateKey.prototype, "parameters", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString, context: 1, optional: true })
], ECPrivateKey.prototype, "publicKey", void 0);
var ECDSASigValue = /** @class */ (function () {
    function ECDSASigValue(params) {
        if (params === void 0) { params = {}; }
        this.r = new ArrayBuffer(0);
        this.s = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return ECDSASigValue;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], ECDSASigValue.prototype, "r", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], ECDSASigValue.prototype, "s", void 0);
var id_ecPublicKey = "1.2.840.10045.2.1";
var ipaddr = createCommonjsModule(function (module) {
    (function (root) {
        // A list of regular expressions that match arbitrary IPv4 addresses,
        // for which a number of weird notations exist.
        // Note that an address like 0010.0xa5.1.1 is considered legal.
        var ipv4Part = '(0?\\d+|0x[a-f0-9]+)';
        var ipv4Regexes = {
            fourOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", 'i'),
            threeOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", 'i'),
            twoOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "$", 'i'),
            longValue: new RegExp("^" + ipv4Part + "$", 'i')
        };
        // Regular Expression for checking Octal numbers
        var octalRegex = new RegExp("^0[0-7]+$", 'i');
        var hexRegex = new RegExp("^0x[a-f0-9]+$", 'i');
        var zoneIndex = '%[0-9a-z]{1,}';
        // IPv6-matching regular expressions.
        // For IPv6, the task is simpler: it is enough to match the colon-delimited
        // hexadecimal IPv6 and a transitional variant with dotted-decimal IPv4 at
        // the end.
        var ipv6Part = '(?:[0-9a-f]+::?)+';
        var ipv6Regexes = {
            zoneIndex: new RegExp(zoneIndex, 'i'),
            'native': new RegExp("^(::)?(" + ipv6Part + ")?([0-9a-f]+)?(::)?(" + zoneIndex + ")?$", 'i'),
            deprecatedTransitional: new RegExp("^(?:::)(" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "(" + zoneIndex + ")?)$", 'i'),
            transitional: new RegExp("^((?:" + ipv6Part + ")|(?:::)(?:" + ipv6Part + ")?)" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "(" + zoneIndex + ")?$", 'i')
        };
        // Expand :: in an IPv6 address or address part consisting of `parts` groups.
        function expandIPv6(string, parts) {
            // More than one '::' means invalid adddress
            if (string.indexOf('::') !== string.lastIndexOf('::')) {
                return null;
            }
            var colonCount = 0;
            var lastColon = -1;
            var zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
            var replacement, replacementCount;
            // Remove zone index and save it for later
            if (zoneId) {
                zoneId = zoneId.substring(1);
                string = string.replace(/%.+$/, '');
            }
            // How many parts do we already have?
            while ((lastColon = string.indexOf(':', lastColon + 1)) >= 0) {
                colonCount++;
            }
            // 0::0 is two parts more than ::
            if (string.substr(0, 2) === '::') {
                colonCount--;
            }
            if (string.substr(-2, 2) === '::') {
                colonCount--;
            }
            // The following loop would hang if colonCount > parts
            if (colonCount > parts) {
                return null;
            }
            // replacement = ':' + '0:' * (parts - colonCount)
            replacementCount = parts - colonCount;
            replacement = ':';
            while (replacementCount--) {
                replacement += '0:';
            }
            // Insert the missing zeroes
            string = string.replace('::', replacement);
            // Trim any garbage which may be hanging around if :: was at the edge in
            // the source strin
            if (string[0] === ':') {
                string = string.slice(1);
            }
            if (string[string.length - 1] === ':') {
                string = string.slice(0, -1);
            }
            parts = (function () {
                var ref = string.split(':');
                var results = [];
                for (var i = 0; i < ref.length; i++) {
                    results.push(parseInt(ref[i], 16));
                }
                return results;
            })();
            return {
                parts: parts,
                zoneId: zoneId
            };
        }
        // A generic CIDR (Classless Inter-Domain Routing) RFC1518 range matcher.
        function matchCIDR(first, second, partSize, cidrBits) {
            if (first.length !== second.length) {
                throw new Error('ipaddr: cannot match CIDR for objects with different lengths');
            }
            var part = 0;
            var shift;
            while (cidrBits > 0) {
                shift = partSize - cidrBits;
                if (shift < 0) {
                    shift = 0;
                }
                if (first[part] >> shift !== second[part] >> shift) {
                    return false;
                }
                cidrBits -= partSize;
                part += 1;
            }
            return true;
        }
        function parseIntAuto(string) {
            // Hexadedimal base 16 (0x#)
            if (hexRegex.test(string)) {
                return parseInt(string, 16);
            }
            // While octal representation is discouraged by ECMAScript 3
            // and forbidden by ECMAScript 5, we silently allow it to
            // work only if the rest of the string has numbers less than 8.
            if (string[0] === '0' && !isNaN(parseInt(string[1], 10))) {
                if (octalRegex.test(string)) {
                    return parseInt(string, 8);
                }
                throw new Error("ipaddr: cannot parse " + string + " as octal");
            }
            // Always include the base 10 radix!
            return parseInt(string, 10);
        }
        function padPart(part, length) {
            while (part.length < length) {
                part = "0" + part;
            }
            return part;
        }
        var ipaddr = {};
        // An IPv4 address (RFC791).
        ipaddr.IPv4 = (function () {
            // Constructs a new IPv4 address from an array of four octets
            // in network order (MSB first)
            // Verifies the input.
            function IPv4(octets) {
                if (octets.length !== 4) {
                    throw new Error('ipaddr: ipv4 octet count should be 4');
                }
                var i, octet;
                for (i = 0; i < octets.length; i++) {
                    octet = octets[i];
                    if (!((0 <= octet && octet <= 255))) {
                        throw new Error('ipaddr: ipv4 octet should fit in 8 bits');
                    }
                }
                this.octets = octets;
            }
            // Special IPv4 address ranges.
            // See also https://en.wikipedia.org/wiki/Reserved_IP_addresses
            IPv4.prototype.SpecialRanges = {
                unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
                broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
                // RFC3171
                multicast: [[new IPv4([224, 0, 0, 0]), 4]],
                // RFC3927
                linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
                // RFC5735
                loopback: [[new IPv4([127, 0, 0, 0]), 8]],
                // RFC6598
                carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
                // RFC1918
                'private': [
                    [new IPv4([10, 0, 0, 0]), 8],
                    [new IPv4([172, 16, 0, 0]), 12],
                    [new IPv4([192, 168, 0, 0]), 16]
                ],
                // Reserved and testing-only ranges; RFCs 5735, 5737, 2544, 1700
                reserved: [
                    [new IPv4([192, 0, 0, 0]), 24],
                    [new IPv4([192, 0, 2, 0]), 24],
                    [new IPv4([192, 88, 99, 0]), 24],
                    [new IPv4([198, 51, 100, 0]), 24],
                    [new IPv4([203, 0, 113, 0]), 24],
                    [new IPv4([240, 0, 0, 0]), 4]
                ]
            };
            // The 'kind' method exists on both IPv4 and IPv6 classes.
            IPv4.prototype.kind = function () {
                return 'ipv4';
            };
            // Checks if this address matches other one within given CIDR range.
            IPv4.prototype.match = function (other, cidrRange) {
                var ref;
                if (cidrRange === undefined) {
                    ref = other;
                    other = ref[0];
                    cidrRange = ref[1];
                }
                if (other.kind() !== 'ipv4') {
                    throw new Error('ipaddr: cannot match ipv4 address with non-ipv4 one');
                }
                return matchCIDR(this.octets, other.octets, 8, cidrRange);
            };
            // returns a number of leading ones in IPv4 address, making sure that
            // the rest is a solid sequence of 0's (valid netmask)
            // returns either the CIDR length or null if mask is not valid
            IPv4.prototype.prefixLengthFromSubnetMask = function () {
                var cidr = 0;
                // non-zero encountered stop scanning for zeroes
                var stop = false;
                // number of zeroes in octet
                var zerotable = {
                    0: 8,
                    128: 7,
                    192: 6,
                    224: 5,
                    240: 4,
                    248: 3,
                    252: 2,
                    254: 1,
                    255: 0
                };
                var i, octet, zeros;
                for (i = 3; i >= 0; i -= 1) {
                    octet = this.octets[i];
                    if (octet in zerotable) {
                        zeros = zerotable[octet];
                        if (stop && zeros !== 0) {
                            return null;
                        }
                        if (zeros !== 8) {
                            stop = true;
                        }
                        cidr += zeros;
                    }
                    else {
                        return null;
                    }
                }
                return 32 - cidr;
            };
            // Checks if the address corresponds to one of the special ranges.
            IPv4.prototype.range = function () {
                return ipaddr.subnetMatch(this, this.SpecialRanges);
            };
            // Returns an array of byte-sized values in network order (MSB first)
            IPv4.prototype.toByteArray = function () {
                return this.octets.slice(0);
            };
            // Converts this IPv4 address to an IPv4-mapped IPv6 address.
            IPv4.prototype.toIPv4MappedAddress = function () {
                return ipaddr.IPv6.parse("::ffff:" + this.toString());
            };
            // Symmetrical method strictly for aligning with the IPv6 methods.
            IPv4.prototype.toNormalizedString = function () {
                return this.toString();
            };
            // Returns the address in convenient, decimal-dotted format.
            IPv4.prototype.toString = function () {
                return this.octets.join('.');
            };
            return IPv4;
        })();
        // A utility function to return broadcast address given the IPv4 interface and prefix length in CIDR notation
        ipaddr.IPv4.broadcastAddressFromCIDR = function (string) {
            try {
                var cidr = this.parseCIDR(string);
                var ipInterfaceOctets = cidr[0].toByteArray();
                var subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
                var octets = [];
                var i = 0;
                while (i < 4) {
                    // Broadcast address is bitwise OR between ip interface and inverted mask
                    octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
                    i++;
                }
                return new this(octets);
            }
            catch (e) {
                throw new Error('ipaddr: the address does not have IPv4 CIDR format');
            }
        };
        // Checks if a given string is formatted like IPv4 address.
        ipaddr.IPv4.isIPv4 = function (string) {
            return this.parser(string) !== null;
        };
        // Checks if a given string is a valid IPv4 address.
        ipaddr.IPv4.isValid = function (string) {
            try {
                new this(this.parser(string));
                return true;
            }
            catch (e) {
                return false;
            }
        };
        // Checks if a given string is a full four-part IPv4 Address.
        ipaddr.IPv4.isValidFourPartDecimal = function (string) {
            if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
                return true;
            }
            else {
                return false;
            }
        };
        // A utility function to return network address given the IPv4 interface and prefix length in CIDR notation
        ipaddr.IPv4.networkAddressFromCIDR = function (string) {
            var cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
            try {
                cidr = this.parseCIDR(string);
                ipInterfaceOctets = cidr[0].toByteArray();
                subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
                octets = [];
                i = 0;
                while (i < 4) {
                    // Network address is bitwise AND between ip interface and mask
                    octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
                    i++;
                }
                return new this(octets);
            }
            catch (e) {
                throw new Error('ipaddr: the address does not have IPv4 CIDR format');
            }
        };
        // Tries to parse and validate a string with IPv4 address.
        // Throws an error if it fails.
        ipaddr.IPv4.parse = function (string) {
            var parts = this.parser(string);
            if (parts === null) {
                throw new Error('ipaddr: string is not formatted like an IPv4 Address');
            }
            return new this(parts);
        };
        // Parses the string as an IPv4 Address with CIDR Notation.
        ipaddr.IPv4.parseCIDR = function (string) {
            var match;
            if ((match = string.match(/^(.+)\/(\d+)$/))) {
                var maskLength = parseInt(match[2]);
                if (maskLength >= 0 && maskLength <= 32) {
                    var parsed = [this.parse(match[1]), maskLength];
                    Object.defineProperty(parsed, 'toString', {
                        value: function () {
                            return this.join('/');
                        }
                    });
                    return parsed;
                }
            }
            throw new Error('ipaddr: string is not formatted like an IPv4 CIDR range');
        };
        // Classful variants (like a.b, where a is an octet, and b is a 24-bit
        // value representing last three octets; this corresponds to a class C
        // address) are omitted due to classless nature of modern Internet.
        ipaddr.IPv4.parser = function (string) {
            var match, part, value;
            // parseInt recognizes all that octal & hexadecimal weirdness for us
            if ((match = string.match(ipv4Regexes.fourOctet))) {
                return (function () {
                    var ref = match.slice(1, 6);
                    var results = [];
                    for (var i = 0; i < ref.length; i++) {
                        part = ref[i];
                        results.push(parseIntAuto(part));
                    }
                    return results;
                })();
            }
            else if ((match = string.match(ipv4Regexes.longValue))) {
                value = parseIntAuto(match[1]);
                if (value > 0xffffffff || value < 0) {
                    throw new Error('ipaddr: address outside defined range');
                }
                return ((function () {
                    var results = [];
                    var shift;
                    for (shift = 0; shift <= 24; shift += 8) {
                        results.push((value >> shift) & 0xff);
                    }
                    return results;
                })()).reverse();
            }
            else if ((match = string.match(ipv4Regexes.twoOctet))) {
                return (function () {
                    var ref = match.slice(1, 4);
                    var results = [];
                    value = parseIntAuto(ref[1]);
                    if (value > 0xffffff || value < 0) {
                        throw new Error('ipaddr: address outside defined range');
                    }
                    results.push(parseIntAuto(ref[0]));
                    results.push((value >> 16) & 0xff);
                    results.push((value >> 8) & 0xff);
                    results.push(value & 0xff);
                    return results;
                })();
            }
            else if ((match = string.match(ipv4Regexes.threeOctet))) {
                return (function () {
                    var ref = match.slice(1, 5);
                    var results = [];
                    value = parseIntAuto(ref[2]);
                    if (value > 0xffff || value < 0) {
                        throw new Error('ipaddr: address outside defined range');
                    }
                    results.push(parseIntAuto(ref[0]));
                    results.push(parseIntAuto(ref[1]));
                    results.push((value >> 8) & 0xff);
                    results.push(value & 0xff);
                    return results;
                })();
            }
            else {
                return null;
            }
        };
        // A utility function to return subnet mask in IPv4 format given the prefix length
        ipaddr.IPv4.subnetMaskFromPrefixLength = function (prefix) {
            prefix = parseInt(prefix);
            if (prefix < 0 || prefix > 32) {
                throw new Error('ipaddr: invalid IPv4 prefix length');
            }
            var octets = [0, 0, 0, 0];
            var j = 0;
            var filledOctetCount = Math.floor(prefix / 8);
            while (j < filledOctetCount) {
                octets[j] = 255;
                j++;
            }
            if (filledOctetCount < 4) {
                octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - (prefix % 8);
            }
            return new this(octets);
        };
        // An IPv6 address (RFC2460)
        ipaddr.IPv6 = (function () {
            // Constructs an IPv6 address from an array of eight 16 - bit parts
            // or sixteen 8 - bit parts in network order(MSB first).
            // Throws an error if the input is invalid.
            function IPv6(parts, zoneId) {
                var i, part;
                if (parts.length === 16) {
                    this.parts = [];
                    for (i = 0; i <= 14; i += 2) {
                        this.parts.push((parts[i] << 8) | parts[i + 1]);
                    }
                }
                else if (parts.length === 8) {
                    this.parts = parts;
                }
                else {
                    throw new Error('ipaddr: ipv6 part count should be 8 or 16');
                }
                for (i = 0; i < this.parts.length; i++) {
                    part = this.parts[i];
                    if (!((0 <= part && part <= 0xffff))) {
                        throw new Error('ipaddr: ipv6 part should fit in 16 bits');
                    }
                }
                if (zoneId) {
                    this.zoneId = zoneId;
                }
            }
            // Special IPv6 ranges
            IPv6.prototype.SpecialRanges = {
                // RFC4291, here and after
                unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
                linkLocal: [new IPv6([0xfe80, 0, 0, 0, 0, 0, 0, 0]), 10],
                multicast: [new IPv6([0xff00, 0, 0, 0, 0, 0, 0, 0]), 8],
                loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
                uniqueLocal: [new IPv6([0xfc00, 0, 0, 0, 0, 0, 0, 0]), 7],
                ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 0xffff, 0, 0]), 96],
                // RFC6145
                rfc6145: [new IPv6([0, 0, 0, 0, 0xffff, 0, 0, 0]), 96],
                // RFC6052
                rfc6052: [new IPv6([0x64, 0xff9b, 0, 0, 0, 0, 0, 0]), 96],
                // RFC3056
                '6to4': [new IPv6([0x2002, 0, 0, 0, 0, 0, 0, 0]), 16],
                // RFC6052, RFC6146
                teredo: [new IPv6([0x2001, 0, 0, 0, 0, 0, 0, 0]), 32],
                // RFC4291
                reserved: [[new IPv6([0x2001, 0xdb8, 0, 0, 0, 0, 0, 0]), 32]]
            };
            // Checks if this address is an IPv4-mapped IPv6 address.
            IPv6.prototype.isIPv4MappedAddress = function () {
                return this.range() === 'ipv4Mapped';
            };
            // The 'kind' method exists on both IPv4 and IPv6 classes.
            IPv6.prototype.kind = function () {
                return 'ipv6';
            };
            // Checks if this address matches other one within given CIDR range.
            IPv6.prototype.match = function (other, cidrRange) {
                var ref;
                if (cidrRange === undefined) {
                    ref = other;
                    other = ref[0];
                    cidrRange = ref[1];
                }
                if (other.kind() !== 'ipv6') {
                    throw new Error('ipaddr: cannot match ipv6 address with non-ipv6 one');
                }
                return matchCIDR(this.parts, other.parts, 16, cidrRange);
            };
            // returns a number of leading ones in IPv6 address, making sure that
            // the rest is a solid sequence of 0's (valid netmask)
            // returns either the CIDR length or null if mask is not valid
            IPv6.prototype.prefixLengthFromSubnetMask = function () {
                var cidr = 0;
                // non-zero encountered stop scanning for zeroes
                var stop = false;
                // number of zeroes in octet
                var zerotable = {
                    0: 16,
                    32768: 15,
                    49152: 14,
                    57344: 13,
                    61440: 12,
                    63488: 11,
                    64512: 10,
                    65024: 9,
                    65280: 8,
                    65408: 7,
                    65472: 6,
                    65504: 5,
                    65520: 4,
                    65528: 3,
                    65532: 2,
                    65534: 1,
                    65535: 0
                };
                var part, zeros;
                for (var i = 7; i >= 0; i -= 1) {
                    part = this.parts[i];
                    if (part in zerotable) {
                        zeros = zerotable[part];
                        if (stop && zeros !== 0) {
                            return null;
                        }
                        if (zeros !== 16) {
                            stop = true;
                        }
                        cidr += zeros;
                    }
                    else {
                        return null;
                    }
                }
                return 128 - cidr;
            };
            // Checks if the address corresponds to one of the special ranges.
            IPv6.prototype.range = function () {
                return ipaddr.subnetMatch(this, this.SpecialRanges);
            };
            // Returns an array of byte-sized values in network order (MSB first)
            IPv6.prototype.toByteArray = function () {
                var part;
                var bytes = [];
                var ref = this.parts;
                for (var i = 0; i < ref.length; i++) {
                    part = ref[i];
                    bytes.push(part >> 8);
                    bytes.push(part & 0xff);
                }
                return bytes;
            };
            // Returns the address in expanded format with all zeroes included, like
            // 2001:0db8:0008:0066:0000:0000:0000:0001
            IPv6.prototype.toFixedLengthString = function () {
                var addr = ((function () {
                    var results = [];
                    for (var i = 0; i < this.parts.length; i++) {
                        results.push(padPart(this.parts[i].toString(16), 4));
                    }
                    return results;
                }).call(this)).join(':');
                var suffix = '';
                if (this.zoneId) {
                    suffix = "%" + this.zoneId;
                }
                return addr + suffix;
            };
            // Converts this address to IPv4 address if it is an IPv4-mapped IPv6 address.
            // Throws an error otherwise.
            IPv6.prototype.toIPv4Address = function () {
                if (!this.isIPv4MappedAddress()) {
                    throw new Error('ipaddr: trying to convert a generic ipv6 address to ipv4');
                }
                var ref = this.parts.slice(-2);
                var high = ref[0];
                var low = ref[1];
                return new ipaddr.IPv4([high >> 8, high & 0xff, low >> 8, low & 0xff]);
            };
            // Returns the address in expanded format with all zeroes included, like
            // 2001:db8:8:66:0:0:0:1
            //
            // Deprecated: use toFixedLengthString() instead.
            IPv6.prototype.toNormalizedString = function () {
                var addr = ((function () {
                    var results = [];
                    for (var i = 0; i < this.parts.length; i++) {
                        results.push(this.parts[i].toString(16));
                    }
                    return results;
                }).call(this)).join(':');
                var suffix = '';
                if (this.zoneId) {
                    suffix = "%" + this.zoneId;
                }
                return addr + suffix;
            };
            // Returns the address in compact, human-readable format like
            // 2001:db8:8:66::1
            // in line with RFC 5952 (see https://tools.ietf.org/html/rfc5952#section-4)
            IPv6.prototype.toRFC5952String = function () {
                var regex = /((^|:)(0(:|$)){2,})/g;
                var string = this.toNormalizedString();
                var bestMatchIndex = 0;
                var bestMatchLength = -1;
                var match;
                while ((match = regex.exec(string))) {
                    if (match[0].length > bestMatchLength) {
                        bestMatchIndex = match.index;
                        bestMatchLength = match[0].length;
                    }
                }
                if (bestMatchLength < 0) {
                    return string;
                }
                return string.substring(0, bestMatchIndex) + "::" + string.substring(bestMatchIndex + bestMatchLength);
            };
            // Returns the address in compact, human-readable format like
            // 2001:db8:8:66::1
            //
            // Deprecated: use toRFC5952String() instead.
            IPv6.prototype.toString = function () {
                // Replace the first sequence of 1 or more '0' parts with '::'
                return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, '::');
            };
            return IPv6;
        })();
        // Checks if a given string is formatted like IPv6 address.
        ipaddr.IPv6.isIPv6 = function (string) {
            return this.parser(string) !== null;
        };
        // Checks to see if string is a valid IPv6 Address
        ipaddr.IPv6.isValid = function (string) {
            // Since IPv6.isValid is always called first, this shortcut
            // provides a substantial performance gain.
            if (typeof string === 'string' && string.indexOf(':') === -1) {
                return false;
            }
            try {
                var addr = this.parser(string);
                new this(addr.parts, addr.zoneId);
                return true;
            }
            catch (e) {
                return false;
            }
        };
        // Tries to parse and validate a string with IPv6 address.
        // Throws an error if it fails.
        ipaddr.IPv6.parse = function (string) {
            var addr = this.parser(string);
            if (addr.parts === null) {
                throw new Error('ipaddr: string is not formatted like an IPv6 Address');
            }
            return new this(addr.parts, addr.zoneId);
        };
        ipaddr.IPv6.parseCIDR = function (string) {
            var maskLength, match, parsed;
            if ((match = string.match(/^(.+)\/(\d+)$/))) {
                maskLength = parseInt(match[2]);
                if (maskLength >= 0 && maskLength <= 128) {
                    parsed = [this.parse(match[1]), maskLength];
                    Object.defineProperty(parsed, 'toString', {
                        value: function () {
                            return this.join('/');
                        }
                    });
                    return parsed;
                }
            }
            throw new Error('ipaddr: string is not formatted like an IPv6 CIDR range');
        };
        // Parse an IPv6 address.
        ipaddr.IPv6.parser = function (string) {
            var addr, i, match, octet, octets, zoneId;
            if ((match = string.match(ipv6Regexes.deprecatedTransitional))) {
                return this.parser("::ffff:" + match[1]);
            }
            if (ipv6Regexes.native.test(string)) {
                return expandIPv6(string, 8);
            }
            if ((match = string.match(ipv6Regexes.transitional))) {
                zoneId = match[6] || '';
                addr = expandIPv6(match[1].slice(0, -1) + zoneId, 6);
                if (addr.parts) {
                    octets = [
                        parseInt(match[2]),
                        parseInt(match[3]),
                        parseInt(match[4]),
                        parseInt(match[5])
                    ];
                    for (i = 0; i < octets.length; i++) {
                        octet = octets[i];
                        if (!((0 <= octet && octet <= 255))) {
                            return null;
                        }
                    }
                    addr.parts.push(octets[0] << 8 | octets[1]);
                    addr.parts.push(octets[2] << 8 | octets[3]);
                    return {
                        parts: addr.parts,
                        zoneId: addr.zoneId
                    };
                }
            }
            return null;
        };
        // Try to parse an array in network order (MSB first) for IPv4 and IPv6
        ipaddr.fromByteArray = function (bytes) {
            var length = bytes.length;
            if (length === 4) {
                return new ipaddr.IPv4(bytes);
            }
            else if (length === 16) {
                return new ipaddr.IPv6(bytes);
            }
            else {
                throw new Error('ipaddr: the binary input is neither an IPv6 nor IPv4 address');
            }
        };
        // Checks if the address is valid IP address
        ipaddr.isValid = function (string) {
            return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
        };
        // Attempts to parse an IP Address, first through IPv6 then IPv4.
        // Throws an error if it could not be parsed.
        ipaddr.parse = function (string) {
            if (ipaddr.IPv6.isValid(string)) {
                return ipaddr.IPv6.parse(string);
            }
            else if (ipaddr.IPv4.isValid(string)) {
                return ipaddr.IPv4.parse(string);
            }
            else {
                throw new Error('ipaddr: the address has neither IPv6 nor IPv4 format');
            }
        };
        // Attempt to parse CIDR notation, first through IPv6 then IPv4.
        // Throws an error if it could not be parsed.
        ipaddr.parseCIDR = function (string) {
            try {
                return ipaddr.IPv6.parseCIDR(string);
            }
            catch (e) {
                try {
                    return ipaddr.IPv4.parseCIDR(string);
                }
                catch (e2) {
                    throw new Error('ipaddr: the address has neither IPv6 nor IPv4 CIDR format');
                }
            }
        };
        // Parse an address and return plain IPv4 address if it is an IPv4-mapped address
        ipaddr.process = function (string) {
            var addr = this.parse(string);
            if (addr.kind() === 'ipv6' && addr.isIPv4MappedAddress()) {
                return addr.toIPv4Address();
            }
            else {
                return addr;
            }
        };
        // An utility function to ease named range matching. See examples below.
        // rangeList can contain both IPv4 and IPv6 subnet entries and will not throw errors
        // on matching IPv4 addresses to IPv6 ranges or vice versa.
        ipaddr.subnetMatch = function (address, rangeList, defaultName) {
            var i, rangeName, rangeSubnets, subnet;
            if (defaultName === undefined || defaultName === null) {
                defaultName = 'unicast';
            }
            for (rangeName in rangeList) {
                if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
                    rangeSubnets = rangeList[rangeName];
                    // ECMA5 Array.isArray isn't available everywhere
                    if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
                        rangeSubnets = [rangeSubnets];
                    }
                    for (i = 0; i < rangeSubnets.length; i++) {
                        subnet = rangeSubnets[i];
                        if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) {
                            return rangeName;
                        }
                    }
                }
            }
            return defaultName;
        };
        // Export for both the CommonJS and browser-like environment
        if (module.exports) {
            module.exports = ipaddr;
        }
        else {
            root.ipaddr = ipaddr;
        }
    }(commonjsGlobal));
});
var IpConverter = /** @class */ (function () {
    function IpConverter() {
    }
    IpConverter.decodeIP = function (value) {
        if (value.length === 64 && parseInt(value, 16) === 0) {
            return "::/0";
        }
        if (value.length !== 16) {
            return value;
        }
        var mask = parseInt(value.slice(8), 16)
            .toString(2)
            .split('')
            .reduce(function (a, k) { return a + (+k); }, 0);
        var ip = value.slice(0, 8)
            .replace(/(.{2})/g, function (match) { return parseInt(match, 16) + "."; });
        ip = ip.slice(0, -1);
        return ip + "/" + mask;
    };
    IpConverter.toString = function (buf) {
        if (buf.byteLength === 4 || buf.byteLength === 16) {
            var uint8 = new Uint8Array(buf);
            var addr = ipaddr.fromByteArray(Array.from(uint8));
            return addr.toString();
        }
        return this.decodeIP(index.Convert.ToHex(buf));
    };
    IpConverter.fromString = function (text) {
        var addr = ipaddr.parse(text);
        return new Uint8Array(addr.toByteArray()).buffer;
    };
    return IpConverter;
}());
var RelativeDistinguishedName_1, RDNSequence_1, Name_1;
var DirectoryString = /** @class */ (function () {
    function DirectoryString(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    DirectoryString.prototype.toString = function () {
        return this.bmpString || this.printableString || this.teletexString || this.universalString
            || this.utf8String || "";
    };
    return DirectoryString;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.TeletexString })
], DirectoryString.prototype, "teletexString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.PrintableString })
], DirectoryString.prototype, "printableString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.UniversalString })
], DirectoryString.prototype, "universalString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], DirectoryString.prototype, "utf8String", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BmpString })
], DirectoryString.prototype, "bmpString", void 0);
DirectoryString = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], DirectoryString);
var AttributeValue = /** @class */ (function (_super) {
    __extends(AttributeValue, _super);
    function AttributeValue(params) {
        if (params === void 0) { params = {}; }
        var _this = _super.call(this, params) || this;
        Object.assign(_this, params);
        return _this;
    }
    AttributeValue.prototype.toString = function () {
        return this.ia5String || (this.anyValue ? index.Convert.ToHex(this.anyValue) : _super.prototype.toString.call(this));
    };
    return AttributeValue;
}(DirectoryString));
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], AttributeValue.prototype, "ia5String", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], AttributeValue.prototype, "anyValue", void 0);
AttributeValue = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], AttributeValue);
var AttributeTypeAndValue = /** @class */ (function () {
    function AttributeTypeAndValue(params) {
        if (params === void 0) { params = {}; }
        this.type = "";
        this.value = new AttributeValue();
        Object.assign(this, params);
    }
    return AttributeTypeAndValue;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], AttributeTypeAndValue.prototype, "type", void 0);
__decorate([
    AsnProp({ type: AttributeValue })
], AttributeTypeAndValue.prototype, "value", void 0);
var RelativeDistinguishedName = RelativeDistinguishedName_1 = /** @class */ (function (_super) {
    __extends(RelativeDistinguishedName, _super);
    function RelativeDistinguishedName(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, RelativeDistinguishedName_1.prototype);
        return _this;
    }
    return RelativeDistinguishedName;
}(AsnArray));
RelativeDistinguishedName = RelativeDistinguishedName_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Set, itemType: AttributeTypeAndValue })
], RelativeDistinguishedName);
var RDNSequence = RDNSequence_1 = /** @class */ (function (_super) {
    __extends(RDNSequence, _super);
    function RDNSequence(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, RDNSequence_1.prototype);
        return _this;
    }
    return RDNSequence;
}(AsnArray));
RDNSequence = RDNSequence_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: RelativeDistinguishedName })
], RDNSequence);
var Name = Name_1 = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Name_1.prototype);
        return _this;
    }
    return Name;
}(RDNSequence));
Name = Name_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], Name);
var AsnIpConverter = {
    fromASN: function (value) { return IpConverter.toString(AsnOctetStringConverter.fromASN(value)); },
    toASN: function (value) { return AsnOctetStringConverter.toASN(IpConverter.fromString(value)); },
};
var OtherName = /** @class */ (function () {
    function OtherName(params) {
        if (params === void 0) { params = {}; }
        this.typeId = "";
        this.value = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return OtherName;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherName.prototype, "typeId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, context: 0 })
], OtherName.prototype, "value", void 0);
var EDIPartyName = /** @class */ (function () {
    function EDIPartyName(params) {
        if (params === void 0) { params = {}; }
        this.partyName = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return EDIPartyName;
}());
__decorate([
    AsnProp({ type: DirectoryString, optional: true, context: 0, implicit: true })
], EDIPartyName.prototype, "nameAssigner", void 0);
__decorate([
    AsnProp({ type: DirectoryString, context: 1, implicit: true })
], EDIPartyName.prototype, "partyName", void 0);
var GeneralName = /** @class */ (function () {
    function GeneralName(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return GeneralName;
}());
__decorate([
    AsnProp({ type: OtherName, context: 0, implicit: true })
], GeneralName.prototype, "otherName", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String, context: 1, implicit: true })
], GeneralName.prototype, "rfc822Name", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String, context: 2, implicit: true })
], GeneralName.prototype, "dNSName", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, context: 3, implicit: true })
], GeneralName.prototype, "x400Address", void 0);
__decorate([
    AsnProp({ type: Name, context: 4, implicit: false })
], GeneralName.prototype, "directoryName", void 0);
__decorate([
    AsnProp({ type: EDIPartyName, context: 5 })
], GeneralName.prototype, "ediPartyName", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String, context: 6, implicit: true })
], GeneralName.prototype, "uniformResourceIdentifier", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 7, implicit: true, converter: AsnIpConverter })
], GeneralName.prototype, "iPAddress", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier, context: 8, implicit: true })
], GeneralName.prototype, "registeredID", void 0);
GeneralName = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], GeneralName);
var id_pkix = "1.3.6.1.5.5.7";
var id_pe = id_pkix + ".1";
var id_ce = "2.5.29";
var AuthorityInfoAccessSyntax_1;
var id_pe_authorityInfoAccess = id_pe + ".1";
var AccessDescription = /** @class */ (function () {
    function AccessDescription(params) {
        if (params === void 0) { params = {}; }
        this.accessMethod = "";
        this.accessLocation = new GeneralName();
        Object.assign(this, params);
    }
    return AccessDescription;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], AccessDescription.prototype, "accessMethod", void 0);
__decorate([
    AsnProp({ type: GeneralName })
], AccessDescription.prototype, "accessLocation", void 0);
var AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = /** @class */ (function (_super) {
    __extends(AuthorityInfoAccessSyntax, _super);
    function AuthorityInfoAccessSyntax(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, AuthorityInfoAccessSyntax_1.prototype);
        return _this;
    }
    return AuthorityInfoAccessSyntax;
}(AsnArray));
AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: AccessDescription })
], AuthorityInfoAccessSyntax);
var id_ce_authorityKeyIdentifier = id_ce + ".35";
var KeyIdentifier = /** @class */ (function (_super) {
    __extends(KeyIdentifier, _super);
    function KeyIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KeyIdentifier;
}(OctetString$1));
var AuthorityKeyIdentifier = /** @class */ (function () {
    function AuthorityKeyIdentifier(params) {
        if (params === void 0) { params = {}; }
        if (params) {
            Object.assign(this, params);
        }
    }
    return AuthorityKeyIdentifier;
}());
__decorate([
    AsnProp({ type: KeyIdentifier, context: 0, optional: true, implicit: true })
], AuthorityKeyIdentifier.prototype, "keyIdentifier", void 0);
__decorate([
    AsnProp({ type: GeneralName, context: 1, optional: true, implicit: true, repeated: "sequence" })
], AuthorityKeyIdentifier.prototype, "authorityCertIssuer", void 0);
__decorate([
    AsnProp({
        type: AsnPropTypes.Integer,
        context: 2,
        optional: true,
        implicit: true,
        converter: AsnIntegerArrayBufferConverter,
    })
], AuthorityKeyIdentifier.prototype, "authorityCertSerialNumber", void 0);
var id_ce_basicConstraints = id_ce + ".19";
var BasicConstraints = /** @class */ (function () {
    function BasicConstraints(params) {
        if (params === void 0) { params = {}; }
        this.cA = false;
        Object.assign(this, params);
    }
    return BasicConstraints;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Boolean, defaultValue: false })
], BasicConstraints.prototype, "cA", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, optional: true })
], BasicConstraints.prototype, "pathLenConstraint", void 0);
var GeneralNames_1;
var GeneralNames = GeneralNames_1 = /** @class */ (function (_super) {
    __extends(GeneralNames, _super);
    function GeneralNames(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, GeneralNames_1.prototype);
        return _this;
    }
    return GeneralNames;
}(AsnArray));
GeneralNames = GeneralNames_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: GeneralName })
], GeneralNames);
var CertificateIssuer_1;
var id_ce_certificateIssuer = id_ce + ".29";
var CertificateIssuer = CertificateIssuer_1 = /** @class */ (function (_super) {
    __extends(CertificateIssuer, _super);
    function CertificateIssuer(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, CertificateIssuer_1.prototype);
        return _this;
    }
    return CertificateIssuer;
}(GeneralNames));
CertificateIssuer = CertificateIssuer_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], CertificateIssuer);
var CertificatePolicies_1;
var id_ce_certificatePolicies = id_ce + ".32";
var DisplayText = /** @class */ (function () {
    function DisplayText(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    DisplayText.prototype.toString = function () {
        return this.ia5String || this.visibleString || this.bmpString || this.utf8String;
    };
    return DisplayText;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], DisplayText.prototype, "ia5String", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.VisibleString })
], DisplayText.prototype, "visibleString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BmpString })
], DisplayText.prototype, "bmpString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], DisplayText.prototype, "utf8String", void 0);
DisplayText = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], DisplayText);
var NoticeReference = /** @class */ (function () {
    function NoticeReference(params) {
        if (params === void 0) { params = {}; }
        this.organization = new DisplayText();
        this.noticeNumbers = [];
        Object.assign(this, params);
    }
    return NoticeReference;
}());
__decorate([
    AsnProp({ type: DisplayText })
], NoticeReference.prototype, "organization", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, repeated: "sequence" })
], NoticeReference.prototype, "noticeNumbers", void 0);
var UserNotice = /** @class */ (function () {
    function UserNotice(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return UserNotice;
}());
__decorate([
    AsnProp({ type: NoticeReference, optional: true })
], UserNotice.prototype, "noticeRef", void 0);
__decorate([
    AsnProp({ type: DisplayText, optional: true })
], UserNotice.prototype, "explicitText", void 0);
var Qualifier = /** @class */ (function () {
    function Qualifier(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return Qualifier;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], Qualifier.prototype, "cPSuri", void 0);
__decorate([
    AsnProp({ type: UserNotice })
], Qualifier.prototype, "userNotice", void 0);
Qualifier = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], Qualifier);
var PolicyQualifierInfo = /** @class */ (function () {
    function PolicyQualifierInfo(params) {
        if (params === void 0) { params = {}; }
        this.policyQualifierId = "";
        this.qualifier = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return PolicyQualifierInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyQualifierInfo.prototype, "policyQualifierId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], PolicyQualifierInfo.prototype, "qualifier", void 0);
var PolicyInformation = /** @class */ (function () {
    function PolicyInformation(params) {
        if (params === void 0) { params = {}; }
        this.policyIdentifier = "";
        Object.assign(this, params);
    }
    return PolicyInformation;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyInformation.prototype, "policyIdentifier", void 0);
__decorate([
    AsnProp({ type: PolicyQualifierInfo, repeated: "sequence", optional: true })
], PolicyInformation.prototype, "policyQualifiers", void 0);
var CertificatePolicies = CertificatePolicies_1 = /** @class */ (function (_super) {
    __extends(CertificatePolicies, _super);
    function CertificatePolicies(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, CertificatePolicies_1.prototype);
        return _this;
    }
    return CertificatePolicies;
}(AsnArray));
CertificatePolicies = CertificatePolicies_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: PolicyInformation })
], CertificatePolicies);
var CRLDistributionPoints_1;
var id_ce_cRLDistributionPoints = id_ce + ".31";
var ReasonFlags;
(function (ReasonFlags) {
    ReasonFlags[ReasonFlags["unused"] = 1] = "unused";
    ReasonFlags[ReasonFlags["keyCompromise"] = 2] = "keyCompromise";
    ReasonFlags[ReasonFlags["cACompromise"] = 4] = "cACompromise";
    ReasonFlags[ReasonFlags["affiliationChanged"] = 8] = "affiliationChanged";
    ReasonFlags[ReasonFlags["superseded"] = 16] = "superseded";
    ReasonFlags[ReasonFlags["cessationOfOperation"] = 32] = "cessationOfOperation";
    ReasonFlags[ReasonFlags["certificateHold"] = 64] = "certificateHold";
    ReasonFlags[ReasonFlags["privilegeWithdrawn"] = 128] = "privilegeWithdrawn";
    ReasonFlags[ReasonFlags["aACompromise"] = 256] = "aACompromise";
})(ReasonFlags || (ReasonFlags = {}));
var Reason = /** @class */ (function (_super) {
    __extends(Reason, _super);
    function Reason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reason.prototype.toJSON = function () {
        var res = [];
        var flags = this.toNumber();
        if (flags & ReasonFlags.aACompromise) {
            res.push("aACompromise");
        }
        if (flags & ReasonFlags.affiliationChanged) {
            res.push("affiliationChanged");
        }
        if (flags & ReasonFlags.cACompromise) {
            res.push("cACompromise");
        }
        if (flags & ReasonFlags.certificateHold) {
            res.push("certificateHold");
        }
        if (flags & ReasonFlags.cessationOfOperation) {
            res.push("cessationOfOperation");
        }
        if (flags & ReasonFlags.keyCompromise) {
            res.push("keyCompromise");
        }
        if (flags & ReasonFlags.privilegeWithdrawn) {
            res.push("privilegeWithdrawn");
        }
        if (flags & ReasonFlags.superseded) {
            res.push("superseded");
        }
        if (flags & ReasonFlags.unused) {
            res.push("unused");
        }
        return res;
    };
    Reason.prototype.toString = function () {
        return "[" + this.toJSON().join(", ") + "]";
    };
    return Reason;
}(BitString$1));
var DistributionPointName = /** @class */ (function () {
    function DistributionPointName(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return DistributionPointName;
}());
__decorate([
    AsnProp({ type: GeneralName, context: 0, repeated: "sequence", implicit: true })
], DistributionPointName.prototype, "fullName", void 0);
__decorate([
    AsnProp({ type: RelativeDistinguishedName, context: 1, implicit: true })
], DistributionPointName.prototype, "nameRelativeToCRLIssuer", void 0);
DistributionPointName = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], DistributionPointName);
var DistributionPoint = /** @class */ (function () {
    function DistributionPoint(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return DistributionPoint;
}());
__decorate([
    AsnProp({ type: DistributionPointName, context: 0, optional: true })
], DistributionPoint.prototype, "distributionPoint", void 0);
__decorate([
    AsnProp({ type: Reason, context: 1, optional: true, implicit: true })
], DistributionPoint.prototype, "reasons", void 0);
__decorate([
    AsnProp({ type: GeneralName, context: 2, optional: true, repeated: "sequence", implicit: true })
], DistributionPoint.prototype, "cRLIssuer", void 0);
var CRLDistributionPoints = CRLDistributionPoints_1 = /** @class */ (function (_super) {
    __extends(CRLDistributionPoints, _super);
    function CRLDistributionPoints(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, CRLDistributionPoints_1.prototype);
        return _this;
    }
    return CRLDistributionPoints;
}(AsnArray));
CRLDistributionPoints = CRLDistributionPoints_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: DistributionPoint })
], CRLDistributionPoints);
var id_ce_cRLReasons = id_ce + ".21";
var CRLReasons;
(function (CRLReasons) {
    CRLReasons[CRLReasons["unspecified"] = 0] = "unspecified";
    CRLReasons[CRLReasons["keyCompromise"] = 1] = "keyCompromise";
    CRLReasons[CRLReasons["cACompromise"] = 2] = "cACompromise";
    CRLReasons[CRLReasons["affiliationChanged"] = 3] = "affiliationChanged";
    CRLReasons[CRLReasons["superseded"] = 4] = "superseded";
    CRLReasons[CRLReasons["cessationOfOperation"] = 5] = "cessationOfOperation";
    CRLReasons[CRLReasons["certificateHold"] = 6] = "certificateHold";
    CRLReasons[CRLReasons["removeFromCRL"] = 8] = "removeFromCRL";
    CRLReasons[CRLReasons["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
    CRLReasons[CRLReasons["aACompromise"] = 10] = "aACompromise";
})(CRLReasons || (CRLReasons = {}));
var CRLReason = /** @class */ (function () {
    function CRLReason(reason) {
        if (reason === void 0) { reason = CRLReasons.unspecified; }
        this.reason = CRLReasons.unspecified;
        this.reason = reason;
    }
    CRLReason.prototype.toJSON = function () {
        return CRLReasons[this.reason];
    };
    CRLReason.prototype.toString = function () {
        return this.toJSON();
    };
    return CRLReason;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Enumerated })
], CRLReason.prototype, "reason", void 0);
CRLReason = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], CRLReason);
var ExtendedKeyUsage_1;
var id_ce_extKeyUsage = id_ce + ".37";
var ExtendedKeyUsage = ExtendedKeyUsage_1 = /** @class */ (function (_super) {
    __extends(ExtendedKeyUsage, _super);
    function ExtendedKeyUsage(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, ExtendedKeyUsage_1.prototype);
        return _this;
    }
    return ExtendedKeyUsage;
}(AsnArray));
ExtendedKeyUsage = ExtendedKeyUsage_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: AsnPropTypes.ObjectIdentifier })
], ExtendedKeyUsage);
var id_ce_inhibitAnyPolicy = id_ce + ".54";
var InhibitAnyPolicy = /** @class */ (function () {
    function InhibitAnyPolicy(value) {
        if (value === void 0) { value = new ArrayBuffer(0); }
        this.value = value;
    }
    return InhibitAnyPolicy;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], InhibitAnyPolicy.prototype, "value", void 0);
InhibitAnyPolicy = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], InhibitAnyPolicy);
var id_ce_invalidityDate = id_ce + ".24";
var InvalidityDate = /** @class */ (function () {
    function InvalidityDate(value) {
        this.value = new Date();
        if (value) {
            this.value = value;
        }
    }
    return InvalidityDate;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralizedTime })
], InvalidityDate.prototype, "value", void 0);
InvalidityDate = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], InvalidityDate);
var IssueAlternativeName_1;
var id_ce_issuerAltName = id_ce + ".18";
var IssueAlternativeName = IssueAlternativeName_1 = /** @class */ (function (_super) {
    __extends(IssueAlternativeName, _super);
    function IssueAlternativeName(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, IssueAlternativeName_1.prototype);
        return _this;
    }
    return IssueAlternativeName;
}(GeneralNames));
IssueAlternativeName = IssueAlternativeName_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], IssueAlternativeName);
var id_ce_keyUsage = id_ce + ".15";
var KeyUsageFlags;
(function (KeyUsageFlags) {
    KeyUsageFlags[KeyUsageFlags["digitalSignature"] = 1] = "digitalSignature";
    KeyUsageFlags[KeyUsageFlags["nonRepudiation"] = 2] = "nonRepudiation";
    KeyUsageFlags[KeyUsageFlags["keyEncipherment"] = 4] = "keyEncipherment";
    KeyUsageFlags[KeyUsageFlags["dataEncipherment"] = 8] = "dataEncipherment";
    KeyUsageFlags[KeyUsageFlags["keyAgreement"] = 16] = "keyAgreement";
    KeyUsageFlags[KeyUsageFlags["keyCertSign"] = 32] = "keyCertSign";
    KeyUsageFlags[KeyUsageFlags["cRLSign"] = 64] = "cRLSign";
    KeyUsageFlags[KeyUsageFlags["encipherOnly"] = 128] = "encipherOnly";
    KeyUsageFlags[KeyUsageFlags["decipherOnly"] = 256] = "decipherOnly";
})(KeyUsageFlags || (KeyUsageFlags = {}));
var KeyUsage = /** @class */ (function (_super) {
    __extends(KeyUsage, _super);
    function KeyUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyUsage.prototype.toJSON = function () {
        var flag = this.toNumber();
        var res = [];
        if (flag & KeyUsageFlags.cRLSign) {
            res.push("crlSign");
        }
        if (flag & KeyUsageFlags.dataEncipherment) {
            res.push("dataEncipherment");
        }
        if (flag & KeyUsageFlags.decipherOnly) {
            res.push("decipherOnly");
        }
        if (flag & KeyUsageFlags.digitalSignature) {
            res.push("digitalSignature");
        }
        if (flag & KeyUsageFlags.encipherOnly) {
            res.push("encipherOnly");
        }
        if (flag & KeyUsageFlags.keyAgreement) {
            res.push("keyAgreement");
        }
        if (flag & KeyUsageFlags.keyCertSign) {
            res.push("keyCertSign");
        }
        if (flag & KeyUsageFlags.keyEncipherment) {
            res.push("keyEncipherment");
        }
        if (flag & KeyUsageFlags.nonRepudiation) {
            res.push("nonRepudiation");
        }
        return res;
    };
    KeyUsage.prototype.toString = function () {
        return "[" + this.toJSON().join(", ") + "]";
    };
    return KeyUsage;
}(BitString$1));
var GeneralSubtrees_1;
var id_ce_nameConstraints = id_ce + ".30";
var GeneralSubtree = /** @class */ (function () {
    function GeneralSubtree(params) {
        if (params === void 0) { params = {}; }
        this.base = new GeneralName();
        this.minimum = 0;
        Object.assign(this, params);
    }
    return GeneralSubtree;
}());
__decorate([
    AsnProp({ type: GeneralName })
], GeneralSubtree.prototype, "base", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, defaultValue: 0, implicit: true })
], GeneralSubtree.prototype, "minimum", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 1, optional: true, implicit: true })
], GeneralSubtree.prototype, "maximum", void 0);
var GeneralSubtrees = GeneralSubtrees_1 = /** @class */ (function (_super) {
    __extends(GeneralSubtrees, _super);
    function GeneralSubtrees(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, GeneralSubtrees_1.prototype);
        return _this;
    }
    return GeneralSubtrees;
}(AsnArray));
GeneralSubtrees = GeneralSubtrees_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: GeneralSubtree })
], GeneralSubtrees);
var NameConstraints = /** @class */ (function () {
    function NameConstraints(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return NameConstraints;
}());
__decorate([
    AsnProp({ type: GeneralSubtrees, context: 0, optional: true, implicit: true })
], NameConstraints.prototype, "permittedSubtrees", void 0);
__decorate([
    AsnProp({ type: GeneralSubtrees, context: 1, optional: true, implicit: true })
], NameConstraints.prototype, "excludedSubtrees", void 0);
var id_ce_policyConstraints = id_ce + ".36";
var PolicyConstraints = /** @class */ (function () {
    function PolicyConstraints(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return PolicyConstraints;
}());
__decorate([
    AsnProp({
        type: AsnPropTypes.Integer, context: 0, implicit: true, optional: true,
        converter: AsnIntegerArrayBufferConverter,
    })
], PolicyConstraints.prototype, "requireExplicitPolicy", void 0);
__decorate([
    AsnProp({
        type: AsnPropTypes.Integer, context: 1, implicit: true, optional: true,
        converter: AsnIntegerArrayBufferConverter,
    })
], PolicyConstraints.prototype, "inhibitPolicyMapping", void 0);
var id_ce_policyMappings = id_ce + ".33";
var PolicyMappings = /** @class */ (function () {
    function PolicyMappings(params) {
        if (params === void 0) { params = {}; }
        this.issuerDomainPolicy = "";
        this.subjectDomainPolicy = "";
        Object.assign(this, params);
    }
    return PolicyMappings;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyMappings.prototype, "issuerDomainPolicy", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyMappings.prototype, "subjectDomainPolicy", void 0);
var SubjectAlternativeName_1;
var id_ce_subjectAltName = id_ce + ".17";
var SubjectAlternativeName = SubjectAlternativeName_1 = /** @class */ (function (_super) {
    __extends(SubjectAlternativeName, _super);
    function SubjectAlternativeName(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, SubjectAlternativeName_1.prototype);
        return _this;
    }
    return SubjectAlternativeName;
}(GeneralNames));
SubjectAlternativeName = SubjectAlternativeName_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], SubjectAlternativeName);
var Attribute = /** @class */ (function () {
    function Attribute(params) {
        if (params === void 0) { params = {}; }
        this.type = "";
        this.values = [];
        Object.assign(this, params);
    }
    return Attribute;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Attribute.prototype, "type", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, repeated: "set" })
], Attribute.prototype, "values", void 0);
var SubjectDirectoryAttributes_1;
var id_ce_subjectDirectoryAttributes = id_ce + ".9";
var SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = /** @class */ (function (_super) {
    __extends(SubjectDirectoryAttributes, _super);
    function SubjectDirectoryAttributes(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, SubjectDirectoryAttributes_1.prototype);
        return _this;
    }
    return SubjectDirectoryAttributes;
}(AsnArray));
SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: Attribute })
], SubjectDirectoryAttributes);
var id_ce_subjectKeyIdentifier = id_ce + ".14";
var SubjectKeyIdentifier = /** @class */ (function (_super) {
    __extends(SubjectKeyIdentifier, _super);
    function SubjectKeyIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubjectKeyIdentifier;
}(KeyIdentifier));
var id_ce_privateKeyUsagePeriod = id_ce + ".16";
var PrivateKeyUsagePeriod = /** @class */ (function () {
    function PrivateKeyUsagePeriod(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return PrivateKeyUsagePeriod;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralizedTime, context: 0, implicit: true, optional: true })
], PrivateKeyUsagePeriod.prototype, "notBefore", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralizedTime, context: 1, implicit: true, optional: true, })
], PrivateKeyUsagePeriod.prototype, "notAfter", void 0);
var id_entrust_entrustVersInfo = "1.2.840.113533.7.65.0";
var EntrustInfoFlags;
(function (EntrustInfoFlags) {
    EntrustInfoFlags[EntrustInfoFlags["keyUpdateAllowed"] = 1] = "keyUpdateAllowed";
    EntrustInfoFlags[EntrustInfoFlags["newExtensions"] = 2] = "newExtensions";
    EntrustInfoFlags[EntrustInfoFlags["pKIXCertificate"] = 4] = "pKIXCertificate";
})(EntrustInfoFlags || (EntrustInfoFlags = {}));
var EntrustInfo = /** @class */ (function (_super) {
    __extends(EntrustInfo, _super);
    function EntrustInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntrustInfo.prototype.toJSON = function () {
        var res = [];
        var flags = this.toNumber();
        if (flags & EntrustInfoFlags.pKIXCertificate) {
            res.push("pKIXCertificate");
        }
        if (flags & EntrustInfoFlags.newExtensions) {
            res.push("newExtensions");
        }
        if (flags & EntrustInfoFlags.keyUpdateAllowed) {
            res.push("keyUpdateAllowed");
        }
        return res;
    };
    EntrustInfo.prototype.toString = function () {
        return "[" + this.toJSON().join(", ") + "]";
    };
    return EntrustInfo;
}(BitString$1));
var EntrustVersionInfo = /** @class */ (function () {
    function EntrustVersionInfo(params) {
        if (params === void 0) { params = {}; }
        this.entrustVers = '';
        this.entrustInfoFlags = new EntrustInfo();
        Object.assign(this, params);
    }
    return EntrustVersionInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralString })
], EntrustVersionInfo.prototype, "entrustVers", void 0);
__decorate([
    AsnProp({ type: EntrustInfo })
], EntrustVersionInfo.prototype, "entrustInfoFlags", void 0);
var AlgorithmIdentifier = /** @class */ (function () {
    function AlgorithmIdentifier(params) {
        if (params === void 0) { params = {}; }
        this.algorithm = "";
        Object.assign(this, params);
    }
    return AlgorithmIdentifier;
}());
__decorate([
    AsnProp({
        type: AsnPropTypes.ObjectIdentifier,
    })
], AlgorithmIdentifier.prototype, "algorithm", void 0);
__decorate([
    AsnProp({
        type: AsnPropTypes.Any,
        optional: true,
    })
], AlgorithmIdentifier.prototype, "parameters", void 0);
var SubjectPublicKeyInfo = /** @class */ (function () {
    function SubjectPublicKeyInfo(params) {
        if (params === void 0) { params = {}; }
        this.algorithm = new AlgorithmIdentifier();
        this.subjectPublicKey = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return SubjectPublicKeyInfo;
}());
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], SubjectPublicKeyInfo.prototype, "algorithm", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString })
], SubjectPublicKeyInfo.prototype, "subjectPublicKey", void 0);
var Time = /** @class */ (function () {
    function Time(time) {
        if (time) {
            if (typeof time === "string" || typeof time === "number") {
                this.utcTime = new Date(time);
            }
            else if (time instanceof Date) {
                this.utcTime = time;
            }
            else {
                Object.assign(this, time);
            }
        }
    }
    Time.prototype.getTime = function () {
        var time = this.utcTime || this.generalTime;
        if (!time) {
            throw new Error("Cannot get time from CHOICE object");
        }
        return time;
    };
    return Time;
}());
__decorate([
    AsnProp({
        type: AsnPropTypes.UTCTime,
    })
], Time.prototype, "utcTime", void 0);
__decorate([
    AsnProp({
        type: AsnPropTypes.GeneralizedTime,
    })
], Time.prototype, "generalTime", void 0);
Time = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], Time);
var Validity = /** @class */ (function () {
    function Validity(params) {
        this.notBefore = new Time(new Date());
        this.notAfter = new Time(new Date());
        if (params) {
            this.notBefore = new Time(params.notBefore);
            this.notAfter = new Time(params.notAfter);
        }
    }
    return Validity;
}());
__decorate([
    AsnProp({ type: Time })
], Validity.prototype, "notBefore", void 0);
__decorate([
    AsnProp({ type: Time })
], Validity.prototype, "notAfter", void 0);
var Extensions_1;
var Extension = /** @class */ (function () {
    function Extension(params) {
        if (params === void 0) { params = {}; }
        this.extnID = "";
        this.critical = Extension.CRITICAL;
        this.extnValue = new OctetString$1();
        Object.assign(this, params);
    }
    return Extension;
}());
Extension.CRITICAL = false;
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Extension.prototype, "extnID", void 0);
__decorate([
    AsnProp({
        type: AsnPropTypes.Boolean,
        defaultValue: Extension.CRITICAL,
    })
], Extension.prototype, "critical", void 0);
__decorate([
    AsnProp({ type: OctetString$1 })
], Extension.prototype, "extnValue", void 0);
var Extensions = Extensions_1 = /** @class */ (function (_super) {
    __extends(Extensions, _super);
    function Extensions(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Extensions_1.prototype);
        return _this;
    }
    return Extensions;
}(AsnArray));
Extensions = Extensions_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: Extension })
], Extensions);
var Version;
(function (Version) {
    Version[Version["v1"] = 0] = "v1";
    Version[Version["v2"] = 1] = "v2";
    Version[Version["v3"] = 2] = "v3";
})(Version || (Version = {}));
var TBSCertificate = /** @class */ (function () {
    function TBSCertificate(params) {
        if (params === void 0) { params = {}; }
        this.version = Version.v1;
        this.serialNumber = new ArrayBuffer(0);
        this.signature = new AlgorithmIdentifier();
        this.issuer = new Name();
        this.validity = new Validity();
        this.subject = new Name();
        this.subjectPublicKeyInfo = new SubjectPublicKeyInfo();
        Object.assign(this, params);
    }
    return TBSCertificate;
}());
__decorate([
    AsnProp({
        type: AsnPropTypes.Integer,
        context: 0,
        defaultValue: Version.v1,
    })
], TBSCertificate.prototype, "version", void 0);
__decorate([
    AsnProp({
        type: AsnPropTypes.Integer,
        converter: AsnIntegerArrayBufferConverter,
    })
], TBSCertificate.prototype, "serialNumber", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], TBSCertificate.prototype, "signature", void 0);
__decorate([
    AsnProp({ type: Name })
], TBSCertificate.prototype, "issuer", void 0);
__decorate([
    AsnProp({ type: Validity })
], TBSCertificate.prototype, "validity", void 0);
__decorate([
    AsnProp({ type: Name })
], TBSCertificate.prototype, "subject", void 0);
__decorate([
    AsnProp({ type: SubjectPublicKeyInfo })
], TBSCertificate.prototype, "subjectPublicKeyInfo", void 0);
__decorate([
    AsnProp({
        type: AsnPropTypes.BitString,
        context: 1,
        implicit: true,
        optional: true,
    })
], TBSCertificate.prototype, "issuerUniqueID", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString, context: 2, implicit: true, optional: true })
], TBSCertificate.prototype, "subjectUniqueID", void 0);
__decorate([
    AsnProp({ type: Extensions, context: 3, optional: true })
], TBSCertificate.prototype, "extensions", void 0);
var Certificate = /** @class */ (function () {
    function Certificate(params) {
        if (params === void 0) { params = {}; }
        this.tbsCertificate = new TBSCertificate();
        this.signatureAlgorithm = new AlgorithmIdentifier();
        this.signatureValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return Certificate;
}());
__decorate([
    AsnProp({ type: TBSCertificate })
], Certificate.prototype, "tbsCertificate", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], Certificate.prototype, "signatureAlgorithm", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString })
], Certificate.prototype, "signatureValue", void 0);
var RevokedCertificate = /** @class */ (function () {
    function RevokedCertificate(params) {
        if (params === void 0) { params = {}; }
        this.userCertificate = new ArrayBuffer(0);
        this.revocationDate = new Time();
        Object.assign(this, params);
    }
    return RevokedCertificate;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RevokedCertificate.prototype, "userCertificate", void 0);
__decorate([
    AsnProp({ type: Time })
], RevokedCertificate.prototype, "revocationDate", void 0);
__decorate([
    AsnProp({ type: Extension, optional: true, repeated: "sequence" })
], RevokedCertificate.prototype, "crlEntryExtensions", void 0);
var TBSCertList = /** @class */ (function () {
    function TBSCertList(params) {
        if (params === void 0) { params = {}; }
        this.signature = new AlgorithmIdentifier();
        this.issuer = new Name();
        this.thisUpdate = new Time();
        Object.assign(this, params);
    }
    return TBSCertList;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, optional: true })
], TBSCertList.prototype, "version", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], TBSCertList.prototype, "signature", void 0);
__decorate([
    AsnProp({ type: Name })
], TBSCertList.prototype, "issuer", void 0);
__decorate([
    AsnProp({ type: Time })
], TBSCertList.prototype, "thisUpdate", void 0);
__decorate([
    AsnProp({ type: Time, optional: true })
], TBSCertList.prototype, "nextUpdate", void 0);
__decorate([
    AsnProp({ type: RevokedCertificate, repeated: "sequence", optional: true })
], TBSCertList.prototype, "revokedCertificates", void 0);
__decorate([
    AsnProp({ type: Extension, optional: true, context: 0, repeated: "sequence" })
], TBSCertList.prototype, "crlExtensions", void 0);
var CertificateList = /** @class */ (function () {
    function CertificateList(params) {
        if (params === void 0) { params = {}; }
        this.tbsCertList = new TBSCertList();
        this.signatureAlgorithm = new AlgorithmIdentifier();
        this.signature = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return CertificateList;
}());
__decorate([
    AsnProp({ type: TBSCertList })
], CertificateList.prototype, "tbsCertList", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], CertificateList.prototype, "signatureAlgorithm", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString })
], CertificateList.prototype, "signature", void 0);
var id_pkcs_1 = "1.2.840.113549.1.1";
var id_rsaEncryption = id_pkcs_1 + ".1";
var id_RSAES_OAEP = id_pkcs_1 + ".7";
var id_pSpecified = id_pkcs_1 + ".9";
var id_RSASSA_PSS = id_pkcs_1 + ".10";
var id_md2WithRSAEncryption = id_pkcs_1 + ".2";
var id_md5WithRSAEncryption = id_pkcs_1 + ".4";
var id_sha1WithRSAEncryption = id_pkcs_1 + ".5";
var id_sha384WithRSAEncryption = id_pkcs_1 + ".12";
var id_sha512WithRSAEncryption = id_pkcs_1 + ".13";
var id_sha512_224WithRSAEncryption = id_pkcs_1 + ".15";
var id_sha512_256WithRSAEncryption = id_pkcs_1 + ".16";
var id_sha1 = "1.3.14.3.2.26";
var id_sha224 = "2.16.840.1.101.3.4.2.4";
var id_sha256 = "2.16.840.1.101.3.4.2.1";
var id_sha384 = "2.16.840.1.101.3.4.2.2";
var id_sha512 = "2.16.840.1.101.3.4.2.3";
var id_sha512_224 = "2.16.840.1.101.3.4.2.5";
var id_sha512_256 = "2.16.840.1.101.3.4.2.6";
var id_md2 = "1.2.840.113549.2.2";
var id_md5 = "1.2.840.113549.2.5";
var id_mgf1 = id_pkcs_1 + ".8";
function create(algorithm) {
    return new AlgorithmIdentifier({ algorithm: algorithm, parameters: null });
}
var md2 = create(id_md2);
var md4 = create(id_md5);
var sha1 = create(id_sha1);
var sha224 = create(id_sha224);
var sha256 = create(id_sha256);
var sha384 = create(id_sha384);
var sha512 = create(id_sha512);
var sha512_224 = create(id_sha512_224);
var sha512_256 = create(id_sha512_256);
var mgf1SHA1 = new AlgorithmIdentifier({
    algorithm: id_mgf1,
    parameters: AsnConvert.serialize(sha1),
});
var pSpecifiedEmpty = new AlgorithmIdentifier({
    algorithm: id_pSpecified,
    parameters: AsnConvert.serialize(AsnOctetStringConverter.toASN(new Uint8Array([0xda, 0x39, 0xa3, 0xee, 0x5e, 0x6b, 0x4b, 0x0d, 0x32, 0x55, 0xbf, 0xef, 0x95, 0x60, 0x18, 0x90, 0xaf, 0xd8, 0x07, 0x09]).buffer)),
});
var rsaEncryption = create(id_rsaEncryption);
var md2WithRSAEncryption = create(id_md2WithRSAEncryption);
var md5WithRSAEncryption = create(id_md5WithRSAEncryption);
var sha1WithRSAEncryption = create(id_sha1WithRSAEncryption);
var sha224WithRSAEncryption = create(id_sha512_224WithRSAEncryption);
var sha256WithRSAEncryption = create(id_sha512_256WithRSAEncryption);
var sha384WithRSAEncryption = create(id_sha384WithRSAEncryption);
var sha512WithRSAEncryption = create(id_sha512WithRSAEncryption);
var sha512_224WithRSAEncryption = create(id_sha512_224WithRSAEncryption);
var sha512_256WithRSAEncryption = create(id_sha512_256WithRSAEncryption);
var RsaEsOaepParams = /** @class */ (function () {
    function RsaEsOaepParams(params) {
        if (params === void 0) { params = {}; }
        this.hashAlgorithm = new AlgorithmIdentifier(sha1);
        this.maskGenAlgorithm = new AlgorithmIdentifier({
            algorithm: id_mgf1,
            parameters: AsnConvert.serialize(sha1),
        });
        this.pSourceAlgorithm = new AlgorithmIdentifier(pSpecifiedEmpty);
        Object.assign(this, params);
    }
    return RsaEsOaepParams;
}());
__decorate([
    AsnProp({ type: AlgorithmIdentifier, context: 0, defaultValue: sha1 })
], RsaEsOaepParams.prototype, "hashAlgorithm", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier, context: 1, defaultValue: mgf1SHA1 })
], RsaEsOaepParams.prototype, "maskGenAlgorithm", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier, context: 2, defaultValue: pSpecifiedEmpty })
], RsaEsOaepParams.prototype, "pSourceAlgorithm", void 0);
var RSAES_OAEP = new AlgorithmIdentifier({
    algorithm: id_RSAES_OAEP,
    parameters: AsnConvert.serialize(new RsaEsOaepParams()),
});
var RsaSaPssParams = /** @class */ (function () {
    function RsaSaPssParams(params) {
        if (params === void 0) { params = {}; }
        this.hashAlgorithm = new AlgorithmIdentifier(sha1);
        this.maskGenAlgorithm = new AlgorithmIdentifier({
            algorithm: id_mgf1,
            parameters: AsnConvert.serialize(sha1),
        });
        this.saltLength = 20;
        this.trailerField = 1;
        Object.assign(this, params);
    }
    return RsaSaPssParams;
}());
__decorate([
    AsnProp({ type: AlgorithmIdentifier, context: 0, defaultValue: sha1 })
], RsaSaPssParams.prototype, "hashAlgorithm", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier, context: 1, defaultValue: mgf1SHA1 })
], RsaSaPssParams.prototype, "maskGenAlgorithm", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 2, defaultValue: 20 })
], RsaSaPssParams.prototype, "saltLength", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 3, defaultValue: 1 })
], RsaSaPssParams.prototype, "trailerField", void 0);
var RSASSA_PSS = new AlgorithmIdentifier({
    algorithm: id_RSASSA_PSS,
    parameters: AsnConvert.serialize(new RsaSaPssParams()),
});
var DigestInfo = /** @class */ (function () {
    function DigestInfo(params) {
        if (params === void 0) { params = {}; }
        this.digestAlgorithm = new AlgorithmIdentifier();
        this.digest = new OctetString$1();
        Object.assign(this, params);
    }
    return DigestInfo;
}());
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], DigestInfo.prototype, "digestAlgorithm", void 0);
__decorate([
    AsnProp({ type: OctetString$1 })
], DigestInfo.prototype, "digest", void 0);
var OtherPrimeInfos_1;
var OtherPrimeInfo = /** @class */ (function () {
    function OtherPrimeInfo(params) {
        if (params === void 0) { params = {}; }
        this.prime = new ArrayBuffer(0);
        this.exponent = new ArrayBuffer(0);
        this.coefficient = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return OtherPrimeInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "prime", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "exponent", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "coefficient", void 0);
var OtherPrimeInfos = OtherPrimeInfos_1 = /** @class */ (function (_super) {
    __extends(OtherPrimeInfos, _super);
    function OtherPrimeInfos(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, OtherPrimeInfos_1.prototype);
        return _this;
    }
    return OtherPrimeInfos;
}(AsnArray));
OtherPrimeInfos = OtherPrimeInfos_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: OtherPrimeInfo })
], OtherPrimeInfos);
var RSAPrivateKey = /** @class */ (function () {
    function RSAPrivateKey(params) {
        if (params === void 0) { params = {}; }
        this.version = 0;
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
        this.privateExponent = new ArrayBuffer(0);
        this.prime1 = new ArrayBuffer(0);
        this.prime2 = new ArrayBuffer(0);
        this.exponent1 = new ArrayBuffer(0);
        this.exponent2 = new ArrayBuffer(0);
        this.coefficient = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return RSAPrivateKey;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], RSAPrivateKey.prototype, "version", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "modulus", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "publicExponent", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "privateExponent", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "prime1", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "prime2", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "exponent1", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "exponent2", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "coefficient", void 0);
__decorate([
    AsnProp({ type: OtherPrimeInfos, optional: true })
], RSAPrivateKey.prototype, "otherPrimeInfos", void 0);
var RSAPublicKey = /** @class */ (function () {
    function RSAPublicKey(params) {
        if (params === void 0) { params = {}; }
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return RSAPublicKey;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPublicKey.prototype, "modulus", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPublicKey.prototype, "publicExponent", void 0);
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-useless-escape */
var isHex = function (value) { return (/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
    .test(value)); };
var isPem = function (value) { return (/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/
    .test(value)); };
var isX509Pem = function (value) { return (/-----BEGIN CERTIFICATE-----([A-Za-z0-9+\/=\s]+)-----END CERTIFICATE-----/
    .test(value)); };
var isPkcs10Pem = function (value) { return (/-----BEGIN CERTIFICATE REQUEST-----([A-Za-z0-9+\/=\s]+)-----END CERTIFICATE REQUEST-----/
    .test(value)); };
var isX509AttributePem = function (value) { return (/-----BEGIN ATTRIBUTE CERTIFICATE-----([A-Za-z0-9+\/=\s]+)-----END ATTRIBUTE CERTIFICATE-----/
    .test(value)); };
var isBase64 = function (value) {
    try {
        window.atob(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OIDsShort = {
    '2.5.4.3': 'CN',
    '2.5.4.6': 'C',
    '0.9.2342.19200300.100.1.25': 'DC',
    '1.2.840.113549.1.9.1': 'E',
    '2.5.4.42': 'G',
    '2.5.4.43': 'I',
    '2.5.4.7': 'L',
    '2.5.4.10': 'O',
    '2.5.4.11': 'OU',
    '2.5.4.8': 'ST',
    '2.5.4.4': 'SN',
    '2.5.4.12': 'T',
    '2.5.4.15': 'businessCategory',
    '1.3.6.1.4.1.311.60.2.1.3': 'jurisdictionCountry',
    '2.5.4.5': 'serialNumber',
    '2.5.4.97': 'OI',
};
var OIDs = {
    '0.2.262.1.10': 'Telesec',
    '0.2.262.1.10.0': 'Extension',
    '0.2.262.1.10.1': 'Mechanism',
    '0.2.262.1.10.1.0': 'Authentication',
    '0.2.262.1.10.1.0.1': 'Password Authentication',
    '0.2.262.1.10.1.0.2': 'Protected Password Authentication',
    '0.2.262.1.10.1.0.3': 'One Way x509 Authentication',
    '0.2.262.1.10.1.0.4': 'Two Way x509 Authentication',
    '0.2.262.1.10.1.0.5': 'Three Way x509 Authentication',
    '0.2.262.1.10.1.0.6': 'One Way IS O9798 Authentication',
    '0.2.262.1.10.1.0.7': 'Two Way IS O9798 Authentication',
    '0.2.262.1.10.1.0.8': 'Telekom Authentication',
    '0.2.262.1.10.1.1': 'Signature',
    '0.2.262.1.10.1.1.1': 'MD4 with RSA And IS O9697',
    '0.2.262.1.10.1.1.2': 'MD4 with RSA And Telesec Signature Standard',
    '0.2.262.1.10.1.1.3': 'MD5 with RSA And IS O9697',
    '0.2.262.1.10.1.1.4': 'MD5 with RSA And Telesec Signature Standard',
    '0.2.262.1.10.1.1.5': 'Ripemd160 with RSA And Telekom Signature Standard',
    '0.2.262.1.10.1.1.9': 'HBCI RSA Signature',
    '0.2.262.1.10.1.2': 'Encryption',
    '0.2.262.1.10.1.2.0': 'None',
    '0.2.262.1.10.1.2.1': 'RSA Telesec',
    '0.2.262.1.10.1.2.2': 'DES',
    '0.2.262.1.10.1.2.2.1': 'DES ECB',
    '0.2.262.1.10.1.2.2.2': 'DES CBC',
    '0.2.262.1.10.1.2.2.3': 'DES OFB',
    '0.2.262.1.10.1.2.2.4': 'DES CFB8',
    '0.2.262.1.10.1.2.2.5': 'DES CFB64',
    '0.2.262.1.10.1.2.3': 'DES3',
    '0.2.262.1.10.1.2.3.1': 'DES3 ECB',
    '0.2.262.1.10.1.2.3.2': 'DES3 CBC',
    '0.2.262.1.10.1.2.3.3': 'DES3 OFB',
    '0.2.262.1.10.1.2.3.4': 'DES3 CFB8',
    '0.2.262.1.10.1.2.3.5': 'DES3 CFB64',
    '0.2.262.1.10.1.2.4': 'Magenta',
    '0.2.262.1.10.1.2.5': 'Idea',
    '0.2.262.1.10.1.2.5.1': 'Idea ECB',
    '0.2.262.1.10.1.2.5.2': 'Idea CBC',
    '0.2.262.1.10.1.2.5.3': 'Idea OFB',
    '0.2.262.1.10.1.2.5.4': 'Idea CFB8',
    '0.2.262.1.10.1.2.5.5': 'Idea CFB64',
    '0.2.262.1.10.1.3': 'One Way Function',
    '0.2.262.1.10.1.3.1': 'MD4',
    '0.2.262.1.10.1.3.2': 'MD5',
    '0.2.262.1.10.1.3.3': 'SQ ModNx509',
    '0.2.262.1.10.1.3.4': 'SQ ModNISO',
    '0.2.262.1.10.1.3.5': 'Ripemd128',
    '0.2.262.1.10.1.3.6': 'Hash Using Block Cipher',
    '0.2.262.1.10.1.3.7': 'Mac',
    '0.2.262.1.10.1.3.8': 'Ripemd160',
    '0.2.262.1.10.1.4': 'Fec Function',
    '0.2.262.1.10.1.4.1': 'Reed Solomon',
    '0.2.262.1.10.2': 'Module',
    '0.2.262.1.10.2.0': 'Algorithms',
    '0.2.262.1.10.2.1': 'Attribute Types',
    '0.2.262.1.10.2.2': 'Certificate Types',
    '0.2.262.1.10.2.3': 'Message Types',
    '0.2.262.1.10.2.4': 'Pl Protocol',
    '0.2.262.1.10.2.5': 'Sme And Components Of Sme',
    '0.2.262.1.10.2.6': 'Fec',
    '0.2.262.1.10.2.7': 'Useful Definitions',
    '0.2.262.1.10.2.8': 'Stefiles',
    '0.2.262.1.10.2.9': 'Sadmib',
    '0.2.262.1.10.2.10': 'Electronic Order',
    '0.2.262.1.10.2.11': 'Telesec Ttp Asymmetric Application',
    '0.2.262.1.10.2.12': 'Telesec Ttp Basis Application',
    '0.2.262.1.10.2.13': 'Telesec Ttp Messages',
    '0.2.262.1.10.2.14': 'Telesec Ttp Time Stamp Application',
    '0.2.262.1.10.3': 'Object Class',
    '0.2.262.1.10.3.0': 'Telesec Other Name',
    '0.2.262.1.10.3.1': 'Directory',
    '0.2.262.1.10.3.2': 'Directory Type',
    '0.2.262.1.10.3.3': 'Directory Group',
    '0.2.262.1.10.3.4': 'Directory User',
    '0.2.262.1.10.3.5': 'Symmetric Key Entry',
    '0.2.262.1.10.4': 'Package',
    '0.2.262.1.10.5': 'Parameter',
    '0.2.262.1.10.6': 'Name Binding',
    '0.2.262.1.10.7': 'Attribute',
    '0.2.262.1.10.7.0': 'Application Group Identifier',
    '0.2.262.1.10.7.1': 'Certificate Type',
    '0.2.262.1.10.7.2': 'Telesec Certificate',
    '0.2.262.1.10.7.3': 'Certificate Number',
    '0.2.262.1.10.7.4': 'Certificate Revocation List',
    '0.2.262.1.10.7.5': 'Creation Date',
    '0.2.262.1.10.7.6': 'Issuer',
    '0.2.262.1.10.7.7': 'Naming Authority',
    '0.2.262.1.10.7.8': 'Public Key Directory',
    '0.2.262.1.10.7.9': 'Security Domain',
    '0.2.262.1.10.7.10': 'Subject',
    '0.2.262.1.10.7.11': 'Time Of Revocation',
    '0.2.262.1.10.7.12': 'User Group Reference',
    '0.2.262.1.10.7.13': 'alidity',
    '0.2.262.1.10.7.14': 'Zert93',
    '0.2.262.1.10.7.15': 'Security Mess Env',
    '0.2.262.1.10.7.16': 'Anonymized Public Key Directory',
    '0.2.262.1.10.7.17': 'Telesec Given Name',
    '0.2.262.1.10.7.18': 'Name Additions',
    '0.2.262.1.10.7.19': 'Telesec Postal Code',
    '0.2.262.1.10.7.20': 'Name Distinguisher',
    '0.2.262.1.10.7.21': 'Telesec Certificate List',
    '0.2.262.1.10.7.22': 'Teletrust Certificate List',
    '0.2.262.1.10.7.23': 'x509 Certificate List',
    '0.2.262.1.10.7.24': 'Time Of Issue',
    '0.2.262.1.10.7.25': 'Physical Card Number',
    '0.2.262.1.10.7.26': 'File Type',
    '0.2.262.1.10.7.27': 'Ctl File Is Archive',
    '0.2.262.1.10.7.28': 'Email Address',
    '0.2.262.1.10.7.29': 'Certificate Template List',
    '0.2.262.1.10.7.30': 'Directory Name',
    '0.2.262.1.10.7.31': 'Directory Type Name',
    '0.2.262.1.10.7.32': 'Directory Group Name',
    '0.2.262.1.10.7.33': 'Directory User Name',
    '0.2.262.1.10.7.34': 'Revocation Flag',
    '0.2.262.1.10.7.35': 'Symmetric Key Entry Name',
    '0.2.262.1.10.7.36': 'Gl Number',
    '0.2.262.1.10.7.37': 'Go Number',
    '0.2.262.1.10.7.38': 'G Key Data',
    '0.2.262.1.10.7.39': 'Z Key Data',
    '0.2.262.1.10.7.40': 'Kt Key Data',
    '0.2.262.1.10.7.41': 'Kt Key Number',
    '0.2.262.1.10.7.51': 'Time Of Revocation Gen',
    '0.2.262.1.10.7.52': 'Liability Text',
    '0.2.262.1.10.8': 'Attribute Group',
    '0.2.262.1.10.9': 'Action',
    '0.2.262.1.10.10': 'Notification',
    '0.2.262.1.10.11': 'Snmp-mibs',
    '0.2.262.1.10.11.1': 'Security Application',
    '0.2.262.1.10.12': 'Cert And Crl Extension Definitions',
    '0.2.262.1.10.12.0': 'Liability Limitation Flag',
    '0.2.262.1.10.12.1': 'Telesec Cert Id Ext',
    '0.2.262.1.10.12.2': 'Telesec policy Identifier',
    '0.2.262.1.10.12.3': 'Telesec Policy Qualifier I D',
    '0.2.262.1.10.12.4': 'Telesec CRL Filtered Ext',
    '0.2.262.1.10.12.5': 'Telesec CRL Filter Ext',
    '0.2.262.1.10.12.6': 'Telesec Naming Authority Ext',
    '0.4.0.127.0.7': 'Bsi',
    '0.4.0.127.0.7.1': 'Bsi Ecc',
    '0.4.0.127.0.7.1.1': 'Bsifield Type',
    '0.4.0.127.0.7.1.1.1': 'Bsi Prime Field',
    '0.4.0.127.0.7.1.1.2': 'Bsi Characteristic Two Field',
    '0.4.0.127.0.7.1.1.2.2': 'Bsi ECTLV Key Format',
    '0.4.0.127.0.7.1.1.2.2.1': 'Bsi ECTLV Public Key',
    '0.4.0.127.0.7.1.1.2.3': 'Bsi Characteristic Two Basis',
    '0.4.0.127.0.7.1.1.2.3.1': 'Bsi Gn Basis',
    '0.4.0.127.0.7.1.1.2.3.2': 'Bsi Tp Basis',
    '0.4.0.127.0.7.1.1.2.3.3': 'Bsi Pp Basis',
    '0.4.0.127.0.7.1.1.4.1': 'Bsi Ecdsa Signatures',
    '0.4.0.127.0.7.1.1.4.1.1': 'Bsi Ecdsa with SHA1',
    '0.4.0.127.0.7.1.1.4.1.2': 'Bsi Ecdsa with SHA224',
    '0.4.0.127.0.7.1.1.4.1.3': 'Bsi Ecdsa with SHA256',
    '0.4.0.127.0.7.1.1.4.1.4': 'Bsi Ecdsa with SHA384',
    '0.4.0.127.0.7.1.1.4.1.5': 'Bsi Ecdsa with SHA512',
    '0.4.0.127.0.7.1.1.4.1.6': 'Bsi Ecdsa with RIPEMD160',
    '0.4.0.127.0.7.1.1.5.1.1': 'Bsi Ecka Eg x963KDF',
    '0.4.0.127.0.7.1.1.5.1.1.1': 'Bsi Ecka Eg x963KDF with SHA1',
    '0.4.0.127.0.7.1.1.5.1.1.2': 'Bsi Ecka Eg x963KDF with SHA224',
    '0.4.0.127.0.7.1.1.5.1.1.3': 'Bsi Ecka Eg x963KDF with SHA256',
    '0.4.0.127.0.7.1.1.5.1.1.4': 'Bsi Ecka Eg x963KDF with SHA384',
    '0.4.0.127.0.7.1.1.5.1.1.5': 'Bsi Ecka Eg x963KDF with SHA512',
    '0.4.0.127.0.7.1.1.5.1.1.6': 'Bsi Ecka Eg x963KDF with RIPEMD160',
    '0.4.0.127.0.7.1.1.5.1.2': 'Bsi Ecka Eg Session KDF',
    '0.4.0.127.0.7.1.1.5.1.2.1': 'Bsi Ecka Eg Session KDF With3DES',
    '0.4.0.127.0.7.1.1.5.1.2.2': 'Bsi Ecka Eg Session KDF with AES128',
    '0.4.0.127.0.7.1.1.5.1.2.3': 'Bsi Ecka Eg Session KDF with AES192',
    '0.4.0.127.0.7.1.1.5.1.2.4': 'Bsi Ecka Eg Session KDF with AES256',
    '0.4.0.127.0.7.1.1.5.2': 'Bsi Ecka DH',
    '0.4.0.127.0.7.1.1.5.2.1': 'Bsi Ecka DH x963KDF',
    '0.4.0.127.0.7.1.1.5.2.1.1': 'Bsi Ecka DHx963KDF with SHA1',
    '0.4.0.127.0.7.1.1.5.2.1.2': 'Bsi Ecka DHx963KDF with SHA224',
    '0.4.0.127.0.7.1.1.5.2.1.3': 'Bsi Ecka DHx963KDF with SHA256',
    '0.4.0.127.0.7.1.1.5.2.1.4': 'Bsi Ecka DHx963KDF with SHA384',
    '0.4.0.127.0.7.1.1.5.2.1.5': 'Bsi Ecka DHx963KDF with SHA512',
    '0.4.0.127.0.7.1.1.5.2.1.6': 'Bsi Ecka DHx963KDF with RIPEMD160',
    '0.4.0.127.0.7.1.1.5.2.2': 'Bsi Ecka DHSessionKDF',
    '0.4.0.127.0.7.1.1.5.2.2.1': 'Bsi Ecka DH Session KDF With3 DES',
    '0.4.0.127.0.7.1.1.5.2.2.2': 'Bsi Ecka DH Session KDF with AES128',
    '0.4.0.127.0.7.1.1.5.2.2.3': 'Bsi Ecka DH Session KDF with AES192',
    '0.4.0.127.0.7.1.1.5.2.2.4': 'Bsi Ecka DH Session KDF with AES256',
    '0.4.0.127.0.7.1.2': 'Bsi Ec Key Type',
    '0.4.0.127.0.7.1.2.1': 'Bsi Ec Public Key',
    '0.4.0.127.0.7.1.5.1': 'Bsi Kaeg',
    '0.4.0.127.0.7.1.5.1.1': 'Bsi Kaeg with x963KDF',
    '0.4.0.127.0.7.1.5.1.2': 'Bsi Kaeg with 3DESKDF',
    '0.4.0.127.0.7.2.2.1': 'Bsi PK',
    '0.4.0.127.0.7.2.2.1.1': 'Bsi PK_DH',
    '0.4.0.127.0.7.2.2.1.2': 'Bsi PK_ECDH',
    '0.4.0.127.0.7.2.2.2': 'Bsi TA',
    '0.4.0.127.0.7.2.2.2.1': 'Bsi TA_RSA',
    '0.4.0.127.0.7.2.2.2.1.1': 'Bsi TA_RSAv1_5_SHA1',
    '0.4.0.127.0.7.2.2.2.1.2': 'Bsi TA_RSAv1_5_SHA256',
    '0.4.0.127.0.7.2.2.2.1.3': 'Bsi TA_RSAPSS_SHA1',
    '0.4.0.127.0.7.2.2.2.1.4': 'Bsi TA_RSAPSS_SHA256',
    '0.4.0.127.0.7.2.2.2.1.5': 'Bsi TA_RSAv1_5_SHA512',
    '0.4.0.127.0.7.2.2.2.1.6': 'Bsi TA_RSAPSS_SHA512',
    '0.4.0.127.0.7.2.2.2.2': 'Bsi TA_ECDSA',
    '0.4.0.127.0.7.2.2.2.2.1': 'Bsi TA_ECDSA_SHA1',
    '0.4.0.127.0.7.2.2.2.2.2': 'Bsi TA_ECDSA_SHA224',
    '0.4.0.127.0.7.2.2.2.2.3': 'Bsi TA_ECDSA_SHA256',
    '0.4.0.127.0.7.2.2.2.2.4': 'Bsi TA_ECDSA_SHA384',
    '0.4.0.127.0.7.2.2.2.2.5': 'Bsi TA_ECDSA_SHA512',
    '0.4.0.127.0.7.2.2.3': 'Bsi CA',
    '0.4.0.127.0.7.2.2.3.1': 'Bsi CA_DH',
    '0.4.0.127.0.7.2.2.3.1.1': 'Bsi CA_DH_3DES_CBC_CBC',
    '0.4.0.127.0.7.2.2.3.1.2': 'Bsi CA_DH_AES_CBC_CMAC_128',
    '0.4.0.127.0.7.2.2.3.1.3': 'Bsi CA_DH_AES_CBC_CMAC_192',
    '0.4.0.127.0.7.2.2.3.1.4': 'Bsi CA_DH_AES_CBC_CMAC_256',
    '0.4.0.127.0.7.2.2.3.2': 'Bsi CA_ECDH',
    '0.4.0.127.0.7.2.2.3.2.1': 'Bsi CA_ECDH_3DES_CBC_CBC',
    '0.4.0.127.0.7.2.2.3.2.2': 'Bsi CA_ECDH_AES_CBC_CMAC_128',
    '0.4.0.127.0.7.2.2.3.2.3': 'Bsi CA_ECDH_AES_CBC_CMAC_192',
    '0.4.0.127.0.7.2.2.3.2.4': 'Bsi CA_ECDH_AES_CBC_CMAC_256',
    '0.4.0.127.0.7.2.2.4': 'Bsi PACE',
    '0.4.0.127.0.7.2.2.4.1': 'Bsi PACE_DH_GM',
    '0.4.0.127.0.7.2.2.4.1.1': 'Bsi PACE_DH_GM_3DES_CBC_CBC',
    '0.4.0.127.0.7.2.2.4.1.2': 'Bsi PACE_DH_GM_AES_CBC_CMAC_128',
    '0.4.0.127.0.7.2.2.4.1.3': 'Bsi PACE_DH_GM_AES_CBC_CMAC_192',
    '0.4.0.127.0.7.2.2.4.1.4': 'Bsi PACE_DH_GM_AES_CBC_CMAC_256',
    '0.4.0.127.0.7.2.2.4.2': 'Bsi PACE_ECDH_GM',
    '0.4.0.127.0.7.2.2.4.2.1': 'Bsi PACE_ECDH_GM_3DES_CBC_CBC',
    '0.4.0.127.0.7.2.2.4.2.2': 'Bsi PACE_ECDH_GM_AES_CBC_CMAC_128',
    '0.4.0.127.0.7.2.2.4.2.3': 'Bsi PACE_ECDH_GM_AES_CBC_CMAC_192',
    '0.4.0.127.0.7.2.2.4.2.4': 'Bsi PACE_ECDH_GM_AES_CBC_CMAC_256',
    '0.4.0.127.0.7.2.2.4.3': 'Bsi PACE_DH_IM',
    '0.4.0.127.0.7.2.2.4.3.1': 'Bsi PACE_DH_IM_3DES_CBC_CBC',
    '0.4.0.127.0.7.2.2.4.3.2': 'Bsi PACE_DH_IM_AES_CBC_CMAC_128',
    '0.4.0.127.0.7.2.2.4.3.3': 'Bsi PACE_DH_IM_AES_CBC_CMAC_192',
    '0.4.0.127.0.7.2.2.4.3.4': 'Bsi PACE_DH_IM_AES_CBC_CMAC_256',
    '0.4.0.127.0.7.2.2.4.4': 'Bsi PACE_ECDH_IM',
    '0.4.0.127.0.7.2.2.4.4.1': 'Bsi PACE_ECDH_IM_3DES_CBC_CBC',
    '0.4.0.127.0.7.2.2.4.4.2': 'Bsi PACE_ECDH_IM_AES_CBC_CMAC_128',
    '0.4.0.127.0.7.2.2.4.4.3': 'Bsi PACE_ECDH_IM_AES_CBC_CMAC_192',
    '0.4.0.127.0.7.2.2.4.4.4': 'Bsi PACE_ECDH_IM_AES_CBC_CMAC_256',
    '0.4.0.127.0.7.2.2.5': 'Bsi RI',
    '0.4.0.127.0.7.2.2.5.1': 'Bsi RI_DH',
    '0.4.0.127.0.7.2.2.5.1.1': 'Bsi RI_DH_SHA1',
    '0.4.0.127.0.7.2.2.5.1.2': 'Bsi RI_DH_SHA224',
    '0.4.0.127.0.7.2.2.5.1.3': 'Bsi RI_DH_SHA256',
    '0.4.0.127.0.7.2.2.5.1.4': 'Bsi RI_DH_SHA384',
    '0.4.0.127.0.7.2.2.5.1.5': 'Bsi RI_DH_SHA512',
    '0.4.0.127.0.7.2.2.5.2': 'Bsi RI_ECDH',
    '0.4.0.127.0.7.2.2.5.2.1': 'Bsi RI_ECDH_SHA1',
    '0.4.0.127.0.7.2.2.5.2.2': 'Bsi RI_ECDH_SHA224',
    '0.4.0.127.0.7.2.2.5.2.3': 'Bsi RI_ECDH_SHA256',
    '0.4.0.127.0.7.2.2.5.2.4': 'Bsi RI_ECDH_SHA384',
    '0.4.0.127.0.7.2.2.5.2.5': 'Bsi RI_ECDH_SHA512',
    '0.4.0.127.0.7.2.2.6': 'Bsi Card Info',
    '0.4.0.127.0.7.2.2.7': 'Bsi Eid Security',
    '0.4.0.127.0.7.2.2.8': 'Bsi PT',
    '0.4.0.127.0.7.3.1.2': 'Bsi EAC Roles',
    '0.4.0.127.0.7.3.1.2.1': 'Bsi EAC Roles IS',
    '0.4.0.127.0.7.3.1.2.2': 'Bsi EAC Roles AT',
    '0.4.0.127.0.7.3.1.2.3': 'Bsi EAC Roles ST',
    '0.4.0.127.0.7.3.1.3': 'Bsi TAv2ce',
    '0.4.0.127.0.7.3.1.3.1': 'Bsi TAv2ce Description',
    '0.4.0.127.0.7.3.1.3.1.1': 'Bsi TAv2ce Description Plain Text',
    '0.4.0.127.0.7.3.1.3.1.2': 'Bsi TAv2ce Description IA5 String',
    '0.4.0.127.0.7.3.1.3.1.3': 'Bsi TAv2ce Description Octet String',
    '0.4.0.127.0.7.3.1.3.2': 'Bsi TAv2ce Terminal Sector',
    '0.4.0.127.0.7.3.1.4': 'Bsi Aux Data',
    '0.4.0.127.0.7.3.1.4.1': 'Bsi Aux Data Birthday',
    '0.4.0.127.0.7.3.1.4.2': 'Bsi Aux Data Expire Date',
    '0.4.0.127.0.7.3.1.4.3': 'Bsi Aux Data Community ID',
    '0.4.0.127.0.7.3.1.5': 'Bsi Defect List',
    '0.4.0.127.0.7.3.1.5.1': 'Bsi Defect Auth Defect',
    '0.4.0.127.0.7.3.1.5.1.1': 'Bsi Defect Cert Revoked',
    '0.4.0.127.0.7.3.1.5.1.2': 'Bsi Defect Cert Replaced',
    '0.4.0.127.0.7.3.1.5.1.3': 'Bsi Defect Chip Auth Key Revoked',
    '0.4.0.127.0.7.3.1.5.1.4': 'Bsi Defect Active Auth Key Revoked',
    '0.4.0.127.0.7.3.1.5.2': 'Bsi Defect EPassport Defect',
    '0.4.0.127.0.7.3.1.5.2.1': 'Bsi Defect EPassport DG Malformed',
    '0.4.0.127.0.7.3.1.5.2.2': 'Bsi Defect SOD Invalid',
    '0.4.0.127.0.7.3.1.5.3': 'Bsi Defect EID Defect',
    '0.4.0.127.0.7.3.1.5.3.1': 'Bsi Defect EIDDG Malformed',
    '0.4.0.127.0.7.3.1.5.3.2': 'Bsi Defect EID Integrity',
    '0.4.0.127.0.7.3.1.5.4': 'Bsi Defect Document Defect',
    '0.4.0.127.0.7.3.1.5.4.1': 'Bsi Defect Card Security Malformed',
    '0.4.0.127.0.7.3.1.5.4.2': 'Bsi Defect Chip Security Malformed',
    '0.4.0.127.0.7.3.1.5.4.3': 'Bsi Defect Power Down Req',
    '0.4.0.127.0.7.3.1.6': 'Bsi List Content Description',
    '0.4.0.127.0.7.3.2.1': 'Bsi Security Object',
    '0.4.0.127.0.7.3.2.2': 'Bsi Black List',
    '0.4.0.1862': 'Etsi Qcs Profile',
    '0.4.0.1862.1': 'Etsi Qcs',
    '0.4.0.1862.1.1': 'Etsi Qcs Compliance',
    '0.4.0.1862.1.2': 'Etsi Qcs Limit Value',
    '0.4.0.1862.1.3': 'Etsi Qcs Retention Period',
    '0.4.0.1862.1.4': 'Etsi Qcs SSCD',
    '0.4.0.1862.1.5': 'Etsi Qcs PDS',
    '0.4.0.1862.1.6': 'Etsi QcType',
    '0.4.0.1862.1.6.1': 'Etsi QcType eSign',
    '0.4.0.1862.1.6.2': 'Etsi QcType eSeal',
    '0.4.0.1862.1.6.3': 'Etsi QcType Web',
    '0.4.0.194112.1.0': 'QCP Natural Person',
    '0.4.0.194112.1.1': 'QCP Legal Person',
    '0.4.0.194112.1.2': 'QCP Natural QSCD',
    '0.4.0.194112.1.3': 'QCP Legal QSCD',
    '0.4.0.194112.1.4': 'QCP Web',
    '0.9.2342.19200300.100.1.1': 'User ID',
    '0.9.2342.19200300.100.1.3': 'Rfc822 Mailbox',
    '0.9.2342.19200300.100.1.25': 'Domain Component',
    '1.0.10118.3.0.49': 'Ripemd160',
    '1.0.10118.3.0.50': 'Ripemd128',
    '1.0.10118.3.0.55': 'Whirlpool',
    '1.2.36.1.3.1.1.1': 'Qgpki',
    '1.2.36.1.3.1.1.1.1': 'Qgpki Policies',
    '1.2.36.1.3.1.1.1.1.1': 'Qgpki Med Intermed CA',
    '1.2.36.1.3.1.1.1.1.1.1': 'Qgpki Med Intermed Individual',
    '1.2.36.1.3.1.1.1.1.1.2': 'Qgpki Med Intermed Device Control',
    '1.2.36.1.3.1.1.1.1.1.3': 'Qgpki Med Intermed Device',
    '1.2.36.1.3.1.1.1.1.1.4': 'Qgpki Med Intermed Authorised Party',
    '1.2.36.1.3.1.1.1.1.1.5': 'Qgpki Med Intermed Device System',
    '1.2.36.1.3.1.1.1.1.2': 'Qgpki Med Issuing CA',
    '1.2.36.1.3.1.1.1.1.2.1': 'Qgpki Med Issuing Individual',
    '1.2.36.1.3.1.1.1.1.2.2': 'Qgpki Med Issuing Device Control',
    '1.2.36.1.3.1.1.1.1.2.3': 'Qgpki Med Issuing Device',
    '1.2.36.1.3.1.1.1.1.2.4': 'Qgpki Med Issuing Authorised Party',
    '1.2.36.1.3.1.1.1.1.2.5': 'Qgpki Med Issuing Client Auth',
    '1.2.36.1.3.1.1.1.1.2.6': 'Qgpki Med Issuing Server Auth',
    '1.2.36.1.3.1.1.1.1.2.7': 'Qgpki Med Issuing Data Prot',
    '1.2.36.1.3.1.1.1.1.2.8': 'Qgpki Med Issuing Token Auth',
    '1.2.36.1.3.1.1.1.1.3': 'Qgpki Basic Intermed CA',
    '1.2.36.1.3.1.1.1.1.3.1': 'Qgpki Basic Intermed Device System',
    '1.2.36.1.3.1.1.1.1.4': 'Qgpki Basic Issuing CA',
    '1.2.36.1.3.1.1.1.1.4.1': 'Qgpki Basic Issuing Client Auth',
    '1.2.36.1.3.1.1.1.1.4.2': 'Qgpki Basic Issuing Server Auth',
    '1.2.36.1.3.1.1.1.1.4.3': 'Qgpki Basic Issuing Data Signing',
    '1.2.36.1.3.1.1.1.2': 'Qgpki Assurance Level',
    '1.2.36.1.3.1.1.1.2.1': 'Qgpki Assurance Rudimentary',
    '1.2.36.1.3.1.1.1.2.2': 'Qgpki Assurance Basic',
    '1.2.36.1.3.1.1.1.2.3': 'Qgpki Assurance Medium',
    '1.2.36.1.3.1.1.1.2.4': 'Qgpki Assurance High',
    '1.2.36.1.3.1.1.1.3': 'Qgpki Cert Function',
    '1.2.36.1.3.1.1.1.3.1': 'Qgpki Function Individual',
    '1.2.36.1.3.1.1.1.3.2': 'Qgpki Function Device',
    '1.2.36.1.3.1.1.1.3.3': 'Qgpki Function Authorised Party',
    '1.2.36.1.3.1.1.1.3.4': 'Qgpki Function Device Control',
    '1.2.36.1.3.1.2': 'Qpspki',
    '1.2.36.1.3.1.2.1': 'Qpspki Policies',
    '1.2.36.1.3.1.2.1.2': 'Qpspki Policy Basic',
    '1.2.36.1.3.1.2.1.3': 'Qpspki Policy Medium',
    '1.2.36.1.3.1.2.1.4': 'Qpspki Policy High',
    '1.2.36.1.3.1.3.2': 'Qtmrpki',
    '1.2.36.1.3.1.3.2.1': 'Qtmrpki Policies',
    '1.2.36.1.3.1.3.2.2': 'Qtmrpki Purpose',
    '1.2.36.1.3.1.3.2.2.1': 'Qtmrpki Individual',
    '1.2.36.1.3.1.3.2.2.2': 'Qtmrpki Device Control',
    '1.2.36.1.3.1.3.2.2.3': 'Qtmrpki Device',
    '1.2.36.1.3.1.3.2.2.4': 'Qtmrpki Authorised Party',
    '1.2.36.1.3.1.3.2.2.5': 'Qtmrpki Device System',
    '1.2.36.1.3.1.3.2.3': 'Qtmrpki Device',
    '1.2.36.1.3.1.3.2.3.1': 'Qtmrpki Driver License',
    '1.2.36.1.3.1.3.2.3.2': 'Qtmrpki Industry Authority',
    '1.2.36.1.3.1.3.2.3.3': 'Qtmrpki Marine License',
    '1.2.36.1.3.1.3.2.3.4': 'Qtmrpki Adult Proof Of Age',
    '1.2.36.1.3.1.3.2.3.5': 'Qtmrpki Sam',
    '1.2.36.1.3.1.3.2.4': 'Qtmrpki Authorised Party',
    '1.2.36.1.3.1.3.2.4.1': 'Qtmrpki Transport Inspector',
    '1.2.36.1.3.1.3.2.4.2': 'Qtmrpki Police Officer',
    '1.2.36.1.3.1.3.2.4.3': 'Qtmrpki System',
    '1.2.36.1.3.1.3.2.4.4': 'Qtmrpki Liquor Licensing Inspector',
    '1.2.36.1.3.1.3.2.4.5': 'Qtmrpki Marine Enforcement Officer',
    '1.2.36.1.333.1': 'Australian Business Number',
    '1.2.36.68980861.1.1.2': 'Signet Personal',
    '1.2.36.68980861.1.1.3': 'Signet Business',
    '1.2.36.68980861.1.1.4': 'Signet Legal',
    '1.2.36.68980861.1.1.10': 'Signet Pilot',
    '1.2.36.68980861.1.1.11': 'Signet Intra Net',
    '1.2.36.68980861.1.1.20': 'Signet Policy',
    '1.2.36.75878867.1.100.1.1': 'Certificates Australia Policy',
    '1.2.40.0.17.1.22': 'A-Trust  EV policy',
    '1.2.392.200011.61.1.1.1': 'Mitsubishi Security Algorithm',
    '1.2.392.200011.61.1.1.1.1': 'Misty1-cbc',
    '1.2.392.200091.100.721.1': 'Security Communication (SECOM) EV policy',
    '1.2.410.200004.1': 'Kisa Algorithm',
    '1.2.410.200004.1.1': 'Kcdsa',
    '1.2.410.200004.1.2': 'Has160',
    '1.2.410.200004.1.3': 'Seed ECB',
    '1.2.410.200004.1.4': 'Seed CBC',
    '1.2.410.200004.1.5': 'Seed OFB',
    '1.2.410.200004.1.6': 'Seed CFB',
    '1.2.410.200004.1.7': 'Seed MAC',
    '1.2.410.200004.1.8': 'Kcdsa with HAS160',
    '1.2.410.200004.1.9': 'Kcdsa with SHA1',
    '1.2.410.200004.1.10': 'PBE with HAS160 And SEED-ECB',
    '1.2.410.200004.1.11': 'PBE with HAS160 And SEED-CBC',
    '1.2.410.200004.1.12': 'PBE with HAS160 And SEED-CFB',
    '1.2.410.200004.1.13': 'PBE with HAS160 And SEED-OFB',
    '1.2.410.200004.1.14': 'PBE with SHA1 And SEED-ECB',
    '1.2.410.200004.1.15': 'PBE with SHA1 And SEED-CBC',
    '1.2.410.200004.1.16': 'PBE with SHA1 And SEED-CFB',
    '1.2.410.200004.1.17': 'PBE with SHA1 And SEED-OFB',
    '1.2.410.200004.1.20': 'RSA with HAS160',
    '1.2.410.200004.1.21': 'Kcdsa1',
    '1.2.410.200004.2': 'Npki CP',
    '1.2.410.200004.2.1': 'Npki Signature Policy',
    '1.2.410.200004.3': 'Npki KP',
    '1.2.410.200004.4': 'Npki AT',
    '1.2.410.200004.5': 'Npki LCA',
    '1.2.410.200004.5.1': 'Npki Sign Korea',
    '1.2.410.200004.5.2': 'Npki Sign Gate',
    '1.2.410.200004.5.3': 'Npki Nca Sign',
    '1.2.410.200004.6': 'Npki ON',
    '1.2.410.200004.7': 'Npki APP',
    '1.2.410.200004.7.1': 'Npki SMIME',
    '1.2.410.200004.7.1.1': 'Npki SMIME Algo',
    '1.2.410.200004.7.1.1.1': 'Npki Cms SEED Wrap',
    '1.2.410.200004.10': 'Npki',
    '1.2.410.200004.10.1': 'Npki Attribute',
    '1.2.410.200004.10.1.1': 'Npki Identify Data',
    '1.2.410.200004.10.1.1.1': 'Npki VID',
    '1.2.410.200004.10.1.1.2': 'Npki Encrypted VID',
    '1.2.410.200004.10.1.1.3': 'Npki Random Num',
    '1.2.410.200004.10.1.1.4': 'Npki VID',
    '1.2.410.200046.1.1': 'Aria1 Algorithm Modes',
    '1.2.410.200046.1.1.1': 'Aria128-ecb',
    '1.2.410.200046.1.1.2': 'Aria128-cbc',
    '1.2.410.200046.1.1.3': 'Aria128-cfb',
    '1.2.410.200046.1.1.4': 'Aria128-ofb',
    '1.2.410.200046.1.1.5': 'Aria128-ctr',
    '1.2.410.200046.1.1.6': 'Aria192-ecb',
    '1.2.410.200046.1.1.7': 'Aria192-cbc',
    '1.2.410.200046.1.1.8': 'Aria192-cfb',
    '1.2.410.200046.1.1.9': 'Aria192-ofb',
    '1.2.410.200046.1.1.10': 'Aria192-ctr',
    '1.2.410.200046.1.1.11': 'Aria256-ecb',
    '1.2.410.200046.1.1.12': 'Aria256-cbc',
    '1.2.410.200046.1.1.13': 'Aria256-cfb',
    '1.2.410.200046.1.1.14': 'Aria256-ofb',
    '1.2.410.200046.1.1.15': 'Aria256-ctr',
    '1.2.410.200046.1.1.21': 'Aria128-cmac',
    '1.2.410.200046.1.1.22': 'Aria192-cmac',
    '1.2.410.200046.1.1.23': 'Aria256-cmac',
    '1.2.410.200046.1.1.31': 'Aria128-ocb2',
    '1.2.410.200046.1.1.32': 'Aria192-ocb2',
    '1.2.410.200046.1.1.33': 'Aria256-ocb2',
    '1.2.410.200046.1.1.34': 'Aria128-gcm',
    '1.2.410.200046.1.1.35': 'Aria192-gcm',
    '1.2.410.200046.1.1.36': 'Aria256-gcm',
    '1.2.410.200046.1.1.37': 'Aria128-ccm',
    '1.2.410.200046.1.1.38': 'Aria192-ccm',
    '1.2.410.200046.1.1.39': 'Aria256-ccm',
    '1.2.410.200046.1.1.40': 'Aria128-keywrap',
    '1.2.410.200046.1.1.41': 'Aria192-keywrap',
    '1.2.410.200046.1.1.42': 'Aria256-keywrap',
    '1.2.410.200046.1.1.43': 'Aria128-keywrap with Pad',
    '1.2.410.200046.1.1.44': 'Aria192-keywrap with Pad',
    '1.2.410.200046.1.1.45': 'Aria256-keywrap with Pad',
    '1.2.643.2.2.3': 'Gost Signature',
    '1.2.643.2.2.4': 'Gost94 Signature',
    '1.2.643.2.2.9': 'Gost Digest',
    '1.2.643.2.2.10': 'Hmac Gost',
    '1.2.643.2.2.13.0': 'Gost Wrap',
    '1.2.643.2.2.13.1': 'Crypto Pro Wrap',
    '1.2.643.2.2.14.0': 'Null Meshing',
    '1.2.643.2.2.14.1': 'Crypto Pro Meshing',
    '1.2.643.2.2.19': 'Gost Public Key',
    '1.2.643.2.2.20': 'Gost94 Public Key',
    '1.2.643.2.2.21': 'Gost Cipher',
    '1.2.643.2.2.30.0': 'Test Digest Params',
    '1.2.643.2.2.30.1': 'Crypto Pro Digest A',
    '1.2.643.2.2.31.0': 'Test Cipher Params',
    '1.2.643.2.2.31.1': 'Crypto Pro Cipher A',
    '1.2.643.2.2.31.2': 'Crypto Pro Cipher B',
    '1.2.643.2.2.31.3': 'Crypto Pro Cipher C',
    '1.2.643.2.2.31.4': 'Crypto Pro Cipher D',
    '1.2.643.2.2.31.5': 'Oscar11 Cipher',
    '1.2.643.2.2.31.6': 'Oscar10 Cipher',
    '1.2.643.2.2.31.7': 'Ric1 Cipher',
    '1.2.643.2.2.35.0': 'Test Sign Params',
    '1.2.643.2.2.35.1': 'Crypto Pro Sign A',
    '1.2.643.2.2.35.2': 'Crypto Pro Sign B',
    '1.2.643.2.2.35.3': 'Crypto Pro Sign C',
    '1.2.643.2.2.36.0': 'Crypto Pro Sign XA',
    '1.2.643.2.2.36.1': 'Crypto Pro Sign XB',
    '1.2.643.2.2.96': 'Crypto Pro ECDH Wrap',
    '1.2.752.34.1': 'Seis-cp',
    '1.2.752.34.1.1': 'SEIS high-assurance policy Identifier',
    '1.2.752.34.1.2': 'SEIS GAK policy Identifier',
    '1.2.752.34.2': 'SEI Spe',
    '1.2.752.34.3': 'SEI Sat',
    '1.2.752.34.3.1': 'SEI Sat-personal Identifier',
    '1.2.840.10040.1': 'Module',
    '1.2.840.10040.1.1': 'x9f1-cert-mgmt',
    '1.2.840.10040.2': 'Holdinstruction',
    '1.2.840.10040.2.1': 'Holdinstruction-none',
    '1.2.840.10040.2.2': 'Callissuer',
    '1.2.840.10040.2.3': 'Reject',
    '1.2.840.10040.2.4': 'Pickup Token',
    '1.2.840.10040.3': 'Attribute',
    '1.2.840.10040.3.1': 'Countersignature',
    '1.2.840.10040.3.2': 'Attribute-cert',
    '1.2.840.10040.4': 'Algorithm',
    '1.2.840.10040.4.1': 'DSA',
    '1.2.840.10040.4.2': 'DSA-match',
    '1.2.840.10040.4.3': 'DSA with SHA1',
    '1.2.840.10045.1': 'Field Type',
    '1.2.840.10045.1.1': 'Prime-field',
    '1.2.840.10045.1.2': 'Characteristic-two-field',
    '1.2.840.10045.1.2.3': 'Characteristic-two-basis',
    '1.2.840.10045.1.2.3.1': 'ON Basis',
    '1.2.840.10045.1.2.3.2': 'TP Basis',
    '1.2.840.10045.1.2.3.3': 'PP Basis',
    '1.2.840.10045.2': 'Public Key Type',
    '1.2.840.10045.2.1': 'EC Public Key',
    '1.2.840.10045.3.0.1': 'C2pnb163v1',
    '1.2.840.10045.3.0.2': 'C2pnb163v2',
    '1.2.840.10045.3.0.3': 'C2pnb163v3',
    '1.2.840.10045.3.0.5': 'C2tnb191v1',
    '1.2.840.10045.3.0.6': 'C2tnb191v2',
    '1.2.840.10045.3.0.7': 'C2tnb191v3',
    '1.2.840.10045.3.0.10': 'C2pnb208w1',
    '1.2.840.10045.3.0.11': 'C2tnb239v1',
    '1.2.840.10045.3.0.12': 'C2tnb239v2',
    '1.2.840.10045.3.0.13': 'C2tnb239v3',
    '1.2.840.10045.3.0.16': 'C2pnb272w1',
    '1.2.840.10045.3.0.18': 'C2tnb359v1',
    '1.2.840.10045.3.0.19': 'C2pnb368w1',
    '1.2.840.10045.3.0.20': 'C2tnb431r1',
    '1.2.840.10045.3.1.1': 'Prime192v1',
    '1.2.840.10045.3.1.2': 'Prime192v2',
    '1.2.840.10045.3.1.3': 'Prime192v3',
    '1.2.840.10045.3.1.4': 'Prime239v1',
    '1.2.840.10045.3.1.5': 'Prime239v2',
    '1.2.840.10045.3.1.6': 'Prime239v3',
    '1.2.840.10045.3.1.7': 'Prime256v1',
    '1.2.840.10045.4.1': 'ECDSA with SHA1',
    '1.2.840.10045.4.2': 'ECDSA with Recommended',
    '1.2.840.10045.4.3': 'ECDSA with Specified',
    '1.2.840.10045.4.3.1': 'ECDSA with SHA224',
    '1.2.840.10045.4.3.2': 'ECDSA with SHA256',
    '1.2.840.10045.4.3.3': 'ECDSA with SHA384',
    '1.2.840.10045.4.3.4': 'ECDSA with SHA512',
    '1.2.840.10046.1': 'Field Type',
    '1.2.840.10046.1.1': 'Gf-prime',
    '1.2.840.10046.2': 'Number Type',
    '1.2.840.10046.2.1': 'DH Public Key',
    '1.2.840.10046.3': 'Scheme',
    '1.2.840.10046.3.1': 'DH Static',
    '1.2.840.10046.3.2': 'DH Ephem',
    '1.2.840.10046.3.3': 'DH Hybrid1',
    '1.2.840.10046.3.4': 'DH Hybrid2',
    '1.2.840.10046.3.5': 'Mqv2',
    '1.2.840.10046.3.6': 'Mqv1',
    '1.2.840.10065.2.2': '?',
    '1.2.840.10065.2.3': 'Healthcare License',
    '1.2.840.10065.2.3.1.1': 'License?',
    '1.2.840.10070.': 'Iec62351',
    '1.2.840.10070.8': 'Iec62351_8',
    '1.2.840.10070.8.1': 'Iec User Roles',
    '1.2.840.113533.7': 'NSN',
    '1.2.840.113533.7.65': 'NSN-ce',
    '1.2.840.113533.7.65.0': 'Entrust Version Info',
    '1.2.840.113533.7.66': 'NSN-alg',
    '1.2.840.113533.7.66.3': 'Cast3 CBC',
    '1.2.840.113533.7.66.10': 'Cast5 CBC',
    '1.2.840.113533.7.66.11': 'Cast5 MAC',
    '1.2.840.113533.7.66.12': 'PBE with MD5 And CAST5-CBC',
    '1.2.840.113533.7.66.13': 'Password Based Mac',
    '1.2.840.113533.7.67': 'NSN-oc',
    '1.2.840.113533.7.67.0': 'Entrust User',
    '1.2.840.113533.7.68': 'NSN-at',
    '1.2.840.113533.7.68.0': 'Entrust CA Info',
    '1.2.840.113533.7.68.10': 'Attribute Certificate',
    '1.2.840.113549.1.1': 'PKCS-1',
    '1.2.840.113549.1.1.1': 'RSA Encryption',
    '1.2.840.113549.1.1.2': 'MD2 with RSA Encryption',
    '1.2.840.113549.1.1.3': 'MD4 with RSA Encryption',
    '1.2.840.113549.1.1.4': 'MD5 with RSA Encryption',
    '1.2.840.113549.1.1.5': 'SHA1 with RSA Encryption',
    '1.2.840.113549.1.1.6': 'RSA OAEP Encryption SET',
    '1.2.840.113549.1.1.7': 'RSA OAEP',
    '1.2.840.113549.1.1.8': 'PKCS1-MGF',
    '1.2.840.113549.1.1.9': 'RSA OAEP-p Specified',
    '1.2.840.113549.1.1.10': 'RSA PSS',
    '1.2.840.113549.1.1.11': 'SHA256 with RSA Encryption',
    '1.2.840.113549.1.1.12': 'SHA384 with RSA Encryption',
    '1.2.840.113549.1.1.13': 'SHA512 with RSA Encryption',
    '1.2.840.113549.1.1.14': 'SHA224 with RSA Encryption',
    '1.2.840.113549.1.2': 'Bsafe Rsa Encr',
    '1.2.840.113549.1.3': 'PKCS-3',
    '1.2.840.113549.1.3.1': 'Dh Key Agreement',
    '1.2.840.113549.1.5': 'PKCS-5',
    '1.2.840.113549.1.5.1': 'PBE with MD2 And DES-CBC',
    '1.2.840.113549.1.5.3': 'PBE with MD5 And DES-CBC',
    '1.2.840.113549.1.5.4': 'PBE with MD2 And RC2-CBC',
    '1.2.840.113549.1.5.6': 'PBE with MD5 And RC2-CBC',
    '1.2.840.113549.1.5.9': 'PBE with MD5 And XOR',
    '1.2.840.113549.1.5.10': 'PBE with SHA And DES-CBC',
    '1.2.840.113549.1.5.12': 'PKCS5 PBKDF2',
    '1.2.840.113549.1.5.13': 'PKCS5 PBES2',
    '1.2.840.113549.1.5.14': 'PKCS5 PBMAC1',
    '1.2.840.113549.1.7': 'PKCS-7',
    '1.2.840.113549.1.7.1': 'Data',
    '1.2.840.113549.1.7.2': 'Signed Data',
    '1.2.840.113549.1.7.3': 'Enveloped Data',
    '1.2.840.113549.1.7.4': 'Signed And Enveloped Data',
    '1.2.840.113549.1.7.5': 'Digested Data',
    '1.2.840.113549.1.7.6': 'Encrypted Data',
    '1.2.840.113549.1.7.7': 'Data with Attributes',
    '1.2.840.113549.1.7.8': 'Encrypted Private Key Info',
    '1.2.840.113549.1.9': 'PKCS-9',
    '1.2.840.113549.1.9.1': 'Email',
    '1.2.840.113549.1.9.2': 'Unstructured Name',
    '1.2.840.113549.1.9.3': 'Content Type',
    '1.2.840.113549.1.9.4': 'Message Digest',
    '1.2.840.113549.1.9.5': 'Signing Time',
    '1.2.840.113549.1.9.6': 'Countersignature',
    '1.2.840.113549.1.9.7': 'Challenge Password',
    '1.2.840.113549.1.9.8': 'Unstructured Address',
    '1.2.840.113549.1.9.9': 'Extended Certificate Attributes',
    '1.2.840.113549.1.9.10': 'Issuer And Serial Number',
    '1.2.840.113549.1.9.11': 'Password Check',
    '1.2.840.113549.1.9.12': 'Public Key',
    '1.2.840.113549.1.9.13': 'Signing Description',
    '1.2.840.113549.1.9.14': 'Extension Request',
    '1.2.840.113549.1.9.15': 'S/MIME Capabilities',
    '1.2.840.113549.1.9.15.1': 'Prefer Signed Data',
    '1.2.840.113549.1.9.15.2': 'Can Not Decrypt Any',
    '1.2.840.113549.1.9.15.3': 'Receipt Request',
    '1.2.840.113549.1.9.15.4': 'Receipt',
    '1.2.840.113549.1.9.15.5': 'Content Hints',
    '1.2.840.113549.1.9.15.6': 'Ml Expansion History',
    '1.2.840.113549.1.9.16': 'Id-sMIME',
    '1.2.840.113549.1.9.16.0': 'Id-mod',
    '1.2.840.113549.1.9.16.0.1': 'Id-mod-cms',
    '1.2.840.113549.1.9.16.0.2': 'Id-mod-ess',
    '1.2.840.113549.1.9.16.0.3': 'Id-mod-oid',
    '1.2.840.113549.1.9.16.0.4': 'Id-mod-msg-v3',
    '1.2.840.113549.1.9.16.0.5': 'Id-mod-ets-e Signature-88',
    '1.2.840.113549.1.9.16.0.6': 'Id-mod-ets-e Signature-97',
    '1.2.840.113549.1.9.16.0.7': 'Id-mod-ets-e Sig Policy-88',
    '1.2.840.113549.1.9.16.0.8': 'Id-mod-ets-e Sig Policy-88',
    '1.2.840.113549.1.9.16.1': 'Content Type',
    '1.2.840.113549.1.9.16.1.1': 'Receipt',
    '1.2.840.113549.1.9.16.1.2': 'Auth Data',
    '1.2.840.113549.1.9.16.1.3': 'Publish Cert',
    '1.2.840.113549.1.9.16.1.4': 'TST Info',
    '1.2.840.113549.1.9.16.1.5': 'TDT Info',
    '1.2.840.113549.1.9.16.1.6': 'Content Info',
    '1.2.840.113549.1.9.16.1.7': 'DVCS Request Data',
    '1.2.840.113549.1.9.16.1.8': 'DVCS Response Data',
    '1.2.840.113549.1.9.16.1.9': 'Compressed Data',
    '1.2.840.113549.1.9.16.1.10': 'SCVP Cert Val Request',
    '1.2.840.113549.1.9.16.1.11': 'SCVP Cert Val Response',
    '1.2.840.113549.1.9.16.1.12': 'SCVP Val Pol Request',
    '1.2.840.113549.1.9.16.1.13': 'SCVP Val Pol Response',
    '1.2.840.113549.1.9.16.1.14': 'Attr Cert Enc Attrs',
    '1.2.840.113549.1.9.16.1.15': 'TS Req',
    '1.2.840.113549.1.9.16.1.16': 'Firmware Package',
    '1.2.840.113549.1.9.16.1.17': 'Firmware Load Receipt',
    '1.2.840.113549.1.9.16.1.18': 'Firmware Load Error',
    '1.2.840.113549.1.9.16.1.19': 'Content Collection',
    '1.2.840.113549.1.9.16.1.20': 'Content with Attrs',
    '1.2.840.113549.1.9.16.1.21': 'Enc Key with I D',
    '1.2.840.113549.1.9.16.1.22': 'Enc PEPSI',
    '1.2.840.113549.1.9.16.1.23': 'Auth Enveloped Data',
    '1.2.840.113549.1.9.16.1.24': 'Route Origin Attest',
    '1.2.840.113549.1.9.16.1.25': 'Symmetric Key Package',
    '1.2.840.113549.1.9.16.1.26': 'Rpki Manifest',
    '1.2.840.113549.1.9.16.1.27': 'Ascii Text with CRLF',
    '1.2.840.113549.1.9.16.1.28': 'XML',
    '1.2.840.113549.1.9.16.1.29': 'PDF',
    '1.2.840.113549.1.9.16.1.30': 'Postscript',
    '1.2.840.113549.1.9.16.1.31': 'Timestamped Data',
    '1.2.840.113549.1.9.16.1.32': 'As Adjacency Attest',
    '1.2.840.113549.1.9.16.1.33': 'Rpki Trust Anchor',
    '1.2.840.113549.1.9.16.1.34': 'Trust Anchor List',
    '1.2.840.113549.1.9.16.2': 'Authenticated Attributes',
    '1.2.840.113549.1.9.16.2.1': 'Receipt Request',
    '1.2.840.113549.1.9.16.2.2': 'Security Label',
    '1.2.840.113549.1.9.16.2.3': 'Ml Expand History',
    '1.2.840.113549.1.9.16.2.4': 'Content Hint',
    '1.2.840.113549.1.9.16.2.5': 'Msg Sig Digest',
    '1.2.840.113549.1.9.16.2.6': 'Encap Content Type',
    '1.2.840.113549.1.9.16.2.7': 'Content Identifier',
    '1.2.840.113549.1.9.16.2.8': 'Mac Value',
    '1.2.840.113549.1.9.16.2.9': 'Equivalent Labels',
    '1.2.840.113549.1.9.16.2.10': 'Content Reference',
    '1.2.840.113549.1.9.16.2.11': 'Encryp Key Pref',
    '1.2.840.113549.1.9.16.2.12': 'Signing Certificate',
    '1.2.840.113549.1.9.16.2.13': 'Smime Encrypt Certs',
    '1.2.840.113549.1.9.16.2.14': 'Time Stamp Token',
    '1.2.840.113549.1.9.16.2.15': 'Sig Policy Id',
    '1.2.840.113549.1.9.16.2.16': 'Commitment Type',
    '1.2.840.113549.1.9.16.2.17': 'Signer Location',
    '1.2.840.113549.1.9.16.2.18': 'Signer Attr',
    '1.2.840.113549.1.9.16.2.19': 'Other Sig Cert',
    '1.2.840.113549.1.9.16.2.20': 'Content Timestamp',
    '1.2.840.113549.1.9.16.2.21': 'Certificate Refs',
    '1.2.840.113549.1.9.16.2.22': 'Revocation Refs',
    '1.2.840.113549.1.9.16.2.23': 'Cert Values',
    '1.2.840.113549.1.9.16.2.24': 'Revocation Values',
    '1.2.840.113549.1.9.16.2.25': 'Esc Time Stamp',
    '1.2.840.113549.1.9.16.2.26': 'Cert CRL Timestamp',
    '1.2.840.113549.1.9.16.2.27': 'Archive Time Stamp',
    '1.2.840.113549.1.9.16.2.28': 'Signature Type',
    '1.2.840.113549.1.9.16.2.29': 'Dvcs Dvc',
    '1.2.840.113549.1.9.16.2.30': 'Cek Reference',
    '1.2.840.113549.1.9.16.2.31': 'Max CEK Decrypts',
    '1.2.840.113549.1.9.16.2.32': 'Kek Derivation Alg',
    '1.2.840.113549.1.9.16.2.33': 'Intended Recipients',
    '1.2.840.113549.1.9.16.2.34': 'Cmc Unsigned Data',
    '1.2.840.113549.1.9.16.2.35': 'Fw Package ID',
    '1.2.840.113549.1.9.16.2.36': 'Fw Target Hardware IDs',
    '1.2.840.113549.1.9.16.2.37': 'Fw Decrypt Key ID',
    '1.2.840.113549.1.9.16.2.38': 'Fw Impl Crypt Algs',
    '1.2.840.113549.1.9.16.2.39': 'Fw Wrapped Firmware Key',
    '1.2.840.113549.1.9.16.2.40': 'Fw Community Identifiers',
    '1.2.840.113549.1.9.16.2.41': 'Fw Pkg Message Digest',
    '1.2.840.113549.1.9.16.2.42': 'Fw Package Info',
    '1.2.840.113549.1.9.16.2.43': 'Fw Impl Compress Algs',
    '1.2.840.113549.1.9.16.2.44': 'Ets Attr Certificate Refs',
    '1.2.840.113549.1.9.16.2.45': 'Ets Attr Revocation Refs',
    '1.2.840.113549.1.9.16.2.46': 'Binary Signing Time',
    '1.2.840.113549.1.9.16.2.47': 'Signing Certificate V2',
    '1.2.840.113549.1.9.16.2.48': 'Ets Archive Time Stamp V2',
    '1.2.840.113549.1.9.16.2.49': 'Er Internal',
    '1.2.840.113549.1.9.16.2.50': 'Er External',
    '1.2.840.113549.1.9.16.2.51': 'Multiple Signatures',
    '1.2.840.113549.1.9.16.3.1': 'Es DHwith3 DES',
    '1.2.840.113549.1.9.16.3.2': 'Es DHwith RC2',
    '1.2.840.113549.1.9.16.3.3': '3des Wrap',
    '1.2.840.113549.1.9.16.3.4': 'Rc2 Wrap',
    '1.2.840.113549.1.9.16.3.5': 'Es DH',
    '1.2.840.113549.1.9.16.3.6': 'Cms3 DESwrap',
    '1.2.840.113549.1.9.16.3.7': 'Cms RC2wrap',
    '1.2.840.113549.1.9.16.3.8': 'Zlib',
    '1.2.840.113549.1.9.16.3.9': 'Pwri KEK',
    '1.2.840.113549.1.9.16.3.10': 'Ss DH',
    '1.2.840.113549.1.9.16.3.11': 'Hmac With3 DE Swrap',
    '1.2.840.113549.1.9.16.3.12': 'Hmac with AE Swrap',
    '1.2.840.113549.1.9.16.3.13': 'MD5 Xor Experiment',
    '1.2.840.113549.1.9.16.3.14': 'RSA KEM',
    '1.2.840.113549.1.9.16.3.15': 'Auth Enc128',
    '1.2.840.113549.1.9.16.3.16': 'Auth Enc256',
    '1.2.840.113549.1.9.16.4.1': 'Cert Dist-ldap',
    '1.2.840.113549.1.9.16.5.1': 'Sig Policy Qualifier-spuri x',
    '1.2.840.113549.1.9.16.5.2': 'Sig Policy Qualifier-sp User Notice',
    '1.2.840.113549.1.9.16.6.1': 'Proof Of Origin',
    '1.2.840.113549.1.9.16.6.2': 'Proof Of Receipt',
    '1.2.840.113549.1.9.16.6.3': 'Proof Of Delivery',
    '1.2.840.113549.1.9.16.6.4': 'Proof Of Sender',
    '1.2.840.113549.1.9.16.6.5': 'Proof Of Approval',
    '1.2.840.113549.1.9.16.6.6': 'Proof Of Creation',
    '1.2.840.113549.1.9.16.8.1': 'Gl Use KEK',
    '1.2.840.113549.1.9.16.8.2': 'Gl Delete',
    '1.2.840.113549.1.9.16.8.3': 'Gl Add Member',
    '1.2.840.113549.1.9.16.8.4': 'Gl Delete Member',
    '1.2.840.113549.1.9.16.8.5': 'Gl Rekey',
    '1.2.840.113549.1.9.16.8.6': 'Gl Add Owner',
    '1.2.840.113549.1.9.16.8.7': 'Gl Remove Owner',
    '1.2.840.113549.1.9.16.8.8': 'Glk Compromise',
    '1.2.840.113549.1.9.16.8.9': 'Glk Refresh',
    '1.2.840.113549.1.9.16.8.10': 'Gl Fail Info',
    '1.2.840.113549.1.9.16.8.11': 'Gla Query Request',
    '1.2.840.113549.1.9.16.8.12': 'Gla Query Response',
    '1.2.840.113549.1.9.16.8.13': 'Gl Provide Cert',
    '1.2.840.113549.1.9.16.8.14': 'Gl Update Cert',
    '1.2.840.113549.1.9.16.8.15': 'Gl Key',
    '1.2.840.113549.1.9.16.9': 'Signature Type Identifier',
    '1.2.840.113549.1.9.16.9.1': 'Originator Sig',
    '1.2.840.113549.1.9.16.9.2': 'Domain Sig',
    '1.2.840.113549.1.9.16.9.3': 'Additional Attributes Sig',
    '1.2.840.113549.1.9.16.9.4': 'Review Sig',
    '1.2.840.113549.1.9.16.11': 'Capabilities',
    '1.2.840.113549.1.9.16.11.1': 'Prefer Binary Inside',
    '1.2.840.113549.1.9.20': 'Friendly Name (for PKCS #12)',
    '1.2.840.113549.1.9.21': 'Local Key I D (for PKCS #12)',
    '1.2.840.113549.1.9.22': 'Cert Types (for PKCS #12)',
    '1.2.840.113549.1.9.22.1': 'x509 Certificate (for PKCS #12)',
    '1.2.840.113549.1.9.22.2': 'SDSI Certificate (for PKCS #12)',
    '1.2.840.113549.1.9.23': 'CRL Types (for PKCS #12)',
    '1.2.840.113549.1.9.23.1': 'x509 Crl (for PKCS #12)',
    '1.2.840.113549.1.9.24': 'PKCS9object Class',
    '1.2.840.113549.1.9.25': 'PKCS9attributes',
    '1.2.840.113549.1.9.25.1': 'PKCS15 Token',
    '1.2.840.113549.1.9.25.2': 'Encrypted Private Key Info',
    '1.2.840.113549.1.9.25.3': 'Random Nonce',
    '1.2.840.113549.1.9.25.4': 'Sequence Number',
    '1.2.840.113549.1.9.25.5': 'PKCS7 PDU',
    '1.2.840.113549.1.9.26': 'PKCS9syntax',
    '1.2.840.113549.1.9.27': 'PKCS9matching Rules',
    '1.2.840.113549.1.12': 'PKCS-12',
    '1.2.840.113549.1.12.1': 'PKCS-12- Pbe Ids#12 mode ID',
    '1.2.840.113549.1.12.1.1': 'PBE with SHA And128 Bit RC4',
    '1.2.840.113549.1.12.1.2': 'PBE with SHA And40 Bit RC4',
    '1.2.840.113549.1.12.1.3': 'PBE with SHA And3-Key Triple DES-CBC',
    '1.2.840.113549.1.12.1.4': 'PBE with SHA And2-Key Triple DES-CBC',
    '1.2.840.113549.1.12.1.5': 'PBE with SHA And128 Bit RC2-CBC',
    '1.2.840.113549.1.12.1.6': 'PBE with SHA And40 Bit RC2-CBC',
    '1.2.840.113549.1.12.2': 'PKCS-12-ESPVKID',
    '1.2.840.113549.1.12.2.1': 'PKCS-12-PKCS8 Key Shrouding(1284011354911235) instead',
    '1.2.840.113549.1.12.3': 'PKCS-12-Bag Ids',
    '1.2.840.113549.1.12.3.1': 'PKCS-12-key Bag Id',
    '1.2.840.113549.1.12.3.2': 'PKCS-12-cert And CRL Bag Id',
    '1.2.840.113549.1.12.3.3': 'PKCS-12-secret Bag Id',
    '1.2.840.113549.1.12.3.4': 'PKCS-12-safe Contents Id',
    '1.2.840.113549.1.12.3.5': 'PKCS-12-pkcs',
    '1.2.840.113549.1.12.4': 'PKCS-12-Cert Bag ID',
    '1.2.840.113549.1.12.4.1': 'PKCS-12-x509 Cert CRL Bag I Dformerly assigned as pkcs-12-x509 Cert CRL Bag',
    '1.2.840.113549.1.12.4.2': 'PKCS-12-SDSI Cert Bag I Dformerly assigned as pkcs-12-SDSI Cert Bag',
    '1.2.840.113549.1.12.5': 'PKCS-12-OID',
    '1.2.840.113549.1.12.5.1': 'PKCS-12-PBEI Dthe partially compatible (128401135491121) OIDs instead',
    '1.2.840.113549.1.12.5.1.1': 'PKCS-12-PBE with SHA1 And128 Bit RC4use (1284011354911211) instead',
    '1.2.840.113549.1.12.5.1.2': 'PKCS-12-PBE with SHA1 And40 Bit RC4use (1284011354911212) instead',
    '1.2.840.113549.1.12.5.1.3': 'PKCS-12-PBE with SHA1 And Triple DESCB Cuse the incompatible but similar (1284011354911213) or (1284011354911214) instead',
    '1.2.840.113549.1.12.5.1.4': 'PKCS-12-PBE with SHA1 And128 Bit RC2CB Cuse (1284011354911215) instead',
    '1.2.840.113549.1.12.5.1.5': 'PKCS-12-PBE with SHA1 And40 Bit RC2CB Cuse (1284011354911216) instead',
    '1.2.840.113549.1.12.5.1.6': 'PKCS-12-PBE with SHA1 And RC4use the incompatible but similar (1284011354911211) or (1284011354911212) instead',
    '1.2.840.113549.1.12.5.1.7': 'PKCS-12-PBE with SHA1 And RC2CB Cuse the incompatible but similar (1284011354911215) or (1284011354911216) instead',
    '1.2.840.113549.1.12.5.2': 'PKCS-12-Enveloping I Dthe conventional  PKCS#1OIDs instead',
    '1.2.840.113549.1.12.5.2.1': 'PKCS-12-RSA Encryption With128 Bit RC4use the conventional  PKCS#1OIDs instead',
    '1.2.840.113549.1.12.5.2.2': 'PKCS-12-RSA Encryption With40 Bit RC4use the conventional  PKCS#1OIDs instead',
    '1.2.840.113549.1.12.5.2.3': 'PKCS-12-RSA Encryption with Triple DESuse the conventional  PKCS#1OIDs instead',
    '1.2.840.113549.1.12.5.3': 'PKCS-12-Signature IDuse the conventional  PKCS#1OIDs instead',
    '1.2.840.113549.1.12.5.3.1': 'PKCS-12-RSA Signature with SHA1 Digestuse the conventional  PKCS#1OIDs instead',
    '1.2.840.113549.1.12.10': 'PKCS-12 Version1',
    '1.2.840.113549.1.12.10.1': 'PKCS-12 Bad Ids',
    '1.2.840.113549.1.12.10.1.1': 'PKCS-12-key Bag',
    '1.2.840.113549.1.12.10.1.2': 'PKCS-12-pkcs',
    '1.2.840.113549.1.12.10.1.3': 'PKCS-12-cert Bag',
    '1.2.840.113549.1.12.10.1.4': 'PKCS-12-crl Bag',
    '1.2.840.113549.1.12.10.1.5': 'PKCS-12-secret Bag',
    '1.2.840.113549.1.12.10.1.6': 'PKCS-12-safe Contents Bag',
    '1.2.840.113549.1.15.1': 'PKCS15modules',
    '1.2.840.113549.1.15.2': 'PKCS15attributes',
    '1.2.840.113549.1.15.3': 'PKCS15content Type',
    '1.2.840.113549.1.15.3.1': 'PKCS15content',
    '1.2.840.113549.2': 'Digest Algorithm',
    '1.2.840.113549.2.2': 'MD2',
    '1.2.840.113549.2.4': 'MD4',
    '1.2.840.113549.2.5': 'MD5',
    '1.2.840.113549.2.7': 'HMAC with SHA1',
    '1.2.840.113549.2.8': 'HMAC with SHA224',
    '1.2.840.113549.2.9': 'HMAC with SHA256',
    '1.2.840.113549.2.10': 'HMAC with SHA384',
    '1.2.840.113549.2.11': 'HMAC with SHA512',
    '1.2.840.113549.3': 'Encryption Algorithm',
    '1.2.840.113549.3.2': 'Rc2CBC',
    '1.2.840.113549.3.3': 'Rc2ECB',
    '1.2.840.113549.3.4': 'Rc4',
    '1.2.840.113549.3.5': 'Rc4 with MAC',
    '1.2.840.113549.3.6': 'Desx-CBC',
    '1.2.840.113549.3.7': 'Des-EDE3-CBC',
    '1.2.840.113549.3.8': 'Rc5CBC',
    '1.2.840.113549.3.9': 'Rc5-CBCPad',
    '1.2.840.113549.3.10': 'DesCDMF',
    '1.2.840.113556.1.2.241': 'Delivery Mechanism',
    '1.2.840.113556.1.2.281': 'Nt Security Descriptor',
    '1.2.840.113556.1.3.0': 'Site-Addressing',
    '1.2.840.113556.1.3.13': 'Class Schema',
    '1.2.840.113556.1.3.14': 'Attribute Schema',
    '1.2.840.113556.1.3.17': 'Mailbox- Agent',
    '1.2.840.113556.1.3.22': 'Mailbox',
    '1.2.840.113556.1.3.23': 'Container',
    '1.2.840.113556.1.3.46': 'Mail Recipient',
    '1.2.840.113556.1.4.145': 'Revision',
    '1.2.840.113556.1.4.1327': 'PKI Default Key Spec',
    '1.2.840.113556.1.4.1328': 'PKI Key Usage',
    '1.2.840.113556.1.4.1329': 'PKI Max Issuing Depth',
    '1.2.840.113556.1.4.1330': 'PKI Critical Extensions',
    '1.2.840.113556.1.4.1331': 'PKI Expiration Period',
    '1.2.840.113556.1.4.1332': 'PKI Overlap Period',
    '1.2.840.113556.1.4.1333': 'PKI Extended Key Usage',
    '1.2.840.113556.1.4.1334': 'PKI Default CSPs',
    '1.2.840.113556.1.4.1335': 'PKI Enrollment Access',
    '1.2.840.113556.1.4.1429': 'MsPKI-RA-Signature',
    '1.2.840.113556.1.4.1430': 'MsPKI-Enrollment-Flag',
    '1.2.840.113556.1.4.1431': 'MsPKI-Private-Key',
    '1.2.840.113556.1.4.1432': 'MsPKI-Certificate-Name',
    '1.2.840.113556.1.4.1433': 'MsPKI-Minimal-Key',
    '1.2.840.113556.1.4.1434': 'MsPKI-Template-Schema',
    '1.2.840.113556.1.4.1435': 'MsPKI-Template-Minor',
    '1.2.840.113556.1.4.1436': 'MsPKI-Cert-Template',
    '1.2.840.113556.1.4.1437': 'MsPKI-Supersede-Templates',
    '1.2.840.113556.1.4.1438': 'MsPKI-RA-Policies',
    '1.2.840.113556.1.4.1439': 'MsPKI-Certificate-Policy',
    '1.2.840.113556.1.4.1674': 'MsPKI-Certificate-Application',
    '1.2.840.113556.1.4.1675': 'MsPKI-R A- Application',
    '1.2.840.113556.4.3': 'Microsoft Excel',
    '1.2.840.113556.4.4': 'Titled with OID',
    '1.2.840.113556.4.5': 'Microsoft Power Point',
    '1.2.840.113583.1': 'Adobe Acrobat',
    '1.2.840.113583.1.1': 'Acrobat Security',
    '1.2.840.113583.1.1.1': 'PDF Password',
    '1.2.840.113583.1.1.2': 'PDF Default Signing Credential',
    '1.2.840.113583.1.1.3': 'PDF Default Encryption Credential',
    '1.2.840.113583.1.1.4': 'PDF Password Timeout',
    '1.2.840.113583.1.1.5': 'PDF Authentic Documents Trust',
    '1.2.840.113583.1.1.6': 'PDF Dynamic Content Trust',
    '1.2.840.113583.1.1.7': 'PDF Ubiquity Trust',
    '1.2.840.113583.1.1.8': 'PDF Revocation Info Archival',
    '1.2.840.113583.1.1.9': 'PDF x509 Extension',
    '1.2.840.113583.1.1.9.1': 'Adobe Time-stamp',
    '1.2.840.113583.1.1.9.2': 'Adobe Archive Rev Info',
    '1.2.840.113583.1.1.10': 'PDF PPLK Lite Credential',
    '1.2.840.113583.1.2.': 'Acrobat CPS',
    '1.2.840.113583.1.2.1': 'PDF Authentic Documents CPS',
    '1.2.840.113583.1.2.2': 'PDF Test CPS',
    '1.2.840.113583.1.2.3': 'PDF Ubiquity CPS',
    '1.2.840.113583.1.2.4': 'PDF Adhoc CPS',
    '1.2.840.113583.1.7': 'Acrobat Ubiquity',
    '1.2.840.113583.1.7.1': 'PDF Ubiquity Sub Rights',
    '1.2.840.113583.1.9': 'Acrobat Extension',
    '1.2.840.113628.114.1.7': 'Adobe PKCS7',
    '1.2.840.113635.100': 'Apple Data Security',
    '1.2.840.113635.100.1': 'Apple Trust Policy',
    '1.2.840.113635.100.1.1': 'Apple I Sign TP',
    '1.2.840.113635.100.1.2': 'Apple x509 Basic',
    '1.2.840.113635.100.1.3': 'Apple SSL Policy',
    '1.2.840.113635.100.1.4': 'Apple Local Cert Gen Policy',
    '1.2.840.113635.100.1.5': 'Apple CSR Gen Policy',
    '1.2.840.113635.100.1.6': 'Apple CRL Policy',
    '1.2.840.113635.100.1.7': 'Apple OCSP Policy',
    '1.2.840.113635.100.1.8': 'Apple SMIME Policy',
    '1.2.840.113635.100.1.9': 'Apple EAP Policy',
    '1.2.840.113635.100.1.10': 'Apple SW Update Signing Policy',
    '1.2.840.113635.100.1.11': 'Apple IPSec Policy',
    '1.2.840.113635.100.1.12': 'Apple IChat Policy',
    '1.2.840.113635.100.1.13': 'Apple Resource Sign Policy',
    '1.2.840.113635.100.1.14': 'Apple PKINIT Client Policy',
    '1.2.840.113635.100.1.15': 'Apple PKINIT Server Policy',
    '1.2.840.113635.100.1.16': 'Apple Code Signing Policy',
    '1.2.840.113635.100.1.17': 'Apple Package Signing Policy',
    '1.2.840.113635.100.2': 'Apple Security Algorithm',
    '1.2.840.113635.100.2.1': 'Apple FEE',
    '1.2.840.113635.100.2.2': 'Apple ASC',
    '1.2.840.113635.100.2.3': 'Apple FEE_MD5',
    '1.2.840.113635.100.2.4': 'Apple FEE_SHA1',
    '1.2.840.113635.100.2.5': 'Apple FEED',
    '1.2.840.113635.100.2.6': 'Apple FEEDEXP',
    '1.2.840.113635.100.2.7': 'Apple ECDSA',
    '1.2.840.113635.100.3': 'Apple Dot Mac Certificate',
    '1.2.840.113635.100.3.1': 'Apple Dot Mac Certificate Request',
    '1.2.840.113635.100.3.2': 'Apple Dot Mac Certificate Extension',
    '1.2.840.113635.100.3.3': 'Apple Dot Mac Certificate Request Values',
    '1.2.840.113635.100.4': 'Apple Extended Key Usage',
    '1.2.840.113635.100.4.1': 'Apple Code Signing',
    '1.2.840.113635.100.4.1.1': 'Apple Code Signing Development',
    '1.2.840.113635.100.4.1.2': 'Apple Software Update Signing',
    '1.2.840.113635.100.4.1.3': 'Apple Code Signing Third Party',
    '1.2.840.113635.100.4.1.4': 'Apple Resource Signing',
    '1.2.840.113635.100.4.2': 'Apple I Chat Signing',
    '1.2.840.113635.100.4.3': 'Apple I Chat Encryption',
    '1.2.840.113635.100.4.4': 'Apple System Identity',
    '1.2.840.113635.100.4.5': 'Apple Crypto Env',
    '1.2.840.113635.100.4.5.1': 'Apple Crypto Production Env',
    '1.2.840.113635.100.4.5.2': 'Apple Crypto Maintenance Env',
    '1.2.840.113635.100.4.5.3': 'Apple Crypto Test Env',
    '1.2.840.113635.100.4.5.4': 'Apple Crypto Development Env',
    '1.2.840.113635.100.4.6': 'Apple Crypto Qo S',
    '1.2.840.113635.100.4.6.1': 'Apple Crypto Tier0 QoS',
    '1.2.840.113635.100.4.6.2': 'Apple Crypto Tier1 QoS',
    '1.2.840.113635.100.4.6.3': 'Apple Crypto Tier2 QoS',
    '1.2.840.113635.100.4.6.4': 'Apple Crypto Tier3 QoS',
    '1.2.840.113635.100.4.7': 'Apple ID Sharing Certificate',
    '1.2.840.113635.100.5': 'Apple Certificate Policies',
    '1.2.840.113635.100.5.1': 'Apple Certificate Policy ID',
    '1.2.840.113635.100.5.2': 'Apple Dot Mac Certificate Policy ID',
    '1.2.840.113635.100.5.3': 'Apple ADC Certificate Policy ID',
    '1.2.840.113635.100.5.7.1': 'Apple ID Sharing Certificate Policy',
    '1.2.840.113635.100.6': 'Apple Certificate Extensions',
    '1.2.840.113635.100.6.1': 'Apple Certificate Extension Code Signing',
    '1.2.840.113635.100.6.1.1': 'Apple Certificate Extension Apple Signing',
    '1.2.840.113635.100.6.1.2': 'Apple Certificate Extension ADC Developer Signing',
    '1.2.840.113635.100.6.1.3': 'Apple Certificate Extension ADC Apple Signing',
    '1.2.840.113635.100.6.2.3': 'Apple Application Integration',
    '1.2.840.114021.1.6.1': 'Identrus unknown policy Identifier',
    '1.2.840.114021.4.1': 'Identrus OCSP',
    '1.3.6.1.4.1.188.7.1.1': 'Ascom',
    '1.3.6.1.4.1.188.7.1.1.1': 'Idea ECB',
    '1.3.6.1.4.1.188.7.1.1.2': 'Idea CBC',
    '1.3.6.1.4.1.188.7.1.1.3': 'Idea CFB',
    '1.3.6.1.4.1.188.7.1.1.4': 'Idea OFB',
    '1.3.6.1.4.1.311.2.1.4': 'Spc Indirect Data Context',
    '1.3.6.1.4.1.311.2.1.10': 'Spc Agency Info',
    '1.3.6.1.4.1.311.2.1.11': 'Spc Statement Type',
    '1.3.6.1.4.1.311.2.1.12': 'Spc Sp Opus Info',
    '1.3.6.1.4.1.311.2.1.14': 'Cert Req Extensions',
    '1.3.6.1.4.1.311.2.1.15': 'Spc P E Image Data',
    '1.3.6.1.4.1.311.2.1.18': 'Spc Raw File Data',
    '1.3.6.1.4.1.311.2.1.19': 'Spc Structured Storage Data',
    '1.3.6.1.4.1.311.2.1.20': 'Spc Java ClassData (type 1extension\',aka \'Glue extension)',
    '1.3.6.1.4.1.311.2.1.21': 'Individual Code Signing',
    '1.3.6.1.4.1.311.2.1.22': 'Commercial Code Signing',
    '1.3.6.1.4.1.311.2.1.25': 'Spc Link (type 2as \'Glue extension)',
    '1.3.6.1.4.1.311.2.1.26': 'Spc Minimal Criteria Info',
    '1.3.6.1.4.1.311.2.1.27': 'Spc Financial Criteria Info',
    '1.3.6.1.4.1.311.2.1.28': 'SpcLink (type 3as \'Glue extension)',
    '1.3.6.1.4.1.311.2.1.29': 'Spc Hash Info Obj ID',
    '1.3.6.1.4.1.311.2.1.30': 'Spc Sip Info Obj ID',
    '1.3.6.1.4.1.311.2.2': 'Ctl',
    '1.3.6.1.4.1.311.2.2.1': 'Ctl Trusted Codesigning CAList',
    '1.3.6.1.4.1.311.2.2.2': 'Ctl Trusted Client Auth CAList',
    '1.3.6.1.4.1.311.2.2.3': 'Ctl Trusted Server Auth CAList',
    '1.3.6.1.4.1.311.3.2.1': 'Timestamp Request',
    '1.3.6.1.4.1.311.10.1': 'Cert Trust List',
    '1.3.6.1.4.1.311.10.1.1': 'Sorted Ctl',
    '1.3.6.1.4.1.311.10.2': 'Next Update Location',
    '1.3.6.1.4.1.311.10.3.1': 'Cert Trust List Signing',
    '1.3.6.1.4.1.311.10.3.2': 'Time Stamp Signing',
    '1.3.6.1.4.1.311.10.3.3': 'Server Gated Crypto',
    '1.3.6.1.4.1.311.10.3.3.1': 'Serialized',
    '1.3.6.1.4.1.311.10.3.4': 'Encrypted File System',
    '1.3.6.1.4.1.311.10.3.4.1': 'Efs Recovery',
    '1.3.6.1.4.1.311.10.3.5': 'Whql Crypto',
    '1.3.6.1.4.1.311.10.3.6': 'Nt5 Crypto',
    '1.3.6.1.4.1.311.10.3.7': 'Oem WHQL Crypto',
    '1.3.6.1.4.1.311.10.3.8': 'Embedded NT Crypto',
    '1.3.6.1.4.1.311.10.3.9': 'Root List Signer',
    '1.3.6.1.4.1.311.10.3.10': 'Qualified Subordination',
    '1.3.6.1.4.1.311.10.3.11': 'Key Recovery',
    '1.3.6.1.4.1.311.10.3.12': 'Document Signing',
    '1.3.6.1.4.1.311.10.3.13': 'Lifetime Signing',
    '1.3.6.1.4.1.311.10.3.14': 'Mobile Device Software',
    '1.3.6.1.4.1.311.10.3.15': 'Smart Display',
    '1.3.6.1.4.1.311.10.3.16': 'Csp Signature',
    '1.3.6.1.4.1.311.10.4.1': 'yesno Trust Attr',
    '1.3.6.1.4.1.311.10.5.1': 'Drm',
    '1.3.6.1.4.1.311.10.5.2': 'Drm Individualization',
    '1.3.6.1.4.1.311.10.6.1': 'Licenses',
    '1.3.6.1.4.1.311.10.6.2': 'License Server',
    '1.3.6.1.4.1.311.10.7.1': 'Keyid Rdn',
    '1.3.6.1.4.1.311.10.8.1': 'Remove Certificate',
    '1.3.6.1.4.1.311.10.9.1': 'Cross Cert Dist Points',
    '1.3.6.1.4.1.311.10.10.1': 'Cmc Add Attributes',
    '1.3.6.1.4.1.311.10.11': 'Cert Prop Id Prefix',
    '1.3.6.1.4.1.311.10.11.4': 'Cert Md5 Hash Prop Id',
    '1.3.6.1.4.1.311.10.11.20': 'Cert Key Identifier Prop Id',
    '1.3.6.1.4.1.311.10.11.28': 'Cert Issuer Serial Number Md5 Hash Prop Id',
    '1.3.6.1.4.1.311.10.11.29': 'Cert Subject Name MD5 Hash Prop Id',
    '1.3.6.1.4.1.311.10.12.1': 'Any Application Policy',
    '1.3.6.1.4.1.311.12': 'Catalog',
    '1.3.6.1.4.1.311.12.1.1': 'Catalog List',
    '1.3.6.1.4.1.311.12.1.2': 'Catalog List Member',
    '1.3.6.1.4.1.311.12.2.1': 'Catalog Name Value Obj ID',
    '1.3.6.1.4.1.311.12.2.2': 'Catalog Member Info Obj ID',
    '1.3.6.1.4.1.311.13.1': 'Renewal Certificate',
    '1.3.6.1.4.1.311.13.2.1': 'Enrolment Name Value Pair',
    '1.3.6.1.4.1.311.13.2.2': 'Enrolment CSP',
    '1.3.6.1.4.1.311.13.2.3': 'Os Version',
    '1.3.6.1.4.1.311.16.4': 'Microsoft Recipient Info',
    '1.3.6.1.4.1.311.17.1': 'PKCS12 Key Provider Name Attr',
    '1.3.6.1.4.1.311.17.2': 'Local Machine Keyset',
    '1.3.6.1.4.1.311.17.3': 'PKCS12 Extended Attributes',
    '1.3.6.1.4.1.311.20.1': 'Auto Enroll Ctl Usage',
    '1.3.6.1.4.1.311.20.2': 'Microsoft Certificate Type',
    '1.3.6.1.4.1.311.20.2.1': 'Enrollment Agent',
    '1.3.6.1.4.1.311.20.2.2': 'Smartcard Logon',
    '1.3.6.1.4.1.311.20.2.3': 'NP Principal Name',
    '1.3.6.1.4.1.311.20.3': 'Cert Manifold',
    '1.3.6.1.4.1.311.21.1': 'Microsoft Certification Authority Renewal',
    '1.3.6.1.4.1.311.21.2': 'Microsoft Certificate Previous Hash',
    '1.3.6.1.4.1.311.21.3': 'CRL Virtual Base',
    '1.3.6.1.4.1.311.21.4': 'CRL Next Publish',
    '1.3.6.1.4.1.311.21.5': 'Ca Exchange',
    '1.3.6.1.4.1.311.21.6': 'Key Recovery',
    '1.3.6.1.4.1.311.21.7': 'Microsoft Certificate Template',
    '1.3.6.1.4.1.311.21.8': 'Enterprize OID Root',
    '1.3.6.1.4.1.311.21.9': 'Rdn Dummy Signer',
    '1.3.6.1.4.1.311.21.10': 'Microsoft Certificate Policies',
    '1.3.6.1.4.1.311.21.11': 'Application Policy Mappings',
    '1.3.6.1.4.1.311.21.12': 'Application Policy Constraints',
    '1.3.6.1.4.1.311.21.13': 'Archived Key',
    '1.3.6.1.4.1.311.21.14': 'CRL Self CDP',
    '1.3.6.1.4.1.311.21.15': 'Require Cert Chain Policy',
    '1.3.6.1.4.1.311.21.16': 'Archived Key Cert Hash',
    '1.3.6.1.4.1.311.21.17': 'Issued Cert Hash',
    '1.3.6.1.4.1.311.21.19': 'DS Email Replication',
    '1.3.6.1.4.1.311.21.20': 'Request Client Info',
    '1.3.6.1.4.1.311.21.21': 'Encrypted Key Hash',
    '1.3.6.1.4.1.311.21.22': 'Certsrv Cross CA Version',
    '1.3.6.1.4.1.311.25.1': 'Ntds Replication',
    '1.3.6.1.4.1.311.31.1': 'Product Update',
    '1.3.6.1.4.1.311.47.1.1': 'System Health',
    '1.3.6.1.4.1.311.47.1.3': 'System Health Loophole',
    '1.3.6.1.4.1.311.60.1.1': 'Root Program Flags',
    '1.3.6.1.4.1.311.60.2.1.1': 'Jurisdiction Of Incorporation L',
    '1.3.6.1.4.1.311.60.2.1.2': 'Jurisdiction Of Incorporation SP',
    '1.3.6.1.4.1.311.60.2.1.3': 'Jurisdiction Of Incorporation C',
    '1.3.6.1.4.1.311.61.1.1': 'Kernel Mode Code Signing',
    '1.3.6.1.4.1.311.84.1.1': 'ASP.NET HTTPS Development certificate',
    '1.3.6.1.4.1.311.88': 'CAPICOM',
    '1.3.6.1.4.1.311.88.1': 'CAPICOM version',
    '1.3.6.1.4.1.311.88.2': 'CAPICOM attribute',
    '1.3.6.1.4.1.311.88.2.1': 'Document type attribute',
    '1.3.6.1.4.1.311.88.2.2': 'Document description attribute',
    '1.3.6.1.4.1.311.88.3': 'CAPICOM encrypted data message',
    '1.3.6.1.4.1.311.88.3.1': 'CAPICOM content of encrypted data',
    '1.3.6.1.4.1.782.1.2.1.8.1': 'Network  Solutions  EV policy',
    '1.3.6.1.4.1.2428.10.1.1': 'UNINETT policy Identifier',
    '1.3.6.1.4.1.2712.10': 'ICE-TEL policy Identifier',
    '1.3.6.1.4.1.2786.1.1.1': 'ICE-TEL  Italian',
    '1.3.6.1.4.1.3029.1.1.1': 'Blowfish ECB',
    '1.3.6.1.4.1.3029.1.1.2': 'Blowfish CBC',
    '1.3.6.1.4.1.3029.1.1.3': 'Blowfish CFB',
    '1.3.6.1.4.1.3029.1.1.4': 'Blowfish OFB',
    '1.3.6.1.4.1.3029.1.2.1': 'Elgamal',
    '1.3.6.1.4.1.3029.1.2.1.1': 'Elgamal with SHA-1',
    '1.3.6.1.4.1.3029.1.2.1.2': 'Elgamal with RIPEMD-160',
    '1.3.6.1.4.1.3029.3.1.1': 'Cryptlib Presence Check',
    '1.3.6.1.4.1.3029.3.1.2': 'Pki Boot',
    '1.3.6.1.4.1.3029.3.1.4': 'CRL Ext Reason',
    '1.3.6.1.4.1.3029.3.1.5': 'Key Features',
    '1.3.6.1.4.1.3029.4.1': 'Cryptlib Content',
    '1.3.6.1.4.1.3029.4.1.1': 'Cryptlib Config Data',
    '1.3.6.1.4.1.3029.4.1.2': 'Cryptlib User Index',
    '1.3.6.1.4.1.3029.4.1.3': 'Cryptlib User Info',
    '1.3.6.1.4.1.3029.4.1.4': 'Rtcs Request',
    '1.3.6.1.4.1.3029.4.1.5': 'Rtcs Response',
    '1.3.6.1.4.1.3029.4.1.6': 'Rtcs Response Ext',
    '1.3.6.1.4.1.3029.42.11172.1': 'Mpeg-1',
    '1.3.6.1.4.1.3029.54.11940.54': 'TSA policy \'Anythingpolicy',
    '1.3.6.1.4.1.3029.88.89.90.90.89': 'XYZZY policy Identifier',
    '1.3.6.1.4.1.3401.8.1.1': 'Pgp Extension',
    '1.3.6.1.4.1.3576.7': 'Ecia Asc X12 Edi',
    '1.3.6.1.4.1.3576.7.1': 'Plain ED Imessage',
    '1.3.6.1.4.1.3576.7.2': 'Signed ED Imessage',
    '1.3.6.1.4.1.3576.7.5': 'Integrity ED Imessage',
    '1.3.6.1.4.1.3576.7.65': 'Ia Receipt Message',
    '1.3.6.1.4.1.3576.7.97': 'Ia Status Message',
    '1.3.6.1.4.1.3576.8': 'Ecia Edifact',
    '1.3.6.1.4.1.3576.9': 'Ecia Non Edi',
    // https://www.globalsign.com/en/repository/GlobalSign_CP_v5.3.pdf
    '1.3.6.1.4.1.4146': 'GlobalSign',
    '1.3.6.1.4.1.4146.1': 'GlobalSign Policy',
    '1.3.6.1.4.1.4146.1.1': 'GlobalSign EV policy',
    '1.3.6.1.4.1.4146.1.10': 'GlobalSign DV Policy',
    '1.3.6.1.4.1.4146.1.20': 'GlobalSign OV Policy',
    '1.3.6.1.4.1.4146.1.30': 'GlobalSign TSA Policy',
    '1.3.6.1.4.1.4146.1.40': 'GlobalSign Client Certificates Policy',
    '1.3.6.1.4.1.4146.1.40.10': 'GlobalSign Client Certificates Enterprise PKI Policy',
    '1.3.6.1.4.1.4146.1.50': 'GlobalSign Code Signing Certificates Policy',
    '1.3.6.1.4.1.4146.1.60': 'GlobalSign Root Sign Policy',
    '1.3.6.1.4.1.4146.1.70': 'GlobalSign Trusted Root Policy',
    '1.3.6.1.4.1.4146.1.80': 'GlobalSign EDI Client Policy',
    '1.3.6.1.4.1.4146.1.81': 'GlobalSign EDI Server Policy',
    '1.3.6.1.4.1.4146.1.90': 'GlobalSign TPM Root Policy',
    '1.3.6.1.4.1.4146.1.95': 'GlobalSign OCSP Policy',
    //
    // https://developers.yubico.com/PIV/Introduction/PIV_attestation.html
    '1.3.6.1.4.1.41482.3.3': 'YubiKey Firmware Version',
    '1.3.6.1.4.1.41482.3.7': 'YubiKey Serial Number',
    '1.3.6.1.4.1.41482.3.8': 'YubiKey PIN Touch Policy',
    '1.3.6.1.4.1.41482.3.9': 'YubiKey Formfactor',
    //
    '1.3.6.1.4.1.4788.2.202.1': 'D-TRUSTEV policy',
    '1.3.6.1.4.1.5309.1': 'Edel Web Policy',
    '1.3.6.1.4.1.5309.1.2': 'Edel Web Customer Policy',
    '1.3.6.1.4.1.5309.1.2.1': 'Edel Web Clepsydre Policy',
    '1.3.6.1.4.1.5309.1.2.2': 'Edel Web Experimental TSA Policy',
    '1.3.6.1.4.1.5309.1.2.3': 'Edel Web Open Evidence TSA Policy',
    '1.3.6.1.4.1.5472': 'Timeproof',
    '1.3.6.1.4.1.5472.1': 'TSS',
    '1.3.6.1.4.1.5472.1.1': 'TSS80',
    '1.3.6.1.4.1.5472.1.2': 'TSS380',
    '1.3.6.1.4.1.5472.1.3': 'TSS400',
    '1.3.6.1.4.1.5770.0.3': 'Secondary Practices',
    '1.3.6.1.4.1.5770.0.4': 'Physician Identifiers',
    '1.3.6.1.4.1.6334.1.100.1': 'Cybertrust EV policy',
    '1.3.6.1.4.1.6449.1.2.1.3.1': 'Comodo Policy',
    '1.3.6.1.4.1.6449.1.2.1.5.1': 'Comodo  EV policy',
    '1.3.6.1.4.1.6449.1.2.2.7': 'Comodo TLS DV',
    '1.3.6.1.4.1.6449.1.2.2.15': 'Wotrust Policy',
    '1.3.6.1.4.1.6449.1.3.5.2': 'Comodo Certified Delivery Service',
    '1.3.6.1.4.1.6449.2.1.1': 'Comodo Timestamping Policy',
    '1.3.6.1.4.1.7879.13.24.1': 'T-Tele Sec EV policy',
    '1.3.6.1.4.1.8024.0.2.100.1.2': 'QuoVadis EV policy',
    '1.3.6.1.4.1.8231.1': 'Rol Unico Nacional',
    '1.3.6.1.4.1.8301.3.5.1': 'alidity Model Chain',
    '1.3.6.1.4.1.8301.3.5.2': 'alidity Model Shell',
    '1.3.6.1.4.1.11129.2.4.2': 'Certificate Transparency',
    '1.3.6.1.4.1.11591': 'Gnu',
    '1.3.6.1.4.1.11591.1': 'Gnu Radius',
    '1.3.6.1.4.1.11591.3': 'Gnu Radar',
    '1.3.6.1.4.1.11591.12': 'Gnu Digest Algorithm',
    '1.3.6.1.4.1.11591.12.2': 'Tiger',
    '1.3.6.1.4.1.11591.13': 'Gnu Encryption Algorithm',
    '1.3.6.1.4.1.11591.13.2': 'Serpent',
    '1.3.6.1.4.1.11591.13.2.1': 'Serpent128_ECB',
    '1.3.6.1.4.1.11591.13.2.2': 'Serpent128_CBC',
    '1.3.6.1.4.1.11591.13.2.3': 'Serpent128_OFB',
    '1.3.6.1.4.1.11591.13.2.4': 'Serpent128_CFB',
    '1.3.6.1.4.1.11591.13.2.21': 'Serpent192_ECB',
    '1.3.6.1.4.1.11591.13.2.22': 'Serpent192_CBC',
    '1.3.6.1.4.1.11591.13.2.23': 'Serpent192_OFB',
    '1.3.6.1.4.1.11591.13.2.24': 'Serpent192_CFB',
    '1.3.6.1.4.1.11591.13.2.41': 'Serpent256_ECB',
    '1.3.6.1.4.1.11591.13.2.42': 'Serpent256_CBC',
    '1.3.6.1.4.1.11591.13.2.43': 'Serpent256_OFB',
    '1.3.6.1.4.1.11591.13.2.44': 'Serpent256_CFB',
    '1.3.6.1.4.1.14370.1.6': 'Geo Trust EV policy',
    '1.3.6.1.4.1.14777.6.1.1': 'Izenpe EV policy',
    '1.3.6.1.4.1.14777.6.1.2': 'Izenpe EV policy',
    '1.3.6.1.4.1.16334.509.1.1': 'Northrop Grumman ext Key Usage?',
    '1.3.6.1.4.1.16334.509.2.1': 'Ngc Class1',
    '1.3.6.1.4.1.16334.509.2.2': 'Ngc Class2',
    '1.3.6.1.4.1.16334.509.2.3': 'Ngc Class3',
    '1.3.6.1.4.1.17326.10.8.12.1.2': 'Camerfirma EV policy',
    '1.3.6.1.4.1.17326.10.14.2.1.2': 'Camerfirma EV policy',
    '1.3.6.1.4.1.22234.2.5.2.3.1': 'Cert Plus EV policy',
    '1.3.6.1.4.1.23223.1.1.1': 'Start Com EV policy',
    '1.3.6.1.4.1.23629.1.4.2.1.1': 'Safenet Usage Limit',
    '1.3.6.1.4.1.23629.1.4.2.1.2': 'Safenet End Date',
    '1.3.6.1.4.1.23629.1.4.2.1.3': 'Safenet Start Date',
    '1.3.6.1.4.1.23629.1.4.2.1.4': 'Safenet Admin Cert',
    '1.3.6.1.4.1.23629.1.4.2.2.1': 'Safenet Key Digest',
    '1.3.6.1.4.1.34697.2.1': 'Affirm Trust EV policy',
    '1.3.6.1.4.1.34697.2.2': 'Affirm Trust EV policy',
    '1.3.6.1.4.1.34697.2.3': 'Affirm Trust EV policy',
    '1.3.6.1.4.1.34697.2.4': 'Affirm Trust EV policy',
    '1.3.6.1.4.1.40869.1.1.22.3': 'TWCAEV policy',
    '1.3.6.1.4.1.13177.10.1.2.2': 'Corporate certificates for Natural Person',
    '1.3.6.1.5.2.3.5': 'KCD Authentication',
    '1.3.6.1.5.5.7': 'PKIX',
    '1.3.6.1.5.5.7.0.12': 'Attribute Cert',
    '1.3.6.1.5.5.7.1': 'Private Extension',
    '1.3.6.1.5.5.7.1.1': 'Certificate Authority Information Access',
    '1.3.6.1.5.5.7.1.2': 'Biometric Info',
    '1.3.6.1.5.5.7.1.3': 'Qualified Certificate Statements',
    '1.3.6.1.5.5.7.1.4': 'Ac Audit Identity',
    '1.3.6.1.5.5.7.1.5': 'Ac Targeting',
    '1.3.6.1.5.5.7.1.6': 'Ac Aa Controls',
    '1.3.6.1.5.5.7.1.7': 'Ip Addr Blocks',
    '1.3.6.1.5.5.7.1.8': 'Autonomous Sys Ids',
    '1.3.6.1.5.5.7.1.9': 'Router Identifier',
    '1.3.6.1.5.5.7.1.10': 'Ac Proxying',
    '1.3.6.1.5.5.7.1.11': 'Subject Info Access',
    '1.3.6.1.5.5.7.1.12': 'Logo Type',
    '1.3.6.1.5.5.7.1.13': 'Wlan SSID',
    '1.3.6.1.5.5.7.2': 'Policy Qualifier Ids',
    '1.3.6.1.5.5.7.2.1': 'Certificate Policy Statement',
    '1.3.6.1.5.5.7.2.2': 'User Notice',
    '1.3.6.1.5.5.7.2.3': 'Text Notice',
    '1.3.6.1.5.5.7.3': 'Key Purpose',
    '1.3.6.1.5.5.7.3.1': 'Server Authentication',
    '1.3.6.1.5.5.7.3.2': 'Client Authentication',
    '1.3.6.1.5.5.7.3.3': 'Code Signing',
    '1.3.6.1.5.5.7.3.4': 'Email Protection',
    '1.3.6.1.5.5.7.3.5': 'Ipsec End System',
    '1.3.6.1.5.5.7.3.6': 'Ipsec Tunnel',
    '1.3.6.1.5.5.7.3.7': 'Ipsec User',
    '1.3.6.1.5.5.7.3.8': 'Time Stamping',
    '1.3.6.1.5.5.7.3.9': 'OCSP Signing',
    '1.3.6.1.5.5.7.3.10': 'DVCS',
    '1.3.6.1.5.5.7.3.11': 'Sbgp Cert AA Server Auth',
    '1.3.6.1.5.5.7.3.13': 'Eap Over PPP',
    '1.3.6.1.5.5.7.3.14': 'Eap Over LAN',
    '1.3.6.1.5.5.7.4': 'Cmp Information Types',
    '1.3.6.1.5.5.7.4.1': 'Ca Prot Enc Cert',
    '1.3.6.1.5.5.7.4.2': 'Sign Key Pair Types',
    '1.3.6.1.5.5.7.4.3': 'Enc Key Pair Types',
    '1.3.6.1.5.5.7.4.4': 'Preferred Symm Alg',
    '1.3.6.1.5.5.7.4.5': 'CA Key Update Info',
    '1.3.6.1.5.5.7.4.6': 'Current CRL',
    '1.3.6.1.5.5.7.4.7': 'Unsupported OIDs',
    '1.3.6.1.5.5.7.4.10': 'Key Pair Param Req',
    '1.3.6.1.5.5.7.4.11': 'Key Pair Param Rep',
    '1.3.6.1.5.5.7.4.12': 'Rev Passphrase',
    '1.3.6.1.5.5.7.4.13': 'Implicit Confirm',
    '1.3.6.1.5.5.7.4.14': 'Confirm Wait Time',
    '1.3.6.1.5.5.7.4.15': 'Orig PKI Message',
    '1.3.6.1.5.5.7.4.16': 'Supp Lang Tags',
    '1.3.6.1.5.5.7.5': 'Crmf Registration',
    '1.3.6.1.5.5.7.5.1': 'Reg Ctrl',
    '1.3.6.1.5.5.7.5.1.1': 'Reg Token',
    '1.3.6.1.5.5.7.5.1.2': 'Authenticator',
    '1.3.6.1.5.5.7.5.1.3': 'Pki Publication Info',
    '1.3.6.1.5.5.7.5.1.4': 'Pki Archive Options',
    '1.3.6.1.5.5.7.5.1.5': 'Old Cert ID',
    '1.3.6.1.5.5.7.5.1.6': 'Protocol Encr Key',
    '1.3.6.1.5.5.7.5.1.7': 'Alt Cert Template',
    '1.3.6.1.5.5.7.5.1.8': 'Wtls Template',
    '1.3.6.1.5.5.7.5.2': 'Utf8 Pairs',
    '1.3.6.1.5.5.7.5.2.1': 'Utf8 Pairs',
    '1.3.6.1.5.5.7.5.2.2': 'Cert Req',
    '1.3.6.1.5.5.7.6': 'Algorithms',
    '1.3.6.1.5.5.7.6.1': 'Des40',
    '1.3.6.1.5.5.7.6.2': 'No Signature',
    '1.3.6.1.5.5.7.6.3': 'Dh-sig-hmac',
    '1.3.6.1.5.5.7.6.4': 'Dh-pop',
    '1.3.6.1.5.5.7.7': 'CMC Controls',
    '1.3.6.1.5.5.7.8': 'Other Names',
    '1.3.6.1.5.5.7.8.1': 'Personal Data',
    '1.3.6.1.5.5.7.8.2': 'User Group',
    '1.3.6.1.5.5.7.8.5': 'Xmpp Addr',
    '1.3.6.1.5.5.7.9': 'Personal Data',
    '1.3.6.1.5.5.7.9.1': 'Date Of Birth',
    '1.3.6.1.5.5.7.9.2': 'Place Of Birth',
    '1.3.6.1.5.5.7.9.3': 'Gender',
    '1.3.6.1.5.5.7.9.4': 'Country Of Citizenship',
    '1.3.6.1.5.5.7.9.5': 'Country Of Residence',
    '1.3.6.1.5.5.7.10': 'Attribute Certificate',
    '1.3.6.1.5.5.7.10.1': 'Authentication Info',
    '1.3.6.1.5.5.7.10.2': 'Access Identity',
    '1.3.6.1.5.5.7.10.3': 'Charging Identity',
    '1.3.6.1.5.5.7.10.4': 'Group',
    '1.3.6.1.5.5.7.10.5': 'Role',
    '1.3.6.1.5.5.7.10.6': 'Wlan SSID',
    '1.3.6.1.5.5.7.11': 'Personal Data',
    '1.3.6.1.5.5.7.11.1': 'Pkix QC Syntax v1',
    '1.3.6.1.5.5.7.11.2': 'Pkix QC Syntax v2',
    '1.3.6.1.5.5.7.14.2': 'Resource Certificate Policy',
    '1.3.6.1.5.5.7.20': 'Logo',
    '1.3.6.1.5.5.7.20.1': 'Logo Loyalty',
    '1.3.6.1.5.5.7.20.2': 'Logo Background',
    '1.3.6.1.5.5.7.48.1': 'OCSP',
    '1.3.6.1.5.5.7.48.1.1': 'OCSP Basic',
    '1.3.6.1.5.5.7.48.1.2': 'OCSP Nonce',
    '1.3.6.1.5.5.7.48.1.3': 'OCSP CRL',
    '1.3.6.1.5.5.7.48.1.4': 'OCSP Response',
    '1.3.6.1.5.5.7.48.1.5': 'OCSP No Check',
    '1.3.6.1.5.5.7.48.1.6': 'OCSP Archive Cutoff',
    '1.3.6.1.5.5.7.48.1.7': 'OCSP Service Locator',
    '1.3.6.1.5.5.7.48.2': 'CA Issuers',
    '1.3.6.1.5.5.7.48.3': 'Time Stamping',
    '1.3.6.1.5.5.7.48.4': 'DVCS',
    '1.3.6.1.5.5.7.48.5': 'CA Repository',
    '1.3.6.1.5.5.7.48.7': 'Signed Object Repository',
    '1.3.6.1.5.5.7.48.10': 'Rpki Manifest',
    '1.3.6.1.5.5.7.48.11': 'Signed Object',
    '1.3.6.1.5.5.8.1.1': 'HMAC MD5',
    '1.3.6.1.5.5.8.1.2': 'HMAC SHA',
    '1.3.6.1.5.5.8.1.3': 'HMAC Tiger',
    '1.3.6.1.5.5.8.2.2': 'IKE Intermediate',
    '1.3.12.2.1011.7.1': 'DEC Encryption Algorithm',
    '1.3.12.2.1011.7.1.2': 'DEC DEA',
    '1.3.12.2.1011.7.2': 'DEC Hash Algorithm',
    '1.3.12.2.1011.7.2.1': 'DECMD2',
    '1.3.12.2.1011.7.2.2': 'DECMD4',
    '1.3.12.2.1011.7.3': 'DEC Signature Algorithm',
    '1.3.12.2.1011.7.3.1': 'DEC MD2 with RSA',
    '1.3.12.2.1011.7.3.2': 'DEC MD4 with RSA',
    '1.3.12.2.1011.7.3.3': 'DEC DEAMAC',
    '1.3.14.2.26.5': 'SHA',
    '1.3.14.3.2.1.1': 'RSA',
    '1.3.14.3.2.2': 'MD4 with RSA',
    '1.3.14.3.2.2.1': 'Sqmod-N',
    '1.3.14.3.2.3': 'MD5 with RSA',
    '1.3.14.3.2.3.1': 'Sqmod-Nwith RSA',
    '1.3.14.3.2.4': 'MD4 with RSA Encryption',
    '1.3.14.3.2.6': 'DES ECB',
    '1.3.14.3.2.7': 'DES CBC',
    '1.3.14.3.2.8': 'DES OFB',
    '1.3.14.3.2.9': 'DES CFB',
    '1.3.14.3.2.10': 'DES MAC',
    '1.3.14.3.2.11': 'RSA Signature',
    '1.3.14.3.2.12': 'DSA',
    '1.3.14.3.2.13': 'DSA with SHA',
    '1.3.14.3.2.14': 'MDC2 with RSA Signature',
    '1.3.14.3.2.15': 'SHA with RSA Signature',
    '1.3.14.3.2.16': 'DH with Common Modulus',
    '1.3.14.3.2.17': 'Des EDE',
    '1.3.14.3.2.18': 'SHA',
    '1.3.14.3.2.19': 'MDC-2',
    '1.3.14.3.2.20': 'DSA Common',
    '1.3.14.3.2.21': 'DSA Common with SHA',
    '1.3.14.3.2.22': 'RSA Key Transport',
    '1.3.14.3.2.23': 'Keyed-hash-seal',
    '1.3.14.3.2.24': 'MD2 with RSA Signature',
    '1.3.14.3.2.25': 'MD5 with RSA Signature',
    '1.3.14.3.2.26': 'SHA1',
    '1.3.14.3.2.27': 'DSA with SHA1',
    '1.3.14.3.2.28': 'DSA with Common SHA1',
    '1.3.14.3.2.29': 'SHA-1 with RSA Encryption',
    '1.3.14.3.3.1': 'Simple-strong-auth',
    '1.3.14.7.2.1.1': 'El Gamal',
    '1.3.14.7.2.3.1': 'MD2 with RSA',
    '1.3.14.7.2.3.2': 'MD2 with El Gamal',
    '1.3.36.1': 'Document',
    '1.3.36.1.1': 'Final Version',
    '1.3.36.1.2': 'Draft',
    '1.3.36.2': 'Sio',
    '1.3.36.2.1': 'Sedu',
    '1.3.36.3': 'Algorithm',
    '1.3.36.3.1': 'Encryption Algorithm',
    '1.3.36.3.1.1': 'DES',
    '1.3.36.3.1.1.1': 'DES ECB_pad',
    '1.3.36.3.1.1.1.1': 'DES ECB_ISOpad',
    '1.3.36.3.1.1.2.1': 'DES CBC_pad',
    '1.3.36.3.1.1.2.1.1': 'DES CBC_ISOpad',
    '1.3.36.3.1.2': 'IDEA',
    '1.3.36.3.1.2.1': 'IDEA ECB',
    '1.3.36.3.1.2.1.1': 'IDEA ECB_pad',
    '1.3.36.3.1.2.1.1.1': 'IDEA ECB_ISOpad',
    '1.3.36.3.1.2.2': 'IDEA CBC',
    '1.3.36.3.1.2.2.1': 'IDEA CBC_pad',
    '1.3.36.3.1.2.2.1.1': 'IDEA CBC_ISOpad',
    '1.3.36.3.1.2.3': 'IDEA OFB',
    '1.3.36.3.1.2.4': 'IDEA CFB',
    '1.3.36.3.1.3': 'DES_3',
    '1.3.36.3.1.3.1.1': 'DES_3 ECB_pad',
    '1.3.36.3.1.3.1.1.1': 'DES_3 ECB_ISOpad',
    '1.3.36.3.1.3.2.1': 'DES_3 CBC_pad',
    '1.3.36.3.1.3.2.1.1': 'DES_3 CBC_ISOpad',
    '1.3.36.3.1.4': 'RSA Encryption',
    '1.3.36.3.1.4.512.17': 'RSA Encryption Withlmod512expe17',
    '1.3.36.3.1.5': 'BSI-1',
    '1.3.36.3.1.5.1': 'BSI_1 ECB_pad',
    '1.3.36.3.1.5.2': 'BSI_1 CBC_pad',
    '1.3.36.3.1.5.2.1': 'BSI_1 CBC_PEMpad',
    '1.3.36.3.2': 'Hash Algorithm',
    '1.3.36.3.2.1': 'Ripemd160',
    '1.3.36.3.2.2': 'Ripemd128',
    '1.3.36.3.2.3': 'Ripemd256',
    '1.3.36.3.2.4': 'Mdc2single Length',
    '1.3.36.3.2.5': 'Mdc2double Length',
    '1.3.36.3.3': 'Signature Algorithm',
    '1.3.36.3.3.1': 'RSA Signature',
    '1.3.36.3.3.1.1': 'RSA Signature WithSHA1',
    '1.3.36.3.3.1.1.1024.11': 'RSA Signature WithSHA1_l1024_l11',
    '1.3.36.3.3.1.2': 'RSA Signature Withripemd160',
    '1.3.36.3.3.1.2.1024.11': 'RSA Signature Withripemd160_l1024_l11',
    '1.3.36.3.3.1.3': 'RSA Signature Withrimpemd128',
    '1.3.36.3.3.1.4': 'RSA Signature Withrimpemd256',
    '1.3.36.3.3.2': 'Ecsie Sign',
    '1.3.36.3.3.2.1': 'Ecsie Sign WithSHA1',
    '1.3.36.3.3.2.2': 'Ecsie Sign Withripemd160',
    '1.3.36.3.3.2.3': 'Ecsie Sign Withmd2',
    '1.3.36.3.3.2.4': 'Ecsie Sign Withmd5',
    '1.3.36.3.3.2.8.1.1.1': 'Brainpool P160r1',
    '1.3.36.3.3.2.8.1.1.2': 'Brainpool P160t1',
    '1.3.36.3.3.2.8.1.1.3': 'Brainpool P192r1',
    '1.3.36.3.3.2.8.1.1.4': 'Brainpool P192t1',
    '1.3.36.3.3.2.8.1.1.5': 'Brainpool P224r1',
    '1.3.36.3.3.2.8.1.1.6': 'Brainpool P224t1',
    '1.3.36.3.3.2.8.1.1.7': 'Brainpool P256r1',
    '1.3.36.3.3.2.8.1.1.8': 'Brainpool P256t1',
    '1.3.36.3.3.2.8.1.1.9': 'Brainpool P320r1',
    '1.3.36.3.3.2.8.1.1.10': 'Brainpool P320t1',
    '1.3.36.3.3.2.8.1.1.11': 'Brainpool P384r1',
    '1.3.36.3.3.2.8.1.1.12': 'Brainpool P384t1',
    '1.3.36.3.3.2.8.1.1.13': 'Brainpool P512r1',
    '1.3.36.3.3.2.8.1.1.14': 'Brainpool P512t1',
    '1.3.36.3.4': 'Signature Scheme',
    '1.3.36.3.4.1': 'Sig S_ISO9796-1',
    '1.3.36.3.4.2': 'Sig S_ISO9796-2',
    '1.3.36.3.4.2.1': 'Sig S_ISO9796-2 with RED',
    '1.3.36.3.4.2.2': 'Sig S_ISO9796-2 with RSA',
    '1.3.36.3.4.2.3': 'Sig S_ISO9796-2 with RDN',
    '1.3.36.4': 'Attribute',
    '1.3.36.5': 'Policy',
    '1.3.36.6': 'Api',
    '1.3.36.6.1': 'Manufacturer-specific_api',
    '1.3.36.6.1.1': 'Utimaco-api',
    '1.3.36.6.2': 'Functionality-specific_api',
    '1.3.36.7': 'Keymgmnt',
    '1.3.36.7.1': 'Keyagree',
    '1.3.36.7.1.1': 'Bsi PKE',
    '1.3.36.7.2': 'Keytrans',
    '1.3.36.7.2.1': 'Enc ISO9796-2 Withrsa',
    '1.3.36.8.1.1': 'Teletrust  Sig G Conform policy Identifier',
    '1.3.36.8.2.1': 'Directory Service',
    '1.3.36.8.3.1': 'Date Of Cert Gen',
    '1.3.36.8.3.2': 'Procuration',
    '1.3.36.8.3.3': 'Admission',
    '1.3.36.8.3.4': 'Monetary Limit',
    '1.3.36.8.3.5': 'Declaration Of Majority',
    '1.3.36.8.3.6': 'Integrated Circuit Card Serial Number',
    '1.3.36.8.3.7': 'PK Reference',
    '1.3.36.8.3.8': 'Restriction',
    '1.3.36.8.3.9': 'Retrieve If Allowed',
    '1.3.36.8.3.10': 'Requested Certificate',
    '1.3.36.8.3.11': 'Naming Authorities',
    '1.3.36.8.3.11.1': 'Recht Wirtschaft Steuern',
    '1.3.36.8.3.11.1.1': 'Rechtsanwaeltin',
    '1.3.36.8.3.11.1.2': 'Rechtsanwalt',
    '1.3.36.8.3.11.1.3': 'Rechts Beistand',
    '1.3.36.8.3.11.1.4': 'Steuer Beraterin',
    '1.3.36.8.3.11.1.5': 'Steuer Berater',
    '1.3.36.8.3.11.1.6': 'Steuer Bevollmaechtigte',
    '1.3.36.8.3.11.1.7': 'Steuer Bevollmaechtigter',
    '1.3.36.8.3.11.1.8': 'Notarin',
    '1.3.36.8.3.11.1.9': 'Notar',
    '1.3.36.8.3.11.1.10': 'Notar Vertreterin',
    '1.3.36.8.3.11.1.11': 'Notar Vertreter',
    '1.3.36.8.3.11.1.12': 'Notariats Verwalterin',
    '1.3.36.8.3.11.1.13': 'Notariats Verwalter',
    '1.3.36.8.3.11.1.14': 'Wirtschafts Prueferin',
    '1.3.36.8.3.11.1.15': 'Wirtschafts Pruefer',
    '1.3.36.8.3.11.1.16': 'ereidigte Buchprueferin',
    '1.3.36.8.3.11.1.17': 'ereidigter Buchpruefer',
    '1.3.36.8.3.11.1.18': 'Patent Anwaeltin',
    '1.3.36.8.3.11.1.19': 'Patent Anwalt',
    '1.3.36.8.3.12': 'Cert In Dir Since',
    '1.3.36.8.3.13': 'Cert Hash',
    '1.3.36.8.3.14': 'Name At Birth',
    '1.3.36.8.3.15': 'Additional Information',
    '1.3.36.8.4.1': 'Personal Data',
    '1.3.36.8.4.8': 'Restriction',
    '1.3.36.8.5.1.1.1': 'RSA Indicate SHA1',
    '1.3.36.8.5.1.1.2': 'RSA Indicate RIPEMD160',
    '1.3.36.8.5.1.1.3': 'RSA with SHA1',
    '1.3.36.8.5.1.1.4': 'RSA with RIPEMD160',
    '1.3.36.8.5.1.2.1': 'Dsa Extended',
    '1.3.36.8.5.1.2.2': 'Dsa with RIPEMD160',
    '1.3.36.8.6.1': 'Cert',
    '1.3.36.8.6.2': 'Cert Ref',
    '1.3.36.8.6.3': 'Attr Cert',
    '1.3.36.8.6.4': 'Attr Ref',
    '1.3.36.8.6.5': 'File Name',
    '1.3.36.8.6.6': 'Storage Time',
    '1.3.36.8.6.7': 'File Size',
    '1.3.36.8.6.8': 'Location',
    '1.3.36.8.6.9': 'Sig Number',
    '1.3.36.8.6.10': 'Auto Gen',
    '1.3.36.8.7.1.1': 'Pt Adobe ILL',
    '1.3.36.8.7.1.2': 'Pt Ami Pro',
    '1.3.36.8.7.1.3': 'Pt Auto CAD',
    '1.3.36.8.7.1.4': 'Pt Binary',
    '1.3.36.8.7.1.5': 'Pt BMP',
    '1.3.36.8.7.1.6': 'Pt CGM',
    '1.3.36.8.7.1.7': 'Pt Corel CRT',
    '1.3.36.8.7.1.8': 'Pt Corel DRW',
    '1.3.36.8.7.1.9': 'Pt Corel EXC',
    '1.3.36.8.7.1.10': 'Pt Corel PHT',
    '1.3.36.8.7.1.11': 'Pt Draw',
    '1.3.36.8.7.1.12': 'Pt DVI',
    '1.3.36.8.7.1.13': 'Pt EPS',
    '1.3.36.8.7.1.14': 'Pt Excel',
    '1.3.36.8.7.1.15': 'Pt GEM',
    '1.3.36.8.7.1.16': 'Pt GIF',
    '1.3.36.8.7.1.17': 'Pt HPGL',
    '1.3.36.8.7.1.18': 'Pt JPEG',
    '1.3.36.8.7.1.19': 'Pt Kodak',
    '1.3.36.8.7.1.20': 'Pt LaTeX',
    '1.3.36.8.7.1.21': 'Pt Lotus',
    '1.3.36.8.7.1.22': 'Pt Lotus PIC',
    '1.3.36.8.7.1.23': 'Pt Mac PICT',
    '1.3.36.8.7.1.24': 'Pt Mac Word',
    '1.3.36.8.7.1.25': 'Pt MSWfD',
    '1.3.36.8.7.1.26': 'Pt MSWord',
    '1.3.36.8.7.1.27': 'Pt MSWord2',
    '1.3.36.8.7.1.28': 'Pt MSWord6',
    '1.3.36.8.7.1.29': 'Pt MSWord8',
    '1.3.36.8.7.1.30': 'Pt PDF',
    '1.3.36.8.7.1.31': 'Pt PIF',
    '1.3.36.8.7.1.32': 'Pt Postscript',
    '1.3.36.8.7.1.33': 'Pt RTF',
    '1.3.36.8.7.1.34': 'Pt SCITEX',
    '1.3.36.8.7.1.35': 'Pt TAR',
    '1.3.36.8.7.1.36': 'Pt Targa',
    '1.3.36.8.7.1.37': 'Pt TeX',
    '1.3.36.8.7.1.38': 'Pt Text',
    '1.3.36.8.7.1.39': 'Pt TIFF',
    '1.3.36.8.7.1.40': 'Pt TIFF-FC',
    '1.3.36.8.7.1.41': 'Pt UID',
    '1.3.36.8.7.1.42': 'Pt UU Encode',
    '1.3.36.8.7.1.43': 'Pt WMF',
    '1.3.36.8.7.1.44': 'Pt Word Perfect',
    '1.3.36.8.7.1.45': 'Pt WP Grph',
    '1.3.101.1.4': 'Thawte-ce',
    '1.3.101.1.4.1': 'Strong Extranet',
    '1.3.101.112': 'Edwards-curve Digital Signature Algorithm (EdDSA) Ed25519',
    '1.3.132.0.1': 'Sect163k1',
    '1.3.132.0.2': 'Sect163r1',
    '1.3.132.0.3': 'Sect239k1',
    '1.3.132.0.4': 'Sect113r1',
    '1.3.132.0.5': 'Sect113r2',
    '1.3.132.0.6': 'Secp112r1',
    '1.3.132.0.7': 'Secp112r2',
    '1.3.132.0.8': 'Secp160r1',
    '1.3.132.0.9': 'Secp160k1',
    '1.3.132.0.10': 'Secp256k1',
    '1.3.132.0.15': 'Sect163r2',
    '1.3.132.0.16': 'Sect283k1',
    '1.3.132.0.17': 'Sect283r1',
    '1.3.132.0.22': 'Sect131r1',
    '1.3.132.0.23': 'Sect131r2',
    '1.3.132.0.24': 'Sect193r1',
    '1.3.132.0.25': 'Sect193r2',
    '1.3.132.0.26': 'Sect233k1',
    '1.3.132.0.27': 'Sect233r1',
    '1.3.132.0.28': 'Secp128r1',
    '1.3.132.0.29': 'Secp128r2',
    '1.3.132.0.30': 'Secp160r2',
    '1.3.132.0.31': 'Secp192k1',
    '1.3.132.0.32': 'Secp224k1',
    '1.3.132.0.33': 'Secp224r1',
    '1.3.132.0.34': 'Secp384r1',
    '1.3.132.0.35': 'Secp521r1',
    '1.3.132.0.36': 'Sect409k1',
    '1.3.132.0.37': 'Sect409r1',
    '1.3.132.0.38': 'Sect571k1',
    '1.3.132.0.39': 'Sect571r1',
    '1.3.133.16.840.9.84': 'x984',
    '1.3.133.16.840.9.84.0': 'x984 Module',
    '1.3.133.16.840.9.84.0.1': 'x984 Biometrics',
    '1.3.133.16.840.9.84.0.2': 'x984 CMS',
    '1.3.133.16.840.9.84.0.3': 'x984 Identifiers',
    '1.3.133.16.840.9.84.1': 'x984 Biometric',
    '1.3.133.16.840.9.84.1.0': 'Biometric Unknown Type',
    '1.3.133.16.840.9.84.1.1': 'Biometric Body Odor',
    '1.3.133.16.840.9.84.1.2': 'Biometric DNA',
    '1.3.133.16.840.9.84.1.3': 'Biometric Ear Shape',
    '1.3.133.16.840.9.84.1.4': 'Biometric Facial Features',
    '1.3.133.16.840.9.84.1.5': 'Biometric Finger Image',
    '1.3.133.16.840.9.84.1.6': 'Biometric Finger Geometry',
    '1.3.133.16.840.9.84.1.7': 'Biometric Hand Geometry',
    '1.3.133.16.840.9.84.1.8': 'Biometric Iris Features',
    '1.3.133.16.840.9.84.1.9': 'Biometric Keystroke Dynamics',
    '1.3.133.16.840.9.84.1.10': 'Biometric Palm',
    '1.3.133.16.840.9.84.1.11': 'Biometric Retina',
    '1.3.133.16.840.9.84.1.12': 'Biometric Signature',
    '1.3.133.16.840.9.84.1.13': 'Biometric Speech Pattern',
    '1.3.133.16.840.9.84.1.14': 'Biometric Thermal Image',
    '1.3.133.16.840.9.84.1.15': 'Biometric Vein Pattern',
    '1.3.133.16.840.9.84.1.16': 'Biometric Thermal Face Image',
    '1.3.133.16.840.9.84.1.17': 'Biometric Thermal Hand Image',
    '1.3.133.16.840.9.84.1.18': 'Biometric Lip Movement',
    '1.3.133.16.840.9.84.1.19': 'Biometric Gait',
    '1.3.133.16.840.9.84.3': 'x984 Matching Method',
    '1.3.133.16.840.9.84.4': 'x984 Format Owner',
    '1.3.133.16.840.9.84.4.0': 'x984 Cbeff Owner',
    '1.3.133.16.840.9.84.4.1': 'x984 Ibia Owner',
    '1.3.133.16.840.9.84.4.1.1': 'Ibia Owner SAFLINK',
    '1.3.133.16.840.9.84.4.1.2': 'Ibia Owner Bioscrypt',
    '1.3.133.16.840.9.84.4.1.3': 'Ibia Owner Visionics',
    '1.3.133.16.840.9.84.4.1.4': 'Ibia Owner Infineon Technologies AG',
    '1.3.133.16.840.9.84.4.1.5': 'Ibia Owner Iridian Technologies',
    '1.3.133.16.840.9.84.4.1.6': 'Ibia Owner Veridicom',
    '1.3.133.16.840.9.84.4.1.7': 'Ibia Owner Cyber SIGN',
    '1.3.133.16.840.9.84.4.1.8': 'Ibia Ownere Cryp',
    '1.3.133.16.840.9.84.4.1.9': 'Ibia Owner Fingerprint Cards AB',
    '1.3.133.16.840.9.84.4.1.10': 'Ibia Owner Secu Gen',
    '1.3.133.16.840.9.84.4.1.11': 'Ibia Owner Precise Biometric',
    '1.3.133.16.840.9.84.4.1.12': 'Ibia Owner Identix',
    '1.3.133.16.840.9.84.4.1.13': 'Ibia Owner DERMALOG',
    '1.3.133.16.840.9.84.4.1.14': 'Ibia Owner LOGICO',
    '1.3.133.16.840.9.84.4.1.15': 'Ibia Owner NIST',
    '1.3.133.16.840.9.84.4.1.16': 'Ibia Owner A3 Vision',
    '1.3.133.16.840.9.84.4.1.17': 'Ibia Owner NEC',
    '1.3.133.16.840.9.84.4.1.18': 'Ibia Owner ST Microelectronics',
    '2.5.4.0': 'Object Class',
    '2.5.4.1': 'Aliased Entry Name',
    '2.5.4.2': 'Knowledge Information',
    '2.5.4.3': 'Common Name',
    '2.5.4.4': 'Surname',
    '2.5.4.5': 'Serial Number',
    '2.5.4.6': 'Country Name',
    '2.5.4.7': 'Locality',
    '2.5.4.7.1': 'Collective Locality Name',
    '2.5.4.8': 'State',
    '2.5.4.8.1': 'Collective State Or Province Name',
    '2.5.4.9': 'Street Address',
    '2.5.4.9.1': 'Collective Street Address',
    '2.5.4.97': 'Organization Identifier',
    '2.5.4.10': 'Organization',
    '2.5.4.10.1': 'Collective Organization Name',
    '2.5.4.11': 'Organization Unit',
    '2.5.4.11.1': 'Collective Organization Unit Name',
    '2.5.4.12': 'Title',
    '2.5.4.13': 'Description',
    '2.5.4.14': 'Search Guide',
    '2.5.4.15': 'Business Category',
    '2.5.4.16': 'Postal Address',
    '2.5.4.16.1': 'Collective Postal Address',
    '2.5.4.17': 'Postal Code',
    '2.5.4.17.1': 'Collective Postal Code',
    '2.5.4.18': 'Post Office Box',
    '2.5.4.18.1': 'Collective Post Office Box',
    '2.5.4.19': 'Physical Delivery Office Name',
    '2.5.4.19.1': 'Collective Physical Delivery Office Name',
    '2.5.4.20': 'Telephone Number',
    '2.5.4.20.1': 'Collective Telephone Number',
    '2.5.4.21': 'Telex Number',
    '2.5.4.21.1': 'Collective Telex Number',
    '2.5.4.22': 'Teletex Terminal Identifier',
    '2.5.4.22.1': 'Collective Teletex Terminal Identifier',
    '2.5.4.23': 'Facsimile Telephone Number',
    '2.5.4.23.1': 'Collective Facsimile Telephone Number',
    '2.5.4.24': 'x121 Address',
    '2.5.4.25': 'International ISDN Number',
    '2.5.4.25.1': 'Collective International ISDN Number',
    '2.5.4.26': 'Registered Address',
    '2.5.4.27': 'Destination Indicator',
    '2.5.4.28': 'Preferred Delivery Mehtod',
    '2.5.4.29': 'Presentation Address',
    '2.5.4.30': 'Supported Application Context',
    '2.5.4.31': 'Member',
    '2.5.4.32': 'Owner',
    '2.5.4.33': 'Role Occupant',
    '2.5.4.34': 'See Also',
    '2.5.4.35': 'User Password',
    '2.5.4.36': 'User Certificate',
    '2.5.4.37': 'Ca Certificate',
    '2.5.4.38': 'Authority Revocation List',
    '2.5.4.39': 'Certificate Revocation List',
    '2.5.4.40': 'Cross Certificate Pair',
    '2.5.4.41': 'Name',
    '2.5.4.42': 'Given Name',
    '2.5.4.43': 'Initials',
    '2.5.4.44': 'Generation Qualifier',
    '2.5.4.45': 'Unique Identifier',
    '2.5.4.46': 'Dn Qualifier',
    '2.5.4.47': 'Enhanced Search Guide',
    '2.5.4.48': 'Protocol Information',
    '2.5.4.49': 'Distinguished Name',
    '2.5.4.50': 'Unique Member',
    '2.5.4.51': 'House Identifier',
    '2.5.4.52': 'Supported Algorithms',
    '2.5.4.53': 'Delta Revocation List',
    '2.5.4.54': 'DMD Name',
    '2.5.4.55': 'Clearance',
    '2.5.4.56': 'Default Dir Qop',
    '2.5.4.57': 'Attribute Integrity Info',
    '2.5.4.58': 'Attribute Certificate',
    '2.5.4.59': 'Attribute Certificate Revocation List',
    '2.5.4.60': 'Conf Key Info',
    '2.5.4.61': 'AA Certificate',
    '2.5.4.62': 'Attribute Descriptor Certificate',
    '2.5.4.63': 'Attribute Authority Revocation List',
    '2.5.4.64': 'Family Information',
    '2.5.4.65': 'Pseudonym',
    '2.5.4.66': 'Communications Service',
    '2.5.4.67': 'Communications Network',
    '2.5.4.68': 'Certification Practice Stmt',
    '2.5.4.69': 'Certificate Policy',
    '2.5.4.70': 'Pki Path',
    '2.5.4.71': 'Priv Policy',
    '2.5.4.72': 'Role',
    '2.5.4.73': 'Delegation Path',
    '2.5.4.74': 'Prot Priv Policy',
    '2.5.4.75': 'XML Privilege Info',
    '2.5.4.76': 'XML Priv Policy',
    '2.5.4.82': 'Permission',
    '2.5.6.0': 'Top',
    '2.5.6.1': 'Alias',
    '2.5.6.2': 'Country',
    '2.5.6.3': 'Locality',
    '2.5.6.4': 'Organization',
    '2.5.6.5': 'Organization Unit',
    '2.5.6.6': 'Person',
    '2.5.6.7': 'Organization Person',
    '2.5.6.8': 'Organization Role',
    '2.5.6.9': 'Group Of Names',
    '2.5.6.10': 'Residential Person',
    '2.5.6.11': 'Application Process',
    '2.5.6.12': 'Application Entity',
    '2.5.6.13': 'DSA',
    '2.5.6.14': 'Device',
    '2.5.6.15': 'Strong Authentication User',
    '2.5.6.16': 'Certificate Authority',
    '2.5.6.17': 'Group Of Unique Names',
    '2.5.6.21': 'Pki User',
    '2.5.6.22': 'Pki CA',
    '2.5.8.1.1': 'RSA',
    '2.5.29.1': 'Authority Key Identifier',
    '2.5.29.2': 'Key Attributes',
    '2.5.29.3': 'Certificate Policies',
    '2.5.29.4': 'Key Usage Restriction',
    '2.5.29.5': 'Policy Mapping',
    '2.5.29.6': 'Subtrees Constraint',
    '2.5.29.7': 'Subject Alt Name',
    '2.5.29.8': 'Issuer Alt Name',
    '2.5.29.9': 'Subject Directory Attributes',
    '2.5.29.10': 'Basic Constraints',
    '2.5.29.11': 'Name Constraints',
    '2.5.29.12': 'Policy Constraints',
    '2.5.29.13': 'Basic Constraints',
    '2.5.29.14': 'Subject Key Identifier',
    '2.5.29.15': 'Key Usage',
    '2.5.29.16': 'Private Key Usage Period',
    '2.5.29.17': 'Subject Alternative Name',
    '2.5.29.18': 'Issuer Alternative Name',
    '2.5.29.19': 'Basic Constraints',
    '2.5.29.20': 'CRL Number',
    '2.5.29.21': 'CRL Reason',
    '2.5.29.22': 'Expiration Date',
    '2.5.29.23': 'Instruction Code',
    '2.5.29.24': 'Invalidity Date',
    '2.5.29.25': 'CRL Distribution Points',
    '2.5.29.26': 'Issuing Distribution Point',
    '2.5.29.27': 'Delta CRL Indicator',
    '2.5.29.28': 'Issuing Distribution Point',
    '2.5.29.29': 'Certificate Issuer',
    '2.5.29.30': 'Name Constraints',
    '2.5.29.31': 'CRL Distribution Points',
    '2.5.29.32': 'Certificate Policies',
    '2.5.29.32.0': 'Any Policy',
    '2.5.29.33': 'Policy Mappings',
    '2.5.29.34': 'Policy Constraints',
    '2.5.29.35': 'Authority Key Identifier',
    '2.5.29.36': 'Policy Constraints',
    '2.5.29.37': 'Extended Key Usage',
    '2.5.29.37.0': 'Any Extended Key Usage',
    '2.5.29.38': 'Authority Attribute Identifier',
    '2.5.29.39': 'Role Spec Cert Identifier',
    '2.5.29.40': 'CRL Stream Identifier',
    '2.5.29.41': 'Basic Att Constraints',
    '2.5.29.42': 'Delegated Name Constraints',
    '2.5.29.43': 'Time Specification',
    '2.5.29.44': 'CRL Scope',
    '2.5.29.45': 'Status Referrals',
    '2.5.29.46': 'Freshest CRL',
    '2.5.29.47': 'Ordered List',
    '2.5.29.48': 'Attribute Descriptor',
    '2.5.29.49': 'User Notice',
    '2.5.29.50': 'SOA Identifier',
    '2.5.29.51': 'Base Update Time',
    '2.5.29.52': 'Acceptable Cert Policies',
    '2.5.29.53': 'Delta Info',
    '2.5.29.54': 'Inhibit Any Policy',
    '2.5.29.55': 'Target Information',
    '2.5.29.56': 'No Rev Avail',
    '2.5.29.57': 'Acceptable Privilege Policies',
    '2.5.29.58': 'To Be Revoked',
    '2.5.29.59': 'Revoked Groups',
    '2.5.29.60': 'Expired Certs On CRL',
    '2.5.29.61': 'Indirect Issuer',
    '2.5.29.62': 'No Assertion',
    '2.5.29.63': 'A Aissuing Distribution Point',
    '2.5.29.64': 'Issued On Behalf Of',
    '2.5.29.65': 'Single Use',
    '2.5.29.66': 'Group AC',
    '2.5.29.67': 'Allowed Att Ass',
    '2.5.29.68': 'Attribute Mappings',
    '2.5.29.69': 'Holder Name Constraints',
    '2.16.528.1.1001.1.1.1.12.6.1.1.1': 'Digi Notar EV policy',
    '2.16.578.1.26.1.3.3': 'Buy Pass EV policy',
    '2.16.724.1.2.2.4.1': 'Personal Data Info',
    '2.16.756.1.89.1.2.1.1': 'Swiss Sign EV policy',
    '2.16.840.1.101.2.1.1.1': 'Sdns Signature Algorithm',
    '2.16.840.1.101.2.1.1.2': 'Fortezza Signature Algorithm',
    '2.16.840.1.101.2.1.1.3': 'Sdns Confidentiality Algorithm',
    '2.16.840.1.101.2.1.1.4': 'Fortezza Confidentiality Algorithm',
    '2.16.840.1.101.2.1.1.5': 'Sdns Integrity Algorithm',
    '2.16.840.1.101.2.1.1.6': 'Fortezza Integrity Algorithm',
    '2.16.840.1.101.2.1.1.7': 'Sdns Token Protection Algorithm',
    '2.16.840.1.101.2.1.1.8': 'Fortezza Token Protection Algorithm',
    '2.16.840.1.101.2.1.1.9': 'Sdns Key Management Algorithm',
    '2.16.840.1.101.2.1.1.10': 'Fortezza Key Management Algorithm',
    '2.16.840.1.101.2.1.1.11': 'Sdns K Mand Sig Algorithm',
    '2.16.840.1.101.2.1.1.12': 'Fortezza K Mand Sig Algorithm',
    '2.16.840.1.101.2.1.1.13': 'Suite A Signature Algorithm',
    '2.16.840.1.101.2.1.1.14': 'Suite A Confidentiality Algorithm',
    '2.16.840.1.101.2.1.1.15': 'Suite A Integrity Algorithm',
    '2.16.840.1.101.2.1.1.16': 'Suite A Token Protection Algorithm',
    '2.16.840.1.101.2.1.1.17': 'Suite A Key Management Algorithm',
    '2.16.840.1.101.2.1.1.18': 'Suite AK Mand Sig Algorithm',
    '2.16.840.1.101.2.1.1.19': 'Fortezza Updated Sig Algorithm',
    '2.16.840.1.101.2.1.1.20': 'Fortezza K Mand Upd Sig Algorithms',
    '2.16.840.1.101.2.1.1.21': 'Fortezza Updated Integ Algorithm',
    '2.16.840.1.101.2.1.1.22': 'Key Exchange Algorithm',
    '2.16.840.1.101.2.1.1.23': 'Fortezza Wrap80 Algorithm',
    '2.16.840.1.101.2.1.1.24': 'KEA Key Encryption Algorithm',
    '2.16.840.1.101.2.1.2.1': 'Rfc822 Message Format',
    '2.16.840.1.101.2.1.2.2': 'Empty Content',
    '2.16.840.1.101.2.1.2.3': 'Csp Content Type',
    '2.16.840.1.101.2.1.2.42': 'MSP Rev3 Content Type',
    '2.16.840.1.101.2.1.2.48': 'MSP Content Type',
    '2.16.840.1.101.2.1.2.49': 'MSP Rekey Agent Protocol',
    '2.16.840.1.101.2.1.2.50': 'MSP MMP',
    '2.16.840.1.101.2.1.2.66': 'MSP Rev3-1 Content Type',
    '2.16.840.1.101.2.1.2.72': 'Forwarded MSP Message Body Part',
    '2.16.840.1.101.2.1.2.73': 'MSP Forwarded Message Parameters',
    '2.16.840.1.101.2.1.2.74': 'Forwarded CSP Msg Body Part',
    '2.16.840.1.101.2.1.2.75': 'CSP Forwarded Message Parameters',
    '2.16.840.1.101.2.1.2.76': 'MSP MMP2',
    '2.16.840.1.101.2.1.3.1': 'SDNS Security Policy',
    '2.16.840.1.101.2.1.3.2': 'SDNS PRBAC',
    '2.16.840.1.101.2.1.3.3': 'Mosaic PRBAC',
    '2.16.840.1.101.2.1.3.10': 'SI Security Policy',
    '2.16.840.1.101.2.1.3.10.0': 'SI NASP',
    '2.16.840.1.101.2.1.3.10.1': 'SI ELCO',
    '2.16.840.1.101.2.1.3.10.2': 'SI TK',
    '2.16.840.1.101.2.1.3.10.3': 'SI DSAP',
    '2.16.840.1.101.2.1.3.10.4': 'SI SSSS',
    '2.16.840.1.101.2.1.3.10.5': 'SI DNASP',
    '2.16.840.1.101.2.1.3.10.6': 'SI BYEMAN',
    '2.16.840.1.101.2.1.3.10.7': 'SI REL-US',
    '2.16.840.1.101.2.1.3.10.8': 'SI REL-AUS',
    '2.16.840.1.101.2.1.3.10.9': 'SI REL-CAN',
    '2.16.840.1.101.2.1.3.10.10': 'SI REL_UK',
    '2.16.840.1.101.2.1.3.10.11': 'SI REL-NZ',
    '2.16.840.1.101.2.1.3.10.12': 'SI Generic',
    '2.16.840.1.101.2.1.3.11': 'Genser',
    '2.16.840.1.101.2.1.3.11.0': 'Genser Nations',
    '2.16.840.1.101.2.1.3.11.1': 'Genser Comsec',
    '2.16.840.1.101.2.1.3.11.2': 'Genser Acquisition',
    '2.16.840.1.101.2.1.3.11.3': 'Genser Security Categories',
    '2.16.840.1.101.2.1.3.11.3.0': 'Genser Tag Set Name',
    '2.16.840.1.101.2.1.3.12': 'Default Security Policy',
    '2.16.840.1.101.2.1.3.13': 'Capco Markings',
    '2.16.840.1.101.2.1.3.13.0': 'Capco Security Categories',
    '2.16.840.1.101.2.1.3.13.0.1': 'Capco Tag Set Name1',
    '2.16.840.1.101.2.1.3.13.0.2': 'Capco Tag Set Name2',
    '2.16.840.1.101.2.1.3.13.0.3': 'Capco Tag Set Name3',
    '2.16.840.1.101.2.1.3.13.0.4': 'Capco Tag Set Name4',
    '2.16.840.1.101.2.1.5.1': 'SDNS Key Management Certificate',
    '2.16.840.1.101.2.1.5.2': 'SDNS User Signature Certificate',
    '2.16.840.1.101.2.1.5.3': 'SDNS K Mand Sig Certificate',
    '2.16.840.1.101.2.1.5.4': 'Fortezza Key Management Certificate',
    '2.16.840.1.101.2.1.5.5': 'Fortezza K Mand Sig Certificate',
    '2.16.840.1.101.2.1.5.6': 'Fortezza User Signature Certificate',
    '2.16.840.1.101.2.1.5.7': 'Fortezza CA Signature Certificate',
    '2.16.840.1.101.2.1.5.8': 'SDNS CA Signature Certificate',
    '2.16.840.1.101.2.1.5.10': 'Auxiliary Vector',
    '2.16.840.1.101.2.1.5.11': 'Ml Receipt Policy',
    '2.16.840.1.101.2.1.5.12': 'Ml Membership',
    '2.16.840.1.101.2.1.5.13': 'Ml Administrators',
    '2.16.840.1.101.2.1.5.14': 'Alid',
    '2.16.840.1.101.2.1.5.20': 'Jan UKMs',
    '2.16.840.1.101.2.1.5.21': 'Feb UKMs',
    '2.16.840.1.101.2.1.5.22': 'Mar UKMs',
    '2.16.840.1.101.2.1.5.23': 'Apr UKMs',
    '2.16.840.1.101.2.1.5.24': 'May UKMs',
    '2.16.840.1.101.2.1.5.25': 'Jun UKMs',
    '2.16.840.1.101.2.1.5.26': 'Jul UKMs',
    '2.16.840.1.101.2.1.5.27': 'Aug UKMs',
    '2.16.840.1.101.2.1.5.28': 'Sep UKMs',
    '2.16.840.1.101.2.1.5.29': 'Oct UKMs',
    '2.16.840.1.101.2.1.5.30': 'Nov UKMs',
    '2.16.840.1.101.2.1.5.31': 'Dec UKMs',
    '2.16.840.1.101.2.1.5.40': 'Meta SDN Sckl',
    '2.16.840.1.101.2.1.5.41': 'Sdns CKL',
    '2.16.840.1.101.2.1.5.42': 'Meta SDN Ssignature CKL',
    '2.16.840.1.101.2.1.5.43': 'Sdns Signature CKL',
    '2.16.840.1.101.2.1.5.44': 'Sdns Certificate Revocation List',
    '2.16.840.1.101.2.1.5.45': 'Fortezza Certificate Revocation List',
    '2.16.840.1.101.2.1.5.46': 'Fortezza CKL',
    '2.16.840.1.101.2.1.5.47': 'Al Exempted Address Processor',
    '2.16.840.1.101.2.1.5.48': 'Guard',
    '2.16.840.1.101.2.1.5.49': 'Algorithms Supported',
    '2.16.840.1.101.2.1.5.50': 'Suite A Key Management Certificate',
    '2.16.840.1.101.2.1.5.51': 'Suite AK Mand Sig Certificate',
    '2.16.840.1.101.2.1.5.52': 'Suite A User Signature Certificate',
    '2.16.840.1.101.2.1.5.53': 'Prbac Info',
    '2.16.840.1.101.2.1.5.54': 'Prbac CA Constraints',
    '2.16.840.1.101.2.1.5.55': 'Sig Or KM Privileges',
    '2.16.840.1.101.2.1.5.56': 'Comm Privileges',
    '2.16.840.1.101.2.1.5.57': 'Labeled Attribute',
    '2.16.840.1.101.2.1.5.58': 'Policy Information File',
    '2.16.840.1.101.2.1.5.59': 'Sec Policy Information File',
    '2.16.840.1.101.2.1.5.60': 'CA Clearance Constraint',
    '2.16.840.1.101.2.1.7.1': 'CSP Extns',
    '2.16.840.1.101.2.1.7.1.0': 'CSP Cs Extn',
    '2.16.840.1.101.2.1.8.1': 'MISSI Security Categories',
    '2.16.840.1.101.2.1.8.2': 'Standard Security Label Privileges',
    '2.16.840.1.101.2.1.10.1': 'SIG Privileges',
    '2.16.840.1.101.2.1.10.2': 'KM Privileges',
    '2.16.840.1.101.2.1.10.3': 'Named Tag Set Privilege',
    '2.16.840.1.101.2.1.11.1': 'UK Demo',
    '2.16.840.1.101.2.1.11.2': 'US DOD Class2',
    '2.16.840.1.101.2.1.11.3': 'US Medium Pilot',
    '2.16.840.1.101.2.1.11.4': 'US DOD Class4',
    '2.16.840.1.101.2.1.11.5': 'US DOD Class3',
    '2.16.840.1.101.2.1.11.6': 'US DOD Class5',
    '2.16.840.1.101.2.1.12.0': 'Test Security Policy',
    '2.16.840.1.101.2.1.12.0.1': 'TSP1',
    '2.16.840.1.101.2.1.12.0.1.0': 'TSP1 Security Categories',
    '2.16.840.1.101.2.1.12.0.1.0.0': 'TSP1 Tag Set Zero',
    '2.16.840.1.101.2.1.12.0.1.0.1': 'TSP1 Tag Set One',
    '2.16.840.1.101.2.1.12.0.1.0.2': 'TSP1 Tag Set Two',
    '2.16.840.1.101.2.1.12.0.2': 'TSP2',
    '2.16.840.1.101.2.1.12.0.2.0': 'TSP2 Security Categories',
    '2.16.840.1.101.2.1.12.0.2.0.0': 'TSP2 Tag Set Zero',
    '2.16.840.1.101.2.1.12.0.2.0.1': 'TSP2 Tag Set One',
    '2.16.840.1.101.2.1.12.0.2.0.2': 'TSP2 Tag Set Two',
    '2.16.840.1.101.2.1.12.0.3': 'Kafka',
    '2.16.840.1.101.2.1.12.0.3.0': 'Kafka Security Categories',
    '2.16.840.1.101.2.1.12.0.3.0.1': 'Kafka Tag Set Name1',
    '2.16.840.1.101.2.1.12.0.3.0.2': 'Kafka Tag Set Name2',
    '2.16.840.1.101.2.1.12.0.3.0.3': 'Kafka Tag Set Name3',
    '2.16.840.1.101.2.1.12.1.1': 'TCp1',
    '2.16.840.1.101.3.1': 'Slabel',
    '2.16.840.1.101.3.2': 'PKI',
    '2.16.840.1.101.3.2.1': 'NIST policy Identifier',
    '2.16.840.1.101.3.2.1.3.1': 'Fbca Rudimentary Policy',
    '2.16.840.1.101.3.2.1.3.2': 'Fbca Basic Policy',
    '2.16.840.1.101.3.2.1.3.3': 'Fbca Medium Policy',
    '2.16.840.1.101.3.2.1.3.4': 'Fbca High Policy',
    '2.16.840.1.101.3.2.1.48.1': 'Nist Test Policy1',
    '2.16.840.1.101.3.2.1.48.2': 'Nist Test Policy2',
    '2.16.840.1.101.3.2.1.48.3': 'Nist Test Policy3',
    '2.16.840.1.101.3.2.1.48.4': 'Nist Test Policy4',
    '2.16.840.1.101.3.2.1.48.5': 'Nist Test Policy5',
    '2.16.840.1.101.3.2.1.48.6': 'Nist Test Policy6',
    '2.16.840.1.101.3.2.2': 'GAK',
    '2.16.840.1.101.3.2.2.1': 'KRA Key',
    '2.16.840.1.101.3.2.3': 'Extensions',
    '2.16.840.1.101.3.2.3.1': 'KR Technique',
    '2.16.840.1.101.3.2.3.2': 'K Recovery Capable',
    '2.16.840.1.101.3.2.3.3': 'KR',
    '2.16.840.1.101.3.2.4': 'Key Recovery Schemes',
    '2.16.840.1.101.3.2.5': 'Krapola',
    '2.16.840.1.101.3.3': 'ARPA',
    '2.16.840.1.101.3.4': 'Nist Algorithm',
    '2.16.840.1.101.3.4.1': 'AES',
    '2.16.840.1.101.3.4.1.1': 'AES128-ECB',
    '2.16.840.1.101.3.4.1.2': 'AES128-CBC',
    '2.16.840.1.101.3.4.1.3': 'AES128-OFB',
    '2.16.840.1.101.3.4.1.4': 'AES128-CFB',
    '2.16.840.1.101.3.4.1.5': 'AES128-wrap',
    '2.16.840.1.101.3.4.1.6': 'AES128-GCM',
    '2.16.840.1.101.3.4.1.7': 'AES128-CCM',
    '2.16.840.1.101.3.4.1.8': 'AES128-wrap-pad',
    '2.16.840.1.101.3.4.1.21': 'AES192-ECB',
    '2.16.840.1.101.3.4.1.22': 'AES192-CBC',
    '2.16.840.1.101.3.4.1.23': 'AES192-OFB',
    '2.16.840.1.101.3.4.1.24': 'AES192-CFB',
    '2.16.840.1.101.3.4.1.25': 'AES192-wrap',
    '2.16.840.1.101.3.4.1.26': 'AES192-GCM',
    '2.16.840.1.101.3.4.1.27': 'AES192-CCM',
    '2.16.840.1.101.3.4.1.28': 'AES192-wrap-pad',
    '2.16.840.1.101.3.4.1.41': 'AES256-ECB',
    '2.16.840.1.101.3.4.1.42': 'AES256-CBC',
    '2.16.840.1.101.3.4.1.43': 'AES256-OFB',
    '2.16.840.1.101.3.4.1.44': 'AES256-CFB',
    '2.16.840.1.101.3.4.1.45': 'AES256-wrap',
    '2.16.840.1.101.3.4.1.46': 'AES256-GCM',
    '2.16.840.1.101.3.4.1.47': 'AES256-CCM',
    '2.16.840.1.101.3.4.1.48': 'AES256-wrap-pad',
    '2.16.840.1.101.3.4.2': 'Hash Algos',
    '2.16.840.1.101.3.4.2.1': 'SHA-256',
    '2.16.840.1.101.3.4.2.2': 'SHA-384',
    '2.16.840.1.101.3.4.2.3': 'SHA-512',
    '2.16.840.1.101.3.4.2.4': 'SHA-224',
    '2.16.840.1.101.3.4.3.1': 'DSA with Sha224',
    '2.16.840.1.101.3.4.3.2': 'DSA with Sha256',
    '2.16.840.1.113719.1.2.8': 'Novell Algorithm',
    '2.16.840.1.113719.1.2.8.22': 'DES Cbc IV8',
    '2.16.840.1.113719.1.2.8.23': 'DES Cbc Pad IV8',
    '2.16.840.1.113719.1.2.8.24': 'DES EDE2 Cbc IV8',
    '2.16.840.1.113719.1.2.8.25': 'DES EDE2 Cbc Pad IV8',
    '2.16.840.1.113719.1.2.8.26': 'DES EDE3 Cbc IV8',
    '2.16.840.1.113719.1.2.8.27': 'DES EDE3 Cbc Pad IV8',
    '2.16.840.1.113719.1.2.8.28': 'Rc5 Cbc Pad',
    '2.16.840.1.113719.1.2.8.29': 'MD2 with RSA Encryption B Safe1',
    '2.16.840.1.113719.1.2.8.30': 'MD5 with RSA Encryption B Safe1',
    '2.16.840.1.113719.1.2.8.31': 'SHA1 with RSA Encryption B Safe1',
    '2.16.840.1.113719.1.2.8.32': 'Lm Digest',
    '2.16.840.1.113719.1.2.8.40': 'MD2',
    '2.16.840.1.113719.1.2.8.50': 'MD5',
    '2.16.840.1.113719.1.2.8.51': 'Ike Hmac with SHA1-RSA',
    '2.16.840.1.113719.1.2.8.52': 'Ike Hmac with MD5-RSA',
    '2.16.840.1.113719.1.2.8.69': 'RC2 Cbc Pad',
    '2.16.840.1.113719.1.2.8.82': 'SHA-1',
    '2.16.840.1.113719.1.2.8.92': 'RC2 B Safe1 Cbc',
    '2.16.840.1.113719.1.2.8.95': 'MD4',
    '2.16.840.1.113719.1.2.8.130': 'MD4 Packet',
    '2.16.840.1.113719.1.2.8.131': 'RSA Encryption Bsafe1',
    '2.16.840.1.113719.1.2.8.132': 'Nw Password',
    '2.16.840.1.113719.1.2.8.133': 'Novell Obfuscate-1',
    '2.16.840.1.113719.1.9': 'PKI',
    '2.16.840.1.113719.1.9.4': 'PKI Attribute Type',
    '2.16.840.1.113719.1.9.4.1': 'Security Attributes',
    '2.16.840.1.113719.1.9.4.2': 'Reliance Limit',
    '2.16.840.1.113730.1': 'Certificate Extension',
    '2.16.840.1.113730.1.1': 'Netscape Certificate Type',
    '2.16.840.1.113730.1.2': 'Netscape Base Url',
    '2.16.840.1.113730.1.3': 'Netscape Revocation Url',
    '2.16.840.1.113730.1.4': 'Netscape CA Revocation',
    '2.16.840.1.113730.1.7': 'Netscape Certificate Renewal',
    '2.16.840.1.113730.1.8': 'Netscape CA Policy',
    '2.16.840.1.113730.1.9': 'Home Page Url',
    '2.16.840.1.113730.1.10': 'Entity Logo',
    '2.16.840.1.113730.1.11': 'User Picture',
    '2.16.840.1.113730.1.12': 'Netscape Ssl Server',
    '2.16.840.1.113730.1.13': 'Netscape Comment',
    '2.16.840.1.113730.2': 'Data-type',
    '2.16.840.1.113730.2.1': 'Data GIF',
    '2.16.840.1.113730.2.2': 'Data JPEG',
    '2.16.840.1.113730.2.3': 'Data URL',
    '2.16.840.1.113730.2.4': 'Data HTML',
    '2.16.840.1.113730.2.5': 'Cert Sequence',
    '2.16.840.1.113730.2.6': 'Cert URL',
    '2.16.840.1.113730.3': 'Directory',
    '2.16.840.1.113730.3.1': 'Ldap Definitions',
    '2.16.840.1.113730.3.1.1': 'Car License',
    '2.16.840.1.113730.3.1.2': 'Department Number',
    '2.16.840.1.113730.3.1.3': 'Employee Number',
    '2.16.840.1.113730.3.1.4': 'Employee Type',
    '2.16.840.1.113730.3.2.2': 'Inet Org Person',
    '2.16.840.1.113730.4.1': 'Server Gated Crypto',
    '2.16.840.1.113733.1': 'PKI',
    '2.16.840.1.113733.1.6.3': 'Verisign CZAG',
    '2.16.840.1.113733.1.6.6': 'Verisign In Box',
    '2.16.840.1.113733.1.6.11': 'Verisign Onsite Jurisdiction Hash',
    '2.16.840.1.113733.1.6.13': 'Unknown  Verisign  VPN extension',
    '2.16.840.1.113733.1.6.15': 'Verisign Server ID',
    '2.16.840.1.113733.1.7.1.1': 'Verisign Cert Policies95 Qualifier1',
    '2.16.840.1.113733.1.7.1.1.1': 'Verisign CP Sv1notice',
    '2.16.840.1.113733.1.7.1.1.2': 'Verisign CP Sv1nsi',
    '2.16.840.1.113733.1.7.54': 'Symantec',
    '2.16.840.1.113733.1.7.23.6': 'Veri Sign EV policy',
    '2.16.840.1.113733.1.7.48.1': 'Thawte EV policy',
    '2.16.840.1.113733.1.8.1': 'erisign ISS Strong Crypto',
    '2.16.840.1.113733.1.9': 'PKCS7 Attribute',
    '2.16.840.1.113733.1.9.2': 'Message Type',
    '2.16.840.1.113733.1.9.3': 'PKI Status',
    '2.16.840.1.113733.1.9.4': 'Fail Info',
    '2.16.840.1.113733.1.9.5': 'Sender Nonce',
    '2.16.840.1.113733.1.9.6': 'Recipient Nonce',
    '2.16.840.1.113733.1.9.7': 'Trans ID',
    '2.16.840.1.113733.1.9.8': 'Extension Req',
    '2.16.840.1.113741.2': 'Intel CDSA',
    '2.16.840.1.114028.10.1.2': 'Entrust EV policy',
    '2.16.840.1.114171.500.9': 'Wells Fargo EV policy',
    '2.16.840.1.114404.1.1.2.4.1': 'Trust Wave EV policy',
    '2.16.840.1.114412.1': 'Digi Cert Non EV Certs',
    '2.16.840.1.114412.1.1': 'Digi Cert OV Cert',
    '2.16.840.1.114412.1.2': 'Digi Cert DV Cert',
    '2.16.840.1.114412.1.3.0.1': 'Digi Cert Global CA Policy',
    '2.16.840.1.114412.1.3.0.2': 'Digi Cert High Assurance EVCA Policy',
    '2.16.840.1.114412.1.3.0.3': 'Digi Cert Global Root CA Policy',
    '2.16.840.1.114412.1.3.0.4': 'Digi Cert Assured ID Root CA Policy',
    '2.16.840.1.114412.1.11': 'Digi Cert Federated Device Cert',
    '2.16.840.1.114412.2.1': 'Digi Cert EV policy',
    '2.16.840.1.114412.2.2': 'Digi Cert EV Cert',
    '2.23.140.1.1': 'EV guidelines certificate policy',
    '2.16.840.1.114412.2.3': 'Digi Cert Object Signing Cert',
    '2.16.840.1.114412.2.3.1': 'Digi Cert Code Signing Cert',
    '2.16.840.1.114412.2.3.2': 'Digi Cert EV Code Signing Cert',
    '2.16.840.1.114412.2.3.11': 'Digi Cert Kernel Code Signing Cert',
    '2.16.840.1.114412.2.3.21': 'Digi Cert Document Signing Cert',
    '2.16.840.1.114412.2.4': 'Digi Cert Client Cert',
    '2.16.840.1.114412.2.4.1.1': 'Digi Cert Level1 Personal Client Cert',
    '2.16.840.1.114412.2.4.1.2': 'Digi Cert Level1 Enterprise Client Cert',
    '2.16.840.1.114412.2.4.2': 'Digi Cert Level2 Client Cert',
    '2.16.840.1.114412.2.4.3.1': 'Digi Cert Level3 US Client Cert',
    '2.16.840.1.114412.2.4.3.2': 'Digi Cert Level3 CBP Client Cert',
    '2.16.840.1.114412.2.4.4.1': 'Digi Cert Level4 US Client Cert',
    '2.16.840.1.114412.2.4.4.2': 'Digi Cert Level4 CBP Client Cert',
    '2.16.840.1.114412.2.4.5.1': 'Digi Cert PIV Hardware Cert',
    '2.16.840.1.114412.2.4.5.2': 'Digi Cert PIV Card Auth Cert',
    '2.16.840.1.114412.2.4.5.3': 'Digi Cert PIV Content Signing Cert',
    '2.16.840.1.114412.4.31': 'Digi Cert Grid Classic Cert',
    '2.16.840.1.114412.4.31.5': 'Digi Cert Grid Integrated Cert',
    '2.16.840.1.114412.31.4.31.1': 'Digi Cert Grid Host Cert',
    '2.16.840.1.114413.1.7.23.3': 'Go Daddy EV policy',
    '2.16.840.1.114414.1.7.23.3': 'Starfield EV policy',
    '2.23.42.0': 'Content Type',
    '2.23.42.0.0': 'Pan Data',
    '2.23.42.0.1': 'Pan Token',
    '2.23.42.0.2': 'Pan Only',
    '2.23.42.1': 'Msg Ext',
    '2.23.42.2': 'Field',
    '2.23.42.2.0': 'Full Name',
    '2.23.42.2.1': 'Given Name',
    '2.23.42.2.2': 'Family Name',
    '2.23.42.2.3': 'Birth Family Name',
    '2.23.42.2.4': 'Place Name',
    '2.23.42.2.5': 'Identification Number',
    '2.23.42.2.6': 'Month',
    '2.23.42.2.7': 'Date',
    '2.23.42.2.8': 'Address',
    '2.23.42.2.9': 'Telephone',
    '2.23.42.2.10': 'Amount',
    '2.23.42.2.11': 'Account Number',
    '2.23.42.2.12': 'Pass Phrase',
    '2.23.42.3': 'Attribute',
    '2.23.42.3.0': 'Cert',
    '2.23.42.3.0.0': 'Root Key Thumb',
    '2.23.42.3.0.1': 'Additional Policy',
    '2.23.42.4': 'Algorithm',
    '2.23.42.5': 'Policy',
    '2.23.42.5.0': 'Root',
    '2.23.42.6': 'Module',
    '2.23.42.7': 'Cert Ext',
    '2.23.42.7.0': 'Hashed Root Key',
    '2.23.42.7.1': 'Certificate Type',
    '2.23.42.7.2': 'Merchant Data',
    '2.23.42.7.3': 'Card Cert Required',
    '2.23.42.7.4': 'Tunneling',
    '2.23.42.7.5': 'Set Extensions',
    '2.23.42.7.6': 'Set Qualifier',
    '2.23.42.8': 'Brand',
    '2.23.42.8.1': 'IATA-ATA',
    '2.23.42.8.4': ' ISA',
    '2.23.42.8.5': 'Master Card',
    '2.23.42.8.30': 'Diners',
    '2.23.42.8.34': 'American Express',
    '2.23.42.8.6011': 'Novus',
    '2.23.42.9': 'Vendor',
    '2.23.42.9.0': 'Globe Set',
    '2.23.42.9.1': 'IBM',
    '2.23.42.9.2': 'Cyber Cash',
    '2.23.42.9.3': 'Terisa',
    '2.23.42.9.4': 'RSADSI',
    '2.23.42.9.5': 'Veri Fone',
    '2.23.42.9.6': 'Trin Tech',
    '2.23.42.9.7': 'Bank Gate',
    '2.23.42.9.8': 'GTE',
    '2.23.42.9.9': 'Compu Source',
    '2.23.42.9.10': 'Griffin',
    '2.23.42.9.11': 'Certicom',
    '2.23.42.9.12': 'OSS',
    '2.23.42.9.13': 'Tenth Mountain',
    '2.23.42.9.14': 'Antares',
    '2.23.42.9.15': 'ECC',
    '2.23.42.9.16': 'Maithean',
    '2.23.42.9.17': 'Netscape',
    '2.23.42.9.18': 'erisign',
    '2.23.42.9.19': 'Blue Money',
    '2.23.42.9.20': 'Lacerte',
    '2.23.42.9.21': 'Fujitsu',
    '2.23.42.9.22': 'E Lab',
    '2.23.42.9.23': 'Entrust',
    '2.23.42.9.24': 'VI Anet',
    '2.23.42.9.25': 'III',
    '2.23.42.9.26': 'Open Market',
    '2.23.42.9.27': 'Lexem',
    '2.23.42.9.28': 'Intertrader',
    '2.23.42.9.29': 'Persimmon',
    '2.23.42.9.30': 'NABLE',
    '2.23.42.9.31': 'Espace-net',
    '2.23.42.9.32': 'Hitachi',
    '2.23.42.9.33': 'Microsoft',
    '2.23.42.9.34': 'NEC',
    '2.23.42.9.35': 'Mitsubishi',
    '2.23.42.9.36': 'NCR',
    '2.23.42.9.37': 'E-COMM',
    '2.23.42.9.38': 'Gemplus',
    '2.23.42.10': 'National',
    '2.23.42.10.392': 'Japan',
    '2.23.43.1.4': 'WTLS-ECC',
    '2.23.43.1.4.1': 'WTLS-ECC-curve1',
    '2.23.43.1.4.6': 'WTLS-ECC-curve6',
    '2.23.43.1.4.8': 'WTLS-ECC-curve8',
    '2.23.43.1.4.9': 'WTLS-ECC-curve9',
    '2.23.133': 'TCPA',
    '2.23.133.1': 'TCPA Spec Version',
    '2.23.133.2': 'TCPA Attribute',
    '2.23.133.2.1': 'TCPA Tpm Manufacturer',
    '2.23.133.2.2': 'TCPA Tpm Model',
    '2.23.133.2.3': 'TCPA Tpm Version',
    '2.23.133.2.4': 'TCPA Platform Manufacturer',
    '2.23.133.2.5': 'TCPA Platform Model',
    '2.23.133.2.6': 'TCPA Platform Version',
    '2.23.133.2.7': 'TCPA Component Manufacturer',
    '2.23.133.2.8': 'TCPA Component Model',
    '2.23.133.2.9': 'TCPA Component Version',
    '2.23.133.2.10': 'TCPA Security Qualities',
    '2.23.133.2.11': 'TCPA Tpm Protection Profile',
    '2.23.133.2.12': 'TCPA Tpm Security Target',
    '2.23.133.2.13': 'TCPA Foundation Protection Profile',
    '2.23.133.2.14': 'TCPA Foundation Security Target',
    '2.23.133.2.15': 'TCPA Tpm Id Label',
    '2.23.133.3': 'TCPA Protocol',
    '2.23.133.3.1': 'TCPA Prtt Tpm Id Protocol',
    '2.23.134.1.2.1.8.210': 'Post Signum Commercial Server Policy',
    '2.23.134.1.2.2.3': 'Post Signum Public CA',
    '2.23.134.1.4.2.1': 'Post Signum Root QCA',
    '2.23.136.1.1.1': 'MRTD Signature Data',
    '2.54.1775.2': 'Hashed Root Key',
    '2.54.1775.3': 'Certificate Type',
    '2.54.1775.4': 'Merchant Data',
    '2.54.1775.5': 'Card Cert Required',
    '2.54.1775.6': 'Tunneling',
    '2.54.1775.7': 'Set Qualifier',
    '2.54.1775.99': 'Set Data',
    '1.3.6.1.4.1.11129.2.4.3': 'CT Pre-Certificate Poison',
    '2.23.140.1.2.2': 'CA/B Forum Organization Validated',
    '2.23.140.1.2.1': 'CA/B Forum Domain Validated',
    '1.3.6.1.4.1.44947.1.1.1': 'Let\'s Encrypt',
    '1.3.6.1.4.1.4329.7.2.4': 'SslTlsCerts',
    '1.3.6.1.4.1.4329.7': 'Siemens Public Key Infrastructure',
    '1.3.6.1.4.1.52266.1': 'Legal Entity Identifier',
    '1.3.6.1.4.1.52266.2': 'Role',
    // https://ec.europa.eu/futurium/sites/futurium/files/ntqwac_pilot.pdf
    '0.4.0.9496.1': 'Domain Name Beneficiary',
    '0.4.0.9496.2': 'DNB Legal representative',
    '0.4.0.9496.3': 'Domain Name Owner',
    '0.4.0.9496.4': 'Domain Name Technical Operator',
    '0.4.0.9496.5': 'Type of relationship between DNB/DNO/DNT',
    '0.4.0.9496.6': 'DNB Main Activity Description',
    '0.4.0.9496.7': 'GDPR compliance attestation reference',
    '0.4.0.9496.8': 'Insurance coverage attestation',
    '0.4.0.9496.9': 'Valuation ranking',
};
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _asn;
var Name$1 = /** @class */ (function () {
    function Name$1(data) {
        _asn.set(this, new Name());
        if (index.BufferSourceConverter.isBufferSource(data)) {
            __classPrivateFieldSet(this, _asn, AsnParser.parse(data, Name));
        }
        else {
            __classPrivateFieldSet(this, _asn, data);
        }
    }
    Name$1.prototype.toJSON = function () {
        var res = [];
        __classPrivateFieldGet(this, _asn).forEach(function (o) { return (o.forEach(function (a) {
            res.push({
                type: a.type,
                name: OIDs[a.type],
                shortName: OIDsShort[a.type],
                value: a.value.toString(),
            });
        })); });
        return res;
    };
    return Name$1;
}());
_asn = new WeakMap();
var BiometricSyntax_1;
var id_pe_biometricInfo = id_pe + ".2";
var PredefinedBiometricType;
(function (PredefinedBiometricType) {
    PredefinedBiometricType[PredefinedBiometricType["picture"] = 0] = "picture";
    PredefinedBiometricType[PredefinedBiometricType["handwrittenSignature"] = 1] = "handwrittenSignature";
})(PredefinedBiometricType || (PredefinedBiometricType = {}));
var TypeOfBiometricData = /** @class */ (function () {
    function TypeOfBiometricData(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return TypeOfBiometricData;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], TypeOfBiometricData.prototype, "predefinedBiometricType", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], TypeOfBiometricData.prototype, "biometricDataOid", void 0);
TypeOfBiometricData = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], TypeOfBiometricData);
var BiometricData = /** @class */ (function () {
    function BiometricData(params) {
        if (params === void 0) { params = {}; }
        this.typeOfBiometricData = new TypeOfBiometricData();
        this.hashAlgorithm = new AlgorithmIdentifier();
        this.biometricDataHash = new OctetString$1();
        Object.assign(this, params);
    }
    return BiometricData;
}());
__decorate([
    AsnProp({ type: TypeOfBiometricData })
], BiometricData.prototype, "typeOfBiometricData", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], BiometricData.prototype, "hashAlgorithm", void 0);
__decorate([
    AsnProp({ type: OctetString$1 })
], BiometricData.prototype, "biometricDataHash", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String, optional: true })
], BiometricData.prototype, "sourceDataUri", void 0);
var BiometricSyntax = BiometricSyntax_1 = /** @class */ (function (_super) {
    __extends(BiometricSyntax, _super);
    function BiometricSyntax(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, BiometricSyntax_1.prototype);
        return _this;
    }
    return BiometricSyntax;
}(AsnArray));
BiometricSyntax = BiometricSyntax_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: BiometricData })
], BiometricSyntax);
var NameRegistrationAuthorities_1, QCStatements_1;
var id_pe_qcStatements = id_pe + ".3";
var QCStatement = /** @class */ (function () {
    function QCStatement() {
        this.statementId = "";
        this.statementInfo = new ArrayBuffer(0);
    }
    return QCStatement;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], QCStatement.prototype, "statementId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, optional: true })
], QCStatement.prototype, "statementInfo", void 0);
var NameRegistrationAuthorities = NameRegistrationAuthorities_1 = /** @class */ (function (_super) {
    __extends(NameRegistrationAuthorities, _super);
    function NameRegistrationAuthorities(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, NameRegistrationAuthorities_1.prototype);
        return _this;
    }
    return NameRegistrationAuthorities;
}(AsnArray));
NameRegistrationAuthorities = NameRegistrationAuthorities_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: GeneralName })
], NameRegistrationAuthorities);
var SemanticsInformation = /** @class */ (function () {
    function SemanticsInformation(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return SemanticsInformation;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier, optional: true })
], SemanticsInformation.prototype, "semanticsIdentifier", void 0);
__decorate([
    AsnProp({ type: NameRegistrationAuthorities, optional: true })
], SemanticsInformation.prototype, "nameRegistrationAuthorities", void 0);
var QCStatements = QCStatements_1 = /** @class */ (function (_super) {
    __extends(QCStatements, _super);
    function QCStatements(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, QCStatements_1.prototype);
        return _this;
    }
    return QCStatements;
}(AsnArray));
QCStatements = QCStatements_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: QCStatement })
], QCStatements);
var PlaceOfBirth = /** @class */ (function (_super) {
    __extends(PlaceOfBirth, _super);
    function PlaceOfBirth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PlaceOfBirth;
}(DirectoryString));
PlaceOfBirth = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], PlaceOfBirth);
var Gender;
(function (Gender) {
    Gender["M"] = "M";
    Gender["F"] = "F";
    Gender["m"] = "m";
    Gender["f"] = "f";
})(Gender || (Gender = {}));
var CertificateApplicationPolicies_1;
var CertificateApplicationPolicies = CertificateApplicationPolicies_1 = /** @class */ (function (_super) {
    __extends(CertificateApplicationPolicies, _super);
    function CertificateApplicationPolicies(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, CertificateApplicationPolicies_1.prototype);
        return _this;
    }
    return CertificateApplicationPolicies;
}(CertificatePolicies));
CertificateApplicationPolicies = CertificateApplicationPolicies_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], CertificateApplicationPolicies);
var id_certificateTemplate = "1.3.6.1.4.1.311.21.7";
var CertificateTemplate = /** @class */ (function () {
    function CertificateTemplate(params) {
        if (params === void 0) { params = {}; }
        this.templateID = "";
        this.templateMajorVersion = 0;
        this.templateMinorVersion = 0;
        Object.assign(this, params);
    }
    return CertificateTemplate;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], CertificateTemplate.prototype, "templateID", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], CertificateTemplate.prototype, "templateMajorVersion", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], CertificateTemplate.prototype, "templateMinorVersion", void 0);
var id_enrollCertType = "1.3.6.1.4.1.311.20.2";
var EnrollCertType = /** @class */ (function () {
    function EnrollCertType(params) {
        if (params === void 0) { params = {}; }
        this.name = "";
        Object.assign(this, params);
    }
    return EnrollCertType;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], EnrollCertType.prototype, "name", void 0);
var EnrollCertTypeChoice = /** @class */ (function () {
    function EnrollCertTypeChoice(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    EnrollCertTypeChoice.prototype.toString = function () {
        var _a, _b;
        return ((_a = this.name) === null || _a === void 0 ? void 0 : _a.toString()) || ((_b = this.spec) === null || _b === void 0 ? void 0 : _b.name) || "";
    };
    return EnrollCertTypeChoice;
}());
__decorate([
    AsnProp({ type: DirectoryString })
], EnrollCertTypeChoice.prototype, "name", void 0);
__decorate([
    AsnProp({ type: EnrollCertType })
], EnrollCertTypeChoice.prototype, "spec", void 0);
EnrollCertTypeChoice = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], EnrollCertTypeChoice);
var id_caVersion = "1.3.6.1.4.1.311.21.1";
var CaVersion = /** @class */ (function () {
    function CaVersion() {
        this.value = new ArrayBuffer(0);
    }
    CaVersion.prototype.toString = function () {
        var version = this.getVersion();
        return "V" + version.certificateIndex + "." + version.keyIndex;
    };
    CaVersion.prototype.getVersion = function () {
        var data = new Uint8Array(this.value);
        if (this.value.byteLength < 4) {
            data = new Uint8Array(4);
            data.set(new Uint8Array(this.value), 4 - this.value.byteLength);
        }
        return {
            keyIndex: parseInt(index.Convert.ToHex(data.slice(0, 2)), 16),
            certificateIndex: parseInt(index.Convert.ToHex(data.slice(2)), 16),
        };
    };
    return CaVersion;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], CaVersion.prototype, "value", void 0);
CaVersion = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], CaVersion);
var AnyString = /** @class */ (function () {
    function AnyString(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return AnyString;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.NumericString })
], AnyString.prototype, "numericString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.PrintableString })
], AnyString.prototype, "printableString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.TeletexString })
], AnyString.prototype, "teletexString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.VideotexString })
], AnyString.prototype, "videotexString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], AnyString.prototype, "ia5String", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.GraphicString })
], AnyString.prototype, "graphicString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.VisibleString })
], AnyString.prototype, "visibleString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralString })
], AnyString.prototype, "generalString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.UniversalString })
], AnyString.prototype, "universalString", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BmpString })
], AnyString.prototype, "bmpString", void 0);
AnyString = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], AnyString);
var ArchivedKey = /** @class */ (function () {
    function ArchivedKey(value) {
        if (value === void 0) { value = new ArrayBuffer(0); }
        this.value = value;
    }
    return ArchivedKey;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], ArchivedKey.prototype, "value", void 0);
ArchivedKey = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ArchivedKey);
var CertExtensions_1;
var CertExtensions = CertExtensions_1 = /** @class */ (function (_super) {
    __extends(CertExtensions, _super);
    function CertExtensions(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, CertExtensions_1.prototype);
        return _this;
    }
    return CertExtensions;
}(Extensions));
CertExtensions = CertExtensions_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], CertExtensions);
var CSPProvider = /** @class */ (function () {
    function CSPProvider(params) {
        if (params === void 0) { params = {}; }
        this.keySpec = 0;
        this.cspName = "";
        this.signature = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return CSPProvider;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], CSPProvider.prototype, "keySpec", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BmpString })
], CSPProvider.prototype, "cspName", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString })
], CSPProvider.prototype, "signature", void 0);
var AttestationIdentityKeyInfo_1;
var AttestationIdentityKeyInfo = AttestationIdentityKeyInfo_1 = /** @class */ (function (_super) {
    __extends(AttestationIdentityKeyInfo, _super);
    function AttestationIdentityKeyInfo(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, AttestationIdentityKeyInfo_1.prototype);
        return _this;
    }
    return AttestationIdentityKeyInfo;
}(AsnArray));
AttestationIdentityKeyInfo = AttestationIdentityKeyInfo_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: AsnPropTypes.Any })
], AttestationIdentityKeyInfo);
var EndorsementKeyInfo_1;
var EndorsementKeyInfo = EndorsementKeyInfo_1 = /** @class */ (function (_super) {
    __extends(EndorsementKeyInfo, _super);
    function EndorsementKeyInfo(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, EndorsementKeyInfo_1.prototype);
        return _this;
    }
    return EndorsementKeyInfo;
}(AsnArray));
EndorsementKeyInfo = EndorsementKeyInfo_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: AsnPropTypes.Any })
], EndorsementKeyInfo);
var EnrollmentNameValuePairs_1;
var EnrollmentNameValuePair = /** @class */ (function () {
    function EnrollmentNameValuePair(params) {
        if (params === void 0) { params = {}; }
        this.name = "";
        this.value = "";
        Object.assign(this, params);
    }
    return EnrollmentNameValuePair;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.BmpString })
], EnrollmentNameValuePair.prototype, "name", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BmpString })
], EnrollmentNameValuePair.prototype, "value", void 0);
var EnrollmentNameValuePairs = EnrollmentNameValuePairs_1 = /** @class */ (function (_super) {
    __extends(EnrollmentNameValuePairs, _super);
    function EnrollmentNameValuePairs(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, EnrollmentNameValuePairs_1.prototype);
        return _this;
    }
    return EnrollmentNameValuePairs;
}(AsnArray));
EnrollmentNameValuePairs = EnrollmentNameValuePairs_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: EnrollmentNameValuePair })
], EnrollmentNameValuePairs);
var NTPrincipalName = /** @class */ (function (_super) {
    __extends(NTPrincipalName, _super);
    function NTPrincipalName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NTPrincipalName;
}(OtherName));
NTPrincipalName = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], NTPrincipalName);
var NTDSReplication = /** @class */ (function (_super) {
    __extends(NTDSReplication, _super);
    function NTDSReplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NTDSReplication;
}(OtherName));
NTDSReplication = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], NTDSReplication);
var RenewalCertificate = /** @class */ (function (_super) {
    __extends(RenewalCertificate, _super);
    function RenewalCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RenewalCertificate;
}(Certificate));
RenewalCertificate = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], RenewalCertificate);
var RequestClientInfo = /** @class */ (function () {
    function RequestClientInfo(params) {
        if (params === void 0) { params = {}; }
        this.clientId = 0;
        this.machineName = "";
        this.userName = "";
        this.processName = "";
        Object.assign(this, params);
    }
    return RequestClientInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], RequestClientInfo.prototype, "clientId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], RequestClientInfo.prototype, "machineName", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], RequestClientInfo.prototype, "userName", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], RequestClientInfo.prototype, "processName", void 0);
var id_netscape = "2.16.840.1.113730";
var id_netscapeCertExtension = id_netscape + ".1";
var NetscapeBaseUrl = /** @class */ (function () {
    function NetscapeBaseUrl(value) {
        this.value = "";
        if (value) {
            this.value = value;
        }
    }
    return NetscapeBaseUrl;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], NetscapeBaseUrl.prototype, "value", void 0);
NetscapeBaseUrl = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], NetscapeBaseUrl);
var NetscapeCaPolicyUrl = /** @class */ (function () {
    function NetscapeCaPolicyUrl(value) {
        this.value = "";
        if (value) {
            this.value = value;
        }
    }
    return NetscapeCaPolicyUrl;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], NetscapeCaPolicyUrl.prototype, "value", void 0);
NetscapeCaPolicyUrl = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], NetscapeCaPolicyUrl);
var NetscapeCaRevocationUrl = /** @class */ (function () {
    function NetscapeCaRevocationUrl(value) {
        this.value = "";
        if (value) {
            this.value = value;
        }
    }
    return NetscapeCaRevocationUrl;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], NetscapeCaRevocationUrl.prototype, "value", void 0);
NetscapeCaRevocationUrl = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], NetscapeCaRevocationUrl);
var NetscapeCertRenewUrl = /** @class */ (function () {
    function NetscapeCertRenewUrl(value) {
        this.value = "";
        if (value) {
            this.value = value;
        }
    }
    return NetscapeCertRenewUrl;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], NetscapeCertRenewUrl.prototype, "value", void 0);
NetscapeCertRenewUrl = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], NetscapeCertRenewUrl);
var id_netscapeCertType = id_netscapeCertExtension + ".1";
var NetscapeCertTypeFlags;
(function (NetscapeCertTypeFlags) {
    NetscapeCertTypeFlags[NetscapeCertTypeFlags["sslClient"] = 1] = "sslClient";
    NetscapeCertTypeFlags[NetscapeCertTypeFlags["sslServer"] = 2] = "sslServer";
    NetscapeCertTypeFlags[NetscapeCertTypeFlags["sMime"] = 4] = "sMime";
    NetscapeCertTypeFlags[NetscapeCertTypeFlags["objectSigning"] = 8] = "objectSigning";
    NetscapeCertTypeFlags[NetscapeCertTypeFlags["sslCa"] = 32] = "sslCa";
    NetscapeCertTypeFlags[NetscapeCertTypeFlags["sMimeCa"] = 64] = "sMimeCa";
    NetscapeCertTypeFlags[NetscapeCertTypeFlags["objectSigningCa"] = 128] = "objectSigningCa";
})(NetscapeCertTypeFlags || (NetscapeCertTypeFlags = {}));
var NetscapeCertType = /** @class */ (function (_super) {
    __extends(NetscapeCertType, _super);
    function NetscapeCertType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetscapeCertType.prototype.toJSON = function () {
        var flag = this.toNumber();
        var res = [];
        if (flag & NetscapeCertTypeFlags.objectSigning) {
            res.push("objectSigning");
        }
        if (flag & NetscapeCertTypeFlags.objectSigningCa) {
            res.push("objectSigningCa");
        }
        if (flag & NetscapeCertTypeFlags.sMime) {
            res.push("sMime");
        }
        if (flag & NetscapeCertTypeFlags.sMimeCa) {
            res.push("sMimeCa");
        }
        if (flag & NetscapeCertTypeFlags.sslCa) {
            res.push("sslCa");
        }
        if (flag & NetscapeCertTypeFlags.sslClient) {
            res.push("sslClient");
        }
        if (flag & NetscapeCertTypeFlags.sslServer) {
            res.push("sslServer");
        }
        return res;
    };
    NetscapeCertType.prototype.toString = function () {
        return "[" + this.toJSON().join(", ") + "]";
    };
    return NetscapeCertType;
}(BitString$1));
var id_netscapeComment = id_netscapeCertExtension + ".13";
var NetscapeComment = /** @class */ (function () {
    function NetscapeComment(value) {
        this.value = "";
        if (value) {
            this.value = value;
        }
    }
    return NetscapeComment;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], NetscapeComment.prototype, "value", void 0);
NetscapeComment = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], NetscapeComment);
var NetscapeRevocationUrl = /** @class */ (function () {
    function NetscapeRevocationUrl(value) {
        this.value = "";
        if (value) {
            this.value = value;
        }
    }
    return NetscapeRevocationUrl;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], NetscapeRevocationUrl.prototype, "value", void 0);
NetscapeRevocationUrl = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], NetscapeRevocationUrl);
var NetscapeSSLServerName = /** @class */ (function () {
    function NetscapeSSLServerName(value) {
        this.value = "";
        if (value) {
            this.value = value;
        }
    }
    return NetscapeSSLServerName;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], NetscapeSSLServerName.prototype, "value", void 0);
NetscapeSSLServerName = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], NetscapeSSLServerName);
var id_lei = "1.3.6.1.4.1.52266.1";
var Lei = /** @class */ (function () {
    function Lei(params) {
        if (params === void 0) { params = {}; }
        this.leiCode = "";
        Object.assign(this, params);
    }
    return Lei;
}());
__decorate([
    AsnProp({ type: PrintableString })
], Lei.prototype, "leiCode", void 0);
__decorate([
    AsnProp({ type: PrintableString, context: 0, optional: true })
], Lei.prototype, "leiRole", void 0);
Lei = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], Lei);
var LeiChoice = /** @class */ (function () {
    function LeiChoice(value) {
        if (typeof value === "string") {
            this.text = value;
        }
        else if (value instanceof Lei) {
            this.struct = value;
        }
    }
    return LeiChoice;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], LeiChoice.prototype, "text", void 0);
__decorate([
    AsnProp({ type: Lei })
], LeiChoice.prototype, "struct", void 0);
LeiChoice = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], LeiChoice);
var id_lei_roles = "1.3.6.1.4.1.52266.2";
var LeiRoles = /** @class */ (function () {
    function LeiRoles(value) {
        this.text = "";
        if (value) {
            this.text = value;
        }
    }
    return LeiRoles;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], LeiRoles.prototype, "text", void 0);
LeiRoles = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], LeiRoles);
var ByteStream = /** @class */ (function () {
    function ByteStream(bytes) {
        this.offset = 0;
        this.view = index.BufferSourceConverter.toUint8Array(bytes);
    }
    Object.defineProperty(ByteStream.prototype, "position", {
        get: function () {
            return this.offset;
        },
        enumerable: false,
        configurable: true
    });
    ByteStream.prototype.read = function (size) {
        if (size === void 0) { size = 1; }
        var res = this.view.slice(this.offset, this.offset + size);
        this.offset = this.offset + res.length;
        return res;
    };
    ByteStream.prototype.readByte = function () {
        var bytes = this.read();
        if (!bytes.length) {
            throw new Error("End of stream");
        }
        return bytes[0];
    };
    ByteStream.prototype.readNumber = function (size) {
        var bytes = this.read(size);
        var hex = index.Convert.ToHex(bytes);
        return parseInt(hex, 16);
    };
    ByteStream.prototype.readEnd = function () {
        return this.read(this.view.length - this.offset);
    };
    ByteStream.prototype.reset = function () {
        this.offset = 0;
    };
    return ByteStream;
}());
var Structure = /** @class */ (function () {
    function Structure() {
    }
    Structure.createStream = function (bytes) {
        var view = index.BufferSourceConverter.toUint8Array(bytes);
        return new ByteStream(view);
    };
    return Structure;
}());
var SignatureType;
(function (SignatureType) {
    SignatureType[SignatureType["certificateTimestamp"] = 0] = "certificateTimestamp";
    SignatureType[SignatureType["treeHash"] = 1] = "treeHash";
})(SignatureType || (SignatureType = {}));
var HashAlgorithm;
(function (HashAlgorithm) {
    HashAlgorithm[HashAlgorithm["none"] = 0] = "none";
    HashAlgorithm[HashAlgorithm["md5"] = 1] = "md5";
    HashAlgorithm[HashAlgorithm["sha1"] = 2] = "sha1";
    HashAlgorithm[HashAlgorithm["sha224"] = 3] = "sha224";
    HashAlgorithm[HashAlgorithm["sha256"] = 4] = "sha256";
    HashAlgorithm[HashAlgorithm["sha384"] = 5] = "sha384";
    HashAlgorithm[HashAlgorithm["sha512"] = 6] = "sha512";
})(HashAlgorithm || (HashAlgorithm = {}));
var SignatureAlgorithm;
(function (SignatureAlgorithm) {
    SignatureAlgorithm[SignatureAlgorithm["anonymous"] = 0] = "anonymous";
    SignatureAlgorithm[SignatureAlgorithm["rsa"] = 1] = "rsa";
    SignatureAlgorithm[SignatureAlgorithm["dsa"] = 2] = "dsa";
    SignatureAlgorithm[SignatureAlgorithm["ecdsa"] = 3] = "ecdsa";
})(SignatureAlgorithm || (SignatureAlgorithm = {}));
var SignedCertificateTimestamp = /** @class */ (function (_super) {
    __extends(SignedCertificateTimestamp, _super);
    function SignedCertificateTimestamp(stream) {
        var _this = _super.call(this) || this;
        _this.version = 0;
        _this.logId = new ArrayBuffer(32);
        _this.timestamp = new Date();
        _this.extensions = new ArrayBuffer(0);
        _this.hashAlgorithm = 0;
        _this.signatureAlgorithm = 0;
        _this.signature = new ArrayBuffer(0);
        if (stream) {
            _this.parse(stream);
        }
        return _this;
    }
    SignedCertificateTimestamp.prototype.parse = function (stream) {
        this.version = stream.readByte();
        stream.read(2);
        this.logId = index.BufferSourceConverter.toArrayBuffer(stream.read(32));
        this.timestamp = new Date(stream.readNumber(8));
        var extLen = stream.readNumber(2);
        this.extensions = stream.read(extLen).buffer;
        this.hashAlgorithm = stream.readByte();
        this.signatureAlgorithm = stream.readByte();
        this.signature = stream.read(stream.readNumber(2)).buffer;
    };
    SignedCertificateTimestamp.prototype.toJSON = function () {
        return {
            version: this.version,
            logId: index.Convert.ToHex(this.logId),
            timestamp: this.timestamp,
            extensions: index.Convert.ToBase64(this.extensions),
            hashAlgorithm: HashAlgorithm[this.hashAlgorithm] || "undefined",
            signatureAlgorithm: SignatureAlgorithm[this.signatureAlgorithm] || "undefined",
            signature: index.Convert.ToBase64(this.signature),
        };
    };
    return SignedCertificateTimestamp;
}(Structure));
var id_certificateTransparency = "1.3.6.1.4.1.11129.2.4.2";
var CertificateTransparency = /** @class */ (function (_super) {
    __extends(CertificateTransparency, _super);
    function CertificateTransparency() {
        var _this = _super.apply(this, arguments) || this;
        _this.items = [];
        return _this;
    }
    CertificateTransparency.prototype.fromASN = function (asn) {
        _super.prototype.fromASN.call(this, asn);
        var stream = new ByteStream(this.buffer);
        var len = stream.readNumber(2);
        this.items = [];
        while (stream.position < len) {
            this.items.push(new SignedCertificateTimestamp(stream));
        }
        return this;
    };
    CertificateTransparency.prototype.toJSON = function () {
        return this.items.map(function (o) { return o.toJSON(); });
    };
    return CertificateTransparency;
}(OctetString$1));
var Version$1;
(function (Version) {
    Version[Version["v1"] = 1] = "v1";
})(Version$1 || (Version$1 = {}));
var id_adbe_archiveRevInfo = "1.2.840.113583.1.1.9.2";
var ArchiveRevInfo = /** @class */ (function () {
    function ArchiveRevInfo(params) {
        if (params === void 0) { params = {}; }
        this.version = Version$1.v1;
        Object.assign(this, params);
    }
    return ArchiveRevInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ArchiveRevInfo.prototype, "version", void 0);
var id_adbe_timestamp = "1.2.840.113583.1.1.9.1";
var Timestamp = /** @class */ (function () {
    function Timestamp(params) {
        if (params === void 0) { params = {}; }
        this.version = Version$1.v1;
        this.location = new GeneralName();
        this.requiresAuth = false;
        Object.assign(this, params);
    }
    return Timestamp;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], Timestamp.prototype, "version", void 0);
__decorate([
    AsnProp({ type: GeneralName })
], Timestamp.prototype, "location", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Boolean, defaultValue: false, optional: true })
], Timestamp.prototype, "requiresAuth", void 0);
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _asn$1, _raw;
var AsnData = /** @class */ (function () {
    function AsnData() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _asn$1.set(this, void 0);
        _raw.set(this, void 0);
        if (args.length === 1) {
            // asn
            // eslint-disable-next-line prefer-destructuring
            __classPrivateFieldSet$1(this, _asn$1, args[0]);
            __classPrivateFieldSet$1(this, _raw, AsnConvert.serialize(__classPrivateFieldGet$1(this, _asn$1)));
        }
        else {
            // raw, type
            __classPrivateFieldSet$1(this, _asn$1, AsnConvert.parse(args[0], args[1]));
            __classPrivateFieldSet$1(this, _raw, index.BufferSourceConverter.toArrayBuffer(args[0]));
        }
    }
    Object.defineProperty(AsnData.prototype, "asn", {
        get: function () {
            return __classPrivateFieldGet$1(this, _asn$1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AsnData.prototype, "raw", {
        get: function () {
            return __classPrivateFieldGet$1(this, _raw);
        },
        enumerable: false,
        configurable: true
    });
    return AsnData;
}());
_asn$1 = new WeakMap(), _raw = new WeakMap();
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Extension$1 = /** @class */ (function (_super) {
    __extends(Extension$1, _super);
    function Extension$1(raw) {
        var _this = _super.call(this, raw, Extension) || this;
        var asnExtnValue = _this.getAsnExtnValue();
        switch (_this.asn.extnID) {
            case id_pe_authorityInfoAccess:
                _this.value = AsnParser.parse(asnExtnValue, AuthorityInfoAccessSyntax);
                break;
            case id_ce_authorityKeyIdentifier:
                _this.value = AsnParser.parse(asnExtnValue, AuthorityKeyIdentifier);
                break;
            case id_ce_basicConstraints:
                _this.value = AsnParser.parse(asnExtnValue, BasicConstraints);
                break;
            case id_ce_certificateIssuer:
                _this.value = AsnParser.parse(asnExtnValue, CertificateIssuer);
                break;
            case id_ce_certificatePolicies:
                _this.value = AsnParser.parse(asnExtnValue, CertificatePolicies);
                break;
            case id_ce_cRLDistributionPoints:
            case '2.5.29.46':
                _this.value = AsnParser.parse(asnExtnValue, CRLDistributionPoints);
                break;
            case id_ce_cRLReasons:
                _this.value = AsnParser.parse(asnExtnValue, CRLReason);
                break;
            case id_ce_extKeyUsage:
                _this.value = AsnParser.parse(asnExtnValue, ExtendedKeyUsage);
                break;
            case id_ce_inhibitAnyPolicy:
                _this.value = AsnParser.parse(asnExtnValue, InhibitAnyPolicy);
                break;
            case id_ce_invalidityDate:
                _this.value = AsnParser.parse(asnExtnValue, InvalidityDate);
                break;
            case id_ce_issuerAltName:
                _this.value = AsnParser.parse(asnExtnValue, IssueAlternativeName);
                break;
            case id_ce_keyUsage:
                _this.value = AsnParser.parse(asnExtnValue, KeyUsage);
                break;
            case id_ce_nameConstraints:
                _this.value = AsnParser.parse(asnExtnValue, NameConstraints);
                break;
            case id_ce_policyConstraints:
                _this.value = AsnParser.parse(asnExtnValue, PolicyConstraints);
                break;
            case id_ce_policyMappings:
                _this.value = AsnParser.parse(asnExtnValue, PolicyMappings);
                break;
            case id_ce_subjectAltName:
                _this.value = AsnParser.parse(asnExtnValue, SubjectAlternativeName);
                break;
            case id_ce_subjectDirectoryAttributes:
                _this.value = AsnParser.parse(asnExtnValue, SubjectDirectoryAttributes);
                break;
            case id_ce_subjectKeyIdentifier:
                _this.value = AsnParser.parse(asnExtnValue, SubjectKeyIdentifier);
                break;
            case id_pe_qcStatements:
                _this.value = AsnParser.parse(asnExtnValue, QCStatements);
                break;
            case id_certificateTemplate:
                _this.value = AsnParser.parse(asnExtnValue, CertificateTemplate);
                break;
            case id_enrollCertType:
                _this.value = AsnParser.parse(asnExtnValue, EnrollCertTypeChoice);
                break;
            case id_netscapeComment:
                _this.value = AsnParser.parse(asnExtnValue, NetscapeComment);
                break;
            case id_netscapeCertType:
                _this.value = AsnParser.parse(asnExtnValue, NetscapeCertType);
                break;
            case id_caVersion:
                _this.value = AsnParser.parse(asnExtnValue, CaVersion);
                break;
            case id_certificateTransparency:
                _this.value = AsnParser.parse(asnExtnValue, CertificateTransparency);
                break;
            case id_lei:
                _this.value = AsnParser.parse(asnExtnValue, LeiChoice);
                break;
            case id_lei_roles:
                _this.value = AsnParser.parse(asnExtnValue, LeiRoles);
                break;
            case id_adbe_timestamp:
                _this.value = AsnParser.parse(asnExtnValue, Timestamp);
                break;
            case id_adbe_archiveRevInfo:
                _this.value = AsnParser.parse(asnExtnValue, ArchiveRevInfo);
                break;
            case id_ce_privateKeyUsagePeriod:
                _this.value = AsnParser.parse(asnExtnValue, PrivateKeyUsagePeriod);
                break;
            case id_entrust_entrustVersInfo:
                _this.value = AsnParser.parse(asnExtnValue, EntrustVersionInfo);
                break;
            case '2.16.724.1.2.2.4.1':
            case id_pe_biometricInfo:
                _this.value = AsnParser.parse(asnExtnValue, BiometricSyntax);
                break;
            default:
                _this.value = index.Convert.ToHex(asnExtnValue);
                console.warn('Didn\'t detect parser for extension:', _this.asn.extnID);
        }
        return _this;
    }
    Extension$1.prototype.getAsnExtnValue = function () {
        return this.asn.extnValue.buffer;
    };
    return Extension$1;
}(AsnData));
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CryptoProvider = /** @class */ (function () {
    function CryptoProvider() {
        this.providers = new Map();
        var crypto = window.crypto || window['msCrypto'];
        if (typeof crypto !== 'undefined') {
            this.set(CryptoProvider.DEFAULT, crypto);
        }
    }
    CryptoProvider.isCryptoKeyPair = function (data) {
        return data && data.privateKey && data.publicKey;
    };
    CryptoProvider.prototype.get = function (key) {
        if (key === void 0) { key = CryptoProvider.DEFAULT; }
        var crypto = this.providers.get(key.toLowerCase());
        if (!crypto) {
            throw new Error("Cannot get Crypto by name '" + key + "'");
        }
        return crypto;
    };
    CryptoProvider.prototype.set = function (key, value) {
        if (typeof key === 'string') {
            if (!value) {
                throw new TypeError("Argument 'value' is required");
            }
            this.providers.set(key.toLowerCase(), value);
        }
        else {
            this.providers.set(CryptoProvider.DEFAULT, key);
        }
        return this;
    };
    return CryptoProvider;
}());
CryptoProvider.DEFAULT = 'default';
var cryptoProvider = new CryptoProvider();
var base64Clarify = function (base64) { return (base64
    .replace(/.*base64,/, '')
    .replace(/-----.+-----/g, '')
    .replace(/[\s\r\n]/g, '')); };
var hexFormat = function (hex) { return (hex
    .replace(/(.{32})/g, '$1\n')
    .replace(/(.{4})/g, '$1 ')
    .trim()); };
var base64Format = function (base64) { return (base64
    .replace(/(.{64})/g, '$1\n')); };
var certificateRawToBuffer = function (raw) {
    var rawClarified = base64Clarify(raw);
    var buffer;
    if (isHex(rawClarified)) {
        buffer = index.Convert.FromHex(rawClarified);
    }
    else if (isBase64(rawClarified) || isPem(rawClarified)) {
        buffer = index.Convert.FromBase64(rawClarified);
    }
    else {
        buffer = index.Convert.FromBinary(raw);
    }
    return buffer;
};
var getCertificateThumbprint = function (algorithm, data) { return __awaiter(void 0, void 0, void 0, function () {
    var crypto;
    return __generator(this, function (_e) {
        crypto = cryptoProvider.get();
        return [2 /*return*/, crypto.subtle.digest(algorithm, data)];
    });
}); };
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X509Certificate = /** @class */ (function (_super) {
    __extends(X509Certificate, _super);
    function X509Certificate(raw) {
        var _this = _super.call(this, certificateRawToBuffer(raw), Certificate) || this;
        _this.thumbprints = {};
        var tbsCertificate = _this.asn.tbsCertificate;
        _this.serialNumber = index.Convert.ToHex(tbsCertificate.serialNumber);
        _this.subject = new Name$1(tbsCertificate.subject).toJSON();
        _this.issuer = new Name$1(tbsCertificate.issuer).toJSON();
        _this.version = tbsCertificate.version + 1;
        var notBefore = tbsCertificate.validity.notBefore.utcTime
            || tbsCertificate.validity.notBefore.generalTime;
        if (!notBefore) {
            throw new Error("Cannot get 'notBefore' value");
        }
        _this.notBefore = notBefore;
        var notAfter = tbsCertificate.validity.notAfter.utcTime
            || tbsCertificate.validity.notAfter.generalTime;
        if (!notAfter) {
            throw new Error("Cannot get 'notAfter' value");
        }
        _this.notAfter = notAfter;
        _this.validity = dateDiff(_this.notBefore, _this.notAfter);
        return _this;
    }
    X509Certificate.prototype.parseExtensions = function () {
        var tbsCertificate = this.asn.tbsCertificate;
        if (tbsCertificate.extensions) {
            this.extensions = tbsCertificate.extensions
                .map(function (e) { return new Extension$1(AsnConvert.serialize(e)); });
        }
    };
    Object.defineProperty(X509Certificate.prototype, "publicKey", {
        get: function () {
            var _e = this.asn.tbsCertificate.subjectPublicKeyInfo, subjectPublicKey = _e.subjectPublicKey, algorithm = _e.algorithm;
            var params;
            if (algorithm.algorithm === id_ecPublicKey && algorithm.parameters) {
                params = AsnConvert.parse(algorithm.parameters, ECParameters);
            }
            if (algorithm.algorithm === id_rsaEncryption) {
                params = AsnConvert.parse(subjectPublicKey, RSAPublicKey);
            }
            var spki = AsnConvert.serialize(this.asn.tbsCertificate.subjectPublicKeyInfo);
            return {
                params: params,
                value: spki,
                algorithm: algorithm.algorithm,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(X509Certificate.prototype, "signature", {
        get: function () {
            var _e = this.asn, signatureValue = _e.signatureValue, signatureAlgorithm = _e.signatureAlgorithm;
            return {
                value: signatureValue,
                algorithm: signatureAlgorithm.algorithm,
            };
        },
        enumerable: false,
        configurable: true
    });
    X509Certificate.prototype.exportAsBase64 = function () {
        return index.Convert.ToBase64(this.raw);
    };
    X509Certificate.prototype.exportAsHexFormatted = function () {
        return hexFormat(index.Convert.ToHex(this.raw));
    };
    X509Certificate.prototype.exportAsPemFormatted = function () {
        return "-----BEGIN CERTIFICATE-----\n" + base64Format(this.exportAsBase64()) + "\n-----END CERTIFICATE-----";
    };
    X509Certificate.prototype.getThumbprint = function (algorithm) {
        if (algorithm === void 0) { algorithm = 'SHA-1'; }
        return __awaiter(this, void 0, void 0, function () {
            var thumbprint, error_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getCertificateThumbprint(algorithm, this.raw)];
                    case 1:
                        thumbprint = _e.sent();
                        this.thumbprints[algorithm['name'] || algorithm] = index.Convert.ToHex(thumbprint);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _e.sent();
                        console.error('Error thumbprint get:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(X509Certificate.prototype, "commonName", {
        get: function () {
            if (!this.subject) {
                return '';
            }
            for (var i = 0; i < this.subject.length; i += 1) {
                var name = this.subject[i];
                if (name.shortName === 'CN' || name.shortName === 'E' || name.shortName === 'O') {
                    return name.value;
                }
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(X509Certificate.prototype, "issuerCommonName", {
        get: function () {
            if (!this.issuer) {
                return '';
            }
            for (var i = 0; i < this.issuer.length; i += 1) {
                var name = this.issuer[i];
                if (name.shortName === 'CN') {
                    return name.value;
                }
                if (name.shortName === 'E') {
                    return name.value;
                }
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(X509Certificate.prototype, "isRoot", {
        get: function () {
            return JSON.stringify(this.issuer) === JSON.stringify(this.subject);
        },
        enumerable: false,
        configurable: true
    });
    X509Certificate.prototype.subjectToString = function () {
        if (!this.subject) {
            return '';
        }
        return this.subject
            .map(function (name) { return (name.shortName + "=" + name.value); })
            .join(', ');
    };
    X509Certificate.prototype.issuerToString = function () {
        if (!this.issuer) {
            return '';
        }
        return this.issuer
            .map(function (name) { return (name.shortName + "=" + name.value); })
            .join(', ');
    };
    return X509Certificate;
}(AsnData));
var ACClearAttrs = /** @class */ (function () {
    function ACClearAttrs(params) {
        if (params === void 0) { params = {}; }
        this.acIssuer = new GeneralName();
        this.acSerial = 0;
        this.attrs = [];
        Object.assign(this, params);
    }
    return ACClearAttrs;
}());
__decorate([
    AsnProp({ type: GeneralName })
], ACClearAttrs.prototype, "acIssuer", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ACClearAttrs.prototype, "acSerial", void 0);
__decorate([
    AsnProp({ type: Attribute, repeated: "sequence" })
], ACClearAttrs.prototype, "attrs", void 0);
var AttrSpec_1;
var AttrSpec = AttrSpec_1 = /** @class */ (function (_super) {
    __extends(AttrSpec, _super);
    function AttrSpec(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, AttrSpec_1.prototype);
        return _this;
    }
    return AttrSpec;
}(AsnArray));
AttrSpec = AttrSpec_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: AsnPropTypes.ObjectIdentifier })
], AttrSpec);
var AAControls = /** @class */ (function () {
    function AAControls(params) {
        if (params === void 0) { params = {}; }
        this.permitUnSpecified = true;
        Object.assign(this, params);
    }
    return AAControls;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, optional: true })
], AAControls.prototype, "pathLenConstraint", void 0);
__decorate([
    AsnProp({ type: AttrSpec, implicit: true, context: 0, optional: true })
], AAControls.prototype, "permittedAttrs", void 0);
__decorate([
    AsnProp({ type: AttrSpec, implicit: true, context: 1, optional: true })
], AAControls.prototype, "excludedAttrs", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Boolean, defaultValue: true })
], AAControls.prototype, "permitUnSpecified", void 0);
var IssuerSerial = /** @class */ (function () {
    function IssuerSerial(params) {
        if (params === void 0) { params = {}; }
        this.issuer = new GeneralNames();
        this.serial = new ArrayBuffer(0);
        this.issuerUID = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return IssuerSerial;
}());
__decorate([
    AsnProp({ type: GeneralNames })
], IssuerSerial.prototype, "issuer", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], IssuerSerial.prototype, "serial", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString, optional: true })
], IssuerSerial.prototype, "issuerUID", void 0);
var DigestedObjectType;
(function (DigestedObjectType) {
    DigestedObjectType[DigestedObjectType["publicKey"] = 0] = "publicKey";
    DigestedObjectType[DigestedObjectType["publicKeyCert"] = 1] = "publicKeyCert";
    DigestedObjectType[DigestedObjectType["otherObjectTypes"] = 2] = "otherObjectTypes";
})(DigestedObjectType || (DigestedObjectType = {}));
var ObjectDigestInfo = /** @class */ (function () {
    function ObjectDigestInfo(params) {
        if (params === void 0) { params = {}; }
        this.digestedObjectType = DigestedObjectType.publicKey;
        this.digestAlgorithm = new AlgorithmIdentifier();
        this.objectDigest = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return ObjectDigestInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Enumerated })
], ObjectDigestInfo.prototype, "digestedObjectType", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier, optional: true })
], ObjectDigestInfo.prototype, "otherObjectTypeID", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], ObjectDigestInfo.prototype, "digestAlgorithm", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString })
], ObjectDigestInfo.prototype, "objectDigest", void 0);
var V2Form = /** @class */ (function () {
    function V2Form(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return V2Form;
}());
__decorate([
    AsnProp({ type: GeneralNames, optional: true })
], V2Form.prototype, "issuerName", void 0);
__decorate([
    AsnProp({ type: IssuerSerial, context: 0, implicit: true, optional: true })
], V2Form.prototype, "baseCertificateID", void 0);
__decorate([
    AsnProp({ type: ObjectDigestInfo, context: 1, implicit: true, optional: true })
], V2Form.prototype, "objectDigestInfo", void 0);
var AttCertIssuer = /** @class */ (function () {
    function AttCertIssuer(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return AttCertIssuer;
}());
__decorate([
    AsnProp({ type: GeneralName, repeated: "sequence" })
], AttCertIssuer.prototype, "v1Form", void 0);
__decorate([
    AsnProp({ type: V2Form, context: 0, implicit: true })
], AttCertIssuer.prototype, "v2Form", void 0);
AttCertIssuer = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], AttCertIssuer);
var AttCertValidityPeriod = /** @class */ (function () {
    function AttCertValidityPeriod(params) {
        if (params === void 0) { params = {}; }
        this.notBeforeTime = new Date();
        this.notAfterTime = new Date();
        Object.assign(this, params);
    }
    return AttCertValidityPeriod;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralizedTime })
], AttCertValidityPeriod.prototype, "notBeforeTime", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralizedTime })
], AttCertValidityPeriod.prototype, "notAfterTime", void 0);
var Holder = /** @class */ (function () {
    function Holder(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return Holder;
}());
__decorate([
    AsnProp({ type: IssuerSerial, implicit: true, context: 0, optional: true })
], Holder.prototype, "baseCertificateID", void 0);
__decorate([
    AsnProp({ type: GeneralNames, implicit: true, context: 1, optional: true })
], Holder.prototype, "entityName", void 0);
__decorate([
    AsnProp({ type: ObjectDigestInfo, implicit: true, context: 2, optional: true })
], Holder.prototype, "objectDigestInfo", void 0);
var AttCertVersion;
(function (AttCertVersion) {
    AttCertVersion[AttCertVersion["v2"] = 1] = "v2";
})(AttCertVersion || (AttCertVersion = {}));
var AttributeCertificateInfo = /** @class */ (function () {
    function AttributeCertificateInfo(params) {
        if (params === void 0) { params = {}; }
        this.version = AttCertVersion.v2;
        this.holder = new Holder();
        this.issuer = new AttCertIssuer();
        this.signature = new AlgorithmIdentifier();
        this.serialNumber = new ArrayBuffer(0);
        this.attrCertValidityPeriod = new AttCertValidityPeriod();
        this.attributes = [];
        Object.assign(this, params);
    }
    return AttributeCertificateInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], AttributeCertificateInfo.prototype, "version", void 0);
__decorate([
    AsnProp({ type: Holder })
], AttributeCertificateInfo.prototype, "holder", void 0);
__decorate([
    AsnProp({ type: AttCertIssuer })
], AttributeCertificateInfo.prototype, "issuer", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], AttributeCertificateInfo.prototype, "signature", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], AttributeCertificateInfo.prototype, "serialNumber", void 0);
__decorate([
    AsnProp({ type: AttCertValidityPeriod })
], AttributeCertificateInfo.prototype, "attrCertValidityPeriod", void 0);
__decorate([
    AsnProp({ type: Attribute, repeated: "sequence" })
], AttributeCertificateInfo.prototype, "attributes", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString, optional: true })
], AttributeCertificateInfo.prototype, "issuerUniqueID", void 0);
__decorate([
    AsnProp({ type: Extensions, optional: true })
], AttributeCertificateInfo.prototype, "extensions", void 0);
var AttributeCertificate = /** @class */ (function () {
    function AttributeCertificate(params) {
        if (params === void 0) { params = {}; }
        this.acinfo = new AttributeCertificateInfo();
        this.signatureAlgorithm = new AlgorithmIdentifier();
        this.signatureValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return AttributeCertificate;
}());
__decorate([
    AsnProp({ type: AttributeCertificateInfo })
], AttributeCertificate.prototype, "acinfo", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], AttributeCertificate.prototype, "signatureAlgorithm", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString })
], AttributeCertificate.prototype, "signatureValue", void 0);
var ClassListFlags;
(function (ClassListFlags) {
    ClassListFlags[ClassListFlags["unmarked"] = 1] = "unmarked";
    ClassListFlags[ClassListFlags["unclassified"] = 2] = "unclassified";
    ClassListFlags[ClassListFlags["restricted"] = 4] = "restricted";
    ClassListFlags[ClassListFlags["confidential"] = 8] = "confidential";
    ClassListFlags[ClassListFlags["secret"] = 16] = "secret";
    ClassListFlags[ClassListFlags["topSecret"] = 32] = "topSecret";
})(ClassListFlags || (ClassListFlags = {}));
var ClassList = /** @class */ (function (_super) {
    __extends(ClassList, _super);
    function ClassList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClassList;
}(BitString$1));
var SecurityCategory = /** @class */ (function () {
    function SecurityCategory(params) {
        if (params === void 0) { params = {}; }
        this.type = "";
        this.value = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return SecurityCategory;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier, implicit: true, context: 0 })
], SecurityCategory.prototype, "type", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, implicit: true, context: 1 })
], SecurityCategory.prototype, "value", void 0);
var Clearance = /** @class */ (function () {
    function Clearance(params) {
        if (params === void 0) { params = {}; }
        this.policyId = "";
        this.classList = new ClassList(ClassListFlags.unclassified);
        Object.assign(this, params);
    }
    return Clearance;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Clearance.prototype, "policyId", void 0);
__decorate([
    AsnProp({ type: ClassList, defaultValue: new ClassList(ClassListFlags.unclassified) })
], Clearance.prototype, "classList", void 0);
__decorate([
    AsnProp({ type: SecurityCategory, repeated: "set" })
], Clearance.prototype, "securityCategories", void 0);
var IetfAttrSyntaxValueChoices = /** @class */ (function () {
    function IetfAttrSyntaxValueChoices(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return IetfAttrSyntaxValueChoices;
}());
__decorate([
    AsnProp({ type: OctetString$1 })
], IetfAttrSyntaxValueChoices.prototype, "cotets", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], IetfAttrSyntaxValueChoices.prototype, "oid", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String })
], IetfAttrSyntaxValueChoices.prototype, "string", void 0);
var IetfAttrSyntax = /** @class */ (function () {
    function IetfAttrSyntax(params) {
        if (params === void 0) { params = {}; }
        this.values = [];
        Object.assign(this, params);
    }
    return IetfAttrSyntax;
}());
__decorate([
    AsnProp({ type: GeneralNames, implicit: true, context: 0, optional: true })
], IetfAttrSyntax.prototype, "policyAuthority", void 0);
__decorate([
    AsnProp({ type: IetfAttrSyntaxValueChoices, repeated: "sequence" })
], IetfAttrSyntax.prototype, "values", void 0);
var Targets_1;
var TargetCert = /** @class */ (function () {
    function TargetCert(params) {
        if (params === void 0) { params = {}; }
        this.targetCertificate = new IssuerSerial();
        Object.assign(this, params);
    }
    return TargetCert;
}());
__decorate([
    AsnProp({ type: IssuerSerial })
], TargetCert.prototype, "targetCertificate", void 0);
__decorate([
    AsnProp({ type: GeneralName, optional: true })
], TargetCert.prototype, "targetName", void 0);
__decorate([
    AsnProp({ type: ObjectDigestInfo, optional: true })
], TargetCert.prototype, "certDigestInfo", void 0);
var Target = /** @class */ (function () {
    function Target(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return Target;
}());
__decorate([
    AsnProp({ type: GeneralName, context: 0, implicit: true })
], Target.prototype, "targetName", void 0);
__decorate([
    AsnProp({ type: GeneralName, context: 1, implicit: true })
], Target.prototype, "targetGroup", void 0);
__decorate([
    AsnProp({ type: TargetCert, context: 2, implicit: true })
], Target.prototype, "targetCert", void 0);
Target = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], Target);
var Targets = Targets_1 = /** @class */ (function (_super) {
    __extends(Targets, _super);
    function Targets(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Targets_1.prototype);
        return _this;
    }
    return Targets;
}(AsnArray));
Targets = Targets_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: Target })
], Targets);
var ProxyInfo_1;
var ProxyInfo = ProxyInfo_1 = /** @class */ (function (_super) {
    __extends(ProxyInfo, _super);
    function ProxyInfo(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, ProxyInfo_1.prototype);
        return _this;
    }
    return ProxyInfo;
}(AsnArray));
ProxyInfo = ProxyInfo_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: Targets })
], ProxyInfo);
var RoleSyntax = /** @class */ (function () {
    function RoleSyntax(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return RoleSyntax;
}());
__decorate([
    AsnProp({ type: GeneralNames, implicit: true, context: 0, optional: true })
], RoleSyntax.prototype, "roleAuthority", void 0);
__decorate([
    AsnProp({ type: GeneralName, implicit: true, context: 1 })
], RoleSyntax.prototype, "roleName", void 0);
var SvceAuthInfo = /** @class */ (function () {
    function SvceAuthInfo(params) {
        if (params === void 0) { params = {}; }
        this.service = new GeneralName();
        this.ident = new GeneralName();
        Object.assign(this, params);
    }
    return SvceAuthInfo;
}());
__decorate([
    AsnProp({ type: GeneralName })
], SvceAuthInfo.prototype, "service", void 0);
__decorate([
    AsnProp({ type: GeneralName })
], SvceAuthInfo.prototype, "ident", void 0);
__decorate([
    AsnProp({ type: OctetString$1, optional: true })
], SvceAuthInfo.prototype, "authInfo", void 0);
var id_ntQWAC = "0.4.0.9496";
var id_ActivityDescription = id_ntQWAC + ".6";
var ActivityDescription = /** @class */ (function () {
    function ActivityDescription(params) {
        if (params === void 0) { params = {}; }
        this.codeAuthority = new GeneralName();
        this.codeId = new GeneralName();
        this.shortName = "";
        this.shortDescription = "";
        Object.assign(this, params);
    }
    return ActivityDescription;
}());
__decorate([
    AsnProp({ type: GeneralName, context: 0 })
], ActivityDescription.prototype, "codeAuthority", void 0);
__decorate([
    AsnProp({ type: GeneralName, context: 1 })
], ActivityDescription.prototype, "codeId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String, context: 2 })
], ActivityDescription.prototype, "shortName", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String, context: 3 })
], ActivityDescription.prototype, "shortDescription", void 0);
ActivityDescription = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], ActivityDescription);
var DomainName = /** @class */ (function (_super) {
    __extends(DomainName, _super);
    function DomainName(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Name.prototype);
        return _this;
    }
    return DomainName;
}(Name));
DomainName = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], DomainName);
var id_DomainNameBeneficiary = id_ntQWAC + ".1";
var DomainNameBeneficiary = /** @class */ (function (_super) {
    __extends(DomainNameBeneficiary, _super);
    function DomainNameBeneficiary(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Name.prototype);
        return _this;
    }
    return DomainNameBeneficiary;
}(DomainName));
DomainNameBeneficiary = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], DomainNameBeneficiary);
var id_DomainNameLegalRepresentative = id_ntQWAC + ".2";
var DomainNameLegalRepresentative = /** @class */ (function (_super) {
    __extends(DomainNameLegalRepresentative, _super);
    function DomainNameLegalRepresentative(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Name.prototype);
        return _this;
    }
    return DomainNameLegalRepresentative;
}(DomainName));
DomainNameLegalRepresentative = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], DomainNameLegalRepresentative);
var id_DomainNameOwner = id_ntQWAC + ".3";
var DomainNameOwner = /** @class */ (function (_super) {
    __extends(DomainNameOwner, _super);
    function DomainNameOwner(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Name.prototype);
        return _this;
    }
    return DomainNameOwner;
}(DomainName));
DomainNameOwner = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], DomainNameOwner);
var id_DomainNameTechnicalOperator = id_ntQWAC + ".4";
var DomainNameTechnicalOperator = /** @class */ (function (_super) {
    __extends(DomainNameTechnicalOperator, _super);
    function DomainNameTechnicalOperator(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Name.prototype);
        return _this;
    }
    return DomainNameTechnicalOperator;
}(DomainName));
DomainNameTechnicalOperator = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], DomainNameTechnicalOperator);
var id_InsuranceValue = id_ntQWAC + ".8";
var InsuranceValue = /** @class */ (function () {
    function InsuranceValue(params) {
        if (params === void 0) { params = {}; }
        this.location = "";
        this.base = 0;
        this.degree = 0;
        Object.assign(this, params);
    }
    InsuranceValue.prototype.toString = function () {
        return this.base + " x 10^" + this.degree + " " + this.location;
    };
    return InsuranceValue;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.PrintableString })
], InsuranceValue.prototype, "location", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], InsuranceValue.prototype, "base", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], InsuranceValue.prototype, "degree", void 0);
InsuranceValue = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], InsuranceValue);
var id_ValuationRanking = id_ntQWAC + ".9";
var ValuationRanking = /** @class */ (function () {
    function ValuationRanking(params) {
        if (params === void 0) { params = {}; }
        this.stars5 = 0;
        this.stars4 = 0;
        this.stars3 = 0;
        this.stars2 = 0;
        this.stars1 = 0;
        Object.assign(this, params);
    }
    return ValuationRanking;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ValuationRanking.prototype, "stars5", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ValuationRanking.prototype, "stars4", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ValuationRanking.prototype, "stars3", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ValuationRanking.prototype, "stars2", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ValuationRanking.prototype, "stars1", void 0);
ValuationRanking = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], ValuationRanking);
var id_TypeRelationship = id_ntQWAC + ".5";
var TypeRelationship = /** @class */ (function () {
    function TypeRelationship(params) {
        if (params === void 0) { params = {}; }
        this.DNBvsDNO = new BitString$1(0);
        this.DNBvsDNT = new BitString$1(0);
        this.DNOvsDNT = new BitString$1(0);
        Object.assign(this, params);
    }
    return TypeRelationship;
}());
__decorate([
    AsnProp({ type: BitString$1, context: 0 })
], TypeRelationship.prototype, "DNBvsDNO", void 0);
__decorate([
    AsnProp({ type: BitString$1, context: 1 })
], TypeRelationship.prototype, "DNBvsDNT", void 0);
__decorate([
    AsnProp({ type: BitString$1, context: 2 })
], TypeRelationship.prototype, "DNOvsDNT", void 0);
TypeRelationship = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], TypeRelationship);
var id_WebGDPR = id_ntQWAC + ".7";
var WebGDPR = /** @class */ (function () {
    function WebGDPR(params) {
        if (params === void 0) { params = {}; }
        this.assessmentAuthority = new GeneralName();
        this.assessmentRef = new GeneralName();
        this.assessmentLocation = new GeneralName();
        this.dataStorageTerritory = "";
        this.description = "";
        Object.assign(this, params);
    }
    return WebGDPR;
}());
__decorate([
    AsnProp({ type: GeneralName, context: 0 })
], WebGDPR.prototype, "assessmentAuthority", void 0);
__decorate([
    AsnProp({ type: GeneralName, context: 1 })
], WebGDPR.prototype, "assessmentRef", void 0);
__decorate([
    AsnProp({ type: GeneralName, context: 2 })
], WebGDPR.prototype, "assessmentLocation", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.PrintableString, context: 3 })
], WebGDPR.prototype, "dataStorageTerritory", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Utf8String, context: 4 })
], WebGDPR.prototype, "description", void 0);
WebGDPR = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], WebGDPR);
var Attribute$1 = /** @class */ (function () {
    function Attribute$1(params) {
        if (params === void 0) { params = {}; }
        this.attrType = "";
        this.attrValues = [];
        Object.assign(this, params);
    }
    return Attribute$1;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Attribute$1.prototype, "attrType", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, repeated: "set" })
], Attribute$1.prototype, "attrValues", void 0);
var CertificateSet_1;
var OtherCertificateFormat = /** @class */ (function () {
    function OtherCertificateFormat(params) {
        if (params === void 0) { params = {}; }
        this.otherCertFormat = "";
        this.otherCert = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return OtherCertificateFormat;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherCertificateFormat.prototype, "otherCertFormat", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], OtherCertificateFormat.prototype, "otherCert", void 0);
var CertificateChoices = /** @class */ (function () {
    function CertificateChoices(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return CertificateChoices;
}());
__decorate([
    AsnProp({ type: Certificate })
], CertificateChoices.prototype, "certificate", void 0);
__decorate([
    AsnProp({ type: AttributeCertificate, context: 2, implicit: true })
], CertificateChoices.prototype, "v2AttrCert", void 0);
__decorate([
    AsnProp({ type: OtherCertificateFormat, context: 3, implicit: true })
], CertificateChoices.prototype, "other", void 0);
CertificateChoices = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], CertificateChoices);
var CertificateSet = CertificateSet_1 = /** @class */ (function (_super) {
    __extends(CertificateSet, _super);
    function CertificateSet(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, CertificateSet_1.prototype);
        return _this;
    }
    return CertificateSet;
}(AsnArray));
CertificateSet = CertificateSet_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Set, itemType: CertificateChoices })
], CertificateSet);
var ContentInfo = /** @class */ (function () {
    function ContentInfo(params) {
        if (params === void 0) { params = {}; }
        this.contentType = "";
        this.content = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return ContentInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ContentInfo.prototype, "contentType", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, context: 0 })
], ContentInfo.prototype, "content", void 0);
var EncapsulatedContent = /** @class */ (function () {
    function EncapsulatedContent(params) {
        if (params === void 0) { params = {}; }
        Object.assign(this, params);
    }
    return EncapsulatedContent;
}());
__decorate([
    AsnProp({ type: OctetString$1 })
], EncapsulatedContent.prototype, "single", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], EncapsulatedContent.prototype, "any", void 0);
EncapsulatedContent = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], EncapsulatedContent);
var EncapsulatedContentInfo = /** @class */ (function () {
    function EncapsulatedContentInfo(params) {
        if (params === void 0) { params = {}; }
        this.eContentType = "";
        Object.assign(this, params);
    }
    return EncapsulatedContentInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], EncapsulatedContentInfo.prototype, "eContentType", void 0);
__decorate([
    AsnProp({ type: EncapsulatedContent, context: 0, optional: true })
], EncapsulatedContentInfo.prototype, "eContent", void 0);
var IssuerAndSerialNumber = /** @class */ (function () {
    function IssuerAndSerialNumber(params) {
        if (params === void 0) { params = {}; }
        this.issuer = new Name;
        this.serialNumber = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return IssuerAndSerialNumber;
}());
__decorate([
    AsnProp({ type: Name })
], IssuerAndSerialNumber.prototype, "issuer", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], IssuerAndSerialNumber.prototype, "serialNumber", void 0);
var RevocationInfoChoices_1;
var OtherRevocationInfoFormat = /** @class */ (function () {
    function OtherRevocationInfoFormat(params) {
        if (params === void 0) { params = {}; }
        this.otherRevInfoFormat = "";
        this.otherRevInfo = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return OtherRevocationInfoFormat;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherRevocationInfoFormat.prototype, "otherRevInfoFormat", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], OtherRevocationInfoFormat.prototype, "otherRevInfo", void 0);
var RevocationInfoChoice = /** @class */ (function () {
    function RevocationInfoChoice(params) {
        if (params === void 0) { params = {}; }
        this.other = new OtherRevocationInfoFormat();
        Object.assign(this, params);
    }
    return RevocationInfoChoice;
}());
__decorate([
    AsnProp({ type: OtherRevocationInfoFormat, context: 1, implicit: true })
], RevocationInfoChoice.prototype, "other", void 0);
RevocationInfoChoice = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], RevocationInfoChoice);
var RevocationInfoChoices = RevocationInfoChoices_1 = /** @class */ (function (_super) {
    __extends(RevocationInfoChoices, _super);
    function RevocationInfoChoices(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, RevocationInfoChoices_1.prototype);
        return _this;
    }
    return RevocationInfoChoices;
}(AsnArray));
RevocationInfoChoices = RevocationInfoChoices_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Set, itemType: RevocationInfoChoice })
], RevocationInfoChoices);
var CMSVersion;
(function (CMSVersion) {
    CMSVersion[CMSVersion["v0"] = 0] = "v0";
    CMSVersion[CMSVersion["v1"] = 1] = "v1";
    CMSVersion[CMSVersion["v2"] = 2] = "v2";
    CMSVersion[CMSVersion["v3"] = 3] = "v3";
    CMSVersion[CMSVersion["v4"] = 4] = "v4";
    CMSVersion[CMSVersion["v5"] = 5] = "v5";
})(CMSVersion || (CMSVersion = {}));
var DigestAlgorithmIdentifier = /** @class */ (function (_super) {
    __extends(DigestAlgorithmIdentifier, _super);
    function DigestAlgorithmIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DigestAlgorithmIdentifier;
}(AlgorithmIdentifier));
DigestAlgorithmIdentifier = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], DigestAlgorithmIdentifier);
var SignatureAlgorithmIdentifier = /** @class */ (function (_super) {
    __extends(SignatureAlgorithmIdentifier, _super);
    function SignatureAlgorithmIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SignatureAlgorithmIdentifier;
}(AlgorithmIdentifier));
SignatureAlgorithmIdentifier = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], SignatureAlgorithmIdentifier);
var SignerIdentifier = /** @class */ (function () {
    function SignerIdentifier(params) {
        if (params === void 0) { params = {}; }
        this.issuerAndSerialNumber = new IssuerAndSerialNumber();
        this.subjectKeyIdentifier = new SubjectKeyIdentifier();
        Object.assign(this, params);
    }
    return SignerIdentifier;
}());
__decorate([
    AsnProp({ type: IssuerAndSerialNumber })
], SignerIdentifier.prototype, "issuerAndSerialNumber", void 0);
__decorate([
    AsnProp({ type: SubjectKeyIdentifier, context: 0, implicit: true })
], SignerIdentifier.prototype, "subjectKeyIdentifier", void 0);
SignerIdentifier = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], SignerIdentifier);
var SignerInfos_1;
var SignerInfo = /** @class */ (function () {
    function SignerInfo(params) {
        if (params === void 0) { params = {}; }
        this.version = CMSVersion.v0;
        this.sid = new SignerIdentifier();
        this.digestAlgorithm = new DigestAlgorithmIdentifier();
        this.signatureAlgorithm = new SignatureAlgorithmIdentifier();
        this.signature = new OctetString$1();
        Object.assign(this, params);
    }
    return SignerInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], SignerInfo.prototype, "version", void 0);
__decorate([
    AsnProp({ type: SignerIdentifier })
], SignerInfo.prototype, "sid", void 0);
__decorate([
    AsnProp({ type: DigestAlgorithmIdentifier })
], SignerInfo.prototype, "digestAlgorithm", void 0);
__decorate([
    AsnProp({ type: Attribute$1, repeated: "set", context: 0, implicit: true, optional: true })
], SignerInfo.prototype, "signedAttrs", void 0);
__decorate([
    AsnProp({ type: SignatureAlgorithmIdentifier })
], SignerInfo.prototype, "signatureAlgorithm", void 0);
__decorate([
    AsnProp({ type: OctetString$1 })
], SignerInfo.prototype, "signature", void 0);
__decorate([
    AsnProp({ type: Attribute$1, repeated: "set", context: 1, implicit: true, optional: true })
], SignerInfo.prototype, "unsignedAttrs", void 0);
var SignerInfos = SignerInfos_1 = /** @class */ (function (_super) {
    __extends(SignerInfos, _super);
    function SignerInfos(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, SignerInfos_1.prototype);
        return _this;
    }
    return SignerInfos;
}(AsnArray));
SignerInfos = SignerInfos_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Set, itemType: SignerInfo })
], SignerInfos);
var DigestAlgorithmIdentifiers_1;
var DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = /** @class */ (function (_super) {
    __extends(DigestAlgorithmIdentifiers, _super);
    function DigestAlgorithmIdentifiers(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, DigestAlgorithmIdentifiers_1.prototype);
        return _this;
    }
    return DigestAlgorithmIdentifiers;
}(AsnArray));
DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Set, itemType: DigestAlgorithmIdentifier })
], DigestAlgorithmIdentifiers);
var SignedData = /** @class */ (function () {
    function SignedData(params) {
        if (params === void 0) { params = {}; }
        this.version = CMSVersion.v0;
        this.digestAlgorithms = new DigestAlgorithmIdentifiers();
        this.encapContentInfo = new EncapsulatedContentInfo();
        this.signerInfos = new SignerInfos();
        Object.assign(this, params);
    }
    return SignedData;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], SignedData.prototype, "version", void 0);
__decorate([
    AsnProp({ type: DigestAlgorithmIdentifiers })
], SignedData.prototype, "digestAlgorithms", void 0);
__decorate([
    AsnProp({ type: EncapsulatedContentInfo })
], SignedData.prototype, "encapContentInfo", void 0);
__decorate([
    AsnProp({ type: CertificateSet, context: 0, implicit: true, optional: true })
], SignedData.prototype, "certificates", void 0);
__decorate([
    AsnProp({ type: RevocationInfoChoice, context: 1, implicit: true, optional: true })
], SignedData.prototype, "crls", void 0);
__decorate([
    AsnProp({ type: SignerInfos })
], SignedData.prototype, "signerInfos", void 0);
var PKCS12AttrSet_1;
var PKCS12Attribute = /** @class */ (function () {
    function PKCS12Attribute(params) {
        if (params === void 0) { params = {}; }
        this.attrId = "";
        this.attrValues = [];
        Object.assign(params);
    }
    return PKCS12Attribute;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PKCS12Attribute.prototype, "attrId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, repeated: "set" })
], PKCS12Attribute.prototype, "attrValues", void 0);
var PKCS12AttrSet = PKCS12AttrSet_1 = /** @class */ (function (_super) {
    __extends(PKCS12AttrSet, _super);
    function PKCS12AttrSet(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, PKCS12AttrSet_1.prototype);
        return _this;
    }
    return PKCS12AttrSet;
}(AsnArray));
PKCS12AttrSet = PKCS12AttrSet_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: PKCS12Attribute })
], PKCS12AttrSet);
var AuthenticatedSafe_1;
var AuthenticatedSafe = AuthenticatedSafe_1 = /** @class */ (function (_super) {
    __extends(AuthenticatedSafe, _super);
    function AuthenticatedSafe(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, AuthenticatedSafe_1.prototype);
        return _this;
    }
    return AuthenticatedSafe;
}(AsnArray));
AuthenticatedSafe = AuthenticatedSafe_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: ContentInfo })
], AuthenticatedSafe);
var CertBag = /** @class */ (function () {
    function CertBag(params) {
        if (params === void 0) { params = {}; }
        this.certId = "";
        this.certValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return CertBag;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], CertBag.prototype, "certId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, context: 0 })
], CertBag.prototype, "certValue", void 0);
var CRLBag = /** @class */ (function () {
    function CRLBag(params) {
        if (params === void 0) { params = {}; }
        this.crlId = "";
        this.crltValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return CRLBag;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], CRLBag.prototype, "crlId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, context: 0 })
], CRLBag.prototype, "crltValue", void 0);
var EncryptedData = /** @class */ (function (_super) {
    __extends(EncryptedData, _super);
    function EncryptedData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EncryptedData;
}(OctetString$1));
var EncryptedPrivateKeyInfo = /** @class */ (function () {
    function EncryptedPrivateKeyInfo(params) {
        if (params === void 0) { params = {}; }
        this.encryptionAlgorithm = new AlgorithmIdentifier();
        this.encryptedData = new EncryptedData();
        Object.assign(this, params);
    }
    return EncryptedPrivateKeyInfo;
}());
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], EncryptedPrivateKeyInfo.prototype, "encryptionAlgorithm", void 0);
__decorate([
    AsnProp({ type: EncryptedData })
], EncryptedPrivateKeyInfo.prototype, "encryptedData", void 0);
var Attributes_1;
var Version$2;
(function (Version) {
    Version[Version["v1"] = 0] = "v1";
})(Version$2 || (Version$2 = {}));
var PrivateKey = /** @class */ (function (_super) {
    __extends(PrivateKey, _super);
    function PrivateKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrivateKey;
}(OctetString$1));
var Attributes = Attributes_1 = /** @class */ (function (_super) {
    __extends(Attributes, _super);
    function Attributes(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Attributes_1.prototype);
        return _this;
    }
    return Attributes;
}(AsnArray));
Attributes = Attributes_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: Attribute })
], Attributes);
var PrivateKeyInfo = /** @class */ (function () {
    function PrivateKeyInfo(params) {
        if (params === void 0) { params = {}; }
        this.version = Version$2.v1;
        this.privateKeyAlgorithm = new AlgorithmIdentifier();
        this.privateKey = new PrivateKey();
        Object.assign(this, params);
    }
    return PrivateKeyInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], PrivateKeyInfo.prototype, "version", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], PrivateKeyInfo.prototype, "privateKeyAlgorithm", void 0);
__decorate([
    AsnProp({ type: PrivateKey })
], PrivateKeyInfo.prototype, "privateKey", void 0);
__decorate([
    AsnProp({ type: Attributes, implicit: true, context: 0, optional: true })
], PrivateKeyInfo.prototype, "attributes", void 0);
var KeyBag = /** @class */ (function (_super) {
    __extends(KeyBag, _super);
    function KeyBag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KeyBag;
}(PrivateKeyInfo));
KeyBag = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], KeyBag);
var PKCS8ShroudedKeyBag = /** @class */ (function (_super) {
    __extends(PKCS8ShroudedKeyBag, _super);
    function PKCS8ShroudedKeyBag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PKCS8ShroudedKeyBag;
}(EncryptedPrivateKeyInfo));
PKCS8ShroudedKeyBag = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], PKCS8ShroudedKeyBag);
var SecretBag = /** @class */ (function () {
    function SecretBag(params) {
        if (params === void 0) { params = {}; }
        this.secretTypeId = "";
        this.secretValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return SecretBag;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], SecretBag.prototype, "secretTypeId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, context: 0 })
], SecretBag.prototype, "secretValue", void 0);
var MacData = /** @class */ (function () {
    function MacData(params) {
        if (params === void 0) { params = {}; }
        this.mac = new DigestInfo();
        this.macSalt = new OctetString$1();
        this.iterations = 1;
        Object.assign(this, params);
    }
    return MacData;
}());
__decorate([
    AsnProp({ type: DigestInfo })
], MacData.prototype, "mac", void 0);
__decorate([
    AsnProp({ type: OctetString$1 })
], MacData.prototype, "macSalt", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, defaultValue: 1 })
], MacData.prototype, "iterations", void 0);
var PFX = /** @class */ (function () {
    function PFX(params) {
        if (params === void 0) { params = {}; }
        this.version = 3;
        this.authSafe = new ContentInfo();
        this.macData = new MacData();
        Object.assign(this, params);
    }
    return PFX;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], PFX.prototype, "version", void 0);
__decorate([
    AsnProp({ type: ContentInfo })
], PFX.prototype, "authSafe", void 0);
__decorate([
    AsnProp({ type: MacData, optional: true })
], PFX.prototype, "macData", void 0);
var SafeContents_1;
var SafeBag = /** @class */ (function () {
    function SafeBag(params) {
        if (params === void 0) { params = {}; }
        this.bagId = "";
        this.bagValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return SafeBag;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], SafeBag.prototype, "bagId", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, context: 0 })
], SafeBag.prototype, "bagValue", void 0);
__decorate([
    AsnProp({ type: PKCS12Attribute, repeated: "set", optional: true })
], SafeBag.prototype, "bagAttributes", void 0);
var SafeContents = SafeContents_1 = /** @class */ (function (_super) {
    __extends(SafeContents, _super);
    function SafeContents(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, SafeContents_1.prototype);
        return _this;
    }
    return SafeContents;
}(AsnArray));
SafeContents = SafeContents_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: SafeBag })
], SafeContents);
var ExtensionRequest_1, ExtendedCertificateAttributes_1, SMIMECapabilities_1;
var id_pkcs9 = "1.2.840.113549.1.9";
var id_pkcs9_at_unstructuredName = id_pkcs9 + ".2";
var id_pkcs9_at_challengePassword = id_pkcs9 + ".7";
var id_pkcs9_at_extensionRequest = id_pkcs9 + ".14";
var PKCS9String = /** @class */ (function (_super) {
    __extends(PKCS9String, _super);
    function PKCS9String(params) {
        if (params === void 0) { params = {}; }
        return _super.call(this, params) || this;
    }
    PKCS9String.prototype.toString = function () {
        var o = {};
        o.toString();
        return this.ia5String || _super.prototype.toString.call(this);
    };
    return PKCS9String;
}(DirectoryString));
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], PKCS9String.prototype, "ia5String", void 0);
PKCS9String = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], PKCS9String);
var Pkcs7PDU = /** @class */ (function (_super) {
    __extends(Pkcs7PDU, _super);
    function Pkcs7PDU() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pkcs7PDU;
}(ContentInfo));
Pkcs7PDU = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], Pkcs7PDU);
var UserPKCS12 = /** @class */ (function (_super) {
    __extends(UserPKCS12, _super);
    function UserPKCS12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserPKCS12;
}(PFX));
UserPKCS12 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], UserPKCS12);
var EncryptedPrivateKeyInfo$1 = /** @class */ (function (_super) {
    __extends(EncryptedPrivateKeyInfo$1, _super);
    function EncryptedPrivateKeyInfo$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EncryptedPrivateKeyInfo$1;
}(EncryptedPrivateKeyInfo));
EncryptedPrivateKeyInfo$1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], EncryptedPrivateKeyInfo$1);
var EmailAddress = /** @class */ (function () {
    function EmailAddress(value) {
        if (value === void 0) { value = ""; }
        this.value = value;
    }
    EmailAddress.prototype.toString = function () {
        return this.value;
    };
    return EmailAddress;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.IA5String })
], EmailAddress.prototype, "value", void 0);
EmailAddress = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], EmailAddress);
var UnstructuredName = /** @class */ (function (_super) {
    __extends(UnstructuredName, _super);
    function UnstructuredName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnstructuredName;
}(PKCS9String));
UnstructuredName = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], UnstructuredName);
var UnstructuredAddress = /** @class */ (function (_super) {
    __extends(UnstructuredAddress, _super);
    function UnstructuredAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnstructuredAddress;
}(DirectoryString));
UnstructuredAddress = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], UnstructuredAddress);
var DateOfBirth = /** @class */ (function () {
    function DateOfBirth(value) {
        if (value === void 0) { value = new Date(); }
        this.value = value;
    }
    return DateOfBirth;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.GeneralizedTime })
], DateOfBirth.prototype, "value", void 0);
DateOfBirth = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], DateOfBirth);
var PlaceOfBirth$1 = /** @class */ (function (_super) {
    __extends(PlaceOfBirth, _super);
    function PlaceOfBirth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PlaceOfBirth;
}(DirectoryString));
PlaceOfBirth$1 = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], PlaceOfBirth$1);
var Gender$1 = /** @class */ (function () {
    function Gender(value) {
        if (value === void 0) { value = "M"; }
        this.value = value;
    }
    Gender.prototype.toString = function () {
        return this.value;
    };
    return Gender;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.PrintableString })
], Gender$1.prototype, "value", void 0);
Gender$1 = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], Gender$1);
var CountryOfCitizenship = /** @class */ (function () {
    function CountryOfCitizenship(value) {
        if (value === void 0) { value = ""; }
        this.value = value;
    }
    CountryOfCitizenship.prototype.toString = function () {
        return this.value;
    };
    return CountryOfCitizenship;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.PrintableString })
], CountryOfCitizenship.prototype, "value", void 0);
CountryOfCitizenship = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], CountryOfCitizenship);
var CountryOfResidence = /** @class */ (function (_super) {
    __extends(CountryOfResidence, _super);
    function CountryOfResidence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CountryOfResidence;
}(CountryOfCitizenship));
CountryOfResidence = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], CountryOfResidence);
var Pseudonym = /** @class */ (function (_super) {
    __extends(Pseudonym, _super);
    function Pseudonym() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pseudonym;
}(DirectoryString));
Pseudonym = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], Pseudonym);
var ContentType = /** @class */ (function () {
    function ContentType(value) {
        if (value === void 0) { value = ""; }
        this.value = value;
    }
    ContentType.prototype.toString = function () {
        return this.value;
    };
    return ContentType;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ContentType.prototype, "value", void 0);
ContentType = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ContentType);
var SigningTime = /** @class */ (function (_super) {
    __extends(SigningTime, _super);
    function SigningTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SigningTime;
}(Time));
SigningTime = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], SigningTime);
var SequenceNumber = /** @class */ (function () {
    function SequenceNumber(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    SequenceNumber.prototype.toString = function () {
        return this.value.toString();
    };
    return SequenceNumber;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], SequenceNumber.prototype, "value", void 0);
SequenceNumber = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], SequenceNumber);
var CounterSignature = /** @class */ (function (_super) {
    __extends(CounterSignature, _super);
    function CounterSignature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CounterSignature;
}(SignerInfo));
CounterSignature = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], CounterSignature);
var ChallengePassword = /** @class */ (function (_super) {
    __extends(ChallengePassword, _super);
    function ChallengePassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChallengePassword;
}(DirectoryString));
ChallengePassword = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ChallengePassword);
var ExtensionRequest = ExtensionRequest_1 = /** @class */ (function (_super) {
    __extends(ExtensionRequest, _super);
    function ExtensionRequest(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, ExtensionRequest_1.prototype);
        return _this;
    }
    return ExtensionRequest;
}(Extensions));
ExtensionRequest = ExtensionRequest_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], ExtensionRequest);
var ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = /** @class */ (function (_super) {
    __extends(ExtendedCertificateAttributes, _super);
    function ExtendedCertificateAttributes(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, ExtendedCertificateAttributes_1.prototype);
        return _this;
    }
    return ExtendedCertificateAttributes;
}(AsnArray));
ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Set, itemType: Attribute$1 })
], ExtendedCertificateAttributes);
var FriendlyName = /** @class */ (function () {
    function FriendlyName(value) {
        if (value === void 0) { value = ""; }
        this.value = value;
    }
    FriendlyName.prototype.toString = function () {
        return this.value;
    };
    return FriendlyName;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.BmpString })
], FriendlyName.prototype, "value", void 0);
FriendlyName = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], FriendlyName);
var SMIMECapability = /** @class */ (function (_super) {
    __extends(SMIMECapability, _super);
    function SMIMECapability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SMIMECapability;
}(AlgorithmIdentifier));
SMIMECapability = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence })
], SMIMECapability);
var SMIMECapabilities = SMIMECapabilities_1 = /** @class */ (function (_super) {
    __extends(SMIMECapabilities, _super);
    function SMIMECapabilities(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, SMIMECapabilities_1.prototype);
        return _this;
    }
    return SMIMECapabilities;
}(AsnArray));
SMIMECapabilities = SMIMECapabilities_1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: SMIMECapability })
], SMIMECapabilities);
var Attributes_1$1;
var Attributes$1 = Attributes_1$1 = /** @class */ (function (_super) {
    __extends(Attributes, _super);
    function Attributes(items) {
        var _this = _super.call(this, items) || this;
        Object.setPrototypeOf(_this, Attributes_1$1.prototype);
        return _this;
    }
    return Attributes;
}(AsnArray));
Attributes$1 = Attributes_1$1 = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: Attribute })
], Attributes$1);
var CertificationRequestInfo = /** @class */ (function () {
    function CertificationRequestInfo(params) {
        if (params === void 0) { params = {}; }
        this.version = 0;
        this.subject = new Name();
        this.subjectPKInfo = new SubjectPublicKeyInfo();
        this.attributes = new Attributes$1();
        Object.assign(this, params);
    }
    return CertificationRequestInfo;
}());
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], CertificationRequestInfo.prototype, "version", void 0);
__decorate([
    AsnProp({ type: Name })
], CertificationRequestInfo.prototype, "subject", void 0);
__decorate([
    AsnProp({ type: SubjectPublicKeyInfo })
], CertificationRequestInfo.prototype, "subjectPKInfo", void 0);
__decorate([
    AsnProp({ type: Attributes$1, implicit: true, context: 0 })
], CertificationRequestInfo.prototype, "attributes", void 0);
var CertificationRequest = /** @class */ (function () {
    function CertificationRequest(params) {
        if (params === void 0) { params = {}; }
        this.certificationRequestInfo = new CertificationRequestInfo();
        this.signatureAlgorithm = new AlgorithmIdentifier();
        this.signature = new ArrayBuffer(0);
        Object.assign(this, params);
    }
    return CertificationRequest;
}());
__decorate([
    AsnProp({ type: CertificationRequestInfo })
], CertificationRequest.prototype, "certificationRequestInfo", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], CertificationRequest.prototype, "signatureAlgorithm", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.BitString })
], CertificationRequest.prototype, "signature", void 0);
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
function downloadFromBuffer(value, mime, name, extension) {
    if (mime === void 0) { mime = 'application/octet-stream'; }
    var blob = new Blob([value], { type: mime });
    if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
        navigator.msSaveBlob(blob, name + "." + extension);
        return new Promise(function (res) { return setTimeout(res, 100); });
    }
    var blobURL = window.URL.createObjectURL(blob);
    var link = document.createElement('a');
    var frame = document.createElement('iframe');
    link.style.display = 'none';
    frame.style.display = 'none';
    frame.name = blobURL;
    document.body.appendChild(frame);
    link.href = blobURL;
    link.target = blobURL;
    link.download = name + "." + extension;
    document.body.appendChild(link);
    link.dispatchEvent(new MouseEvent('click'));
    document.body.removeChild(link);
    return new Promise(function (res) { return setTimeout(function () {
        document.body.removeChild(frame);
        res(undefined);
    }, 100); });
}
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Download = /** @class */ (function () {
    function Download() {
    }
    return Download;
}());
Download.certificate = {
    asPEM: function (pem, name) {
        downloadFromBuffer(index.Convert.FromString(pem), 'application/pkix-cert', name, 'cer');
    },
    asDER: function (hex, name) {
        downloadFromBuffer(index.Convert.FromString(hex), 'application/pkix-cert', name, 'cer');
    },
};
Download.certificateRequest = {
    asPEM: function (pem, name) {
        downloadFromBuffer(index.Convert.FromString(pem), 'application/pkcs10', name, 'csr');
    },
    asDER: function (hex, name) {
        downloadFromBuffer(index.Convert.FromString(hex), 'application/pkcs10', name, 'csr');
    },
};
export { AuthorityInfoAccessSyntax as $, AsnData as A, CertificationRequest as B, ChallengePassword as C, DomainNameTechnicalOperator as D, ExtensionRequest as E, id_ecPublicKey as F, ECParameters as G, id_rsaEncryption as H, InsuranceValue as I, Name as J, OtherName as K, DisplayText as L, EDIPartyName as M, Name$1 as N, OIDs as O, UserNotice as P, KeyUsage as Q, RSAPublicKey as R, BasicConstraints as S, TypeRelationship as T, UnstructuredName as U, ValuationRanking as V, WebGDPR as W, ExtendedKeyUsage as X, SubjectKeyIdentifier as Y, AuthorityKeyIdentifier as Z, CRLDistributionPoints as _, Attribute as a, SubjectAlternativeName as a0, CertificatePolicies as a1, CertificateTransparency as a2, NameConstraints as a3, CertificateTemplate as a4, EnrollCertTypeChoice as a5, CaVersion as a6, QCStatements as a7, NetscapeComment as a8, NetscapeCertType as a9, LeiRoles as aa, LeiChoice as ab, Timestamp as ac, ArchiveRevInfo as ad, CRLReason as ae, SubjectDirectoryAttributes as af, PrivateKeyUsagePeriod as ag, EntrustVersionInfo as ah, BiometricSyntax as ai, Download as aj, isPem as ak, isX509Pem as al, isPkcs10Pem as am, isX509AttributePem as an, X509Certificate as ao, id_pkcs9_at_extensionRequest as b, AsnParser as c, Extension$1 as d, AsnConvert as e, id_pkcs9_at_unstructuredName as f, id_pkcs9_at_challengePassword as g, id_ValuationRanking as h, index as i, id_InsuranceValue as j, id_WebGDPR as k, id_ActivityDescription as l, ActivityDescription as m, id_TypeRelationship as n, id_DomainNameTechnicalOperator as o, id_DomainNameOwner as p, DomainNameOwner as q, id_DomainNameLegalRepresentative as r, DomainNameLegalRepresentative as s, id_DomainNameBeneficiary as t, DomainNameBeneficiary as u, certificateRawToBuffer as v, AttributeCertificate as w, getCertificateThumbprint as x, hexFormat as y, base64Format as z };
