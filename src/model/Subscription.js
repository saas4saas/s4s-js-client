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
    define(['ApiClient', 'model/Price'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Price'));
  } else {
    // Browser globals (root is window)
    if (!root.S4sFull) {
      root.S4sFull = {};
    }
    root.S4sFull.Subscription = factory(root.S4sFull.ApiClient, root.S4sFull.Price);
  }
}(this, function(ApiClient, Price) {
  'use strict';




  /**
   * The Subscription model module.
   * @module model/Subscription
   * @version stable
   */

  /**
   * Constructs a new <code>Subscription</code>.
   * Model description
   * @alias module:model/Subscription
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('setupFee')) {
        obj['setupFee'] = Price.constructFromObject(data['setupFee']);
      }
      if (data.hasOwnProperty('periodCost')) {
        obj['periodCost'] = Price.constructFromObject(data['periodCost']);
      }
      if (data.hasOwnProperty('whenPay')) {
        obj['whenPay'] = ApiClient.convertToType(data['whenPay'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Subscription.PeriodEnum} period
   */
  exports.prototype['period'] = undefined;
  /**
   * @member {module:model/Price} setupFee
   */
  exports.prototype['setupFee'] = undefined;
  /**
   * @member {module:model/Price} periodCost
   */
  exports.prototype['periodCost'] = undefined;
  /**
   * @member {module:model/Subscription.WhenPayEnum} whenPay
   */
  exports.prototype['whenPay'] = undefined;


  /**
   * Allowed values for the <code>period</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeriodEnum = {
    /**
     * value: "Year"
     * @const
     */
    "Year": "Year",
    /**
     * value: "Month"
     * @const
     */
    "Month": "Month",
    /**
     * value: "Week"
     * @const
     */
    "Week": "Week",
    /**
     * value: "Day"
     * @const
     */
    "Day": "Day"  };

  /**
   * Allowed values for the <code>whenPay</code> property.
   * @enum {String}
   * @readonly
   */
  exports.WhenPayEnum = {
    /**
     * value: "EndPeriod"
     * @const
     */
    "EndPeriod": "EndPeriod",
    /**
     * value: "StartPeriod"
     * @const
     */
    "StartPeriod": "StartPeriod"  };


  return exports;
}));


