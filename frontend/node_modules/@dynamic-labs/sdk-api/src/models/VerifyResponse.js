import { SdkUserFromJSON, SdkUserToJSON } from './SdkUser.js';

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
        'user': SdkUserFromJSON(json['user']),
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
        'user': SdkUserToJSON(value.user),
        'minifiedJwt': value.minifiedJwt,
    };
}

export { VerifyResponseFromJSON, VerifyResponseFromJSONTyped, VerifyResponseToJSON };
