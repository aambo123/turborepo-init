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
import { ModelPackage } from './model-package';
/**
 * 
 * @export
 * @interface InfinityPaginationPackageResponseDto
 */
export interface InfinityPaginationPackageResponseDto {
    /**
     * 
     * @type {Array<ModelPackage>}
     * @memberof InfinityPaginationPackageResponseDto
     */
    data: Array<ModelPackage>;
    /**
     * 
     * @type {boolean}
     * @memberof InfinityPaginationPackageResponseDto
     */
    hasNextPage: boolean;
    /**
     * 
     * @type {number}
     * @memberof InfinityPaginationPackageResponseDto
     */
    totalCount: number;
}
