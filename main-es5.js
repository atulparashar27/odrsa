(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\Vehicle-mishap\ODPortalAPI\ClientApp\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0CWS":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/saved-attendance/saved-attendance.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"header col-sm-12\">\r\n    <img class=\"logo\" src=\"favicon.ico\" style=\"float: left;\">\r\n    <p style=\"display: inline-block; font-size: 3.5vmin;\">Old Delhi Satsang Branch</p>\r\n</div>\r\n<div class=\"row col-sm-12  justify-content-center align-items-center\" style=\"margin-top: 12px\">\r\n    <div *ngIf=\"attendCode\" class=\"form-group\">\r\n        <h2>Attendance for <b class=\"head\">{{attendCode}}</b> on <b class=\"head\">{{attendDate}}</b></h2>\r\n    </div>\r\n</div>\r\n<div class=\"row col-sm-12  justify-content-center align-items-center\" style=\"margin-top: -32px;margin-bottom: 0px;\">\r\n    <div *ngIf=\"attendCode\" class=\"form-group\">\r\n        <button type=\"button\" class=\"btn btnanimat btn--animated button buttonGroups btn btn-primary btn-round\"\r\n           (click)=\"openModal(summaryModal)\" >View\r\n            Summary\r\n        </button>\r\n        <button type=\"button\" class=\"btn btnanimat btn--animated button buttonGroups btn btn-danger btn-round\"\r\n            (click)=\"deleteModla(deleteAttendanceModal)\" [hidden]=\"!isAllowDelete\" [disabled]=\"selectedRows.length === 0\" >Delete\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"col-sm-8\" style=\"margin: auto;\">\r\n    <div class=\"row1\" (window:resize)=\"onResize($event)\" [style.height]=\"(height > 350 ? height : 350) + 'px'\">\r\n        <ag-grid-angular #attendanceTable style=\"width: 100%; height: 100%;\" rowSelection=\"multiple\"\r\n            [localeText]=\"{noRowsToShow: ''}\" [rowData]=\"markedAttendancList\" [suppressMovableColumns]=\"true\"\r\n            [columnDefs]=\"attendanceColumDefs\" [class]=\"tableTheme\" [rowMultiSelectWithClick]=\"true\"\r\n            (selectionChanged)=\"onRowSelection($event)\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n<div class=\"footer\">\r\n    <p style=\"display: inline;\">Copyright © 2020-2021 Old Delhi Satsang Branch</p>\r\n</div>\r\n\r\n<ng-template #summaryModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Attendance Summary</h5>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <div class=\"row1\" (window:resize)=\"onResize($event)\" [style.height]=\"(height > 350 ? height : 350) + 'px'\">\r\n            <ag-grid-angular #summaryTable style=\"width: 100%; height: 100%;\" rowSelection=\"multiple\"\r\n              [localeText]=\"{noRowsToShow: ''}\" [rowData]=\"summaryAttendanceList\"\r\n              [suppressMovableColumns]=\"true\" [columnDefs]=\"summaryAttendanceColDefs\" [class]=\"tableTheme\"\r\n              [rowMultiSelectWithClick]=\"true\" (gridReady)=\"onGridReady($event)\">\r\n            </ag-grid-angular>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Close click'); onBtnExport();\">Download</button>\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteAttendanceModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Confirm?</h5>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <p>Are you sure you want to delete selected people Attendance?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Close click');deleteSelectedAttendance();\">Yes</button>\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">No</button>\r\n    </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "2Cn2":
    /*!************************************************!*\
      !*** ./src/app/utils/services/http.service.ts ***!
      \************************************************/

    /*! exports provided: HttpService */

    /***/
    function Cn2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _utils_Constants_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/Constants/index */
      "hZS/");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./util.service */
      "93p7");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HttpService = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function HttpService(http, router, route, alertService) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.router = router;
          this.route = route;
          this.alertService = alertService;
          this.hostUrl = _utils_Constants_index__WEBPACK_IMPORTED_MODULE_5__["CONSTANTS"].MAIN.APP.MAIN_URL.HOST_URL;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }).append('Access-Control-Allow-Origin', '*')
          };
        }
        /**
           * @property : headers
           * @description : to construct http request header with api-version and authorization bearer token
           */


        _createClass(HttpService, [{
          key: "headers",
          get: function get() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"](); // const authenticationToken: AuthenticationResponse = JSON.parse(localStorage.getItem('authentication_token'));
            // // check authenticationToken w.r.t time
            // tslint:disable-next-line: max-line-length
            // if ((authenticationToken && authenticationToken.token && authenticationToken.token.trim() !== '') && (authenticationToken.expiryTime > new Date().getTime())) {
            //   headers.append('Authorization', 'Bearer ' + authenticationToken.token);
            // } else {
            //  // this.router.navigate(['/login']);
            // }

            return headers;
          }
          /**
           * @function : get
           * @description : to construct http get request with relative url
           */

        }, {
          key: "postWithoutHeaders",
          value: function postWithoutHeaders(relativeUrl, data) {
            // return this.http.post(this.hostUrl + relativeUrl, data);
            return this.http.post(this.hostUrl + relativeUrl, data, this.httpOptions);
          }
          /**
             * @function : get
             * @description : to construct http get request with relative url
             */

        }, {
          key: "get",
          value: function get(relativeUrl) {
            return this.http.get(this.hostUrl + relativeUrl, {
              headers: this.headers
            });
          }
          /**
             * @function : downloadFile
             * @description : to construct http request with response type blob with relative url
             */
          // protected downloadFile(relativeUrl: string): Observable<any> {
          //   return this.http.get(this.hostUrl + relativeUrl, {headers: this.headers, responseType: ResponseContentType.Blob });
          // }

          /**
             * @function : post
             * @description : to construct http post request with relative url and data
             */
          // protected post(relativeUrl: string, data: any) {
          //   const timeStamp = +new Date();
          //   const timeZoneOffset = (new Date()).getTimezoneOffset();
          //   if (relativeUrl.indexOf('?') > -1) {
          //     relativeUrl = relativeUrl + `&tsp=${timeStamp}&timeoffset=${timeZoneOffset}`;
          //   } else {
          //     relativeUrl = relativeUrl + `?tsp=${timeStamp}&timeoffset=${timeZoneOffset}`;
          //   }
          //   return this.http.post(this.hostUrl + relativeUrl, data , {headers: this.headers});
          // }

          /**
           * @function : put
           * @description : to construct http put request with relative url and data
          */
          // protected put(relativeUrl: string, data: any) {
          //   const timeStamp = +new Date();
          //   const timeZoneOffset = (new Date()).getTimezoneOffset();
          //   if (relativeUrl.indexOf('?') > -1) {
          //     relativeUrl = relativeUrl + `&tsp=${timeStamp}&timeoffset=${timeZoneOffset}`;
          //   } else {
          //     relativeUrl = relativeUrl + `?tsp=${timeStamp}&timeoffset=${timeZoneOffset}`;
          //   }
          //   return this.http.post(this.hostUrl + relativeUrl, data , {headers: this.headers});
          // }

          /**
           * @function : delete
           * @description : to construct http post request with relative url and data
          */
          // protected delete(relativeUrl: string) {
          //   return this.http.delete(this.hostUrl + relativeUrl, {headers: this.headers});
          // }

          /**
           * @function : getAbosulteURl
           * @description : to get any data from an absoulte url
          */

        }, {
          key: "getAbosulteURl",
          value: function getAbosulteURl(absoluteUrl) {
            return this.http.get(absoluteUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              return res;
            }));
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _util_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])], HttpService);
      /***/
    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "zvoc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/utils/services/login/login.service */
      "drjW");

      var ROUTES = [{
        path: '/profile',
        title: 'Manage Profile',
        icon: 'nc-icon nc-single-02',
        "class": '',
        menuCode: 1
      }, {
        path: '/familyDetails',
        title: 'Manage Family Details',
        icon: 'fa fa-users',
        "class": '',
        menuCode: 2
      }, {
        path: '/resetPassword',
        title: 'Reset Password',
        icon: 'nc-icon nc-key-25',
        "class": '',
        menuCode: 3
      }, {
        path: '/attendance',
        title: 'Attendance',
        icon: 'nc-icon nc-ruler-pencil',
        "class": '',
        menuCode: 4
      }, {
        path: '/manageActivities',
        title: 'Manage Activities',
        icon: 'nc-icon nc-tile-56',
        "class": '',
        menuCode: 7
      }, {
        path: '/managePermissions',
        title: 'Manage Permissions',
        icon: 'nc-icon nc-money-coins',
        "class": '',
        menuCode: 8
      }, {
        path: '/manageBranchDetails',
        title: 'Manage Branch Details',
        icon: 'nc-icon nc-badge',
        "class": '',
        menuCode: 8
      }, {
        path: '/reports',
        title: 'Reports',
        icon: 'nc-icon nc-glasses-2',
        "class": '',
        menuCode: 10
      }, {
        path: '/misc',
        title: 'Misc.',
        icon: 'nc-icon nc-zoom-split',
        "class": '',
        menuCode: 12
      } // { path: '/icons', title: 'Icons', icon: 'nc-icon nc-ruler-pencil', class: '', menuCode: 1 },
      // { path: '/maps', title: 'Maps', icon: 'nc-icon nc-pin-3', class: '', menuCode: 1 },
      // { path: '/notifications', title: 'Notifications', icon: 'nc-icon nc-bell-55', class: '', menuCode: 1 },
      // { path: '/table', title: 'Table List', icon: 'nc-icon nc-tile-56', class: '' },
      // { path: '/typography', title: 'Typography', icon: 'nc-icon nc-caps-small', class: '' },
      // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-icon nc-badge', class: 'active-pro', menuCode: 1 },
      ];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(loginService) {
          _classCallCheck(this, SidebarComponent);

          this.loginService = loginService;
          this.username = '';
          this.roles = [];
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.username = this.loginService.getUserloggedIn().userName;
            this.roles = this.loginService.getUserRoleId();
            this.menuItems = ROUTES.filter(function (menuItem) {
              return _this.roles.includes(menuItem.menuCode);
            });
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.loginService.logOutUser();
          }
        }, {
          key: "hideOrShow",
          value: function hideOrShow() {
            var liIds = document.getElementById('components');
            liIds.classList.toggle('show');
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [{
          type: app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }];
      };

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])], SidebarComponent);
      /***/
    },

    /***/
    "550G":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\r\n    <div class=\"show-dropdown\" ngbDropdown>\r\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\r\n          <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\r\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n\t          <li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\r\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\r\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\r\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\r\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "5My1":
    /*!**********************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
      \**********************************************************/

    /*! exports provided: FixedPluginModule */

    /***/
    function My1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
        return FixedPluginModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fixedplugin.component */
      "Pqk8");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var FixedPluginModule = /*#__PURE__*/_createClass(function FixedPluginModule() {
        _classCallCheck(this, FixedPluginModule);
      });

      FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
      })], FixedPluginModule);
      /***/
    },

    /***/
    "7Ubt":
    /*!***********************************************************!*\
      !*** ./src/app/utils/services/reports/reports.service.ts ***!
      \***********************************************************/

    /*! exports provided: ReportsService */

    /***/
    function Ubt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
        return ReportsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/utils/Constants */
      "hZS/");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../http.service */
      "2Cn2");

      var ReportsService = /*#__PURE__*/function (_http_service__WEBPAC) {
        _inherits(ReportsService, _http_service__WEBPAC);

        var _super = _createSuper(ReportsService);

        function ReportsService() {
          var _this2;

          _classCallCheck(this, ReportsService);

          _this2 = _super.apply(this, arguments);
          _this2.relativeUrl = '';
          return _this2;
        }
        /**
         * @function getDatesList
         * @description : get all activity list in drop down
         */


        _createClass(ReportsService, [{
          key: "getAllActivityLists",
          value: function getAllActivityLists() {
            return this.get(this.relativeUrl + app_utils_Constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_ACTIVITY_CODE);
          }
        }, {
          key: "getBranchPeopleAttendance",
          value: function getBranchPeopleAttendance(dataToPush, page) {
            return this.postWithoutHeaders(this.relativeUrl + app_utils_Constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_BRANCH_PEOPLE_ATTENDANCE + "?page=".concat(page), dataToPush);
          }
        }, {
          key: "getBranchPeopleAttendanceSummary",
          value: function getBranchPeopleAttendanceSummary(dataToPush) {
            return this.postWithoutHeaders(this.relativeUrl + app_utils_Constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_BRANCH_PEOPLE_ATTENDANCE_SUMMARY, dataToPush);
          }
        }]);

        return ReportsService;
      }(_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]);

      ReportsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ReportsService);
      /***/
    },

    /***/
    "93p7":
    /*!************************************************!*\
      !*** ./src/app/utils/services/util.service.ts ***!
      \************************************************/

    /*! exports provided: UtilsService, AlertService, LocalStorage */

    /***/
    function p7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
        return UtilsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorage", function () {
        return LocalStorage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Constants/index */
      "hZS/");

      var UtilsService = /*#__PURE__*/function () {
        function UtilsService(router, route) {
          _classCallCheck(this, UtilsService);

          this.router = router;
          this.route = route;
        }

        _createClass(UtilsService, [{
          key: "hasUserPermission",
          value: function hasUserPermission(permissionCode) {
            if (localStorage.getItem(_Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES.userCodes)) {
              var valueCheck = JSON.parse(localStorage.getItem(_Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES.userCodes));
              var check = valueCheck.find(function (res) {
                return res === permissionCode;
              });

              if (check) {
                return true;
              } else {
                return false;
              }
            } // let userPermissionObj = null;
            // const userObj: any = localStorage.getItem('user_profile');
            // const userIsAdmin = (userObj ? JSON.parse(userObj).isAdmin : null);
            // if (localStorage.getItem(CONSTANTS.MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES.user_roles)) {
            //   userPermissionObj = JSON.parse(localStorage.getItem(CONSTANTS.MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES.user_roles));
            // }
            // if (userIsAdmin || (userPermissionObj && permissionCode && (userPermissionObj[permissionCode]
            //  && userPermissionObj[permissionCode].hasPermission))) {
            //     if (userIsAdmin && (userPermissionObj && permissionCode &&
            //  (userPermissionObj[permissionCode] && userPermissionObj[permissionCode].isNegativePermission))) {
            //       return false;
            //     } else {
            //       return true;
            //     }
            // } else {
            //  return true;
            // }

          }
          /***
          * @name errorServiceHandler
          * @desc handling service error status codes
          ***/

        }, {
          key: "errorServiceHandler",
          value: function errorServiceHandler(error) {
            // set error msg when service fails
            var errMsg = '';

            if (error.status === 0) {
              // if service could not be connected
              errMsg = _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.MESSAGES.SERVICE_ERR;
            } else if (error.status === 401) {
              // if unauthorised request
              errMsg = _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.MESSAGES.UNAUTH_ERR;
              localStorage.clear();
              this.router.navigate(['/login']);
            } else if (error.status === 400 && !error.response) {
              errMsg = error.title;
            } else if (error.status === 400 && error.response && error.response.Success === false) {
              errMsg = error.response.message;
            } else if (error.status === 404) {
              errMsg = _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.MESSAGES.NOT_FOUND_ERR;
            } else if (error.status === 500) {
              errMsg = _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.MESSAGES.ERR_CODE_500;
            } else {
              // other error codes
              errMsg = error.statusText + ' ' + error.status;

              if (error.status === 400 && !JSON.parse(error._body).Success) {
                errMsg = JSON.parse(error._body).message;
              }
            }

            return errMsg;
          }
          /**
           * @function getDateStringMMDDYYYY
           * @description : get date in string format
           */

        }, {
          key: "getDateStringMMDDYYYY",
          value: function getDateStringMMDDYYYY(dateStr) {
            var _dateStr;

            if (dateStr == null || dateStr === '') {
              return '';
            } else {
              _dateStr = new Date(dateStr);
              return ('0' + (_dateStr.getMonth() + 1)).slice(-2) + '/' + ('0' + _dateStr.getDate()).slice(-2) + '/' + _dateStr.getFullYear();
            }
          }
          /**
           * @function dateDiffInDays
           * @param  a and b are javascript Date objects
           * @description : get date difference in days
           */

        }, {
          key: "dateDiffInDays",
          value: function dateDiffInDays(a, b) {
            // Discard the time and time-zone information.
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()); // b - a is returned

            return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
          }
          /**
           * @function getPhoneMask
           * @description : get phone mask
           */

        }, {
          key: "getPhoneMask",
          value: function getPhoneMask(phoneNumber) {
            var newVal = phoneNumber.replace(/\D/g, '');
            newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) ($2)-$3');
            return newVal;
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) {
              month = '0' + month;
            }

            if (day.length < 2) {
              day = '0' + day;
            }

            return [year, month, day].join('-');
          }
        }, {
          key: "formatDateDDMMYYY",
          value: function formatDateDDMMYYY(date) {
            var newDate = new Date(date);
            var formattedDate = newDate.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).replace(/ /g, '-');
            return formattedDate;
          }
        }]);

        return UtilsService;
      }();

      UtilsService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], UtilsService);

      var AlertService = /*#__PURE__*/function () {
        function AlertService() {
          _classCallCheck(this, AlertService);

          this.alertMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(AlertService, [{
          key: "emitAlertMessageChangeEvent",
          value: function emitAlertMessageChangeEvent(alertMessage) {
            if (alertMessage) {
              this.alertMessage.emit(alertMessage);
            }
          }
        }, {
          key: "getAlertMessageChangeEmitter",
          value: function getAlertMessageChangeEmitter() {
            return this.alertMessage;
          }
        }]);

        return AlertService;
      }();

      var LocalStorage = /*#__PURE__*/function () {
        function LocalStorage() {
          _classCallCheck(this, LocalStorage);
        }
        /**
         * @function saveLocalStorage
         * @param key
         * @param value
         * @description set to local storage
         */


        _createClass(LocalStorage, [{
          key: "saveLocalStorage",
          value: function saveLocalStorage(key, value) {
            localStorage.setItem(key, this.stringifyIfJson(value));
          }
          /**
           * @function fetchLocalStorage
           * @param key
           * @description get from local storage
           */

        }, {
          key: "fetchLocalStorage",
          value: function fetchLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key));
          }
          /**
           * @function removeLocalStorage
           * @param key
           * @description remove from local storage
           */

        }, {
          key: "removeLocalStorage",
          value: function removeLocalStorage(key) {
            localStorage.removeItem(key);
          }
          /**
           * @function exists
           * @param key
           * @description return true if key already exists in local storage
           */

        }, {
          key: "exists",
          value: function exists(key) {
            return localStorage.getItem(key) !== undefined || localStorage.getItem(key) != null;
          }
          /**
           * @function stringifyIfJson
           * @param value
           * @description to retun stringified json
           */

        }, {
          key: "stringifyIfJson",
          value: function stringifyIfJson(value) {
            if (typeof value === 'object') {
              return JSON.stringify(value);
            } else {
              return value;
            }
          }
        }, {
          key: "getUserPermissionInfo",
          value: function getUserPermissionInfo() {
            if (localStorage.getItem(_Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES.user_roles)) {
              return JSON.parse(localStorage.getItem(_Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES.user_roles));
            } else {
              return null;
            }
          }
        }]);

        return LocalStorage;
      }();
      /***/

    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AK6u":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <footer-cmp></footer-cmp>\r\n    </div>\r\n</div>\r\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\r\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "CpO+":
    /*!************************************************!*\
      !*** ./src/app/shared/navbar/navbar.module.ts ***!
      \************************************************/

    /*! exports provided: NavbarModule */

    /***/
    function CpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
        return NavbarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar.component */
      "EtQq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavbarModule = /*#__PURE__*/_createClass(function NavbarModule() {
        _classCallCheck(this, NavbarModule);
      });

      NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
      })], NavbarModule);
      /***/
    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/utils/services/login/login.service */
      "drjW");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, renderer, element, router, loginService) {
          _classCallCheck(this, NavbarComponent);

          this.renderer = renderer;
          this.element = element;
          this.router = router;
          this.loginService = loginService;
          this.isCollapsed = true;
          this.sidebarColor = 'black';
          this.sidebarActiveColor = 'primary';
          this.state = true;
          this.location = location;
          this.nativeElement = element.nativeElement;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "changeSidebarColor",
          value: function changeSidebarColor(color) {
            var sidebar = document.querySelector('.sidebar');
            var sidebarWrap = document.querySelector('.sidebar-wrapper'); // const mainBar = <HTMLElement>document.querySelector('.main-panel');
            // mainBar.style.backgroundColor = 'white';

            this.sidebarColor = color;

            if (sidebar !== undefined) {
              sidebarWrap.style.backgroundColor = this.sidebarColor === 'black' ? 'RGB(52,58,64)' : 'white';
              sidebar.setAttribute('data-color', color);
            }
          }
        }, {
          key: "changeSidebarActiveColor",
          value: function changeSidebarActiveColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarActiveColor = color;

            if (sidebar !== undefined) {
              sidebar.setAttribute('data-active-color', color);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
            this.router.events.subscribe(function (event) {
              _this3.sidebarClose();
            });
            this.changeSidebarColor(this.sidebarColor);
            this.changeSidebarActiveColor(this.sidebarActiveColor);
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            return 'Dashboard';
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            html.classList.add('nav-open');

            if (window.innerWidth < 991) {
              mainPanel.style.position = 'fixed';
            }

            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function () {
                mainPanel.style.position = '';
              }, 500);
            }

            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
            var navbar = document.getElementsByTagName('nav')[0];
            console.log(navbar);

            if (!this.isCollapsed) {
              navbar.classList.remove('navbar-transparent');
              navbar.classList.add('bg-white');
            } else {
              navbar.classList.add('navbar-transparent');
              navbar.classList.remove('bg-white');
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
        }];
      };

      NavbarComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["navbar-cmp", {
            "static": false
          }]
        }]
      };
      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])], NavbarComponent);
      /***/
    },

    /***/
    "OK0B":
    /*!*****************************************************!*\
      !*** ./src/app/utils/services/misc/misc.service.ts ***!
      \*****************************************************/

    /*! exports provided: MiscService */

    /***/
    function OK0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiscService", function () {
        return MiscService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/utils/Constants */
      "hZS/");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../http.service */
      "2Cn2");

      var MiscService = /*#__PURE__*/function (_http_service__WEBPAC2) {
        _inherits(MiscService, _http_service__WEBPAC2);

        var _super2 = _createSuper(MiscService);

        function MiscService() {
          var _this4;

          _classCallCheck(this, MiscService);

          _this4 = _super2.apply(this, arguments);
          _this4.relativeUrl = '';
          return _this4;
        }

        _createClass(MiscService, [{
          key: "getLocalityData",
          value: function getLocalityData() {
            return this.get(this.relativeUrl + app_utils_Constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_LOCALITY_LIST);
          }
        }, {
          key: "getLocalityPeopleData",
          value: function getLocalityPeopleData(localityId) {
            return this.get(this.relativeUrl + app_utils_Constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_LOCALITY_PEOPLE_LIST + "?localityId=".concat(localityId));
          }
        }]);

        return MiscService;
      }(_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]);

      MiscService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MiscService);
      /***/
    },

    /***/
    "Oz9G":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/saved-attendance/saved-attendance.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Oz9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".row1 {\r\n    border-radius: 5px;\r\n    background-color: #C0C0C0;\r\n    padding: 20px;\r\n    border: 1px solid #C0C0C0;\r\n    color: black;\r\n    margin:0 auto;\r\n    box-shadow: 0 10px 40px rgba(147,159,169,1.35);\r\n}\r\n\r\n.head {\r\n    border-bottom: 2px solid orangered;\r\n}\r\n\r\nh2 {\r\n    font-size: 3.5vmin;\r\n    text-align: center;\r\n}\r\n\r\np {\r\n    font-size: 1.9vmin;\r\n    font-family: sans-serif;\r\n    text-align: center;\r\n    font-weight: 400;\r\n}\r\n\r\nspan {\r\n    font-size: 1.8vmin;\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n.header {\r\n\tposition: sticky;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\tbackground-color: #343a40!important;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tpadding: 18px;\r\n\tfont-size: 3.5vmin;\r\n\tz-index: 900;\r\n}\r\n\r\n.footer {\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\tbackground-color:#343a40!important;\r\n\tcolor:rgba(160, 160, 160, 0.5);\r\n\ttext-align: center;\r\n\tpadding: 19px;\r\n\tposition: fixed;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0px;\r\n\tfont-size: 2.0vmin\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\timg.logo {\r\n\t  height: 30px;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n\timg.logo {\r\n\t  height: 47px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkLWF0dGVuZGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixPQUFPO0NBQ1AsTUFBTTtDQUNOLFdBQVc7Q0FDWCxtQ0FBbUM7Q0FDbkMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxTQUFTO0NBQ1QsV0FBVztDQUNYLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0M7R0FDRSxZQUFZO0NBQ2Q7QUFDRDs7QUFFRTtDQUNEO0dBQ0UsWUFBWTtDQUNkO0FBQ0QiLCJmaWxlIjoic2F2ZWQtYXR0ZW5kYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdzEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MwQzBDMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzBDMEMwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMTQ3LDE1OSwxNjksMS4zNSk7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDEuOXZtaW47XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjh2bWluO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwIWltcG9ydGFudDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDE4cHg7XHJcblx0Zm9udC1zaXplOiAzLjV2bWluO1xyXG5cdHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzQzYTQwIWltcG9ydGFudDtcclxuXHRjb2xvcjpyZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNSk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDE5cHg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdGZvbnQtc2l6ZTogMi4wdm1pblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdGltZy5sb2dvIHtcclxuXHQgIGhlaWdodDogMzBweDtcclxuXHR9XHJcbn1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG5cdGltZy5sb2dvIHtcclxuXHQgIGhlaWdodDogNDdweDtcclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "P6kD":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function P6kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "AK6u");
      /* harmony import */


      var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-layout.component.scss */
      "vtrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminLayoutComponent);
      /***/
    },

    /***/
    "Plsl":
    /*!*****************************************************************!*\
      !*** ./src/app/utils/services/attendance/attendance.service.ts ***!
      \*****************************************************************/

    /*! exports provided: AttendanceService */

    /***/
    function Plsl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttendanceService", function () {
        return AttendanceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/http.service */
      "2Cn2");
      /* harmony import */


      var _Constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Constants/index */
      "hZS/");

      var AttendanceService = /*#__PURE__*/function (_services_http_servic) {
        _inherits(AttendanceService, _services_http_servic);

        var _super3 = _createSuper(AttendanceService);

        function AttendanceService() {
          var _this5;

          _classCallCheck(this, AttendanceService);

          _this5 = _super3.apply(this, arguments);
          _this5.relativeUrl = '';
          return _this5;
        }
        /**
         * @function getDatesList
         * @description : get all activity list in drop down
         */


        _createClass(AttendanceService, [{
          key: "getAllActivityLists",
          value: function getAllActivityLists() {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_ACTIVITY_CODE);
          }
        }, {
          key: "getPeopleData",
          value: function getPeopleData() {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_PEOPLE_DATE + "?status=CR");
          }
        }, {
          key: "saveSelectedAttendance",
          value: function saveSelectedAttendance(dataToSave) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.SAVE_SELECTED_RECORDS, dataToSave);
          }
        }, {
          key: "getActivityAttendance",
          value: function getActivityAttendance(code, date) {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_SAVED_ATTENDANCE + "?actCode=" + code + "&actDate=" + date);
          }
        }, {
          key: "saveVisitorsAttendance",
          value: function saveVisitorsAttendance(postData) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.SAVE_VISITORS_ATTENDANCE, postData);
          }
        }, {
          key: "deleteSelectedAttendance",
          value: function deleteSelectedAttendance(data) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.DELETE_SELECTED_PEOPLE_ATTENDANCE, data);
          }
        }, {
          key: "voidSelectedAttendance",
          value: function voidSelectedAttendance(date, code) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.VOID_ATTENDANCE + "?actCode=" + code + "&actDate=" + date, {});
          }
        }]);

        return AttendanceService;
      }(_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]);

      AttendanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AttendanceService);
      /***/
    },

    /***/
    "Pqk8":
    /*!*************************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
      \*************************************************************/

    /*! exports provided: FixedPluginComponent */

    /***/
    function Pqk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
        return FixedPluginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "550G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FixedPluginComponent = /*#__PURE__*/function () {
        function FixedPluginComponent() {
          _classCallCheck(this, FixedPluginComponent);

          this.sidebarColor = 'black';
          this.sidebarActiveColor = 'primary';
          this.state = true;
        }

        _createClass(FixedPluginComponent, [{
          key: "changeSidebarColor",
          value: function changeSidebarColor(color) {
            var sidebar = document.querySelector('.sidebar');
            var sidebarWrap = document.querySelector('.sidebar-wrapper'); // const mainBar = <HTMLElement>document.querySelector('.main-panel');
            // mainBar.style.backgroundColor = 'white';

            this.sidebarColor = color;

            if (sidebar !== undefined) {
              sidebarWrap.style.backgroundColor = this.sidebarColor === 'black' ? 'RGB(52,58,64)' : 'white';
              sidebar.setAttribute('data-color', color);
            }
          }
        }, {
          key: "changeSidebarActiveColor",
          value: function changeSidebarActiveColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarActiveColor = color;

            if (sidebar !== undefined) {
              sidebar.setAttribute('data-active-color', color);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changeSidebarColor(this.sidebarColor);
            this.changeSidebarActiveColor(this.sidebarActiveColor);
          }
        }]);

        return FixedPluginComponent;
      }();

      FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FixedPluginComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (rs) {
              return rs instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
            })).subscribe(function (event) {
              if (event.id === 1 && event.url === event.urlAfterRedirects) {
                console.table('Page Refreshed');
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-spinner>\r\n    <p style=\"font-size: 15px; margin-top: 15px; color: black;\">Please Wait...</p>\r\n</ngx-spinner>\r\n<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sidebar/sidebar.module */
      "wCP4");
      /* harmony import */


      var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/footer/footer.module */
      "cNqA");
      /* harmony import */


      var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/navbar/navbar.module */
      "CpO+");
      /* harmony import */


      var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/fixedplugin/fixedplugin.module */
      "5My1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _utils_services_util_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./utils/services/util.service */
      "93p7");
      /* harmony import */


      var _utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./utils/services/login/login.service */
      "drjW");
      /* harmony import */


      var _utils_services_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./utils/services/attendance/attendance.service */
      "Plsl");
      /* harmony import */


      var _utils_services_datamanagment_datamanagment_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./utils/services/datamanagment/datamanagment.service */
      "zP5E");
      /* harmony import */


      var _utils_services_authGuard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./utils/services/authGuard.service */
      "qQUw");
      /* harmony import */


      var _utils_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./utils/services/profile/profile.service */
      "okMX");
      /* harmony import */


      var _utils_services_guards_permission_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./utils/services/guards/permission.service */
      "iNdB");
      /* harmony import */


      var _utils_services_guards_userPermission_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./utils/services/guards/userPermission.service */
      "gbAr");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _utils_services_ngbCustomDates_ngb_custom_adapter_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./utils/services/ngbCustomDates/ngb-custom-adapter.service */
      "ju5h");
      /* harmony import */


      var _utils_services_ngbCustomDates_ngb_custom_date_parser_formatter_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./utils/services/ngbCustomDates/ngb-custom-date-parser-formatter.service */
      "qCCU");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _pages_saved_attendance_saved_attendance_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/saved-attendance/saved-attendance.component */
      "qYlN");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");
      /* harmony import */


      var _utils_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./utils/services/reports/reports.service */
      "7Ubt");
      /* harmony import */


      var _utils_services_misc_misc_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./utils/services/misc/misc.service */
      "OK0B");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _pages_saved_attendance_saved_attendance_component__WEBPACK_IMPORTED_MODULE_27__["SavedAttendanceComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutes"], {
          useHash: true,
          relativeLinkResolution: 'legacy'
        }), _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__["FixedPluginModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_28__["AgGridModule"].withComponents([])],
        providers: [_utils_services_util_service__WEBPACK_IMPORTED_MODULE_14__["UtilsService"], _utils_services_util_service__WEBPACK_IMPORTED_MODULE_14__["AlertService"], _utils_services_util_service__WEBPACK_IMPORTED_MODULE_14__["LocalStorage"], _utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"], _utils_services_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_16__["AttendanceService"], _utils_services_datamanagment_datamanagment_service__WEBPACK_IMPORTED_MODULE_17__["DataManagmentService"], _utils_services_authGuard_service__WEBPACK_IMPORTED_MODULE_18__["OnlyLoggedInUsersGuard"], _utils_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__["ProfileService"], _utils_services_guards_permission_service__WEBPACK_IMPORTED_MODULE_20__["PermissionAccessGuard"], _utils_services_guards_userPermission_service__WEBPACK_IMPORTED_MODULE_21__["UserPermissionService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModalConfig"], {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbDateAdapter"],
          useClass: _utils_services_ngbCustomDates_ngb_custom_adapter_service__WEBPACK_IMPORTED_MODULE_24__["NgbCustomAdapterService"]
        }, _utils_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_29__["ReportsService"], _utils_services_misc_misc_service__WEBPACK_IMPORTED_MODULE_30__["MiscService"], {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbDateParserFormatter"],
          useClass: _utils_services_ngbCustomDates_ngb_custom_date_parser_formatter_service__WEBPACK_IMPORTED_MODULE_25__["NgbCustomDateParserFormatterService"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "b/+E":
    /*!*****************************************!*\
      !*** ./src/app/utils/Constants/main.ts ***!
      \*****************************************/

    /*! exports provided: MAIN */

    /***/
    function bE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAIN", function () {
        return MAIN;
      });

      var MAIN = {
        APP: {
          API_VERSION: '1.0',
          MAIN_URL: {
            // HOST_URL: 'http://localhost:63289/', // local
            HOST_URL: 'http://odrsa.somee.com/',
            // HOST_URL: window.location.origin + '/server/',
            BASE_URL: window.location.origin + '/'
          },
          URLS: {
            AUTHENTICATE_USER: 'User/Authenticate',
            GET_ALL_ACTIVITY_CODE: 'Activity/GetAllActivity',
            GET_ALL_PEOPLE_DATE: 'Attendance/GetPeopleData',
            SAVE_SELECTED_RECORDS: 'Attendance/SubmitActivityAttendance',
            GET_PROFILE_DATA: 'UserProfile/GetProfileData',
            CALL_RESET_PASSWORD: 'resetPassword',
            SAVE_PERSONAL_INFO: 'updatePersonalDetails',
            SAVE_CONTACT_INFO: 'updateContactDetails',
            SAVE_QUALIFICATION_INFO: 'updateQualificationDetails',
            SAVE_COMPANY_INFO: 'updateCompanyDetails',
            GET_SAVED_ATTENDANCE: 'Attendance/GetSavedAttendance',
            VOID_ATTENDANCE: 'Attendance/VoidAttendance',
            GET_FAMILY_DETAILS: 'UserProfile/GetFamilyDetails',
            SAVE_VISITORS_ATTENDANCE: 'Attendance/SubmitVisitorsAttendance',
            DELETE_SELECTED_PEOPLE_ATTENDANCE: 'Attendance/DeleteSavedAttendance',
            CHANGE_ACTIVITY_CODES: 'Activity/ManageActivities',
            GET_ROLES_DATA: 'Roles/GetRolesData',
            CHANGE_ROLE_CODES: 'Roles/ManageRoles',
            GET_ASSIGNED_PERMISSIONS: 'Roles/GetAssignedRoles',
            SAVE_USER_PERMISSIONS: 'Roles/AssignUnassignRoles',
            GET_ALL_BRANCH_PEOPLE_ATTENDANCE: 'Reports/GetPeopleAttendance',
            GET_ALL_BRANCH_PEOPLE_ATTENDANCE_SUMMARY: 'Reports/GetPeopleAttendanceSummary',
            GET_ALL_LOCALITY_LIST: 'Misc/GetLocalityList',
            GET_ALL_LOCALITY_PEOPLE_LIST: 'Misc/GetLocalityPeopleList',
            GET_MENU_JSON: '/assets/json/menu.json'
          },
          CONSTANTS: {
            AG_GRID_CLS_THEME: 'ag-theme-balham',
            MSG_TYPE_INF: {
              timeOut: 4000,
              closeButton: true,
              enableHtml: true,
              toastClass: 'alert alert-info alert-with-icon',
              positionClass: 'toast-top-right'
            },
            MSG_TYPE_ERR: {
              timeOut: 4000,
              closeButton: true,
              enableHtml: true,
              toastClass: 'alert alert-danger alert-with-icon',
              positionClass: 'toast-top-right'
            },
            MSG_TYPE_SUCCESS: {
              timeOut: 4000,
              closeButton: true,
              enableHtml: true,
              toastClass: 'alert alert-success alert-with-icon',
              positionClass: 'toast-top-right'
            },
            LOCAL_STORAGE_OBJECT_NAMES: {
              // auth_token: 'authentication_token',
              user_info: 'user_profile',
              user_roles: 'user_roles',
              userCodes: 'userCodes'
            },
            ALERT_MSG_ICON: '<span data-notify="icon" class="nc-icon nc-bell-55"></span>',
            SCORE_REGEX_PATTERN: '^0*([0-9][0-9]?|100)$'
          },
          MESSAGES: {
            // Message constants for error and services
            UNAUTH_ERR: 'Invalid Login details entered.',
            SERVICE_ERR: 'Unable to connect the server. Please try again.',
            NOT_FOUND_ERR: 'Oops!! Something went wrong. Please contact administrator.',
            LOGIN_ERR_CODE_401: 'You are unauthorised. Please try to login again.',
            ERR_CODE_500: 'Something went wrong. Please contact administrator.'
          },
          // Other constants for application
          ALERT_TIMEOUT: 5000
        }
      };
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutes */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _pages_saved_attendance_saved_attendance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/saved-attendance/saved-attendance.component */
      "qYlN");
      /* harmony import */


      var _utils_services_authGuard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils/services/authGuard.service */
      "qQUw");

      var AppRoutes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }, {
        path: 'savedAttendance/:code/:date',
        component: _pages_saved_attendance_saved_attendance_component__WEBPACK_IMPORTED_MODULE_2__["SavedAttendanceComponent"],
        canActivate: [_utils_services_authGuard_service__WEBPACK_IMPORTED_MODULE_3__["OnlyLoggedInUsersGuard"]]
      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_utils_services_authGuard_service__WEBPACK_IMPORTED_MODULE_3__["OnlyLoggedInUsersGuard"]],
        children: [{
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
      }, {
        path: '**',
        redirectTo: '/dashboard'
      }];
      /***/
    },

    /***/
    "cNqA":
    /*!************************************************!*\
      !*** ./src/app/shared/footer/footer.module.ts ***!
      \************************************************/

    /*! exports provided: FooterModule */

    /***/
    function cNqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer.component */
      "jQpT");

      var FooterModule = /*#__PURE__*/_createClass(function FooterModule() {
        _classCallCheck(this, FooterModule);
      });

      FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
      })], FooterModule);
      /***/
    },

    /***/
    "drjW":
    /*!*******************************************************!*\
      !*** ./src/app/utils/services/login/login.service.ts ***!
      \*******************************************************/

    /*! exports provided: LoginService */

    /***/
    function drjW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/http.service */
      "2Cn2");
      /* harmony import */


      var _Constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Constants/index */
      "hZS/");

      var LoginService = /*#__PURE__*/function (_services_http_servic2) {
        _inherits(LoginService, _services_http_servic2);

        var _super4 = _createSuper(LoginService);

        function LoginService() {
          var _this6;

          _classCallCheck(this, LoginService);

          _this6 = _super4.apply(this, arguments);
          _this6.relativeUrl = ''; // getting user authenticate url

          _this6.loginUrl = _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.AUTHENTICATE_USER; // to check if a user is logged in

          _this6.isloggedIn = false; // loading constants for local storage

          _this6.localStorageObjectNames = _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES;
          return _this6;
        }
        /**
         * @function : isUserloggedIn
         * @description : to check for authorization bearer token
        */


        _createClass(LoginService, [{
          key: "isUserloggedIn",
          value: function isUserloggedIn() {
            // const auth_info: AuthenticationResponse = JSON.parse(window.localStorage.getItem(this.localStorageObjectNames.auth_token));
            var user_info = JSON.parse(window.localStorage.getItem(this.localStorageObjectNames.user_info));

            if (user_info != null) {
              this.isloggedIn = true;
              return this.isloggedIn;
            }

            this.isloggedIn = false;
            return this.isloggedIn;
          }
        }, {
          key: "getUserRoles",
          value: function getUserRoles() {
            var user_roles = JSON.parse(window.localStorage.getItem(this.localStorageObjectNames.user_roles));

            if (user_roles) {
              return user_roles;
            } else {
              return false;
            }
          }
          /**
           * @function : getUserloggedIn
           * @description : toget user information
          */

        }, {
          key: "getUserloggedIn",
          value: function getUserloggedIn() {
            var user_info = JSON.parse(window.localStorage.getItem(this.localStorageObjectNames.user_info));

            if (user_info) {
              return user_info;
            } else {
              // redirect to login page if user information is not present
              this.logOutUser();
            }
          }
          /**
           * @function : logOutUser
           * @description : to delete authorization bearer token and user information
          */

        }, {
          key: "logOutUser",
          value: function logOutUser() {
            window.localStorage.clear();
            this.isloggedIn = false; // redirect to login page after log out

            this.router.navigate(['\login']);
          }
          /**
           * @function loginUserService
           * @description : login User Service
           */

        }, {
          key: "loginUserService",
          value: function loginUserService(user) {
            return this.postWithoutHeaders(this.loginUrl, {
              username: user.username,
              password: user.password
            });
          }
        }, {
          key: "getUserRoleId",
          value: function getUserRoleId() {
            var userCodes = JSON.parse(window.localStorage.getItem(this.localStorageObjectNames.userCodes));

            if (userCodes) {
              return userCodes;
            } else {
              // redirect to login page if user information is not present
              this.logOutUser();
            }
          }
        }]);

        return LoginService;
      }(_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]);

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoginService);
      /***/
    },

    /***/
    "gbAr":
    /*!*****************************************************************!*\
      !*** ./src/app/utils/services/guards/userPermission.service.ts ***!
      \*****************************************************************/

    /*! exports provided: UserPermissionService */

    /***/
    function gbAr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionService", function () {
        return UserPermissionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../util.service */
      "93p7");

      var UserPermissionService = /*#__PURE__*/function () {
        function UserPermissionService(localStorage) {
          _classCallCheck(this, UserPermissionService);

          this.localStorage = localStorage;
        }
        /**
         * @function getUserPermissionByCode
         * @param permission code
         * @description get User Permission By Code
         */


        _createClass(UserPermissionService, [{
          key: "getUserPermissionByCode",
          value: function getUserPermissionByCode(code) {
            var userPermissionInfo = this.localStorage.getUserPermissionInfo();

            if (userPermissionInfo[code] && userPermissionInfo[code].hasPermission) {
              return true;
            } else {
              return false;
            }
          }
          /**
           * @function getCurrUrlMenuCode
           * @description get Current Url Menu Code
           */

        }, {
          key: "getCurrUrlMenuCode",
          value: function getCurrUrlMenuCode(res, stateUrl) {
            var validObj;

            for (var count = 0; count < res.length; count++) {
              if (res[count].routeUrl === stateUrl) {
                validObj = res[count];
                var childValidObj = void 0;

                if (res[count].children.length > 0) {
                  childValidObj = this.getCurrUrlMenuCode(res[count].children, stateUrl);

                  if (childValidObj) {
                    validObj = childValidObj;
                  }
                }

                break;
              } else if (res[count].children.length > 0) {
                validObj = this.getCurrUrlMenuCode(res[count].children, stateUrl);

                if (validObj) {
                  break;
                }
              }
            }

            return validObj;
          }
        }]);

        return UserPermissionService;
      }();

      UserPermissionService.ctorParameters = function () {
        return [{
          type: _util_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]
        }];
      };

      UserPermissionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]])], UserPermissionService);
      /***/
    },

    /***/
    "hZS/":
    /*!******************************************!*\
      !*** ./src/app/utils/Constants/index.ts ***!
      \******************************************/

    /*! exports provided: CONSTANTS */

    /***/
    function hZS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSTANTS", function () {
        return CONSTANTS;
      });
      /* harmony import */


      var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main */
      "b/+E");

      var CONSTANTS = {
        MAIN: _main__WEBPACK_IMPORTED_MODULE_0__["MAIN"]
      };
      /***/
    },

    /***/
    "iNdB":
    /*!*************************************************************!*\
      !*** ./src/app/utils/services/guards/permission.service.ts ***!
      \*************************************************************/

    /*! exports provided: PermissionAccessGuard */

    /***/
    function iNdB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionAccessGuard", function () {
        return PermissionAccessGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../util.service */
      "93p7");
      /* harmony import */


      var _Constants_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../Constants/index */
      "hZS/");
      /* harmony import */


      var _services_guards_userPermission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/guards/userPermission.service */
      "gbAr");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var PermissionAccessGuard = /*#__PURE__*/function () {
        function PermissionAccessGuard(router, http, localStorage, userPermissionService, utilService, alertService) {
          _classCallCheck(this, PermissionAccessGuard);

          this.router = router;
          this.http = http;
          this.localStorage = localStorage;
          this.userPermissionService = userPermissionService;
          this.utilService = utilService;
          this.alertService = alertService;
          this.stateUrl = ''; // get current url
        }
        /**
         * @function canActivate
         * @description can Activate lifecycle hook
         */


        _createClass(PermissionAccessGuard, [{
          key: "canActivate",
          value: function canActivate(activateRoute, state) {
            // check if a user is having permission access for the route
            this.stateUrl = state.url;
            return this.getMenuData();
          }
          /**
           * @function getMenuData
           * @description get Menu data
           */

        }, {
          key: "getMenuData",
          value: function getMenuData() {
            var _this7 = this;

            var promise = new Promise(function (resolve, reject) {
              _this7.http.get(_Constants_index__WEBPACK_IMPORTED_MODULE_5__["CONSTANTS"].MAIN.APP.URLS.GET_MENU_JSON).toPromise().then(function (res) {
                var selectedObj = _this7.userPermissionService.getCurrUrlMenuCode(res, _this7.stateUrl);

                var menuCode = selectedObj ? selectedObj.menuCode : null;

                if (menuCode && _this7.utilService.hasUserPermission(menuCode)) {
                  resolve(true);
                } else {
                  _this7.router.navigate(['/dashboard']);

                  _this7.alertService.show(_Constants_index__WEBPACK_IMPORTED_MODULE_5__["CONSTANTS"].MAIN.APP.CONSTANTS.ALERT_MSG_ICON + 'You don\'t have access to this page.', '', _Constants_index__WEBPACK_IMPORTED_MODULE_5__["CONSTANTS"].MAIN.APP.CONSTANTS.MSG_TYPE_ERR);

                  resolve(false);
                }
              }, function (msg) {
                _this7.router.navigate(['/dashboard']);

                resolve(false);
              });
            });
            return promise;
          }
        }]);

        return PermissionAccessGuard;
      }();

      PermissionAccessGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]
        }, {
          type: _services_guards_userPermission_service__WEBPACK_IMPORTED_MODULE_6__["UserPermissionService"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }];
      };

      PermissionAccessGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _util_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"], _services_guards_userPermission_service__WEBPACK_IMPORTED_MODULE_6__["UserPermissionService"], _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])], PermissionAccessGuard);
      /***/
    },

    /***/
    "in5m":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function in5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div>\r\n    <div class=\"header col-sm-12\">\r\n        <img class=\"logo\" src=\"favicon.ico\" style=\"float: left;\">\r\n        <p style=\"display: inline-block;\">Old Delhi Satsang Branch</p>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 mr-auto\">\r\n                <div class=\"info-area info-horizontal mt-5\">\r\n                    <div class=\"icon icon-primary\">\r\n                        <i class=\"nc-icon nc-atom\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h3 class=\"info-title\">Branch Doctor</h3>\r\n                        <p class=\"description\">\r\n                            #9912311231\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info-area info-horizontal mt-5\">\r\n                    <div class=\"icon icon-primary\">\r\n                        <i class=\"nc-icon nc-html5\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h5 class=\"info-title\">Branch Secretary</h5>\r\n                        <p class=\"description\">\r\n                            #99123123123\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info-area info-horizontal mt-5\">\r\n                    <div class=\"icon icon-info\">\r\n                        <i class=\"nc-icon nc-tv-2\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h5 class=\"info-title\">Technical Team</h5>\r\n                        <p class=\"description\">\r\n                            #99123555523\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 ml-auto\">\r\n                <div class=\"container col-sm-12\">\r\n                    <section id=\"content\" class=\"col-sm-12\">\r\n                        <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\" class=\"col-sm-10\">\r\n                            <h1 class=\"col-sm-12\">Login</h1>\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"text\" autocomplete=\"false\" name=\"username\" [(ngModel)]='user.username'\r\n                                    #username=\"ngModel\" placeholder=\"Enter Username (UID Number)\" required=\"\"\r\n                                    id=\"username\" />\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"password\" autocomplete=\"false\" name=\"password\" [(ngModel)]='user.password'\r\n                                    #password=\"ngModel\" placeholder=\"Enter Password\" required=\"\" id=\"password\" />\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <input style=\"margin-left: 33px;\" [disabled]=\"!loginForm.form.valid\" type=\"submit\"\r\n                                    value=\"Log in\" />\r\n                            </div>\r\n                        </form>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <p style=\"display: inline;\">Copyright © 2020-2021 Old Delhi Satsang Branch</p>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"header col-sm-12\">\r\n    <img class=\"logo\" src=\"favicon.ico\" style=\"float: left;\">\r\n    <p style=\"display: inline-block;\">Old Delhi Satsang Branch</p>\r\n</div>\r\n<div class=\"content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 col-md-5 ml-auto\">\r\n          <div class=\"info-area info-horizontal \">\r\n            <div class=\"icon icon-primary\">\r\n              <i class=\"nc-icon nc-atom\"></i>\r\n            </div>\r\n            <div class=\"description\">\r\n              <h5 class=\"info-title\">Branch Doctor</h5>\r\n              <p class=\"description\">\r\n                Name: Some Text........... Number: #789798798.......\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"info-area info-horizontal mt-5\">\r\n            <div class=\"icon icon-primary\">\r\n              <i class=\"nc-icon nc-html5\"></i>\r\n            </div>\r\n            <div class=\"description\">\r\n              <h5 class=\"info-title\">Branch Secretary</h5>\r\n              <p class=\"description\">\r\n                Name: Some Text........... Number: #789798798.......\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"info-area info-horizontal mt-5\">\r\n            <div class=\"icon icon-info\">\r\n                <i class=\"nc-icon nc-tv-2\"></i>\r\n            </div>\r\n            <div class=\"description\">\r\n              <h5 class=\"info-title\">Technical Team</h5>\r\n              <p class=\"description\">\r\n                Name: Some Text........... Number: #789798798.......\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 mr-auto\">\r\n          <div class=\"card card-signup text-center\">\r\n            <section id=\"content\" class=\"col-sm-12\">\r\n                <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\" class=\"col-sm-10\">\r\n                    <h1 class=\"col-sm-12\">Login</h1>\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"text\" autocomplete=\"false\" name=\"username\" [(ngModel)]='user.username'\r\n                            #username=\"ngModel\" placeholder=\"Enter Username (UID Number)\" required=\"\"\r\n                            id=\"username\" />\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"password\" autocomplete=\"false\" name=\"password\" [(ngModel)]='user.password'\r\n                            #password=\"ngModel\" placeholder=\"Enter Password\" required=\"\" id=\"password\" />\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <input style=\"margin-left: 33px;\" [disabled]=\"!loginForm.form.valid\" type=\"submit\"\r\n                            value=\"Log in\" />\r\n                    </div>\r\n                </form>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"footer\">\r\n    <p style=\"display: inline;\">Copyright © 2020-2021 Old Delhi Satsang Branch</p>\r\n</div>";
      /***/
    },

    /***/
    "jGP6":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function jGP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <nav class=\"pull-left\">\r\n            <ul>\r\n\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav> -->\r\n        <div class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}}, Old Delhi Satsang Branch\r\n            <!-- <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a> -->\r\n        </div>\r\n    </div>\r\n</footer>\r\n";
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "jGP6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/_createClass(function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      });

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "ju5h":
    /*!*****************************************************************************!*\
      !*** ./src/app/utils/services/ngbCustomDates/ngb-custom-adapter.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: NgbCustomAdapterService */

    /***/
    function ju5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbCustomAdapterService", function () {
        return NgbCustomAdapterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NgbCustomAdapterService = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(NgbCustomAdapterService, _ng_bootstrap_ng_boot);

        var _super5 = _createSuper(NgbCustomAdapterService);

        function NgbCustomAdapterService() {
          var _this8;

          _classCallCheck(this, NgbCustomAdapterService);

          _this8 = _super5.apply(this, arguments);
          _this8.DELIMITER = '-';
          return _this8;
        }

        _createClass(NgbCustomAdapterService, [{
          key: "fromModel",
          value: function fromModel(value) {
            if (value) {
              var date = value.split(this.DELIMITER);
              return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
              };
            }

            return null;
          }
        }, {
          key: "toModel",
          value: function toModel(date) {
            return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
          }
        }]);

        return NgbCustomAdapterService;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"]);

      NgbCustomAdapterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NgbCustomAdapterService);
      /***/
    },

    /***/
    "n7sk":
    /*!*******************************************!*\
      !*** ./src/app/login/login.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function n7sk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tbackground: transparent;\r\n}\r\nbody {\r\n\tbackground: #DCDDDF url(https://cssdeck.com/uploads/media/items/7/7AF2Qzt.png);\r\n\tcolor: #000;\r\n\tfont: 14px Arial;\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\tposition: relative;\r\n}\r\nh1{ font-size:28px;}\r\nh2{ font-size:26px;}\r\nh3{ font-size:18px;}\r\nh4{ font-size:16px;}\r\nh5{ font-size:14px;}\r\nh6{ font-size:12px;}\r\nh1,h2,h3,h4,h5,h6{ color:#563D64;}\r\nsmall{ font-size:10px;}\r\nb, strong{ font-weight:bold;}\r\na{ text-decoration: none; }\r\na:hover{ text-decoration: underline; }\r\n.left { float:left; }\r\n.right { float:right; }\r\n.alignleft { float: left; margin-right: 15px; }\r\n.alignright { float: right; margin-left: 15px; }\r\n.clearfix:after,\r\nform:after {\r\n\tcontent: \".\";\r\n\tdisplay: block;\r\n\theight: 0;\r\n\tclear: both;\r\n\tvisibility: hidden;\r\n}\r\n.container { margin: 80px auto; position: relative;  }\r\n#content {\r\n\tbackground: #052259;\r\n\tbackground: linear-gradient(rgba(248,248,248,1) 0%,rgba(249,249,249,1) 100% , top);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#052259',GradientType=0 );\r\n\t-ms-box-shadow: 0 1px 0 #fff inset;\r\n\t-o-box-shadow: 0 1px 0 #fff inset;\r\n\tbox-shadow: 0 1px 0 #fff inset;\r\n\tborder: 1px solid #c4c6ca;\r\n\tmargin: 0 auto;\r\n\tpadding: 25px 0 0;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 1px 0 #fff;\r\n\twidth: 400px;\r\n\tborder-radius: 15px;\r\n}\r\n@media only screen and (max-width: 400px) {\r\n\t#content {\r\n\t\twidth: 100%\r\n\t}\r\n\t#content h1:before,\r\n\t#content h1:after {\r\n\twidth: 0%;\r\n\r\n\t}\r\n#content form {\r\n    margin: 0 !important;\r\n    position: relative;\r\n}\r\n  }\r\n#content h1 {\r\n\tcolor: white;\r\n\tfont: bold 25px Helvetica, Arial, sans-serif;\r\n\tletter-spacing: -0.05em;\r\n\tline-height: 20px;\r\n\tmargin: 10px 0 30px;\r\n}\r\n#content h1:before,\r\n#content h1:after {\r\n\tcontent: \"\";\r\n\theight: 1px;\r\n\tposition: absolute;\r\n\ttop: 10px;\r\n\twidth: 27%;\r\n}\r\n#content h1:after {\r\n\tbackground: rgb(126,126,126);\r\n\tbackground: linear-gradient(to left, rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);\r\n    right: 0;\r\n}\r\n#content h1:before {\r\n\tbackground: rgb(126,126,126);\r\n\tbackground: linear-gradienttoright(to right, rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);\r\n    left: 0;\r\n}\r\n#content:after,\r\n#content:before {\r\n\tbackground: #052259;\r\n\tbackground: linear-gradient(to top, rgba(248,248,248,1) 0%,rgba(249,249,249,1) 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#052259',GradientType=0 );\r\n\tborder: 1px solid #c4c6ca;\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\theight: 100%;\r\n\tleft: -1px;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tborder-radius: 15px;\r\n}\r\n#content:after {\r\n\t/* -webkit-transform: rotate(2deg);\r\n\t-moz-transform: rotate(2deg);\r\n\t-ms-transform: rotate(2deg);\r\n\t-o-transform: rotate(2deg);\r\n\ttransform: rotate(2deg); */\r\n\ttop: 0;\r\n\tz-index: -1;\r\n}\r\n#content:before {\r\n\t/* -webkit-transform: rotate(-3deg);\r\n\t-moz-transform: rotate(-3deg);\r\n\t-ms-transform: rotate(-3deg);\r\n\t-o-transform: rotate(-3deg);\r\n\ttransform: rotate(-3deg); */\r\n\ttop: 0;\r\n\tz-index: -2;\r\n}\r\n#content form { margin: auto; position: relative }\r\n#content form input[type=\"text\"],\r\n#content form input[type=\"password\"] {\r\n\tborder-radius: 3px;\r\n\t-ms-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;\r\n\t-o-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;\r\n\tbox-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;\r\n\ttransition: all 0.5s ease;\r\n\tbackground: #eae7e7 url(https://cssdeck.com/uploads/media/items/8/8bcLQqF.png) no-repeat;\r\n\tborder: 1px solid #c8c8c8;\r\n\tcolor: #777;\r\n\tfont: 13px Helvetica, Arial, sans-serif;\r\n\tmargin: 0 0 10px;\r\n\tpadding: 15px 10px 15px 40px;\r\n\twidth: 80%;\r\n}\r\n#content form input[type=\"text\"]:focus,\r\n#content form input[type=\"password\"]:focus {\r\n\t-ms-box-shadow: 0 0 2px #ed1c24 inset;\r\n\t-o-box-shadow: 0 0 2px #ed1c24 inset;\r\n\tbox-shadow: 0 0 2px #ed1c24 inset;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #ed1c24;\r\n\toutline: none;\r\n}\r\n#username { background-position: 10px 10px !important }\r\n#password { background-position: 10px -53px !important }\r\n#content form input[type=\"submit\"] {\r\n\tbackground: rgb(254,231,154);\r\n\tbackground: linear-gradient(rgba(254,231,154,1) 0%,rgba(254,193,81,1) 100%, top);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fee79a', endColorstr='#fec151',GradientType=0 );\r\n\tborder-radius: 30px;\r\n\t-ms-box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;\r\n\t-o-box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;\r\n\tbox-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;\r\n\tborder: 1px solid #D69E31;\r\n\tcolor: #85592e;\r\n\tcursor: pointer;\r\n\tfloat: left;\r\n\tfont: bold 15px Helvetica, Arial, sans-serif;\r\n\theight: 35px;\r\n\tmargin: 20px 0 35px 15px;\r\n\tposition: relative;\r\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.5);\r\n\twidth: 120px;\r\n}\r\n#content form input[type=\"submit\"]:hover {\r\n\tbackground: rgb(254,193,81);\r\n\tbackground: linear-gradient( rgba(254,193,81,1) 0%,rgba(254,231,154,1) 100%, top);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fec151', endColorstr='#fee79a',GradientType=0 );\r\n}\r\n#content form div a {\r\n\tcolor: #004a80;\r\n    float: right;\r\n    font-size: 12px;\r\n    margin: 30px 15px 0 0;\r\n    text-decoration: underline;\r\n}\r\n.button {\r\n\tbackground: rgb(247,249,250);\r\n\tbackground: linear-gradient(to top,  rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f9fa', endColorstr='#f0f0f0',GradientType=0 );\r\n\t-ms-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\r\n\t-o-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\r\n\tborder-radius: 0 0 5px 5px;\r\n\tborder-top: 1px solid #CFD5D9;\r\n\tpadding: 15px 0;\r\n}\r\n.button a {\r\n\tbackground: url(https://cssdeck.com/uploads/media/items/8/8bcLQqF.png) 0 -112px no-repeat;\r\n\tcolor: #7E7E7E;\r\n\tfont-size: 17px;\r\n\tpadding: 2px 0 2px 40px;\r\n\ttext-decoration: none;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.button a:hover {\r\n\tbackground-position: 0 -135px;\r\n\tcolor: #00aeef;\r\n}\r\n.header {\r\n\tposition: sticky;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\tbackground-color: #343a40!important;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tpadding: 18px;\r\n\tfont-size: 3.5vmin;\r\n\tz-index: 900;\r\n}\r\n.footer {\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\tbackground-color:#343a40!important;\r\n\tcolor:rgba(160, 160, 160, 0.5);\r\n\ttext-align: center;\r\n\tpadding: 19px;\r\n\tposition: fixed;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0px;\r\n\tfont-size: 2.0vmin\r\n}\r\n@media screen and (max-width: 600px) {\r\n\timg.logo {\r\n\t  height: 30px;\r\n\t}\r\n}\r\n@media screen and (min-width: 600px) {\r\n\timg.logo {\r\n\t  height: 47px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7Ozs7O0NBU0MsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsVUFBVTtDQUNWLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyw4RUFBOEU7Q0FDOUUsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsVUFBVTtDQUNWLGtCQUFrQjtBQUNuQjtBQUNBLElBQUksY0FBYyxDQUFDO0FBQ25CLElBQUksY0FBYyxDQUFDO0FBQ25CLElBQUksY0FBYyxDQUFDO0FBQ25CLElBQUksY0FBYyxDQUFDO0FBQ25CLElBQUksY0FBYyxDQUFDO0FBQ25CLElBQUksY0FBYyxDQUFDO0FBQ25CLG1CQUFtQixhQUFhLENBQUM7QUFDakMsT0FBTyxjQUFjLENBQUM7QUFDdEIsV0FBVyxnQkFBZ0IsQ0FBQztBQUM1QixHQUFHLHFCQUFxQixFQUFFO0FBQzFCLFNBQVMsMEJBQTBCLEVBQUU7QUFDckMsUUFBUSxVQUFVLEVBQUU7QUFDcEIsU0FBUyxXQUFXLEVBQUU7QUFDdEIsYUFBYSxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7QUFDOUMsY0FBYyxZQUFZLEVBQUUsaUJBQWlCLEVBQUU7QUFDL0M7O0NBRUMsWUFBWTtDQUNaLGNBQWM7Q0FDZCxTQUFTO0NBQ1QsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjtBQUNBLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLEdBQUc7QUFDckQ7Q0FDQyxtQkFBbUI7Q0FLbkIsa0ZBQWtGO0NBQ2xGLG1IQUFtSDtDQUduSCxrQ0FBa0M7Q0FDbEMsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQztFQUNDO0NBQ0Q7Q0FDQTs7Q0FFQSxTQUFTOztDQUVUO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0VBQ0U7QUFDRjtDQUNDLFlBQVk7Q0FDWiw0Q0FBNEM7Q0FDNUMsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7Q0FDQyw0QkFBNEI7Q0FLNUIscUZBQXFGO0lBQ2xGLFFBQVE7QUFDWjtBQUNBO0NBQ0MsNEJBQTRCO0NBSzVCLDZGQUE2RjtJQUMxRixPQUFPO0FBQ1g7QUFDQTs7Q0FFQyxtQkFBbUI7Q0FLbkIsb0ZBQW9GO0NBQ3BGLG1IQUFtSDtDQUNuSCx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQzs7OzsyQkFJMEI7Q0FDMUIsTUFBTTtDQUNOLFdBQVc7QUFDWjtBQUNBO0NBQ0M7Ozs7NEJBSTJCO0NBQzNCLE1BQU07Q0FDTixXQUFXO0FBQ1o7QUFDQSxnQkFBZ0IsWUFBWSxFQUFFLG1CQUFtQjtBQUNqRDs7Q0FNQyxrQkFBa0I7Q0FHbEIsK0RBQStEO0NBQy9ELDhEQUE4RDtDQUM5RCwyREFBMkQ7Q0FLM0QseUJBQXlCO0NBQ3pCLHdGQUF3RjtDQUN4Rix5QkFBeUI7Q0FDekIsV0FBVztDQUNYLHVDQUF1QztDQUN2QyxnQkFBZ0I7Q0FDaEIsNEJBQTRCO0NBQzVCLFVBQVU7QUFDWDtBQUNBOztDQUlDLHFDQUFxQztDQUNyQyxvQ0FBb0M7Q0FDcEMsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIsYUFBYTtBQUNkO0FBQ0EsWUFBWSwwQ0FBMEM7QUFDdEQsWUFBWSwyQ0FBMkM7QUFDdkQ7Q0FDQyw0QkFBNEI7Q0FLNUIsZ0ZBQWdGO0NBQ2hGLG1IQUFtSDtDQUtuSCxtQkFBbUI7Q0FHbkIsbURBQW1EO0NBQ25ELGtEQUFrRDtDQUNsRCwrQ0FBK0M7Q0FDL0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsV0FBVztDQUNYLDRDQUE0QztDQUM1QyxZQUFZO0NBQ1osd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQiwwQ0FBMEM7Q0FDMUMsWUFBWTtBQUNiO0FBQ0E7Q0FDQywyQkFBMkI7Q0FLM0IsaUZBQWlGO0NBQ2pGLG1IQUFtSDtBQUNwSDtBQUNBO0NBQ0MsY0FBYztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5QjtBQUNBO0NBQ0MsNEJBQTRCO0NBSzVCLHFGQUFxRjtDQUNyRixtSEFBbUg7Q0FHbkgsK0NBQStDO0NBQy9DLDhDQUE4QztDQUM5QywyQ0FBMkM7Q0FLM0MsMEJBQTBCO0NBQzFCLDZCQUE2QjtDQUM3QixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx5RkFBeUY7Q0FDekYsY0FBYztDQUNkLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBS3JCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsNkJBQTZCO0NBQzdCLGNBQWM7QUFDZjtBQUdBO0NBQ0MsZ0JBQWdCO0NBQ2hCLE9BQU87Q0FDUCxNQUFNO0NBQ04sV0FBVztDQUNYLG1DQUFtQztDQUNuQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiO0FBRUE7Q0FDQyxPQUFPO0NBQ1AsU0FBUztDQUNULFdBQVc7Q0FDWCxrQ0FBa0M7Q0FDbEMsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7QUFDRDtBQUVBO0NBQ0M7R0FDRSxZQUFZO0NBQ2Q7QUFDRDtBQUVFO0NBQ0Q7R0FDRSxZQUFZO0NBQ2Q7QUFDRCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGZvbnQsIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0b3V0bGluZTogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICNEQ0REREYgdXJsKGh0dHBzOi8vY3NzZGVjay5jb20vdXBsb2Fkcy9tZWRpYS9pdGVtcy83LzdBRjJRenQucG5nKTtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRmb250OiAxNHB4IEFyaWFsO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmgxeyBmb250LXNpemU6MjhweDt9XHJcbmgyeyBmb250LXNpemU6MjZweDt9XHJcbmgzeyBmb250LXNpemU6MThweDt9XHJcbmg0eyBmb250LXNpemU6MTZweDt9XHJcbmg1eyBmb250LXNpemU6MTRweDt9XHJcbmg2eyBmb250LXNpemU6MTJweDt9XHJcbmgxLGgyLGgzLGg0LGg1LGg2eyBjb2xvcjojNTYzRDY0O31cclxuc21hbGx7IGZvbnQtc2l6ZToxMHB4O31cclxuYiwgc3Ryb25neyBmb250LXdlaWdodDpib2xkO31cclxuYXsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbmE6aG92ZXJ7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcbi5sZWZ0IHsgZmxvYXQ6bGVmdDsgfVxyXG4ucmlnaHQgeyBmbG9hdDpyaWdodDsgfVxyXG4uYWxpZ25sZWZ0IHsgZmxvYXQ6IGxlZnQ7IG1hcmdpbi1yaWdodDogMTVweDsgfVxyXG4uYWxpZ25yaWdodCB7IGZsb2F0OiByaWdodDsgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cclxuLmNsZWFyZml4OmFmdGVyLFxyXG5mb3JtOmFmdGVyIHtcclxuXHRjb250ZW50OiBcIi5cIjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRoZWlnaHQ6IDA7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5jb250YWluZXIgeyBtYXJnaW46IDgwcHggYXV0bzsgcG9zaXRpb246IHJlbGF0aXZlOyAgfVxyXG4jY29udGVudCB7XHJcblx0YmFja2dyb3VuZDogIzA1MjI1OTtcclxuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLCByZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ4LDI0OCwyNDgsMSkgMCUscmdiYSgyNDksMjQ5LDI0OSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDgsMjQ4LDI0OCwxKSAwJSxyZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDgsMjQ4LDI0OCwxKSAwJSxyZ2JhKDI0OSwyNDksMjQ5LDEpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLHJnYmEoMjQ5LDI0OSwyNDksMSkgMTAwJSAsIHRvcCk7XHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmOGY4ZjgnLCBlbmRDb2xvcnN0cj0nIzA1MjI1OScsR3JhZGllbnRUeXBlPTAgKTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcclxuXHQtbXMtYm94LXNoYWRvdzogMCAxcHggMCAjZmZmIGluc2V0O1xyXG5cdC1vLWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcclxuXHRib3gtc2hhZG93OiAwIDFweCAwICNmZmYgaW5zZXQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2M0YzZjYTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwYWRkaW5nOiAyNXB4IDAgMDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cdCNjb250ZW50IHtcclxuXHRcdHdpZHRoOiAxMDAlXHJcblx0fVxyXG5cdCNjb250ZW50IGgxOmJlZm9yZSxcclxuXHQjY29udGVudCBoMTphZnRlciB7XHJcblx0d2lkdGg6IDAlO1xyXG5cclxuXHR9XHJcbiNjb250ZW50IGZvcm0ge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuICB9XHJcbiNjb250ZW50IGgxIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udDogYm9sZCAyNXB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luOiAxMHB4IDAgMzBweDtcclxufVxyXG4jY29udGVudCBoMTpiZWZvcmUsXHJcbiNjb250ZW50IGgxOmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDEwcHg7XHJcblx0d2lkdGg6IDI3JTtcclxufVxyXG4jY29udGVudCBoMTphZnRlciB7XHJcblx0YmFja2dyb3VuZDogcmdiKDEyNiwxMjYsMTI2KTtcclxuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgIHJnYmEoMTI2LDEyNiwxMjYsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuI2NvbnRlbnQgaDE6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMTI2LDEyNiwxMjYpO1xyXG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAgcmdiYSgxMjYsMTI2LDEyNiwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIHJnYmEoMTI2LDEyNiwxMjYsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmlnaHQsICByZ2JhKDEyNiwxMjYsMTI2LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChyaWdodCwgIHJnYmEoMTI2LDEyNiwxMjYsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnR0b3JpZ2h0KHRvIHJpZ2h0LCByZ2JhKDEyNiwxMjYsMTI2LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbiNjb250ZW50OmFmdGVyLFxyXG4jY29udGVudDpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQ6ICMwNTIyNTk7XHJcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDgsMjQ4LDI0OCwxKSAwJSwgcmdiYSgyNDksMjQ5LDI0OSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLHJnYmEoMjQ5LDI0OSwyNDksMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ4LDI0OCwyNDgsMSkgMCUscmdiYSgyNDksMjQ5LDI0OSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ4LDI0OCwyNDgsMSkgMCUscmdiYSgyNDksMjQ5LDI0OSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI0OCwyNDgsMjQ4LDEpIDAlLHJnYmEoMjQ5LDI0OSwyNDksMSkgMTAwJSk7XHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmOGY4ZjgnLCBlbmRDb2xvcnN0cj0nIzA1MjI1OScsR3JhZGllbnRUeXBlPTAgKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYzRjNmNhO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGxlZnQ6IC0xcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuI2NvbnRlbnQ6YWZ0ZXIge1xyXG5cdC8qIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcclxuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7ICovXHJcblx0dG9wOiAwO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcbiNjb250ZW50OmJlZm9yZSB7XHJcblx0LyogLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XHJcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XHJcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcclxuXHQtby10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpOyAqL1xyXG5cdHRvcDogMDtcclxuXHR6LWluZGV4OiAtMjtcclxufVxyXG4jY29udGVudCBmb3JtIHsgbWFyZ2luOiBhdXRvOyBwb3NpdGlvbjogcmVsYXRpdmUgfVxyXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1zLWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtby1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAjZmZmLCAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4wOCkgaW5zZXQ7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAwICNmZmYsIDAgLTJweCA1cHggcmdiYSgwLDAsMCwwLjA4KSBpbnNldDtcclxuXHQtbXMtYm94LXNoYWRvdzogMCAxcHggMCAjZmZmLCAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4wOCkgaW5zZXQ7XHJcblx0LW8tYm94LXNoYWRvdzogMCAxcHggMCAjZmZmLCAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4wOCkgaW5zZXQ7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMCAjZmZmLCAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4wOCkgaW5zZXQ7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblx0YmFja2dyb3VuZDogI2VhZTdlNyB1cmwoaHR0cHM6Ly9jc3NkZWNrLmNvbS91cGxvYWRzL21lZGlhL2l0ZW1zLzgvOGJjTFFxRi5wbmcpIG5vLXJlcGVhdDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG5cdGNvbG9yOiAjNzc3O1xyXG5cdGZvbnQ6IDEzcHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRtYXJnaW46IDAgMCAxMHB4O1xyXG5cdHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDQwcHg7XHJcblx0d2lkdGg6IDgwJTtcclxufVxyXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMnB4ICNlZDFjMjQgaW5zZXQ7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDAgMnB4ICNlZDFjMjQgaW5zZXQ7XHJcblx0LW1zLWJveC1zaGFkb3c6IDAgMCAycHggI2VkMWMyNCBpbnNldDtcclxuXHQtby1ib3gtc2hhZG93OiAwIDAgMnB4ICNlZDFjMjQgaW5zZXQ7XHJcblx0Ym94LXNoYWRvdzogMCAwIDJweCAjZWQxYzI0IGluc2V0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2VkMWMyNDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbiN1c2VybmFtZSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweCAhaW1wb3J0YW50IH1cclxuI3Bhc3N3b3JkIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAtNTNweCAhaW1wb3J0YW50IH1cclxuI2NvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU0LDIzMSwxNTQpO1xyXG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjU0LDIzMSwxNTQsMSkgMCUsIHJnYmEoMjU0LDE5Myw4MSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI1NCwyMzEsMTU0LDEpIDAlLHJnYmEoMjU0LDE5Myw4MSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTQsMjMxLDE1NCwxKSAwJSxyZ2JhKDI1NCwxOTMsODEsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI1NCwyMzEsMTU0LDEpIDAlLHJnYmEoMjU0LDE5Myw4MSwxKSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTQsMjMxLDE1NCwxKSAwJSxyZ2JhKDI1NCwxOTMsODEsMSkgMTAwJSwgdG9wKTtcclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZlZTc5YScsIGVuZENvbG9yc3RyPScjZmVjMTUxJyxHcmFkaWVudFR5cGU9MCApO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0LW1zLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0LW8tYm9yZGVyLXJhZGl1czogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgaW5zZXQ7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC44KSBpbnNldDtcclxuXHQtbXMtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgaW5zZXQ7XHJcblx0LW8tYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgaW5zZXQ7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgaW5zZXQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI0Q2OUUzMTtcclxuXHRjb2xvcjogIzg1NTkyZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Zm9udDogYm9sZCAxNXB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0aGVpZ2h0OiAzNXB4O1xyXG5cdG1hcmdpbjogMjBweCAwIDM1cHggMTVweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG5cdHdpZHRoOiAxMjBweDtcclxufVxyXG4jY29udGVudCBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6IHJnYigyNTQsMTkzLDgxKTtcclxuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI1NCwxOTMsODEsMSkgMCUsIHJnYmEoMjU0LDIzMSwxNTQsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTQsMTkzLDgxLDEpIDAlLHJnYmEoMjU0LDIzMSwxNTQsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjU0LDE5Myw4MSwxKSAwJSxyZ2JhKDI1NCwyMzEsMTU0LDEpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTQsMTkzLDgxLDEpIDAlLHJnYmEoMjU0LDIzMSwxNTQsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCByZ2JhKDI1NCwxOTMsODEsMSkgMCUscmdiYSgyNTQsMjMxLDE1NCwxKSAxMDAlLCB0b3ApO1xyXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmVjMTUxJywgZW5kQ29sb3JzdHI9JyNmZWU3OWEnLEdyYWRpZW50VHlwZT0wICk7XHJcbn1cclxuI2NvbnRlbnQgZm9ybSBkaXYgYSB7XHJcblx0Y29sb3I6ICMwMDRhODA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDMwcHggMTVweCAwIDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjQ3LDI0OSwyNTApO1xyXG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjQ3LDI0OSwyNTAsMSkgMCUsIHJnYmEoMjQwLDI0MCwyNDAsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNDcsMjQ5LDI1MCwxKSAwJSxyZ2JhKDI0MCwyNDAsMjQwLDEpIDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0NywyNDksMjUwLDEpIDAlLHJnYmEoMjQwLDI0MCwyNDAsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI0NywyNDksMjUwLDEpIDAlLHJnYmEoMjQwLDI0MCwyNDAsMSkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIHJnYmEoMjQ3LDI0OSwyNTAsMSkgMCUscmdiYSgyNDAsMjQwLDI0MCwxKSAxMDAlKTtcclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2Y3ZjlmYScsIGVuZENvbG9yc3RyPScjZjBmMGYwJyxHcmFkaWVudFR5cGU9MCApO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKSBpbnNldDtcclxuXHQtbW96LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMSkgaW5zZXQ7XHJcblx0LW1zLWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMSkgaW5zZXQ7XHJcblx0LW8tYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKSBpbnNldDtcclxuXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpIGluc2V0O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcclxuXHQtby1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcclxuXHQtbXMtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNDRkQ1RDk7XHJcblx0cGFkZGluZzogMTVweCAwO1xyXG59XHJcbi5idXR0b24gYSB7XHJcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY3NzZGVjay5jb20vdXBsb2Fkcy9tZWRpYS9pdGVtcy84LzhiY0xRcUYucG5nKSAwIC0xMTJweCBuby1yZXBlYXQ7XHJcblx0Y29sb3I6ICM3RTdFN0U7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdHBhZGRpbmc6IDJweCAwIDJweCA0MHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uYnV0dG9uIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEzNXB4O1xyXG5cdGNvbG9yOiAjMDBhZWVmO1xyXG59XHJcblxyXG5cclxuLmhlYWRlciB7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwIWltcG9ydGFudDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDE4cHg7XHJcblx0Zm9udC1zaXplOiAzLjV2bWluO1xyXG5cdHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzQzYTQwIWltcG9ydGFudDtcclxuXHRjb2xvcjpyZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNSk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDE5cHg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdGZvbnQtc2l6ZTogMi4wdm1pblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdGltZy5sb2dvIHtcclxuXHQgIGhlaWdodDogMzBweDtcclxuXHR9XHJcbn1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG5cdGltZy5sb2dvIHtcclxuXHQgIGhlaWdodDogNDdweDtcclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "okMX":
    /*!***********************************************************!*\
      !*** ./src/app/utils/services/profile/profile.service.ts ***!
      \***********************************************************/

    /*! exports provided: ProfileService */

    /***/
    function okMX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../http.service */
      "2Cn2");
      /* harmony import */


      var _Constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Constants/index */
      "hZS/");

      var ProfileService = /*#__PURE__*/function (_http_service__WEBPAC3) {
        _inherits(ProfileService, _http_service__WEBPAC3);

        var _super6 = _createSuper(ProfileService);

        function ProfileService() {
          var _this9;

          _classCallCheck(this, ProfileService);

          _this9 = _super6.apply(this, arguments);
          _this9.relativeUrl = '';
          return _this9;
        }

        _createClass(ProfileService, [{
          key: "getProfileDataList",
          value: function getProfileDataList(uidNo, rollNo) {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_PROFILE_DATA + "?uidNo=" + uidNo + "&rollNo=" + rollNo);
          }
        }, {
          key: "callResetPassword",
          value: function callResetPassword(data) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.CALL_RESET_PASSWORD, data);
          }
        }, {
          key: "savePersonalDetails",
          value: function savePersonalDetails(dataToPush, uidNo) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.SAVE_PERSONAL_INFO + "?uidNo=" + uidNo, dataToPush);
          }
        }, {
          key: "saveContactDetails",
          value: function saveContactDetails(dataToPush, uidNo) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.SAVE_CONTACT_INFO + "?uidNo=" + uidNo, dataToPush);
          }
        }, {
          key: "saveCompanyDetails",
          value: function saveCompanyDetails(dataToPush, uidNo) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.SAVE_COMPANY_INFO + "?uidNo=" + uidNo, dataToPush);
          }
        }, {
          key: "saveQualificationDetails",
          value: function saveQualificationDetails(dataToPush, uidNo) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.SAVE_QUALIFICATION_INFO + "?uidNo=" + uidNo, dataToPush);
          }
        }, {
          key: "getFamilyDetails",
          value: function getFamilyDetails(uidNo) {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_FAMILY_DETAILS + "?uidNo=" + uidNo);
          }
        }]);

        return ProfileService;
      }(_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]);

      ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProfileService);
      /***/
    },

    /***/
    "qCCU":
    /*!*******************************************************************************************!*\
      !*** ./src/app/utils/services/ngbCustomDates/ngb-custom-date-parser-formatter.service.ts ***!
      \*******************************************************************************************/

    /*! exports provided: NgbCustomDateParserFormatterService */

    /***/
    function qCCU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbCustomDateParserFormatterService", function () {
        return NgbCustomDateParserFormatterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NgbCustomDateParserFormatterService = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
        _inherits(NgbCustomDateParserFormatterService, _ng_bootstrap_ng_boot2);

        var _super7 = _createSuper(NgbCustomDateParserFormatterService);

        function NgbCustomDateParserFormatterService() {
          var _this10;

          _classCallCheck(this, NgbCustomDateParserFormatterService);

          _this10 = _super7.apply(this, arguments);
          _this10.DELIMITER = '/';
          return _this10;
        }

        _createClass(NgbCustomDateParserFormatterService, [{
          key: "parse",
          value: function parse(value) {
            if (value) {
              var date = value.split(this.DELIMITER);
              return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
              };
            }

            return null;
          }
        }, {
          key: "format",
          value: function format(date) {
            return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
          }
        }]);

        return NgbCustomDateParserFormatterService;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]);

      NgbCustomDateParserFormatterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NgbCustomDateParserFormatterService);
      /***/
    },

    /***/
    "qQUw":
    /*!*****************************************************!*\
      !*** ./src/app/utils/services/authGuard.service.ts ***!
      \*****************************************************/

    /*! exports provided: OnlyLoggedInUsersGuard */

    /***/
    function qQUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlyLoggedInUsersGuard", function () {
        return OnlyLoggedInUsersGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/login/login.service */
      "drjW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var OnlyLoggedInUsersGuard = /*#__PURE__*/function () {
        function OnlyLoggedInUsersGuard(loginService, router) {
          _classCallCheck(this, OnlyLoggedInUsersGuard);

          this.loginService = loginService;
          this.router = router;
        }

        _createClass(OnlyLoggedInUsersGuard, [{
          key: "canActivate",
          value: function canActivate() {
            // check if a user is already logged in
            if (this.loginService.isUserloggedIn()) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return OnlyLoggedInUsersGuard;
      }();

      OnlyLoggedInUsersGuard.ctorParameters = function () {
        return [{
          type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      OnlyLoggedInUsersGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], OnlyLoggedInUsersGuard);
      /***/
    },

    /***/
    "qYlN":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/saved-attendance/saved-attendance.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SavedAttendanceComponent */

    /***/
    function qYlN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAttendanceComponent", function () {
        return SavedAttendanceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_saved_attendance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./saved-attendance.component.html */
      "0CWS");
      /* harmony import */


      var _saved_attendance_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./saved-attendance.component.css */
      "Oz9G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");
      /* harmony import */


      var app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/utils/Constants */
      "hZS/");
      /* harmony import */


      var app_utils_services_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/utils/services/attendance/attendance.service */
      "Plsl");
      /* harmony import */


      var app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/utils/services/login/login.service */
      "drjW");
      /* harmony import */


      var app_utils_services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/utils/services/util.service */
      "93p7");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var SavedAttendanceComponent = /*#__PURE__*/function () {
        function SavedAttendanceComponent(route, alertService, attendanceService, spinner, utilsService, activeModal, loginService) {
          _classCallCheck(this, SavedAttendanceComponent);

          this.route = route;
          this.alertService = alertService;
          this.attendanceService = attendanceService;
          this.spinner = spinner;
          this.utilsService = utilsService;
          this.activeModal = activeModal;
          this.loginService = loginService;
          this.delhiMale = [0, 0, 0, 0, 0, 0];
          this.delhiFemale = [0, 0, 0, 0, 0, 0];
          this.outsideMale = [0, 0, 0, 0, 0, 0];
          this.outsideFemale = [0, 0, 0, 0, 0, 0];
          this.maleTotal = [0, 0, 0, 0, 0, 0];
          this.femaleTotal = [0, 0, 0, 0, 0, 0];
          this.summaryAttendanceList = [];
          this.summaryAttendanceColDefs = [{
            headerName: ' ',
            resizable: true,
            children: [{
              headerName: 'Category',
              field: 'category',
              width: 240,
              resizable: true
            }]
          }, {
            headerName: 'OD Branch',
            resizable: true,
            children: [{
              headerName: 'Male',
              field: 'delhiMale',
              resizable: true,
              width: 70
            }, {
              headerName: 'Female',
              field: 'delhiFemale',
              resizable: true,
              width: 80
            }]
          }, {
            headerName: 'Visitors',
            resizable: true,
            children: [{
              headerName: 'Male',
              field: 'outsideMale',
              resizable: true,
              width: 70
            }, {
              headerName: 'Female',
              field: 'outsideFemale',
              resizable: true,
              width: 80
            }]
          }, {
            headerName: 'Total',
            resizable: true,
            children: [{
              headerName: 'Male',
              field: 'maleTotal',
              resizable: true,
              width: 70,
              cellStyle: {
                'background-color': '#90ee90'
              }
            }, {
              headerName: 'Female',
              field: 'femaleTotal',
              resizable: true,
              width: 80,
              cellStyle: {
                'background-color': '#90ee90'
              }
            }]
          }];
          this.markedAttendancList = [];
          this.attendanceColumDefs = [{
            headerName: 'UID Number',
            field: 'uidNo',
            width: 220,
            resizable: true,
            filter: true,
            sortable: true
          }, {
            headerName: 'Name',
            field: 'name',
            width: 280,
            resizable: true,
            filter: true,
            sortable: true
          }, {
            headerName: 'Current Status',
            field: 'iniJigStatus',
            resizable: true,
            filter: true,
            sortable: true
          }];
          this.attendCode = null;
          this.attendDate = null;
          this.routePassedCode = null;
          this.tableTheme = app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.AG_GRID_CLS_THEME;
          this.selectedRows = [];
          this.isAllowDelete = false;
        }

        _createClass(SavedAttendanceComponent, [{
          key: "onResize",
          value: function onResize(event) {
            this.height = event.target.innerHeight - 265;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.height = this.height ? this.height : window.innerHeight - 280;
            this.route.params.subscribe(function (params) {
              if (params['code'] && params['date']) {
                var passedCode = params['code'];
                _this11.routePassedCode = passedCode;
                var passedAttendDate = params['date'];

                _this11.getSavedAttendance(passedCode, passedAttendDate);
              }
            });
            this.gridApi = {
              columnDefs: this.summaryAttendanceColDefs,
              rowData: this.summaryAttendanceList,
              groupSelectsChildren: true,
              suppressRowClickSelection: true,
              context: {
                parentComponent: this
              },
              rowSelection: 'multiple',
              enableColResize: true,
              enableSorting: true
            };
            var attendanceRoleList = this.loginService.getUserRoles().some(function (res) {
              return res.roleId === 11 && res.accessType === 'Write';
            });

            if (attendanceRoleList) {
              this.isAllowDelete = true;
            }
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params;
          }
        }, {
          key: "getSavedAttendance",
          value: function getSavedAttendance(code, date) {
            var _this12 = this;

            this.delhiMale = [0, 0, 0, 0, 0, 0];
            this.delhiFemale = [0, 0, 0, 0, 0, 0];
            this.outsideMale = [0, 0, 0, 0, 0, 0];
            this.outsideFemale = [0, 0, 0, 0, 0, 0];
            this.maleTotal = [0, 0, 0, 0, 0, 0];
            this.femaleTotal = [0, 0, 0, 0, 0, 0];
            this.summaryAttendanceList = [];
            this.spinner.show(undefined, {
              type: 'ball-fussion',
              color: 'rgba(100,149,237,.8)'
            });
            this.attendanceService.getActivityAttendance(code, date).subscribe(function (response) {
              if (response.data) {
                _this12.markedAttendancList = JSON.parse(JSON.stringify(response.data.savedAttendancePeopleModals));

                if (_this12.markedAttendancList) {
                  for (var i = 0; i < _this12.markedAttendancList.length; i++) {
                    if (_this12.markedAttendancList[i].iniJigStatus === 'Initiated' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiMale[0] = !_this12.delhiMale[0] ? 1 : _this12.delhiMale[0] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Initiated' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiFemale[0] = !_this12.delhiFemale[0] ? 1 : _this12.delhiFemale[0] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Jigyasu' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiMale[1] = !_this12.delhiMale[1] ? 1 : _this12.delhiMale[1] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Jigyasu' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiFemale[1] = !_this12.delhiFemale[1] ? 1 : _this12.delhiFemale[1] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Child' && _this12.markedAttendancList[i].isSantSu === 'N' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiMale[2] = !_this12.delhiMale[2] ? 1 : _this12.delhiMale[2] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Child' && _this12.markedAttendancList[i].isSantSu === 'N' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiFemale[2] = !_this12.delhiFemale[2] ? 1 : _this12.delhiFemale[2] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Child' && _this12.markedAttendancList[i].isSantSu === 'Y' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiMale[3] = !_this12.delhiMale[3] ? 1 : _this12.delhiMale[3] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Child' && _this12.markedAttendancList[i].isSantSu === 'Y' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiFemale[3] = !_this12.delhiFemale[3] ? 1 : _this12.delhiFemale[3] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Other' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiMale[4] = !_this12.delhiMale[4] ? 1 : _this12.delhiMale[4] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Other' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName === 'OD Branch') {
                      _this12.delhiFemale[4] = !_this12.delhiFemale[4] ? 1 : _this12.delhiFemale[4] + 1;
                    } // Visitors Counts


                    if (_this12.markedAttendancList[i].iniJigStatus === 'Initiated' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName !== 'OD Branch') {
                      _this12.outsideMale[0] = !_this12.outsideMale[0] ? 1 : _this12.outsideMale[0] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Initiated' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName !== 'OD Branch') {
                      _this12.outsideFemale[0] = !_this12.outsideFemale[0] ? 1 : _this12.outsideFemale[0] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Jigyasu' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName !== 'OD Branch') {
                      _this12.outsideMale[1] = !_this12.outsideMale[1] ? 1 : _this12.outsideMale[1] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Jigyasu' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName !== 'OD Branch') {
                      _this12.outsideFemale[1] = !_this12.outsideFemale[1] ? 1 : _this12.outsideFemale[1] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Child' && _this12.markedAttendancList[i].gender === 'M' && _this12.markedAttendancList[i].branchName !== 'OD Branch') {
                      _this12.outsideMale[2] = !_this12.outsideMale[2] ? 1 : _this12.outsideMale[2] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Child' && _this12.markedAttendancList[i].gender === 'F' && _this12.markedAttendancList[i].branchName !== 'OD Branch') {
                      _this12.outsideFemale[2] = !_this12.outsideFemale[2] ? 1 : _this12.outsideFemale[2] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Other' && _this12.markedAttendancList[i].branchName !== 'OD Branch' && _this12.markedAttendancList[i].gender === 'M') {
                      _this12.outsideMale[4] = !_this12.outsideMale[4] ? 1 : _this12.outsideMale[4] + 1;
                    }

                    if (_this12.markedAttendancList[i].iniJigStatus === 'Other' && _this12.markedAttendancList[i].branchName !== 'OD Branch' && _this12.markedAttendancList[i].gender === 'F') {
                      _this12.outsideFemale[4] = !_this12.outsideFemale[4] ? 1 : _this12.outsideFemale[4] + 1;
                    }
                  }
                }

                _this12.attendCode = JSON.parse(JSON.stringify(response.data.activityName));
                _this12.attendDate = _this12.utilsService.formatDateDDMMYYY(response.data.activityDate);

                _this12.configureRows();
              } else {
                // tslint:disable-next-line: max-line-length
                _this12.alertService.show(app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.ALERT_MSG_ICON + response.message, '', app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.MSG_TYPE_ERR);
              }

              setTimeout(function () {
                _this12.spinner.hide();
              }, 1000);
            }, function (error) {
              // set loading to false on error
              _this12.spinner.hide();

              var errMsg = _this12.utilsService.errorServiceHandler(error);

              _this12.alertService.show(app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.ALERT_MSG_ICON + errMsg, '', app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.MSG_TYPE_ERR);
            });
          }
        }, {
          key: "onBtnExport",
          value: function onBtnExport() {
            var params = {
              skipHeader: false,
              skipFooters: false,
              skipGroups: false,
              fileName: "Attendace_".concat(this.attendCode, "_").concat(this.attendDate, ".csv")
            };
            this.gridApi.api.exportDataAsCsv(params);
          }
        }, {
          key: "configureRows",
          value: function configureRows() {
            this.summaryAttendanceList = [{
              category: 'Initiated',
              delhiMale: this.delhiMale[0],
              delhiFemale: this.delhiFemale[0],
              outsideMale: this.outsideMale[0],
              outsideFemale: this.outsideFemale[0],
              maleTotal: !(this.delhiMale[0] + this.outsideMale[0]) ? 0 : this.delhiMale[0] + this.outsideMale[0],
              femaleTotal: !(this.delhiFemale[0] + this.outsideFemale[0]) ? 0 : this.delhiFemale[0] + this.outsideFemale[0]
            }, {
              category: 'Jigyasus',
              delhiMale: this.delhiMale[1],
              delhiFemale: this.delhiFemale[1],
              outsideMale: this.outsideMale[1],
              outsideFemale: this.outsideFemale[1],
              maleTotal: !(this.delhiMale[1] + this.outsideMale[1]) ? 0 : this.delhiMale[1] + this.outsideMale[1],
              femaleTotal: !(this.delhiFemale[1] + this.outsideFemale[1]) ? 0 : this.delhiFemale[1] + this.outsideFemale[1]
            }, {
              category: 'Children upto 15 yrs(excluding Sant-Su)',
              delhiMale: this.delhiMale[2],
              delhiFemale: this.delhiFemale[2],
              outsideMale: this.outsideMale[2],
              outsideFemale: this.outsideFemale[2],
              maleTotal: !(this.delhiMale[2] + this.outsideMale[2]) ? 0 : this.delhiMale[2] + this.outsideMale[2],
              femaleTotal: !(this.delhiFemale[2] + this.outsideFemale[2]) ? 0 : this.delhiFemale[2] + this.outsideFemale[2]
            }, {
              category: 'Children(Sant-Su)',
              delhiMale: this.delhiMale[3],
              delhiFemale: this.delhiFemale[3],
              outsideMale: this.outsideMale[3],
              outsideFemale: this.outsideFemale[3],
              maleTotal: !(this.delhiMale[3] + this.outsideMale[3]) ? 0 : this.delhiMale[3] + this.outsideMale[3],
              femaleTotal: !(this.delhiFemale[3] + this.outsideFemale[3]) ? 0 : this.delhiFemale[3] + this.outsideFemale[3]
            }, {
              category: 'Non Initiated/Others',
              delhiMale: this.delhiMale[4],
              delhiFemale: this.delhiFemale[4],
              outsideMale: this.outsideMale[4],
              outsideFemale: this.outsideFemale[4],
              maleTotal: !(this.delhiMale[4] + this.outsideMale[4]) ? 0 : this.delhiMale[4] + this.outsideMale[4],
              femaleTotal: !(this.delhiFemale[4] + this.outsideFemale[4]) ? 0 : this.delhiFemale[4] + this.outsideFemale[4]
            }, {
              category: 'Total',
              delhiMale: this.delhiMale[0] + this.delhiMale[1] + this.delhiMale[2] + this.delhiMale[3] + this.delhiMale[4],
              delhiFemale: this.delhiFemale[0] + this.delhiFemale[1] + this.delhiFemale[2] + this.delhiFemale[3] + this.delhiFemale[4],
              outsideMale: this.outsideMale[0] + this.outsideMale[1] + this.outsideMale[2] + this.outsideMale[3] + this.outsideMale[4],
              outsideFemale: this.outsideFemale[0] + this.outsideFemale[1] + this.outsideFemale[2] + this.outsideFemale[3] + this.outsideFemale[4],
              maleTotal: this.delhiMale[0] + this.delhiMale[1] + this.delhiMale[2] + this.delhiMale[3] + this.delhiMale[4] + this.outsideMale[0] + this.outsideMale[1] + this.outsideMale[2] + this.outsideMale[3] + this.outsideMale[4],
              femaleTotal: this.delhiFemale[0] + this.delhiFemale[1] + this.delhiFemale[2] + this.delhiFemale[3] + this.delhiFemale[4] + this.outsideFemale[0] + this.outsideFemale[1] + this.outsideFemale[2] + this.outsideFemale[3] + this.outsideFemale[4]
            }];
          }
        }, {
          key: "openModal",
          value: function openModal(modal) {
            this.activeModal.open(modal, {
              size: 'lg'
            });
          }
        }, {
          key: "deleteModla",
          value: function deleteModla(modal) {
            this.activeModal.open(modal, {
              size: 'sm'
            });
          }
        }, {
          key: "onRowSelection",
          value: function onRowSelection(event) {
            this.selectedRows = event.api.getSelectedRows();
          }
        }, {
          key: "deleteSelectedAttendance",
          value: function deleteSelectedAttendance() {
            var _this13 = this;

            var dataToSend = {
              rollNoList: this.selectedRows.map(function (s) {
                return +s.rollNo;
              }),
              activityCode: this.routePassedCode,
              activityDate: this.utilsService.formatDate(this.attendDate),
              name: this.selectedRows.filter(function (ele) {
                return !ele.rollNo;
              }).map(function (ele) {
                return ele.name;
              })
            };
            this.spinner.show(undefined, {
              type: 'ball-fussion',
              color: 'rgba(100,149,237,.8)'
            });
            this.attendanceService.deleteSelectedAttendance(dataToSend).subscribe(function (response) {
              if (response.success) {
                _this13.ngOnInit();
              } else {
                _this13.alertService.show(app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.ALERT_MSG_ICON + response.message, '', app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.MSG_TYPE_ERR);
              }

              setTimeout(function () {
                _this13.spinner.hide();
              }, 500);
            }, function (error) {
              _this13.spinner.hide();

              var errMsg = _this13.utilsService.errorServiceHandler(error);

              _this13.alertService.show(app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.ALERT_MSG_ICON + errMsg, '', app_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["CONSTANTS"].MAIN.APP.CONSTANTS.MSG_TYPE_ERR);
            });
          }
        }]);

        return SavedAttendanceComponent;
      }();

      SavedAttendanceComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]
        }, {
          type: app_utils_services_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_8__["AttendanceService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]
        }, {
          type: app_utils_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
        }];
      };

      SavedAttendanceComponent.propDecorators = {
        ErTableGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['attendanceTable', {
            "static": false
          }]
        }],
        summaryTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['summaryTable', {
            "static": false
          }]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['style.height']
        }]
      };
      SavedAttendanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saved-attendance',
        template: _raw_loader_saved_attendance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_attendance_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"], app_utils_services_attendance_attendance_service__WEBPACK_IMPORTED_MODULE_8__["AttendanceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], app_utils_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], app_utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]])], SavedAttendanceComponent);
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "in5m");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "n7sk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils/services/login/login.service */
      "drjW");
      /* harmony import */


      var _utils_Constants_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils/Constants/index */
      "hZS/");
      /* harmony import */


      var _utils_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utils/services/util.service */
      "93p7");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, loginService, utilsService, alertService, spinner) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.loginService = loginService;
          this.utilsService = utilsService;
          this.alertService = alertService;
          this.spinner = spinner;
          this.localStorageObjectNames = _utils_Constants_index__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].MAIN.APP.CONSTANTS.LOCAL_STORAGE_OBJECT_NAMES;
          this.user = {
            username: '',
            password: ''
          };
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.spinner.show(undefined, {
              type: 'ball-fussion',
              color: 'rgba(100,149,237,.8)'
            });
            setTimeout(function () {
              _this14.spinner.hide();
            }, 500);

            if (this.loginService.isUserloggedIn()) {
              this.router.navigate(['/']);
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this15 = this;

            if (this.user.password != null && this.user.username != null) {
              this.spinner.show(undefined, {
                type: 'ball-fussion',
                color: 'rgba(100,149,237,.8)'
              });
              this.loginService.loginUserService(this.user).subscribe(function (response) {
                if (response.success === true) {
                  var response_data = {};
                  var userRoles = {};
                  var userCodes = []; // clearing localStorage

                  window.localStorage.clear();
                  window.localStorage.removeItem(_this15.localStorageObjectNames.user_info);
                  response_data.rollNo = response.data.rollNo;
                  response_data.uidNo = response.data.uidNo;
                  response_data.userName = response.data.userName;
                  userRoles = response.data.rolesDetailsList;
                  userCodes = _toConsumableArray(new Set(response.data.rolesDetailsList.map(function (s) {
                    return s.roleId;
                  })));
                  window.localStorage.setItem(_this15.localStorageObjectNames.user_info, JSON.stringify(response_data));
                  window.localStorage.setItem(_this15.localStorageObjectNames.user_roles, JSON.stringify(userRoles));
                  window.localStorage.setItem(_this15.localStorageObjectNames.userCodes, JSON.stringify(userCodes)); // navigate to home page

                  _this15.router.navigate(['/dashboard']);
                } else {
                  _this15.router.navigate(['/login']);

                  _this15.alertService.show(_utils_Constants_index__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].MAIN.APP.CONSTANTS.ALERT_MSG_ICON + response.message, '', _utils_Constants_index__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].MAIN.APP.CONSTANTS.MSG_TYPE_ERR);
                }

                setTimeout(function () {
                  _this15.spinner.hide();
                }, 500);
              }, function (error) {
                setTimeout(function () {
                  _this15.spinner.hide();
                }, 500);

                var errMsg = _this15.utilsService.errorServiceHandler(error);

                _this15.alertService.show(_utils_Constants_index__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].MAIN.APP.CONSTANTS.ALERT_MSG_ICON + errMsg, '', _utils_Constants_index__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].MAIN.APP.CONSTANTS.MSG_TYPE_ERR);
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }, {
          type: _utils_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _utils_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _utils_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])], LoginComponent);
      /***/
    },

    /***/
    "vtrx":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function vtrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "wCP4":
    /*!*******************************************!*\
      !*** ./src/app/sidebar/sidebar.module.ts ***!
      \*******************************************/

    /*! exports provided: SidebarModule */

    /***/
    function wCP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar.component */
      "47Jg");

      var SidebarModule = /*#__PURE__*/_createClass(function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      });

      SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
      })], SidebarModule);
      /***/
    },

    /***/
    "zP5E":
    /*!***********************************************************************!*\
      !*** ./src/app/utils/services/datamanagment/datamanagment.service.ts ***!
      \***********************************************************************/

    /*! exports provided: DataManagmentService */

    /***/
    function zP5E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataManagmentService", function () {
        return DataManagmentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../http.service */
      "2Cn2");
      /* harmony import */


      var _Constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Constants/index */
      "hZS/");

      var DataManagmentService = /*#__PURE__*/function (_http_service__WEBPAC4) {
        _inherits(DataManagmentService, _http_service__WEBPAC4);

        var _super8 = _createSuper(DataManagmentService);

        function DataManagmentService() {
          var _this16;

          _classCallCheck(this, DataManagmentService);

          _this16 = _super8.apply(this, arguments);
          _this16.relativeUrl = '';
          return _this16;
        }

        _createClass(DataManagmentService, [{
          key: "getAllActivityLists",
          value: function getAllActivityLists() {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_ACTIVITY_CODE);
          }
        }, {
          key: "getAllRolesLists",
          value: function getAllRolesLists() {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_ROLES_DATA);
          }
        }, {
          key: "changeActivityList",
          value: function changeActivityList(action, data) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.CHANGE_ACTIVITY_CODES + "?action=" + action, data);
          }
        }, {
          key: "changeRolesList",
          value: function changeRolesList(action, data) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.CHANGE_ROLE_CODES + "?action=" + action, data);
          }
        }, {
          key: "getPeopleData",
          value: function getPeopleData(status) {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_ALL_PEOPLE_DATE + "?status=" + status);
          }
        }, {
          key: "getAssignedRoles",
          value: function getAssignedRoles(uidNo) {
            return this.get(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.GET_ASSIGNED_PERMISSIONS + "?uidNo=" + uidNo);
          }
        }, {
          key: "submitPermissions",
          value: function submitPermissions(dataToPush, action) {
            return this.postWithoutHeaders(this.relativeUrl + _Constants_index__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].MAIN.APP.URLS.SAVE_USER_PERMISSIONS + "?action=" + action, dataToPush);
          }
        }]);

        return DataManagmentService;
      }(_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]);

      DataManagmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DataManagmentService);
      /***/
    },

    /***/
    "zRkE":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\">\r\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n      <!-- <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a> -->\r\n      <img class=\"logo\" src=\"favicon.ico\" style=\"float: left;\"><a class=\"navbar-brand logoHeader\" href=\"javascript:void(0)\">Old Delhi Satsang Branch</a>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n      <form>\r\n        <!-- <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <div class=\"input-group-append\">\r\n            <div class=\"input-group-text\">\r\n              <i class=\"nc-icon nc-zoom-split\"></i>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </form>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-layout-11\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\r\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\r\n            <i class=\"nc-icon nc-bell-55\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Notification</span>\r\n            </p>\r\n          </a>\r\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\r\n          </div>\r\n        </li>\r\n\r\n        <!-- <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\r\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\r\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Log Out</span>\r\n            </p>\r\n          </a>\r\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\r\n            <a ngbDropdownItem href=\"/#/resetPassword\"><i class=\"nc-icon nc-icon nc-key-25\"></i>  Reset Password</a>\r\n            <a ngbDropdownItem (click)=\"logOut();\" href=\"javascript:void(0)\"><i class=\"nc-icon nc-button-power\"></i>  Log Out</a>\r\n          </div>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p>\r\n          </a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./layouts/admin-layout/admin-layout.module": ["IqXj", "layouts-admin-layout-admin-layout-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "zvoc":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function zvoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"sidebar-wrapper\">\r\n  <div class=\"logo\">\r\n    <a class=\"simple-text logo-mini\">\r\n      <div class=\"logo-image-small\">\r\n        <img src=\"assets/img/logo-small.png\">\r\n      </div>\r\n    </a>\r\n    <a class=\"simple-text logo-normal\">\r\n      {{username}}\r\n    </a>\r\n  </div>\r\n  <ul class=\"nav\">\r\n    <li routerLinkActive=\"active\">\r\n      <a [routerLink]=\"'/dashboard'\">\r\n        <i class=\"nc-icon nc-bank\"></i>\r\n        <p>Home</p>\r\n      </a>\r\n    </li>\r\n    <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n      <a [routerLink]=\"[menuItem.path]\">\r\n        <i class=\"{{menuItem.icon}}\"></i>\r\n        <p>{{menuItem.title}}</p>\r\n      </a>\r\n    </li>\r\n    <!-- <li routerlinkactive=\"active\">\r\n      <a data-toggle=\"collapse\" (click)=\"hideOrShow()\"><i class=\"nc-icon nc-layout-11\"></i>\r\n        <p>Components<b class=\"caret\"></b></p>\r\n      </a>\r\n      <div class=\"collapse\" id=\"components\">\r\n        <ul class=\"nav\">\r\n          <li routerlinkactive=\"active\"><a href=\"#/components/buttons\"><span class=\"nc-icon nc-bank\"></span><span\r\n                class=\"sidebar-normal\"> Buttons</span></a></li>\r\n          <li routerlinkactive=\"active\"><a href=\"#/components/grid\"><span class=\"sidebar-mini-icon\">GS</span><span\r\n                class=\"sidebar-normal\">Grid System</span></a></li>\r\n          <li routerlinkactive=\"active\"><a href=\"#/components/panels\"><span class=\"sidebar-mini-icon\">P</span><span\r\n                class=\"sidebar-normal\">Panels</span></a></li>\r\n          <li routerlinkactive=\"active\"><a href=\"#/components/sweet-alert\"><span\r\n                class=\"sidebar-mini-icon\">SA</span><span class=\"sidebar-normal\">Sweet Alert</span></a></li>\r\n          <li routerlinkactive=\"active\"><a href=\"#/components/notifications\"><span\r\n                class=\"sidebar-mini-icon\">N</span><span class=\"sidebar-normal\">Notifications</span></a></li>\r\n          <li routerlinkactive=\"active\"><a href=\"#/components/icons\"><span class=\"sidebar-mini-icon\">I</span><span\r\n                class=\"sidebar-normal\">Icons</span></a></li>\r\n          <li routerlinkactive=\"active\"><a href=\"#/components/typography\"><span class=\"sidebar-mini-icon\">T</span><span\r\n                class=\"sidebar-normal\">Typography</span></a></li>\r\n        </ul>\r\n      </div>\r\n    </li> -->\r\n    <li routerLinkActive=\"active\" class=\"\">\r\n      <a [routerLink]=\"'/logout'\" (click)=\"logOut();\">\r\n        <i class=\"nc-icon nc-button-power\"></i>\r\n        <p>Log Out</p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map