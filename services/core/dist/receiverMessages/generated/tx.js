"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRemoveRemoteTokenMessenger = exports.MsgAddRemoteTokenMessengerResponse = exports.MsgAddRemoteTokenMessenger = exports.MsgUnlinkTokenPairResponse = exports.MsgUnlinkTokenPair = exports.MsgLinkTokenPairResponse = exports.MsgLinkTokenPair = exports.MsgUpdateSignatureThresholdResponse = exports.MsgUpdateSignatureThreshold = exports.MsgReplaceMessageResponse = exports.MsgReplaceMessage = exports.MsgSendMessageWithCallerResponse = exports.MsgSendMessageWithCaller = exports.MsgSendMessageResponse = exports.MsgSendMessage = exports.MsgReceiveMessageResponse = exports.MsgReceiveMessage = exports.MsgReplaceDepositForBurnResponse = exports.MsgReplaceDepositForBurn = exports.MsgDepositForBurnWithCallerResponse = exports.MsgDepositForBurnWithCaller = exports.MsgDepositForBurnResponse = exports.MsgDepositForBurn = exports.MsgSetMaxBurnAmountPerMessageResponse = exports.MsgSetMaxBurnAmountPerMessage = exports.MsgUpdateMaxMessageBodySizeResponse = exports.MsgUpdateMaxMessageBodySize = exports.MsgUnpauseSendingAndReceivingMessagesResponse = exports.MsgUnpauseSendingAndReceivingMessages = exports.MsgPauseSendingAndReceivingMessagesResponse = exports.MsgPauseSendingAndReceivingMessages = exports.MsgUnpauseBurningAndMintingResponse = exports.MsgUnpauseBurningAndMinting = exports.MsgPauseBurningAndMintingResponse = exports.MsgPauseBurningAndMinting = exports.MsgDisableAttesterResponse = exports.MsgDisableAttester = exports.MsgEnableAttesterResponse = exports.MsgEnableAttester = exports.MsgAcceptOwnerResponse = exports.MsgAcceptOwner = exports.MsgUpdatePauserResponse = exports.MsgUpdatePauser = exports.MsgUpdateTokenControllerResponse = exports.MsgUpdateTokenController = exports.MsgUpdateAttesterManagerResponse = exports.MsgUpdateAttesterManager = exports.MsgUpdateOwnerResponse = exports.MsgUpdateOwner = exports.protobufPackage = void 0;
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgRemoveRemoteTokenMessengerResponse = void 0;
const tslib_1 = require("tslib");
/* eslint-disable */
const long_1 = tslib_1.__importDefault(require("long"));
const minimal_1 = tslib_1.__importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "circle.cctp.v1";
function createBaseMsgUpdateOwner() {
    return { from: "", newOwner: "" };
}
exports.MsgUpdateOwner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newOwner !== "") {
            writer.uint32(18).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newOwner = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newOwner: isSet(object.newOwner) ? globalThis.String(object.newOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newOwner !== "") {
            obj.newOwner = message.newOwner;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateOwner.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateOwner();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.newOwner = (_b = object.newOwner) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateOwnerResponse() {
    return {};
}
exports.MsgUpdateOwnerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateOwnerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateOwnerResponse();
        return message;
    },
};
function createBaseMsgUpdateAttesterManager() {
    return { from: "", newAttesterManager: "" };
}
exports.MsgUpdateAttesterManager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newAttesterManager !== "") {
            writer.uint32(18).string(message.newAttesterManager);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAttesterManager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newAttesterManager = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newAttesterManager: isSet(object.newAttesterManager) ? globalThis.String(object.newAttesterManager) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newAttesterManager !== "") {
            obj.newAttesterManager = message.newAttesterManager;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateAttesterManager.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateAttesterManager();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.newAttesterManager = (_b = object.newAttesterManager) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateAttesterManagerResponse() {
    return {};
}
exports.MsgUpdateAttesterManagerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAttesterManagerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateAttesterManagerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateAttesterManagerResponse();
        return message;
    },
};
function createBaseMsgUpdateTokenController() {
    return { from: "", newTokenController: "" };
}
exports.MsgUpdateTokenController = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newTokenController !== "") {
            writer.uint32(18).string(message.newTokenController);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateTokenController();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newTokenController = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newTokenController: isSet(object.newTokenController) ? globalThis.String(object.newTokenController) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newTokenController !== "") {
            obj.newTokenController = message.newTokenController;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateTokenController.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateTokenController();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.newTokenController = (_b = object.newTokenController) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateTokenControllerResponse() {
    return {};
}
exports.MsgUpdateTokenControllerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateTokenControllerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateTokenControllerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateTokenControllerResponse();
        return message;
    },
};
function createBaseMsgUpdatePauser() {
    return { from: "", newPauser: "" };
}
exports.MsgUpdatePauser = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newPauser !== "") {
            writer.uint32(18).string(message.newPauser);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePauser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newPauser = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newPauser: isSet(object.newPauser) ? globalThis.String(object.newPauser) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newPauser !== "") {
            obj.newPauser = message.newPauser;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdatePauser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdatePauser();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.newPauser = (_b = object.newPauser) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdatePauserResponse() {
    return {};
}
exports.MsgUpdatePauserResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePauserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdatePauserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdatePauserResponse();
        return message;
    },
};
function createBaseMsgAcceptOwner() {
    return { from: "" };
}
exports.MsgAcceptOwner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { from: isSet(object.from) ? globalThis.String(object.from) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create(base) {
        return exports.MsgAcceptOwner.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgAcceptOwner();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgAcceptOwnerResponse() {
    return {};
}
exports.MsgAcceptOwnerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgAcceptOwnerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgAcceptOwnerResponse();
        return message;
    },
};
function createBaseMsgEnableAttester() {
    return { from: "", attester: "" };
}
exports.MsgEnableAttester = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.attester !== "") {
            writer.uint32(18).string(message.attester);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEnableAttester();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.attester = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            attester: isSet(object.attester) ? globalThis.String(object.attester) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.attester !== "") {
            obj.attester = message.attester;
        }
        return obj;
    },
    create(base) {
        return exports.MsgEnableAttester.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgEnableAttester();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.attester = (_b = object.attester) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgEnableAttesterResponse() {
    return {};
}
exports.MsgEnableAttesterResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEnableAttesterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgEnableAttesterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgEnableAttesterResponse();
        return message;
    },
};
function createBaseMsgDisableAttester() {
    return { from: "", attester: "" };
}
exports.MsgDisableAttester = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.attester !== "") {
            writer.uint32(18).string(message.attester);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDisableAttester();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.attester = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            attester: isSet(object.attester) ? globalThis.String(object.attester) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.attester !== "") {
            obj.attester = message.attester;
        }
        return obj;
    },
    create(base) {
        return exports.MsgDisableAttester.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDisableAttester();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.attester = (_b = object.attester) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgDisableAttesterResponse() {
    return {};
}
exports.MsgDisableAttesterResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDisableAttesterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgDisableAttesterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDisableAttesterResponse();
        return message;
    },
};
function createBaseMsgPauseBurningAndMinting() {
    return { from: "" };
}
exports.MsgPauseBurningAndMinting = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseBurningAndMinting();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { from: isSet(object.from) ? globalThis.String(object.from) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create(base) {
        return exports.MsgPauseBurningAndMinting.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgPauseBurningAndMinting();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgPauseBurningAndMintingResponse() {
    return {};
}
exports.MsgPauseBurningAndMintingResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseBurningAndMintingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgPauseBurningAndMintingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgPauseBurningAndMintingResponse();
        return message;
    },
};
function createBaseMsgUnpauseBurningAndMinting() {
    return { from: "" };
}
exports.MsgUnpauseBurningAndMinting = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseBurningAndMinting();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { from: isSet(object.from) ? globalThis.String(object.from) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUnpauseBurningAndMinting.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUnpauseBurningAndMinting();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUnpauseBurningAndMintingResponse() {
    return {};
}
exports.MsgUnpauseBurningAndMintingResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseBurningAndMintingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUnpauseBurningAndMintingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnpauseBurningAndMintingResponse();
        return message;
    },
};
function createBaseMsgPauseSendingAndReceivingMessages() {
    return { from: "" };
}
exports.MsgPauseSendingAndReceivingMessages = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseSendingAndReceivingMessages();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { from: isSet(object.from) ? globalThis.String(object.from) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create(base) {
        return exports.MsgPauseSendingAndReceivingMessages.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgPauseSendingAndReceivingMessages();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgPauseSendingAndReceivingMessagesResponse() {
    return {};
}
exports.MsgPauseSendingAndReceivingMessagesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseSendingAndReceivingMessagesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgPauseSendingAndReceivingMessagesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgPauseSendingAndReceivingMessagesResponse();
        return message;
    },
};
function createBaseMsgUnpauseSendingAndReceivingMessages() {
    return { from: "" };
}
exports.MsgUnpauseSendingAndReceivingMessages = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseSendingAndReceivingMessages();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { from: isSet(object.from) ? globalThis.String(object.from) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUnpauseSendingAndReceivingMessages.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUnpauseSendingAndReceivingMessages();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUnpauseSendingAndReceivingMessagesResponse() {
    return {};
}
exports.MsgUnpauseSendingAndReceivingMessagesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseSendingAndReceivingMessagesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUnpauseSendingAndReceivingMessagesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnpauseSendingAndReceivingMessagesResponse();
        return message;
    },
};
function createBaseMsgUpdateMaxMessageBodySize() {
    return { from: "", messageSize: long_1.default.UZERO };
}
exports.MsgUpdateMaxMessageBodySize = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.messageSize.isZero()) {
            writer.uint32(16).uint64(message.messageSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMaxMessageBodySize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.messageSize = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            messageSize: isSet(object.messageSize) ? long_1.default.fromValue(object.messageSize) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (!message.messageSize.isZero()) {
            obj.messageSize = (message.messageSize || long_1.default.UZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateMaxMessageBodySize.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateMaxMessageBodySize();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.messageSize = (object.messageSize !== undefined && object.messageSize !== null)
            ? long_1.default.fromValue(object.messageSize)
            : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgUpdateMaxMessageBodySizeResponse() {
    return {};
}
exports.MsgUpdateMaxMessageBodySizeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMaxMessageBodySizeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateMaxMessageBodySizeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateMaxMessageBodySizeResponse();
        return message;
    },
};
function createBaseMsgSetMaxBurnAmountPerMessage() {
    return { from: "", localToken: "", amount: "" };
}
exports.MsgSetMaxBurnAmountPerMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.localToken !== "") {
            writer.uint32(18).string(message.localToken);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxBurnAmountPerMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.localToken = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : "",
            amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.localToken !== "") {
            obj.localToken = message.localToken;
        }
        if (message.amount !== "") {
            obj.amount = message.amount;
        }
        return obj;
    },
    create(base) {
        return exports.MsgSetMaxBurnAmountPerMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSetMaxBurnAmountPerMessage();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.localToken = (_b = object.localToken) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgSetMaxBurnAmountPerMessageResponse() {
    return {};
}
exports.MsgSetMaxBurnAmountPerMessageResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxBurnAmountPerMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgSetMaxBurnAmountPerMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgSetMaxBurnAmountPerMessageResponse();
        return message;
    },
};
function createBaseMsgDepositForBurn() {
    return { from: "", amount: "", destinationDomain: 0, mintRecipient: new Uint8Array(0), burnToken: "" };
}
exports.MsgDepositForBurn = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.destinationDomain !== 0) {
            writer.uint32(24).uint32(message.destinationDomain);
        }
        if (message.mintRecipient.length !== 0) {
            writer.uint32(34).bytes(message.mintRecipient);
        }
        if (message.burnToken !== "") {
            writer.uint32(42).string(message.burnToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.destinationDomain = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.mintRecipient = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.burnToken = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            mintRecipient: isSet(object.mintRecipient) ? bytesFromBase64(object.mintRecipient) : new Uint8Array(0),
            burnToken: isSet(object.burnToken) ? globalThis.String(object.burnToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.amount !== "") {
            obj.amount = message.amount;
        }
        if (message.destinationDomain !== 0) {
            obj.destinationDomain = Math.round(message.destinationDomain);
        }
        if (message.mintRecipient.length !== 0) {
            obj.mintRecipient = base64FromBytes(message.mintRecipient);
        }
        if (message.burnToken !== "") {
            obj.burnToken = message.burnToken;
        }
        return obj;
    },
    create(base) {
        return exports.MsgDepositForBurn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgDepositForBurn();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.destinationDomain = (_c = object.destinationDomain) !== null && _c !== void 0 ? _c : 0;
        message.mintRecipient = (_d = object.mintRecipient) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        message.burnToken = (_e = object.burnToken) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgDepositForBurnResponse() {
    return { nonce: long_1.default.UZERO };
}
exports.MsgDepositForBurnResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurnResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { nonce: isSet(object.nonce) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO };
    },
    toJSON(message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || long_1.default.UZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.MsgDepositForBurnResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgDepositForBurnResponse();
        message.nonce = (object.nonce !== undefined && object.nonce !== null) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgDepositForBurnWithCaller() {
    return {
        from: "",
        amount: "",
        destinationDomain: 0,
        mintRecipient: new Uint8Array(0),
        burnToken: "",
        destinationCaller: new Uint8Array(0),
    };
}
exports.MsgDepositForBurnWithCaller = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.destinationDomain !== 0) {
            writer.uint32(24).uint32(message.destinationDomain);
        }
        if (message.mintRecipient.length !== 0) {
            writer.uint32(34).bytes(message.mintRecipient);
        }
        if (message.burnToken !== "") {
            writer.uint32(42).string(message.burnToken);
        }
        if (message.destinationCaller.length !== 0) {
            writer.uint32(50).bytes(message.destinationCaller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurnWithCaller();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.destinationDomain = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.mintRecipient = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.burnToken = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.destinationCaller = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            mintRecipient: isSet(object.mintRecipient) ? bytesFromBase64(object.mintRecipient) : new Uint8Array(0),
            burnToken: isSet(object.burnToken) ? globalThis.String(object.burnToken) : "",
            destinationCaller: isSet(object.destinationCaller)
                ? bytesFromBase64(object.destinationCaller)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.amount !== "") {
            obj.amount = message.amount;
        }
        if (message.destinationDomain !== 0) {
            obj.destinationDomain = Math.round(message.destinationDomain);
        }
        if (message.mintRecipient.length !== 0) {
            obj.mintRecipient = base64FromBytes(message.mintRecipient);
        }
        if (message.burnToken !== "") {
            obj.burnToken = message.burnToken;
        }
        if (message.destinationCaller.length !== 0) {
            obj.destinationCaller = base64FromBytes(message.destinationCaller);
        }
        return obj;
    },
    create(base) {
        return exports.MsgDepositForBurnWithCaller.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgDepositForBurnWithCaller();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.destinationDomain = (_c = object.destinationDomain) !== null && _c !== void 0 ? _c : 0;
        message.mintRecipient = (_d = object.mintRecipient) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        message.burnToken = (_e = object.burnToken) !== null && _e !== void 0 ? _e : "";
        message.destinationCaller = (_f = object.destinationCaller) !== null && _f !== void 0 ? _f : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgDepositForBurnWithCallerResponse() {
    return { nonce: long_1.default.UZERO };
}
exports.MsgDepositForBurnWithCallerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurnWithCallerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { nonce: isSet(object.nonce) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO };
    },
    toJSON(message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || long_1.default.UZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.MsgDepositForBurnWithCallerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgDepositForBurnWithCallerResponse();
        message.nonce = (object.nonce !== undefined && object.nonce !== null) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgReplaceDepositForBurn() {
    return {
        from: "",
        originalMessage: new Uint8Array(0),
        originalAttestation: new Uint8Array(0),
        newDestinationCaller: new Uint8Array(0),
        newMintRecipient: new Uint8Array(0),
    };
}
exports.MsgReplaceDepositForBurn = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.originalMessage.length !== 0) {
            writer.uint32(18).bytes(message.originalMessage);
        }
        if (message.originalAttestation.length !== 0) {
            writer.uint32(26).bytes(message.originalAttestation);
        }
        if (message.newDestinationCaller.length !== 0) {
            writer.uint32(34).bytes(message.newDestinationCaller);
        }
        if (message.newMintRecipient.length !== 0) {
            writer.uint32(42).bytes(message.newMintRecipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceDepositForBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.originalMessage = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.originalAttestation = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newDestinationCaller = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newMintRecipient = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            originalMessage: isSet(object.originalMessage) ? bytesFromBase64(object.originalMessage) : new Uint8Array(0),
            originalAttestation: isSet(object.originalAttestation)
                ? bytesFromBase64(object.originalAttestation)
                : new Uint8Array(0),
            newDestinationCaller: isSet(object.newDestinationCaller)
                ? bytesFromBase64(object.newDestinationCaller)
                : new Uint8Array(0),
            newMintRecipient: isSet(object.newMintRecipient) ? bytesFromBase64(object.newMintRecipient) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.originalMessage.length !== 0) {
            obj.originalMessage = base64FromBytes(message.originalMessage);
        }
        if (message.originalAttestation.length !== 0) {
            obj.originalAttestation = base64FromBytes(message.originalAttestation);
        }
        if (message.newDestinationCaller.length !== 0) {
            obj.newDestinationCaller = base64FromBytes(message.newDestinationCaller);
        }
        if (message.newMintRecipient.length !== 0) {
            obj.newMintRecipient = base64FromBytes(message.newMintRecipient);
        }
        return obj;
    },
    create(base) {
        return exports.MsgReplaceDepositForBurn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgReplaceDepositForBurn();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.originalMessage = (_b = object.originalMessage) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.originalAttestation = (_c = object.originalAttestation) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.newDestinationCaller = (_d = object.newDestinationCaller) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        message.newMintRecipient = (_e = object.newMintRecipient) !== null && _e !== void 0 ? _e : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgReplaceDepositForBurnResponse() {
    return {};
}
exports.MsgReplaceDepositForBurnResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceDepositForBurnResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgReplaceDepositForBurnResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgReplaceDepositForBurnResponse();
        return message;
    },
};
function createBaseMsgReceiveMessage() {
    return { from: "", message: new Uint8Array(0), attestation: new Uint8Array(0) };
}
exports.MsgReceiveMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.message.length !== 0) {
            writer.uint32(18).bytes(message.message);
        }
        if (message.attestation.length !== 0) {
            writer.uint32(26).bytes(message.attestation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReceiveMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.attestation = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0),
            attestation: isSet(object.attestation) ? bytesFromBase64(object.attestation) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.message.length !== 0) {
            obj.message = base64FromBytes(message.message);
        }
        if (message.attestation.length !== 0) {
            obj.attestation = base64FromBytes(message.attestation);
        }
        return obj;
    },
    create(base) {
        return exports.MsgReceiveMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgReceiveMessage();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.attestation = (_c = object.attestation) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgReceiveMessageResponse() {
    return { success: false };
}
exports.MsgReceiveMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReceiveMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.success === true) {
            obj.success = message.success;
        }
        return obj;
    },
    create(base) {
        return exports.MsgReceiveMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgReceiveMessageResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseMsgSendMessage() {
    return { from: "", destinationDomain: 0, recipient: new Uint8Array(0), messageBody: new Uint8Array(0) };
}
exports.MsgSendMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.destinationDomain !== 0) {
            writer.uint32(16).uint32(message.destinationDomain);
        }
        if (message.recipient.length !== 0) {
            writer.uint32(26).bytes(message.recipient);
        }
        if (message.messageBody.length !== 0) {
            writer.uint32(34).bytes(message.messageBody);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.destinationDomain = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.recipient = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.messageBody = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(0),
            messageBody: isSet(object.messageBody) ? bytesFromBase64(object.messageBody) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.destinationDomain !== 0) {
            obj.destinationDomain = Math.round(message.destinationDomain);
        }
        if (message.recipient.length !== 0) {
            obj.recipient = base64FromBytes(message.recipient);
        }
        if (message.messageBody.length !== 0) {
            obj.messageBody = base64FromBytes(message.messageBody);
        }
        return obj;
    },
    create(base) {
        return exports.MsgSendMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgSendMessage();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.destinationDomain = (_b = object.destinationDomain) !== null && _b !== void 0 ? _b : 0;
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.messageBody = (_d = object.messageBody) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgSendMessageResponse() {
    return { nonce: long_1.default.UZERO };
}
exports.MsgSendMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { nonce: isSet(object.nonce) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO };
    },
    toJSON(message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || long_1.default.UZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.MsgSendMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgSendMessageResponse();
        message.nonce = (object.nonce !== undefined && object.nonce !== null) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgSendMessageWithCaller() {
    return {
        from: "",
        destinationDomain: 0,
        recipient: new Uint8Array(0),
        messageBody: new Uint8Array(0),
        destinationCaller: new Uint8Array(0),
    };
}
exports.MsgSendMessageWithCaller = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.destinationDomain !== 0) {
            writer.uint32(16).uint32(message.destinationDomain);
        }
        if (message.recipient.length !== 0) {
            writer.uint32(26).bytes(message.recipient);
        }
        if (message.messageBody.length !== 0) {
            writer.uint32(34).bytes(message.messageBody);
        }
        if (message.destinationCaller.length !== 0) {
            writer.uint32(42).bytes(message.destinationCaller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessageWithCaller();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.destinationDomain = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.recipient = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.messageBody = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.destinationCaller = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(0),
            messageBody: isSet(object.messageBody) ? bytesFromBase64(object.messageBody) : new Uint8Array(0),
            destinationCaller: isSet(object.destinationCaller)
                ? bytesFromBase64(object.destinationCaller)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.destinationDomain !== 0) {
            obj.destinationDomain = Math.round(message.destinationDomain);
        }
        if (message.recipient.length !== 0) {
            obj.recipient = base64FromBytes(message.recipient);
        }
        if (message.messageBody.length !== 0) {
            obj.messageBody = base64FromBytes(message.messageBody);
        }
        if (message.destinationCaller.length !== 0) {
            obj.destinationCaller = base64FromBytes(message.destinationCaller);
        }
        return obj;
    },
    create(base) {
        return exports.MsgSendMessageWithCaller.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgSendMessageWithCaller();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.destinationDomain = (_b = object.destinationDomain) !== null && _b !== void 0 ? _b : 0;
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.messageBody = (_d = object.messageBody) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        message.destinationCaller = (_e = object.destinationCaller) !== null && _e !== void 0 ? _e : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgSendMessageWithCallerResponse() {
    return { nonce: long_1.default.UZERO };
}
exports.MsgSendMessageWithCallerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessageWithCallerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { nonce: isSet(object.nonce) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO };
    },
    toJSON(message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || long_1.default.UZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.MsgSendMessageWithCallerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgSendMessageWithCallerResponse();
        message.nonce = (object.nonce !== undefined && object.nonce !== null) ? long_1.default.fromValue(object.nonce) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgReplaceMessage() {
    return {
        from: "",
        originalMessage: new Uint8Array(0),
        originalAttestation: new Uint8Array(0),
        newMessageBody: new Uint8Array(0),
        newDestinationCaller: new Uint8Array(0),
    };
}
exports.MsgReplaceMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.originalMessage.length !== 0) {
            writer.uint32(18).bytes(message.originalMessage);
        }
        if (message.originalAttestation.length !== 0) {
            writer.uint32(26).bytes(message.originalAttestation);
        }
        if (message.newMessageBody.length !== 0) {
            writer.uint32(34).bytes(message.newMessageBody);
        }
        if (message.newDestinationCaller.length !== 0) {
            writer.uint32(42).bytes(message.newDestinationCaller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.originalMessage = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.originalAttestation = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newMessageBody = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newDestinationCaller = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            originalMessage: isSet(object.originalMessage) ? bytesFromBase64(object.originalMessage) : new Uint8Array(0),
            originalAttestation: isSet(object.originalAttestation)
                ? bytesFromBase64(object.originalAttestation)
                : new Uint8Array(0),
            newMessageBody: isSet(object.newMessageBody) ? bytesFromBase64(object.newMessageBody) : new Uint8Array(0),
            newDestinationCaller: isSet(object.newDestinationCaller)
                ? bytesFromBase64(object.newDestinationCaller)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.originalMessage.length !== 0) {
            obj.originalMessage = base64FromBytes(message.originalMessage);
        }
        if (message.originalAttestation.length !== 0) {
            obj.originalAttestation = base64FromBytes(message.originalAttestation);
        }
        if (message.newMessageBody.length !== 0) {
            obj.newMessageBody = base64FromBytes(message.newMessageBody);
        }
        if (message.newDestinationCaller.length !== 0) {
            obj.newDestinationCaller = base64FromBytes(message.newDestinationCaller);
        }
        return obj;
    },
    create(base) {
        return exports.MsgReplaceMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgReplaceMessage();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.originalMessage = (_b = object.originalMessage) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.originalAttestation = (_c = object.originalAttestation) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.newMessageBody = (_d = object.newMessageBody) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        message.newDestinationCaller = (_e = object.newDestinationCaller) !== null && _e !== void 0 ? _e : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgReplaceMessageResponse() {
    return {};
}
exports.MsgReplaceMessageResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgReplaceMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgReplaceMessageResponse();
        return message;
    },
};
function createBaseMsgUpdateSignatureThreshold() {
    return { from: "", amount: 0 };
}
exports.MsgUpdateSignatureThreshold = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.amount !== 0) {
            writer.uint32(16).uint32(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSignatureThreshold();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.amount = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.amount !== 0) {
            obj.amount = Math.round(message.amount);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateSignatureThreshold.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateSignatureThreshold();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseMsgUpdateSignatureThresholdResponse() {
    return {};
}
exports.MsgUpdateSignatureThresholdResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSignatureThresholdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateSignatureThresholdResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateSignatureThresholdResponse();
        return message;
    },
};
function createBaseMsgLinkTokenPair() {
    return { from: "", remoteDomain: 0, remoteToken: new Uint8Array(0), localToken: "" };
}
exports.MsgLinkTokenPair = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.remoteDomain !== 0) {
            writer.uint32(16).uint32(message.remoteDomain);
        }
        if (message.remoteToken.length !== 0) {
            writer.uint32(26).bytes(message.remoteToken);
        }
        if (message.localToken !== "") {
            writer.uint32(34).string(message.localToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLinkTokenPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.remoteDomain = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.remoteToken = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.localToken = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
            remoteToken: isSet(object.remoteToken) ? bytesFromBase64(object.remoteToken) : new Uint8Array(0),
            localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.remoteDomain !== 0) {
            obj.remoteDomain = Math.round(message.remoteDomain);
        }
        if (message.remoteToken.length !== 0) {
            obj.remoteToken = base64FromBytes(message.remoteToken);
        }
        if (message.localToken !== "") {
            obj.localToken = message.localToken;
        }
        return obj;
    },
    create(base) {
        return exports.MsgLinkTokenPair.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgLinkTokenPair();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.remoteDomain = (_b = object.remoteDomain) !== null && _b !== void 0 ? _b : 0;
        message.remoteToken = (_c = object.remoteToken) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.localToken = (_d = object.localToken) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgLinkTokenPairResponse() {
    return {};
}
exports.MsgLinkTokenPairResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLinkTokenPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgLinkTokenPairResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgLinkTokenPairResponse();
        return message;
    },
};
function createBaseMsgUnlinkTokenPair() {
    return { from: "", remoteDomain: 0, remoteToken: new Uint8Array(0), localToken: "" };
}
exports.MsgUnlinkTokenPair = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.remoteDomain !== 0) {
            writer.uint32(16).uint32(message.remoteDomain);
        }
        if (message.remoteToken.length !== 0) {
            writer.uint32(26).bytes(message.remoteToken);
        }
        if (message.localToken !== "") {
            writer.uint32(34).string(message.localToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlinkTokenPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.remoteDomain = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.remoteToken = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.localToken = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
            remoteToken: isSet(object.remoteToken) ? bytesFromBase64(object.remoteToken) : new Uint8Array(0),
            localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.remoteDomain !== 0) {
            obj.remoteDomain = Math.round(message.remoteDomain);
        }
        if (message.remoteToken.length !== 0) {
            obj.remoteToken = base64FromBytes(message.remoteToken);
        }
        if (message.localToken !== "") {
            obj.localToken = message.localToken;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUnlinkTokenPair.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgUnlinkTokenPair();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.remoteDomain = (_b = object.remoteDomain) !== null && _b !== void 0 ? _b : 0;
        message.remoteToken = (_c = object.remoteToken) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.localToken = (_d = object.localToken) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgUnlinkTokenPairResponse() {
    return {};
}
exports.MsgUnlinkTokenPairResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlinkTokenPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUnlinkTokenPairResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnlinkTokenPairResponse();
        return message;
    },
};
function createBaseMsgAddRemoteTokenMessenger() {
    return { from: "", domainId: 0, address: new Uint8Array(0) };
}
exports.MsgAddRemoteTokenMessenger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.domainId !== 0) {
            writer.uint32(16).uint32(message.domainId);
        }
        if (message.address.length !== 0) {
            writer.uint32(26).bytes(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddRemoteTokenMessenger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.domainId = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.address = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            domainId: isSet(object.domainId) ? globalThis.Number(object.domainId) : 0,
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.domainId !== 0) {
            obj.domainId = Math.round(message.domainId);
        }
        if (message.address.length !== 0) {
            obj.address = base64FromBytes(message.address);
        }
        return obj;
    },
    create(base) {
        return exports.MsgAddRemoteTokenMessenger.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgAddRemoteTokenMessenger();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.domainId = (_b = object.domainId) !== null && _b !== void 0 ? _b : 0;
        message.address = (_c = object.address) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgAddRemoteTokenMessengerResponse() {
    return {};
}
exports.MsgAddRemoteTokenMessengerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddRemoteTokenMessengerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgAddRemoteTokenMessengerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgAddRemoteTokenMessengerResponse();
        return message;
    },
};
function createBaseMsgRemoveRemoteTokenMessenger() {
    return { from: "", domainId: 0 };
}
exports.MsgRemoveRemoteTokenMessenger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.domainId !== 0) {
            writer.uint32(16).uint32(message.domainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveRemoteTokenMessenger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.from = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.domainId = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            domainId: isSet(object.domainId) ? globalThis.Number(object.domainId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.domainId !== 0) {
            obj.domainId = Math.round(message.domainId);
        }
        return obj;
    },
    create(base) {
        return exports.MsgRemoveRemoteTokenMessenger.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRemoveRemoteTokenMessenger();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.domainId = (_b = object.domainId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseMsgRemoveRemoteTokenMessengerResponse() {
    return {};
}
exports.MsgRemoveRemoteTokenMessengerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveRemoteTokenMessengerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgRemoveRemoteTokenMessengerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveRemoteTokenMessengerResponse();
        return message;
    },
};
exports.MsgServiceName = "circle.cctp.v1.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.AcceptOwner = this.AcceptOwner.bind(this);
        this.AddRemoteTokenMessenger = this.AddRemoteTokenMessenger.bind(this);
        this.DepositForBurn = this.DepositForBurn.bind(this);
        this.DepositForBurnWithCaller = this.DepositForBurnWithCaller.bind(this);
        this.DisableAttester = this.DisableAttester.bind(this);
        this.EnableAttester = this.EnableAttester.bind(this);
        this.LinkTokenPair = this.LinkTokenPair.bind(this);
        this.PauseBurningAndMinting = this.PauseBurningAndMinting.bind(this);
        this.PauseSendingAndReceivingMessages = this.PauseSendingAndReceivingMessages.bind(this);
        this.ReceiveMessage = this.ReceiveMessage.bind(this);
        this.RemoveRemoteTokenMessenger = this.RemoveRemoteTokenMessenger.bind(this);
        this.ReplaceDepositForBurn = this.ReplaceDepositForBurn.bind(this);
        this.ReplaceMessage = this.ReplaceMessage.bind(this);
        this.SendMessage = this.SendMessage.bind(this);
        this.SendMessageWithCaller = this.SendMessageWithCaller.bind(this);
        this.UnlinkTokenPair = this.UnlinkTokenPair.bind(this);
        this.UnpauseBurningAndMinting = this.UnpauseBurningAndMinting.bind(this);
        this.UnpauseSendingAndReceivingMessages = this.UnpauseSendingAndReceivingMessages.bind(this);
        this.UpdateOwner = this.UpdateOwner.bind(this);
        this.UpdateAttesterManager = this.UpdateAttesterManager.bind(this);
        this.UpdateTokenController = this.UpdateTokenController.bind(this);
        this.UpdatePauser = this.UpdatePauser.bind(this);
        this.UpdateMaxMessageBodySize = this.UpdateMaxMessageBodySize.bind(this);
        this.SetMaxBurnAmountPerMessage = this.SetMaxBurnAmountPerMessage.bind(this);
        this.UpdateSignatureThreshold = this.UpdateSignatureThreshold.bind(this);
    }
    AcceptOwner(request) {
        const data = exports.MsgAcceptOwner.encode(request).finish();
        const promise = this.rpc.request(this.service, "AcceptOwner", data);
        return promise.then((data) => exports.MsgAcceptOwnerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AddRemoteTokenMessenger(request) {
        const data = exports.MsgAddRemoteTokenMessenger.encode(request).finish();
        const promise = this.rpc.request(this.service, "AddRemoteTokenMessenger", data);
        return promise.then((data) => exports.MsgAddRemoteTokenMessengerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DepositForBurn(request) {
        const data = exports.MsgDepositForBurn.encode(request).finish();
        const promise = this.rpc.request(this.service, "DepositForBurn", data);
        return promise.then((data) => exports.MsgDepositForBurnResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DepositForBurnWithCaller(request) {
        const data = exports.MsgDepositForBurnWithCaller.encode(request).finish();
        const promise = this.rpc.request(this.service, "DepositForBurnWithCaller", data);
        return promise.then((data) => exports.MsgDepositForBurnWithCallerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DisableAttester(request) {
        const data = exports.MsgDisableAttester.encode(request).finish();
        const promise = this.rpc.request(this.service, "DisableAttester", data);
        return promise.then((data) => exports.MsgDisableAttesterResponse.decode(minimal_1.default.Reader.create(data)));
    }
    EnableAttester(request) {
        const data = exports.MsgEnableAttester.encode(request).finish();
        const promise = this.rpc.request(this.service, "EnableAttester", data);
        return promise.then((data) => exports.MsgEnableAttesterResponse.decode(minimal_1.default.Reader.create(data)));
    }
    LinkTokenPair(request) {
        const data = exports.MsgLinkTokenPair.encode(request).finish();
        const promise = this.rpc.request(this.service, "LinkTokenPair", data);
        return promise.then((data) => exports.MsgLinkTokenPairResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PauseBurningAndMinting(request) {
        const data = exports.MsgPauseBurningAndMinting.encode(request).finish();
        const promise = this.rpc.request(this.service, "PauseBurningAndMinting", data);
        return promise.then((data) => exports.MsgPauseBurningAndMintingResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PauseSendingAndReceivingMessages(request) {
        const data = exports.MsgPauseSendingAndReceivingMessages.encode(request).finish();
        const promise = this.rpc.request(this.service, "PauseSendingAndReceivingMessages", data);
        return promise.then((data) => exports.MsgPauseSendingAndReceivingMessagesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ReceiveMessage(request) {
        const data = exports.MsgReceiveMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReceiveMessage", data);
        return promise.then((data) => exports.MsgReceiveMessageResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RemoveRemoteTokenMessenger(request) {
        const data = exports.MsgRemoveRemoteTokenMessenger.encode(request).finish();
        const promise = this.rpc.request(this.service, "RemoveRemoteTokenMessenger", data);
        return promise.then((data) => exports.MsgRemoveRemoteTokenMessengerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ReplaceDepositForBurn(request) {
        const data = exports.MsgReplaceDepositForBurn.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReplaceDepositForBurn", data);
        return promise.then((data) => exports.MsgReplaceDepositForBurnResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ReplaceMessage(request) {
        const data = exports.MsgReplaceMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReplaceMessage", data);
        return promise.then((data) => exports.MsgReplaceMessageResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SendMessage(request) {
        const data = exports.MsgSendMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendMessage", data);
        return promise.then((data) => exports.MsgSendMessageResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SendMessageWithCaller(request) {
        const data = exports.MsgSendMessageWithCaller.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendMessageWithCaller", data);
        return promise.then((data) => exports.MsgSendMessageWithCallerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UnlinkTokenPair(request) {
        const data = exports.MsgUnlinkTokenPair.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnlinkTokenPair", data);
        return promise.then((data) => exports.MsgUnlinkTokenPairResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UnpauseBurningAndMinting(request) {
        const data = exports.MsgUnpauseBurningAndMinting.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnpauseBurningAndMinting", data);
        return promise.then((data) => exports.MsgUnpauseBurningAndMintingResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UnpauseSendingAndReceivingMessages(request) {
        const data = exports.MsgUnpauseSendingAndReceivingMessages.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnpauseSendingAndReceivingMessages", data);
        return promise.then((data) => exports.MsgUnpauseSendingAndReceivingMessagesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateOwner(request) {
        const data = exports.MsgUpdateOwner.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateOwner", data);
        return promise.then((data) => exports.MsgUpdateOwnerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateAttesterManager(request) {
        const data = exports.MsgUpdateAttesterManager.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateAttesterManager", data);
        return promise.then((data) => exports.MsgUpdateAttesterManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateTokenController(request) {
        const data = exports.MsgUpdateTokenController.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateTokenController", data);
        return promise.then((data) => exports.MsgUpdateTokenControllerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdatePauser(request) {
        const data = exports.MsgUpdatePauser.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdatePauser", data);
        return promise.then((data) => exports.MsgUpdatePauserResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateMaxMessageBodySize(request) {
        const data = exports.MsgUpdateMaxMessageBodySize.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateMaxMessageBodySize", data);
        return promise.then((data) => exports.MsgUpdateMaxMessageBodySizeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SetMaxBurnAmountPerMessage(request) {
        const data = exports.MsgSetMaxBurnAmountPerMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetMaxBurnAmountPerMessage", data);
        return promise.then((data) => exports.MsgSetMaxBurnAmountPerMessageResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateSignatureThreshold(request) {
        const data = exports.MsgUpdateSignatureThreshold.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateSignatureThreshold", data);
        return promise.then((data) => exports.MsgUpdateSignatureThresholdResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map