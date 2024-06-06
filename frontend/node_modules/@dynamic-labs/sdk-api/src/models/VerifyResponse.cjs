'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SdkUser = require('./SdkUser.cjs');

/* tslint:disable */
function VerifyResponseFromJSON(json) {
    return VerifyResponseFromJSONTyped(json);
}
function VerifyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwt': json['jwt'],
        'user': SdkUser.SdkUserFromJSON(json['user']),
        'minifiedJwt': json['minifiedJwt'],
    };
}
function VerifyResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jwt': value.jwt,
        'user': SdkUser.SdkUserToJSON(value.user),
        'minifiedJwt': value.minifiedJwt,
    };
}

exports.VerifyResponseFromJSON = VerifyResponseFromJSON;
exports.VerifyResponseFromJSONTyped = VerifyResponseFromJSONTyped;
exports.VerifyResponseToJSON = VerifyResponseToJSON;
