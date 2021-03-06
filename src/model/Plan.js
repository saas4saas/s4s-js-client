/**
 * s4s-full
 * description
 *
 * OpenAPI spec version: stable
 * Contact: rui.p.oliveira@impactinglabs.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OneTimePay', 'model/Subscription', 'model/VariableCost'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OneTimePay'), require('./Subscription'), require('./VariableCost'));
  } else {
    // Browser globals (root is window)
    if (!root.S4sFull) {
      root.S4sFull = {};
    }
    root.S4sFull.Plan = factory(root.S4sFull.ApiClient, root.S4sFull.OneTimePay, root.S4sFull.Subscription, root.S4sFull.VariableCost);
  }
}(this, function(ApiClient, OneTimePay, Subscription, VariableCost) {
  'use strict';




  /**
   * The Plan model module.
   * @module model/Plan
   * @version stable
   */

  /**
   * Constructs a new <code>Plan</code>.
   * Model description
   * @alias module:model/Plan
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Plan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Plan} obj Optional instance to populate.
   * @return {module:model/Plan} The populated <code>Plan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('variableCost')) {
        obj['variableCost'] = ApiClient.convertToType(data['variableCost'], {'String': VariableCost});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('oneTimePay')) {
        obj['oneTimePay'] = OneTimePay.constructFromObject(data['oneTimePay']);
      }
      if (data.hasOwnProperty('hasVariableCost')) {
        obj['hasVariableCost'] = ApiClient.convertToType(data['hasVariableCost'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('subscription')) {
        obj['subscription'] = Subscription.constructFromObject(data['subscription']);
      }
      if (data.hasOwnProperty('beforePlanId')) {
        obj['beforePlanId'] = ApiClient.convertToType(data['beforePlanId'], 'String');
      }
      if (data.hasOwnProperty('onExpiratyNextPlanId')) {
        obj['onExpiratyNextPlanId'] = ApiClient.convertToType(data['onExpiratyNextPlanId'], 'String');
      }
      if (data.hasOwnProperty('upgradeLevel')) {
        obj['upgradeLevel'] = ApiClient.convertToType(data['upgradeLevel'], 'Integer');
      }
      if (data.hasOwnProperty('requirePaymentMethod')) {
        obj['requirePaymentMethod'] = ApiClient.convertToType(data['requirePaymentMethod'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('packId')) {
        obj['packId'] = ApiClient.convertToType(data['packId'], 'String');
      }
      if (data.hasOwnProperty('typ')) {
        obj['typ'] = ApiClient.convertToType(data['typ'], 'String');
      }
      if (data.hasOwnProperty('uiOrder')) {
        obj['uiOrder'] = ApiClient.convertToType(data['uiOrder'], 'Integer');
      }
      if (data.hasOwnProperty('family')) {
        obj['family'] = ApiClient.convertToType(data['family'], 'String');
      }
      if (data.hasOwnProperty('uiVisible')) {
        obj['uiVisible'] = ApiClient.convertToType(data['uiVisible'], 'Boolean');
      }
      if (data.hasOwnProperty('withfamily')) {
        obj['withfamily'] = ApiClient.convertToType(data['withfamily'], 'Boolean');
      }
      if (data.hasOwnProperty('variableCostWhenPay')) {
        obj['variableCostWhenPay'] = ApiClient.convertToType(data['variableCostWhenPay'], 'String');
      }
      if (data.hasOwnProperty('oneTimePlan')) {
        obj['oneTimePlan'] = ApiClient.convertToType(data['oneTimePlan'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, module:model/VariableCost>} variableCost
   */
  exports.prototype['variableCost'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/OneTimePay} oneTimePay
   */
  exports.prototype['oneTimePay'] = undefined;
  /**
   * @member {Boolean} hasVariableCost
   */
  exports.prototype['hasVariableCost'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Subscription} subscription
   */
  exports.prototype['subscription'] = undefined;
  /**
   * @member {String} beforePlanId
   */
  exports.prototype['beforePlanId'] = undefined;
  /**
   * @member {String} onExpiratyNextPlanId
   */
  exports.prototype['onExpiratyNextPlanId'] = undefined;
  /**
   * @member {Integer} upgradeLevel
   */
  exports.prototype['upgradeLevel'] = undefined;
  /**
   * @member {Boolean} requirePaymentMethod
   */
  exports.prototype['requirePaymentMethod'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} packId
   */
  exports.prototype['packId'] = undefined;
  /**
   * @member {module:model/Plan.TypEnum} typ
   */
  exports.prototype['typ'] = undefined;
  /**
   * @member {Integer} uiOrder
   */
  exports.prototype['uiOrder'] = undefined;
  /**
   * @member {String} family
   */
  exports.prototype['family'] = undefined;
  /**
   * @member {Boolean} uiVisible
   */
  exports.prototype['uiVisible'] = undefined;
  /**
   * @member {Boolean} withfamily
   */
  exports.prototype['withfamily'] = undefined;
  /**
   * @member {module:model/Plan.VariableCostWhenPayEnum} variableCostWhenPay
   */
  exports.prototype['variableCostWhenPay'] = undefined;
  /**
   * @member {Boolean} oneTimePlan
   */
  exports.prototype['oneTimePlan'] = undefined;


  /**
   * Allowed values for the <code>typ</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypEnum = {
    /**
     * value: "OneTimePay"
     * @const
     */
    "OneTimePay": "OneTimePay",
    /**
     * value: "Subscription"
     * @const
     */
    "Subscription": "Subscription"  };

  /**
   * Allowed values for the <code>variableCostWhenPay</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VariableCostWhenPayEnum = {
    /**
     * value: "EachEndPeriod"
     * @const
     */
    "EachEndPeriod": "EachEndPeriod",
    /**
     * value: "EachMonth"
     * @const
     */
    "EachMonth": "EachMonth",
    /**
     * value: "EachWeek"
     * @const
     */
    "EachWeek": "EachWeek",
    /**
     * value: "EachDay"
     * @const
     */
    "EachDay": "EachDay"  };


  return exports;
}));


