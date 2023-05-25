/* tslint:disable */
/* eslint-disable */
/**
 * Betaface API 2.0
 * Betaface face recognition API.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * represents a single match.
 * @export
 * @interface Match
 */
export interface Match {
    /**
     * matching face unique identifier.
     * @type {string}
     * @memberof Match
     */
    faceUuid?: string;
    /**
     * match confidence (recognition score).
     * @type {number}
     * @memberof Match
     */
    confidence?: number;
    /**
     * decision is it same person or not based on match confidence with threshold measured on small and medium sized test collections.
     * @type {boolean}
     * @memberof Match
     */
    isMatch?: boolean;
    /**
     * person id assigned to matching face, if any.
     * @type {string}
     * @memberof Match
     */
    personId?: string;
}
