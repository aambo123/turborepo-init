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
import { FileDto } from './file-dto';
/**
 * 
 * @export
 * @interface CreateAgencyDto
 */
export interface CreateAgencyDto {
    /**
     * 
     * @type {FileDto}
     * @memberof CreateAgencyDto
     */
    logo?: FileDto;
    /**
     * 
     * @type {string}
     * @memberof CreateAgencyDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAgencyDto
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAgencyDto
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAgencyDto
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAgencyDto
     */
    name: string;
}
