'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChainEnum = require('./ChainEnum.cjs');
var UserIdentifierTypeEnum = require('./UserIdentifierTypeEnum.cjs');

/* tslint:disable */
function CreateUserEmbeddedWalletsRequestFromJSON(json) {
    return CreateUserEmbeddedWalletsRequestFromJSONTyped(json);
}
function CreateUserEmbeddedWalletsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'identifier': json['identifier'],
        'type': UserIdentifierTypeEnum.UserIdentifierTypeEnumFromJSON(json['type']),
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
    };
}
function CreateUserEmbeddedWalletsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'identifier': value.identifier,
        'type': UserIdentifierTypeEnum.UserIdentifierTypeEnumToJSON(value.type),
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
    };
}

exports.CreateUserEmbeddedWalletsRequestFromJSON = CreateUserEmbeddedWalletsRequestFromJSON;
exports.CreateUserEmbeddedWalletsRequestFromJSONTyped = CreateUserEmbeddedWalletsRequestFromJSONTyped;
exports.CreateUserEmbeddedWalletsRequestToJSON = CreateUserEmbeddedWalletsRequestToJSON;
