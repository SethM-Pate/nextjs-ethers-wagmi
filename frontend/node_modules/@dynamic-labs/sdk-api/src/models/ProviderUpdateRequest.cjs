'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProviderUpdateRequestFromJSON(json) {
    return ProviderUpdateRequestFromJSONTyped(json);
}
function ProviderUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientId': !runtime.exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !runtime.exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !runtime.exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'defaultChainId': !runtime.exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !runtime.exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !runtime.exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'useDynamicCredentials': !runtime.exists(json, 'useDynamicCredentials') ? undefined : json['useDynamicCredentials'],
        'appleKeyId': !runtime.exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !runtime.exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
    };
}
function ProviderUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'providerProjectId': value.providerProjectId,
        'defaultChainId': value.defaultChainId,
        'defaultChain': value.defaultChain,
        'keyExportUrl': value.keyExportUrl,
        'useDynamicCredentials': value.useDynamicCredentials,
        'appleKeyId': value.appleKeyId,
        'appleTeamId': value.appleTeamId,
    };
}

exports.ProviderUpdateRequestFromJSON = ProviderUpdateRequestFromJSON;
exports.ProviderUpdateRequestFromJSONTyped = ProviderUpdateRequestFromJSONTyped;
exports.ProviderUpdateRequestToJSON = ProviderUpdateRequestToJSON;
