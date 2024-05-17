"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MsgAcceptOwner: function() {
        return MsgAcceptOwner;
    },
    MsgAcceptOwnerResponse: function() {
        return MsgAcceptOwnerResponse;
    },
    MsgAddRemoteTokenMessenger: function() {
        return MsgAddRemoteTokenMessenger;
    },
    MsgAddRemoteTokenMessengerResponse: function() {
        return MsgAddRemoteTokenMessengerResponse;
    },
    MsgClientImpl: function() {
        return MsgClientImpl;
    },
    MsgDepositForBurn: function() {
        return MsgDepositForBurn;
    },
    MsgDepositForBurnResponse: function() {
        return MsgDepositForBurnResponse;
    },
    MsgDepositForBurnWithCaller: function() {
        return MsgDepositForBurnWithCaller;
    },
    MsgDepositForBurnWithCallerResponse: function() {
        return MsgDepositForBurnWithCallerResponse;
    },
    MsgDisableAttester: function() {
        return MsgDisableAttester;
    },
    MsgDisableAttesterResponse: function() {
        return MsgDisableAttesterResponse;
    },
    MsgEnableAttester: function() {
        return MsgEnableAttester;
    },
    MsgEnableAttesterResponse: function() {
        return MsgEnableAttesterResponse;
    },
    MsgLinkTokenPair: function() {
        return MsgLinkTokenPair;
    },
    MsgLinkTokenPairResponse: function() {
        return MsgLinkTokenPairResponse;
    },
    MsgPauseBurningAndMinting: function() {
        return MsgPauseBurningAndMinting;
    },
    MsgPauseBurningAndMintingResponse: function() {
        return MsgPauseBurningAndMintingResponse;
    },
    MsgPauseSendingAndReceivingMessages: function() {
        return MsgPauseSendingAndReceivingMessages;
    },
    MsgPauseSendingAndReceivingMessagesResponse: function() {
        return MsgPauseSendingAndReceivingMessagesResponse;
    },
    MsgReceiveMessage: function() {
        return MsgReceiveMessage;
    },
    MsgReceiveMessageResponse: function() {
        return MsgReceiveMessageResponse;
    },
    MsgRemoveRemoteTokenMessenger: function() {
        return MsgRemoveRemoteTokenMessenger;
    },
    MsgRemoveRemoteTokenMessengerResponse: function() {
        return MsgRemoveRemoteTokenMessengerResponse;
    },
    MsgReplaceDepositForBurn: function() {
        return MsgReplaceDepositForBurn;
    },
    MsgReplaceDepositForBurnResponse: function() {
        return MsgReplaceDepositForBurnResponse;
    },
    MsgReplaceMessage: function() {
        return MsgReplaceMessage;
    },
    MsgReplaceMessageResponse: function() {
        return MsgReplaceMessageResponse;
    },
    MsgSendMessage: function() {
        return MsgSendMessage;
    },
    MsgSendMessageResponse: function() {
        return MsgSendMessageResponse;
    },
    MsgSendMessageWithCaller: function() {
        return MsgSendMessageWithCaller;
    },
    MsgSendMessageWithCallerResponse: function() {
        return MsgSendMessageWithCallerResponse;
    },
    MsgServiceName: function() {
        return MsgServiceName;
    },
    MsgSetMaxBurnAmountPerMessage: function() {
        return MsgSetMaxBurnAmountPerMessage;
    },
    MsgSetMaxBurnAmountPerMessageResponse: function() {
        return MsgSetMaxBurnAmountPerMessageResponse;
    },
    MsgUnlinkTokenPair: function() {
        return MsgUnlinkTokenPair;
    },
    MsgUnlinkTokenPairResponse: function() {
        return MsgUnlinkTokenPairResponse;
    },
    MsgUnpauseBurningAndMinting: function() {
        return MsgUnpauseBurningAndMinting;
    },
    MsgUnpauseBurningAndMintingResponse: function() {
        return MsgUnpauseBurningAndMintingResponse;
    },
    MsgUnpauseSendingAndReceivingMessages: function() {
        return MsgUnpauseSendingAndReceivingMessages;
    },
    MsgUnpauseSendingAndReceivingMessagesResponse: function() {
        return MsgUnpauseSendingAndReceivingMessagesResponse;
    },
    MsgUpdateAttesterManager: function() {
        return MsgUpdateAttesterManager;
    },
    MsgUpdateAttesterManagerResponse: function() {
        return MsgUpdateAttesterManagerResponse;
    },
    MsgUpdateMaxMessageBodySize: function() {
        return MsgUpdateMaxMessageBodySize;
    },
    MsgUpdateMaxMessageBodySizeResponse: function() {
        return MsgUpdateMaxMessageBodySizeResponse;
    },
    MsgUpdateOwner: function() {
        return MsgUpdateOwner;
    },
    MsgUpdateOwnerResponse: function() {
        return MsgUpdateOwnerResponse;
    },
    MsgUpdatePauser: function() {
        return MsgUpdatePauser;
    },
    MsgUpdatePauserResponse: function() {
        return MsgUpdatePauserResponse;
    },
    MsgUpdateSignatureThreshold: function() {
        return MsgUpdateSignatureThreshold;
    },
    MsgUpdateSignatureThresholdResponse: function() {
        return MsgUpdateSignatureThresholdResponse;
    },
    MsgUpdateTokenController: function() {
        return MsgUpdateTokenController;
    },
    MsgUpdateTokenControllerResponse: function() {
        return MsgUpdateTokenControllerResponse;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _long = _interop_require_default(require("long"));
const _minimal = _interop_require_default(require("protobufjs/minimal"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const protobufPackage = "circle.cctp.v1";
function createBaseMsgUpdateOwner() {
    return {
        from: "",
        newOwner: ""
    };
}
const MsgUpdateOwner = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newOwner !== "") {
            writer.uint32(18).string(message.newOwner);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOwner();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newOwner: isSet(object.newOwner) ? globalThis.String(object.newOwner) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newOwner !== "") {
            obj.newOwner = message.newOwner;
        }
        return obj;
    },
    create (base) {
        return MsgUpdateOwner.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUpdateOwner();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_newOwner;
        message.newOwner = (_object_newOwner = object.newOwner) !== null && _object_newOwner !== void 0 ? _object_newOwner : "";
        return message;
    }
};
function createBaseMsgUpdateOwnerResponse() {
    return {};
}
const MsgUpdateOwnerResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOwnerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUpdateOwnerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUpdateOwnerResponse();
        return message;
    }
};
function createBaseMsgUpdateAttesterManager() {
    return {
        from: "",
        newAttesterManager: ""
    };
}
const MsgUpdateAttesterManager = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newAttesterManager !== "") {
            writer.uint32(18).string(message.newAttesterManager);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAttesterManager();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newAttesterManager: isSet(object.newAttesterManager) ? globalThis.String(object.newAttesterManager) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newAttesterManager !== "") {
            obj.newAttesterManager = message.newAttesterManager;
        }
        return obj;
    },
    create (base) {
        return MsgUpdateAttesterManager.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUpdateAttesterManager();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_newAttesterManager;
        message.newAttesterManager = (_object_newAttesterManager = object.newAttesterManager) !== null && _object_newAttesterManager !== void 0 ? _object_newAttesterManager : "";
        return message;
    }
};
function createBaseMsgUpdateAttesterManagerResponse() {
    return {};
}
const MsgUpdateAttesterManagerResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAttesterManagerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUpdateAttesterManagerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUpdateAttesterManagerResponse();
        return message;
    }
};
function createBaseMsgUpdateTokenController() {
    return {
        from: "",
        newTokenController: ""
    };
}
const MsgUpdateTokenController = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newTokenController !== "") {
            writer.uint32(18).string(message.newTokenController);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateTokenController();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newTokenController: isSet(object.newTokenController) ? globalThis.String(object.newTokenController) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newTokenController !== "") {
            obj.newTokenController = message.newTokenController;
        }
        return obj;
    },
    create (base) {
        return MsgUpdateTokenController.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUpdateTokenController();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_newTokenController;
        message.newTokenController = (_object_newTokenController = object.newTokenController) !== null && _object_newTokenController !== void 0 ? _object_newTokenController : "";
        return message;
    }
};
function createBaseMsgUpdateTokenControllerResponse() {
    return {};
}
const MsgUpdateTokenControllerResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateTokenControllerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUpdateTokenControllerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUpdateTokenControllerResponse();
        return message;
    }
};
function createBaseMsgUpdatePauser() {
    return {
        from: "",
        newPauser: ""
    };
}
const MsgUpdatePauser = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.newPauser !== "") {
            writer.uint32(18).string(message.newPauser);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePauser();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            newPauser: isSet(object.newPauser) ? globalThis.String(object.newPauser) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.newPauser !== "") {
            obj.newPauser = message.newPauser;
        }
        return obj;
    },
    create (base) {
        return MsgUpdatePauser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUpdatePauser();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_newPauser;
        message.newPauser = (_object_newPauser = object.newPauser) !== null && _object_newPauser !== void 0 ? _object_newPauser : "";
        return message;
    }
};
function createBaseMsgUpdatePauserResponse() {
    return {};
}
const MsgUpdatePauserResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePauserResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUpdatePauserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUpdatePauserResponse();
        return message;
    }
};
function createBaseMsgAcceptOwner() {
    return {
        from: ""
    };
}
const MsgAcceptOwner = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptOwner();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create (base) {
        return MsgAcceptOwner.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgAcceptOwner();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        return message;
    }
};
function createBaseMsgAcceptOwnerResponse() {
    return {};
}
const MsgAcceptOwnerResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptOwnerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgAcceptOwnerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgAcceptOwnerResponse();
        return message;
    }
};
function createBaseMsgEnableAttester() {
    return {
        from: "",
        attester: ""
    };
}
const MsgEnableAttester = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.attester !== "") {
            writer.uint32(18).string(message.attester);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEnableAttester();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            attester: isSet(object.attester) ? globalThis.String(object.attester) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.attester !== "") {
            obj.attester = message.attester;
        }
        return obj;
    },
    create (base) {
        return MsgEnableAttester.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgEnableAttester();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_attester;
        message.attester = (_object_attester = object.attester) !== null && _object_attester !== void 0 ? _object_attester : "";
        return message;
    }
};
function createBaseMsgEnableAttesterResponse() {
    return {};
}
const MsgEnableAttesterResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEnableAttesterResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgEnableAttesterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgEnableAttesterResponse();
        return message;
    }
};
function createBaseMsgDisableAttester() {
    return {
        from: "",
        attester: ""
    };
}
const MsgDisableAttester = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.attester !== "") {
            writer.uint32(18).string(message.attester);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDisableAttester();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            attester: isSet(object.attester) ? globalThis.String(object.attester) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.attester !== "") {
            obj.attester = message.attester;
        }
        return obj;
    },
    create (base) {
        return MsgDisableAttester.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgDisableAttester();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_attester;
        message.attester = (_object_attester = object.attester) !== null && _object_attester !== void 0 ? _object_attester : "";
        return message;
    }
};
function createBaseMsgDisableAttesterResponse() {
    return {};
}
const MsgDisableAttesterResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDisableAttesterResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgDisableAttesterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgDisableAttesterResponse();
        return message;
    }
};
function createBaseMsgPauseBurningAndMinting() {
    return {
        from: ""
    };
}
const MsgPauseBurningAndMinting = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseBurningAndMinting();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create (base) {
        return MsgPauseBurningAndMinting.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgPauseBurningAndMinting();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        return message;
    }
};
function createBaseMsgPauseBurningAndMintingResponse() {
    return {};
}
const MsgPauseBurningAndMintingResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseBurningAndMintingResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgPauseBurningAndMintingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgPauseBurningAndMintingResponse();
        return message;
    }
};
function createBaseMsgUnpauseBurningAndMinting() {
    return {
        from: ""
    };
}
const MsgUnpauseBurningAndMinting = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseBurningAndMinting();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create (base) {
        return MsgUnpauseBurningAndMinting.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUnpauseBurningAndMinting();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        return message;
    }
};
function createBaseMsgUnpauseBurningAndMintingResponse() {
    return {};
}
const MsgUnpauseBurningAndMintingResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseBurningAndMintingResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUnpauseBurningAndMintingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUnpauseBurningAndMintingResponse();
        return message;
    }
};
function createBaseMsgPauseSendingAndReceivingMessages() {
    return {
        from: ""
    };
}
const MsgPauseSendingAndReceivingMessages = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseSendingAndReceivingMessages();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create (base) {
        return MsgPauseSendingAndReceivingMessages.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgPauseSendingAndReceivingMessages();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        return message;
    }
};
function createBaseMsgPauseSendingAndReceivingMessagesResponse() {
    return {};
}
const MsgPauseSendingAndReceivingMessagesResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseSendingAndReceivingMessagesResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgPauseSendingAndReceivingMessagesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgPauseSendingAndReceivingMessagesResponse();
        return message;
    }
};
function createBaseMsgUnpauseSendingAndReceivingMessages() {
    return {
        from: ""
    };
}
const MsgUnpauseSendingAndReceivingMessages = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseSendingAndReceivingMessages();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        return obj;
    },
    create (base) {
        return MsgUnpauseSendingAndReceivingMessages.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUnpauseSendingAndReceivingMessages();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        return message;
    }
};
function createBaseMsgUnpauseSendingAndReceivingMessagesResponse() {
    return {};
}
const MsgUnpauseSendingAndReceivingMessagesResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnpauseSendingAndReceivingMessagesResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUnpauseSendingAndReceivingMessagesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUnpauseSendingAndReceivingMessagesResponse();
        return message;
    }
};
function createBaseMsgUpdateMaxMessageBodySize() {
    return {
        from: "",
        messageSize: _long.default.UZERO
    };
}
const MsgUpdateMaxMessageBodySize = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.messageSize.isZero()) {
            writer.uint32(16).uint64(message.messageSize);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMaxMessageBodySize();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            messageSize: isSet(object.messageSize) ? _long.default.fromValue(object.messageSize) : _long.default.UZERO
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (!message.messageSize.isZero()) {
            obj.messageSize = (message.messageSize || _long.default.UZERO).toString();
        }
        return obj;
    },
    create (base) {
        return MsgUpdateMaxMessageBodySize.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUpdateMaxMessageBodySize();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        message.messageSize = object.messageSize !== undefined && object.messageSize !== null ? _long.default.fromValue(object.messageSize) : _long.default.UZERO;
        return message;
    }
};
function createBaseMsgUpdateMaxMessageBodySizeResponse() {
    return {};
}
const MsgUpdateMaxMessageBodySizeResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMaxMessageBodySizeResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUpdateMaxMessageBodySizeResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUpdateMaxMessageBodySizeResponse();
        return message;
    }
};
function createBaseMsgSetMaxBurnAmountPerMessage() {
    return {
        from: "",
        localToken: "",
        amount: ""
    };
}
const MsgSetMaxBurnAmountPerMessage = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxBurnAmountPerMessage();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : "",
            amount: isSet(object.amount) ? globalThis.String(object.amount) : ""
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgSetMaxBurnAmountPerMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgSetMaxBurnAmountPerMessage();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_localToken;
        message.localToken = (_object_localToken = object.localToken) !== null && _object_localToken !== void 0 ? _object_localToken : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        return message;
    }
};
function createBaseMsgSetMaxBurnAmountPerMessageResponse() {
    return {};
}
const MsgSetMaxBurnAmountPerMessageResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxBurnAmountPerMessageResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgSetMaxBurnAmountPerMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgSetMaxBurnAmountPerMessageResponse();
        return message;
    }
};
function createBaseMsgDepositForBurn() {
    return {
        from: "",
        amount: "",
        destinationDomain: 0,
        mintRecipient: new Uint8Array(0),
        burnToken: ""
    };
}
const MsgDepositForBurn = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurn();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            mintRecipient: isSet(object.mintRecipient) ? bytesFromBase64(object.mintRecipient) : new Uint8Array(0),
            burnToken: isSet(object.burnToken) ? globalThis.String(object.burnToken) : ""
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgDepositForBurn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgDepositForBurn();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_destinationDomain;
        message.destinationDomain = (_object_destinationDomain = object.destinationDomain) !== null && _object_destinationDomain !== void 0 ? _object_destinationDomain : 0;
        var _object_mintRecipient;
        message.mintRecipient = (_object_mintRecipient = object.mintRecipient) !== null && _object_mintRecipient !== void 0 ? _object_mintRecipient : new Uint8Array(0);
        var _object_burnToken;
        message.burnToken = (_object_burnToken = object.burnToken) !== null && _object_burnToken !== void 0 ? _object_burnToken : "";
        return message;
    }
};
function createBaseMsgDepositForBurnResponse() {
    return {
        nonce: _long.default.UZERO
    };
}
const MsgDepositForBurnResponse = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurnResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            nonce: isSet(object.nonce) ? _long.default.fromValue(object.nonce) : _long.default.UZERO
        };
    },
    toJSON (message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || _long.default.UZERO).toString();
        }
        return obj;
    },
    create (base) {
        return MsgDepositForBurnResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgDepositForBurnResponse();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? _long.default.fromValue(object.nonce) : _long.default.UZERO;
        return message;
    }
};
function createBaseMsgDepositForBurnWithCaller() {
    return {
        from: "",
        amount: "",
        destinationDomain: 0,
        mintRecipient: new Uint8Array(0),
        burnToken: "",
        destinationCaller: new Uint8Array(0)
    };
}
const MsgDepositForBurnWithCaller = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurnWithCaller();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            mintRecipient: isSet(object.mintRecipient) ? bytesFromBase64(object.mintRecipient) : new Uint8Array(0),
            burnToken: isSet(object.burnToken) ? globalThis.String(object.burnToken) : "",
            destinationCaller: isSet(object.destinationCaller) ? bytesFromBase64(object.destinationCaller) : new Uint8Array(0)
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgDepositForBurnWithCaller.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgDepositForBurnWithCaller();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_destinationDomain;
        message.destinationDomain = (_object_destinationDomain = object.destinationDomain) !== null && _object_destinationDomain !== void 0 ? _object_destinationDomain : 0;
        var _object_mintRecipient;
        message.mintRecipient = (_object_mintRecipient = object.mintRecipient) !== null && _object_mintRecipient !== void 0 ? _object_mintRecipient : new Uint8Array(0);
        var _object_burnToken;
        message.burnToken = (_object_burnToken = object.burnToken) !== null && _object_burnToken !== void 0 ? _object_burnToken : "";
        var _object_destinationCaller;
        message.destinationCaller = (_object_destinationCaller = object.destinationCaller) !== null && _object_destinationCaller !== void 0 ? _object_destinationCaller : new Uint8Array(0);
        return message;
    }
};
function createBaseMsgDepositForBurnWithCallerResponse() {
    return {
        nonce: _long.default.UZERO
    };
}
const MsgDepositForBurnWithCallerResponse = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositForBurnWithCallerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            nonce: isSet(object.nonce) ? _long.default.fromValue(object.nonce) : _long.default.UZERO
        };
    },
    toJSON (message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || _long.default.UZERO).toString();
        }
        return obj;
    },
    create (base) {
        return MsgDepositForBurnWithCallerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgDepositForBurnWithCallerResponse();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? _long.default.fromValue(object.nonce) : _long.default.UZERO;
        return message;
    }
};
function createBaseMsgReplaceDepositForBurn() {
    return {
        from: "",
        originalMessage: new Uint8Array(0),
        originalAttestation: new Uint8Array(0),
        newDestinationCaller: new Uint8Array(0),
        newMintRecipient: new Uint8Array(0)
    };
}
const MsgReplaceDepositForBurn = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceDepositForBurn();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            originalMessage: isSet(object.originalMessage) ? bytesFromBase64(object.originalMessage) : new Uint8Array(0),
            originalAttestation: isSet(object.originalAttestation) ? bytesFromBase64(object.originalAttestation) : new Uint8Array(0),
            newDestinationCaller: isSet(object.newDestinationCaller) ? bytesFromBase64(object.newDestinationCaller) : new Uint8Array(0),
            newMintRecipient: isSet(object.newMintRecipient) ? bytesFromBase64(object.newMintRecipient) : new Uint8Array(0)
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgReplaceDepositForBurn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgReplaceDepositForBurn();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_originalMessage;
        message.originalMessage = (_object_originalMessage = object.originalMessage) !== null && _object_originalMessage !== void 0 ? _object_originalMessage : new Uint8Array(0);
        var _object_originalAttestation;
        message.originalAttestation = (_object_originalAttestation = object.originalAttestation) !== null && _object_originalAttestation !== void 0 ? _object_originalAttestation : new Uint8Array(0);
        var _object_newDestinationCaller;
        message.newDestinationCaller = (_object_newDestinationCaller = object.newDestinationCaller) !== null && _object_newDestinationCaller !== void 0 ? _object_newDestinationCaller : new Uint8Array(0);
        var _object_newMintRecipient;
        message.newMintRecipient = (_object_newMintRecipient = object.newMintRecipient) !== null && _object_newMintRecipient !== void 0 ? _object_newMintRecipient : new Uint8Array(0);
        return message;
    }
};
function createBaseMsgReplaceDepositForBurnResponse() {
    return {};
}
const MsgReplaceDepositForBurnResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceDepositForBurnResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgReplaceDepositForBurnResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgReplaceDepositForBurnResponse();
        return message;
    }
};
function createBaseMsgReceiveMessage() {
    return {
        from: "",
        message: new Uint8Array(0),
        attestation: new Uint8Array(0)
    };
}
const MsgReceiveMessage = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReceiveMessage();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0),
            attestation: isSet(object.attestation) ? bytesFromBase64(object.attestation) : new Uint8Array(0)
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgReceiveMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgReceiveMessage();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : new Uint8Array(0);
        var _object_attestation;
        message.attestation = (_object_attestation = object.attestation) !== null && _object_attestation !== void 0 ? _object_attestation : new Uint8Array(0);
        return message;
    }
};
function createBaseMsgReceiveMessageResponse() {
    return {
        success: false
    };
}
const MsgReceiveMessageResponse = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReceiveMessageResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            success: isSet(object.success) ? globalThis.Boolean(object.success) : false
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.success === true) {
            obj.success = message.success;
        }
        return obj;
    },
    create (base) {
        return MsgReceiveMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgReceiveMessageResponse();
        var _object_success;
        message.success = (_object_success = object.success) !== null && _object_success !== void 0 ? _object_success : false;
        return message;
    }
};
function createBaseMsgSendMessage() {
    return {
        from: "",
        destinationDomain: 0,
        recipient: new Uint8Array(0),
        messageBody: new Uint8Array(0)
    };
}
const MsgSendMessage = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessage();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(0),
            messageBody: isSet(object.messageBody) ? bytesFromBase64(object.messageBody) : new Uint8Array(0)
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgSendMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgSendMessage();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_destinationDomain;
        message.destinationDomain = (_object_destinationDomain = object.destinationDomain) !== null && _object_destinationDomain !== void 0 ? _object_destinationDomain : 0;
        var _object_recipient;
        message.recipient = (_object_recipient = object.recipient) !== null && _object_recipient !== void 0 ? _object_recipient : new Uint8Array(0);
        var _object_messageBody;
        message.messageBody = (_object_messageBody = object.messageBody) !== null && _object_messageBody !== void 0 ? _object_messageBody : new Uint8Array(0);
        return message;
    }
};
function createBaseMsgSendMessageResponse() {
    return {
        nonce: _long.default.UZERO
    };
}
const MsgSendMessageResponse = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessageResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            nonce: isSet(object.nonce) ? _long.default.fromValue(object.nonce) : _long.default.UZERO
        };
    },
    toJSON (message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || _long.default.UZERO).toString();
        }
        return obj;
    },
    create (base) {
        return MsgSendMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgSendMessageResponse();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? _long.default.fromValue(object.nonce) : _long.default.UZERO;
        return message;
    }
};
function createBaseMsgSendMessageWithCaller() {
    return {
        from: "",
        destinationDomain: 0,
        recipient: new Uint8Array(0),
        messageBody: new Uint8Array(0),
        destinationCaller: new Uint8Array(0)
    };
}
const MsgSendMessageWithCaller = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessageWithCaller();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
            recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(0),
            messageBody: isSet(object.messageBody) ? bytesFromBase64(object.messageBody) : new Uint8Array(0),
            destinationCaller: isSet(object.destinationCaller) ? bytesFromBase64(object.destinationCaller) : new Uint8Array(0)
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgSendMessageWithCaller.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgSendMessageWithCaller();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_destinationDomain;
        message.destinationDomain = (_object_destinationDomain = object.destinationDomain) !== null && _object_destinationDomain !== void 0 ? _object_destinationDomain : 0;
        var _object_recipient;
        message.recipient = (_object_recipient = object.recipient) !== null && _object_recipient !== void 0 ? _object_recipient : new Uint8Array(0);
        var _object_messageBody;
        message.messageBody = (_object_messageBody = object.messageBody) !== null && _object_messageBody !== void 0 ? _object_messageBody : new Uint8Array(0);
        var _object_destinationCaller;
        message.destinationCaller = (_object_destinationCaller = object.destinationCaller) !== null && _object_destinationCaller !== void 0 ? _object_destinationCaller : new Uint8Array(0);
        return message;
    }
};
function createBaseMsgSendMessageWithCallerResponse() {
    return {
        nonce: _long.default.UZERO
    };
}
const MsgSendMessageWithCallerResponse = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendMessageWithCallerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            nonce: isSet(object.nonce) ? _long.default.fromValue(object.nonce) : _long.default.UZERO
        };
    },
    toJSON (message) {
        const obj = {};
        if (!message.nonce.isZero()) {
            obj.nonce = (message.nonce || _long.default.UZERO).toString();
        }
        return obj;
    },
    create (base) {
        return MsgSendMessageWithCallerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgSendMessageWithCallerResponse();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? _long.default.fromValue(object.nonce) : _long.default.UZERO;
        return message;
    }
};
function createBaseMsgReplaceMessage() {
    return {
        from: "",
        originalMessage: new Uint8Array(0),
        originalAttestation: new Uint8Array(0),
        newMessageBody: new Uint8Array(0),
        newDestinationCaller: new Uint8Array(0)
    };
}
const MsgReplaceMessage = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceMessage();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            originalMessage: isSet(object.originalMessage) ? bytesFromBase64(object.originalMessage) : new Uint8Array(0),
            originalAttestation: isSet(object.originalAttestation) ? bytesFromBase64(object.originalAttestation) : new Uint8Array(0),
            newMessageBody: isSet(object.newMessageBody) ? bytesFromBase64(object.newMessageBody) : new Uint8Array(0),
            newDestinationCaller: isSet(object.newDestinationCaller) ? bytesFromBase64(object.newDestinationCaller) : new Uint8Array(0)
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgReplaceMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgReplaceMessage();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_originalMessage;
        message.originalMessage = (_object_originalMessage = object.originalMessage) !== null && _object_originalMessage !== void 0 ? _object_originalMessage : new Uint8Array(0);
        var _object_originalAttestation;
        message.originalAttestation = (_object_originalAttestation = object.originalAttestation) !== null && _object_originalAttestation !== void 0 ? _object_originalAttestation : new Uint8Array(0);
        var _object_newMessageBody;
        message.newMessageBody = (_object_newMessageBody = object.newMessageBody) !== null && _object_newMessageBody !== void 0 ? _object_newMessageBody : new Uint8Array(0);
        var _object_newDestinationCaller;
        message.newDestinationCaller = (_object_newDestinationCaller = object.newDestinationCaller) !== null && _object_newDestinationCaller !== void 0 ? _object_newDestinationCaller : new Uint8Array(0);
        return message;
    }
};
function createBaseMsgReplaceMessageResponse() {
    return {};
}
const MsgReplaceMessageResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReplaceMessageResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgReplaceMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgReplaceMessageResponse();
        return message;
    }
};
function createBaseMsgUpdateSignatureThreshold() {
    return {
        from: "",
        amount: 0
    };
}
const MsgUpdateSignatureThreshold = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.amount !== 0) {
            writer.uint32(16).uint32(message.amount);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSignatureThreshold();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.amount !== 0) {
            obj.amount = Math.round(message.amount);
        }
        return obj;
    },
    create (base) {
        return MsgUpdateSignatureThreshold.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUpdateSignatureThreshold();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : 0;
        return message;
    }
};
function createBaseMsgUpdateSignatureThresholdResponse() {
    return {};
}
const MsgUpdateSignatureThresholdResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSignatureThresholdResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUpdateSignatureThresholdResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUpdateSignatureThresholdResponse();
        return message;
    }
};
function createBaseMsgLinkTokenPair() {
    return {
        from: "",
        remoteDomain: 0,
        remoteToken: new Uint8Array(0),
        localToken: ""
    };
}
const MsgLinkTokenPair = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLinkTokenPair();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
            remoteToken: isSet(object.remoteToken) ? bytesFromBase64(object.remoteToken) : new Uint8Array(0),
            localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : ""
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgLinkTokenPair.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgLinkTokenPair();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_remoteDomain;
        message.remoteDomain = (_object_remoteDomain = object.remoteDomain) !== null && _object_remoteDomain !== void 0 ? _object_remoteDomain : 0;
        var _object_remoteToken;
        message.remoteToken = (_object_remoteToken = object.remoteToken) !== null && _object_remoteToken !== void 0 ? _object_remoteToken : new Uint8Array(0);
        var _object_localToken;
        message.localToken = (_object_localToken = object.localToken) !== null && _object_localToken !== void 0 ? _object_localToken : "";
        return message;
    }
};
function createBaseMsgLinkTokenPairResponse() {
    return {};
}
const MsgLinkTokenPairResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLinkTokenPairResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgLinkTokenPairResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgLinkTokenPairResponse();
        return message;
    }
};
function createBaseMsgUnlinkTokenPair() {
    return {
        from: "",
        remoteDomain: 0,
        remoteToken: new Uint8Array(0),
        localToken: ""
    };
}
const MsgUnlinkTokenPair = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlinkTokenPair();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
            remoteToken: isSet(object.remoteToken) ? bytesFromBase64(object.remoteToken) : new Uint8Array(0),
            localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : ""
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgUnlinkTokenPair.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgUnlinkTokenPair();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_remoteDomain;
        message.remoteDomain = (_object_remoteDomain = object.remoteDomain) !== null && _object_remoteDomain !== void 0 ? _object_remoteDomain : 0;
        var _object_remoteToken;
        message.remoteToken = (_object_remoteToken = object.remoteToken) !== null && _object_remoteToken !== void 0 ? _object_remoteToken : new Uint8Array(0);
        var _object_localToken;
        message.localToken = (_object_localToken = object.localToken) !== null && _object_localToken !== void 0 ? _object_localToken : "";
        return message;
    }
};
function createBaseMsgUnlinkTokenPairResponse() {
    return {};
}
const MsgUnlinkTokenPairResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlinkTokenPairResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgUnlinkTokenPairResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgUnlinkTokenPairResponse();
        return message;
    }
};
function createBaseMsgAddRemoteTokenMessenger() {
    return {
        from: "",
        domainId: 0,
        address: new Uint8Array(0)
    };
}
const MsgAddRemoteTokenMessenger = {
    encode (message, writer = _minimal.default.Writer.create()) {
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
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddRemoteTokenMessenger();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            domainId: isSet(object.domainId) ? globalThis.Number(object.domainId) : 0,
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0)
        };
    },
    toJSON (message) {
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
    create (base) {
        return MsgAddRemoteTokenMessenger.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgAddRemoteTokenMessenger();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_domainId;
        message.domainId = (_object_domainId = object.domainId) !== null && _object_domainId !== void 0 ? _object_domainId : 0;
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : new Uint8Array(0);
        return message;
    }
};
function createBaseMsgAddRemoteTokenMessengerResponse() {
    return {};
}
const MsgAddRemoteTokenMessengerResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddRemoteTokenMessengerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgAddRemoteTokenMessengerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgAddRemoteTokenMessengerResponse();
        return message;
    }
};
function createBaseMsgRemoveRemoteTokenMessenger() {
    return {
        from: "",
        domainId: 0
    };
}
const MsgRemoveRemoteTokenMessenger = {
    encode (message, writer = _minimal.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.domainId !== 0) {
            writer.uint32(16).uint32(message.domainId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveRemoteTokenMessenger();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
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
    fromJSON (object) {
        return {
            from: isSet(object.from) ? globalThis.String(object.from) : "",
            domainId: isSet(object.domainId) ? globalThis.Number(object.domainId) : 0
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.from !== "") {
            obj.from = message.from;
        }
        if (message.domainId !== 0) {
            obj.domainId = Math.round(message.domainId);
        }
        return obj;
    },
    create (base) {
        return MsgRemoveRemoteTokenMessenger.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (object) {
        const message = createBaseMsgRemoveRemoteTokenMessenger();
        var _object_from;
        message.from = (_object_from = object.from) !== null && _object_from !== void 0 ? _object_from : "";
        var _object_domainId;
        message.domainId = (_object_domainId = object.domainId) !== null && _object_domainId !== void 0 ? _object_domainId : 0;
        return message;
    }
};
function createBaseMsgRemoveRemoteTokenMessengerResponse() {
    return {};
}
const MsgRemoveRemoteTokenMessengerResponse = {
    encode (_, writer = _minimal.default.Writer.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _minimal.default.Reader ? input : _minimal.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveRemoteTokenMessengerResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON (_) {
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    create (base) {
        return MsgRemoveRemoteTokenMessengerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial (_) {
        const message = createBaseMsgRemoveRemoteTokenMessengerResponse();
        return message;
    }
};
const MsgServiceName = "circle.cctp.v1.Msg";
let MsgClientImpl = class MsgClientImpl {
    AcceptOwner(request) {
        const data = MsgAcceptOwner.encode(request).finish();
        const promise = this.rpc.request(this.service, "AcceptOwner", data);
        return promise.then((data)=>MsgAcceptOwnerResponse.decode(_minimal.default.Reader.create(data)));
    }
    AddRemoteTokenMessenger(request) {
        const data = MsgAddRemoteTokenMessenger.encode(request).finish();
        const promise = this.rpc.request(this.service, "AddRemoteTokenMessenger", data);
        return promise.then((data)=>MsgAddRemoteTokenMessengerResponse.decode(_minimal.default.Reader.create(data)));
    }
    DepositForBurn(request) {
        const data = MsgDepositForBurn.encode(request).finish();
        const promise = this.rpc.request(this.service, "DepositForBurn", data);
        return promise.then((data)=>MsgDepositForBurnResponse.decode(_minimal.default.Reader.create(data)));
    }
    DepositForBurnWithCaller(request) {
        const data = MsgDepositForBurnWithCaller.encode(request).finish();
        const promise = this.rpc.request(this.service, "DepositForBurnWithCaller", data);
        return promise.then((data)=>MsgDepositForBurnWithCallerResponse.decode(_minimal.default.Reader.create(data)));
    }
    DisableAttester(request) {
        const data = MsgDisableAttester.encode(request).finish();
        const promise = this.rpc.request(this.service, "DisableAttester", data);
        return promise.then((data)=>MsgDisableAttesterResponse.decode(_minimal.default.Reader.create(data)));
    }
    EnableAttester(request) {
        const data = MsgEnableAttester.encode(request).finish();
        const promise = this.rpc.request(this.service, "EnableAttester", data);
        return promise.then((data)=>MsgEnableAttesterResponse.decode(_minimal.default.Reader.create(data)));
    }
    LinkTokenPair(request) {
        const data = MsgLinkTokenPair.encode(request).finish();
        const promise = this.rpc.request(this.service, "LinkTokenPair", data);
        return promise.then((data)=>MsgLinkTokenPairResponse.decode(_minimal.default.Reader.create(data)));
    }
    PauseBurningAndMinting(request) {
        const data = MsgPauseBurningAndMinting.encode(request).finish();
        const promise = this.rpc.request(this.service, "PauseBurningAndMinting", data);
        return promise.then((data)=>MsgPauseBurningAndMintingResponse.decode(_minimal.default.Reader.create(data)));
    }
    PauseSendingAndReceivingMessages(request) {
        const data = MsgPauseSendingAndReceivingMessages.encode(request).finish();
        const promise = this.rpc.request(this.service, "PauseSendingAndReceivingMessages", data);
        return promise.then((data)=>MsgPauseSendingAndReceivingMessagesResponse.decode(_minimal.default.Reader.create(data)));
    }
    ReceiveMessage(request) {
        const data = MsgReceiveMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReceiveMessage", data);
        return promise.then((data)=>MsgReceiveMessageResponse.decode(_minimal.default.Reader.create(data)));
    }
    RemoveRemoteTokenMessenger(request) {
        const data = MsgRemoveRemoteTokenMessenger.encode(request).finish();
        const promise = this.rpc.request(this.service, "RemoveRemoteTokenMessenger", data);
        return promise.then((data)=>MsgRemoveRemoteTokenMessengerResponse.decode(_minimal.default.Reader.create(data)));
    }
    ReplaceDepositForBurn(request) {
        const data = MsgReplaceDepositForBurn.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReplaceDepositForBurn", data);
        return promise.then((data)=>MsgReplaceDepositForBurnResponse.decode(_minimal.default.Reader.create(data)));
    }
    ReplaceMessage(request) {
        const data = MsgReplaceMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReplaceMessage", data);
        return promise.then((data)=>MsgReplaceMessageResponse.decode(_minimal.default.Reader.create(data)));
    }
    SendMessage(request) {
        const data = MsgSendMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendMessage", data);
        return promise.then((data)=>MsgSendMessageResponse.decode(_minimal.default.Reader.create(data)));
    }
    SendMessageWithCaller(request) {
        const data = MsgSendMessageWithCaller.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendMessageWithCaller", data);
        return promise.then((data)=>MsgSendMessageWithCallerResponse.decode(_minimal.default.Reader.create(data)));
    }
    UnlinkTokenPair(request) {
        const data = MsgUnlinkTokenPair.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnlinkTokenPair", data);
        return promise.then((data)=>MsgUnlinkTokenPairResponse.decode(_minimal.default.Reader.create(data)));
    }
    UnpauseBurningAndMinting(request) {
        const data = MsgUnpauseBurningAndMinting.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnpauseBurningAndMinting", data);
        return promise.then((data)=>MsgUnpauseBurningAndMintingResponse.decode(_minimal.default.Reader.create(data)));
    }
    UnpauseSendingAndReceivingMessages(request) {
        const data = MsgUnpauseSendingAndReceivingMessages.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnpauseSendingAndReceivingMessages", data);
        return promise.then((data)=>MsgUnpauseSendingAndReceivingMessagesResponse.decode(_minimal.default.Reader.create(data)));
    }
    UpdateOwner(request) {
        const data = MsgUpdateOwner.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateOwner", data);
        return promise.then((data)=>MsgUpdateOwnerResponse.decode(_minimal.default.Reader.create(data)));
    }
    UpdateAttesterManager(request) {
        const data = MsgUpdateAttesterManager.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateAttesterManager", data);
        return promise.then((data)=>MsgUpdateAttesterManagerResponse.decode(_minimal.default.Reader.create(data)));
    }
    UpdateTokenController(request) {
        const data = MsgUpdateTokenController.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateTokenController", data);
        return promise.then((data)=>MsgUpdateTokenControllerResponse.decode(_minimal.default.Reader.create(data)));
    }
    UpdatePauser(request) {
        const data = MsgUpdatePauser.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdatePauser", data);
        return promise.then((data)=>MsgUpdatePauserResponse.decode(_minimal.default.Reader.create(data)));
    }
    UpdateMaxMessageBodySize(request) {
        const data = MsgUpdateMaxMessageBodySize.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateMaxMessageBodySize", data);
        return promise.then((data)=>MsgUpdateMaxMessageBodySizeResponse.decode(_minimal.default.Reader.create(data)));
    }
    SetMaxBurnAmountPerMessage(request) {
        const data = MsgSetMaxBurnAmountPerMessage.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetMaxBurnAmountPerMessage", data);
        return promise.then((data)=>MsgSetMaxBurnAmountPerMessageResponse.decode(_minimal.default.Reader.create(data)));
    }
    UpdateSignatureThreshold(request) {
        const data = MsgUpdateSignatureThreshold.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateSignatureThreshold", data);
        return promise.then((data)=>MsgUpdateSignatureThresholdResponse.decode(_minimal.default.Reader.create(data)));
    }
    constructor(rpc, opts){
        _define_property(this, "rpc", void 0);
        _define_property(this, "service", void 0);
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || MsgServiceName;
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
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for(let i = 0; i < bin.length; ++i){
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        const bin = [];
        arr.forEach((byte)=>{
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
if (_minimal.default.util.Long !== _long.default) {
    _minimal.default.util.Long = _long.default;
    _minimal.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

//# sourceMappingURL=tx.js.map