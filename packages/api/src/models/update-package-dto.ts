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
import { TourDto } from './tour-dto';
/**
 * 
 * @export
 * @interface UpdatePackageDto
 */
export interface UpdatePackageDto {
    /**
     * 
     * @type {TourDto}
     * @memberof UpdatePackageDto
     */
    tour?: TourDto;
    /**
     * 
     * @type {number}
     * @memberof UpdatePackageDto
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdatePackageDto
     */
    minParticipant?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdatePackageDto
     */
    maxParticipant?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdatePackageDto
     */
    name?: string;
}
