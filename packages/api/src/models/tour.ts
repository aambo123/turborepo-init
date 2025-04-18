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
import { Agency } from './agency';
import { ModelPackage } from './model-package';
import { TourCategory } from './tour-category';
/**
 * 
 * @export
 * @interface Tour
 */
export interface Tour {
    /**
     * 
     * @type {Array<ModelPackage>}
     * @memberof Tour
     */
    packages: Array<ModelPackage> | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof Tour
     */
    itinerary: Array<any> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Tour
     */
    onSale: boolean | null;
    /**
     * 
     * @type {TourCategory}
     * @memberof Tour
     */
    category: TourCategory;
    /**
     * 
     * @type {number}
     * @memberof Tour
     */
    rating: number;
    /**
     * 
     * @type {number}
     * @memberof Tour
     */
    totalBookings: number;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    additionalInfo: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Tour
     */
    exclusions: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Tour
     */
    inclusions: Array<string> | null;
    /**
     * 
     * @type {Agency}
     * @memberof Tour
     */
    agency: Agency;
    /**
     * 
     * @type {boolean}
     * @memberof Tour
     */
    isAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    highlights: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    duration: string;
    /**
     * 
     * @type {number}
     * @memberof Tour
     */
    discountPrice: number;
    /**
     * 
     * @type {number}
     * @memberof Tour
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof Tour
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Tour
     */
    updatedAt: Date;
}
