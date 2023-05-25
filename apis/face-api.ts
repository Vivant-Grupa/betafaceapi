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
import { CroppedFace } from '../models';
import { Face } from '../models';
/**
 * FaceApi - axios parameter creator
 * @export
 */
export const FaceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary gets a single cropped face information including cropped face image.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} faceUuid the requested media identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2FaceCroppedGet: async (apiKey: string, faceUuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            if (apiKey === null || apiKey === undefined) {
                throw new RequiredError('apiKey','Required parameter apiKey was null or undefined when calling v2FaceCroppedGet.');
            }
            // verify required parameter 'faceUuid' is not null or undefined
            if (faceUuid === null || faceUuid === undefined) {
                throw new RequiredError('faceUuid','Required parameter faceUuid was null or undefined when calling v2FaceCroppedGet.');
            }
            const localVarPath = `/v2/face/cropped`;
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

            if (faceUuid !== undefined) {
                localVarQueryParameter['face_uuid'] = faceUuid;
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
         * @summary gets a single face information.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} faceUuid the requested media identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v2FaceGet: async (apiKey: string, faceUuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            if (apiKey === null || apiKey === undefined) {
                throw new RequiredError('apiKey','Required parameter apiKey was null or undefined when calling v2FaceGet.');
            }
            // verify required parameter 'faceUuid' is not null or undefined
            if (faceUuid === null || faceUuid === undefined) {
                throw new RequiredError('faceUuid','Required parameter faceUuid was null or undefined when calling v2FaceGet.');
            }
            const localVarPath = `/v2/face`;
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

            if (faceUuid !== undefined) {
                localVarQueryParameter['face_uuid'] = faceUuid;
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
    }
};

/**
 * FaceApi - functional programming interface
 * @export
 */
export const FaceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary gets a single cropped face information including cropped face image.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} faceUuid the requested media identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2FaceCroppedGet(apiKey: string, faceUuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CroppedFace>>> {
            const localVarAxiosArgs = await FaceApiAxiosParamCreator(configuration).v2FaceCroppedGet(apiKey, faceUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary gets a single face information.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} faceUuid the requested media identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2FaceGet(apiKey: string, faceUuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Face>>> {
            const localVarAxiosArgs = await FaceApiAxiosParamCreator(configuration).v2FaceGet(apiKey, faceUuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FaceApi - factory interface
 * @export
 */
export const FaceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary gets a single cropped face information including cropped face image.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} faceUuid the requested media identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2FaceCroppedGet(apiKey: string, faceUuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CroppedFace>> {
            return FaceApiFp(configuration).v2FaceCroppedGet(apiKey, faceUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary gets a single face information.
         * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
         * @param {string} faceUuid the requested media identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v2FaceGet(apiKey: string, faceUuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Face>> {
            return FaceApiFp(configuration).v2FaceGet(apiKey, faceUuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FaceApi - object-oriented interface
 * @export
 * @class FaceApi
 * @extends {BaseAPI}
 */
export class FaceApi extends BaseAPI {
    /**
     * 
     * @summary gets a single cropped face information including cropped face image.
     * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
     * @param {string} faceUuid the requested media identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaceApi
     */
    public async v2FaceCroppedGet(apiKey: string, faceUuid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CroppedFace>> {
        return FaceApiFp(this.configuration).v2FaceCroppedGet(apiKey, faceUuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary gets a single face information.
     * @param {string} apiKey your API key or d45fd466-51e2-4701-8da8-04351c872236
     * @param {string} faceUuid the requested media identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaceApi
     */
    public async v2FaceGet(apiKey: string, faceUuid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Face>> {
        return FaceApiFp(this.configuration).v2FaceGet(apiKey, faceUuid, options).then((request) => request(this.axios, this.basePath));
    }
}