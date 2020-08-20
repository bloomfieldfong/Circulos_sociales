function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-mensajes-mensajes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mensajes/mensajes.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mensajes/mensajes.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesMensajesMensajesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color = \"danger\">\n    <ion-title>Mensajes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\"  color = \"danger\">\n    <ion-tab-button (click)=\"moveHome()\">\n      <ion-icon name=\"home-outline\" ></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"moveGroup()\">\n      <ion-icon name=\"people-outline\"></ion-icon>\n      <ion-label>Grupos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button>\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n      <ion-label>Mensajes</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"movePerfil()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>";
    /***/
  },

  /***/
  "./src/app/componentes/mensajes/mensajes-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/componentes/mensajes/mensajes-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MensajesPageRoutingModule */

  /***/
  function srcAppComponentesMensajesMensajesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajesPageRoutingModule", function () {
      return MensajesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mensajes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mensajes.page */
    "./src/app/componentes/mensajes/mensajes.page.ts");

    var routes = [{
      path: '',
      component: _mensajes_page__WEBPACK_IMPORTED_MODULE_3__["MensajesPage"]
    }];

    var MensajesPageRoutingModule = function MensajesPageRoutingModule() {
      _classCallCheck(this, MensajesPageRoutingModule);
    };

    MensajesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MensajesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/mensajes/mensajes.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/mensajes/mensajes.module.ts ***!
    \*********************************************************/

  /*! exports provided: MensajesPageModule */

  /***/
  function srcAppComponentesMensajesMensajesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajesPageModule", function () {
      return MensajesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mensajes-routing.module */
    "./src/app/componentes/mensajes/mensajes-routing.module.ts");
    /* harmony import */


    var _mensajes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mensajes.page */
    "./src/app/componentes/mensajes/mensajes.page.ts");

    var MensajesPageModule = function MensajesPageModule() {
      _classCallCheck(this, MensajesPageModule);
    };

    MensajesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MensajesPageRoutingModule"]],
      declarations: [_mensajes_page__WEBPACK_IMPORTED_MODULE_6__["MensajesPage"]]
    })], MensajesPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/mensajes/mensajes.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/mensajes/mensajes.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesMensajesMensajesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnNhamVzL21lbnNhamVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/mensajes/mensajes.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/mensajes/mensajes.page.ts ***!
    \*******************************************************/

  /*! exports provided: MensajesPage */

  /***/
  function srcAppComponentesMensajesMensajesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajesPage", function () {
      return MensajesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MensajesPage = /*#__PURE__*/function () {
      function MensajesPage(router) {
        _classCallCheck(this, MensajesPage);

        this.router = router;
      }

      _createClass(MensajesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "moveHome",
        value: function moveHome() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "moveProfile",
        value: function moveProfile() {
          this.router.navigate(['/perfil']);
        }
      }, {
        key: "moveGroup",
        value: function moveGroup() {
          this.router.navigate(['/grupos']);
        }
      }, {
        key: "movePerfil",
        value: function movePerfil() {
          this.router.navigate(['/perfil']);
        }
      }]);

      return MensajesPage;
    }();

    MensajesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MensajesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mensajes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mensajes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mensajes/mensajes.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mensajes.page.scss */
      "./src/app/componentes/mensajes/mensajes.page.scss"))["default"]]
    })], MensajesPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-mensajes-mensajes-module-es5.js.map