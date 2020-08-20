function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-registro-registro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color = \"danger\">\n    <ion-title text-center>Registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <img class = \"icon\" src = \"assets/icon/logo.png\" alt = \"\"> \n</ion-content>\n\n<ion-content padding>\n<ion-item>\n  <ion-label position = \"floating\">Correo</ion-label>\n  <ion-input type = \"text\"name = \"Correo\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position = \"floating\">Contraseña</ion-label>\n  <ion-input type = \"password\" name = \"Usuario\"></ion-input>\n</ion-item>\n\n<br>\n<ion-button (click)= \"registrar()\" expand = \"block\">Registrarx</ion-button>\n  \n";
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/componentes/registro/registro-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RegistroPageRoutingModule */

  /***/
  function srcAppComponentesRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
      return RegistroPageRoutingModule;
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


    var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/componentes/registro/registro.page.ts");

    var routes = [{
      path: '',
      component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }];

    var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
      _classCallCheck(this, RegistroPageRoutingModule);
    };

    RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/registro/registro.module.ts ***!
    \*********************************************************/

  /*! exports provided: RegistroPageModule */

  /***/
  function srcAppComponentesRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
      return RegistroPageModule;
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


    var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-routing.module */
    "./src/app/componentes/registro/registro-routing.module.ts");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/componentes/registro/registro.page.ts");

    var RegistroPageModule = function RegistroPageModule() {
      _classCallCheck(this, RegistroPageModule);
    };

    RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]],
      declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })], RegistroPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/registro/registro.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/registro/registro.page.ts ***!
    \*******************************************************/

  /*! exports provided: RegistroPage */

  /***/
  function srcAppComponentesRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
      return RegistroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegistroPage = /*#__PURE__*/function () {
      function RegistroPage() {
        _classCallCheck(this, RegistroPage);
      }

      _createClass(RegistroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistroPage;
    }();

    RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro.page.scss */
      "./src/app/componentes/registro/registro.page.scss"))["default"]]
    })], RegistroPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-registro-registro-module-es5.js.map