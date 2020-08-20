function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-grupos-grupos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/grupos/grupos.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/grupos/grupos.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesGruposGruposPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color = \"danger\">\n    <ion-title >Grupos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\"  color = \"danger\">\n    <ion-tab-button (click)=\"moveHome()\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n    <ion-tab-button >\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>Grupos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"moveMensajes()\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n      <ion-label>Mensajes</ion-label>\n    </ion-tab-button>\n    <ion-tab-button  (click)=\"movePerfil()\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n";
    /***/
  },

  /***/
  "./src/app/componentes/grupos/grupos-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/componentes/grupos/grupos-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GruposPageRoutingModule */

  /***/
  function srcAppComponentesGruposGruposRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GruposPageRoutingModule", function () {
      return GruposPageRoutingModule;
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


    var _grupos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./grupos.page */
    "./src/app/componentes/grupos/grupos.page.ts");

    var routes = [{
      path: '',
      component: _grupos_page__WEBPACK_IMPORTED_MODULE_3__["GruposPage"]
    }];

    var GruposPageRoutingModule = function GruposPageRoutingModule() {
      _classCallCheck(this, GruposPageRoutingModule);
    };

    GruposPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GruposPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/grupos/grupos.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/grupos/grupos.module.ts ***!
    \*****************************************************/

  /*! exports provided: GruposPageModule */

  /***/
  function srcAppComponentesGruposGruposModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GruposPageModule", function () {
      return GruposPageModule;
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


    var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grupos-routing.module */
    "./src/app/componentes/grupos/grupos-routing.module.ts");
    /* harmony import */


    var _grupos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grupos.page */
    "./src/app/componentes/grupos/grupos.page.ts");

    var GruposPageModule = function GruposPageModule() {
      _classCallCheck(this, GruposPageModule);
    };

    GruposPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__["GruposPageRoutingModule"]],
      declarations: [_grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]]
    })], GruposPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/grupos/grupos.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/grupos/grupos.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesGruposGruposPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2dydXBvcy9ncnVwb3MucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/grupos/grupos.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/componentes/grupos/grupos.page.ts ***!
    \***************************************************/

  /*! exports provided: GruposPage */

  /***/
  function srcAppComponentesGruposGruposPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GruposPage", function () {
      return GruposPage;
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

    var GruposPage = /*#__PURE__*/function () {
      function GruposPage(router) {
        _classCallCheck(this, GruposPage);

        this.router = router;
      }

      _createClass(GruposPage, [{
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
        key: "moveMensajes",
        value: function moveMensajes() {
          this.router.navigate(['/mensajes']);
        }
      }, {
        key: "movePerfil",
        value: function movePerfil() {
          this.router.navigate(['/perfil']);
        }
      }]);

      return GruposPage;
    }();

    GruposPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GruposPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grupos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./grupos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/grupos/grupos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./grupos.page.scss */
      "./src/app/componentes/grupos/grupos.page.scss"))["default"]]
    })], GruposPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-grupos-grupos-module-es5.js.map