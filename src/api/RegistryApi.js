/**
 * OmniCore Model and State Management API
 * This is an OmniCore Model and State Management server.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@korewireless.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DeviceRegistry from '../model/DeviceRegistry';
import GenericErrorResponse from '../model/GenericErrorResponse';
import Info from '../model/Info';
import ListDeviceRegistries from '../model/ListDeviceRegistries';

/**
* Registry service.
* @module api/RegistryApi
* @version 1.0
*/
export default class RegistryApi {

    /**
    * Constructs a new RegistryApi. 
    * @alias module:api/RegistryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createRegistry operation.
     * @callback module:api/RegistryApi~createRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceRegistry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a registry
     * @param {String} subscriptionId Subscription ID
     * @param {Object} opts Optional parameters
     * @param {module:model/DeviceRegistry} opts.registry application/json
     * @param {module:api/RegistryApi~createRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceRegistry}
     */
    createRegistry(subscriptionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['registry'];
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling createRegistry");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeviceRegistry;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRegistry operation.
     * @callback module:api/RegistryApi~deleteRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Info} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:api/RegistryApi~deleteRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Info}
     */
    deleteRegistry(subscriptionId, registryId, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling deleteRegistry");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling deleteRegistry");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Info;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRegistries operation.
     * @callback module:api/RegistryApi~getRegistriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDeviceRegistries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all registries under a subscription
     * @param {String} subscriptionId Subscription ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page Number
     * @param {Number} opts.pageSize Page Size
     * @param {module:api/RegistryApi~getRegistriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDeviceRegistries}
     */
    getRegistries(subscriptionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getRegistries");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        'pageNumber': opts['pageNumber'],
        'pageSize': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListDeviceRegistries;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRegistry operation.
     * @callback module:api/RegistryApi~getRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceRegistry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:api/RegistryApi~getRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceRegistry}
     */
    getRegistry(subscriptionId, registryId, callback) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getRegistry");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling getRegistry");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeviceRegistry;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRegistry operation.
     * @callback module:api/RegistryApi~updateRegistryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceRegistry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a registry
     * @param {String} subscriptionId Subscription ID
     * @param {String} registryId Registry ID
     * @param {module:model/String} updateMask values to be updated: eventNotificationConfigs,stateNotificationConfig.pubsub_topic_name,logNotificationConfig.pubsub_topic_name,mqttConfig.mqtt_enabled_state,httpConfig.http_enabled_state,logLevel,credentials
     * @param {Object} opts Optional parameters
     * @param {module:model/DeviceRegistry} opts.registry application/json
     * @param {module:api/RegistryApi~updateRegistryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceRegistry}
     */
    updateRegistry(subscriptionId, registryId, updateMask, opts, callback) {
      opts = opts || {};
      let postBody = opts['registry'];
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling updateRegistry");
      }
      // verify the required parameter 'registryId' is set
      if (registryId === undefined || registryId === null) {
        throw new Error("Missing the required parameter 'registryId' when calling updateRegistry");
      }
      // verify the required parameter 'updateMask' is set
      if (updateMask === undefined || updateMask === null) {
        throw new Error("Missing the required parameter 'updateMask' when calling updateRegistry");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'registryId': registryId
      };
      let queryParams = {
        'updateMask': updateMask
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeviceRegistry;
      return this.apiClient.callApi(
        '/subscriptions/{subscriptionId}/registries/{registryId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
