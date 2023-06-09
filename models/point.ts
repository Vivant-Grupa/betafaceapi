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
 * represents a face landmark point.
 * @export
 * @interface Point
 */
export interface Point {
    /**
     * x coordinate of the face point in pixels.
     * @type {number}
     * @memberof Point
     */
    x?: number;
    /**
     * y coordinate of the face point in pixels.
     * @type {number}
     * @memberof Point
     */
    y?: number;
    /**
     * numerical face point unique type identifier.
     * @type {number}
     * @memberof Point
     */
    type?: number;
    /**
     * face point type name for display.
     * @type {string}
     * @memberof Point
     */
    name?: string;
}
