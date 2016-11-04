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
    define(['ApiClient', 'model/StripeCustomer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StripeCustomer'));
  } else {
    // Browser globals (root is window)
    if (!root.S4sFull) {
      root.S4sFull = {};
    }
    root.S4sFull.CustomerPayment = factory(root.S4sFull.ApiClient, root.S4sFull.StripeCustomer);
  }
}(this, function(ApiClient, StripeCustomer) {
  'use strict';




  /**
   * The CustomerPayment model module.
   * @module model/CustomerPayment
   * @version stable
   */

  /**
   * Constructs a new <code>CustomerPayment</code>.
   * Model description
   * @alias module:model/CustomerPayment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CustomerPayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerPayment} obj Optional instance to populate.
   * @return {module:model/CustomerPayment} The populated <code>CustomerPayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('typ')) {
        obj['typ'] = ApiClient.convertToType(data['typ'], 'String');
      }
      if (data.hasOwnProperty('stripe')) {
        obj['stripe'] = StripeCustomer.constructFromObject(data['stripe']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CustomerPayment.TypEnum} typ
   */
  exports.prototype['typ'] = undefined;
  /**
   * @member {module:model/StripeCustomer} stripe
   */
  exports.prototype['stripe'] = undefined;


  /**
   * Allowed values for the <code>typ</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypEnum = {
    /**
     * value: "StripeCustomer"
     * @const
     */
    "StripeCustomer": "StripeCustomer"  };


  return exports;
}));


