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
 * @interface CreateTourDto
 */
export interface CreateTourDto {
    /**
     * 
     * @type {Array<any>}
     * @memberof CreateTourDto
     */
    itinerary: Array<any> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTourDto
     */
    onSale?: boolean;
    /**
     * 
     * @type {TourCategoryDto}
     * @memberof CreateTourDto
     */
    category: TourCategoryDto;
    /**
     * 
     * @type {string}
     * @memberof CreateTourDto
     */
    additionalInfo?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTourDto
     */
    exclusions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTourDto
     */
    inclusions?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTourDto
     */
    isAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateTourDto
     */
    highlights?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTourDto
     */
    duration: string;
    /**
     * 
     * @type {number}
     * @memberof CreateTourDto
     */
    discountPrice: number;
    /**
     * 
     * @type {number}
     * @memberof CreateTourDto
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof CreateTourDto
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTourDto
     */
    title: string;
}
