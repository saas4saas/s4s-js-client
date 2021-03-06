# s4s_full

S4sFull - JavaScript client for s4s_full
description
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: stable
- Package version: stable
- Build date: 2016-11-17T11:49:23.695Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [No URL avaiable yet](No URL avaiable yet)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install s4s_full --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/s4s_full
then install it via:

```shell
    npm install YOUR_USERNAME/s4s_full --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var S4sFull = require('s4s_full');

var defaultClient = S4sFull.ApiClient.instance;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix['tenantid'] = "Token"

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix['token'] = "Token"

var api = new S4sFull.SsPaymentApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.conf(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.saas4saas.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*S4sFull.SsPaymentApi* | [**conf**](docs/SsPaymentApi.md#conf) | **GET** /s4s-payment/conf | 
*S4sFull.SsPaymentApi* | [**customerInfoCurrency**](docs/SsPaymentApi.md#customerInfoCurrency) | **GET** /s4s-payment/customer/{customer-id}/info/currency | 
*S4sFull.SsPaymentApi* | [**customerInfoGet**](docs/SsPaymentApi.md#customerInfoGet) | **GET** /s4s-payment/customer/{customer-id}/info | 
*S4sFull.SsPaymentApi* | [**customerInfoHasPaymentInfo**](docs/SsPaymentApi.md#customerInfoHasPaymentInfo) | **GET** /s4s-payment/customer/{customer-id}/info/hasPaymentInfo | 
*S4sFull.SsPaymentApi* | [**customerInfoStripeCustomer**](docs/SsPaymentApi.md#customerInfoStripeCustomer) | **POST** /s4s-payment/customer/{customer-id}/info/stripeCustomer | 
*S4sFull.SsPaymentApi* | [**customerPaymentAdd**](docs/SsPaymentApi.md#customerPaymentAdd) | **POST** /s4s-payment/customer/{customer-id}/payment | 
*S4sFull.SsPaymentApi* | [**customerPaymentCancelPatch**](docs/SsPaymentApi.md#customerPaymentCancelPatch) | **PATCH** /s4s-payment/customer/{customer-id}/payment/{payment-id}/cancel | 
*S4sFull.SsPaymentApi* | [**customerPaymentGet**](docs/SsPaymentApi.md#customerPaymentGet) | **GET** /s4s-payment/customer/{customer-id}/payment | 
*S4sFull.SsPaymentApi* | [**customerPaymentPayPatch**](docs/SsPaymentApi.md#customerPaymentPayPatch) | **PATCH** /s4s-payment/customer/{customer-id}/payment/{payment-id}/pay | 
*S4sFull.SsPaymentApi* | [**customerPaymentValues**](docs/SsPaymentApi.md#customerPaymentValues) | **GET** /s4s-payment/customer/{customer-id}/payment/values | 
*S4sFull.SsPaymentApi* | [**paymentConfigGet**](docs/SsPaymentApi.md#paymentConfigGet) | **GET** /s4s-payment/paymentConfig | 
*S4sFull.SsPaymentApi* | [**paymentConfigPut**](docs/SsPaymentApi.md#paymentConfigPut) | **PUT** /s4s-payment/paymentConfig | 
*S4sFull.SsPaymentApi* | [**paymentGetAll**](docs/SsPaymentApi.md#paymentGetAll) | **GET** /s4s-payment/payment | 
*S4sFull.SsPricingApi* | [**customerBillClose**](docs/SsPricingApi.md#customerBillClose) | **GET** /s4s-pricing/customer/{customer-id}/bill/{customer-bill-id}/close | 
*S4sFull.SsPricingApi* | [**customerBillGet**](docs/SsPricingApi.md#customerBillGet) | **GET** /s4s-pricing/customer/{customer-id}/bill/{customer-bill-id} | 
*S4sFull.SsPricingApi* | [**customerBillInitGet**](docs/SsPricingApi.md#customerBillInitGet) | **GET** /s4s-pricing/customer/{customer-id}/bill/init | 
*S4sFull.SsPricingApi* | [**customerBillInitPost**](docs/SsPricingApi.md#customerBillInitPost) | **GET** /s4s-pricing/customer/{customer-id}/bill/initPost | 
*S4sFull.SsPricingApi* | [**customerBillOrGet**](docs/SsPricingApi.md#customerBillOrGet) | **GET** /s4s-pricing/customer/{customer-id}/bill/or | 
*S4sFull.SsPricingApi* | [**customerBillValues**](docs/SsPricingApi.md#customerBillValues) | **GET** /s4s-pricing/customer/{customer-id}/bill/values | 
*S4sFull.SsPricingApi* | [**customerHistoryPlanValues**](docs/SsPricingApi.md#customerHistoryPlanValues) | **GET** /s4s-pricing/customer/{customer-id}/history/plan/values | 
*S4sFull.SsPricingApi* | [**customerPlanAdd**](docs/SsPricingApi.md#customerPlanAdd) | **POST** /s4s-pricing/customer/{customer-id}/plan | 
*S4sFull.SsPricingApi* | [**customerPlanAddCheck**](docs/SsPricingApi.md#customerPlanAddCheck) | **POST** /s4s-pricing/customer/{customer-id}/plan/addCheck | 
*S4sFull.SsPricingApi* | [**customerPlanClose**](docs/SsPricingApi.md#customerPlanClose) | **GET** /s4s-pricing/customer/{customer-id}/plan/{customer-plan-id}/close | 
*S4sFull.SsPricingApi* | [**customerPlanFamily**](docs/SsPricingApi.md#customerPlanFamily) | **GET** /s4s-pricing/customer/{customer-id}/plan/family | 
*S4sFull.SsPricingApi* | [**customerPlanGet**](docs/SsPricingApi.md#customerPlanGet) | **GET** /s4s-pricing/customer/{customer-id}/plan/{customer-plan-id} | 
*S4sFull.SsPricingApi* | [**customerPlanGetAll**](docs/SsPricingApi.md#customerPlanGetAll) | **GET** /s4s-pricing/customer/{customer-id}/plan | 
*S4sFull.SsPricingApi* | [**customerPlanPay**](docs/SsPricingApi.md#customerPlanPay) | **GET** /s4s-pricing/customer/{customer-id}/plan/pay | 
*S4sFull.SsPricingApi* | [**customerPlanPlan**](docs/SsPricingApi.md#customerPlanPlan) | **GET** /s4s-pricing/customer/{customer-id}/plan/plan | 
*S4sFull.SsPricingApi* | [**customerPlanValues**](docs/SsPricingApi.md#customerPlanValues) | **GET** /s4s-pricing/customer/{customer-id}/plan/values | 
*S4sFull.SsPricingApi* | [**pricing**](docs/SsPricingApi.md#pricing) | **GET** /s4s-pricing/pricing | 
*S4sFull.SsPricingApi* | [**pricing2**](docs/SsPricingApi.md#pricing2) | **GET** /s4s-pricing/pricing2 | 
*S4sFull.SsPricingApi* | [**pricingConfigGet**](docs/SsPricingApi.md#pricingConfigGet) | **GET** /s4s-pricing/pricingConfig | 
*S4sFull.SsPricingApi* | [**pricingConfigPut**](docs/SsPricingApi.md#pricingConfigPut) | **PUT** /s4s-pricing/pricingConfig | 
*S4sFull.SsPricingApi* | [**pricingUiConf**](docs/SsPricingApi.md#pricingUiConf) | **GET** /s4s-pricing/pricingUiConf | 
*S4sFull.SsPricingApi* | [**pricingUiConfigGet**](docs/SsPricingApi.md#pricingUiConfigGet) | **GET** /s4s-pricing/pricingUiConfig | 
*S4sFull.SsPricingApi* | [**pricingUiConfigPut**](docs/SsPricingApi.md#pricingUiConfigPut) | **PUT** /s4s-pricing/pricingUiConfig | 
*S4sFull.SsProductApi* | [**customerEnjoyAdd**](docs/SsProductApi.md#customerEnjoyAdd) | **POST** /s4s-product/customer/{customer-id}/enjoy | 
*S4sFull.SsProductApi* | [**customerEnjoyClose**](docs/SsProductApi.md#customerEnjoyClose) | **GET** /s4s-product/customer/{customer-id}/enjoy/{enjoy-id}/close | 
*S4sFull.SsProductApi* | [**customerEnjoyGet**](docs/SsProductApi.md#customerEnjoyGet) | **GET** /s4s-product/customer/{customer-id}/enjoy/{enjoy-id} | 
*S4sFull.SsProductApi* | [**customerEnjoyGetAll**](docs/SsProductApi.md#customerEnjoyGetAll) | **GET** /s4s-product/customer/{customer-id}/enjoy | 
*S4sFull.SsProductApi* | [**customerEnjoySpend**](docs/SsProductApi.md#customerEnjoySpend) | **GET** /s4s-product/customer/{customer-id}/enjoy/{customer-pack-id}/spend | 
*S4sFull.SsProductApi* | [**customerEnjoyValues**](docs/SsProductApi.md#customerEnjoyValues) | **GET** /s4s-product/customer/{customer-id}/enjoy/values | 
*S4sFull.SsProductApi* | [**customerHistoryPackGet**](docs/SsProductApi.md#customerHistoryPackGet) | **GET** /s4s-product/customer/{customer-id}/history/pack/{id} | 
*S4sFull.SsProductApi* | [**customerHistoryPackGetAll**](docs/SsProductApi.md#customerHistoryPackGetAll) | **GET** /s4s-product/customer/{customer-id}/history/pack | 
*S4sFull.SsProductApi* | [**customerHistoryPackValues**](docs/SsProductApi.md#customerHistoryPackValues) | **GET** /s4s-product/customer/{customer-id}/history/pack/values | 
*S4sFull.SsProductApi* | [**customerHistorySubscriptionGet**](docs/SsProductApi.md#customerHistorySubscriptionGet) | **GET** /s4s-product/customer/{customer-id}/history/subscription/{id} | 
*S4sFull.SsProductApi* | [**customerHistorySubscriptionGetAll**](docs/SsProductApi.md#customerHistorySubscriptionGetAll) | **GET** /s4s-product/customer/{customer-id}/history/subscription | 
*S4sFull.SsProductApi* | [**customerHistorySubscriptionValues**](docs/SsProductApi.md#customerHistorySubscriptionValues) | **GET** /s4s-product/customer/{customer-id}/history/subscription/values | 
*S4sFull.SsProductApi* | [**customerResource**](docs/SsProductApi.md#customerResource) | **GET** /s4s-product/customer/{customer-id}/resource | 
*S4sFull.SsProductApi* | [**customerSubscriptionAdd**](docs/SsProductApi.md#customerSubscriptionAdd) | **POST** /s4s-product/customer/{customer-id}/subscription | 
*S4sFull.SsProductApi* | [**customerSubscriptionClose**](docs/SsProductApi.md#customerSubscriptionClose) | **GET** /s4s-product/customer/{customer-id}/subscription/{subscription-id}/close | 
*S4sFull.SsProductApi* | [**customerSubscriptionGet**](docs/SsProductApi.md#customerSubscriptionGet) | **GET** /s4s-product/customer/{customer-id}/subscription/{subscription-id} | 
*S4sFull.SsProductApi* | [**customerSubscriptionGetAll**](docs/SsProductApi.md#customerSubscriptionGetAll) | **GET** /s4s-product/customer/{customer-id}/subscription | 
*S4sFull.SsProductApi* | [**customerSubscriptionRenew**](docs/SsProductApi.md#customerSubscriptionRenew) | **GET** /s4s-product/customer/{customer-id}/subscription/{subscription-id}/renew | 
*S4sFull.SsProductApi* | [**customerSubscriptionSpend**](docs/SsProductApi.md#customerSubscriptionSpend) | **GET** /s4s-product/customer/{customer-id}/subscription/{customer-subscription-id}/spend | 
*S4sFull.SsProductApi* | [**customerSubscriptionValues**](docs/SsProductApi.md#customerSubscriptionValues) | **GET** /s4s-product/customer/{customer-id}/subscription/values | 
*S4sFull.SsProductApi* | [**productConfigGet**](docs/SsProductApi.md#productConfigGet) | **GET** /s4s-product/productConfig | 
*S4sFull.SsProductApi* | [**productConfigPut**](docs/SsProductApi.md#productConfigPut) | **PUT** /s4s-product/productConfig | 
*S4sFull.SsResourceApi* | [**customerResourceGet**](docs/SsResourceApi.md#customerResourceGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid} | 
*S4sFull.SsResourceApi* | [**customerResourceLimitGet**](docs/SsResourceApi.md#customerResourceLimitGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid}/limit | 
*S4sFull.SsResourceApi* | [**customerResourcePatch**](docs/SsResourceApi.md#customerResourcePatch) | **PATCH** /s4s-resource/customer/{customer-id}/resource/{resourceid} | 
*S4sFull.SsResourceApi* | [**customerResourceProductGet**](docs/SsResourceApi.md#customerResourceProductGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid}/product/{customer-product-id} | 
*S4sFull.SsResourceApi* | [**customerResourceProductLimitGet**](docs/SsResourceApi.md#customerResourceProductLimitGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid}/product/{customer-product-id}/limit | 
*S4sFull.SsUserApi* | [**accountAdd**](docs/SsUserApi.md#accountAdd) | **POST** /s4s-user/account | 
*S4sFull.SsUserApi* | [**accountAutoLogin**](docs/SsUserApi.md#accountAutoLogin) | **GET** /s4s-user/account/autoLogin | 
*S4sFull.SsUserApi* | [**accountChangePasswordPatch**](docs/SsUserApi.md#accountChangePasswordPatch) | **PATCH** /s4s-user/account/changePassword | 
*S4sFull.SsUserApi* | [**accountGetAll**](docs/SsUserApi.md#accountGetAll) | **GET** /s4s-user/account | 
*S4sFull.SsUserApi* | [**accountIdGet**](docs/SsUserApi.md#accountIdGet) | **GET** /s4s-user/account/{account-id} | 
*S4sFull.SsUserApi* | [**accountIdKeysAdd**](docs/SsUserApi.md#accountIdKeysAdd) | **POST** /s4s-user/account/{account-id}/keys | 
*S4sFull.SsUserApi* | [**accountIdKeysDel**](docs/SsUserApi.md#accountIdKeysDel) | **DELETE** /s4s-user/account/{account-id}/keys/{user-id} | 
*S4sFull.SsUserApi* | [**accountIdKeysGetAll**](docs/SsUserApi.md#accountIdKeysGetAll) | **GET** /s4s-user/account/{account-id}/keys | 
*S4sFull.SsUserApi* | [**accountIdPrivateDataPut**](docs/SsUserApi.md#accountIdPrivateDataPut) | **PUT** /s4s-user/account/{account-id}/privateData | 
*S4sFull.SsUserApi* | [**accountIdPut**](docs/SsUserApi.md#accountIdPut) | **PUT** /s4s-user/account/{account-id} | 
*S4sFull.SsUserApi* | [**accountIdStatusPut**](docs/SsUserApi.md#accountIdStatusPut) | **PUT** /s4s-user/account/{account-id}/status | 
*S4sFull.SsUserApi* | [**accountIdUserAdd**](docs/SsUserApi.md#accountIdUserAdd) | **POST** /s4s-user/account/{account-id}/user | 
*S4sFull.SsUserApi* | [**accountIdUserChangePwdToken**](docs/SsUserApi.md#accountIdUserChangePwdToken) | **GET** /s4s-user/account/{account-id}/user/{user-id}/changePwdToken | 
*S4sFull.SsUserApi* | [**accountIdUserGet**](docs/SsUserApi.md#accountIdUserGet) | **GET** /s4s-user/account/{account-id}/user/{user-id} | 
*S4sFull.SsUserApi* | [**accountIdUserLogin**](docs/SsUserApi.md#accountIdUserLogin) | **GET** /s4s-user/account/{account-id}/user/{user-id}/login | 
*S4sFull.SsUserApi* | [**accountIdUserPut**](docs/SsUserApi.md#accountIdUserPut) | **PUT** /s4s-user/account/{account-id}/user/{user-id} | 
*S4sFull.SsUserApi* | [**accountIdUserResendEmailConfirmation**](docs/SsUserApi.md#accountIdUserResendEmailConfirmation) | **GET** /s4s-user/account/{account-id}/user/{user-id}/resendEmailConfirmation | 
*S4sFull.SsUserApi* | [**accountLogin**](docs/SsUserApi.md#accountLogin) | **POST** /s4s-user/account/login | 
*S4sFull.SsUserApi* | [**accountLoginOrAdd**](docs/SsUserApi.md#accountLoginOrAdd) | **POST** /s4s-user/account/loginOr | 
*S4sFull.SsUserApi* | [**accountRecover**](docs/SsUserApi.md#accountRecover) | **POST** /s4s-user/account/recover | 
*S4sFull.SsUserApi* | [**accountUserChangePwdToken**](docs/SsUserApi.md#accountUserChangePwdToken) | **GET** /s4s-user/account/user/{user-id}/changePwdToken | 
*S4sFull.SsUserApi* | [**accountUserGet**](docs/SsUserApi.md#accountUserGet) | **GET** /s4s-user/account/user/{user-id} | 
*S4sFull.SsUserApi* | [**accountUserLogin**](docs/SsUserApi.md#accountUserLogin) | **GET** /s4s-user/account/user/{user-id}/login | 
*S4sFull.SsUserApi* | [**accountUserPut**](docs/SsUserApi.md#accountUserPut) | **PUT** /s4s-user/account/user/{user-id} | 
*S4sFull.SsUserApi* | [**accountUserResendEmailConfirmation**](docs/SsUserApi.md#accountUserResendEmailConfirmation) | **GET** /s4s-user/account/user/{user-id}/resendEmailConfirmation | 
*S4sFull.SsUserApi* | [**accountUsernameChangePwdToken**](docs/SsUserApi.md#accountUsernameChangePwdToken) | **GET** /s4s-user/account/username/changePwdToken | 
*S4sFull.SsUserApi* | [**accountUsernameGet**](docs/SsUserApi.md#accountUsernameGet) | **GET** /s4s-user/account/username | 
*S4sFull.SsUserApi* | [**accountUsernameLogin**](docs/SsUserApi.md#accountUsernameLogin) | **GET** /s4s-user/account/username/login | 
*S4sFull.SsUserApi* | [**accountUsernamePut**](docs/SsUserApi.md#accountUsernamePut) | **PUT** /s4s-user/account/username | 
*S4sFull.SsUserApi* | [**accountUsernameResendEmailConfirmation**](docs/SsUserApi.md#accountUsernameResendEmailConfirmation) | **GET** /s4s-user/account/username/resendEmailConfirmation | 
*S4sFull.SsUserApi* | [**authenticate**](docs/SsUserApi.md#authenticate) | **GET** /s4s-user/authenticate | 
*S4sFull.SsUserApi* | [**config**](docs/SsUserApi.md#config) | **GET** /s4s-user/config | 
*S4sFull.SsUserApi* | [**googleLogin**](docs/SsUserApi.md#googleLogin) | **POST** /s4s-user/googleLogin | 
*S4sFull.SsUserApi* | [**htmlConf**](docs/SsUserApi.md#htmlConf) | **GET** /s4s-user/htmlConf | 
*S4sFull.SsUserApi* | [**renewSession**](docs/SsUserApi.md#renewSession) | **GET** /s4s-user/renewSession | 
*S4sFull.SsUserApi* | [**selfAccountGet**](docs/SsUserApi.md#selfAccountGet) | **GET** /s4s-user/selfAccount | 
*S4sFull.SsUserApi* | [**selfAccountKeysAdd**](docs/SsUserApi.md#selfAccountKeysAdd) | **POST** /s4s-user/selfAccount/keys | 
*S4sFull.SsUserApi* | [**selfAccountKeysDel**](docs/SsUserApi.md#selfAccountKeysDel) | **DELETE** /s4s-user/selfAccount/keys/{user-id} | 
*S4sFull.SsUserApi* | [**selfAccountKeysGetAll**](docs/SsUserApi.md#selfAccountKeysGetAll) | **GET** /s4s-user/selfAccount/keys | 
*S4sFull.SsUserApi* | [**selfAccountPrivateDataPut**](docs/SsUserApi.md#selfAccountPrivateDataPut) | **PUT** /s4s-user/selfAccount/privateData | 
*S4sFull.SsUserApi* | [**selfAccountPut**](docs/SsUserApi.md#selfAccountPut) | **PUT** /s4s-user/selfAccount | 
*S4sFull.SsUserApi* | [**selfAccountStatusPut**](docs/SsUserApi.md#selfAccountStatusPut) | **PUT** /s4s-user/selfAccount/status | 
*S4sFull.SsUserApi* | [**selfAccountUserAdd**](docs/SsUserApi.md#selfAccountUserAdd) | **POST** /s4s-user/selfAccount/user | 
*S4sFull.SsUserApi* | [**selfAccountUserChangePwdToken**](docs/SsUserApi.md#selfAccountUserChangePwdToken) | **GET** /s4s-user/selfAccount/user/{user-id}/changePwdToken | 
*S4sFull.SsUserApi* | [**selfAccountUserGet**](docs/SsUserApi.md#selfAccountUserGet) | **GET** /s4s-user/selfAccount/user/{user-id} | 
*S4sFull.SsUserApi* | [**selfAccountUserLogin**](docs/SsUserApi.md#selfAccountUserLogin) | **GET** /s4s-user/selfAccount/user/{user-id}/login | 
*S4sFull.SsUserApi* | [**selfAccountUserPut**](docs/SsUserApi.md#selfAccountUserPut) | **PUT** /s4s-user/selfAccount/user/{user-id} | 
*S4sFull.SsUserApi* | [**selfAccountUserResendEmailConfirmation**](docs/SsUserApi.md#selfAccountUserResendEmailConfirmation) | **GET** /s4s-user/selfAccount/user/{user-id}/resendEmailConfirmation | 
*S4sFull.SsUserApi* | [**selfUserChangePwdToken**](docs/SsUserApi.md#selfUserChangePwdToken) | **GET** /s4s-user/selfUser/changePwdToken | 
*S4sFull.SsUserApi* | [**selfUserGet**](docs/SsUserApi.md#selfUserGet) | **GET** /s4s-user/selfUser | 
*S4sFull.SsUserApi* | [**selfUserLogin**](docs/SsUserApi.md#selfUserLogin) | **GET** /s4s-user/selfUser/login | 
*S4sFull.SsUserApi* | [**selfUserPut**](docs/SsUserApi.md#selfUserPut) | **PUT** /s4s-user/selfUser | 
*S4sFull.SsUserApi* | [**selfUserResendEmailConfirmation**](docs/SsUserApi.md#selfUserResendEmailConfirmation) | **GET** /s4s-user/selfUser/resendEmailConfirmation | 
*S4sFull.SsUserApi* | [**userConfigGet**](docs/SsUserApi.md#userConfigGet) | **GET** /s4s-user/userConfig | 
*S4sFull.SsUserApi* | [**userConfigPut**](docs/SsUserApi.md#userConfigPut) | **PUT** /s4s-user/userConfig | 
*S4sFull.SsUserApi* | [**userUiConfigGet**](docs/SsUserApi.md#userUiConfigGet) | **GET** /s4s-user/userUiConfig | 
*S4sFull.SsUserApi* | [**userUiConfigPut**](docs/SsUserApi.md#userUiConfigPut) | **PUT** /s4s-user/userUiConfig | 
*S4sFull.SsUserNotificationApi* | [**contactus**](docs/SsUserNotificationApi.md#contactus) | **GET** /s4s-user-notification/contactus | 
*S4sFull.SsUserNotificationApi* | [**operatorConf**](docs/SsUserNotificationApi.md#operatorConf) | **GET** /s4s-user-notification/operator/conf/{notification-key} | 
*S4sFull.SsUserNotificationApi* | [**operatorSend**](docs/SsUserNotificationApi.md#operatorSend) | **GET** /s4s-user-notification/operator/send/{notification-key} | 
*S4sFull.SsUserNotificationApi* | [**operatorSendEmail**](docs/SsUserNotificationApi.md#operatorSendEmail) | **POST** /s4s-user-notification/operator/sendEmail | 
*S4sFull.SsUserNotificationApi* | [**userSend**](docs/SsUserNotificationApi.md#userSend) | **GET** /s4s-user-notification/user/send/{notification-key} | 
*S4sFull.SsUserNotificationApi* | [**userSendEmail**](docs/SsUserNotificationApi.md#userSendEmail) | **POST** /s4s-user-notification/user/sendEmail | 


## Documentation for Models

 - [S4sFull.Account](docs/Account.md)
 - [S4sFull.CustomerBill](docs/CustomerBill.md)
 - [S4sFull.CustomerInfo](docs/CustomerInfo.md)
 - [S4sFull.CustomerPack](docs/CustomerPack.md)
 - [S4sFull.CustomerPackSubscription](docs/CustomerPackSubscription.md)
 - [S4sFull.CustomerPayment](docs/CustomerPayment.md)
 - [S4sFull.CustomerPlan](docs/CustomerPlan.md)
 - [S4sFull.CustomerPlanPeriod](docs/CustomerPlanPeriod.md)
 - [S4sFull.Email](docs/Email.md)
 - [S4sFull.EmailRecover](docs/EmailRecover.md)
 - [S4sFull.FinalInterval](docs/FinalInterval.md)
 - [S4sFull.GoogleAuth](docs/GoogleAuth.md)
 - [S4sFull.GoogleTokenId](docs/GoogleTokenId.md)
 - [S4sFull.InlineResponse200](docs/InlineResponse200.md)
 - [S4sFull.InlineResponse2001](docs/InlineResponse2001.md)
 - [S4sFull.InlineResponse2002](docs/InlineResponse2002.md)
 - [S4sFull.InlineResponse2003](docs/InlineResponse2003.md)
 - [S4sFull.InlineResponse2004](docs/InlineResponse2004.md)
 - [S4sFull.InlineResponse2005](docs/InlineResponse2005.md)
 - [S4sFull.InlineResponse2006](docs/InlineResponse2006.md)
 - [S4sFull.InlineResponse2007](docs/InlineResponse2007.md)
 - [S4sFull.Login](docs/Login.md)
 - [S4sFull.OneTimePay](docs/OneTimePay.md)
 - [S4sFull.OperatorConfiguration](docs/OperatorConfiguration.md)
 - [S4sFull.Pack](docs/Pack.md)
 - [S4sFull.PaymentConf](docs/PaymentConf.md)
 - [S4sFull.PaymentPaypal](docs/PaymentPaypal.md)
 - [S4sFull.PaymentRequest](docs/PaymentRequest.md)
 - [S4sFull.Plan](docs/Plan.md)
 - [S4sFull.Price](docs/Price.md)
 - [S4sFull.PricingConf](docs/PricingConf.md)
 - [S4sFull.PricingPolicy](docs/PricingPolicy.md)
 - [S4sFull.PricingTable2Full](docs/PricingTable2Full.md)
 - [S4sFull.PricingTable2Plan](docs/PricingTable2Plan.md)
 - [S4sFull.PricingTableFull](docs/PricingTableFull.md)
 - [S4sFull.PricingTablePack](docs/PricingTablePack.md)
 - [S4sFull.PricingTablePlan](docs/PricingTablePlan.md)
 - [S4sFull.PricingTablePlanCost](docs/PricingTablePlanCost.md)
 - [S4sFull.PricingTableResource](docs/PricingTableResource.md)
 - [S4sFull.PricingUiConf](docs/PricingUiConf.md)
 - [S4sFull.PricingUiConfPack](docs/PricingUiConfPack.md)
 - [S4sFull.PricingUiConfPlan](docs/PricingUiConfPlan.md)
 - [S4sFull.PricingUiConfResource](docs/PricingUiConfResource.md)
 - [S4sFull.ProductConf](docs/ProductConf.md)
 - [S4sFull.QuantiyIntervalPrice](docs/QuantiyIntervalPrice.md)
 - [S4sFull.Resource](docs/Resource.md)
 - [S4sFull.ResourcePatch](docs/ResourcePatch.md)
 - [S4sFull.ResourcePatchResult](docs/ResourcePatchResult.md)
 - [S4sFull.ResourceStatus](docs/ResourceStatus.md)
 - [S4sFull.S4sError](docs/S4sError.md)
 - [S4sFull.Session](docs/Session.md)
 - [S4sFull.StripeAccessCode](docs/StripeAccessCode.md)
 - [S4sFull.StripeConf](docs/StripeConf.md)
 - [S4sFull.StripeCustomer](docs/StripeCustomer.md)
 - [S4sFull.Subscription](docs/Subscription.md)
 - [S4sFull.User](docs/User.md)
 - [S4sFull.UserApi](docs/UserApi.md)
 - [S4sFull.UserConfig](docs/UserConfig.md)
 - [S4sFull.UserContact](docs/UserContact.md)
 - [S4sFull.UserEntity](docs/UserEntity.md)
 - [S4sFull.UserUiConf](docs/UserUiConf.md)
 - [S4sFull.UtUser](docs/UtUser.md)
 - [S4sFull.VariableCost](docs/VariableCost.md)
 - [S4sFull.VariableCostIntervalCost](docs/VariableCostIntervalCost.md)
 - [S4sFull.VariableCostIntervalPerUnit](docs/VariableCostIntervalPerUnit.md)
 - [S4sFull.VariableCostPerUnit](docs/VariableCostPerUnit.md)


## Documentation for Authorization


### tenantid

- **Type**: API key
- **API key parameter name**: tenantid
- **Location**: URL query string

### token

- **Type**: API key
- **API key parameter name**: token
- **Location**: URL query string

