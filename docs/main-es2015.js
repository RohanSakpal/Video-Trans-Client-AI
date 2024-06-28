(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_player_new_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-player/new-player.component */ "./src/app/new-player/new-player.component.ts");
/* harmony import */ var _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-dashboard/new-dashboard.component */ "./src/app/new-dashboard/new-dashboard.component.ts");






const routes = [
    { path: '', component: _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["NewDashboardComponent"] },
    // {path:'videoplayer/:id',component:PlayerComponent},
    { path: 'videoplayer/:id', component: _new_player_new_player_component__WEBPACK_IMPORTED_MODULE_2__["NewPlayerComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'VideoTrans';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _gcp_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gcp-data.service */ "./src/app/gcp-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _time_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time-format.pipe */ "./src/app/time-format.pipe.ts");
/* harmony import */ var _new_player_new_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-player/new-player.component */ "./src/app/new-player/new-player.component.ts");
/* harmony import */ var _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-dashboard/new-dashboard.component */ "./src/app/new-dashboard/new-dashboard.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_gcp_data_service__WEBPACK_IMPORTED_MODULE_7__["GcpDataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
        _time_format_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeFormatPipe"],
        _new_player_new_player_component__WEBPACK_IMPORTED_MODULE_10__["NewPlayerComponent"],
        _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["NewDashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                    _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
                    _time_format_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeFormatPipe"],
                    _new_player_new_player_component__WEBPACK_IMPORTED_MODULE_10__["NewPlayerComponent"],
                    _new_dashboard_new_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["NewDashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [_gcp_data_service__WEBPACK_IMPORTED_MODULE_7__["GcpDataService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gcp-data.service */ "./src/app/gcp-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DashboardComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_7_div_1_Template_video_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const video_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.visitPlayer(video_r3 == null ? null : video_r3.v_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r3 == null ? null : video_r3.video_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r3.videoname);
} }
function DashboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_7_div_1_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.videoArr);
} }
function DashboardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(router, gcpDataService) {
        this.router = router;
        this.gcpDataService = gcpDataService;
        this.videoArr = [];
        this.keyword = '';
        this.isDataNotFound = false;
    }
    ngOnInit() {
    }
    visitPlayer(id) {
        this.router.navigate([`/videoplayer/${id}`]);
    }
    keyupFunc() {
        this.isDataNotFound = false;
    }
    onSearch() {
        if (this.keyword != '') {
            sessionStorage.setItem('keyword', this.keyword);
            this.gcpDataService.getGcpData(this.keyword).subscribe(data => {
                this.videoArr = data;
                if (this.videoArr.length == 0) {
                    this.isDataNotFound = true;
                }
            });
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 9, vars: 4, consts: [[1, "body"], [1, "search-container"], ["type", "text", "placeholder", "Enter Keyword", 3, "ngModel", "ngModelChange", "keyup"], [3, "disabled", "click"], ["class", "videos-container", 4, "ngIf"], [4, "ngIf"], [1, "videos-container"], ["class", "video", 4, "ngFor", "ngForOf"], [1, "video"], [3, "src", "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Video Transcription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_4_listener($event) { return ctx.keyword = $event; })("keyup", function DashboardComponent_Template_input_keyup_4_listener() { return ctx.keyupFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_5_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.keyword == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoArr.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoArr.length == 0 && ctx.isDataNotFound);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".body[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  background-color: #f8f9fa;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 40px;\n}\n\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px 0 0 4px;\n  outline: none;\n}\n\n.search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 16px;\n  border: none;\n  background-color: #6f42c1;\n  color: white;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n}\n\n.search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: no-drop;\n}\n\n.videos-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.video[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 15px;\n  width: 250px;\n  text-align: center;\n}\n\n.video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcQURNSU5cXERlc2t0b3BcXEFuZ3VsYXJcXFZpZGVvVHJhbnMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcbmgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjQyYzE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBuby1kcm9wO1xyXG59XHJcbi52aWRlb3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcbi52aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi52aWRlbyB2aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY0MmMxO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLnZpZGVvcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDIwcHg7XG59XG5cbi52aWRlbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmlkZW8gdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gcp-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/gcp-data.service.ts ***!
  \*************************************/
/*! exports provided: GcpDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcpDataService", function() { return GcpDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class GcpDataService {
    constructor(http) {
        this.http = http;
        this.keyword = '';
        // private apiUrlGcpData = 'http://localhost:3000/api/gcp-data';
        // private apiUrlVideoData = 'http://localhost:3000/api/video-data';
        this.apiUrlGcpData = 'http://35.244.4.78:3000/api/gcp-data';
        this.apiUrlVideoData = 'http://35.244.4.78:3000/api/video-data';
    }
    getGcpData(keyword) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('keyword', keyword);
        return this.http.get(this.apiUrlGcpData, { params });
    }
    getVideoData(id) {
        this.keyword = sessionStorage.getItem('keyword');
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', id).set('keyword', this.keyword);
        return this.http.get(this.apiUrlVideoData, { params });
    }
}
GcpDataService.ɵfac = function GcpDataService_Factory(t) { return new (t || GcpDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GcpDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GcpDataService, factory: GcpDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GcpDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gemini.service.ts":
/*!***********************************!*\
  !*** ./src/app/gemini.service.ts ***!
  \***********************************/
/*! exports provided: GeminiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeminiService", function() { return GeminiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @google/generative-ai */ "./node_modules/@google/generative-ai/dist/index.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class GeminiService {
    constructor() {
        this.messageHistory = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.generationConfig = {
            temperature: 1,
            top_p: 1,
            top_k: 32,
        };
        this.safetySettings = [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
        ];
        this.generativeAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_2__["GoogleGenerativeAI"]('AIzaSyBK9jez2EI6_ABsXNopDzs6OYqEGXNVGdY');
    }
    generateText(prompt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro', generationConfig: this.generationConfig });
            this.messageHistory.next({
                from: 'user',
                message: prompt
            });
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            console.log('text', text);
            this.messageHistory.next({
                from: 'bot',
                message: text
            });
        });
    }
    getMessageHistory() {
        return this.messageHistory.asObservable();
    }
}
GeminiService.ɵfac = function GeminiService_Factory(t) { return new (t || GeminiService)(); };
GeminiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeminiService, factory: GeminiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeminiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/new-dashboard/new-dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/new-dashboard/new-dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: NewDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDashboardComponent", function() { return NewDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gcp-data.service */ "./src/app/gcp-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function NewDashboardComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewDashboardComponent_div_5_div_3_Template_video_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const video_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.visitPlayer(video_r32 == null ? null : video_r32.v_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r32 == null ? null : video_r32.video_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r32.videoname);
} }
function NewDashboardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewDashboardComponent_div_5_div_3_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.videoArr);
} }
function NewDashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewDashboardComponent {
    constructor(router, gcpDataService) {
        this.router = router;
        this.gcpDataService = gcpDataService;
        this.videoArr = [];
        this.keyword = '';
        this.isDataNotFound = false;
    }
    ngOnInit() {
        if (sessionStorage.getItem('keyword') !== null) {
            this.keyword = sessionStorage.getItem('keyword');
            this.onSearch();
        }
    }
    visitPlayer(id) {
        this.router.navigate([`/videoplayer/${id}`]);
    }
    keyupFunc() {
        this.isDataNotFound = false;
    }
    onSearch() {
        if (this.keyword != '') {
            sessionStorage.setItem('keyword', this.keyword);
            this.gcpDataService.getGcpData(this.keyword).subscribe(data => {
                this.videoArr = data;
                if (this.videoArr.length == 0) {
                    this.isDataNotFound = true;
                }
            });
        }
    }
}
NewDashboardComponent.ɵfac = function NewDashboardComponent_Factory(t) { return new (t || NewDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"])); };
NewDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewDashboardComponent, selectors: [["app-new-dashboard"]], decls: 12, vars: 4, consts: [[1, "body"], [1, "main-container"], ["class", "container", 4, "ngIf"], ["class", "notFound", 4, "ngIf"], [1, "search-bar"], ["type", "text", "placeholder", "Search for videos...", 3, "ngModel", "ngModelChange", "keyup"], [3, "disabled", "click"], [1, "container"], [1, "video-grid"], ["class", "video-card", 4, "ngFor", "ngForOf"], [1, "video-card"], [1, "video-thumbnail"], [3, "src", "click"], [1, "notFound"]], template: function NewDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Scrapio.AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewDashboardComponent_div_5_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewDashboardComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewDashboardComponent_Template_input_ngModelChange_9_listener($event) { return ctx.keyword = $event; })("keyup", function NewDashboardComponent_Template_input_keyup_9_listener() { return ctx.keyupFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewDashboardComponent_Template_button_click_10_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoArr.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoArr.length == 0 && ctx.isDataNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.keyword == "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".main-container[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background-color: #f0f4f8;\n  margin: 0;\n  padding: 0;\n  color: #333;\n  width: 100%;\n}\n\nheader[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #333;\n  width: 100%;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  width: 100%;\n  background-color: transparent;\n  text-align: center;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  padding: 20px 0;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  color: #333;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 60%;\n  border: 2px solid #667eea;\n  border-right: none;\n  border-radius: 4px 0 0 4px;\n  outline: none;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  background-color: #667eea;\n  color: #fff;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: no-drop;\n}\n\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #5563c1;\n}\n\n.body[_ngcontent-%COMP%] {\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  max-height: calc(100vh - 140px);\n  overflow-y: auto;\n}\n\n.video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  width: 100%;\n}\n\n.video-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s, box-shadow 0.3s;\n  width: 350px;\n  padding: 10px;\n}\n\n.video-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n\n.video-thumbnail[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  flex-direction: column;\n}\n\n.video-thumbnail[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 70%;\n  cursor: pointer;\n}\n\n.video-thumbnail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.video-thumbnail[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 80px;\n  height: 80px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n  color: #333;\n}\n\n.notFound[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWRhc2hib2FyZC9DOlxcVXNlcnNcXEFETUlOXFxEZXNrdG9wXFxBbmd1bGFyXFxWaWRlb1RyYW5zL3NyY1xcYXBwXFxuZXctZGFzaGJvYXJkXFxuZXctZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXctZGFzaGJvYXJkL25ldy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNBRjs7QURFRTtFQUNFLGVBQUE7QUNBSjs7QURNQTtFQUNFLHlCQUFBO0FDSEY7O0FETUE7RUFFRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRGFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNWRjs7QURhQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1ZGOztBRGFBO0VBRUUsc0JBQUE7RUFDQSwwQ0FBQTtBQ1hGOztBRGNBO0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ1pGOztBRGNFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDWko7O0FEZUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURrQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QUQ4QkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQzNCRjs7QUQ4QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDM0JGIiwiZmlsZSI6InNyYy9hcHAvbmV3LWRhc2hib2FyZC9uZXctZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmODtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzMzMztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaDEge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIgaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNjY3ZWVhO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2N2VlYTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG5cclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uc2VhcmNoLWJhciBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTYzYzE7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAvLyBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgLyogQWRqdXN0IGJhc2VkIG9uIGhlYWRlciBoZWlnaHQgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC8vbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQwcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi52aWRlby1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udmlkZW8tY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnZpZGVvLWNhcmQ6aG92ZXIge1xyXG4gIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4udmlkZW8tdGh1bWJuYWlsIHtcclxuICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB2aWRlbyB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnZpZGVvLXRodW1ibmFpbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC52aWRlby10aHVtYm5haWw6OmFmdGVyIHtcclxuLy8gICBjb250ZW50OiAnJztcclxuLy8gICB3aWR0aDogMDtcclxuLy8gICBoZWlnaHQ6IDA7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDI0cHggc29saWQgIzY2N2VlYTtcclxuLy8gICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGxlZnQ6IGNhbGMoNTAlIC0gMTJweCk7XHJcbi8vICAgdG9wOiBjYWxjKDUwJSAtIDE2cHgpO1xyXG4vLyB9XHJcblxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ubm90Rm91bmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDQwJTtcclxufSIsIi5tYWluLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGY4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIGgxIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLWJhciBpbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjdlZWE7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY3ZWVhO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuLnNlYXJjaC1iYXIgYnV0dG9uIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLnNlYXJjaC1iYXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjNjMTtcbn1cblxuLmJvZHkge1xuICAvKiBBZGp1c3QgYmFzZWQgb24gaGVhZGVyIGhlaWdodCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4udmlkZW8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52aWRlby1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnZpZGVvLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi52aWRlby10aHVtYm5haWwge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnZpZGVvLXRodW1ibmFpbCB2aWRlbyB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogNzAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udmlkZW8tdGh1bWJuYWlsIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi52aWRlby10aHVtYm5haWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5ub3RGb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA0MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-dashboard',
                templateUrl: './new-dashboard.component.html',
                styleUrls: ['./new-dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/new-player/new-player.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-player/new-player.component.ts ***!
  \****************************************************/
/*! exports provided: NewPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPlayerComponent", function() { return NewPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gcp-data.service */ "./src/app/gcp-data.service.ts");
/* harmony import */ var _gemini_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gemini.service */ "./src/app/gemini.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _time_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../time-format.pipe */ "./src/app/time-format.pipe.ts");








const _c0 = ["myVideo"];
const _c1 = function (a0) { return { "highlight": a0 }; };
function NewPlayerComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewPlayerComponent_div_25_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r18 = ctx.$implicit; const i_r19 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onCheckboxChange($event, item_r18.transcript, i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPlayerComponent_div_25_div_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r18 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.timeForwardBackward(item_r18.start); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r17.isCurrentTimeInRange(item_r18.start, item_r18.end)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, item_r18.start), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, item_r18.end), ". ", item_r18.transcript, "");
} }
function NewPlayerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPlayerComponent_div_25_div_1_Template, 6, 11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.video == null ? null : ctx_r14.video.dataFull);
} }
function NewPlayerComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPlayerComponent_div_26_div_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r24 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.timeForwardBackward(item_r24.start); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r23.isCurrentTimeInRange(item_r24.start, item_r24.end)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r24.start), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, item_r24.end), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24.transcript, "");
} }
function NewPlayerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPlayerComponent_div_26_div_1_Template, 7, 10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.video == null ? null : ctx_r15.video.data);
} }
const _c2 = function (a0, a1) { return { "team-avatar": a0, "user-avatar": a1 }; };
function NewPlayerComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, item_r28.from === "bot", item_r28.from !== "bot"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.message);
} }
const _c3 = function (a0) { return { "active": a0 }; };
class NewPlayerComponent {
    constructor(route, gcp, geminiServ) {
        this.route = route;
        this.gcp = gcp;
        this.geminiServ = geminiServ;
        this.currentMsg = '';
        this.Category = '';
        this.videoName = '';
        this.videoFrame = '';
        this.currentTimeIndex = 0;
        this.isFullTranscript = false;
        //prompt:string = 'Hi Gemini How Are you?';
        this.selectedTranscripts = [];
        this.prompt = 'Can you write me content for this transcription or suggest any content ideas';
        this.chatHistory = [];
        this.geminiServ.getMessageHistory().subscribe((res) => {
            var _a;
            if (res) {
                this.prompt = '';
                this.selectedTranscripts = [];
                (_a = this.video.dataFull) === null || _a === void 0 ? void 0 : _a.map(m => {
                    m['status'] = false;
                });
                this.chatHistory.push(res);
                console.log("this.video", this.video);
            }
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.videoId = params.get('id');
            this.loadVideo(this.videoId);
        });
    }
    ngAfterViewInit() {
        this.videoElm = this.myVideo.nativeElement;
        // this.startVideoAtTimeIfNeeded();
    }
    loadVideo(id) {
        this.gcp.getVideoData(id).subscribe((res) => {
            var _a;
            // this.video = {
            //   v_id: res[0].v_id,
            //   video_link: res[0].video_link,
            //   data: res
            // }
            this.video = {
                v_id: res.FullTransquery[0].v_id,
                video_link: res.FullTransquery[0].video_link,
                data: res.MatchTrascQuery,
                dataFull: (_a = res.FullTransquery) === null || _a === void 0 ? void 0 : _a.map(m => {
                    return Object.assign(Object.assign({}, m), { status: false });
                }),
            };
            console.log('video', this.video);
            //this.video = this.videoArr.find(v => v.id === +this.videoId);
            this.Category = this.video.dataFull[0].category;
            this.videoName = this.video.dataFull[0].videoname;
            this.startVideoAtTimeIfNeeded();
        }, (err) => {
            console.log(err);
        });
    }
    startVideoAtTimeIfNeeded() {
        if (this.video && this.videoElm) {
            if (this.video.data.length > 0) {
                if (!isNaN(this.video.data[this.currentTimeIndex].start) && this.video.data[this.currentTimeIndex].start >= 0) {
                    this.videoElm.src = this.video.video_link; // Set the video source
                    this.videoElm.currentTime = this.video.data[this.currentTimeIndex].start;
                    this.videoElm.play();
                }
                else {
                    alert("Please enter a valid start time.");
                }
            }
            else {
                this.isFullTranscript = true;
                if (!isNaN(this.video.dataFull[this.currentTimeIndex].start) && this.video.dataFull[this.currentTimeIndex].start >= 0) {
                    this.videoElm.src = this.video.video_link; // Set the video source
                    this.videoElm.currentTime = this.video.dataFull[this.currentTimeIndex].start;
                    this.videoElm.play();
                }
                else {
                    alert("Please enter a valid start time.");
                }
            }
        }
    }
    timeForwardBackward(startime) {
        this.videoElm.currentTime = startime;
        this.videoElm.play();
    }
    onNextClick() {
        this.currentTimeIndex++;
        if (this.currentTimeIndex < this.video.time.length) {
            const nextSegment = this.video.time[this.currentTimeIndex];
            this.videoElm.currentTime = nextSegment.Start;
            this.videoElm.play();
        }
        else {
            alert("Please enter a valid start time.");
        }
    }
    onTimeUpdate() {
        this.currentMsg = '';
        this.videoFrame = '';
        let number = this.videoElm.currentTime;
        for (let i = 0; i < this.video.data.length; i++) {
            if (number >= this.video.data[i].start && number <= this.video.data[i].end) {
                this.videoFrame = this.convertSecondsToMMSS(this.video.data[i].start) + " - " + this.convertSecondsToMMSS(this.video.data[i].end) + " Minutes";
                this.currentMsg = this.video.data[i].speaker + " : " + this.video.data[i].transcript;
            }
        }
    }
    convertSecondsToMMSS(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.ceil(seconds % 60);
        return `${this.padToTwoDigits(minutes)}:${this.padToTwoDigits(remainingSeconds)}`;
    }
    padToTwoDigits(num) {
        return num.toString().padStart(2, '0');
    }
    isCurrentTimeInRange(startTime, endTime) {
        if (!this.videoElm)
            return false; // Ensure video element is available
        const currentTime = this.videoElm.currentTime;
        return currentTime >= startTime && currentTime <= endTime;
    }
    transcriptChange() {
        this.isFullTranscript = !this.isFullTranscript;
    }
    sendData() {
        console.log(this.selectedTranscripts);
        let arrayString = this.selectedTranscripts.join(', ');
        let validPrompt = arrayString + this.prompt;
        console.log(validPrompt);
        if (validPrompt) {
            let msg = this.geminiServ.generateText(this.prompt);
        }
    }
    onCheckboxChange(event, transcript, index) {
        if (event.target.checked) {
            this.selectedTranscripts.push(transcript);
            this.video.dataFull[index].status = true;
            console.log(this.video.dataFull);
        }
        else {
            const index = this.selectedTranscripts.indexOf(transcript);
            if (index > -1) {
                this.selectedTranscripts.splice(index, 1);
            }
        }
    }
}
NewPlayerComponent.ɵfac = function NewPlayerComponent_Factory(t) { return new (t || NewPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gemini_service__WEBPACK_IMPORTED_MODULE_3__["GeminiService"])); };
NewPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPlayerComponent, selectors: [["app-new-player"]], viewQuery: function NewPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myVideo = _t.first);
    } }, decls: 35, vars: 14, consts: [[1, "container"], [1, "subContainer"], [1, "videoPlayer"], ["routerLink", ""], [1, "titleHeader"], ["controls", "", 3, "timeupdate"], ["myVideo", ""], ["type", "video/mp4", 3, "src"], [1, "transcriptContainer"], [1, "transcript-tabs"], [1, "tab", 3, "ngClass", "click"], ["class", "transcript-content", 4, "ngIf"], [1, "geminiContainer"], [1, "chat-container"], ["class", "message user-message", 4, "ngFor", "ngForOf"], [1, "chat-input"], ["type", "text", "placeholder", "Write Something...", 3, "ngModel", "ngModelChange"], [1, "chat-icons"], [1, "icon-button", 3, "disabled", "click"], [1, "transcript-content"], ["class", "transcript-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "transcript-item", 3, "ngClass"], ["type", "checkbox", 3, "checked", "change"], [3, "click"], [1, "message", "user-message"], [1, "avatar", 3, "ngClass"], [1, "text"]], template: function NewPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Video Title :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "video", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeupdate", function NewPlayerComponent_Template_video_timeupdate_16_listener() { return ctx.onTimeUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "source", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPlayerComponent_Template_button_click_21_listener() { return ctx.transcriptChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Full Transcription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPlayerComponent_Template_button_click_23_listener() { return ctx.transcriptChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Matched Transcription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewPlayerComponent_div_25_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewPlayerComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NewPlayerComponent_div_29_Template, 4, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewPlayerComponent_Template_input_ngModelChange_31_listener($event) { return ctx.prompt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPlayerComponent_Template_button_click_33_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u27A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.videoName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.video == null ? null : ctx.video.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx.isFullTranscript));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, !ctx.isFullTranscript));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFullTranscript);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFullTranscript);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.prompt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prompt == "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_time_format_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeFormatPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 60%;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 0px;\n  height: 100%;\n  background-color: #085bb3;\n  color: #fff;\n  margin: 0px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #064282;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .titleHeader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .titleHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #888;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .titleHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: black;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  height: calc(100% - 50px);\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .videoPlayer[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  height: 50px;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #ccc;\n  border-bottom: none;\n  background-color: #f0f4f8;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background-color: #085bb3;\n  border-top: 3px solid #667eea;\n  font-weight: bold;\n  color: #fff;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: 3px solid #667eea;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-content[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 15px;\n  overflow-y: auto;\n  background-color: #f9f9f9;\n  height: calc(100% - 50px);\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-content[_ngcontent-%COMP%]   .transcript-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-content[_ngcontent-%COMP%]   .transcript-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 3px;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-content[_ngcontent-%COMP%]   .transcript-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .subContainer[_ngcontent-%COMP%]   .transcriptContainer[_ngcontent-%COMP%]   .transcript-content[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  background-color: lightblue;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%] {\n  border: 1px solid;\n  height: 40%;\n  background-color: #f0f4f8;\n  margin: 0;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  height: 75%;\n  overflow: auto;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #ccc;\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .team-avatar[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: #e9f5ff;\n  padding: 5px 15px;\n  border-radius: 20px;\n  max-width: 80%;\n  text-wrap: balance;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .user-message[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: #e9f5ff;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .team-message[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 600px;\n  margin: 10px auto;\n  padding: 7px;\n  background-color: #fff;\n  border-radius: 25px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: none;\n  outline: none;\n  padding: 10px;\n  border-radius: 25px;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .chat-icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: no-drop;\n}\n.container[_ngcontent-%COMP%]   .geminiContainer[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBsYXllci9DOlxcVXNlcnNcXEFETUlOXFxEZXNrdG9wXFxBbmd1bGFyXFxWaWRlb1RyYW5zL3NyY1xcYXBwXFxuZXctcGxheWVyXFxuZXctcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXctcGxheWVyL25ldy1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQzNNRjtBRDZNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUMzTUo7QUQ2TUk7RUFDRSxVQUFBO0FDM01OO0FENk1NO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQzNNUjtBRDRNUTtFQUNFLGFBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFJQSxlQUFBO0VBQ0EsNEJBQUE7QUMvTVY7QURpTlU7RUFDRSx5QkFBQTtBQy9NWjtBRG9OUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDbE5WO0FEc05RO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDcE5WO0FEc05VO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDcE5aO0FEeU5NO0VBQ0UseUJBQUE7QUN2TlI7QUR3TlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDdE5WO0FEMk5JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUN6Tk47QUQyTk07RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ3pOUjtBRDJOUTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDek5WO0FEMk5VO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3pOWjtBRDhOTTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQzVOUjtBRCtOTTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDN05SO0FEK05RO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUM3TlY7QUQrTlU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUM3Tlo7QURnT1U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUM5Tlo7QURrT1E7RUFDRSwyQkFBQTtBQ2hPVjtBRHNPRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNwT0o7QURzT0k7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNwT047QURzT007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3BPUjtBRHNPUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDcE9WO0FEdU9RO0VBQ0UseUJBQUE7QUNyT1Y7QUR3T1E7RUFDRSx5QkFBQTtBQ3RPVjtBRDJPSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtBQ3pPTjtBRDRPSTtFQUNFLHlCQUFBO0FDMU9OO0FENk9JO0VBQ0UseUJBQUE7QUMzT047QUQ4T0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQzVPTjtBRCtPSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzdPTjtBRGdQSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDOU9OO0FEK09NO0VBQ0UsZUFBQTtBQzdPUjtBRGlQSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUMvT04iLCJmaWxlIjoic3JjL2FwcC9uZXctcGxheWVyL25ldy1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYm9keSB7XHJcbi8vICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4vLyAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmODtcclxuLy8gICAvLyBtYXJnaW46IDA7XHJcbi8vICAgLy8gcGFkZGluZzogMDtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgbWluLWhlaWdodDogMTAwdmg7XHJcbi8vICAgY29sb3I6ICMzMzM7XHJcbi8vIH1cclxuXHJcbi8vIGhlYWRlciB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiAxNTBweDtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgYnV0dG9uIHtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB9XHJcblxyXG4vLyAgIC50aXRsZUhlYWRlcntcclxuLy8gICAgIHBhZGRpbmc6IDAgMjBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC5jb250YWluZXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgcGFkZGluZzogMCAyMHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbi8vICAgLy9tYXgtd2lkdGg6IDkwMHB4O1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIGgxIHtcclxuLy8gICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gICBjb2xvcjogIzMzMztcclxuLy8gfVxyXG5cclxuLy8gcCB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGNvbG9yOiAjODg4O1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4vLyAgIHNwYW4ge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC52aWRlby1wbGF5ZXIge1xyXG4vLyAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSwgIzc2NGJhMik7XHJcbi8vICAgd2lkdGg6IDUwJTtcclxuLy8gICBoZWlnaHQ6IDQ1MHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gfVxyXG5cclxuLy8gLnZpZGVvLXBsYXllciB2aWRlbyB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIHBhZGRpbmc6IDFweDtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuLy8gfVxyXG5cclxuLy8gLnBsYXktYnV0dG9uIHtcclxuLy8gICB3aWR0aDogODBweDtcclxuLy8gICBoZWlnaHQ6IDgwcHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuLy8gfVxyXG5cclxuLy8gLnBsYXktYnV0dG9uOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbi8vIH1cclxuXHJcbi8vIC5wbGF5LWJ1dHRvbjo6YmVmb3JlIHtcclxuLy8gICBjb250ZW50OiAnJztcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgd2lkdGg6IDA7XHJcbi8vICAgaGVpZ2h0OiAwO1xyXG4vLyAgIGJvcmRlci1sZWZ0OiAyNHB4IHNvbGlkICM2NjdlZWE7XHJcbi8vICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuLy8gICBib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyAudHJhbnNjcmlwdC1jb250YWluZXIge1xyXG4vLyAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTRlN2VjO1xyXG4vLyAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgIHdpZHRoOiA1MCU7XHJcbi8vICAgaGVpZ2h0OiA4MCU7XHJcbi8vIH1cclxuXHJcbi8vIC50cmFuc2NyaXB0LWhlYWRlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAudHJhbnNjcmlwdC1oZWFkZXIgaDIge1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gICBmb250LXNpemU6IDIycHg7XHJcbi8vICAgY29sb3I6ICM2NjdlZWE7XHJcbi8vIH1cclxuXHJcbi8vIC50cmFuc2NyaXB0LXNlYXJjaCB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gfVxyXG5cclxuLy8gLnRyYW5zY3JpcHQtc2VhcmNoIGlucHV0IHtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbi8vICAgb3V0bGluZTogbm9uZTtcclxuLy8gICB3aWR0aDogMjAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC50cmFuc2NyaXB0LXNlYXJjaCBidXR0b24ge1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzY2N2VlYTtcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4vLyB9XHJcblxyXG4vLyAudHJhbnNjcmlwdC1zZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2M2MxO1xyXG4vLyB9XHJcblxyXG4vLyAudHJhbnNjcmlwdC10YWJzIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcblxyXG4vLyAudGFiIHtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuLy8gICBib3JkZXItYm90dG9tOiBub25lO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0Zjg7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuLy8gfVxyXG5cclxuLy8gLnRhYi5hY3RpdmUge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM2NjdlZWE7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIC50cmFuc2NyaXB0LWNvbnRlbnQge1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgIHBhZGRpbmc6IDE1cHg7XHJcbi8vICAgLy9tYXgtaGVpZ2h0OiAyMDBweDtcclxuLy8gICBvdmVyZmxvdy15OiBhdXRvO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyB9XHJcblxyXG4vLyAudHJhbnNjcmlwdC1pdGVtIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC50cmFuc2NyaXB0LWl0ZW0gaW5wdXQge1xyXG4vLyAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICBtYXJnaW4tdG9wOiAzcHg7XHJcbi8vIH1cclxuXHJcbi8vIC50cmFuc2NyaXB0LWl0ZW0gc3BhbiB7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuLy8gfVxyXG5cclxuLy8gLmhpZ2hsaWdodCB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4vLyB9XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIC5zdWJDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICAudmlkZW9QbGF5ZXIge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAvL21hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg1YmIzO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIC8vZmxleDogMTtcclxuICAgICAgICAgIC8vbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIC8vIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oIzA4NWJiMywgMTAlKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGVIZWFkZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC50aXRsZUhlYWRlciBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtYWluIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYW5zY3JpcHRDb250YWluZXIge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAudHJhbnNjcmlwdC10YWJzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgLnRhYiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0Zjg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg1YmIzO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzY2N2VlYTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhYi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM2NjdlZWE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50cmFuc2NyaXB0LWNvbnRlbnQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcblxyXG4gICAgICAgIC50cmFuc2NyaXB0LWl0ZW0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nZW1pbmlDb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0Zjg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXItYXZhdGFyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVhbS1hdmF0YXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZmY7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgdGV4dC13cmFwOiBiYWxhbmNlO1xyXG4gICAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLW1lc3NhZ2UgLnRleHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWZmO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWFtLW1lc3NhZ2UgLnRleHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0LWlucHV0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1pbnB1dCBpbnB1dCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0LWljb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5jb250YWluZXIgLnN1YkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNjAlO1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC52aWRlb1BsYXllciB7XG4gIHdpZHRoOiA1MCU7XG59XG4uY29udGFpbmVyIC5zdWJDb250YWluZXIgLnZpZGVvUGxheWVyIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jb250YWluZXIgLnN1YkNvbnRhaW5lciAudmlkZW9QbGF5ZXIgaGVhZGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODViYjM7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC52aWRlb1BsYXllciBoZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NDI4Mjtcbn1cbi5jb250YWluZXIgLnN1YkNvbnRhaW5lciAudmlkZW9QbGF5ZXIgaGVhZGVyIC50aXRsZUhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC52aWRlb1BsYXllciBoZWFkZXIgLnRpdGxlSGVhZGVyIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4ODg7XG59XG4uY29udGFpbmVyIC5zdWJDb250YWluZXIgLnZpZGVvUGxheWVyIGhlYWRlciAudGl0bGVIZWFkZXIgcCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC52aWRlb1BsYXllciBtYWluIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbn1cbi5jb250YWluZXIgLnN1YkNvbnRhaW5lciAudmlkZW9QbGF5ZXIgbWFpbiB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC50cmFuc2NyaXB0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC50cmFuc2NyaXB0Q29udGFpbmVyIC50cmFuc2NyaXB0LXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY29udGFpbmVyIC5zdWJDb250YWluZXIgLnRyYW5zY3JpcHRDb250YWluZXIgLnRyYW5zY3JpcHQtdGFicyAudGFiIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGY4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cbi5jb250YWluZXIgLnN1YkNvbnRhaW5lciAudHJhbnNjcmlwdENvbnRhaW5lciAudHJhbnNjcmlwdC10YWJzIC50YWIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NWJiMztcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM2NjdlZWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXIgLnN1YkNvbnRhaW5lciAudHJhbnNjcmlwdENvbnRhaW5lciAudGFiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNjY3ZWVhO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnN1YkNvbnRhaW5lciAudHJhbnNjcmlwdENvbnRhaW5lciAudHJhbnNjcmlwdC1jb250ZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC50cmFuc2NyaXB0Q29udGFpbmVyIC50cmFuc2NyaXB0LWNvbnRlbnQgLnRyYW5zY3JpcHQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC50cmFuc2NyaXB0Q29udGFpbmVyIC50cmFuc2NyaXB0LWNvbnRlbnQgLnRyYW5zY3JpcHQtaXRlbSBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC50cmFuc2NyaXB0Q29udGFpbmVyIC50cmFuc2NyaXB0LWNvbnRlbnQgLnRyYW5zY3JpcHQtaXRlbSBzcGFuIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc3ViQ29udGFpbmVyIC50cmFuc2NyaXB0Q29udGFpbmVyIC50cmFuc2NyaXB0LWNvbnRlbnQgLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cbi5jb250YWluZXIgLmdlbWluaUNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmODtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhaW5lciAuZ2VtaW5pQ29udGFpbmVyIC5jaGF0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogNzUlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmdlbWluaUNvbnRhaW5lciAuY2hhdC1jb250YWluZXIgLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb250YWluZXIgLmdlbWluaUNvbnRhaW5lciAuY2hhdC1jb250YWluZXIgLm1lc3NhZ2UgLmF2YXRhciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuZ2VtaW5pQ29udGFpbmVyIC5jaGF0LWNvbnRhaW5lciAubWVzc2FnZSAudXNlci1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufVxuLmNvbnRhaW5lciAuZ2VtaW5pQ29udGFpbmVyIC5jaGF0LWNvbnRhaW5lciAubWVzc2FnZSAudGVhbS1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLmNvbnRhaW5lciAuZ2VtaW5pQ29udGFpbmVyIC50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVmZjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1heC13aWR0aDogODAlO1xuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG59XG4uY29udGFpbmVyIC5nZW1pbmlDb250YWluZXIgLnVzZXItbWVzc2FnZSAudGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZmY7XG59XG4uY29udGFpbmVyIC5nZW1pbmlDb250YWluZXIgLnRlYW0tbWVzc2FnZSAudGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4uY29udGFpbmVyIC5nZW1pbmlDb250YWluZXIgLmNoYXQtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNvbnRhaW5lciAuZ2VtaW5pQ29udGFpbmVyIC5jaGF0LWlucHV0IGlucHV0IHtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uY29udGFpbmVyIC5nZW1pbmlDb250YWluZXIgLmNoYXQtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jb250YWluZXIgLmdlbWluaUNvbnRhaW5lciAuY2hhdC1pY29ucyBidXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG4uY29udGFpbmVyIC5nZW1pbmlDb250YWluZXIgLmljb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-player',
                templateUrl: './new-player.component.html',
                styleUrls: ['./new-player.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"] }, { type: _gemini_service__WEBPACK_IMPORTED_MODULE_3__["GeminiService"] }]; }, { myVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myVideo']
        }] }); })();


/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gcp-data.service */ "./src/app/gcp-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _time_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../time-format.pipe */ "./src/app/time-format.pipe.ts");






const _c0 = ["myVideo"];
const _c1 = function (a0) { return { "highlight": a0 }; };
function PlayerComponent_div_17_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_div_17_tr_11_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.timeForwardBackward(item_r9.start); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx_r8.isCurrentTimeInRange(item_r9.start, item_r9.end)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, item_r9.start), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, item_r9.end), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.speaker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.transcript.length > 25 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 10, item_r9.transcript, 0, 25) + "..." : item_r9.transcript);
} }
function PlayerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Interval (Min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Transcript");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlayerComponent_div_17_tr_11_Template, 12, 16, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.video.data);
} }
class PlayerComponent {
    constructor(route, gcp) {
        this.route = route;
        this.gcp = gcp;
        this.currentMsg = '';
        this.Category = '';
        this.videoFrame = '';
        this.currentTimeIndex = 0;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.videoId = params.get('id');
            this.loadVideo(this.videoId);
        });
    }
    ngAfterViewInit() {
        this.videoElm = this.myVideo.nativeElement;
        // this.startVideoAtTimeIfNeeded();
    }
    loadVideo(id) {
        this.gcp.getVideoData(id).subscribe((res) => {
            this.video = {
                v_id: res[0].v_id,
                video_link: res[0].video_link,
                data: res
            };
            console.log(this.video);
            //this.video = this.videoArr.find(v => v.id === +this.videoId);
            this.Category = this.video.data[0].category;
            this.startVideoAtTimeIfNeeded();
        }, (err) => {
            console.log(err);
        });
    }
    startVideoAtTimeIfNeeded() {
        if (this.video && this.videoElm) {
            if (!isNaN(this.video.data[this.currentTimeIndex].start) && this.video.data[this.currentTimeIndex].start >= 0) {
                this.videoElm.src = this.video.video_link; // Set the video source
                this.videoElm.currentTime = this.video.data[this.currentTimeIndex].start;
                this.videoElm.play();
            }
            else {
                alert("Please enter a valid start time.");
            }
        }
    }
    timeForwardBackward(startime) {
        this.videoElm.currentTime = startime;
        this.videoElm.play();
    }
    onNextClick() {
        this.currentTimeIndex++;
        if (this.currentTimeIndex < this.video.time.length) {
            const nextSegment = this.video.time[this.currentTimeIndex];
            this.videoElm.currentTime = nextSegment.Start;
            this.videoElm.play();
        }
        else {
            alert("Please enter a valid start time.");
        }
    }
    onTimeUpdate() {
        this.currentMsg = '';
        this.videoFrame = '';
        let number = this.videoElm.currentTime;
        // const currentTime = this.videoElm.currentTime;
        // const currentSegment = this.video.time.find(segment => currentTime >= segment.secFrom && currentTime <= segment.secTo);
        // this.currentMsg = currentSegment ? currentSegment.msg : '';
        for (let i = 0; i < this.video.data.length; i++) {
            if (number >= this.video.data[i].start && number <= this.video.data[i].end) {
                this.videoFrame = this.convertSecondsToMMSS(this.video.data[i].start) + " - " + this.convertSecondsToMMSS(this.video.data[i].end) + " Minutes";
                this.currentMsg = this.video.data[i].speaker + " : " + this.video.data[i].transcript;
            }
        }
    }
    convertSecondsToMMSS(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.ceil(seconds % 60);
        return `${this.padToTwoDigits(minutes)}:${this.padToTwoDigits(remainingSeconds)}`;
    }
    padToTwoDigits(num) {
        return num.toString().padStart(2, '0');
    }
    isCurrentTimeInRange(startTime, endTime) {
        if (!this.videoElm)
            return false; // Ensure video element is available
        const currentTime = this.videoElm.currentTime;
        return currentTime >= startTime && currentTime <= endTime;
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], viewQuery: function PlayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myVideo = _t.first);
    } }, decls: 18, vars: 5, consts: [[1, "body"], [1, "container"], [1, "video-head"], [1, "video-title"], [1, "video-thumbnail"], ["controls", "", 3, "timeupdate"], ["myVideo", ""], ["type", "video/mp4", 3, "src"], [1, "transcription"], ["class", "tableContainer", 4, "ngIf"], [1, "tableContainer"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "video", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeupdate", function PlayerComponent_Template_video_timeupdate_8_listener() { return ctx.onTimeUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlayerComponent_div_17_Template, 12, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.video == null ? null : ctx.video.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.videoFrame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.video);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_time_format_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeFormatPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".body[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background-color: #f8f9fa;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  height: 100vh;\n  margin: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 80%;\n  max-width: 800px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.video-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.video-thumbnail[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  position: relative;\n}\n\n.video-thumbnail[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.video-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.transcription[_ngcontent-%COMP%] {\n  border-top: 1px solid #ccc;\n  padding-top: 20px;\n}\n\n.transcription[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 5px 0;\n  line-height: 1.5;\n}\n\n.transcription[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\ntable[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: lightblue;\n}\n\ntd[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background-color: yellow;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0M6XFxVc2Vyc1xcQURNSU5cXERlc2t0b3BcXEFuZ3VsYXJcXFZpZGVvVHJhbnMvc3JjXFxhcHBcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNBSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FERkk7RUFDSSxZQUFBO0FDSVI7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNHSjs7QUREQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0FDTUo7O0FESkE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ09KOztBREpFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNPSjs7QURMRTtFQUNFLDJCQUFBO0FDUUo7O0FETkU7RUFDRSxlQUFBO0FDU0o7O0FEUEU7RUFDRSx3QkFBQTtFQUEwQixnREFBQTtBQ1c5QiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4udmlkZW8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udmlkZW8tdGh1bWJuYWlsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmlkZW8taGVhZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRyYW5zY3JpcHRpb24ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4udHJhbnNjcmlwdGlvbiBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4udHJhbnNjcmlwdGlvbiBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgfVxyXG4gIHRkIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7IC8qIENoYW5nZSB0aGlzIHRvIHlvdXIgZGVzaXJlZCBoaWdobGlnaHQgY29sb3IgKi9cclxuICB9XHJcbiAgIiwiLmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udmlkZW8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZpZGVvLXRodW1ibmFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi52aWRlby10aHVtYm5haWwgdmlkZW8ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52aWRlby1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udHJhbnNjcmlwdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRyYW5zY3JpcHRpb24gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi50cmFuc2NyaXB0aW9uIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGFibGUge1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG50ZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgLyogQ2hhbmdlIHRoaXMgdG8geW91ciBkZXNpcmVkIGhpZ2hsaWdodCBjb2xvciAqL1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _gcp_data_service__WEBPACK_IMPORTED_MODULE_2__["GcpDataService"] }]; }, { myVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myVideo']
        }] }); })();


/***/ }),

/***/ "./src/app/time-format.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/time-format.pipe.ts ***!
  \*************************************/
/*! exports provided: TimeFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatPipe", function() { return TimeFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TimeFormatPipe {
    transform(value) {
        if (value === null || value === undefined)
            return '';
        const minutes = Math.floor(value / 60);
        const seconds = Math.ceil((value % 60));
        return `${this.padToTwoDigits(minutes)}:${this.padToTwoDigits(seconds)}`;
    }
    padToTwoDigits(num) {
        return num.toString().padStart(2, '0');
    }
}
TimeFormatPipe.ɵfac = function TimeFormatPipe_Factory(t) { return new (t || TimeFormatPipe)(); };
TimeFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeFormat", type: TimeFormatPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'timeFormat'
            }]
    }], null, null); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Desktop\Angular\VideoTrans\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map