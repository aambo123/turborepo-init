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
import { TourCategoryDto } from './tour-category-dto';
/**
 * 
 * @export
 * @interface CreateTourCategoryDto
 */
export interface CreateTourCategoryDto {
    /**
     * 
     * @type {TourCategoryDto}
     * @memberof CreateTourCategoryDto
     */
    parent?: TourCategoryDto;
    /**
     * 
     * @type {string}
     * @memberof CreateTourCategoryDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTourCategoryDto
     */
    name: string;
}
