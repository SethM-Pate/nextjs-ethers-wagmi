import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { UserIdentifierTypeEnumFromJSON, UserIdentifierTypeEnumToJSON } from './UserIdentifierTypeEnum.js';

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
        'type': UserIdentifierTypeEnumFromJSON(json['type']),
        'chain': ChainEnumFromJSON(json['chain']),
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
        'type': UserIdentifierTypeEnumToJSON(value.type),
        'chain': ChainEnumToJSON(value.chain),
    };
}

export { CreateUserEmbeddedWalletsRequestFromJSON, CreateUserEmbeddedWalletsRequestFromJSONTyped, CreateUserEmbeddedWalletsRequestToJSON };
