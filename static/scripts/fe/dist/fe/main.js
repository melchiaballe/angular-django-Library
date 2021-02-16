(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-wrapper\">\n  <ui-view name=\"sidemenu\"></ui-view>\n  <main>\n    <ui-view name=\"navigation\"></ui-view>\n    <ui-view name=\"content\"></ui-view>\n    <ui-view name=\"footer\"></ui-view>\n  </main>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Library';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_users_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users.module */ "./src/app/components/users/users.module.ts");
/* harmony import */ var _commons_utils_app_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commons/utils/app.states */ "./src/app/commons/utils/app.states.ts");
/* harmony import */ var _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/partials/partials.module */ "./src/app/components/partials/partials.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_public_public_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/public/public.module */ "./src/app/components/public/public.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./commons/services/interceptors/token.service */ "./src/app/commons/services/interceptors/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"].forRoot(_commons_utils_app_states__WEBPACK_IMPORTED_MODULE_7__["APP_STATES"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _components_public_public_module__WEBPACK_IMPORTED_MODULE_10__["PublicModule"],
                _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_8__["PartialsModule"],
                _components_users_users_module__WEBPACK_IMPORTED_MODULE_6__["UsersModule"],
            ],
            exports: [],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_12__["TokenService"], multi: true },
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/constants/api.constants.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/constants/api.constants.ts ***!
  \****************************************************/
/*! exports provided: USERS, SUBSCRIPTIONS, TRANSACTIONS, CARDS, DELETE_CARD, EDIT_CARD, ADD_CARD, SET_DEFAULT_CARD, USER_SUBSCRIPTIONS, ADD_SUBSCRIPTIONS, CHANGE_SUBSCRIPTIONS, EDIT_BILLING, AUTH_USER, AUTH_USER_ID, CHANGE_PASSWORD, CHANGE_EMAIL, AUTH_LOGIN, AUTH_REGISTER, NEW_USER, FORGOT_PASSWORD, RESET_PASSWORD, ACTIVATE_ACCOUNT, AUTH_DEACTIVATE, CURRENCIES, STRATEGIES, ARCHIVE_STRATEGY, PUBLIC_STRATEGY, PRIVATE_STRATEGY, DEPLOY_STRATEGY, STOP_LIVE_STRATEGY, COPY_SELECTED_STRATEGY, VISIT_SELECTED_STRATEGY, ALLOW_NOTIFICATIONS, DISABLE_NOTIFICATIONS, GET_SPECIFIC_STRATEGY, USER_STRATEGIES, LIVE_USER_STRATEGIES, LIST_STRATEGIES, SPECIFIC_STRATEGY, MARKETPLACE, SIGNALS, STATISTICS, SPECIFIC_STATISTICS, TOTAL_STATISTICS, BACKTEST_LOG, TRADES, SPECIFIC_TRADES, SPECIFIC_TRADES_WAP, TOTAL_TRADES, SPECIFIC_SIGNALS, LIVE_SPECIFIC_STATISTICS, LIVE_TOTAL_STATISTICS, LIVE_SPECIFIC_TRADES, LIVE_SPECIFIC_TRADES_WAP, LIVE_TOTAL_TRADES, LIVE_USER_TRADES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIPTIONS", function() { return SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTIONS", function() { return TRANSACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS", function() { return CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CARD", function() { return DELETE_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CARD", function() { return EDIT_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CARD", function() { return ADD_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEFAULT_CARD", function() { return SET_DEFAULT_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SUBSCRIPTIONS", function() { return USER_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUBSCRIPTIONS", function() { return ADD_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SUBSCRIPTIONS", function() { return CHANGE_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_BILLING", function() { return EDIT_BILLING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER_ID", function() { return AUTH_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD", function() { return CHANGE_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EMAIL", function() { return CHANGE_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN", function() { return AUTH_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_REGISTER", function() { return AUTH_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_USER", function() { return NEW_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGOT_PASSWORD", function() { return FORGOT_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD", function() { return RESET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVATE_ACCOUNT", function() { return ACTIVATE_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_DEACTIVATE", function() { return AUTH_DEACTIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCIES", function() { return CURRENCIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRATEGIES", function() { return STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARCHIVE_STRATEGY", function() { return ARCHIVE_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_STRATEGY", function() { return PUBLIC_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIVATE_STRATEGY", function() { return PRIVATE_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPLOY_STRATEGY", function() { return DEPLOY_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LIVE_STRATEGY", function() { return STOP_LIVE_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPY_SELECTED_STRATEGY", function() { return COPY_SELECTED_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIT_SELECTED_STRATEGY", function() { return VISIT_SELECTED_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOW_NOTIFICATIONS", function() { return ALLOW_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLE_NOTIFICATIONS", function() { return DISABLE_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SPECIFIC_STRATEGY", function() { return GET_SPECIFIC_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STRATEGIES", function() { return USER_STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_USER_STRATEGIES", function() { return LIVE_USER_STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_STRATEGIES", function() { return LIST_STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIFIC_STRATEGY", function() { return SPECIFIC_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKETPLACE", function() { return MARKETPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNALS", function() { return SIGNALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATISTICS", function() { return STATISTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIFIC_STATISTICS", function() { return SPECIFIC_STATISTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_STATISTICS", function() { return TOTAL_STATISTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKTEST_LOG", function() { return BACKTEST_LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADES", function() { return TRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIFIC_TRADES", function() { return SPECIFIC_TRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIFIC_TRADES_WAP", function() { return SPECIFIC_TRADES_WAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_TRADES", function() { return TOTAL_TRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIFIC_SIGNALS", function() { return SPECIFIC_SIGNALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_SPECIFIC_STATISTICS", function() { return LIVE_SPECIFIC_STATISTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_TOTAL_STATISTICS", function() { return LIVE_TOTAL_STATISTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_SPECIFIC_TRADES", function() { return LIVE_SPECIFIC_TRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_SPECIFIC_TRADES_WAP", function() { return LIVE_SPECIFIC_TRADES_WAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_TOTAL_TRADES", function() { return LIVE_TOTAL_TRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_USER_TRADES", function() { return LIVE_USER_TRADES; });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");

/* USERS ENDPOINTS
 */
var USERS = '/api/users/';
/* SUBSCRIPTION ENDPOINTS */
var SUBSCRIPTIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'subscriptions');
var TRANSACTIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'transactions');
var CARDS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'cards');
var DELETE_CARD = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'card/delete');
var EDIT_CARD = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'card/edit');
var ADD_CARD = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'card/add');
var SET_DEFAULT_CARD = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'card/set-default');
var USER_SUBSCRIPTIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(SUBSCRIPTIONS, 'user');
var ADD_SUBSCRIPTIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(SUBSCRIPTIONS, 'add');
var CHANGE_SUBSCRIPTIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(SUBSCRIPTIONS, 'change');
var EDIT_BILLING = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(SUBSCRIPTIONS, 'edit-billing');
/* AUTH ENDPOINTS
 */
var AUTH_USER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'auth');
var AUTH_USER_ID = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'auth-user');
var CHANGE_PASSWORD = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'password');
var CHANGE_EMAIL = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'email');
var AUTH_LOGIN = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'login');
var AUTH_REGISTER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'register');
var NEW_USER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'new-user');
var FORGOT_PASSWORD = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'forgot-password');
var RESET_PASSWORD = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'reset-password');
var ACTIVATE_ACCOUNT = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'activate-account');
var AUTH_DEACTIVATE = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'deactivate');
/* CURRENCY ENDPOINTS */
var CURRENCIES = '/api/currencies/';
/* STRATEGIES ENDPOINTS */
var STRATEGIES = '/api/strategies/';
var ARCHIVE_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'archive');
var PUBLIC_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'make-public');
var PRIVATE_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'make-private');
var DEPLOY_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'deploy');
var STOP_LIVE_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'stop-live');
var COPY_SELECTED_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'copy');
var VISIT_SELECTED_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'visit');
var ALLOW_NOTIFICATIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'allow_notification');
var DISABLE_NOTIFICATIONS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'disable_notification');
var GET_SPECIFIC_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'get-specific-strategy');
var USER_STRATEGIES = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'user-strategies');
var LIVE_USER_STRATEGIES = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'live/user-strategies');
var LIST_STRATEGIES = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'list');
var SPECIFIC_STRATEGY = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'specific-strategy');
var MARKETPLACE = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'marketplace');
var SIGNALS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(STRATEGIES, 'user-signals');
// export const LIVE_SIGNALS = urlsafe(STRATEGIES, 'live/signals');
/* STATISTICS ENDPOINTS */
var STATISTICS = '/api/backtest/statistics/';
var SPECIFIC_STATISTICS = '/api/backtest/statistic/';
var TOTAL_STATISTICS = '/api/backtest/total/statistic/';
var BACKTEST_LOG = '/api/backtest/backtest-log/';
/* TRADES ENDPOINTS */
var TRADES = '/api/backtest/trades/';
var SPECIFIC_TRADES = '/api/backtest/trade/';
var SPECIFIC_TRADES_WAP = '/api/backtest/trade/asset/';
var TOTAL_TRADES = '/api/backtest/total/trade/';
var SPECIFIC_SIGNALS = '/api/backtest/specific-signal/';
/* LIVE ENDPOINTS */
var LIVE_SPECIFIC_STATISTICS = '/api/live/statistic/';
var LIVE_TOTAL_STATISTICS = '/api/live/total/statistic/';
var LIVE_SPECIFIC_TRADES = '/api/live/trade/';
var LIVE_SPECIFIC_TRADES_WAP = '/api/live/trade/asset/';
var LIVE_TOTAL_TRADES = '/api/live/total/trade/';
var LIVE_USER_TRADES = '/api/live/user-trades/';


/***/ }),

/***/ "./src/app/commons/constants/conf.constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/commons/constants/conf.constants.ts ***!
  \*****************************************************/
/*! exports provided: AUTH_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
// TODO: make it dynamic. generate every login. (it looks cool)
// 18 random characters (alphanumeric + special characters + token)
var AUTH_KEY = 'NCqrSTxQCGMK2wDvRL';


/***/ }),

/***/ "./src/app/commons/forms/deactivate.forms.ts":
/*!***************************************************!*\
  !*** ./src/app/commons/forms/deactivate.forms.ts ***!
  \***************************************************/
/*! exports provided: DeactivateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateForm", function() { return DeactivateForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var DeactivateForm = /** @class */ (function () {
    function DeactivateForm(data) {
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            deactivate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.deactivate, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    /* Check if form field is valid
     */
    DeactivateForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    DeactivateForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    DeactivateForm.prototype.defaultValue = function (d) {
        // set a timeout just incase that the value is not yet ready.
        this.form.patchValue(d);
    };
    return DeactivateForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/email.forms.ts":
/*!**********************************************!*\
  !*** ./src/app/commons/forms/email.forms.ts ***!
  \**********************************************/
/*! exports provided: EditEmailForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmailForm", function() { return EditEmailForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

// Class for edit email form
var EditEmailForm = /** @class */ (function () {
    function EditEmailForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
        });
    }
    /* Check if form field is valid
     */
    EditEmailForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    EditEmailForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return EditEmailForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/login.forms.ts":
/*!**********************************************!*\
  !*** ./src/app/commons/forms/login.forms.ts ***!
  \**********************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var LoginForm = /** @class */ (function () {
    function LoginForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
        */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    /* Check if form field is valid
     */
    LoginForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    LoginForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return LoginForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/password.forms.ts":
/*!*************************************************!*\
  !*** ./src/app/commons/forms/password.forms.ts ***!
  \*************************************************/
/*! exports provided: EditPasswordForm, AddPasswordForm, ForgotPasswordForm, ResetPasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordForm", function() { return EditPasswordForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPasswordForm", function() { return AddPasswordForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordForm", function() { return ForgotPasswordForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordForm", function() { return ResetPasswordForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

// Class for edit password form
var EditPasswordForm = /** @class */ (function () {
    //Validators.pattern(this.pattern)
    function EditPasswordForm(data) {
        /* Initialize the form builder
         */
        this.err = null;
        this.submitted = false;
        // Password must contain at least one letter, one number, and one symbol.. 
        this.pattern = "[^\w\d]*(([0-9]+.*[A-Za-z]+.*[#$@!%&*?_]+.*)|[A-Za-z]+.*([0-9]+.*)[#$@!%&*?_]+.*|[A-Za-z]+.*[#$@!%&*?_]+.*([0-9]+.*)|[#$@!%&*?_]+.*([0-9]+.*)[A-Za-z]+.*)";
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            old_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),]),
            confirm_new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),])
        });
    }
    /* Check if form field is valid
     */
    EditPasswordForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    EditPasswordForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return EditPasswordForm;
}());

// Class for add password form
var AddPasswordForm = /** @class */ (function () {
    function AddPasswordForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            confirm_new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    /* Check if form field is valid
     */
    AddPasswordForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    AddPasswordForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return AddPasswordForm;
}());

var ForgotPasswordForm = /** @class */ (function () {
    function ForgotPasswordForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
        });
    }
    /* Check if form field is valid
     */
    ForgotPasswordForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    ForgotPasswordForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return ForgotPasswordForm;
}());

var ResetPasswordForm = /** @class */ (function () {
    function ResetPasswordForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            confirm_new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    /* Check if form field is valid
     */
    ResetPasswordForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    ResetPasswordForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return ResetPasswordForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/register.forms.ts":
/*!*************************************************!*\
  !*** ./src/app/commons/forms/register.forms.ts ***!
  \*************************************************/
/*! exports provided: RegisterForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterForm", function() { return RegisterForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var RegisterForm = /** @class */ (function () {
    function RegisterForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
        */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    /* Check if form field is valid
     */
    RegisterForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    RegisterForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return RegisterForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/user.forms.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/forms/user.forms.ts ***!
  \*********************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return UserForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var UserForm = /** @class */ (function () {
    function UserForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
    }
    /* Check if form field is valid
     */
    UserForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && this.form.get(f).touched && this.submitted);
    };
    /* Check if the form field has an error
     */
    UserForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched && this.submitted);
    };
    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    UserForm.prototype.defaultValue = function (d) {
        // set a timeout just incase that the value is not yet ready.
        this.form.patchValue(d);
    };
    return UserForm;
}());



/***/ }),

/***/ "./src/app/commons/models/deactivate.model.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/models/deactivate.model.ts ***!
  \****************************************************/
/*! exports provided: Deactivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deactivate", function() { return Deactivate; });
var Deactivate = /** @class */ (function () {
    function Deactivate(data) {
        if (data === void 0) { data = {}; }
        this.password = null;
        this.deactivate = null;
        Object.assign(this, data);
    }
    return Deactivate;
}());



/***/ }),

/***/ "./src/app/commons/models/edit-email.model.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/models/edit-email.model.ts ***!
  \****************************************************/
/*! exports provided: EditEmailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmailModel", function() { return EditEmailModel; });
/* Model class for edit email.
 */
var EditEmailModel = /** @class */ (function () {
    function EditEmailModel(data) {
        if (data === void 0) { data = {}; }
        this.email = null;
        Object.assign(this, data);
    }
    return EditEmailModel;
}());

;


/***/ }),

/***/ "./src/app/commons/models/edit-password.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/models/edit-password.model.ts ***!
  \*******************************************************/
/*! exports provided: EditPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordModel", function() { return EditPasswordModel; });
/* Model class for editPassword
 */
var EditPasswordModel = /** @class */ (function () {
    function EditPasswordModel(data) {
        if (data === void 0) { data = {}; }
        this.old_password = null;
        this.new_password = null;
        this.confirm_new_password = null;
        Object.assign(this, data);
    }
    return EditPasswordModel;
}());



/***/ }),

/***/ "./src/app/commons/models/forgot-password.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/commons/models/forgot-password.model.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModel", function() { return ForgotPasswordModel; });
/* Model class for editPassword
 */
var ForgotPasswordModel = /** @class */ (function () {
    function ForgotPasswordModel(data) {
        if (data === void 0) { data = {}; }
        this.email = null;
        Object.assign(this, data);
    }
    return ForgotPasswordModel;
}());



/***/ }),

/***/ "./src/app/commons/models/login.model.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/models/login.model.ts ***!
  \***********************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* Model class for signing in.
 */
var Login = /** @class */ (function () {
    function Login(data) {
        if (data === void 0) { data = {}; }
        this.email = null;
        this.password = null;
        Object.assign(this, data);
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/commons/models/register.model.ts":
/*!**************************************************!*\
  !*** ./src/app/commons/models/register.model.ts ***!
  \**************************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* Model class for signing in.
 */
var Register = /** @class */ (function () {
    function Register(data) {
        if (data === void 0) { data = {}; }
        this.email = null;
        this.first_name = null;
        this.last_name = null;
        this.username = null;
        this.password = null;
        this.confirm_password = null;
        Object.assign(this, data);
    }
    return Register;
}());



/***/ }),

/***/ "./src/app/commons/models/reset-password.model.ts":
/*!********************************************************!*\
  !*** ./src/app/commons/models/reset-password.model.ts ***!
  \********************************************************/
/*! exports provided: ResetPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function() { return ResetPasswordModel; });
/* Model class for editPassword
 */
var ResetPasswordModel = /** @class */ (function () {
    function ResetPasswordModel(data) {
        if (data === void 0) { data = {}; }
        this.token = null;
        this.new_password = null;
        this.confirm_new_password = null;
        Object.assign(this, data);
    }
    return ResetPasswordModel;
}());



/***/ }),

/***/ "./src/app/commons/models/user.model.ts":
/*!**********************************************!*\
  !*** ./src/app/commons/models/user.model.ts ***!
  \**********************************************/
/*! exports provided: User, ShortUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortUser", function() { return ShortUser; });
/* Model class for User */
var User = /** @class */ (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.id = null;
        this.email = null;
        this.username = null;
        this.first_name = null;
        this.last_name = null;
        this.full_name = null;
        this.has_usable_pass = null;
        this.icon = null;
        this.date_joined = null;
        this.date_updated = null;
        this.permission = null;
        this.live_count = null;
        this.backtest_count = null;
        Object.assign(this, data);
    }
    return User;
}());

var ShortUser = /** @class */ (function () {
    function ShortUser() {
        this.id = null;
        this.email = null;
        this.username = null;
        this.first_name = null;
        this.full_name = null;
        this.last_name = null;
        this.avatar = null;
    }
    return ShortUser;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/services/auth/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _constants_conf_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/conf.constants */ "./src/app/commons/constants/conf.constants.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/commons/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"];
    }
    /* USER LOGIN
     * @desc : sends a request to the backend server to
     *         to check for the credentials and returns
     *         a generated token.
     */
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_LOGIN"], creds)
            .toPromise()
            .then(function (resp) { _this.setToken(resp); _this.authUser(Object(resp).user_id); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /* Forgot Password */
    AuthService.prototype.forgotPassword = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["FORGOT_PASSWORD"], data)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /* Forgot Password */
    AuthService.prototype.resetPassword = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["RESET_PASSWORD"], data)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /* Activate Account */
    AuthService.prototype.activateAccount = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["ACTIVATE_ACCOUNT"], data)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /**REGISTER USER */
    AuthService.prototype.register = function (creds) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_REGISTER"], creds)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /**NEW USER */
    AuthService.prototype.newUser = function (creds) {
        var _this = this;
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["NEW_USER"], creds)
            .toPromise()
            .then(function (resp) { _this.setToken(resp); _this.authUser(Object(resp).user_id); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    /* MANAGE USER TOKEN
     * @desc : manage user token generated from the backend
     *         to be used on authenticated requests
     */
    AuthService.prototype.setToken = function (token) {
        // save the generated token to the local storage
        window.localStorage[_constants_conf_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]] = JSON.stringify(token);
        return;
    };
    AuthService.prototype.getToken = function () {
        // fetch the generated token from the storage
        var d = window.localStorage[_constants_conf_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]];
        if (!d)
            return null;
        return JSON.parse(d);
    };
    AuthService.prototype.getUser = function () {
        this.user_id = this.getToken().user_id;
        if (this.user.id === "") {
            this.authUser(this.user_id);
        }
    };
    AuthService.prototype.rmToken = function () {
        // clear the token from the local storage.
        window.localStorage.clear();
    };
    /* MANAGE USER INSTANCE
     * @desc : manage user instance.
     */
    AuthService.prototype.authenticated = function () {
        // check if the user is authenticated
        return this.getToken() ? true : false;
    };
    AuthService.prototype.setuser = function () {
        var _this = this;
        // save the user's instance
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_USER"])
            .toPromise()
            .then(function (resp) { _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](resp); })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthService.prototype.getuser = function () {
        // fetch the user instance
        if (this.user.id == null) {
            // sends a request from the backend to
            // get the data.
            this.setuser();
        }
        return this.user;
    };
    AuthService.prototype.authUser = function (id) {
        var _this = this;
        this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_USER_ID"], { params: { 'id': id } }).subscribe(function (result) {
            _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](result);
        }, function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.getActivatedUser = function (token) {
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["ACTIVATE_ACCOUNT"], { params: token })
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/commons/services/auth/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/commons/services/auth/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/commons/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    /* USER UPDATE
     * @desc : sends a request to the backend server to update
     *         the user's information.
     */
    UserService.prototype.update = function (data) {
        var _this = this;
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_USER"], data)
            .toPromise()
            .then(function (resp) { _this.auth.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](resp); return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    UserService.prototype.updatePassword = function (data) {
        return this.http.put(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PASSWORD"], data)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    UserService.prototype.updateEmail = function (data) {
        return this.http.put(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["CHANGE_EMAIL"], data)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    UserService.prototype.addPassword = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PASSWORD"], data)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    UserService.prototype.deactivate = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_DEACTIVATE"], data)
            .toPromise()
            .then(function (resp) { return resp; })
            .catch(function (err) { return Promise.reject(err); });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/commons/services/interceptors/token.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/commons/services/interceptors/token.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenService = /** @class */ (function () {
    function TokenService(auth, cookie) {
        this.auth = auth;
        this.cookie = cookie;
    }
    TokenService.prototype.intercept = function (r, n) {
        // const exclude_link = ['/api/users/subscriptions/', '/api/users/auth/forgot-password/',
        //                      '/api/users/auth/reset-password/', '/api/users/auth/activate-account/'];
        // if (exclude_link.indexOf(r.url) === -1) {
        //   r = r.clone({
        //     setHeaders: {
        //       'X-CSRFToken'   : this.csrfToken(),
        //       'Authorization' : this.token(),
        //     }
        //   });
        // }
        var token = this.auth.getToken();
        if (token == null) {
            r = r.clone({
                setHeaders: {
                    'X-CSRFToken': this.csrfToken(),
                }
            });
            return n.handle(r).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
                if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"])
                    return resp;
            }));
        }
        else {
            r = r.clone({
                setHeaders: {
                    'X-CSRFToken': this.csrfToken(),
                    'Authorization': this.token(),
                }
            });
            return n.handle(r).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
                if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"])
                    return resp;
            }));
        }
        // return n.handle(r).pipe(tap(
        //   resp => {
        //     if (resp instanceof HttpResponse) return resp;
        //   }
        // ));
    };
    // Get user token from the local storage
    // and format if to be placed into the request header.
    TokenService.prototype.token = function () {
        var t = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](this.auth.getToken(), ['token'], null);
        return "Token " + t;
    };
    TokenService.prototype.csrfToken = function () {
        var xtoken = this.cookie.get('csrftoken');
        return xtoken;
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/commons/services/navigation/navigation.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/commons/services/navigation/navigation.service.ts ***!
  \*******************************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.headerTitle = 'Dashboard';
        this.hasLoaded = false;
        this.isLoading = false;
        this.backtestLimit = false;
        this.liveLimit = false;
    }
    NavigationService.prototype.changeHeaderTitle = function (title) {
        this.headerTitle = title;
    };
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/commons/utils/app.states.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/utils/app.states.ts ***!
  \*********************************************/
/*! exports provided: APP_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATES", function() { return APP_STATES; });
/* harmony import */ var src_app_components_users_users_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/users/users.states */ "./src/app/components/users/users.states.ts");
/* harmony import */ var src_app_components_public_public_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/public/public.states */ "./src/app/components/public/public.states.ts");


var APP_STATES = {
    otherwise: '/login/',
    states: [].concat(src_app_components_users_users_states__WEBPACK_IMPORTED_MODULE_0__["USER_STATES"], src_app_components_public_public_states__WEBPACK_IMPORTED_MODULE_1__["PUBLIC_STATES"])
};


/***/ }),

/***/ "./src/app/commons/utils/http.utils.ts":
/*!*********************************************!*\
  !*** ./src/app/commons/utils/http.utils.ts ***!
  \*********************************************/
/*! exports provided: urlsafe, queryparams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlsafe", function() { return urlsafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryparams", function() { return queryparams; });
/* Re-format the URL parameters for
 * readbility
 */
function urlsafe(url) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return url.concat(params.join("/"), '/');
}
function queryparams(data) {
    return "?" + Object.keys(data).map(function (key) { return key + "=" + encodeURIComponent(data[key]); }).join('&');
}


/***/ }),

/***/ "./src/app/commons/utils/layout.utils.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/utils/layout.utils.ts ***!
  \***********************************************/
/*! exports provided: ContentOnly, NavContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnly", function() { return ContentOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContent", function() { return NavContent; });
/* harmony import */ var src_app_components_partials_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/partials/side-menu/side-menu.component */ "./src/app/components/partials/side-menu/side-menu.component.ts");
/* harmony import */ var src_app_components_partials_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/partials/navigation/navigation.component */ "./src/app/components/partials/navigation/navigation.component.ts");
/* harmony import */ var src_app_components_partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/partials/footer/footer.component */ "./src/app/components/partials/footer/footer.component.ts");



function ContentOnly(content) {
    return { content: content };
}
function NavContent(content) {
    return {
        sidemenu: src_app_components_partials_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__["SideMenuComponent"],
        navigation: src_app_components_partials_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"],
        content: content,
        footer: src_app_components_partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
    };
}


/***/ }),

/***/ "./src/app/commons/utils/security.utils.ts":
/*!*************************************************!*\
  !*** ./src/app/commons/utils/security.utils.ts ***!
  \*************************************************/
/*! exports provided: LoginRequired, Disconnect, Deactivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequired", function() { return LoginRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disconnect", function() { return Disconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deactivate", function() { return Deactivate; });
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "./src/app/commons/models/user.model.ts");


/* LOGIN REQUIRED
 * @desc : callback function that will check and will not pass
 *         users that are not logged in.
 */
function LoginRequired(t) {
    var auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), state = t.router.stateService;
    if (!auth.authenticated())
        return state.target('login');
}
/* DISCONNECT
 * @desc : callback function that will log user out.
 *         (removes/clear the user token)
 */
function Disconnect(t) {
    var auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), state = t.router.stateService;
    if (auth.authenticated()) {
        auth.rmToken();
        auth.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    return state.target('login', { next: '/dashboard/' });
}
function Deactivate(t) {
    var auth = t.injector().get(_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), state = t.router.stateService;
    if (auth.authenticated()) {
        auth.rmToken();
        auth.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    return state.target('log-in', { "deactivate": true }, { next: '/dashboard/' });
}


/***/ }),

/***/ "./src/app/components/partials/footer/footer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/partials/footer/footer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/footer/footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/partials/footer/footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"d-flex justify-content-between align-items-center\">\n    <small>\n      <a href=\"\">© 2019 SignalsBench. All Rights Reserved</a>\n    </small>\n    <div class=\"navbar\">\n      <a href=\"\">YouTube</a>\n      <a href=\"\">Twitter</a>\n      <a href=\"\">Instagram</a>\n      <a href=\"\">Blog</a>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/partials/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/partials/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/partials/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg main-nav\">\n  <div>\n    <ul class=\"navbar-nav \">\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-active\">{{ this.nav.headerTitle }}</a>\n        </li>\n      </ul>\n  </div>\n\n  <div class=\"nav-right\">\n      <div class=\"profile\">\n        <div class=\"profile--avatar no-photo-{{ auth.user.color }}\">{{ auth.user.username }}</div>\n      </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/partials/navigation/navigation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/partials/navigation/navigation.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(state, nav, auth) {
        this.state = state;
        this.nav = nav;
        this.auth = auth;
        this.backtestLimit = 0;
        this.liveCount = 0;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.auth.user.id == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.auth.setuser()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.auth.getUser();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/partials/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/partials/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/partials.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/partials/partials.module.ts ***!
  \********************************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/partials/navigation/navigation.component.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/components/partials/side-menu/side-menu.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/partials/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ],
            declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
        })
    ], PartialsModule);
    return PartialsModule;
}());



/***/ }),

/***/ "./src/app/components/partials/side-menu/side-menu.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/partials/side-menu/side-menu.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/side-menu/side-menu.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/partials/side-menu/side-menu.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\">\n    <a href=\"\" class=\"nav-brand\">\n        <img src=\"/static/images/logo.png\"\n        srcset=\"/static/images/logo@2x.png 2x,\n                /static/images/logo@3x.png 3x\"\n        class=\"logo\">\n        Library\n    </a>\n    <ul class=\"sidebar--links navbar-nav\">\n        <li class=\"sidebar--item \" [ngClass]=\"{active: state.includes('dashboard') }\">\n            <a (click)=\"onDashboardClick($event)\"><i class=\"la la-home\"></i>Dashboard</a>\n        </li>\n        <li class=\"sidebar--item\">\n            <a><i class=\"la la-question-circle\"></i>Help Docs</a>\n        </li>\n        <li class=\"sidebar--item\" [ngClass]=\"{active: state.includes('settings') }\">\n          <a (click)='onSettingsClick($event)'><i class=\"la la-cogs\"></i>Settings</a>\n        </li>\n        <li class=\"sidebar--item\" [ngClass]=\"{active: state.includes('logout') }\">\n          <a (click)='onLogoutClick($event)'><i class=\"la la-sign-out-alt\"></i>Logout</a>\n        </li>\n    </ul>\n</aside>\n\n\n"

/***/ }),

/***/ "./src/app/components/partials/side-menu/side-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/partials/side-menu/side-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(state, nav) {
        this.state = state;
        this.nav = nav;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent.prototype.onDashboardClick = function (event) {
        event.preventDefault();
        this.state.go('dashboard');
    };
    SideMenuComponent.prototype.onSignalsClick = function (event) {
        event.preventDefault();
        this.state.go('signals');
    };
    SideMenuComponent.prototype.onMarketplaceClick = function (event) {
        event.preventDefault();
        this.state.go('marketplace');
    };
    SideMenuComponent.prototype.onStrategiesClick = function (event) {
        event.preventDefault();
        this.state.go('strategies');
    };
    SideMenuComponent.prototype.onCreateStrategyClick = function (event) {
        event.preventDefault();
        this.state.go('create-strategy');
    };
    SideMenuComponent.prototype.onLogoutClick = function (event) {
        event.preventDefault();
        this.state.go('logout');
    };
    SideMenuComponent.prototype.onSettingsClick = function (event) {
        event.preventDefault();
        this.state.go('settings');
    };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/components/partials/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/components/partials/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_core__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/public/activate-account/activate-account.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/public/activate-account/activate-account.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/public/activate-account/activate-account.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/public/activate-account/activate-account.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.error\" class=\"alert alert-warning\">\n    <span>{{ this.error }}</span>\n</div>\n\n<div *ngIf=\"this.isSuccessful\" class=\"alert alert-success\">\n    <span>Account Activated.</span><br>\n    <span><a (click)='redirectLogin()'>Login</a></span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/public/activate-account/activate-account.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/public/activate-account/activate-account.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ActivateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateAccountComponent", function() { return ActivateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivateAccountComponent = /** @class */ (function () {
    function ActivateAccountComponent(auth, state) {
        this.auth = auth;
        this.state = state;
        this.isSuccessful = false;
    }
    ActivateAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.state.params['token'];
        // send Welcome Email after Activation
        this.auth.activateAccount({ 'token': this.token })
            .then(function (resp) {
            _this.isSuccessful = true;
            _this.auth.getActivatedUser({ 'token': _this.token })
                .then(function (user) {
                _this.auth.setToken({ 'token': user[0].key });
                _this.state.go('dashboard-activated', { 'activated': true });
            });
        })
            .catch(function (err) {
            _this.error = err.error.non_field_errors;
        });
    };
    ActivateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate-account',
            template: __webpack_require__(/*! ./activate-account.component.html */ "./src/app/components/public/activate-account/activate-account.component.html"),
            styles: [__webpack_require__(/*! ./activate-account.component.css */ "./src/app/components/public/activate-account/activate-account.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], ActivateAccountComponent);
    return ActivateAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/public/forgot-password/forgot-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/public/forgot-password/forgot-password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/public/forgot-password/forgot-password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/public/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container p-5\">\n\n    <div>\n      <div class=\"text-center mb-5\">\n        <h4 class=\"section-title mb-3\">Forgot Password</h4>\n        <div *ngIf=\"successForgotPassword\" class=\"alert alert-success\">\n          <span>We have sent you an email with the reset password link. Please check your email.</span>\n        </div>\n         <p class=\"help-text w-75 m-auto\">Please enter your account's email address. We will send you a reset password link to your email address.</p>\n      </div>\n      <div class=\"form-container m-auto\">\n          <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n              <span [hidden]=\"!this.hasError\" class=\"text-danger\"><p>{{ form.err }}</p></span>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" formControlName=\"email\" (input)=\"inputChange($event.target.value)\" type=\"text\">\n                <span [hidden]=\"!form.hasError('email', 'required')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\n                <span [hidden]=\"!form.hasError('email', 'email')\" class=\"text-danger\"><p><small>Invalid email format.</small></p></span>\n              </div>\n\n              <div class=\"form-group text-center\">\n                <button [disabled]=\"this.sending\" type=\"submit\" class=\"btn btn-primary\">Send Link</button>\n              </div>\n              <br/>\n              <div class=\"form-group text-center\">\n              <a (click)='redirectLogin()'>Back to Home</a>\n            </div>\n          </form>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/public/forgot-password/forgot-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/public/forgot-password/forgot-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_models_forgot_password_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/models/forgot-password.model */ "./src/app/commons/models/forgot-password.model.ts");
/* harmony import */ var src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/forms/password.forms */ "./src/app/commons/forms/password.forms.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(auth, state) {
        this.auth = auth;
        this.state = state;
        this.successForgotPassword = false;
        this.sending = false;
        this.errors = {};
        this.hasError = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.form = new src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordForm"](new src_app_commons_models_forgot_password_model__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordModel"]);
    };
    ForgotPasswordComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // send the form data to the backend if the value
        // format are valid.
        this.form.submitted = true;
        this.form.err = "";
        if (valid) {
            this.sending = true;
            this.auth.forgotPassword(value)
                .then(function (resp) {
                _this.successForgotPassword = true;
            })
                .catch(function (err) {
                console.log(err.error);
                _this.form.err = err.error.email;
                _this.hasError = true;
                _this.sending = false;
            });
        }
    };
    ForgotPasswordComponent.prototype.inputChange = function (value) {
        if (this.hasError === true) {
            this.hasError = false;
        }
        if (this.sending === true) {
            this.sending = false;
        }
    };
    ForgotPasswordComponent.prototype.redirectLogin = function () {
        if (this.auth.authenticated()) {
            this.state.go('logout');
        }
        else {
            this.state.go('login');
        }
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/components/public/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/public/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/public/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/public/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/public/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/public/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-5\">\n\n    <h3 class=\"section-title mb-3\">Login</h3>\n\n    <div *ngIf=\"hasDeactivated\" class=\"alert alert-warning\">\n        <p>Your account has been deactivated. Your personal data will be deleted within 48 hours.</p>\n    </div>\n    <div *ngIf=\"new\" class=\"alert alert-warning\">\n        <p>Check your email and activate your account.</p>\n    </div>\n    <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n        <span [hidden]=\"!form.err\" class=\"text-danger\">Invalid Email/Password. Please try again.</span>\n        <!-- <span *ngIf=\"hasError\" class=\"text-danger\"><p>Invalid Email/Password. Please try again.</p></span> -->\n        <div>\n            <label>Email:</label>\n            <input class=\"form-control\" formControlName=\"email\" (input)=\"inputChange($event.target.value)\" type=\"text\">\n            <span *ngIf=\"form.hasError('email', 'required')\" class=\"text-danger\"><p><small>Email is required.</small></p></span>\n            <span *ngIf=\"form.hasError('email', 'email')\" class=\"text-danger\"><p><small>Invalid email format.</small></p></span>\n        </div>\n        <div>\n            <label>Password:</label>\n            <input class=\"form-control\" formControlName=\"password\" (input)=\"inputChange($event.target.value)\" type=\"password\">\n            <span *ngIf=\"form.hasError('password', 'required')\" class=\"text-danger\"><p><small>Password is required.</small></p></span>\n        </div>\n        <br>\n        <button class=\"btn btn-primary\" type=\"submit\">Login</button>\n    </form><br>\n    \n\n    <div class=\"form-group\">\n        <p><a (click)='forgotPassword()' class=\"mb-1\">Forgot Password</a></p>\n        <p><a (click)='register()'>Don't have an account?</a></p>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/public/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/public/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_forms_login_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/forms/login.forms */ "./src/app/commons/forms/login.forms.ts");
/* harmony import */ var src_app_commons_models_login_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/models/login.model */ "./src/app/commons/models/login.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, state) {
        this.auth = auth;
        this.state = state;
        this.isActivated = false;
        this.hasError = false;
        this.hasDeactivated = false;
        this.new = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize the form.
        this.form = new src_app_commons_forms_login_forms__WEBPACK_IMPORTED_MODULE_3__["LoginForm"](new src_app_commons_models_login_model__WEBPACK_IMPORTED_MODULE_4__["Login"]);
        this.isActivated = this.state.params['is_activated'];
        if (this.auth.authenticated())
            return this.state.go('dashboard');
        console.log('Authenticated');
        if (this.state.params.deactivate === 'true') {
            this.hasDeactivated = true;
            setTimeout(function () {
                _this.hasDeactivated = false;
            }, 3000);
        }
        if (this.state.params.new === 'true') {
            this.new = true;
            setTimeout(function () {
                _this.new = false;
            }, 3000);
        }
    };
    LoginComponent.prototype.inputChange = function (value) {
        if (this.hasError === true) {
            this.hasError = false;
        }
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // send the form data to the backend if the value
        // format are valid.
        this.form.submitted = true;
        if (valid) {
            this.auth.login(value)
                .then(function (resp) {
                // redirect the user to the last page
                // he/she tried to access before logging in
                try {
                    // gets the first matched url
                    var prevState = _this.state.get().filter(function (state) { return state.$$state().url.exec(_this.state.params.next); });
                    if (prevState.length !== 0) {
                        var redirectUrl = prevState.shift().name;
                        if (redirectUrl != 'login') {
                            if (redirectUrl === 'forgot-password' || redirectUrl === 'reset-password' || redirectUrl === 'activate-account') {
                                _this.state.go('dashboard');
                            }
                            else {
                                _this.state.go(redirectUrl);
                            }
                        }
                    }
                    else {
                        _this.state.go('dashboard');
                    }
                }
                catch (error) {
                    _this.state.go('login');
                }
            })
                .catch(function (err) {
                _this.form.err = err;
            });
        }
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.state.go('forgot-password');
    };
    LoginComponent.prototype.register = function () {
        this.state.go('register');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/public/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/public/public.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/public/public.module.ts ***!
  \****************************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/public/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/public/register/register.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/components/public/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/components/public/reset-password/reset-password.component.ts");
/* harmony import */ var _activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activate-account/activate-account.component */ "./src/app/components/public/activate-account/activate-account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"], _activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_8__["ActivateAccountComponent"]]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/components/public/public.states.ts":
/*!****************************************************!*\
  !*** ./src/app/components/public/public.states.ts ***!
  \****************************************************/
/*! exports provided: PUBLIC_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_STATES", function() { return PUBLIC_STATES; });
/* harmony import */ var src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/public/login/login.component.ts");
/* harmony import */ var src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/public/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/components/public/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/components/public/reset-password/reset-password.component.ts");
/* harmony import */ var _activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activate-account/activate-account.component */ "./src/app/components/public/activate-account/activate-account.component.ts");







var PUBLIC_STATES = [
    {
        name: 'login',
        url: '/login/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]),
        params: { next: window.location.pathname }
    },
    {
        name: 'register-login',
        url: '/login/:new',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]),
        params: { next: window.location.pathname }
    },
    {
        name: 'logout',
        url: '/logout/',
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_2__["Disconnect"]
    },
    {
        name: 'log-out',
        url: '/logout/',
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_2__["Deactivate"]
    },
    {
        name: 'log-in',
        url: '/login/:deactivate',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]),
        params: { next: window.location.pathname }
    },
    {
        name: 'register',
        url: '/register/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]),
        params: { next: window.location.pathname }
    },
    {
        name: 'forgot-password',
        url: '/forgot-password/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]),
    },
    {
        name: 'reset-password',
        url: '/reset-password/:token',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]),
    },
    {
        name: 'activate-account',
        url: '/activate-account/:token',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_6__["ActivateAccountComponent"])
    },
];


/***/ }),

/***/ "./src/app/components/public/register/register.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/public/register/register.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/public/register/register.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/public/register/register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container p-5\">\n    <h3 class=\"section-title mb-3\">Register</h3>\n\n    <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n        <div>\n            <label>First Name:</label>\n            <input class=\"form-control\" formControlName=\"first_name\" type=\"text\">\n            <span [hidden]=\"form.valid('first_name')\" class=\"text-danger\"><p><small>First name is required.</small></p></span>\n        </div>\n\n        <div>\n            <label>Last Name:</label>\n            <input class=\"form-control\" formControlName=\"last_name\" type=\"text\">\n            <span [hidden]=\"form.valid('last_name')\" class=\"text-danger\"><p><small>Last name is required.</small></p></span>\n        </div>\n\n        <div>\n          <label>Username:</label>\n          <br>\n          <small>Please note that you cannot change your username after sign up.</small>\n          <input class=\"form-control\" formControlName=\"username\" (input)=\"usernameInputChange($event.target.value)\" type=\"text\">\n          <span [hidden]=\"form.valid('username')\" class=\"text-danger\"><p><small>Username is required.</small></p></span>\n          <span *ngIf=\"this.hasUsernameError\" class=\"text-danger\"><p><small>{{ this.usernameErr }}</small></p></span>\n          <!-- <span [hidden]=\"!form.err\" class=\"text-danger\"><p><small>{{ this.usernameErr }}</small></p></span> -->\n        </div>\n\n        <div>\n            <label>Email:</label>\n            <input class=\"form-control\" formControlName=\"email\" (input)=\"emailInputChange($event.target.value)\" type=\"text\">\n            <span *ngIf=\"form.hasError('email', 'required')\" class=\"text-danger\"><p><small>Email is required.</small></p></span>\n            <span *ngIf=\"form.hasError('email', 'email')\" class=\"text-danger\"><p><small>Invalid email format.</small></p></span>\n            <span *ngIf=\"this.hasEmailError\" class=\"text-danger\"><p><small>{{ this.emailErr }}</small></p></span>\n        </div>\n\n        <div>\n            <label>Password:</label>\n            <input class=\"form-control\" formControlName=\"password\" (input)=\"passwordInputChange($event.target.value)\" type=\"password\">\n            <span *ngIf=\"this.mismatchedPassword\" class=\"text-danger\"><p><small>{{ this.passwordErr }}</small></p></span>\n            <span [hidden]=\"form.valid('password')\" class=\"text-danger\"><p><small>Password is required.</small></p></span>\n        </div>\n        <div>\n            <label>Confirm Password:</label>\n            <input class=\"form-control\" formControlName=\"confirm_password\" (input)=\"passwordInputChange($event.target.value)\" type=\"password\">\n            <span *ngIf=\"this.mismatchedPassword\" class=\"text-danger\"><p><small>{{ this.passwordErr }}</small></p></span>\n            <span [hidden]=\"form.valid('confirm_password')\" class=\"text-danger\"><p><small>Password is required.</small></p></span>\n      </div>\n        <br>\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"this.disable\">Register</button>\n    </form>\n\n    <div class=\"form-group text-center mt-5\">\n        <p><a (click)='redirectLogin()'>Back to Home</a></p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/public/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/public/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_forms_register_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/forms/register.forms */ "./src/app/commons/forms/register.forms.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_models_register_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/models/register.model */ "./src/app/commons/models/register.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, state) {
        this.auth = auth;
        this.state = state;
        this.usernameErr = "";
        this.emailErr = "";
        this.passwordErr = "";
        this.hasEmailError = false;
        this.hasUsernameError = false;
        this.mismatchedPassword = false;
        this.disable = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = new src_app_commons_forms_register_forms__WEBPACK_IMPORTED_MODULE_1__["RegisterForm"](new src_app_commons_models_register_model__WEBPACK_IMPORTED_MODULE_4__["Register"]);
    };
    RegisterComponent.prototype.usernameInputChange = function (value) {
        if (this.hasUsernameError === true) {
            return this.hasUsernameError = false;
        }
    };
    RegisterComponent.prototype.emailInputChange = function (value) {
        if (this.hasEmailError === true) {
            return this.hasEmailError = false;
        }
    };
    RegisterComponent.prototype.passwordInputChange = function (value) {
        if (this.mismatchedPassword === true) {
            return this.mismatchedPassword = false;
        }
    };
    RegisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // send the form data to the backend if the value
        // format are valid.
        this.form.submitted = true;
        if (valid) {
            this.disable = true;
            this.auth.register(value)
                .then(function (resp) {
                //this.state.go('dashboard');
                _this.state.go('register-login', { 'new': true });
            })
                .catch(function (err) {
                _this.form.err = err.error;
                _this.disable = false;
                // this.usernameErr = err.error.username;
                // this.emailErr = err.error.email;
                if (err.error.email) {
                    _this.emailErr = err.error.email;
                    _this.hasEmailError = true;
                }
                if (err.error.username) {
                    _this.usernameErr = err.error.username;
                    _this.hasUsernameError = true;
                }
                if (err.error.non_field_errors) {
                    _this.passwordErr = err.error.non_field_errors;
                    _this.mismatchedPassword = true;
                }
            });
        }
        else {
            this.disable = false;
            this.form.err = "";
        }
    };
    RegisterComponent.prototype.redirectLogin = function () {
        if (this.auth.authenticated()) {
            this.state.go('logout');
        }
        else {
            this.state.go('login');
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/public/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/public/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/public/reset-password/reset-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/public/reset-password/reset-password.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/public/reset-password/reset-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/public/reset-password/reset-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    <div>\n      <div class=\"text-center mb-5\">\n        <h4 class=\"section-title mb-3\">Reset Password</h4>\n        <div *ngIf=\"this.successResetPassword\" class=\"alert alert-success\">\n          <span>You have successfully reset your password. Please try to <a (click)='redirectLogin()'>login</a>.</span>\n        </div>\n        <p class=\"help-text w-75 m-auto\">Enter the new password on the fields below.</p>\n      </div>\n      <div class=\"form-container m-auto\">\n          <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\n            <span [hidden]=\"!hasError\" class=\"text-danger\"><p>{{ form.err }}</p></span>\n            <div class=\"form-group\">\n              <label>New Password</label>\n              <input type=\"password\" formControlName=\"new_password\" (input)=\"inputChange($event.target.value)\" class=\"form-control\">\n              <span [hidden]=\"!form.hasError('new_password', 'required')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\n            </div>\n            <div class=\"form-group\">\n              <label>Confirm Password</label>\n              <input type=\"password\" formControlName=\"confirm_new_password\" (input)=\"inputChange($event.target.value)\" class=\"form-control\">\n              <span [hidden]=\"!form.hasError('confirm_new_password', 'required')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\n            </div>\n            <div class=\"form-group text-center\">\n              <button type=\"submit\" class=\"btn btn-primary form-control\" [disabled]='this.disable'>Submit</button>\n            </div>\n            <br/>\n          </form>\n          <a (click)='redirectLogin()'>Back to Home</a>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/public/reset-password/reset-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/public/reset-password/reset-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/forms/password.forms */ "./src/app/commons/forms/password.forms.ts");
/* harmony import */ var src_app_commons_models_reset_password_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/models/reset-password.model */ "./src/app/commons/models/reset-password.model.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(auth, state) {
        this.auth = auth;
        this.state = state;
        this.hasError = false;
        this.disable = false;
        this.errors = {};
        this.successResetPassword = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.form = new src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordForm"](new src_app_commons_models_reset_password_model__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordModel"]);
        this.token = this.state.params['token'];
    };
    ResetPasswordComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // send the form data to the backend if the value
        // format are valid.
        this.form.submitted = true;
        this.form.err = "";
        value.token = this.token;
        if (valid) {
            this.disable = true;
            this.auth.resetPassword(value)
                .then(function (resp) {
                _this.successResetPassword = true;
            })
                .catch(function (err) {
                _this.form.err = err.error.non_field_errors;
                _this.hasError = true;
                _this.disable = false;
            });
        }
    };
    ResetPasswordComponent.prototype.inputChange = function (value) {
        if (this.hasError === true) {
            this.hasError = false;
        }
        if (this.disable === true) {
            this.disable = false;
        }
    };
    ResetPasswordComponent.prototype.redirectLogin = function () {
        if (this.auth.authenticated()) {
            this.state.go('logout');
        }
        else {
            this.state.go('login');
        }
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/components/public/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/components/public/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard--panel\">\n\n</div>"

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(nav, auth, state) {
        this.nav = nav;
        this.auth = auth;
        this.state = state;
        this.time = [];
        this.capital = [];
        this.selectedStrategy = "";
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
        this.activated = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.params.activated) {
                            this.activated = true;
                            setTimeout(function () {
                                _this.activated = false;
                            }, 3000);
                        }
                        this.nav.changeHeaderTitle('Dashboard');
                        setTimeout(function () {
                            _this.nav.hasLoaded = false;
                        }, 100);
                        this.auth.getUser();
                        if (!(this.auth.user.id == null)) return [3 /*break*/, 2];
                        // get user information from the backend. (sync)
                        return [4 /*yield*/, this.auth.setuser()];
                    case 1:
                        // get user information from the backend. (sync)
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/users/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/users/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/users/settings/settings.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/settings/settings.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/settings/settings.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/settings/settings.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard--panel\">\n  <div class=\"row\">\n      <div class=\"col-md-8\">\n          <div class=\"panel--white\">\n              <div class=\"panel__header\">\n                <div class=\"panel-label\"><i class=\"fa fa-newspaper-o m-1\"></i>Profile</div>\n              </div>\n              <div class=\"panel__content\">\n                  <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\" class=\"form\" enctype=\"multipart/form-data\">\n                    <div [hidden]=\"!this.editSuccessMessage\" class=\"alert alert-success\"><p>You have successfully updated your info!</p></div>\n                    <div *ngIf=\"!this.ProfNoChanges\" class=\"alert alert-info\"><p>No Changes!</p></div>\n                    <div class=\"row\">\n                        <div class=\"col mb-5\">\n                            <label>First Name</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"first_name\"  placeholder=\"First name\">\n                            <span [hidden]=\"form.valid('first_name')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\n                            <label>Username</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"username\" (input)=\"usernameInputChange($event.target.value)\" placeholder=\"Username\" disabled>\n                            <small class='text-muted'>Please note that you cannot change your username after sign up.</small><br><br>\n\n                            <div [ngSwitch]=\"switchExpression\" class=\"password-field\">\n                                <!-- CHANGE PASSWORD FORM -->\n                                <div *ngSwitchCase=\"'change_password'\">\n                                    <form [formGroup]=\"edit_password_form.form\" (ngSubmit)=\"onEditPasswordSubmit(edit_password_form.form)\">\n                                        <p>Change Password</p>\n                                        <span *ngIf=\"passwordHasError\" class=\"text-danger\">{{ edit_password_form.err }}</span>\n                                        <div class=\"form-group\">\n                                            <label>Old Password</label>\n                                            <input type=\"password\" formControlName=\"old_password\" (input)=\"passwordInputChange($event.target.value)\" class=\"form-control\">\n                                            <span *ngIf=\"edit_password_form.hasError('old_password', 'required')\" class=\"text-danger\"><small>This field is required</small></span>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>New Password</label>\n                                            <input type=\"password\" formControlName=\"new_password\" (input)=\"passwordInputChange($event.target.value)\" class=\"form-control\">\n                                            <span *ngIf=\"edit_password_form.hasError('new_password', 'required')\" class=\"text-danger\"><p><small>This field is required</small></p></span>\n                                            <span *ngIf=\"edit_password_form.hasError('new_password', 'minlength')\" class=\"text-danger\"><p><small>Password should consist of 8 characters</small></p></span>\n                                            <span *ngIf=\"edit_password_form.hasError('new_password', 'pattern')\" class=\"text-danger\"><p><small>Password must contain a number and symbol (#$@!%&*?_)</small></p></span>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Confirm Password</label>\n                                            <input type=\"password\" formControlName=\"confirm_new_password\" (input)=\"passwordInputChange($event.target.value)\" class=\"form-control\">\n                                            <span *ngIf=\"edit_password_form.hasError('confirm_new_password', 'required')\" class=\"text-danger\"><p><small>This field is required</small></p></span>\n                                            <span *ngIf=\"edit_password_form.hasError('confirm_new_password', 'minlength')\" class=\"text-danger\"><p><small>Password should consist of 8 characters.</small></p></span>\n                                            <span *ngIf=\"edit_password_form.hasError('confirm_new_password', 'pattern')\" class=\"text-danger\"><p><small>Password must contain a number and symbol (#$@!%&*?_)</small></p></span>\n                                        </div>\n                                        <div class=\"d-flex justify-content-between\">\n                                            <button (click)=\"cancelPasswordEvent()\" class=\"btn-sm btn-light\">Cancel</button>\n                                            <button class=\"btn-sm btn-primary\" [disabled]=\"this.passbtn_disable\">Update Password</button>\n                                        </div>\n                                    </form>\n                                </div>\n\n                                <!-- CHANGE/CREATE PASSWORD -- SUCCESS -->\n                                <div *ngSwitchCase=\"'success'\">\n                                  <p>Congratulations! You’ve successfully updated your password.</p>\n                                  <div class=\"text-right\">\n                                      <a href=\"\" (click)=\"changePassClick($event)\" class=\"text-right bold changePw\">Change Password</a>\n                                  </div>\n                                </div>\n\n                                <div *ngSwitchDefault>\n                                    <!-- PASSWORD ALREADY CREATED -->\n                                    <div class=\"text-left\">\n                                        <a href=\"\" (click)=\"changePassClick($event)\" class=\"bold changePw\">Change Password</a>\n                                    </div>\n                                    <!-- CPASSWORD ALREADY CREATED-->\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <label>Last Name</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"last_name\" placeholder=\"Last name\">\n                            <span [hidden]=\"form.valid('last_name')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\n                            <label>Color</label>\n                            <select class=\"form-control\" formControlName=\"color\" name=\"color\" id=\"color\">\n                              <option value=\"pink\"><p>Pink</p></option>\n                              <option value=\"success\"><p>Green</p></option>\n                              <option value=\"primary\"><p>Blue</p></option>\n                              <option value=\"orange\"><p>Orange</p></option>\n                              <option value=\"red\"><p>Red</p></option>\n                            </select>\n\n                            <label>E-mail</label>\n\n                            <div [ngSwitch]=\"switchExpression\" class=\"email-field\">\n                                <div *ngSwitchDefault>\n                                  <div>\n                                    <div class=\"bold mt-2\"><p>{{ form.form.value.email }} <a href=\"\" (click)=\"changeEmailClick($event)\" class=\"text-right bold text-muted\"><small>Change Email</small></a></p></div>\n                                  </div>\n                                </div>\n\n\n                                <div *ngSwitchCase=\"'change_email'\">\n                                  <div class=\"bold mt-2\"><p>{{ form.form.value.email }}</p></div>\n\n                                  <form [formGroup]=\"edit_email_form.form\" (ngSubmit)=\"onEditEmailSubmit(edit_email_form.form)\">\n                                    <p>Change Email</p>\n                                    <span *ngIf=\"this.emailHasError\" class=\"text-danger\"><p>This email is already used.</p></span>\n                                    <span *ngIf=\"this.emailNoChanges\" class=\"text-danger\"><p>Nothing Changed</p></span>\n\n                                    <div class=\"form-group\">\n                                      <label>New Email</label>\n                                      <input class=\"form-control\" formControlName=\"email\" (input)=\"emailInputChange($event.target.value)\" type=\"text\">\n                                      <span *ngIf=\"edit_email_form.form.hasError('email', 'required')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\n                                      <span *ngIf=\"edit_email_form.form.hasError('email', 'email')\" class=\"text-danger\"><p><small>Invalid email format.</small></p></span>\n                                      <span *ngIf=\"edit_email_form.form.hasEmailError\" class=\"text-danger\"><p><small>{{ this.emailErr }}</small></p></span>\n                                    </div>\n\n                                    <div class=\"d-flex justify-content-between\">\n                                      <button (click)=\"cancelEmailEvent()\" class=\"btn-sm btn-light\">Cancel</button>\n                                      <button class=\"btn-sm btn-primary\" [disabled]=\"this.emailbtn_disabled\">Update Email</button>\n                                    </div>\n                                  </form>\n                                </div>\n\n                                <!-- CHANGE EMAIL -- SUCCESS -->\n                                <div *ngSwitchCase=\"'edit_email_success'\">\n                                  <p>Congratulations! You’ve successfully updated your email.</p>\n                                  <div class=\"text-right\">\n                                    <a href=\"\" (click)=\"changeEmailClick($event)\" class=\"text-right bold changePw\">Change Email</a>\n                                  </div>\n                                </div>\n                              </div>\n                        </div>\n                    </div>\n\n                    <button class=\"btn-custom-lg btn-primary\">Update Profile</button>\n                    <button class=\"btn-custom-lg btn-light\">Cancel</button>\n\n                </form>\n              </div>\n\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/users/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
/* harmony import */ var src_app_commons_forms_user_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/forms/user.forms */ "./src/app/commons/forms/user.forms.ts");
/* harmony import */ var src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/forms/password.forms */ "./src/app/commons/forms/password.forms.ts");
/* harmony import */ var src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/forms/email.forms */ "./src/app/commons/forms/email.forms.ts");
/* harmony import */ var src_app_commons_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/models/user.model */ "./src/app/commons/models/user.model.ts");
/* harmony import */ var src_app_commons_models_edit_password_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commons/models/edit-password.model */ "./src/app/commons/models/edit-password.model.ts");
/* harmony import */ var src_app_commons_models_edit_email_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commons/models/edit-email.model */ "./src/app/commons/models/edit-email.model.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commons/services/auth/user.service */ "./src/app/commons/services/auth/user.service.ts");
/* harmony import */ var src_app_commons_forms_deactivate_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commons/forms/deactivate.forms */ "./src/app/commons/forms/deactivate.forms.ts");
/* harmony import */ var src_app_commons_models_deactivate_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commons/models/deactivate.model */ "./src/app/commons/models/deactivate.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(auth, state, user, nav) {
        this.auth = auth;
        this.state = state;
        this.user = user;
        this.nav = nav;
        this.file = null;
        this.date = new Date;
        this.checkDeact = true;
        this.editSuccessMessage = false;
        this.usernameHasError = false;
        this.passwordHasError = false;
        this.deactPassHasErr = false;
        this.emailNoChanges = false;
        this.emailHasError = false;
        this.passbtn_disable = false;
        this.deacbtn_disable = false;
        this.emailbtn_disabled = false;
        this.ProfNoChanges = true;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // initialize the form.
                        this.switchExpression = null;
                        this.form = new src_app_commons_forms_user_forms__WEBPACK_IMPORTED_MODULE_2__["UserForm"](new src_app_commons_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]);
                        this.edit_password_form = new src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_3__["EditPasswordForm"](new src_app_commons_models_edit_password_model__WEBPACK_IMPORTED_MODULE_6__["EditPasswordModel"]);
                        this.edit_email_form = new src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_4__["EditEmailForm"](new src_app_commons_models_edit_email_model__WEBPACK_IMPORTED_MODULE_7__["EditEmailModel"]);
                        //this.add_password_form = new AddPasswordForm(new AddPasswordModel);
                        this.deactivate_form = new src_app_commons_forms_deactivate_forms__WEBPACK_IMPORTED_MODULE_11__["DeactivateForm"](new src_app_commons_models_deactivate_model__WEBPACK_IMPORTED_MODULE_12__["Deactivate"]);
                        setTimeout(function () {
                            _this.nav.hasLoaded = false;
                        }, 100);
                        if (!(this.auth.user.id == null)) return [3 /*break*/, 2];
                        // get user information from the backend. (sync)
                        return [4 /*yield*/, this.auth.setuser()];
                    case 1:
                        // get user information from the backend. (sync)
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.auth.getUser();
                        this.token = this.auth.getToken().token;
                        this.nav.changeHeaderTitle('Settings');
                        this.form.defaultValue(this.auth.user);
                        this.checkPass = this.auth.user.has_usable_pass;
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.prototype.emailInputChange = function (value) {
        if (this.emailHasError === true) {
            return this.emailHasError = false;
        }
        if (this.emailNoChanges === true) {
            return this.emailNoChanges = false;
        }
    };
    SettingsComponent.prototype.passwordInputChange = function (value) {
        if (this.passwordHasError === true) {
            this.passwordHasError = false;
        }
    };
    SettingsComponent.prototype.usernameInputChange = function (value) {
        if (this.usernameHasError === true) {
            this.usernameHasError = false;
        }
    };
    SettingsComponent.prototype.emitFiles = function (event) {
        var file = event && event.item(0);
        this.file = file;
    };
    SettingsComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // initiate submission of form.
        this.form.submitted = true;
        // send the form data to the backend if the value
        // format are valid.
        if (valid) {
            if (this.form.form.dirty) {
                this.user.update(value)
                    .then(function (resp) {
                    _this.form.err = "";
                    _this.state.go('user-settings');
                    _this.editSuccessMessage = true;
                    _this.ProfNoChanges = true;
                    setTimeout(function () {
                        _this.editSuccessMessage = false;
                    }, 3000);
                })
                    .catch(function (err) {
                    _this.form.err = err.error.username;
                    if (err.error.username) {
                        _this.usernameHasError = true;
                    }
                });
            }
            else {
                this.ProfNoChanges = false;
            }
        }
    };
    SettingsComponent.prototype.onEditPasswordSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // initiate submission of form.
        this.edit_password_form.submitted = true;
        // send the form data to the backend if the value
        // format are valid.
        if (valid) {
            this.passbtn_disable = true;
            this.user.updatePassword(value)
                // initialize switchExpression to redirect to success view
                // re initialize edit password form to empty fields
                .then(function (resp) { _this.switchExpression = 'success'; _this.edit_password_form = new src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_3__["EditPasswordForm"](new src_app_commons_models_edit_password_model__WEBPACK_IMPORTED_MODULE_6__["EditPasswordModel"]); })
                .catch(function (err) {
                if (err.error.new_password) {
                    _this.edit_password_form.err = "This password is entirely numeric or too common.";
                }
                else if (err.error.non_field_errors) {
                    _this.edit_password_form.err = err.error.non_field_errors;
                }
                else {
                    _this.edit_password_form.err = "Invalid Input. Please re-type New and Confirm Password.";
                }
                if (err) {
                    _this.passwordHasError = true;
                    _this.passbtn_disable = false;
                }
            });
        }
        else {
            this.passbtn_disable = false;
        }
    };
    SettingsComponent.prototype.onEditEmailSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        // initiate submission of form.
        this.edit_email_form.submitted = true;
        // send the form data to the backend if the value
        // format are valid.
        if (value['email'] === this.auth.user.email) {
            this.emailNoChanges = true;
        }
        else {
            this.emailNoChanges = false;
            if (valid) {
                this.emailbtn_disabled = true;
                this.user.updateEmail(value)
                    // initialize switchExpression to redirect to success view
                    // re initialize edit password form to empty fields
                    .then(function (resp) {
                    _this.switchExpression = 'edit_email_success';
                    _this.edit_email_form = new src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_4__["EditEmailForm"](new src_app_commons_models_edit_password_model__WEBPACK_IMPORTED_MODULE_6__["EditPasswordModel"]);
                    _this.form.form.value.email = value['email'];
                    _this.auth.user.email = _this.form.form.value.email;
                })
                    .catch(function (err) {
                    _this.edit_email_form.err = err.error.email;
                    if (_this.edit_email_form.err) {
                        _this.emailHasError = true;
                        _this.emailbtn_disabled = false;
                    }
                });
            }
        }
    };
    // onAddPasswordSubmit({value, valid}: {value: AddPasswordModel, valid:boolean}){
    //   // initiate submission of form.
    //   this.add_password_form.submitted = true;
    //   // send the form data to the backend if the value
    //   // format are valid.
    //   if(valid){
    //     this.user.addPassword(value)
    //       // initialize switchExpression to redirect to success view
    //       // re initialize edit password form to empty fields
    //       .then(resp => { this.switchExpression = 'success'; this.add_password_form = new AddPasswordForm(new AddPasswordModel); this.checkPass = true; })
    //       .catch(err => { this.add_password_form.err = err.error.non_field_errors; });
    //   }
    // }
    SettingsComponent.prototype.changeProfilePic = function ($event) {
        $event.preventDefault();
        this.changePic = !this.changePic;
    };
    SettingsComponent.prototype.changePassClick = function ($event) {
        // prevent href default behavior
        $event.preventDefault();
        // initialize switchExpression to redirect to change password form
        this.switchExpression = 'change_password';
        if (this.passbtn_disable === true) {
            this.passbtn_disable = false;
        }
    };
    SettingsComponent.prototype.changeEmailClick = function ($event) {
        // prevent href default behavior
        $event.preventDefault();
        // initialize switchExpression to redirect to change password form
        this.switchExpression = 'change_email';
        if (this.emailbtn_disabled === true) {
            this.emailbtn_disabled = false;
        }
    };
    SettingsComponent.prototype.cancelEmailEvent = function () {
        // re initialize edit email and add email form to empty fields
        this.edit_email_form = new src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_4__["EditEmailForm"](new src_app_commons_models_edit_email_model__WEBPACK_IMPORTED_MODULE_7__["EditEmailModel"]);
        // initialize switchExpression to redirect to default view
        this.switchExpression = '';
    };
    SettingsComponent.prototype.cancelPasswordEvent = function () {
        // re initialize edit password and add password form to empty fields
        this.edit_password_form = new src_app_commons_forms_password_forms__WEBPACK_IMPORTED_MODULE_3__["EditPasswordForm"](new src_app_commons_models_edit_password_model__WEBPACK_IMPORTED_MODULE_6__["EditPasswordModel"]);
        //this.add_password_form = new AddPasswordForm(new AddPasswordModel);
        // initialize switchExpression to redirect to default view
        this.switchExpression = '';
    };
    SettingsComponent.prototype.deactivateClick = function ($event) {
        // prevent href default behavior
        $event.preventDefault();
        // initialize switchExpression to redirect to change password form
        this.switchExpression1 = 'deactivate_account';
        if (this.deacbtn_disable === true) {
            this.deacbtn_disable = false;
        }
    };
    SettingsComponent.prototype.onDeactivateSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.deactivate_form.submitted = true;
        if (valid) {
            if (value.deactivate !== 'DELETE ACCOUNT') {
                this.checkDeact = false;
                this.deacbtn_disable = false;
            }
            else {
                this.deacbtn_disable = true;
                this.checkDeact = true;
                this.user.deactivate(value)
                    .then(function (resp) { _this.state.go('log-out', { "deactivate": true }); })
                    .catch(function (err) {
                    _this.errorString = "Incorrect Old Password";
                    _this.deactPassHasErr = true;
                    _this.deacbtn_disable = false;
                    // setTimeout(() => {
                    //   this.errorString  = ""
                    // }, 3000)
                });
            }
        }
    };
    SettingsComponent.prototype.deacPassInputChange = function (value) {
        if (this.deactPassHasErr === true) {
            this.deactPassHasErr = false;
        }
    };
    SettingsComponent.prototype.deactivateInputChange = function (value) {
        if (this.checkDeact === false) {
            this.checkDeact = true;
        }
    };
    SettingsComponent.prototype.cancelDeactivateEvent = function () {
        // re initialize edit password and add password form to empty fields
        this.deactivate_form = new src_app_commons_forms_deactivate_forms__WEBPACK_IMPORTED_MODULE_11__["DeactivateForm"](new src_app_commons_models_deactivate_model__WEBPACK_IMPORTED_MODULE_12__["Deactivate"]);
        // initialize switchExpression to redirect to default view
        this.switchExpression1 = '';
    };
    SettingsComponent.prototype.createPassClick = function () {
        // initialize switchExpression to redirect to create password form
        this.switchExpression = 'create_password';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event.target.files']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FileList]),
        __metadata("design:returntype", void 0)
    ], SettingsComponent.prototype, "emitFiles", null);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/users/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/users/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_9__["StateService"],
            src_app_commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/components/users/settings/settings.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/users/dashboard/dashboard.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/components/users/users.states.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.states.ts ***!
  \**************************************************/
/*! exports provided: USER_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATES", function() { return USER_STATES; });
/* harmony import */ var src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/users/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/components/users/settings/settings.component.ts");




var USER_STATES = [
    {
        name: 'dashboard',
        url: '/dashboard/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]),
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_2__["LoginRequired"]
    },
    {
        name: 'dashboard-activated',
        url: '/dashboard/:activated',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]),
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_2__["LoginRequired"]
    },
    {
        name: 'settings',
        url: '/settings/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]),
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_2__["LoginRequired"]
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    pusher: {
        key: 'df021952df2cbae64372',
        cluster: 'ap1',
    },
    stripe: {
        key: 'pk_test_yHHb0DcZ0ZkP1oLLAJxfWqyI00HH3wLgTf'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\Desktop\Projects\angular-django-Library\frontend\scripts\fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map