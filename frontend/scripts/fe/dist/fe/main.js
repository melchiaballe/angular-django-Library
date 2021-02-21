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

module.exports = "\r\n<div class=\"page-wrapper\">\r\n  <ui-view name=\"sidemenu\"></ui-view>\r\n  <main>\r\n    <ui-view name=\"navigation\"></ui-view>\r\n    <ui-view name=\"content\"></ui-view>\r\n    <ui-view name=\"footer\"></ui-view>\r\n  </main>\r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_users_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/users.module */ "./src/app/components/users/users.module.ts");
/* harmony import */ var _commons_utils_app_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commons/utils/app.states */ "./src/app/commons/utils/app.states.ts");
/* harmony import */ var _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/partials/partials.module */ "./src/app/components/partials/partials.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_public_public_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/public/public.module */ "./src/app/components/public/public.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./commons/services/interceptors/token.service */ "./src/app/commons/services/interceptors/token.service.ts");
/* harmony import */ var _components_books_books_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/books/books.module */ "./src/app/components/books/books.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"].forRoot(_commons_utils_app_states__WEBPACK_IMPORTED_MODULE_8__["APP_STATES"]),
                ngx_simple_modal__WEBPACK_IMPORTED_MODULE_5__["SimpleModalModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _components_public_public_module__WEBPACK_IMPORTED_MODULE_11__["PublicModule"],
                _components_partials_partials_module__WEBPACK_IMPORTED_MODULE_9__["PartialsModule"],
                _components_users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModule"],
                _components_books_books_module__WEBPACK_IMPORTED_MODULE_14__["BooksModule"]
            ],
            exports: [],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _commons_services_interceptors_token_service__WEBPACK_IMPORTED_MODULE_13__["TokenService"], multi: true },
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/constants/api.constants.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/constants/api.constants.ts ***!
  \****************************************************/
/*! exports provided: USERS, AUTH_USER, AUTH_USER_ID, CHANGE_EMAIL, AUTH_LOGIN, AUTH_REGISTER, NEW_USER, BOOKS, OWNED_BOOKS, ADD_BOOK, UPDATE_BOOK, CHECKOUT_BOOK, IS_CHECKED_OUT, RETURN_BOOK, BORROWED_BOOKS, COMMENTS, ADD_COMMENT, DELETE_COMMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER_ID", function() { return AUTH_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EMAIL", function() { return CHANGE_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN", function() { return AUTH_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_REGISTER", function() { return AUTH_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_USER", function() { return NEW_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKS", function() { return BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNED_BOOKS", function() { return OWNED_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK", function() { return ADD_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK", function() { return UPDATE_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_BOOK", function() { return CHECKOUT_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CHECKED_OUT", function() { return IS_CHECKED_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETURN_BOOK", function() { return RETURN_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORROWED_BOOKS", function() { return BORROWED_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS", function() { return COMMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT", function() { return ADD_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT", function() { return DELETE_COMMENT; });
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http.utils */ "./src/app/commons/utils/http.utils.ts");

/* USERS ENDPOINTS
 */
var USERS = '/api/users/';
/* AUTH ENDPOINTS
 */
var AUTH_USER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'auth');
var AUTH_USER_ID = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(USERS, 'auth-user');
var CHANGE_EMAIL = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'email');
var AUTH_LOGIN = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'login');
var AUTH_REGISTER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'register');
var NEW_USER = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(AUTH_USER, 'new-user');
/* BOOKS ENDPOINTS */
var BOOKS = '/api/books/';
var OWNED_BOOKS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'owned-books');
var ADD_BOOK = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'add-book');
var UPDATE_BOOK = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'update-book');
var CHECKOUT_BOOK = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'checkout-book');
var IS_CHECKED_OUT = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'is-checked-out');
var RETURN_BOOK = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'return-book');
var BORROWED_BOOKS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'borrowed-books');
/** COMMENTS ENDPOINTS */
var COMMENTS = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'comments');
var ADD_COMMENT = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'add-comment');
var DELETE_COMMENT = Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_0__["urlsafe"])(BOOKS, 'delete-comment');


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

/***/ "./src/app/commons/forms/books.forms.ts":
/*!**********************************************!*\
  !*** ./src/app/commons/forms/books.forms.ts ***!
  \**********************************************/
/*! exports provided: BookForm, UpdateBookForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookForm", function() { return BookForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookForm", function() { return UpdateBookForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var BookForm = /** @class */ (function () {
    function BookForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.author, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.owner),
            is_digital_copy: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.is_digital_copy),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    /* Check if form field is valid
     */
    BookForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && this.form.get(f).touched && this.submitted);
    };
    /* Check if the form field has an error
     */
    BookForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched && this.submitted);
    };
    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    BookForm.prototype.defaultValue = function (d) {
        // set a timeout just incase that the value is not yet ready.
        this.form.patchValue(d);
    };
    return BookForm;
}());

var UpdateBookForm = /** @class */ (function () {
    function UpdateBookForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.id),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.author, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    /* Check if form field is valid
     */
    UpdateBookForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && this.form.get(f).touched && this.submitted);
    };
    /* Check if the form field has an error
     */
    UpdateBookForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched && this.submitted);
    };
    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    UpdateBookForm.prototype.defaultValue = function (d) {
        // set a timeout just incase that the value is not yet ready.
        this.form.patchValue(d);
    };
    return UpdateBookForm;
}());



/***/ }),

/***/ "./src/app/commons/forms/comment.forms.ts":
/*!************************************************!*\
  !*** ./src/app/commons/forms/comment.forms.ts ***!
  \************************************************/
/*! exports provided: CommentForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForm", function() { return CommentForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var CommentForm = /** @class */ (function () {
    function CommentForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.message, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            book_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.book_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.user),
        });
    }
    /* Check if form field is valid
     */
    CommentForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && this.form.get(f).touched && this.submitted);
    };
    /* Check if the form field has an error
     */
    CommentForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched && this.submitted);
    };
    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    CommentForm.prototype.defaultValue = function (d) {
        // set a timeout just incase that the value is not yet ready.
        this.form.patchValue(d);
    };
    return CommentForm;
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

/***/ "./src/app/commons/forms/search.forms.ts":
/*!***********************************************!*\
  !*** ./src/app/commons/forms/search.forms.ts ***!
  \***********************************************/
/*! exports provided: SearchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchForm", function() { return SearchForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var SearchForm = /** @class */ (function () {
    function SearchForm(data) {
        this.err = null;
        this.submitted = false;
        /* Initialize the form builder
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]().group({
            search_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    /* Check if form field is valid
     */
    SearchForm.prototype.valid = function (f) {
        return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    };
    /* Check if the form field has an error
     */
    SearchForm.prototype.hasError = function (f, e) {
        return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    };
    return SearchForm;
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

/***/ "./src/app/commons/models/book.model.ts":
/*!**********************************************!*\
  !*** ./src/app/commons/models/book.model.ts ***!
  \**********************************************/
/*! exports provided: Books */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Books", function() { return Books; });
// export class DeleteCard {
//     customer_token : string = null;
//     card_token: string = null;
//     constructor(data={}) {
//       Object.assign(this, data);
//     }
//   }
var Books = /** @class */ (function () {
    function Books(data) {
        if (data === void 0) { data = {}; }
        this.title = null;
        this.author = null;
        this.location = null;
        this.is_digital_copy = null;
        this.owner = null;
        this.status = null;
        Object.assign(this, data);
    }
    return Books;
}());



/***/ }),

/***/ "./src/app/commons/models/comment.ts":
/*!*******************************************!*\
  !*** ./src/app/commons/models/comment.ts ***!
  \*******************************************/
/*! exports provided: CommentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModel", function() { return CommentModel; });
/* Model class for addPassword
 */
var CommentModel = /** @class */ (function () {
    function CommentModel(data) {
        if (data === void 0) { data = {}; }
        this.message = null;
        this.user = null;
        this.book_id = null;
        Object.assign(this, data);
    }
    return CommentModel;
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

/***/ "./src/app/commons/models/search.model.ts":
/*!************************************************!*\
  !*** ./src/app/commons/models/search.model.ts ***!
  \************************************************/
/*! exports provided: SearchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModel", function() { return SearchModel; });
var SearchModel = /** @class */ (function () {
    function SearchModel(data) {
        if (data === void 0) { data = {}; }
        this.search_text = null;
        Object.assign(this, data);
    }
    return SearchModel;
}());

;


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
            .catch(function (err) { console.log(err); return Promise.reject(err); });
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
        if (this.user.id === '') {
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
    UserService.prototype.updateEmail = function (data) {
        return this.http.put(_constants_api_constants__WEBPACK_IMPORTED_MODULE_3__["CHANGE_EMAIL"], data)
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

/***/ "./src/app/commons/services/books/books.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/commons/services/books/books.service.ts ***!
  \*********************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/api.constants */ "./src/app/commons/constants/api.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = /** @class */ (function () {
    function BooksService(http) {
        this.http = http;
    }
    BooksService.prototype.getAllBooks = function () {
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["BOOKS"]);
    };
    BooksService.prototype.getBorrowedBooks = function () {
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["BORROWED_BOOKS"]);
    };
    BooksService.prototype.getOwnedBooks = function () {
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["OWNED_BOOKS"]);
    };
    BooksService.prototype.addBook = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["ADD_BOOK"], data);
    };
    BooksService.prototype.updateBook = function (data) {
        return this.http.put(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_BOOK"], data);
    };
    BooksService.prototype.checkoutBook = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["CHECKOUT_BOOK"], data);
    };
    BooksService.prototype.getAllComments = function (book_id) {
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["COMMENTS"], { params: { 'book_id': book_id } });
    };
    BooksService.prototype.addComment = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT"], data);
    };
    BooksService.prototype.deleteComment = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT"], data);
    };
    BooksService.prototype.isCheckedOut = function (book_id) {
        return this.http.get(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["IS_CHECKED_OUT"], { params: { 'book_id': book_id } });
    };
    BooksService.prototype.returnBook = function (data) {
        return this.http.post(_constants_api_constants__WEBPACK_IMPORTED_MODULE_2__["RETURN_BOOK"], data);
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BooksService);
    return BooksService;
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
/* harmony import */ var src_app_components_books_books_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/books/books.states */ "./src/app/components/books/books.states.ts");



var APP_STATES = {
    otherwise: '/login/',
    states: [].concat(src_app_components_users_users_states__WEBPACK_IMPORTED_MODULE_0__["USER_STATES"], src_app_components_public_public_states__WEBPACK_IMPORTED_MODULE_1__["PUBLIC_STATES"], src_app_components_books_books_states__WEBPACK_IMPORTED_MODULE_2__["BOOK_STATES"])
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

/***/ "./src/app/components/books/add-book/add-book.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/books/add-book/add-book.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/books/add-book/add-book.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/books/add-book/add-book.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard--panel\">\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non dictum libero. Vestibulum sit amet varius nunc. Sed luctus nisl sed auctor fermentum. Fusce porttitor, orci pharetra dictum laoreet, leo nulla malesuada odio, non dictum ante leo vel magna. Nullam sed dignissim quam. </p>\r\n  <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n      <div>\r\n          <label>Title:</label>\r\n          <input class=\"form-control\" formControlName=\"title\" type=\"text\">\r\n      </div>\r\n\r\n      <div>\r\n          <label>Author:</label>\r\n          <input class=\"form-control\" formControlName=\"author\" type=\"text\">\r\n      </div>\r\n\r\n      <div>\r\n        <label>Location:</label>\r\n        <input class=\"form-control\" formControlName=\"location\" type=\"text\">\r\n      </div>\r\n\r\n      <div>\r\n        <div>\r\n          <input type=\"checkbox\" formControlName=\"is_digital_copy\">\r\n          Is Digital Copy\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"this.disable\">Save</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/books/add-book/add-book.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/books/add-book/add-book.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
/* harmony import */ var src_app_commons_forms_books_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/forms/books.forms */ "./src/app/commons/forms/books.forms.ts");
/* harmony import */ var src_app_commons_models_book_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/models/book.model */ "./src/app/commons/models/book.model.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/services/books/books.service */ "./src/app/commons/services/books/books.service.ts");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
/* harmony import */ var _partials_modals_add_book_messages_add_book_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/modals/add-book-messages/add-book-messages.component */ "./src/app/components/partials/modals/add-book-messages/add-book-messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(nav, booksService, authService, simpleModalService) {
        this.nav = nav;
        this.booksService = booksService;
        this.authService = authService;
        this.simpleModalService = simpleModalService;
        this.default_status = 'available';
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.nav.changeHeaderTitle('Add Book');
        this.intializeForm();
    };
    AddBookComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.booksService.addBook(value).subscribe(function (data) {
                _this.simpleModalService.addModal(_partials_modals_add_book_messages_add_book_messages_component__WEBPACK_IMPORTED_MODULE_7__["AddBookMessagesComponent"], { has_error: false }).subscribe();
                _this.intializeForm();
            }, function (error) {
                _this.simpleModalService.addModal(_partials_modals_add_book_messages_add_book_messages_component__WEBPACK_IMPORTED_MODULE_7__["AddBookMessagesComponent"], { has_error: true }).subscribe();
                _this.intializeForm();
            });
        }
    };
    AddBookComponent.prototype.intializeForm = function () {
        this.form = new src_app_commons_forms_books_forms__WEBPACK_IMPORTED_MODULE_2__["BookForm"](new src_app_commons_models_book_model__WEBPACK_IMPORTED_MODULE_3__["Books"]);
        this.form.form.controls['status'].setValue(this.default_status);
        this.form.form.controls['is_digital_copy'].setValue(false);
    };
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/components/books/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/components/books/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"],
            src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"],
            src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalService"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/components/books/books.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/books/books.module.ts ***!
  \**************************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/components/books/add-book/add-book.component.ts");
/* harmony import */ var _borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borrowed-books/borrowed-books.component */ "./src/app/components/books/borrowed-books/borrowed-books.component.ts");
/* harmony import */ var _owned_books_owned_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owned-books/owned-books.component */ "./src/app/components/books/owned-books/owned-books.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            declarations: [_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__["AddBookComponent"], _borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_3__["BorrowedBooksComponent"], _owned_books_owned_books_component__WEBPACK_IMPORTED_MODULE_4__["OwnedBooksComponent"]]
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ }),

/***/ "./src/app/components/books/books.states.ts":
/*!**************************************************!*\
  !*** ./src/app/components/books/books.states.ts ***!
  \**************************************************/
/*! exports provided: BOOK_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK_STATES", function() { return BOOK_STATES; });
/* harmony import */ var src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/utils/layout.utils */ "./src/app/commons/utils/layout.utils.ts");
/* harmony import */ var src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/utils/security.utils */ "./src/app/commons/utils/security.utils.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/components/books/add-book/add-book.component.ts");
/* harmony import */ var _borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borrowed-books/borrowed-books.component */ "./src/app/components/books/borrowed-books/borrowed-books.component.ts");
/* harmony import */ var _owned_books_owned_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owned-books/owned-books.component */ "./src/app/components/books/owned-books/owned-books.component.ts");





var BOOK_STATES = [
    {
        name: 'add-book',
        url: '/add-book/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__["AddBookComponent"]),
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    },
    {
        name: 'borrowed-books',
        url: '/borrowed-books/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_3__["BorrowedBooksComponent"]),
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    },
    {
        name: 'owned-books',
        url: '/owned-books/',
        views: Object(src_app_commons_utils_layout_utils__WEBPACK_IMPORTED_MODULE_0__["NavContent"])(_owned_books_owned_books_component__WEBPACK_IMPORTED_MODULE_4__["OwnedBooksComponent"]),
        onEnter: src_app_commons_utils_security_utils__WEBPACK_IMPORTED_MODULE_1__["LoginRequired"]
    },
];


/***/ }),

/***/ "./src/app/components/books/borrowed-books/borrowed-books.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/books/borrowed-books/borrowed-books.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/books/borrowed-books/borrowed-books.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/books/borrowed-books/borrowed-books.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard--panel\">\r\n    <form class=\"form-group\" [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n        <div class=\"input-group mb-3\">\r\n            <input type=\"text\" formControlName=\"search_text\" class=\"form-control\" placeholder=\"Search Title\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"submit\"><i class=\"la la-search\"></i></button>\r\n            </div>\r\n            <div class=\"input-group-append\" ngbDropdown>\r\n                <button class=\"btn btn-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"la la-filter\"></i> Filter</button>\r\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" >\r\n                    <a class=\"dropdown-item\" href=\".\" ngbDropdownItem (click)=\"filterClick($event, 'all')\">All</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'available')\">Returned</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'checked out')\">Checked Out</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"mt-4\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Book</th>\r\n                    <th scope=\"col\">Location</th>\r\n                    <th scope=\"col\">Status</th>\r\n                    <th scope=\"col\">Owner</th>\r\n                    <th scope=\"col\">Checkout Date</th>\r\n                    <th scope=\"col\">Return Date</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of books_list\" (click)=\"rowClicked(item.book)\">\r\n                    <th scope=\"row\">\r\n                        <p class=\"mb-0 font-weight-bold\">{{ item.book.title | titlecase }} </p>\r\n                        <small class=\"text-muted\">by: {{ item.book.author | titlecase }}</small>\r\n                    </th>\r\n                    <td><p class=\"mb-0 mt-3\">{{ item.book.location | titlecase }}</p></td>\r\n                    <td>\r\n                        <p class=\"badge badge-pill mb-0 mt-3 badge-info\"  *ngIf=\"item.returned_date !== null\"style=\"color: white;\">\r\n                            Returned\r\n                        </p>\r\n        \r\n                        <p class=\"badge badge-pill mb-0 mt-3 badge-danger\"  *ngIf=\"item.returned_date === null\"style=\"color: white;\">\r\n                            Checked Out\r\n                        </p>\r\n                    </td>\r\n                    <td><p class=\"mb-0 mt-3\"><p class=\"mb-0 mt-3\">{{ item.book.owner.full_name | titlecase }}</p></td>\r\n                    <td><p class=\"mb-0 mt-3\">{{ item.checked_out_date | date:\"medium\" }}</p></td>\r\n                    <td>\r\n                        <button type=\"button\" \r\n                        class=\"btn btn-secondary btn-sm\"  \r\n                        [hidden]=\"item.returned_date !== null\" \r\n                        (click)=\"returnBook($event, item)\">\r\n                            Return Book\r\n                        </button> \r\n\r\n                        <p class=\"mb-0 mt-3\" [hidden]=\"item.returned_date === null\">{{ item.returned_date | date:\"medium\" }}\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/books/borrowed-books/borrowed-books.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/books/borrowed-books/borrowed-books.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BorrowedBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowedBooksComponent", function() { return BorrowedBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/services/books/books.service */ "./src/app/commons/services/books/books.service.ts");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
/* harmony import */ var src_app_commons_forms_search_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/forms/search.forms */ "./src/app/commons/forms/search.forms.ts");
/* harmony import */ var src_app_commons_models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/models/search.model */ "./src/app/commons/models/search.model.ts");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
/* harmony import */ var _partials_modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/modals/book-details/book-details.component */ "./src/app/components/partials/modals/book-details/book-details.component.ts");
/* harmony import */ var _partials_modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/modals/confirmation-message/confirmation-message.component */ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BorrowedBooksComponent = /** @class */ (function () {
    function BorrowedBooksComponent(nav, booksService, simpleModalService) {
        this.nav = nav;
        this.booksService = booksService;
        this.simpleModalService = simpleModalService;
    }
    BorrowedBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.changeHeaderTitle('Borrowed Books');
        this.form = new src_app_commons_forms_search_forms__WEBPACK_IMPORTED_MODULE_3__["SearchForm"](new src_app_commons_models_search_model__WEBPACK_IMPORTED_MODULE_4__["SearchModel"]);
        this.booksService.getBorrowedBooks().subscribe(function (data) {
            _this.all_books = data;
            _this.books_list = _this.all_books;
        }, function (error) {
            console.log(error);
        });
    };
    BorrowedBooksComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.books_list = this.all_books.filter(function (x) { return x.book.title.toLowerCase().includes(value.search_text.toLowerCase()); });
        }
        else {
            if (value.search_text === '') {
                this.books_list = this.all_books;
            }
        }
    };
    BorrowedBooksComponent.prototype.returnBook = function (event, item) {
        var _this = this;
        event.stopPropagation();
        this.simpleModalService.addModal(_partials_modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationMessageComponent"], { has_error: false }).subscribe(function (isTrue) {
            if (isTrue) {
                _this.booksService.returnBook({ book_id: item.book.id }).subscribe(function (data) {
                    item.book.status = 'available';
                    item.returned_date = Date.now();
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    BorrowedBooksComponent.prototype.filterClick = function (event, status) {
        event.preventDefault();
        if (status === 'all') {
            this.books_list = this.all_books;
        }
        else if (status === 'digital copy') {
            this.books_list = this.all_books.filter(function (x) { return x.book.is_digital_copy === true; });
        }
        else {
            this.books_list = this.all_books.filter(function (x) { return x.book.status === status; });
        }
        this.form.form.controls['search_text'].setValue(null);
    };
    BorrowedBooksComponent.prototype.rowClicked = function (book) {
        this.simpleModalService.addModal(_partials_modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_6__["BookDetailsComponent"], {
            has_error: false,
            book: book
        })
            .subscribe(function (isConfirmed) { });
    };
    BorrowedBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-borrowed-books',
            template: __webpack_require__(/*! ./borrowed-books.component.html */ "./src/app/components/books/borrowed-books/borrowed-books.component.html"),
            styles: [__webpack_require__(/*! ./borrowed-books.component.css */ "./src/app/components/books/borrowed-books/borrowed-books.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
            src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"],
            ngx_simple_modal__WEBPACK_IMPORTED_MODULE_5__["SimpleModalService"]])
    ], BorrowedBooksComponent);
    return BorrowedBooksComponent;
}());



/***/ }),

/***/ "./src/app/components/books/owned-books/owned-books.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/books/owned-books/owned-books.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/books/owned-books/owned-books.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/books/owned-books/owned-books.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard--panel\">\r\n    <form class=\"form-group\" [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n        <div class=\"input-group mb-3\">\r\n            <input type=\"text\" formControlName=\"search_text\" class=\"form-control\" placeholder=\"Search Title\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"submit\"><i class=\"la la-search\"></i></button>\r\n            </div>\r\n            <div class=\"input-group-append\" ngbDropdown>\r\n                <button class=\"btn btn-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"la la-filter\"></i> Filter</button>\r\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" >\r\n                    <a class=\"dropdown-item\" href=\".\" ngbDropdownItem (click)=\"filterClick($event, 'all')\">All</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'available')\">Available</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'checked out')\">Checked Out</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'digital copy')\">Digital Copy</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"mt-4\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Book</th>\r\n                    <th scope=\"col\">Location</th>\r\n                    <th scope=\"col\">Status</th>\r\n                    <th scope=\"col\">Owner</th>\r\n                    <th scope=\"col\"></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let book of books_list\" (click)=\"rowClicked(book)\">\r\n                    <th scope=\"row\">\r\n                        <p class=\"mb-0 font-weight-bold\">{{ book.title | titlecase }} </p>\r\n                        <small class=\"text-muted\">by: {{ book.author | titlecase }}</small>\r\n                    </th>\r\n                    <td><p class=\"mb-0 mt-3\">{{ book.location | titlecase }}</p></td>\r\n                    <td>\r\n                        <p class=\"badge badge-pill badge-sm text-block\" \r\n                            [ngClass]=\"{'badge-danger': book.status==='checked out', \r\n                            'badge-success': book.status==='available'}\" style=\"color: white; font-size: 12px;\"\r\n                            *ngIf=\"book.is_digital_copy !== true\">\r\n                            {{ book.status | titlecase  }}\r\n                        </p>\r\n\r\n                        <p class=\"badge badge-pill badge-sm badge-warning text-block\" style=\"color: white; font-size: 12px;\"\r\n                            *ngIf=\"book.is_digital_copy === true\">\r\n                            Digital Copy\r\n                        </p>\r\n                    </td>\r\n                    <td><p class=\"mb-0 mt-3\">{{ book.owner.full_name | titlecase }}</p></td>\r\n                    <td>\r\n                        <button type=\"button\" \r\n                                class=\"btn btn-secondary btn-sm\"\r\n                                (click)=\"updateBook($event, book)\">Update</button> \r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/books/owned-books/owned-books.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/books/owned-books/owned-books.component.ts ***!
  \***********************************************************************/
/*! exports provided: OwnedBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnedBooksComponent", function() { return OwnedBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
/* harmony import */ var src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/services/books/books.service */ "./src/app/commons/services/books/books.service.ts");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
/* harmony import */ var _partials_modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/modals/book-details/book-details.component */ "./src/app/components/partials/modals/book-details/book-details.component.ts");
/* harmony import */ var src_app_commons_forms_search_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/forms/search.forms */ "./src/app/commons/forms/search.forms.ts");
/* harmony import */ var src_app_commons_models_search_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commons/models/search.model */ "./src/app/commons/models/search.model.ts");
/* harmony import */ var _partials_modals_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/modals/update-book/update-book.component */ "./src/app/components/partials/modals/update-book/update-book.component.ts");
/* harmony import */ var _partials_modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/modals/confirmation-message/confirmation-message.component */ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OwnedBooksComponent = /** @class */ (function () {
    function OwnedBooksComponent(nav, booksService, simpleModalService) {
        this.nav = nav;
        this.booksService = booksService;
        this.simpleModalService = simpleModalService;
    }
    OwnedBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.changeHeaderTitle('Owned Books');
        this.form = new src_app_commons_forms_search_forms__WEBPACK_IMPORTED_MODULE_5__["SearchForm"](new src_app_commons_models_search_model__WEBPACK_IMPORTED_MODULE_6__["SearchModel"]);
        this.booksService.getOwnedBooks().subscribe(function (data) {
            _this.all_books = data;
            _this.books_list = _this.all_books;
        }, function (error) {
            console.log(error);
        });
    };
    OwnedBooksComponent.prototype.filterClick = function (event, status) {
        event.preventDefault();
        if (status === 'all') {
            this.books_list = this.all_books;
        }
        else if (status === 'digital copy') {
            this.books_list = this.all_books.filter(function (x) { return x.is_digital_copy === true; });
        }
        else {
            this.books_list = this.all_books.filter(function (x) { return x.status === status; });
        }
        this.form.form.controls['search_text'].setValue(null);
    };
    OwnedBooksComponent.prototype.rowClicked = function (book) {
        this.simpleModalService.addModal(_partials_modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__["BookDetailsComponent"], {
            has_error: false,
            book: book
        })
            .subscribe(function (isConfirmed) {
        });
    };
    OwnedBooksComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.books_list = this.all_books.filter(function (x) { return x.title.toLowerCase().includes(value.search_text.toLowerCase()); });
        }
        else {
            if (value.search_text === '') {
                this.books_list = this.all_books;
            }
        }
    };
    OwnedBooksComponent.prototype.updateBook = function (event, book) {
        var _this = this;
        event.stopPropagation();
        this.simpleModalService.addModal(_partials_modals_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_7__["UpdateBookComponent"], { book: book }).subscribe(function (bookData) {
            if (bookData) {
                console.log(bookData);
                _this.simpleModalService.addModal(_partials_modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationMessageComponent"], { has_error: false }).subscribe(function (isTrue) {
                    if (isTrue) {
                        _this.booksService.updateBook(bookData).subscribe(function (data) {
                            var dt = Object(bookData);
                            book.title = bookData.title;
                            book.author = bookData.author;
                            book.location = bookData.location;
                        }, function (error) {
                            console.log(error);
                        });
                    }
                });
            }
        });
    };
    OwnedBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owned-books',
            template: __webpack_require__(/*! ./owned-books.component.html */ "./src/app/components/books/owned-books/owned-books.component.html"),
            styles: [__webpack_require__(/*! ./owned-books.component.css */ "./src/app/components/books/owned-books/owned-books.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
            src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalService"]])
    ], OwnedBooksComponent);
    return OwnedBooksComponent;
}());



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

module.exports = "<footer class=\"d-flex justify-content-between align-items-center\">\r\n    <small>\r\n      <a href=\"\">© 2021. All Rights Reserved</a>\r\n    </small>\r\n    <div class=\"navbar\">\r\n      <a href=\"\">YouTube</a>\r\n      <a href=\"\">Twitter</a>\r\n      <a href=\"\">Instagram</a>\r\n      <a href=\"\">Blog</a>\r\n    </div>\r\n</footer>"

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

/***/ "./src/app/components/partials/modals/add-book-messages/add-book-messages.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/partials/modals/add-book-messages/add-book-messages.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/modals/add-book-messages/add-book-messages.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/partials/modals/add-book-messages/add-book-messages.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-dialog-centered\">\r\n  <div class=\"modal-content\" [ngClass]=\"{'toast-success': !this.has_error, \r\n  'toast-danger': this.has_error}\">\r\n    <div class=\"modal-header\">\r\n      <h3 *ngIf=\"!this.has_error\" class=\"modal-title\" style=\"line-height: 0.9\">\r\n        <i class=\"la la-check-circle\"></i> Success\r\n      </h3>\r\n\r\n      <h3 *ngIf=\"this.has_error\" class=\"modal-title\" style=\"line-height: 0.9\">\r\n        <i class=\"la la-times-circle\"></i> Danger\r\n      </h3>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <p *ngIf=\"this.has_error\">Caught an error while processing your request, please try again.</p>\r\n      <p *ngIf=\"!this.has_error\">Succesfully added a new book you can check it on owned books.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/partials/modals/add-book-messages/add-book-messages.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/partials/modals/add-book-messages/add-book-messages.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddBookMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookMessagesComponent", function() { return AddBookMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddBookMessagesComponent = /** @class */ (function (_super) {
    __extends(AddBookMessagesComponent, _super);
    function AddBookMessagesComponent() {
        return _super.call(this) || this;
    }
    AddBookMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.close();
        }, 2000);
    };
    AddBookMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book-messages',
            template: __webpack_require__(/*! ./add-book-messages.component.html */ "./src/app/components/partials/modals/add-book-messages/add-book-messages.component.html"),
            styles: [__webpack_require__(/*! ./add-book-messages.component.css */ "./src/app/components/partials/modals/add-book-messages/add-book-messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddBookMessagesComponent);
    return AddBookMessagesComponent;
}(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalComponent"]));



/***/ }),

/***/ "./src/app/components/partials/modals/book-details/book-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/partials/modals/book-details/book-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/modals/book-details/book-details.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/partials/modals/book-details/book-details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-dialog-centered\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h3 class=\"modal-title\" style=\"line-height: 0.9\">\r\n        <b>{{ book.title }}  \r\n\r\n          <span class=\"badge badge-pill badge-sm\" \r\n            [ngClass]=\"{'badge-danger': book.status==='checked out', \r\n            'badge-success': book.status==='available'}\" style=\"color: white; font-size: 12px;\"\r\n            *ngIf=\"book.is_digital_copy !== true\">\r\n            {{ book.status | titlecase  }}\r\n          </span>\r\n\r\n          <span class=\"badge badge-pill badge-sm badge-warning\" style=\"color: white; font-size: 12px;\"\r\n            *ngIf=\"book.is_digital_copy === true\">\r\n            Digital Copy\r\n          </span>\r\n        </b>\r\n        <br>\r\n        <small class=\"text-muted\">by {{book.author | titlecase }}</small>\r\n      </h3>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <p><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non dictum libero. Vestibulum sit amet varius nunc. Sed luctus nisl sed auctor fermentum ...</p>\r\n      <p><b>Owned by:</b> {{ book.owner.full_name | titlecase }}</p>\r\n      <hr>\r\n      \r\n      <h6>Comments:</h6>\r\n      <div class=\"comment-section\" style=\"max-height: 200px; overflow: auto;\">\r\n        <div class=\"d-flex align-items-center pt-2 pb-3 border-bottom\" *ngFor=\"let comment of comments_list\" >\r\n          <img class=\"img-sm rounded-circle\" src=\"static/scripts/fe/src/assets/images/no-prof-img.png\" alt=\"profile\">\r\n          <div class=\"ml-3\" style=\"line-height: 0.5;\">\r\n            <h6 class=\"mb-0\">\r\n              <div class=\"row mb-0\">\r\n                <div class=\"col-sm-5\">\r\n                  {{ comment.user.full_name | titlecase }} \r\n                </div>\r\n                <div class=\"col-sm-5 text-muted pl-3 pr-0\" style=\"font-size: 10px; margin-top: 2px;\">\r\n                  {{ comment.date_created | date:'short' }}\r\n                </div>\r\n                <div class=\"col-sm-2\"><button type=\"button\" class=\"close\" (click)=\"deleteClick(comment.id)\" [hidden]=\"comment.user.id!==this.authService.user_id\">&times;</button></div>\r\n              </div>\r\n            </h6>\r\n            <small class=\"text-muted mb-0\">{{ comment.message }}</small> <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"form-group\" [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n      <input type=\"hidden\" formControlName=\"book_id\">\r\n      <input type=\"hidden\" formControlName=\"user\">\r\n      <div class=\"input-group\">\r\n        <textarea class=\"form-control\"  formControlName=\"message\" placeholder=\"Write a comment...\"></textarea>\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-secondary btn-sm\" type=\"submit\" [disabled]=\"this.disable\"><i class=\"la la-paper-plane\"></i></button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  \r\n    <div class=\"modal-footer\" [hidden]=\"book.owner.id===this.authService.user_id || book.is_digital_copy === true\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"borrowBook()\" [hidden]=\"book.status==='checked out'\">Check Out</button>\r\n      <button type=\"button\" class=\"btn btn-warning btn-block\" (click)=\"returnBook()\" [hidden]='!this.isCheckedOut'>Return Book</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/partials/modals/book-details/book-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/partials/modals/book-details/book-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
/* harmony import */ var src_app_commons_forms_comment_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/forms/comment.forms */ "./src/app/commons/forms/comment.forms.ts");
/* harmony import */ var src_app_commons_models_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/models/comment */ "./src/app/commons/models/comment.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/services/books/books.service */ "./src/app/commons/services/books/books.service.ts");
/* harmony import */ var _modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modals/confirmation-message/confirmation-message.component */ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookDetailsComponent = /** @class */ (function (_super) {
    __extends(BookDetailsComponent, _super);
    function BookDetailsComponent(booksService, authService, simpleModalService) {
        var _this = _super.call(this) || this;
        _this.booksService = booksService;
        _this.authService = authService;
        _this.simpleModalService = simpleModalService;
        _this.has_error = false;
        _this.isCheckedOut = false;
        return _this;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getAllComments(this.book.id).subscribe(function (data) {
            _this.comments_list = data;
        }, function (error) {
            console.log(error);
        });
        this.intializeForm();
        this.booksService.isCheckedOut(this.book.id).subscribe(function (data) {
            _this.isCheckedOut = Object(data).status;
        }, function (error) {
            console.log(error);
        });
    };
    BookDetailsComponent.prototype.confirm = function () {
        // we set modal result as true on click on confirm button,
        // then we can get modal result from caller code
        this.result = true;
        this.close();
    };
    BookDetailsComponent.prototype.borrowBook = function () {
        var _this = this;
        this.simpleModalService.addModal(_modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationMessageComponent"], { has_error: false }).subscribe(function (isTrue) {
            if (isTrue) {
                _this.booksService.checkoutBook({ book_id: _this.book.id }).subscribe(function (data) {
                    _this.book.status = 'checked out';
                    _this.isCheckedOut = true;
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    BookDetailsComponent.prototype.returnBook = function () {
        var _this = this;
        this.simpleModalService.addModal(_modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationMessageComponent"], { has_error: false }).subscribe(function (isTrue) {
            if (isTrue) {
                _this.booksService.returnBook({ book_id: _this.book.id }).subscribe(function (data) {
                    _this.book.status = 'available';
                    _this.isCheckedOut = false;
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    BookDetailsComponent.prototype.intializeForm = function () {
        this.form = new src_app_commons_forms_comment_forms__WEBPACK_IMPORTED_MODULE_2__["CommentForm"](new src_app_commons_models_comment__WEBPACK_IMPORTED_MODULE_3__["CommentModel"]);
        this.form.form.controls['book_id'].setValue(this.book.id);
        this.form.form.controls['user'].setValue(this.authService.user_id);
    };
    BookDetailsComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.booksService.addComment(value).subscribe(function (data) {
                _this.comments_list.unshift(data);
                _this.intializeForm();
            }, function (error) {
                console.log(error);
                _this.intializeForm();
            });
        }
    };
    BookDetailsComponent.prototype.deleteClick = function (comment_id) {
        var _this = this;
        this.booksService.deleteComment({ 'comment_id': comment_id }).subscribe(function (data) {
            _this.comments_list = _this.comments_list.filter(function (x) { return x.id !== comment_id; });
        }, function (error) {
            console.log(error);
        });
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/components/partials/modals/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/components/partials/modals/book-details/book-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"],
            src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalService"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalComponent"]));



/***/ }),

/***/ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/partials/modals/confirmation-message/confirmation-message.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/partials/modals/confirmation-message/confirmation-message.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-dialog-centered\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h3 class=\"modal-title\" style=\"line-height: 0.9\">\r\n        <i class=\"la la-question-circle\"></i> Action Confirmation\r\n      </h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <p>Are you sure?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\"  (click)=\"cancel()\">Decline</button>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirm()\">Accept</button>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/partials/modals/confirmation-message/confirmation-message.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConfirmationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationMessageComponent", function() { return ConfirmationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationMessageComponent = /** @class */ (function (_super) {
    __extends(ConfirmationMessageComponent, _super);
    function ConfirmationMessageComponent() {
        return _super.call(this) || this;
    }
    ConfirmationMessageComponent.prototype.ngOnInit = function () {
    };
    ConfirmationMessageComponent.prototype.confirm = function () {
        this.result = true;
        this.close();
    };
    ConfirmationMessageComponent.prototype.cancel = function () {
        this.result = false;
        this.close();
    };
    ConfirmationMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-message',
            template: __webpack_require__(/*! ./confirmation-message.component.html */ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-message.component.css */ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationMessageComponent);
    return ConfirmationMessageComponent;
}(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalComponent"]));



/***/ }),

/***/ "./src/app/components/partials/modals/update-book/update-book.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/partials/modals/update-book/update-book.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partials/modals/update-book/update-book.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/partials/modals/update-book/update-book.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-dialog-centered\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      Update Book\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non dictum libero. Vestibulum sit amet varius nunc. Sed luctus nisl sed auctor fermentum. Fusce porttitor, orci pharetra dictum laoreet, leo nulla malesuada odio, non dictum ante leo vel magna. Nullam sed dignissim quam. </p>\r\n        <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n            <div>\r\n                <label>Title:</label>\r\n                <input class=\"form-control\" formControlName=\"title\" type=\"text\">\r\n            </div>\r\n      \r\n            <div>\r\n                <label>Author:</label>\r\n                <input class=\"form-control\" formControlName=\"author\" type=\"text\">\r\n            </div>\r\n      \r\n            <div>\r\n              <label>Location:</label>\r\n              <input class=\"form-control\" formControlName=\"location\" type=\"text\">\r\n            </div>\r\n            \r\n            <br>\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"this.disable\">Save</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/partials/modals/update-book/update-book.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/partials/modals/update-book/update-book.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookComponent", function() { return UpdateBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
/* harmony import */ var src_app_commons_forms_books_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/forms/books.forms */ "./src/app/commons/forms/books.forms.ts");
/* harmony import */ var src_app_commons_models_book_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/models/book.model */ "./src/app/commons/models/book.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateBookComponent = /** @class */ (function (_super) {
    __extends(UpdateBookComponent, _super);
    function UpdateBookComponent() {
        return _super.call(this) || this;
    }
    UpdateBookComponent.prototype.ngOnInit = function () {
        this.intializeForm();
    };
    UpdateBookComponent.prototype.intializeForm = function () {
        this.form = new src_app_commons_forms_books_forms__WEBPACK_IMPORTED_MODULE_2__["UpdateBookForm"](new src_app_commons_models_book_model__WEBPACK_IMPORTED_MODULE_3__["Books"]);
        this.form.defaultValue(this.book);
    };
    UpdateBookComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            if (this.form.form.dirty) {
                this.result = value;
            }
            this.close();
        }
    };
    UpdateBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-book',
            template: __webpack_require__(/*! ./update-book.component.html */ "./src/app/components/partials/modals/update-book/update-book.component.html"),
            styles: [__webpack_require__(/*! ./update-book.component.css */ "./src/app/components/partials/modals/update-book/update-book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateBookComponent);
    return UpdateBookComponent;
}(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalComponent"]));



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

module.exports = "<nav class=\"navbar navbar-expand-lg main-nav\">\r\n  <div>\r\n    <ul class=\"navbar-nav \">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-active\">{{ this.nav.headerTitle }}</a>\r\n        </li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class=\"nav-right\">\r\n    <div class=\"profile\">\r\n      <div class=\"profile--avatar no-photo-{{ auth.user.color }}\">{{ auth.user.username }}</div>\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n\r\n"

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
/* harmony import */ var _modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/book-details/book-details.component */ "./src/app/components/partials/modals/book-details/book-details.component.ts");
/* harmony import */ var _modals_add_book_messages_add_book_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/add-book-messages/add-book-messages.component */ "./src/app/components/partials/modals/add-book-messages/add-book-messages.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/confirmation-message/confirmation-message.component */ "./src/app/components/partials/modals/confirmation-message/confirmation-message.component.ts");
/* harmony import */ var _modals_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/update-book/update-book.component */ "./src/app/components/partials/modals/update-book/update-book.component.ts");
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"],
                _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_6__["BookDetailsComponent"],
                _modals_add_book_messages_add_book_messages_component__WEBPACK_IMPORTED_MODULE_7__["AddBookMessagesComponent"],
                _modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationMessageComponent"],
                _modals_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_10__["UpdateBookComponent"]
            ],
            entryComponents: [
                _modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_6__["BookDetailsComponent"],
                _modals_add_book_messages_add_book_messages_component__WEBPACK_IMPORTED_MODULE_7__["AddBookMessagesComponent"],
                _modals_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationMessageComponent"],
                _modals_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_10__["UpdateBookComponent"]
            ],
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

module.exports = "<nav class=\"sidebar\">\r\n    <a href=\"\" class=\"nav-brand\">\r\n        E Library\r\n    </a>\r\n    <ul class=\"sidebar--links navbar-nav\">\r\n        <li class=\"sidebar--item \" [ngClass]=\"{active: state.includes('dashboard') }\">\r\n            <a (click)=\"onStateChange($event, 'dashboard', 'Dashboard')\"><i class=\"la la-home\"></i>Dashboard</a>\r\n        </li>\r\n        <li class=\"sidebar--item\" [ngClass]=\"{active: state.includes('add-book') }\">\r\n            <a (click)=\"onStateChange($event, 'add-book', 'Add Book')\"><i class=\"la la-plus-square\"></i>Add a Book</a>\r\n        </li>\r\n        <li class=\"sidebar--item\" [ngClass]=\"{active: state.includes('borrowed-books') }\">\r\n            <a (click)=\"onStateChange($event, 'borrowed-books', 'Borrowed Books')\"><i class=\"la la-copy\"></i>Borrowed Books</a>\r\n        </li>\r\n        <li class=\"sidebar--item\" [ngClass]=\"{active: state.includes('owned-books') }\">\r\n            <a (click)=\"onStateChange($event, 'owned-books', 'Owned Books')\"><i class=\"la la-book\"></i>Owned Books</a>\r\n        </li>\r\n        <li class=\"sidebar--item\" [ngClass]=\"{active: state.includes('settings') }\">\r\n          <a (click)=\"onStateChange($event, 'settings', 'Settings')\"><i class=\"la la-cogs\"></i>Settings</a>\r\n        </li>\r\n        <li class=\"sidebar--item\" [ngClass]=\"{active: state.includes('logout') }\">\r\n          <a (click)=\"onStateChange($event, 'logout', 'Logout')\"><i class=\"la la-sign-out-alt\"></i>Logout</a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n\r\n\r\n"

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
    SideMenuComponent.prototype.onStateChange = function (event, state, header) {
        event.preventDefault();
        this.state.go(state);
        this.nav.changeHeaderTitle(header);
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

module.exports = "<div class=\"container p-5\">\r\n\r\n    <h3 class=\"section-title mb-3\">Login</h3>\r\n\r\n    <div *ngIf=\"hasDeactivated\" class=\"alert alert-warning\">\r\n        <p>Your account has been deactivated. Your personal data will be deleted within 48 hours.</p>\r\n    </div>\r\n    <div *ngIf=\"new\" class=\"alert alert-success\">\r\n        <p>Successfully created your account</p>\r\n    </div>\r\n    <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n        <span [hidden]=\"!form.err\" class=\"text-danger\">Invalid Email/Password. Please try again.</span>\r\n        <div>\r\n            <label>Email:</label>\r\n            <input class=\"form-control\" formControlName=\"email\" (input)=\"inputChange($event.target.value)\" type=\"text\">\r\n            <span *ngIf=\"form.hasError('email', 'required')\" class=\"text-danger\"><p><small>Email is required.</small></p></span>\r\n            <span *ngIf=\"form.hasError('email', 'email')\" class=\"text-danger\"><p><small>Invalid email format.</small></p></span>\r\n        </div>\r\n        <div>\r\n            <label>Password:</label>\r\n            <input class=\"form-control\" formControlName=\"password\" (input)=\"inputChange($event.target.value)\" type=\"password\">\r\n            <span *ngIf=\"form.hasError('password', 'required')\" class=\"text-danger\"><p><small>Password is required.</small></p></span>\r\n        </div>\r\n        <br>\r\n        <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n    </form><br>\r\n    \r\n\r\n    <div class=\"form-group\">\r\n        <p><a href='.' (click)='register($event)'>Don't have an account?</a></p>\r\n    </div>\r\n\r\n</div>\r\n"

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
        this.new = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize the form.
        this.form = new src_app_commons_forms_login_forms__WEBPACK_IMPORTED_MODULE_3__["LoginForm"](new src_app_commons_models_login_model__WEBPACK_IMPORTED_MODULE_4__["Login"]);
        if (this.auth.authenticated())
            return this.state.go('dashboard');
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
                    console.log(prevState);
                    if (prevState.length !== 0) {
                        var redirectUrl = prevState.shift().name;
                        console.log(redirectUrl);
                        if (redirectUrl !== 'login') {
                            if (redirectUrl === 'register-login') {
                                _this.state.go('dashboard');
                            }
                            else {
                                _this.state.go(redirectUrl);
                            }
                        }
                        else {
                            _this.state.go('dashboard');
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
    LoginComponent.prototype.register = function (event) {
        event.preventDefault();
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
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
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

module.exports = "<br>\r\n<div class=\"container p-5\">\r\n    <h3 class=\"section-title mb-3\">Register</h3>\r\n\r\n    <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n        <div>\r\n            <label>First Name:</label>\r\n            <input class=\"form-control\" formControlName=\"first_name\" type=\"text\">\r\n            <span [hidden]=\"form.valid('first_name')\" class=\"text-danger\"><p><small>First name is required.</small></p></span>\r\n        </div>\r\n\r\n        <div>\r\n            <label>Last Name:</label>\r\n            <input class=\"form-control\" formControlName=\"last_name\" type=\"text\">\r\n            <span [hidden]=\"form.valid('last_name')\" class=\"text-danger\"><p><small>Last name is required.</small></p></span>\r\n        </div>\r\n\r\n        <div>\r\n          <label>Username:</label>\r\n          <br>\r\n          <small>Please note that you cannot change your username after sign up.</small>\r\n          <input class=\"form-control\" formControlName=\"username\" (input)=\"usernameInputChange($event.target.value)\" type=\"text\">\r\n          <span [hidden]=\"form.valid('username')\" class=\"text-danger\"><p><small>Username is required.</small></p></span>\r\n          <span *ngIf=\"this.hasUsernameError\" class=\"text-danger\"><p><small>{{ this.usernameErr }}</small></p></span>\r\n        </div>\r\n\r\n        <div>\r\n            <label>Email:</label>\r\n            <input class=\"form-control\" formControlName=\"email\" (input)=\"emailInputChange($event.target.value)\" type=\"text\">\r\n            <span *ngIf=\"form.hasError('email', 'required')\" class=\"text-danger\"><p><small>Email is required.</small></p></span>\r\n            <span *ngIf=\"form.hasError('email', 'email')\" class=\"text-danger\"><p><small>Invalid email format.</small></p></span>\r\n            <span *ngIf=\"this.hasEmailError\" class=\"text-danger\"><p><small>{{ this.emailErr }}</small></p></span>\r\n        </div>\r\n\r\n        <div>\r\n            <label>Password:</label>\r\n            <input class=\"form-control\" formControlName=\"password\" (input)=\"passwordInputChange($event.target.value)\" type=\"password\">\r\n            <span *ngIf=\"this.mismatchedPassword\" class=\"text-danger\"><p><small>{{ this.passwordErr }}</small></p></span>\r\n            <span [hidden]=\"form.valid('password')\" class=\"text-danger\"><p><small>Password is required.</small></p></span>\r\n        </div>\r\n        <div>\r\n            <label>Confirm Password:</label>\r\n            <input class=\"form-control\" formControlName=\"confirm_password\" (input)=\"passwordInputChange($event.target.value)\" type=\"password\">\r\n            <span *ngIf=\"this.mismatchedPassword\" class=\"text-danger\"><p><small>{{ this.passwordErr }}</small></p></span>\r\n            <span [hidden]=\"form.valid('confirm_password')\" class=\"text-danger\"><p><small>Password is required.</small></p></span>\r\n      </div>\r\n        <br>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"this.disable\">Register</button>\r\n    </form>\r\n\r\n    <div class=\"form-group text-center mt-5\">\r\n        <p><a (click)='redirectLogin()'>Back to Home</a></p>\r\n    </div>\r\n</div>\r\n"

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
        this.usernameErr = '';
        this.emailErr = '';
        this.passwordErr = '';
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
                _this.state.go('register-login', { 'new': true });
            })
                .catch(function (err) {
                _this.form.err = err.error;
                _this.disable = false;
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
            this.form.err = '';
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

/***/ "./src/app/components/users/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-block {\r\n    position: absolute;\r\n    bottom: 90px;\r\n    right: 30px;\r\n}"

/***/ }),

/***/ "./src/app/components/users/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard--panel\">\r\n    <form class=\"form-group\" [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\">\r\n        <div class=\"input-group mb-3\">\r\n            <input type=\"text\" formControlName=\"search_text\" class=\"form-control\" placeholder=\"Search Title\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"submit\"><i class=\"la la-search\"></i></button>\r\n            </div>\r\n            <div class=\"input-group-append\" ngbDropdown>\r\n                <button class=\"btn btn-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"la la-filter\"></i> Filter</button>\r\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" >\r\n                    <a class=\"dropdown-item\" href=\".\" ngbDropdownItem (click)=\"filterClick($event, 'all')\">All</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'available')\">Available</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'checked out')\">Checked Out</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem (click)=\"filterClick($event, 'digital copy')\">Digital Copy</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"mt-5\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\" *ngFor=\"let book of books_list\" (click)=\"rowClicked(book)\">\r\n                <div class=\"card mb-5\">\r\n                    <div class=\"card-body\">\r\n                        <img src=\"static/scripts/fe/src/assets/images/no-cover-img.jpg\" class=\"card-img-top mb-3\" alt=\"...\">\r\n\r\n                        <span class=\"badge badge-pill badge-sm text-block\" \r\n                            [ngClass]=\"{'badge-danger': book.status==='checked out', \r\n                            'badge-success': book.status==='available'}\" style=\"color: white; font-size: 12px;\"\r\n                            *ngIf=\"book.is_digital_copy !== true\">\r\n                            {{ book.status | titlecase  }}\r\n                        </span>\r\n\r\n                        <span class=\"badge badge-pill badge-sm badge-warning text-block\" style=\"color: white; font-size: 12px;\"\r\n                            *ngIf=\"book.is_digital_copy === true\">\r\n                            Digital Copy\r\n                        </span>\r\n\r\n                        <h5 class=\"card-title mb-0\">\r\n                            {{ book.title | titlecase }}\r\n                        </h5>\r\n                        <small class=\"text-muted mt-0\">by: {{ book.author | titlecase }} </small>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

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
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_forms_search_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/forms/search.forms */ "./src/app/commons/forms/search.forms.ts");
/* harmony import */ var src_app_commons_models_search_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/models/search.model */ "./src/app/commons/models/search.model.ts");
/* harmony import */ var src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/services/navigation/navigation.service */ "./src/app/commons/services/navigation/navigation.service.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commons/services/books/books.service */ "./src/app/commons/services/books/books.service.ts");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm5/ngx-simple-modal.js");
/* harmony import */ var _partials_modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/modals/book-details/book-details.component */ "./src/app/components/partials/modals/book-details/book-details.component.ts");
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
    function DashboardComponent(nav, auth, state, booksService, simpleModalService) {
        this.nav = nav;
        this.auth = auth;
        this.state = state;
        this.booksService = booksService;
        this.simpleModalService = simpleModalService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nav.changeHeaderTitle('Dashboard');
                        this.form = new src_app_commons_forms_search_forms__WEBPACK_IMPORTED_MODULE_2__["SearchForm"](new src_app_commons_models_search_model__WEBPACK_IMPORTED_MODULE_3__["SearchModel"]);
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
                    case 2:
                        this.booksService.getAllBooks().subscribe(function (data) {
                            _this.all_books = data;
                            _this.books_list = _this.all_books;
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.books_list = this.all_books.filter(function (x) { return x.title.toLowerCase().includes(value.search_text.toLowerCase()); });
        }
        else {
            if (value.search_text === '') {
                this.books_list = this.all_books;
            }
        }
    };
    DashboardComponent.prototype.rowClicked = function (book) {
        this.simpleModalService.addModal(_partials_modals_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_8__["BookDetailsComponent"], {
            has_error: false,
            book: book
        })
            .subscribe(function (isConfirmed) {
        });
    };
    DashboardComponent.prototype.filterClick = function (event, status) {
        event.preventDefault();
        if (status === 'all') {
            this.books_list = this.all_books;
        }
        else if (status === 'digital copy') {
            this.books_list = this.all_books.filter(function (x) { return x.is_digital_copy === true; });
        }
        else {
            this.books_list = this.all_books.filter(function (x) { return x.status === status; });
        }
        this.form.form.controls['search_text'].setValue(null);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/users/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/users/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_commons_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"],
            src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            src_app_commons_services_books_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"],
            ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["SimpleModalService"]])
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

module.exports = "<div class=\"dashboard--panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n          <div class=\"panel--white\">\r\n              <div class=\"panel__header\">\r\n                <div class=\"panel-label\"><i class=\"fa fa-newspaper-o m-1\"></i>Profile</div>\r\n              </div>\r\n              <div class=\"panel__content\">\r\n                  <form [formGroup]=\"form.form\" (ngSubmit)=\"onSubmit(form.form)\" class=\"form\" enctype=\"multipart/form-data\">\r\n                    <div [hidden]=\"!this.editSuccessMessage\" class=\"alert alert-success\"><p>You have successfully updated your info!</p></div>\r\n                    <div *ngIf=\"!this.ProfNoChanges\" class=\"alert alert-info\"><p>No Changes!</p></div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col mb-5\">\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"first_name\"  placeholder=\"First name\">\r\n                            <span [hidden]=\"form.valid('first_name')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\r\n                            <label>Username</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"username\" (input)=\"usernameInputChange($event.target.value)\" placeholder=\"Username\" disabled>\r\n                            <small class='text-muted'>Please note that you cannot change your username after sign up.</small><br><br>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"last_name\" placeholder=\"Last name\">\r\n                            <span [hidden]=\"form.valid('last_name')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\r\n\r\n                            <label>E-mail</label>\r\n\r\n                            <div [ngSwitch]=\"switchExpression\" class=\"email-field\">\r\n                                <div *ngSwitchDefault>\r\n                                  <div>\r\n                                    <div class=\"bold mt-2\"><p>{{ form.form.value.email }} <a href=\"\" (click)=\"changeEmailClick($event)\" class=\"text-right bold text-muted\"><small>Change Email</small></a></p></div>\r\n                                  </div>\r\n                                </div>\r\n\r\n\r\n                                <div *ngSwitchCase=\"'change_email'\">\r\n                                  <div class=\"bold mt-2\"><p>{{ form.form.value.email }}</p></div>\r\n\r\n                                  <form [formGroup]=\"edit_email_form.form\" (ngSubmit)=\"onEditEmailSubmit(edit_email_form.form)\">\r\n                                    <p>Change Email</p>\r\n                                    <span *ngIf=\"this.emailHasError\" class=\"text-danger\"><p>This email is already used.</p></span>\r\n                                    <span *ngIf=\"this.emailNoChanges\" class=\"text-danger\"><p>Nothing Changed</p></span>\r\n\r\n                                    <div class=\"form-group\">\r\n                                      <label>New Email</label>\r\n                                      <input class=\"form-control\" formControlName=\"email\" (input)=\"emailInputChange($event.target.value)\" type=\"text\">\r\n                                      <span *ngIf=\"edit_email_form.form.hasError('email', 'required')\" class=\"text-danger\"><p><small>This field is required.</small></p></span>\r\n                                      <span *ngIf=\"edit_email_form.form.hasError('email', 'email')\" class=\"text-danger\"><p><small>Invalid email format.</small></p></span>\r\n                                      <span *ngIf=\"edit_email_form.form.hasEmailError\" class=\"text-danger\"><p><small>{{ this.emailErr }}</small></p></span>\r\n                                    </div>\r\n\r\n                                    <div class=\"d-flex justify-content-between\">\r\n                                      <button (click)=\"cancelEmailEvent()\" class=\"btn-sm btn-light\">Cancel</button>\r\n                                      <button class=\"btn-sm btn-primary\" [disabled]=\"this.emailbtn_disabled\">Update Email</button>\r\n                                    </div>\r\n                                  </form>\r\n                                </div>\r\n\r\n                                <!-- CHANGE EMAIL -- SUCCESS -->\r\n                                <div *ngSwitchCase=\"'edit_email_success'\">\r\n                                  <p>Congratulations! You’ve successfully updated your email.</p>\r\n                                  <div class=\"text-right\">\r\n                                    <a href=\"\" (click)=\"changeEmailClick($event)\" class=\"text-right bold changePw\">Change Email</a>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button class=\"btn-custom-lg btn-primary\">Update Profile</button>\r\n                    <button class=\"btn-custom-lg btn-light\">Cancel</button>\r\n\r\n                </form>\r\n              </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/forms/email.forms */ "./src/app/commons/forms/email.forms.ts");
/* harmony import */ var src_app_commons_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/models/user.model */ "./src/app/commons/models/user.model.ts");
/* harmony import */ var src_app_commons_models_edit_password_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/models/edit-password.model */ "./src/app/commons/models/edit-password.model.ts");
/* harmony import */ var src_app_commons_models_edit_email_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commons/models/edit-email.model */ "./src/app/commons/models/edit-email.model.ts");
/* harmony import */ var src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commons/services/auth/auth.service */ "./src/app/commons/services/auth/auth.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var src_app_commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commons/services/auth/user.service */ "./src/app/commons/services/auth/user.service.ts");
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
        this.editSuccessMessage = false;
        this.usernameHasError = false;
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
                        this.form = new src_app_commons_forms_user_forms__WEBPACK_IMPORTED_MODULE_2__["UserForm"](new src_app_commons_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]);
                        this.edit_email_form = new src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_3__["EditEmailForm"](new src_app_commons_models_edit_email_model__WEBPACK_IMPORTED_MODULE_6__["EditEmailModel"]);
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
                    _this.form.err = '';
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
                    _this.edit_email_form = new src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_3__["EditEmailForm"](new src_app_commons_models_edit_password_model__WEBPACK_IMPORTED_MODULE_5__["EditPasswordModel"]);
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
        this.edit_email_form = new src_app_commons_forms_email_forms__WEBPACK_IMPORTED_MODULE_3__["EditEmailForm"](new src_app_commons_models_edit_email_model__WEBPACK_IMPORTED_MODULE_6__["EditEmailModel"]);
        // initialize switchExpression to redirect to default view
        this.switchExpression = '';
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
        __metadata("design:paramtypes", [src_app_commons_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _uirouter_core__WEBPACK_IMPORTED_MODULE_8__["StateService"],
            src_app_commons_services_auth_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
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