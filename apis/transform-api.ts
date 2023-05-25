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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Transform } from '../models';
import { TransformRequest } from '../models';
/**
 * TransformApi - axios parameter creator
 * @export
 */
export const TransformApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary gets a faces transform result.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} transformUuid the requested transform identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TransformGet: async (apiKey: string, transformUuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            if (apiKey === null || apiKey === undefined) {
                throw new RequiredError('apiKey','Required parameter apiKey was null or undefined when calling v2TransformGet.');
            }
            // verify required parameter 'transformUuid' is not null or undefined
            if (transformUuid === null || transformUuid === undefined) {
                throw new RequiredError('transformUuid','Required parameter transformUuid was null or undefined when calling v2TransformGet.');
            }
            const localVarPath = `/v2/transform`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiKey !== undefined) {
                localVarQueryParameter['api_key'] = apiKey;
            }

            if (transformUuid !== undefined) {
                localVarQueryParameter['transform_uuid'] = transformUuid;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary initiate transform for one or more faces
         * @param {TransformRequest} [body] request json body with parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2TransformPost: async (body?: TransformRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/transform`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransformApi - functional programming interface
 * @export
 */
export const TransformApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary gets a faces transform result.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} transformUuid the requested transform identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TransformGet(apiKey: string, transformUuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TransformApiAxiosParamCreator(configuration).v2TransformGet(apiKey, transformUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary initiate transform for one or more faces
         * @param {TransformRequest} [body] request json body with parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TransformPost(body?: TransformRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Transform>>> {
            const localVarAxiosArgs = await TransformApiAxiosParamCreator(configuration).v2TransformPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TransformApi - factory interface
 * @export
 */
export const TransformApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary gets a faces transform result.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} transformUuid the requested transform identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TransformGet(apiKey: string, transformUuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TransformApiFp(configuration).v2TransformGet(apiKey, transformUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary initiate transform for one or more faces
         * @param {TransformRequest} [body] request json body with parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2TransformPost(body?: TransformRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<Transform>> {
            return TransformApiFp(configuration).v2TransformPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransformApi - object-oriented interface
 * @export
 * @class TransformApi
 * @extends {BaseAPI}
 */
export class TransformApi extends BaseAPI {
    /**
     * 
     * @summary gets a faces transform result.
     * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
     * @param {string} transformUuid the requested transform identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApi
     */
    public async v2TransformGet(apiKey: string, transformUuid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TransformApiFp(this.configuration).v2TransformGet(apiKey, transformUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary initiate transform for one or more faces
     * @param {TransformRequest} [body] request json body with parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApi
     */
    public async v2TransformPost(body?: TransformRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<Transform>> {
        return TransformApiFp(this.configuration).v2TransformPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
