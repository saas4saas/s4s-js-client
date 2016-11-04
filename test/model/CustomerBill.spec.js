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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.S4sFull);
  }
}(this, function(expect, S4sFull) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new S4sFull.CustomerBill();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomerBill', function() {
    it('should create an instance of CustomerBill', function() {
      // uncomment below and update the code to test CustomerBill
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be.a(S4sFull.CustomerBill);
    });

    it('should have the property customerPlanId (base name: "customerPlanId")', function() {
      // uncomment below and update the code to test the property customerPlanId
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

    it('should have the property creationTimespan (base name: "creationTimespan")', function() {
      // uncomment below and update the code to test the property creationTimespan
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

    it('should have the property lasUpdateTimespan (base name: "lasUpdateTimespan")', function() {
      // uncomment below and update the code to test the property lasUpdateTimespan
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

    it('should have the property totalInPayment (base name: "totalInPayment")', function() {
      // uncomment below and update the code to test the property totalInPayment
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

    it('should have the property planId (base name: "planId")', function() {
      // uncomment below and update the code to test the property planId
      //var instane = new S4sFull.CustomerBill();
      //expect(instance).to.be();
    });

  });

}));
