(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("@angular/router"), require("rxjs/ReplaySubject"), require("rxjs/add/operator/filter"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/platform-browser", "@angular/router", "rxjs/ReplaySubject", "rxjs/add/operator/filter"], factory);
	else if(typeof exports === 'object')
		exports["ngx-translate-core"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("@angular/router"), require("rxjs/ReplaySubject"), require("rxjs/add/operator/filter"));
	else
		root["ngx-translate-core"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/platform-browser"], root["@angular/router"], root["rxjs/ReplaySubject"], root["rxjs/add/operator/filter"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Angulartics2 = (function () {
    function Angulartics2(location, router) {
        this.settings = {
            pageTracking: {
                autoTrackVirtualPages: true,
                basePath: '',
                excludedRoutes: []
            },
            eventTracking: {},
            developerMode: false
        };
        /*
          @Param: ({url: string, location: Location})
         */
        this.pageTrack = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: ({action: any, properties: any})
         */
        this.eventTrack = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: (properties: any)
         */
        this.exceptionTrack = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: (alias: string)
         */
        this.setAlias = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: (userId: string)
         */
        this.setUsername = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: ({action: any, properties: any})
         */
        this.setUserProperties = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: (properties: any)
         */
        this.setUserPropertiesOnce = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: (properties: any)
         */
        this.setSuperProperties = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: (properties: any)
         */
        this.setSuperPropertiesOnce = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        /*
          @Param: (properties: any)
         */
        this.userTimings = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](10);
        this.trackLocation(location, router);
    }
    Angulartics2.prototype.trackLocation = function (location, router) {
        var _this = this;
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["NavigationEnd"]; })
            .subscribe(function (event) {
            if (!_this.settings.developerMode) {
                _this.trackUrlChange(event.urlAfterRedirects, location);
            }
        });
    };
    Angulartics2.prototype.virtualPageviews = function (value) {
        this.settings.pageTracking.autoTrackVirtualPages = value;
    };
    Angulartics2.prototype.excludeRoutes = function (routes) {
        this.settings.pageTracking.excludedRoutes = routes;
    };
    Angulartics2.prototype.firstPageview = function (value) {
        this.settings.pageTracking.autoTrackFirstPage = value;
    };
    Angulartics2.prototype.withBase = function (value) {
        this.settings.pageTracking.basePath = (value);
    };
    Angulartics2.prototype.developerMode = function (value) {
        this.settings.developerMode = value;
    };
    Angulartics2.prototype.trackUrlChange = function (url, location) {
        if (!this.settings.developerMode) {
            if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
                this.pageTrack.next({
                    path: this.settings.pageTracking.basePath.length ? this.settings.pageTracking.basePath + url : location.prepareExternalUrl(url),
                    location: location
                });
            }
        }
    };
    Angulartics2.prototype.matchesExcludedRoute = function (url) {
        for (var _i = 0, _a = this.settings.pageTracking.excludedRoutes; _i < _a.length; _i++) {
            var excludedRoute = _a[_i];
            if ((excludedRoute instanceof RegExp && excludedRoute.test(url)) || url.indexOf(excludedRoute) > -1) {
                return true;
            }
        }
        return false;
    };
    return Angulartics2;
}());
Angulartics2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
], Angulartics2);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2On; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

var Angulartics2On = (function () {
    function Angulartics2On(elRef, angulartics2, eventManager) {
        this.elRef = elRef;
        this.angulartics2 = angulartics2;
        this.eventManager = eventManager;
        this.el = this.elRef.nativeElement;
    }
    Angulartics2On.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Don't listen in server-side
        if (this.isBrowser()) {
            this.eventManager.addEventListener(this.el, this.angulartics2On || 'click', function (event) { return _this.eventTrack(event); });
        }
    };
    Angulartics2On.prototype.isBrowser = function () {
        return typeof (window) !== 'undefined';
    };
    Angulartics2On.prototype.eventTrack = function (event) {
        var action = this.angularticsEvent; // || this.inferEventName();
        var properties = {
            eventType: event.type
        };
        if (this.angularticsCategory) {
            properties.category = this.angularticsCategory;
        }
        // Allow components to pass through an expression that gets merged on to the event properties
        // eg. angulartics-properites='myComponentScope.someConfigExpression.$angularticsProperties'
        if (this.angularticsProperties) {
            Object.assign(properties, this.angularticsProperties);
        }
        this.angulartics2.eventTrack.next({
            action: action,
            properties: properties
        });
    };
    return Angulartics2On;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('angulartics2On'),
    __metadata("design:type", String)
], Angulartics2On.prototype, "angulartics2On", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Angulartics2On.prototype, "angularticsEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Angulartics2On.prototype, "angularticsCategory", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Angulartics2On.prototype, "angularticsProperties", void 0);
Angulartics2On = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[angulartics2On]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_2__angulartics2__["a" /* Angulartics2 */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["EventManager"]])
], Angulartics2On);



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baidu_angulartics2_baidu_analytics__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baidu_angulartics2_baidu_analytics__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ga_angulartics2_ga__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ga_angulartics2_ga__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gtm_angulartics2_gtm__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__gtm_angulartics2_gtm__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kissmetrics_angulartics2_kissmetrics__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__kissmetrics_angulartics2_kissmetrics__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixpanel_angulartics2_mixpanel__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__mixpanel_angulartics2_mixpanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__piwik_angulartics2_piwik__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__piwik_angulartics2_piwik__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__segment_angulartics2_segment__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__segment_angulartics2_segment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__facebook_angulartics2_facebook__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__facebook_angulartics2_facebook__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__appinsights_angulartics2_appinsights__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__appinsights_angulartics2_appinsights__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hubspot_angulartics2_hubspot__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__hubspot_angulartics2_hubspot__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__adobeanalytics_angulartics2_adobeanalytics__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__adobeanalytics_angulartics2_adobeanalytics__["a"]; });













/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGULARTICS2_FORROOT_GUARD", function() { return ANGULARTICS2_FORROOT_GUARD; });
/* harmony export (immutable) */ __webpack_exports__["provideForRootGuard"] = provideForRootGuard;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angulartics2Module", function() { return Angulartics2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_angulartics2On__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2", function() { return __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2On", function() { return __WEBPACK_IMPORTED_MODULE_2__core_angulartics2On__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_index__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2BaiduAnalytics", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2GoogleAnalytics", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2GoogleTagManager", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2Kissmetrics", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2Mixpanel", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2Piwik", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2Segment", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2Facebook", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2AppInsights", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2Hubspot", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Angulartics2AdobeAnalytics", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_index__["k"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ANGULARTICS2_FORROOT_GUARD = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('ANGULARTICS2_FORROOT_GUARD');
function provideForRootGuard(angulartics2) {
    if (angulartics2) {
        throw new Error("Angulartics2Module.forRoot() called twice. Lazy loaded modules should use Angulartics2Module.forChild() instead.");
    }
    return 'guarded';
}
var Angulartics2Module = Angulartics2Module_1 = (function () {
    function Angulartics2Module(guard) {
    }
    Angulartics2Module.forRoot = function (providers) {
        return {
            ngModule: Angulartics2Module_1,
            providers: [
                {
                    provide: ANGULARTICS2_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */], new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"]()]]
                },
                __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]
            ].concat(providers)
        };
    };
    Angulartics2Module.forChild = function () {
        return {
            ngModule: Angulartics2Module_1,
            providers: []
        };
    };
    return Angulartics2Module;
}());
Angulartics2Module = Angulartics2Module_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__core_angulartics2On__["a" /* Angulartics2On */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__core_angulartics2On__["a" /* Angulartics2On */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(ANGULARTICS2_FORROOT_GUARD)),
    __metadata("design:paramtypes", [Object])
], Angulartics2Module);

var Angulartics2Module_1;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2AdobeAnalytics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Angulartics2AdobeAnalytics = (function () {
    function Angulartics2AdobeAnalytics(angulartics2, location) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.location = location;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2AdobeAnalytics.prototype.pageTrack = function (path) {
        if (typeof s !== 'undefined' && s) {
            s.clearVars();
            s.t({ pageName: path });
        }
    };
    /**
     * Track Event in Adobe Analytics
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
     *
     * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
     */
    Angulartics2AdobeAnalytics.prototype.eventTrack = function (action, properties) {
        if (!properties) {
            properties = properties || {};
        }
        if (typeof s !== 'undefined' && s) {
            if (typeof properties === 'object') {
                this.setUserProperties(properties);
            }
            if (action) {
                // if linkName property is passed, use that; otherwise, the action is the linkName
                var linkName = (properties['linkName']) ? properties['linkName'] : action;
                // note that 'this' should refer the link element, but we can't get that in this function. example:
                // <a href="http://anothersite.com" onclick="s.tl(this,'e','AnotherSite',null)">
                // if disableDelay property is passed, use that to turn off/on the 500ms delay; otherwise, it uses this
                var disableDelay = !!properties['disableDelay'] ? true : this;
                // if action property is passed, use that; otherwise, the action remains unchanged
                if (properties['action']) {
                    action = properties['action'];
                }
                this.setPageName();
                if (action.toUpperCase() === "DOWNLOAD") {
                    s.tl(disableDelay, 'd', linkName);
                }
                else if (action.toUpperCase() === "EXIT") {
                    s.tl(disableDelay, 'e', linkName);
                }
                else {
                    s.tl(disableDelay, 'o', linkName);
                }
            }
        }
    };
    Angulartics2AdobeAnalytics.prototype.setPageName = function () {
        var path = this.location.path(true);
        var hashNdx = path.indexOf('#');
        if (hashNdx > 0 && hashNdx < path.length) {
            s.pageName = path.substring(hashNdx + 1);
        }
        else {
            s.pageName = path;
        }
    };
    Angulartics2AdobeAnalytics.prototype.setUserProperties = function (properties) {
        if (typeof properties === 'object') {
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    s[key] = properties[key];
                }
            }
        }
    };
    return Angulartics2AdobeAnalytics;
}());
Angulartics2AdobeAnalytics = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_angulartics2__["a" /* Angulartics2 */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
], Angulartics2AdobeAnalytics);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2AppInsights; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Angulartics2AppInsights = (function () {
    function Angulartics2AppInsights(angulartics2, title, router) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.title = title;
        this.router = router;
        this.loadStartTime = null;
        this.loadTime = null;
        this.metrics = null;
        this.dimensions = null;
        this.measurements = null;
        if (typeof (appInsights) === 'undefined') {
            console.warn('appInsights not found');
        }
        this.angulartics2.settings.appInsights = {
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["NavigationStart"]; })
            .subscribe(function (event) { return _this.startTimer(); });
        this.router.events
            .filter(function (event) {
            return (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["NavigationError"]) ||
                (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["NavigationEnd"]);
        })
            .subscribe(function (error) { return _this.stopTimer(); });
    }
    Angulartics2AppInsights.prototype.startTimer = function () {
        this.loadStartTime = Date.now();
        this.loadTime = null;
    };
    Angulartics2AppInsights.prototype.stopTimer = function () {
        this.loadTime = Date.now() - this.loadStartTime;
        this.loadStartTime = null;
    };
    /**
     * Page Track in Baidu Analytics
     * @name pageTrack
     *
     * @param {string} path Required 'path' (string)
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
     *
     */
    Angulartics2AppInsights.prototype.pageTrack = function (path) {
        appInsights.trackPageView(this.title.getTitle(), path, this.dimensions, this.metrics, this.loadTime);
    };
    /**
     * Log a user action or other occurrence.
     * @param   name    A string to identify this event in the portal.
     *
     * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
     *
     * @https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
     */
    Angulartics2AppInsights.prototype.eventTrack = function (name, properties) {
        appInsights.trackEvent(name, properties, this.measurements);
    };
    /**
     * Exception Track Event in GA
     * @name exceptionTrack
     *
     * @param {any} properties Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional  fields 'fatal' (boolean) and 'description' (string), error
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
     */
    Angulartics2AppInsights.prototype.exceptionTrack = function (properties) {
        var description = properties.event || properties.description || properties;
        appInsights.trackException(description);
    };
    /**
     *
     * @param userId
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
     */
    Angulartics2AppInsights.prototype.setUsername = function (userId) {
        this.angulartics2.settings.appInsights.userId = userId;
        appInsights.setAuthenticatedUserContext(userId);
    };
    Angulartics2AppInsights.prototype.setUserProperties = function (properties) {
        if (properties.userId) {
            this.angulartics2.settings.appInsights.userId = properties.userId;
        }
        if (properties.accountId) {
            appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId, properties.accountId);
        }
    };
    return Angulartics2AppInsights;
}());
Angulartics2AppInsights = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
], Angulartics2AppInsights);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2BaiduAnalytics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2BaiduAnalytics = (function () {
    function Angulartics2BaiduAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (hmt) === 'undefined') {
            hmt = [];
        }
        else {
            hmt.push(['_ setAutoPageview', false]);
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * Page Track in Baidu Analytics
     * @name pageTrack
     *
     * @param {string} path Required 'path' (string)
     *
     * @link http://tongji.baidu.com/open/api/more?p=ref_trackPageview
     *
     */
    Angulartics2BaiduAnalytics.prototype.pageTrack = function (path) {
        if (typeof hmt !== 'undefined' && hmt) {
            hmt.push(['_trackPageview', path]);
        }
    };
    /**
     * Track Event in Baidu Analytics
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string), 'opt_label'(string) and 'opt_value' (string)
     *
     * @link http://tongji.baidu.com/open/api/more?p=ref_trackEvent
     *
     */
    Angulartics2BaiduAnalytics.prototype.eventTrack = function (action, properties) {
        //baidu analytics requires category
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
            properties.opt_label = 'default';
            properties.opt_value = 'default';
        }
        if (typeof hmt !== 'undefined' && hmt) {
            hmt.push(['_trackEvent', properties.category, action, properties.opt_label, properties.opt_value]);
        }
    };
    Angulartics2BaiduAnalytics.prototype.setUsername = function (userId) {
        // set default custom variables name to 'identity' and 'value'
        hmt.push(['_setCustomVar', 1, 'identity', userId]);
    };
    Angulartics2BaiduAnalytics.prototype.setUserProperties = function (properties) {
        hmt.push(['_setCustomVar', 2, 'user', JSON.stringify(properties)]);
    };
    return Angulartics2BaiduAnalytics;
}());
Angulartics2BaiduAnalytics = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2BaiduAnalytics);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2Facebook; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2Facebook = (function () {
    function Angulartics2Facebook(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
    }
    /**
     * Send interactions to the Pixel, i.e. for event tracking in Pixel
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties
     */
    Angulartics2Facebook.prototype.eventTrack = function (action, properties) {
        properties = properties || {};
        var eventList = [
            'ViewContent',
            'Search',
            'AddToCart',
            'AddToWishlist',
            'InitiateCheckout',
            'AddPaymentInfo',
            'Purchase',
            'Lead',
            'CompleteRegistration'
        ];
        if (typeof fbq !== 'undefined' && fbq) {
            eventList.indexOf(action) === -1 ?
                fbq('trackCustom', action, properties) :
                fbq('track', action, properties);
        }
    };
    return Angulartics2Facebook;
}());
Angulartics2Facebook = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2Facebook);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2GoogleAnalytics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2GoogleAnalytics = (function () {
    function Angulartics2GoogleAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        // Set the default settings for this module
        this.angulartics2.settings.ga = {
            // array of additional account names (only works for analyticsjs)
            additionalAccountNames: [],
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.userTimings.subscribe(function (x) { return _this.userTimings(x); });
    }
    Angulartics2GoogleAnalytics.prototype.pageTrack = function (path) {
        if (typeof _gaq !== 'undefined' && _gaq) {
            _gaq.push(['_trackPageview', path]);
            for (var _i = 0, _a = this.angulartics2.settings.ga.additionalAccountNames; _i < _a.length; _i++) {
                var accountName = _a[_i];
                _gaq.push([accountName + '._trackPageview', path]);
            }
            ;
        }
        if (typeof ga !== 'undefined' && ga) {
            if (this.angulartics2.settings.ga.userId) {
                ga('set', '&uid', this.angulartics2.settings.ga.userId);
            }
            ga('send', 'pageview', path);
            for (var _b = 0, _c = this.angulartics2.settings.ga.additionalAccountNames; _b < _c.length; _b++) {
                var accountName = _c[_b];
                ga(accountName + '.send', 'pageview', path);
            }
            ;
        }
    };
    /**
     * Track Event in GA
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
     *
     * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    Angulartics2GoogleAnalytics.prototype.eventTrack = function (action, properties) {
        // Google Analytics requires an Event Category
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
        }
        // GA requires that eventValue be an integer, see:
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
        // https://github.com/luisfarzati/angulartics/issues/81
        if (properties.value) {
            var parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
        if (typeof ga !== 'undefined') {
            var eventOptions = {
                eventCategory: properties.category,
                eventAction: action,
                eventLabel: properties.label,
                eventValue: properties.value,
                nonInteraction: properties.noninteraction,
                page: properties.page || location.hash.substring(1) || location.pathname,
                userId: this.angulartics2.settings.ga.userId
            };
            // add custom dimensions and metrics
            this.setDimensionsAndMetrics(properties);
            if (this.angulartics2.settings.ga.transport) {
                ga('send', 'event', eventOptions, { transport: this.angulartics2.settings.ga.transport });
            }
            else {
                ga('send', 'event', eventOptions);
            }
            for (var _i = 0, _a = this.angulartics2.settings.ga.additionalAccountNames; _i < _a.length; _i++) {
                var accountName = _a[_i];
                ga(accountName + '.send', 'event', eventOptions);
            }
        }
        else if (typeof _gaq !== 'undefined') {
            _gaq.push(['_trackEvent', properties.category, action, properties.label, properties.value, properties.noninteraction]);
        }
    };
    /**
     * Exception Track Event in GA
     * @name exceptionTrack
     *
     * @param {object} properties Comprised of the optional fields:
     *     'fatal' (string),
     *     'description' (string)
     *
     * @https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    Angulartics2GoogleAnalytics.prototype.exceptionTrack = function (properties) {
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.fatal = true;
        }
        properties.exDescription = properties.description;
        var eventOptions = {
            exFatal: properties.fatal,
            exDescription: properties.description
        };
        ga('send', 'exception', eventOptions);
    };
    Angulartics2GoogleAnalytics.prototype.setUsername = function (userId) {
        this.angulartics2.settings.ga.userId = userId;
    };
    Angulartics2GoogleAnalytics.prototype.setUserProperties = function (properties) {
        this.setDimensionsAndMetrics(properties);
    };
    /**
     * User Timings Event in GA
     * @name userTimings
     *
     * @param {object} properties Comprised of the mandatory fields:
     *     'timingCategory' (string),
     *     'timingVar' (string),
     *     'timingValue' (number)
     * Properties can also have the optional fields:
     *     'timingLabel' (string)
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings
     */
    Angulartics2GoogleAnalytics.prototype.userTimings = function (properties) {
        if (!properties || !properties.timingCategory || !properties.timingVar || !properties.timingValue) {
            console.error('Properties timingCategory, timingVar, and timingValue are required to be set.');
            return;
        }
        if (ga) {
            ga('send', 'timing', properties);
        }
    };
    Angulartics2GoogleAnalytics.prototype.setDimensionsAndMetrics = function (properties) {
        if (ga) {
            // add custom dimensions and metrics
            for (var idx = 1; idx <= 200; idx++) {
                if (properties['dimension' + idx.toString()]) {
                    ga('set', 'dimension' + idx.toString(), properties['dimension' + idx.toString()]);
                }
                if (properties['metric' + idx.toString()]) {
                    ga('set', 'metric' + idx.toString(), properties['metric' + idx.toString()]);
                }
            }
        }
    };
    return Angulartics2GoogleAnalytics;
}());
Angulartics2GoogleAnalytics = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2GoogleAnalytics);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2GoogleTagManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2GoogleTagManager = (function () {
    function Angulartics2GoogleTagManager(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        // The dataLayer needs to be initialized
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = window.dataLayer = window.dataLayer || [];
        }
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        // Set the default settings for this module
        this.angulartics2.settings.gtm = {
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
    }
    Angulartics2GoogleTagManager.prototype.pageTrack = function (path) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push({
                'event': 'Page View',
                'content-name': path,
                'userId': this.angulartics2.settings.gtm.userId
            });
        }
    };
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
     */
    Angulartics2GoogleTagManager.prototype.eventTrack = function (action, properties) {
        // Set a default GTM category
        properties = properties || {};
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push({
                event: properties.event || 'interaction',
                target: properties.category || 'Event',
                action: action,
                label: properties.label,
                value: properties.value,
                interactionType: properties.noninteraction,
                userId: this.angulartics2.settings.gtm.userId
            });
        }
    };
    /**
     * Exception Track Event in GTM
     * @name exceptionTrack
     *
     * @param {object} properties Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional  fields 'fatal' (boolean) and 'description' (string)
     */
    Angulartics2GoogleTagManager.prototype.exceptionTrack = function (properties) {
        if (!properties || !properties.appId || !properties.appName || !properties.appVersion) {
            console.error('Must be setted appId, appName and appVersion.');
            return;
        }
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.exFatal = true;
        }
        properties.exDescription = properties.event ? properties.event.stack : properties.description;
        this.eventTrack("Exception thrown for " + properties.appName + " <" + properties.appId + "@" + properties.appVersion + ">", {
            'category': 'Exception',
            'label': properties.exDescription
        });
    };
    /**
     * Set userId for use with Universal Analytics User ID feature
     * @name setUsername
     *
     * @param {string} userId Required 'userId' value (string) used to identify user cross-device in Google Analytics
     */
    Angulartics2GoogleTagManager.prototype.setUsername = function (userId) {
        this.angulartics2.settings.gtm.userId = userId;
    };
    return Angulartics2GoogleTagManager;
}());
Angulartics2GoogleTagManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2GoogleTagManager);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2Hubspot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2Hubspot = (function () {
    function Angulartics2Hubspot(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof _hsq === 'undefined') {
            _hsq = [];
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Hubspot.prototype.pageTrack = function (path, location) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['setPath', path]);
            _hsq.push(['trackPageView']);
        }
    };
    Angulartics2Hubspot.prototype.eventTrack = function (action, properties) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['trackEvent', properties]);
        }
    };
    Angulartics2Hubspot.prototype.setUserProperties = function (properties) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['identify', properties]);
        }
    };
    return Angulartics2Hubspot;
}());
Angulartics2Hubspot = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2Hubspot);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2Kissmetrics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2Kissmetrics = (function () {
    function Angulartics2Kissmetrics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_kmq) === 'undefined') {
            _kmq = [];
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Kissmetrics.prototype.pageTrack = function (path, location) {
        _kmq.push(['record', 'Pageview', { 'Page': path }]);
    };
    Angulartics2Kissmetrics.prototype.eventTrack = function (action, properties) {
        _kmq.push(['record', action, properties]);
    };
    Angulartics2Kissmetrics.prototype.setUsername = function (userId) {
        _kmq.push(['identify', userId]);
    };
    Angulartics2Kissmetrics.prototype.setUserProperties = function (properties) {
        _kmq.push(['set', properties]);
    };
    return Angulartics2Kissmetrics;
}());
Angulartics2Kissmetrics = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2Kissmetrics);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2Mixpanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2Mixpanel = (function () {
    function Angulartics2Mixpanel(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce.subscribe(function (x) { return _this.setUserPropertiesOnce(x); });
        this.angulartics2.setSuperProperties.subscribe(function (x) { return _this.setSuperProperties(x); });
        this.angulartics2.setSuperPropertiesOnce.subscribe(function (x) { return _this.setSuperPropertiesOnce(x); });
        this.angulartics2.setAlias.subscribe(function (x) { return _this.setAlias(x); });
    }
    Angulartics2Mixpanel.prototype.pageTrack = function (path, location) {
        try {
            mixpanel.track('Page Viewed', { page: path });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.eventTrack = function (action, properties) {
        try {
            mixpanel.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUsername = function (userId) {
        try {
            mixpanel.identify(userId);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUserProperties = function (properties) {
        try {
            mixpanel.people.set(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUserPropertiesOnce = function (properties) {
        try {
            mixpanel.people.set_once(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setSuperProperties = function (properties) {
        try {
            mixpanel.register(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setSuperPropertiesOnce = function (properties) {
        try {
            mixpanel.register_once(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setAlias = function (alias) {
        try {
            mixpanel.alias(alias);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    return Angulartics2Mixpanel;
}());
Angulartics2Mixpanel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2Mixpanel);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2Piwik; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2Piwik = (function () {
    function Angulartics2Piwik(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_paq) === 'undefined') {
            console.warn('Piwik not found');
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Piwik.prototype.pageTrack = function (path, location) {
        try {
            _paq.push(['setDocumentTitle', window.document.title]);
            _paq.push(['setCustomUrl', path]);
            _paq.push(['trackPageView']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.eventTrack = function (action, properties) {
        try {
            if (properties.value) {
                var parsed = parseInt(properties.value, 10);
                properties.value = isNaN(parsed) ? 0 : parsed;
            }
            _paq.push(['trackEvent', properties.category, action, properties.label, properties.value]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.setUsername = function (userId) {
        try {
            _paq.push(['setUserId', userId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.setUserProperties = function (properties) {
        try {
            _paq.push(['setCustomVariable', properties]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    return Angulartics2Piwik;
}());
Angulartics2Piwik = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2Piwik);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angulartics2Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_angulartics2__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Angulartics2Segment = (function () {
    function Angulartics2Segment(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setAlias.subscribe(function (x) { return _this.setAlias(x); });
    }
    // https://segment.com/docs/libraries/analytics.js/#page
    // analytics.page([category], [name], [properties], [options], [callback]);
    // TODO : Support optional parameters where the parameter order and type changes their meaning
    // e.g.
    // (string) is (name)
    // (string, string) is (category, name)
    // (string, object) is (name, properties)
    Angulartics2Segment.prototype.pageTrack = function (path, location) {
        try {
            analytics.page(path);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    // https://segment.com/docs/libraries/analytics.js/#track
    // analytics.track(event, [properties], [options], [callback]);
    Angulartics2Segment.prototype.eventTrack = function (action, properties) {
        try {
            analytics.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    // https://segment.com/docs/libraries/analytics.js/#identify
    // analytics.identify([userId], [traits], [options], [callback]);
    Angulartics2Segment.prototype.setUserProperties = function (properties) {
        try {
            if (properties.userId) {
                analytics.identify(properties.userId, properties);
            }
            else {
                analytics.identify(properties);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    // https://segment.com/docs/libraries/analytics.js/#alias
    // analytics.alias(userId, previousId, options, callback);
    Angulartics2Segment.prototype.setAlias = function (alias) {
        try {
            analytics.alias(alias);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    return Angulartics2Segment;
}());
Angulartics2Segment = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_angulartics2__["a" /* Angulartics2 */]])
], Angulartics2Segment);



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZGQ1YzNkYzUyOThkYzY1OWE0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hbmd1bGFydGljczIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMk9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL2Fkb2JlYW5hbHl0aWNzL2FuZ3VsYXJ0aWNzMi1hZG9iZWFuYWx5dGljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL2FwcGluc2lnaHRzL2FuZ3VsYXJ0aWNzMi1hcHBpbnNpZ2h0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL2JhaWR1L2FuZ3VsYXJ0aWNzMi1iYWlkdS1hbmFseXRpY3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9mYWNlYm9vay9hbmd1bGFydGljczItZmFjZWJvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9nYS9hbmd1bGFydGljczItZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9ndG0vYW5ndWxhcnRpY3MyLWd0bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL2h1YnNwb3QvYW5ndWxhcnRpY3MyLWh1YnNwb3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9raXNzbWV0cmljcy9hbmd1bGFydGljczIta2lzc21ldHJpY3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9taXhwYW5lbC9hbmd1bGFydGljczItbWl4cGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9waXdpay9hbmd1bGFydGljczItcGl3aWsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9zZWdtZW50L2FuZ3VsYXJ0aWNzMi1zZWdtZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUmVwbGF5U3ViamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRTJDO0FBQ1E7QUFDUjtBQUNhO0FBQ3RCO0FBR2xDLElBQWEsWUFBWTtJQTZEdkIsc0JBQVksUUFBa0IsRUFBRSxNQUFjO1FBNUR2QyxhQUFRLEdBQVE7WUFDckIsWUFBWSxFQUFFO2dCQUNaLHFCQUFxQixF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aUIsR0FBakIsVUFBa0IsVUFBZTtRQUMvQixJQUFJLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDSCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELHlEQUF5RDtJQUN6RCwwREFBMEQ7SUFDMUQsc0NBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsSUFBSSxDQUFDO1lBQ0gsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQztBQXhFWSxtQkFBbUI7SUFEL0IsZ0ZBQVUsRUFBRTtxQ0FJYSx3RUFBWTtHQUh6QixtQkFBbUIsQ0F3RS9CO0FBeEUrQjs7Ozs7OztBQ1BoQyxnRDs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoiY29yZS51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKSwgcmVxdWlyZShcInJ4anMvUmVwbGF5U3ViamVjdFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCIsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiLCBcIkBhbmd1bGFyL3JvdXRlclwiLCBcInJ4anMvUmVwbGF5U3ViamVjdFwiLCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtdHJhbnNsYXRlLWNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKSwgcmVxdWlyZShcInJ4anMvUmVwbGF5U3ViamVjdFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmd4LXRyYW5zbGF0ZS1jb3JlXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSwgcm9vdFtcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIl0sIHJvb3RbXCJAYW5ndWxhci9yb3V0ZXJcIl0sIHJvb3RbXCJyeGpzL1JlcGxheVN1YmplY3RcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFkZDVjM2RjNTI5OGRjNjU5YTRmIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMvUmVwbGF5U3ViamVjdCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyIHtcbiAgcHVibGljIHNldHRpbmdzOiBhbnkgPSB7XG4gICAgcGFnZVRyYWNraW5nOiB7XG4gICAgICBhdXRvVHJhY2tWaXJ0dWFsUGFnZXM6IHRydWUsXG4gICAgICBiYXNlUGF0aDogJycsXG4gICAgICBleGNsdWRlZFJvdXRlczogW11cbiAgICB9LFxuICAgIGV2ZW50VHJhY2tpbmc6IHt9LFxuICAgIGRldmVsb3Blck1vZGU6IGZhbHNlXG4gIH07XG5cbiAgLypcbiAgICBAUGFyYW06ICh7dXJsOiBzdHJpbmcsIGxvY2F0aW9uOiBMb2NhdGlvbn0pXG4gICAqL1xuICBwdWJsaWMgcGFnZVRyYWNrOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XG5cbiAgLypcbiAgICBAUGFyYW06ICh7YWN0aW9uOiBhbnksIHByb3BlcnRpZXM6IGFueX0pXG4gICAqL1xuICBwdWJsaWMgZXZlbnRUcmFjazogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xuXG4gIC8qXG4gICAgQFBhcmFtOiAocHJvcGVydGllczogYW55KVxuICAgKi9cbiAgcHVibGljIGV4Y2VwdGlvblRyYWNrOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XG5cbiAgLypcbiAgICBAUGFyYW06IChhbGlhczogc3RyaW5nKVxuICAgKi9cbiAgcHVibGljIHNldEFsaWFzOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XG5cbiAgLypcbiAgICBAUGFyYW06ICh1c2VySWQ6IHN0cmluZylcbiAgICovXG4gIHB1YmxpYyBzZXRVc2VybmFtZTogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xuXG4gIC8qXG4gICAgQFBhcmFtOiAoe2FjdGlvbjogYW55LCBwcm9wZXJ0aWVzOiBhbnl9KVxuICAgKi9cbiAgcHVibGljIHNldFVzZXJQcm9wZXJ0aWVzOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XG5cbiAgLypcbiAgICBAUGFyYW06IChwcm9wZXJ0aWVzOiBhbnkpXG4gICAqL1xuICBwdWJsaWMgc2V0VXNlclByb3BlcnRpZXNPbmNlOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XG5cbiAgLypcbiAgICBAUGFyYW06IChwcm9wZXJ0aWVzOiBhbnkpXG4gICAqL1xuICBwdWJsaWMgc2V0U3VwZXJQcm9wZXJ0aWVzOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XG5cbiAgLypcbiAgICBAUGFyYW06IChwcm9wZXJ0aWVzOiBhbnkpXG4gICAqL1xuICBwdWJsaWMgc2V0U3VwZXJQcm9wZXJ0aWVzT25jZTogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xuXG4gIC8qXG4gICAgQFBhcmFtOiAocHJvcGVydGllczogYW55KVxuICAgKi9cbiAgcHVibGljIHVzZXJUaW1pbmdzOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XG5cbiAgY29uc3RydWN0b3IobG9jYXRpb246IExvY2F0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMudHJhY2tMb2NhdGlvbihsb2NhdGlvbiwgcm91dGVyKTtcbiAgfVxuXG4gIHRyYWNrTG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgIHJvdXRlci5ldmVudHNcbiAgICAgIC5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmRldmVsb3Blck1vZGUpIHtcbiAgICAgICAgICB0aGlzLnRyYWNrVXJsQ2hhbmdlKGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzLCBsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdmlydHVhbFBhZ2V2aWV3cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmF1dG9UcmFja1ZpcnR1YWxQYWdlcyA9IHZhbHVlO1xuICB9XG4gIGV4Y2x1ZGVSb3V0ZXMocm91dGVzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuZXhjbHVkZWRSb3V0ZXMgPSByb3V0ZXM7XG4gIH1cbiAgZmlyc3RQYWdldmlldyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmF1dG9UcmFja0ZpcnN0UGFnZSA9IHZhbHVlO1xuICB9XG4gIHdpdGhCYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5iYXNlUGF0aCA9ICh2YWx1ZSk7XG4gIH1cbiAgZGV2ZWxvcGVyTW9kZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZSA9IHZhbHVlO1xuICB9XG4gIFxuICBwcm90ZWN0ZWQgdHJhY2tVcmxDaGFuZ2UodXJsOiBzdHJpbmcsIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgIGlmICghdGhpcy5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuYXV0b1RyYWNrVmlydHVhbFBhZ2VzICYmICF0aGlzLm1hdGNoZXNFeGNsdWRlZFJvdXRlKHVybCkpIHtcbiAgICAgICAgdGhpcy5wYWdlVHJhY2submV4dCh7XG4gICAgICAgICAgcGF0aDogdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuYmFzZVBhdGgubGVuZ3RoID8gdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuYmFzZVBhdGggKyB1cmwgOiBsb2NhdGlvbi5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsKSxcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG1hdGNoZXNFeGNsdWRlZFJvdXRlKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgZm9yIChsZXQgZXhjbHVkZWRSb3V0ZSBvZiB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5leGNsdWRlZFJvdXRlcykge1xuICAgICAgaWYgKChleGNsdWRlZFJvdXRlIGluc3RhbmNlb2YgUmVnRXhwICYmIGV4Y2x1ZGVkUm91dGUudGVzdCh1cmwpKSB8fCB1cmwuaW5kZXhPZihleGNsdWRlZFJvdXRlKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMi50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3RhYmxlLCBJbnB1dCwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBpbXBvcnQgeyBnZXRET00gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZG9tX2FkYXB0ZXInO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMic7XG5cbkBJbmplY3RhYmxlKClcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbmd1bGFydGljczJPbl0nXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMk9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgnYW5ndWxhcnRpY3MyT24nKSBhbmd1bGFydGljczJPbjogc3RyaW5nO1xuICBASW5wdXQoKSBhbmd1bGFydGljc0V2ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk6IHN0cmluZztcbiAgQElucHV0KCkgYW5ndWxhcnRpY3NQcm9wZXJ0aWVzOiBhbnk7XG5cbiAgcHJpdmF0ZSBlbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMixcbiAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4gICkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gRG9uJ3QgbGlzdGVuIGluIHNlcnZlci1zaWRlXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKCkpIHtcbiAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5lbCwgdGhpcy5hbmd1bGFydGljczJPbiB8fCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKGV2ZW50KSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzQnJvd3NlcigpIHtcbiAgICByZXR1cm4gdHlwZW9mKHdpbmRvdykgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgcHVibGljIGV2ZW50VHJhY2soZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYW5ndWxhcnRpY3NFdmVudDsgLy8gfHwgdGhpcy5pbmZlckV2ZW50TmFtZSgpO1xuICAgIGxldCBwcm9wZXJ0aWVzOiBhbnkgPSB7XG4gICAgICBldmVudFR5cGU6IGV2ZW50LnR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuYW5ndWxhcnRpY3NDYXRlZ29yeSkge1xuICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSA9IHRoaXMuYW5ndWxhcnRpY3NDYXRlZ29yeTtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBjb21wb25lbnRzIHRvIHBhc3MgdGhyb3VnaCBhbiBleHByZXNzaW9uIHRoYXQgZ2V0cyBtZXJnZWQgb24gdG8gdGhlIGV2ZW50IHByb3BlcnRpZXNcbiAgICAvLyBlZy4gYW5ndWxhcnRpY3MtcHJvcGVyaXRlcz0nbXlDb21wb25lbnRTY29wZS5zb21lQ29uZmlnRXhwcmVzc2lvbi4kYW5ndWxhcnRpY3NQcm9wZXJ0aWVzJ1xuICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzUHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB0aGlzLmFuZ3VsYXJ0aWNzUHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHtcbiAgICAgIGFjdGlvbixcbiAgICAgIHByb3BlcnRpZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qcHJpdmF0ZSBpc0NvbW1hbmQoKSB7XG4gICAgcmV0dXJuIFsnYTonLCAnYnV0dG9uOicsICdidXR0b246YnV0dG9uJywgJ2J1dHRvbjpzdWJtaXQnLCAnaW5wdXQ6YnV0dG9uJywgJ2lucHV0OnN1Ym1pdCddLmluZGV4T2YoXG4gICAgICBnZXRET00oKS50YWdOYW1lKHRoaXMuZWwpLnRvTG93ZXJDYXNlKCkgKyAnOicgKyAoZ2V0RE9NKCkudHlwZSh0aGlzLmVsKSB8fCAnJykpID49IDA7XG4gIH1cblxuICBwcml2YXRlIGluZmVyRXZlbnROYW1lKCkge1xuICAgIGlmICh0aGlzLmlzQ29tbWFuZCgpKSByZXR1cm4gZ2V0RE9NKCkuZ2V0VGV4dCh0aGlzLmVsKSB8fCBnZXRET00oKS5nZXRWYWx1ZSh0aGlzLmVsKTtcbiAgICByZXR1cm4gZ2V0RE9NKCkuZ2V0UHJvcGVydHkodGhpcy5lbCwgJ2lkJykgfHwgZ2V0RE9NKCkuZ2V0UHJvcGVydHkodGhpcy5lbCwgJ25hbWUnKSB8fCBnZXRET00oKS50YWdOYW1lKHRoaXMuZWwpO1xuICB9Ki9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMk9uLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vYmFpZHUvYW5ndWxhcnRpY3MyLWJhaWR1LWFuYWx5dGljcyc7XG5leHBvcnQgKiBmcm9tICcuL2dhL2FuZ3VsYXJ0aWNzMi1nYSc7XG5leHBvcnQgKiBmcm9tICcuL2d0bS9hbmd1bGFydGljczItZ3RtJztcbmV4cG9ydCAqIGZyb20gJy4va2lzc21ldHJpY3MvYW5ndWxhcnRpY3MyLWtpc3NtZXRyaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vbWl4cGFuZWwvYW5ndWxhcnRpY3MyLW1peHBhbmVsJztcbmV4cG9ydCAqIGZyb20gJy4vcGl3aWsvYW5ndWxhcnRpY3MyLXBpd2lrJztcbmV4cG9ydCAqIGZyb20gJy4vc2VnbWVudC9hbmd1bGFydGljczItc2VnbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZhY2Vib29rL2FuZ3VsYXJ0aWNzMi1mYWNlYm9vayc7XG5leHBvcnQgKiBmcm9tICcuL2FwcGluc2lnaHRzL2FuZ3VsYXJ0aWNzMi1hcHBpbnNpZ2h0cyc7XG5leHBvcnQgKiBmcm9tICcuL2h1YnNwb3QvYW5ndWxhcnRpY3MyLWh1YnNwb3QnO1xuZXhwb3J0ICogZnJvbSAnLi9hZG9iZWFuYWx5dGljcy9hbmd1bGFydGljczItYWRvYmVhbmFseXRpY3MnO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2luZGV4LnRzIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIE9wYXF1ZVRva2VuLFxuICBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XG5pbXBvcnQgeyBBbmd1bGFydGljczJPbiB9IGZyb20gJy4vY29yZS9hbmd1bGFydGljczJPbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29yZS9hbmd1bGFydGljczInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2FuZ3VsYXJ0aWNzMk9uJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvdmlkZXJzL2luZGV4J1xuXG5leHBvcnQgY29uc3QgQU5HVUxBUlRJQ1MyX0ZPUlJPT1RfR1VBUkQgPSBuZXcgT3BhcXVlVG9rZW4oJ0FOR1VMQVJUSUNTMl9GT1JST09UX0dVQVJEJyk7XG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZvclJvb3RHdWFyZChhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMik6IGFueSB7XG4gIGlmIChhbmd1bGFydGljczIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoKSBjYWxsZWQgdHdpY2UuIExhenkgbG9hZGVkIG1vZHVsZXMgc2hvdWxkIHVzZSBBbmd1bGFydGljczJNb2R1bGUuZm9yQ2hpbGQoKSBpbnN0ZWFkLmApO1xuICB9XG5cbiAgcmV0dXJuICdndWFyZGVkJztcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbIEFuZ3VsYXJ0aWNzMk9uIF0sXG4gIGV4cG9ydHM6IFsgQW5ndWxhcnRpY3MyT24gXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEFOR1VMQVJUSUNTMl9GT1JST09UX0dVQVJEKSBndWFyZDogYW55KSB7fVxuXG4gIHN0YXRpYyBmb3JSb290KHByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhcnRpY3MyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBTkdVTEFSVElDUzJfRk9SUk9PVF9HVUFSRCxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBwcm92aWRlRm9yUm9vdEd1YXJkLFxuICAgICAgICAgIGRlcHM6IFtbQW5ndWxhcnRpY3MyLCBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCldXVxuICAgICAgICB9LFxuICAgICAgICBBbmd1bGFydGljczIsXG4gICAgICAgIC4uLnByb3ZpZGVyc1xuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbmd1bGFydGljczJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBzOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJBZG9iZUFuYWx5dGljcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICApIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5wYWdlVHJhY2tpbmcudHJhY2tSZWxhdGl2ZVBhdGggPSB0cnVlO1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJyAmJiBzKSB7XG4gICAgICBzLmNsZWFyVmFycygpO1xuICAgICAgcy50KHtwYWdlTmFtZTpwYXRofSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIEV2ZW50IGluIEFkb2JlIEFuYWx5dGljc1xuICAgKiBAbmFtZSBldmVudFRyYWNrXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gUmVxdWlyZWQgJ2FjdGlvbicgKHN0cmluZykgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyBDb21wcmlzZWQgb2YgdGhlIG1hbmRhdG9yeSBmaWVsZCAnY2F0ZWdvcnknIChzdHJpbmcpIGFuZCBvcHRpb25hbCAgZmllbGRzICdsYWJlbCcgKHN0cmluZyksICd2YWx1ZScgKGludGVnZXIpIGFuZCAnbm9uaW50ZXJhY3Rpb24nIChib29sZWFuKVxuICAgKlxuICAgKiBAbGluayBodHRwczovL21hcmtldGluZy5hZG9iZS5jb20vcmVzb3VyY2VzL2hlbHAvZW5fVVMvc2MvaW1wbGVtZW50L2pzX2ltcGxlbWVudGF0aW9uLmh0bWxcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJyAmJiBzKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIC8vIGlmIGxpbmtOYW1lIHByb3BlcnR5IGlzIHBhc3NlZCwgdXNlIHRoYXQ7IG90aGVyd2lzZSwgdGhlIGFjdGlvbiBpcyB0aGUgbGlua05hbWVcbiAgICAgICAgY29uc3QgbGlua05hbWUgPSAocHJvcGVydGllc1snbGlua05hbWUnXSkgPyBwcm9wZXJ0aWVzWydsaW5rTmFtZSddIDogYWN0aW9uO1xuICAgICAgICAvLyBub3RlIHRoYXQgJ3RoaXMnIHNob3VsZCByZWZlciB0aGUgbGluayBlbGVtZW50LCBidXQgd2UgY2FuJ3QgZ2V0IHRoYXQgaW4gdGhpcyBmdW5jdGlvbi4gZXhhbXBsZTpcbiAgICAgICAgLy8gPGEgaHJlZj1cImh0dHA6Ly9hbm90aGVyc2l0ZS5jb21cIiBvbmNsaWNrPVwicy50bCh0aGlzLCdlJywnQW5vdGhlclNpdGUnLG51bGwpXCI+XG4gICAgICAgIC8vIGlmIGRpc2FibGVEZWxheSBwcm9wZXJ0eSBpcyBwYXNzZWQsIHVzZSB0aGF0IHRvIHR1cm4gb2ZmL29uIHRoZSA1MDBtcyBkZWxheTsgb3RoZXJ3aXNlLCBpdCB1c2VzIHRoaXNcbiAgICAgICAgY29uc3QgZGlzYWJsZURlbGF5ID0gISFwcm9wZXJ0aWVzWydkaXNhYmxlRGVsYXknXSA/IHRydWUgOiB0aGlzO1xuICAgICAgICAvLyBpZiBhY3Rpb24gcHJvcGVydHkgaXMgcGFzc2VkLCB1c2UgdGhhdDsgb3RoZXJ3aXNlLCB0aGUgYWN0aW9uIHJlbWFpbnMgdW5jaGFuZ2VkXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzWydhY3Rpb24nXSkge1xuICAgICAgICAgIGFjdGlvbiA9IHByb3BlcnRpZXNbJ2FjdGlvbiddO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UGFnZU5hbWUoKTtcblxuICAgICAgICBpZiAoYWN0aW9uLnRvVXBwZXJDYXNlKCkgPT09IFwiRE9XTkxPQURcIikge1xuICAgICAgICAgIHMudGwoZGlzYWJsZURlbGF5LCdkJyxsaW5rTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnRvVXBwZXJDYXNlKCkgPT09IFwiRVhJVFwiKSB7XG4gICAgICAgICAgcy50bChkaXNhYmxlRGVsYXksJ2UnLGxpbmtOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzLnRsKGRpc2FibGVEZWxheSwnbycsbGlua05hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYWdlTmFtZSgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5sb2NhdGlvbi5wYXRoKHRydWUpO1xuICAgIGNvbnN0IGhhc2hOZHggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaE5keCA+IDAgJiYgaGFzaE5keCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgICBzLnBhZ2VOYW1lID0gcGF0aC5zdWJzdHJpbmcoaGFzaE5keCsxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcy5wYWdlTmFtZSA9IHBhdGg7XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2Fkb2JlYW5hbHl0aWNzL2FuZ3VsYXJ0aWNzMi1hZG9iZWFuYWx5dGljcy50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xuXG5kZWNsYXJlIGNvbnN0IGFwcEluc2lnaHRzOiBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cy5JQXBwSW5zaWdodHM7XG5cbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVycm9yIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkFwcEluc2lnaHRzIHtcbiAgICBsb2FkU3RhcnRUaW1lOiBudW1iZXIgPSBudWxsO1xuICAgIGxvYWRUaW1lOiBudW1iZXIgPSBudWxsO1xuXG4gICAgbWV0cmljczogYW55ID0gbnVsbDtcbiAgICBkaW1lbnNpb25zOiBhbnkgPSBudWxsO1xuICAgIG1lYXN1cmVtZW50czogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBpZiAodHlwZW9mIChhcHBJbnNpZ2h0cykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2FwcEluc2lnaHRzIG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMgPSB7XG4gICAgICAgICAgICB1c2VySWQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG5cbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXhjZXB0aW9uVHJhY2soeCkpO1xuXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcblxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgICAuZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KVxuICAgICAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLnN0YXJ0VGltZXIoKSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgICAuZmlsdGVyKGV2ZW50ID0+XG4gICAgICAgICAgICAgICAgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB8fFxuICAgICAgICAgICAgICAgIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGVycm9yID0+IHRoaXMuc3RvcFRpbWVyKCkpO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubG9hZFRpbWUgPSBudWxsO1xuICAgIH1cblxuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgdGhpcy5sb2FkVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmxvYWRTdGFydFRpbWU7XG4gICAgICAgIHRoaXMubG9hZFN0YXJ0VGltZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFnZSBUcmFjayBpbiBCYWlkdSBBbmFseXRpY3NcbiAgICAgKiBAbmFtZSBwYWdlVHJhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFJlcXVpcmVkICdwYXRoJyAoc3RyaW5nKVxuICAgICAqXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjdHJhY2twYWdldmlld1xuICAgICAqXG4gICAgICovXG4gICAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgICAgICBhcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KFxuICAgICAgICAgICAgdGhpcy50aXRsZS5nZXRUaXRsZSgpLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucyxcbiAgICAgICAgICAgIHRoaXMubWV0cmljcyxcbiAgICAgICAgICAgIHRoaXMubG9hZFRpbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSB1c2VyIGFjdGlvbiBvciBvdGhlciBvY2N1cnJlbmNlLlxuICAgICAqIEBwYXJhbSAgIG5hbWUgICAgQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhpcyBldmVudCBpbiB0aGUgcG9ydGFsLlxuICAgICAqXG4gICAgICogQHBhcmFtICAgcHJvcGVydGllcyAgbWFwW3N0cmluZywgc3RyaW5nXSAtIGFkZGl0aW9uYWwgZGF0YSB1c2VkIHRvIGZpbHRlciBldmVudHMgYW5kIG1ldHJpY3MgaW4gdGhlIHBvcnRhbC4gRGVmYXVsdHMgdG8gZW1wdHkuXG4gICAgICpcbiAgICAgKiBAaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjdHJhY2tldmVudFxuICAgICAqL1xuICAgIGV2ZW50VHJhY2sobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICAgICAgYXBwSW5zaWdodHMudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzLCB0aGlzLm1lYXN1cmVtZW50cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhjZXB0aW9uIFRyYWNrIEV2ZW50IGluIEdBXG4gICAgICogQG5hbWUgZXhjZXB0aW9uVHJhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkcyAnYXBwSWQnIChzdHJpbmcpLCAnYXBwTmFtZScgKHN0cmluZykgYW5kICdhcHBWZXJzaW9uJyAoc3RyaW5nKSBhbmRcbiAgICAgKiBvcHRpb25hbCAgZmllbGRzICdmYXRhbCcgKGJvb2xlYW4pIGFuZCAnZGVzY3JpcHRpb24nIChzdHJpbmcpLCBlcnJvclxuICAgICAqXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjdHJhY2tleGNlcHRpb25cbiAgICAgKi9cbiAgICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllcy5ldmVudCB8fCBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uIHx8IHByb3BlcnRpZXM7XG5cbiAgICAgICAgYXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJJZFxuICAgICAqXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjc2V0YXV0aGVudGljYXRlZHVzZXJjb250ZXh0XG4gICAgICovXG5cbiAgICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5hcHBJbnNpZ2h0cy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIGFwcEluc2lnaHRzLnNldEF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dCh1c2VySWQpO1xuICAgIH1cblxuICAgIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgICAgICBpZiAocHJvcGVydGllcy51c2VySWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmFwcEluc2lnaHRzLnVzZXJJZCA9IHByb3BlcnRpZXMudXNlcklkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXMuYWNjb3VudElkKSB7XG4gICAgICAgICAgICBhcHBJbnNpZ2h0cy5zZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHQoXG4gICAgICAgICAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMudXNlcklkLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuYWNjb3VudElkXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3Byb3ZpZGVycy9hcHBpbnNpZ2h0cy9hbmd1bGFydGljczItYXBwaW5zaWdodHMudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4uLy4uL2NvcmUvYW5ndWxhcnRpY3MyJztcblxuZGVjbGFyZSB2YXIgaG10OiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJCYWlkdUFuYWx5dGljcyB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMlxuICAgICkge1xuICAgICAgICBpZiAodHlwZW9mIChobXQpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaG10ID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBobXQucHVzaChbJ18gc2V0QXV0b1BhZ2V2aWV3JywgZmFsc2VdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XG5cbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcblxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZS5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XG5cbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhZ2UgVHJhY2sgaW4gQmFpZHUgQW5hbHl0aWNzXG4gICAgICogQG5hbWUgcGFnZVRyYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBSZXF1aXJlZCAncGF0aCcgKHN0cmluZylcbiAgICAgKlxuICAgICAqIEBsaW5rIGh0dHA6Ly90b25namkuYmFpZHUuY29tL29wZW4vYXBpL21vcmU/cD1yZWZfdHJhY2tQYWdldmlld1xuICAgICAqXG4gICAgICovXG4gICAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIGhtdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaG10KSB7XG4gICAgICAgICAgICBobXQucHVzaChbJ190cmFja1BhZ2V2aWV3JywgcGF0aF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhY2sgRXZlbnQgaW4gQmFpZHUgQW5hbHl0aWNzXG4gICAgICogQG5hbWUgZXZlbnRUcmFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBSZXF1aXJlZCAnYWN0aW9uJyAoc3RyaW5nKSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBtYW5kYXRvcnkgZmllbGQgJ2NhdGVnb3J5JyAoc3RyaW5nKSwgJ29wdF9sYWJlbCcoc3RyaW5nKSBhbmQgJ29wdF92YWx1ZScgKHN0cmluZylcbiAgICAgKlxuICAgICAqIEBsaW5rIGh0dHA6Ly90b25namkuYmFpZHUuY29tL29wZW4vYXBpL21vcmU/cD1yZWZfdHJhY2tFdmVudFxuICAgICAqXG4gICAgICovXG4gICAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgICAgIC8vYmFpZHUgYW5hbHl0aWNzIHJlcXVpcmVzIGNhdGVnb3J5XG4gICAgICAgIGlmICghcHJvcGVydGllcyB8fCAhcHJvcGVydGllcy5jYXRlZ29yeSkge1xuICAgICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5ID0gJ0V2ZW50JztcbiAgICAgICAgICAgIHByb3BlcnRpZXMub3B0X2xhYmVsID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgcHJvcGVydGllcy5vcHRfdmFsdWUgPSAnZGVmYXVsdCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGhtdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaG10KSB7XG4gICAgICAgICAgICBobXQucHVzaChbJ190cmFja0V2ZW50JywgcHJvcGVydGllcy5jYXRlZ29yeSwgYWN0aW9uLCBwcm9wZXJ0aWVzLm9wdF9sYWJlbCwgcHJvcGVydGllcy5vcHRfdmFsdWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGN1c3RvbSB2YXJpYWJsZXMgbmFtZSB0byAnaWRlbnRpdHknIGFuZCAndmFsdWUnXG4gICAgICAgIGhtdC5wdXNoKFsnX3NldEN1c3RvbVZhcicsIDEsICdpZGVudGl0eScsIHVzZXJJZF0pO1xuICAgIH1cblxuICAgIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgICAgICBobXQucHVzaChbJ19zZXRDdXN0b21WYXInLCAyLCAndXNlcicsIEpTT04uc3RyaW5naWZ5KHByb3BlcnRpZXMpXSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3Byb3ZpZGVycy9iYWlkdS9hbmd1bGFydGljczItYmFpZHUtYW5hbHl0aWNzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuLi8uLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgY29uc3QgZmJxOiBGdW5jdGlvbjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkZhY2Vib29rIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXG4gICkge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLnBhZ2VUcmFja2luZy50cmFja1JlbGF0aXZlUGF0aCA9IHRydWU7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgaW50ZXJhY3Rpb25zIHRvIHRoZSBQaXhlbCwgaS5lLiBmb3IgZXZlbnQgdHJhY2tpbmcgaW4gUGl4ZWxcbiAgICogQG5hbWUgZXZlbnRUcmFja1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIFJlcXVpcmVkICdhY3Rpb24nIChzdHJpbmcpIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXNcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgY29uc3QgZXZlbnRMaXN0ID0gW1xuICAgICAgJ1ZpZXdDb250ZW50JyxcbiAgICAgICdTZWFyY2gnLFxuICAgICAgJ0FkZFRvQ2FydCcsXG4gICAgICAnQWRkVG9XaXNobGlzdCcsXG4gICAgICAnSW5pdGlhdGVDaGVja291dCcsXG4gICAgICAnQWRkUGF5bWVudEluZm8nLFxuICAgICAgJ1B1cmNoYXNlJyxcbiAgICAgICdMZWFkJyxcbiAgICAgICdDb21wbGV0ZVJlZ2lzdHJhdGlvbidcbiAgICBdO1xuXG4gICBpZiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcgJiYgZmJxKSB7XG4gICAgICAgIGV2ZW50TGlzdC5pbmRleE9mKGFjdGlvbikgPT09IC0xID9cbiAgICAgICAgICAgZmJxKCd0cmFja0N1c3RvbScsIGFjdGlvbiwgcHJvcGVydGllcykgOlxuICAgICAgICAgICBmYnEoJ3RyYWNrJywgYWN0aW9uLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9wcm92aWRlcnMvZmFjZWJvb2svYW5ndWxhcnRpY3MyLWZhY2Vib29rLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuLi8uLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIF9nYXE6IGFueTtcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XG5kZWNsYXJlIHZhciBsb2NhdGlvbjogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXG4gICkge1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLnBhZ2VUcmFja2luZy50cmFja1JlbGF0aXZlUGF0aCA9IHRydWU7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgbW9kdWxlXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EgPSB7XG4gICAgICAvLyBhcnJheSBvZiBhZGRpdGlvbmFsIGFjY291bnQgbmFtZXMgKG9ubHkgd29ya3MgZm9yIGFuYWx5dGljc2pzKVxuICAgICAgYWRkaXRpb25hbEFjY291bnROYW1lczogW10sXG4gICAgICB1c2VySWQ6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5leGNlcHRpb25UcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5leGNlcHRpb25UcmFjayh4KSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZS5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi51c2VyVGltaW5ncy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy51c2VyVGltaW5ncyh4KSk7XG4gIH1cblxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBfZ2FxICE9PSAndW5kZWZpbmVkJyAmJiBfZ2FxKSB7XG4gICAgICBfZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldycsIHBhdGhdKTtcbiAgICAgIGZvciAobGV0IGFjY291bnROYW1lIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMpIHtcbiAgICAgICAgX2dhcS5wdXNoKFthY2NvdW50TmFtZSArICcuX3RyYWNrUGFnZXZpZXcnLCBwYXRoXSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdhICE9PSAndW5kZWZpbmVkJyAmJiBnYSkge1xuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCkge1xuICAgICAgICBnYSgnc2V0JywgJyZ1aWQnLCB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS51c2VySWQpO1xuICAgICAgfVxuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcbiAgICAgIGZvciAobGV0IGFjY291bnROYW1lIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMpIHtcbiAgICAgICAgZ2EoYWNjb3VudE5hbWUgKyAnLnNlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIEV2ZW50IGluIEdBXG4gICAqIEBuYW1lIGV2ZW50VHJhY2tcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBSZXF1aXJlZCAnYWN0aW9uJyAoc3RyaW5nKSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkICdjYXRlZ29yeScgKHN0cmluZykgYW5kIG9wdGlvbmFsICBmaWVsZHMgJ2xhYmVsJyAoc3RyaW5nKSwgJ3ZhbHVlJyAoaW50ZWdlcikgYW5kICdub25pbnRlcmFjdGlvbicgKGJvb2xlYW4pXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9nYWpzL2V2ZW50VHJhY2tlckd1aWRlI1NldHRpbmdVcEV2ZW50VHJhY2tpbmdcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2V2ZW50c1xuICAgKi9cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgLy8gR29vZ2xlIEFuYWx5dGljcyByZXF1aXJlcyBhbiBFdmVudCBDYXRlZ29yeVxuICAgIGlmICghcHJvcGVydGllcyB8fCAhcHJvcGVydGllcy5jYXRlZ29yeSkge1xuICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5ID0gJ0V2ZW50JztcbiAgICB9XG4gICAgLy8gR0EgcmVxdWlyZXMgdGhhdCBldmVudFZhbHVlIGJlIGFuIGludGVnZXIsIHNlZTpcbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZmllbGQtcmVmZXJlbmNlI2V2ZW50VmFsdWVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbHVpc2ZhcnphdGkvYW5ndWxhcnRpY3MvaXNzdWVzLzgxXG4gICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcbiAgICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChwcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG4gICAgICBwcm9wZXJ0aWVzLnZhbHVlID0gaXNOYU4ocGFyc2VkKSA/IDAgOiBwYXJzZWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBldmVudE9wdGlvbnMgPSB7XG4gICAgICAgIGV2ZW50Q2F0ZWdvcnk6IHByb3BlcnRpZXMuY2F0ZWdvcnksXG4gICAgICAgIGV2ZW50QWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGV2ZW50TGFiZWw6IHByb3BlcnRpZXMubGFiZWwsXG4gICAgICAgIGV2ZW50VmFsdWU6IHByb3BlcnRpZXMudmFsdWUsXG4gICAgICAgIG5vbkludGVyYWN0aW9uOiBwcm9wZXJ0aWVzLm5vbmludGVyYWN0aW9uLFxuICAgICAgICBwYWdlOiBwcm9wZXJ0aWVzLnBhZ2UgfHwgbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHVzZXJJZDogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudXNlcklkXG4gICAgICB9O1xuXG4gICAgICAvLyBhZGQgY3VzdG9tIGRpbWVuc2lvbnMgYW5kIG1ldHJpY3NcbiAgICAgIHRoaXMuc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllcyk7XG5cbiAgICAgIGlmICh0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS50cmFuc3BvcnQpIHtcbiAgICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudE9wdGlvbnMsIHsgdHJhbnNwb3J0OiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS50cmFuc3BvcnQgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50T3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGFjY291bnROYW1lIG9mIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLmFkZGl0aW9uYWxBY2NvdW50TmFtZXMpIHtcbiAgICAgICAgZ2EoYWNjb3VudE5hbWUgKyAnLnNlbmQnLCAnZXZlbnQnLCBldmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIF9nYXEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIHByb3BlcnRpZXMuY2F0ZWdvcnksIGFjdGlvbiwgcHJvcGVydGllcy5sYWJlbCwgcHJvcGVydGllcy52YWx1ZSwgcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbl0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGNlcHRpb24gVHJhY2sgRXZlbnQgaW4gR0FcbiAgICogQG5hbWUgZXhjZXB0aW9uVHJhY2tcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBvcHRpb25hbCBmaWVsZHM6XG4gICAqICAgICAnZmF0YWwnIChzdHJpbmcpLFxuICAgKiAgICAgJ2Rlc2NyaXB0aW9uJyAoc3RyaW5nKVxuICAgKlxuICAgKiBAaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2V4Y2VwdGlvbnNcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2V2ZW50c1xuICAgKi9cbiAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKHByb3BlcnRpZXMuZmF0YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIFwiZmF0YWxcIiBwcm92aWRlZCwgc2VuZGluZyB3aXRoIGZhdGFsPXRydWUnKTtcbiAgICAgIHByb3BlcnRpZXMuZmF0YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3BlcnRpZXMuZXhEZXNjcmlwdGlvbiA9IHByb3BlcnRpZXMuZGVzY3JpcHRpb247XG5cbiAgICB2YXIgZXZlbnRPcHRpb25zID0ge1xuICAgICAgZXhGYXRhbDogcHJvcGVydGllcy5mYXRhbCxcbiAgICAgIGV4RGVzY3JpcHRpb246IHByb3BlcnRpZXMuZGVzY3JpcHRpb25cbiAgICB9O1xuXG4gICAgZ2EoJ3NlbmQnLCAnZXhjZXB0aW9uJywgZXZlbnRPcHRpb25zKTtcbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudXNlcklkID0gdXNlcklkO1xuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgdGhpcy5zZXREaW1lbnNpb25zQW5kTWV0cmljcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VyIFRpbWluZ3MgRXZlbnQgaW4gR0FcbiAgICogQG5hbWUgdXNlclRpbWluZ3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBtYW5kYXRvcnkgZmllbGRzOlxuICAgKiAgICAgJ3RpbWluZ0NhdGVnb3J5JyAoc3RyaW5nKSxcbiAgICogICAgICd0aW1pbmdWYXInIChzdHJpbmcpLFxuICAgKiAgICAgJ3RpbWluZ1ZhbHVlJyAobnVtYmVyKVxuICAgKiBQcm9wZXJ0aWVzIGNhbiBhbHNvIGhhdmUgdGhlIG9wdGlvbmFsIGZpZWxkczpcbiAgICogICAgICd0aW1pbmdMYWJlbCcgKHN0cmluZylcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL3VzZXItdGltaW5nc1xuICAgKi9cbiAgdXNlclRpbWluZ3MocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKCFwcm9wZXJ0aWVzIHx8ICFwcm9wZXJ0aWVzLnRpbWluZ0NhdGVnb3J5IHx8ICFwcm9wZXJ0aWVzLnRpbWluZ1ZhciB8fCAhcHJvcGVydGllcy50aW1pbmdWYWx1ZSkge1xuICAgICAgY29uc29sZS5lcnJvcignUHJvcGVydGllcyB0aW1pbmdDYXRlZ29yeSwgdGltaW5nVmFyLCBhbmQgdGltaW5nVmFsdWUgYXJlIHJlcXVpcmVkIHRvIGJlIHNldC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2EpIHtcbiAgICAgIGdhKCdzZW5kJywgJ3RpbWluZycsIHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKGdhKSB7XG4gICAgICAvLyBhZGQgY3VzdG9tIGRpbWVuc2lvbnMgYW5kIG1ldHJpY3NcbiAgICAgIGZvciAodmFyIGlkeCA9IDE7IGlkeCA8PSAyMDA7IGlkeCsrKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzWydkaW1lbnNpb24nICsgaWR4LnRvU3RyaW5nKCldKSB7XG4gICAgICAgICAgZ2EoJ3NldCcsICdkaW1lbnNpb24nICsgaWR4LnRvU3RyaW5nKCksIHByb3BlcnRpZXNbJ2RpbWVuc2lvbicgKyBpZHgudG9TdHJpbmcoKV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzWydtZXRyaWMnICsgaWR4LnRvU3RyaW5nKCldKSB7XG4gICAgICAgICAgZ2EoJ3NldCcsICdtZXRyaWMnICsgaWR4LnRvU3RyaW5nKCksIHByb3BlcnRpZXNbJ21ldHJpYycgKyBpZHgudG9TdHJpbmcoKV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2dhL2FuZ3VsYXJ0aWNzMi1nYS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBkYXRhTGF5ZXI6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkdvb2dsZVRhZ01hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczJcbiAgKSB7XG5cbiAgICAvLyBUaGUgZGF0YUxheWVyIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkXG4gICAgaWYgKHR5cGVvZiBkYXRhTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIGRhdGFMYXllcikge1xuICAgICAgZGF0YUxheWVyID0gKDxhbnk+d2luZG93KS5kYXRhTGF5ZXIgPSAoPGFueT53aW5kb3cpLmRhdGFMYXllciB8fCBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5wYWdlVHJhY2tpbmcudHJhY2tSZWxhdGl2ZVBhdGggPSB0cnVlO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bSA9IHtcbiAgICAgIHVzZXJJZDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV4Y2VwdGlvblRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcbiAgfVxuXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaCh7XG4gICAgICAgICdldmVudCc6ICdQYWdlIFZpZXcnLFxuICAgICAgICAnY29udGVudC1uYW1lJzogcGF0aCxcbiAgICAgICAgJ3VzZXJJZCc6IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bS51c2VySWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGludGVyYWN0aW9ucyB0byB0aGUgZGF0YUxheWVyLCBpLmUuIGZvciBldmVudCB0cmFja2luZyBpbiBHb29nbGUgQW5hbHl0aWNzXG4gICAqIEBuYW1lIGV2ZW50VHJhY2tcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBSZXF1aXJlZCAnYWN0aW9uJyAoc3RyaW5nKSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkICdjYXRlZ29yeScgKHN0cmluZykgYW5kIG9wdGlvbmFsICBmaWVsZHMgJ2xhYmVsJyAoc3RyaW5nKSwgJ3ZhbHVlJyAoaW50ZWdlcikgYW5kICdub25pbnRlcmFjdGlvbicgKGJvb2xlYW4pXG4gICAqL1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcblxuICAgIC8vIFNldCBhIGRlZmF1bHQgR1RNIGNhdGVnb3J5XG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG5cbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaCh7XG4gICAgICAgIGV2ZW50OiBwcm9wZXJ0aWVzLmV2ZW50IHx8ICdpbnRlcmFjdGlvbicsXG4gICAgICAgIHRhcmdldDogcHJvcGVydGllcy5jYXRlZ29yeSB8fCAnRXZlbnQnLFxuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbGFiZWw6IHByb3BlcnRpZXMubGFiZWwsXG4gICAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnZhbHVlLFxuICAgICAgICBpbnRlcmFjdGlvblR5cGU6IHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb24sXG4gICAgICAgIHVzZXJJZDogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4Y2VwdGlvbiBUcmFjayBFdmVudCBpbiBHVE1cbiAgICogQG5hbWUgZXhjZXB0aW9uVHJhY2tcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBtYW5kYXRvcnkgZmllbGRzICdhcHBJZCcgKHN0cmluZyksICdhcHBOYW1lJyAoc3RyaW5nKSBhbmQgJ2FwcFZlcnNpb24nIChzdHJpbmcpIGFuZFxuICAgKiBvcHRpb25hbCAgZmllbGRzICdmYXRhbCcgKGJvb2xlYW4pIGFuZCAnZGVzY3JpcHRpb24nIChzdHJpbmcpXG4gICAqL1xuICBleGNlcHRpb25UcmFjayhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAoISBwcm9wZXJ0aWVzIHx8ICEgcHJvcGVydGllcy5hcHBJZCB8fCAhIHByb3BlcnRpZXMuYXBwTmFtZSB8fCAhIHByb3BlcnRpZXMuYXBwVmVyc2lvbikge1xuICAgICAgY29uc29sZS5lcnJvcignTXVzdCBiZSBzZXR0ZWQgYXBwSWQsIGFwcE5hbWUgYW5kIGFwcFZlcnNpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMuZmF0YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIFwiZmF0YWxcIiBwcm92aWRlZCwgc2VuZGluZyB3aXRoIGZhdGFsPXRydWUnKTtcbiAgICAgIHByb3BlcnRpZXMuZXhGYXRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcGVydGllcy5leERlc2NyaXB0aW9uID0gcHJvcGVydGllcy5ldmVudCA/IHByb3BlcnRpZXMuZXZlbnQuc3RhY2sgOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5ldmVudFRyYWNrKGBFeGNlcHRpb24gdGhyb3duIGZvciAke3Byb3BlcnRpZXMuYXBwTmFtZX0gPCR7cHJvcGVydGllcy5hcHBJZH1AJHtwcm9wZXJ0aWVzLmFwcFZlcnNpb259PmAsIHtcbiAgICAgICdjYXRlZ29yeSc6ICdFeGNlcHRpb24nLFxuICAgICAgJ2xhYmVsJzogcHJvcGVydGllcy5leERlc2NyaXB0aW9uXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVzZXJJZCBmb3IgdXNlIHdpdGggVW5pdmVyc2FsIEFuYWx5dGljcyBVc2VyIElEIGZlYXR1cmVcbiAgICogQG5hbWUgc2V0VXNlcm5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBSZXF1aXJlZCAndXNlcklkJyB2YWx1ZSAoc3RyaW5nKSB1c2VkIHRvIGlkZW50aWZ5IHVzZXIgY3Jvc3MtZGV2aWNlIGluIEdvb2dsZSBBbmFseXRpY3NcbiAgICovXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZCA9IHVzZXJJZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3Byb3ZpZGVycy9ndG0vYW5ndWxhcnRpY3MyLWd0bS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBfaHNxOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJIdWJzcG90IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXG4gICkge1xuICAgIGlmICh0eXBlb2YgX2hzcSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9oc3EgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCwgeC5sb2NhdGlvbikpO1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIF9oc3EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfaHNxLnB1c2goWydzZXRQYXRoJywgcGF0aF0pO1xuICAgICAgX2hzcS5wdXNoKFsndHJhY2tQYWdlVmlldyddKTtcbiAgICB9XG4gIH1cblxuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIF9oc3EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfaHNxLnB1c2goWyd0cmFja0V2ZW50JywgcHJvcGVydGllc10pO1xuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmICh0eXBlb2YgX2hzcSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9oc3EucHVzaChbJ2lkZW50aWZ5JywgcHJvcGVydGllc10pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3Byb3ZpZGVycy9odWJzcG90L2FuZ3VsYXJ0aWNzMi1odWJzcG90LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuLi8uLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMktpc3NtZXRyaWNzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXG4gICkge1xuICAgIGlmICh0eXBlb2YgKF9rbXEpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgX2ttcSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoLCB4LmxvY2F0aW9uKSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlcm5hbWUuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xuICB9XG5cbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb246IGFueSkge1xuICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdQYWdldmlldycsIHsgJ1BhZ2UnOiBwYXRoIH1dKTtcbiAgfVxuXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIF9rbXEucHVzaChbJ3JlY29yZCcsIGFjdGlvbiwgcHJvcGVydGllc10pO1xuICB9XG5cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcbiAgICBfa21xLnB1c2goWydpZGVudGlmeScsIHVzZXJJZF0pO1xuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgX2ttcS5wdXNoKFsnc2V0JywgcHJvcGVydGllc10pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2tpc3NtZXRyaWNzL2FuZ3VsYXJ0aWNzMi1raXNzbWV0cmljcy50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBtaXhwYW5lbDogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyTWl4cGFuZWwge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczJcbiAgKSB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgsIHgubG9jYXRpb24pKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZS5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc09uY2Uuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXNPbmNlKHgpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFN1cGVyUHJvcGVydGllcy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRTdXBlclByb3BlcnRpZXMoeCkpO1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0U3VwZXJQcm9wZXJ0aWVzT25jZS5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRTdXBlclByb3BlcnRpZXNPbmNlKHgpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldEFsaWFzLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldEFsaWFzKHgpKTtcbiAgfVxuXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgbWl4cGFuZWwudHJhY2soJ1BhZ2UgVmlld2VkJywgeyBwYWdlOiBwYXRoIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgbWl4cGFuZWwudHJhY2soYWN0aW9uLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgbWl4cGFuZWwuaWRlbnRpZnkodXNlcklkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIG1peHBhbmVsLnBlb3BsZS5zZXQocHJvcGVydGllcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJQcm9wZXJ0aWVzT25jZShwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgbWl4cGFuZWwucGVvcGxlLnNldF9vbmNlKHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTdXBlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIG1peHBhbmVsLnJlZ2lzdGVyKHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTdXBlclByb3BlcnRpZXNPbmNlKHByb3BlcnRpZXM6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBtaXhwYW5lbC5yZWdpc3Rlcl9vbmNlKHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRBbGlhcyhhbGlhczogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIG1peHBhbmVsLmFsaWFzKGFsaWFzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL21peHBhbmVsL2FuZ3VsYXJ0aWNzMi1taXhwYW5lbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xuXG5kZWNsYXJlIHZhciBfcGFxOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJQaXdpayB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMlxuICApIHtcbiAgICBpZiAodHlwZW9mIChfcGFxKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignUGl3aWsgbm90IGZvdW5kJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgsIHgubG9jYXRpb24pKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZS5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG5cbiAgfVxuXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgX3BhcS5wdXNoKFsnc2V0RG9jdW1lbnRUaXRsZScsIHdpbmRvdy5kb2N1bWVudC50aXRsZV0pO1xuICAgICAgX3BhcS5wdXNoKFsnc2V0Q3VzdG9tVXJsJywgcGF0aF0pO1xuICAgICAgX3BhcS5wdXNoKFsndHJhY2tQYWdlVmlldyddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChwcm9wZXJ0aWVzLnZhbHVlKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChwcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG4gICAgICAgIHByb3BlcnRpZXMudmFsdWUgPSBpc05hTihwYXJzZWQpID8gMCA6IHBhcnNlZDtcbiAgICAgIH1cbiAgICAgIF9wYXEucHVzaChbJ3RyYWNrRXZlbnQnLCBwcm9wZXJ0aWVzLmNhdGVnb3J5LCBhY3Rpb24sIHByb3BlcnRpZXMubGFiZWwsIHByb3BlcnRpZXMudmFsdWVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgX3BhcS5wdXNoKFsnc2V0VXNlcklkJywgdXNlcklkXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBfcGFxLnB1c2goWydzZXRDdXN0b21WYXJpYWJsZScsIHByb3BlcnRpZXNdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9wcm92aWRlcnMvcGl3aWsvYW5ndWxhcnRpY3MyLXBpd2lrLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuLi8uLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XG5cbmRlY2xhcmUgdmFyIGFuYWx5dGljczogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyU2VnbWVudCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMlxuICApIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCwgeC5sb2NhdGlvbikpO1xuXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcblxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzT25jZS5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XG5cbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRBbGlhcy5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRBbGlhcyh4KSk7XG4gIH1cblxuICAvLyBodHRwczovL3NlZ21lbnQuY29tL2RvY3MvbGlicmFyaWVzL2FuYWx5dGljcy5qcy8jcGFnZVxuICAvLyBhbmFseXRpY3MucGFnZShbY2F0ZWdvcnldLCBbbmFtZV0sIFtwcm9wZXJ0aWVzXSwgW29wdGlvbnNdLCBbY2FsbGJhY2tdKTtcbiAgLy8gVE9ETyA6IFN1cHBvcnQgb3B0aW9uYWwgcGFyYW1ldGVycyB3aGVyZSB0aGUgcGFyYW1ldGVyIG9yZGVyIGFuZCB0eXBlIGNoYW5nZXMgdGhlaXIgbWVhbmluZ1xuICAvLyBlLmcuXG4gIC8vIChzdHJpbmcpIGlzIChuYW1lKVxuICAvLyAoc3RyaW5nLCBzdHJpbmcpIGlzIChjYXRlZ29yeSwgbmFtZSlcbiAgLy8gKHN0cmluZywgb2JqZWN0KSBpcyAobmFtZSwgcHJvcGVydGllcylcbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb246IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBhbmFseXRpY3MucGFnZShwYXRoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gaHR0cHM6Ly9zZWdtZW50LmNvbS9kb2NzL2xpYnJhcmllcy9hbmFseXRpY3MuanMvI3RyYWNrXG4gIC8vIGFuYWx5dGljcy50cmFjayhldmVudCwgW3Byb3BlcnRpZXNdLCBbb3B0aW9uc10sIFtjYWxsYmFja10pO1xuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgYW5hbHl0aWNzLnRyYWNrKGFjdGlvbiwgcHJvcGVydGllcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGh0dHBzOi8vc2VnbWVudC5jb20vZG9jcy9saWJyYXJpZXMvYW5hbHl0aWNzLmpzLyNpZGVudGlmeVxuICAvLyBhbmFseXRpY3MuaWRlbnRpZnkoW3VzZXJJZF0sIFt0cmFpdHNdLCBbb3B0aW9uc10sIFtjYWxsYmFja10pO1xuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHByb3BlcnRpZXMudXNlcklkKSB7XG4gICAgICAgIGFuYWx5dGljcy5pZGVudGlmeShwcm9wZXJ0aWVzLnVzZXJJZCwgcHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmFseXRpY3MuaWRlbnRpZnkocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGh0dHBzOi8vc2VnbWVudC5jb20vZG9jcy9saWJyYXJpZXMvYW5hbHl0aWNzLmpzLyNhbGlhc1xuICAvLyBhbmFseXRpY3MuYWxpYXModXNlcklkLCBwcmV2aW91c0lkLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIHNldEFsaWFzKGFsaWFzOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgYW5hbHl0aWNzLmFsaWFzKGFsaWFzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL3NlZ21lbnQvYW5ndWxhcnRpY3MyLXNlZ21lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUmVwbGF5U3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9