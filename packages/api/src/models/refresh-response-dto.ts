/* tslint:disable */
/* eslint-disable */
/**
 * API
 * API docs
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface RefreshResponseDto
 */
export interface RefreshResponseDto {
    /**
     * 
     * @type {string}
     * @memberof RefreshResponseDto
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof RefreshResponseDto
     */
    refreshToken: string;
    /**
     * 
     * @type {number}
     * @memberof RefreshResponseDto
     */
    tokenExpires: number;
}
