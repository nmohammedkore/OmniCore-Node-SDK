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

import ApiClient from '../ApiClient';
import EventNotificationConfig from './EventNotificationConfig';
import HttpConfig from './HttpConfig';
import LogLevel from './LogLevel';
import MqttConfig from './MqttConfig';
import NotificationConfig from './NotificationConfig';
import RegistryCredential from './RegistryCredential';

/**
 * The CreateRegistryRequest model module.
 * @module model/CreateRegistryRequest
 * @version 1.0
 */
class CreateRegistryRequest {
    /**
     * Constructs a new <code>CreateRegistryRequest</code>.
     * @alias module:model/CreateRegistryRequest
     * @param id {String} 
     */
    constructor(id) { 
        
        CreateRegistryRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>CreateRegistryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRegistryRequest} obj Optional instance to populate.
     * @return {module:model/CreateRegistryRequest} The populated <code>CreateRegistryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRegistryRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], [RegistryCredential]);
            }
            if (data.hasOwnProperty('httpConfig')) {
                obj['httpConfig'] = HttpConfig.constructFromObject(data['httpConfig']);
            }
            if (data.hasOwnProperty('mqttConfig')) {
                obj['mqttConfig'] = MqttConfig.constructFromObject(data['mqttConfig']);
            }
            if (data.hasOwnProperty('logLevel')) {
                obj['logLevel'] = LogLevel.constructFromObject(data['logLevel']);
            }
            if (data.hasOwnProperty('eventNotificationConfigs')) {
                obj['eventNotificationConfigs'] = ApiClient.convertToType(data['eventNotificationConfigs'], [EventNotificationConfig]);
            }
            if (data.hasOwnProperty('logNotificationConfig')) {
                obj['logNotificationConfig'] = NotificationConfig.constructFromObject(data['logNotificationConfig']);
            }
            if (data.hasOwnProperty('stateNotificationConfig')) {
                obj['stateNotificationConfig'] = NotificationConfig.constructFromObject(data['stateNotificationConfig']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRegistryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRegistryRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRegistryRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['credentials']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['credentials'])) {
                throw new Error("Expected the field `credentials` to be an array in the JSON data but got " + data['credentials']);
            }
            // validate the optional field `credentials` (array)
            for (const item of data['credentials']) {
                RegistryCredential.validateJsonObject(item);
            };
        }
        // validate the optional field `httpConfig`
        if (data['httpConfig']) { // data not null
          HttpConfig.validateJSON(data['httpConfig']);
        }
        // validate the optional field `mqttConfig`
        if (data['mqttConfig']) { // data not null
          MqttConfig.validateJSON(data['mqttConfig']);
        }
        if (data['eventNotificationConfigs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['eventNotificationConfigs'])) {
                throw new Error("Expected the field `eventNotificationConfigs` to be an array in the JSON data but got " + data['eventNotificationConfigs']);
            }
            // validate the optional field `eventNotificationConfigs` (array)
            for (const item of data['eventNotificationConfigs']) {
                EventNotificationConfig.validateJsonObject(item);
            };
        }
        // validate the optional field `logNotificationConfig`
        if (data['logNotificationConfig']) { // data not null
          NotificationConfig.validateJSON(data['logNotificationConfig']);
        }
        // validate the optional field `stateNotificationConfig`
        if (data['stateNotificationConfig']) { // data not null
          NotificationConfig.validateJSON(data['stateNotificationConfig']);
        }

        return true;
    }


}

CreateRegistryRequest.RequiredProperties = ["id"];

/**
 * @member {String} id
 */
CreateRegistryRequest.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/RegistryCredential>} credentials
 */
CreateRegistryRequest.prototype['credentials'] = undefined;

/**
 * @member {module:model/HttpConfig} httpConfig
 */
CreateRegistryRequest.prototype['httpConfig'] = undefined;

/**
 * @member {module:model/MqttConfig} mqttConfig
 */
CreateRegistryRequest.prototype['mqttConfig'] = undefined;

/**
 * @member {module:model/LogLevel} logLevel
 */
CreateRegistryRequest.prototype['logLevel'] = undefined;

/**
 * @member {Array.<module:model/EventNotificationConfig>} eventNotificationConfigs
 */
CreateRegistryRequest.prototype['eventNotificationConfigs'] = undefined;

/**
 * @member {module:model/NotificationConfig} logNotificationConfig
 */
CreateRegistryRequest.prototype['logNotificationConfig'] = undefined;

/**
 * @member {module:model/NotificationConfig} stateNotificationConfig
 */
CreateRegistryRequest.prototype['stateNotificationConfig'] = undefined;






export default CreateRegistryRequest;

