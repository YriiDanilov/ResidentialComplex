/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/infrastructure_page.js/infrastructure_page_index.js":
/*!*****************************************************************!*\
  !*** ./src/infrastructure_page.js/infrastructure_page_index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infrastructure_page_style_infrastructure_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infrastructure_page_style/infrastructure_page_style.css */ "./src/infrastructure_page_style/infrastructure_page_style.css");
/* harmony import */ var _infrastructure_page_style_infrastructure_page_media_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infrastructure_page_style/infrastructure_page_media.css */ "./src/infrastructure_page_style/infrastructure_page_media.css");
/* harmony import */ var _style_blocks_main_page_media_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/blocks/main_page_media.css */ "./src/style/blocks/main_page_media.css");
/* harmony import */ var _js_main_page_fallMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/main_page_fallMenu.js */ "./src/js/main_page_fallMenu.js");
/* harmony import */ var _js_main_page_preloader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/main_page_preloader.js */ "./src/js/main_page_preloader.js");
/* harmony import */ var _js_main_page_feedback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/main_page_feedback.js */ "./src/js/main_page_feedback.js");
/* harmony import */ var _js_infrastructure_page_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/infrastructure_page_main.js */ "./src/js/infrastructure_page_main.js");







(0,_js_main_page_fallMenu_js__WEBPACK_IMPORTED_MODULE_3__.fallMenu)();
(0,_js_main_page_preloader_js__WEBPACK_IMPORTED_MODULE_4__.preloader)();
(0,_js_main_page_feedback_js__WEBPACK_IMPORTED_MODULE_5__.feedback)();
(0,_js_infrastructure_page_main_js__WEBPACK_IMPORTED_MODULE_6__.Boxlayout)();

/***/ }),

/***/ "./src/js/infrastructure_page_main.js":
/*!********************************************!*\
  !*** ./src/js/infrastructure_page_main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Boxlayout: () => (/* binding */ Boxlayout)
/* harmony export */ });
// import '../style/blocks/infrastructure_media.css'

var Boxlayout = function () {
  var wrapper = document.body,
    sgroups = Array.from(document.querySelectorAll(".sgroup")),
    closeButtons = Array.from(document.querySelectorAll(".close-sgroup")),
    expandedClass = "is-expanded",
    hasExpandedClass = "has-expanded-item";
  return {
    init: init
  };
  function init() {
    _initEvents();
  }
  function _initEvents() {
    sgroups.forEach(function (element) {
      element.onclick = function (event) {
        _opensgroup(event.target.parentElement);
      };
    });
    closeButtons.forEach(function (element) {
      element.onclick = function (event) {
        event.stopPropagation();
        _closesgroup(event.target.parentElement);
      };
    });
  }
  function _opensgroup(element) {
    if (!element.classList.contains(expandedClass)) {
      element.classList.add(expandedClass);
      wrapper.classList.add(hasExpandedClass);
    }
  }
  function _closesgroup(element) {
    if (element.classList.contains(expandedClass)) {
      element.classList.remove(expandedClass);
      wrapper.classList.remove(hasExpandedClass);
    }
  }
}();
Boxlayout.init();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_media.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_media.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 2500px) {
  .header {
    position: fixed;
  }
}
@media (max-width: 820px) and (min-width: 600px) {
  .hero-container {
    height: 67vh;
  }
  .hero-h1 {
    font-size: 35px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .page_text_bottom {
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
}
@media (max-width: 600px) {
  .hero-container {
    height: 100%;
    padding-top: 230px;
  }
  .hero-background {
    display: none;
  }
  .hero-h1 {
    color: var(--dark-blue);
    font-size: 36px;
    padding: 40px 20px 20px 20px;
    position: relative;
  }
  .page_text_bottom {
    display: none;
  }
  .bottom_button {
    max-width: 100%;
    min-height: 50px;
  }
  .sgroup-container {
    display: none;
  }
  .sgroup-container-mobile {
    display: block;
  }
}`, "",{"version":3,"sources":["webpack://./src/infrastructure_page_style/infrastructure_page_media.css"],"names":[],"mappings":"AAAA;EACI;IACI,eAAA;EACN;AACF;AAEA;EAEI;IACI,YAAA;EADN;EAIE;IACI,eAAA;IACA,kBAAA;IACA,mBAAA;EAFN;EAKE;IACI,eAAA;IACA,iBAAA;IACA,kBAAA;EAHN;AACF;AAMA;EAEI;IACI,YAAA;IACA,kBAAA;EALN;EAQE;IACI,aAAA;EANN;EASE;IAGI,uBAAA;IAFA,eAAA;IACA,4BAAA;IAEA,kBAAA;EAPN;EAUE;IACI,aAAA;EARN;EAWE;IACI,eAAA;IACA,gBAAA;EATN;EAYE;IACI,aAAA;EAVN;EAaE;IACI,cAAA;EAXN;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_style.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_style.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_base_main_page_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/base/main_page_fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_base_main_page_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/base/main_page_global.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_global.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_base_main_page_normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/base/main_page_normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_base_main_page_vars_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/base/main_page_vars.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_vars.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_blocks_main_page_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/blocks/main_page_header.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_blocks_main_page_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/blocks/main_page_footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_blocks_main_page_connection_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/blocks/main_page_connection.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_connection.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_base_main_page_phone_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/base/main_page_phone.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_phone.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_blocks_page_hero_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../style/blocks/page_hero.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/page_hero.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_infrastructure_page_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./infrastructure_page_main.css */ "./node_modules/css-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_main.css");
// Imports












var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_base_main_page_fonts_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_base_main_page_global_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_base_main_page_normalize_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_base_main_page_vars_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_blocks_main_page_header_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_blocks_main_page_footer_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_blocks_main_page_connection_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_base_main_page_phone_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_style_blocks_page_hero_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_infrastructure_page_main_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/infrastructure/ecology.webp */ "./src/img/infrastructure/ecology.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/infrastructure/sport.webp */ "./src/img/infrastructure/sport.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/infrastructure/roads.webp */ "./src/img/infrastructure/roads.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/infrastructure/sale.webp */ "./src/img/infrastructure/sale.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sgroup-container {
    position: relative;
    min-height: 600px;
    margin-top: 40px;
}

.sgroup {
    position: absolute;
    z-index: 0;
    width: 50%;
    height: 50%;
    overflow: hidden;
    cursor: pointer;
    transform: scale(1);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    background-size: cover;
    background-position: 50% 50%;
}

.sgroup:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.sgroup:hover:after {
    background-color: rgba(0,0,0,0.2);
}

.sgroup:nth-child(1) {
    top: 0;
    left: 0;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.sgroup:nth-child(2) {
    top: 0;
    left: 50%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.sgroup:nth-child(3) {
    top: 50%;
    left: 0;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.sgroup:nth-child(4) {
    top: 50%;
    left: 50%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.sgroup.is-expanded {
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    cursor: initial;
}

.has-expanded-item .sgroup:not(.is-expanded) {
    transform: scale(0);
}

.close-sgroup {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    line-height: 1;
    font-size: 50px;
    text-align: center;
    color: var(--light-blue);
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
    transition: opacity 150ms linear;
    will-change: opacity;
}

.sgroup.is-expanded .close-sgroup {
    opacity: 1;
    transition-delay: 500ms;
    pointer-events: initial;
}

.title-box {
    z-index: 1;
    position: relative;
    display: flex;
    padding: 0 20px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--light-blue);
    text-shadow: -1px 0 1px #989898, 0 1px 1px #989898, 5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(0, 0, 0, 0.4);
    font-size: 26px;
    font-weight: 600;
}

.sgroup.is-expanded:after {
    background-color: rgba(0,0,0,0.7);
}

.sgroup.is-expanded .title-box {
    justify-content: flex-start;
    height: auto;
    margin: 30px 40px;
    font-size: 26px;
}

.sgroup.is-expanded .info-box {
    z-index: 1;
    position: relative;
    display: flex;
    padding: 0 20px;
    height: 75%;
    overflow: hidden;
    align-items: center;
}

.info-col-1 {
    padding: 0 40px;
    width: 40%;
}

.info-col-1 img {
    width: 100%;
}

.info-col-2 {
    width: 60%;
    max-height: 100%;
    overflow-y: auto;
    font-size: 22px;
    color: var(--light-blue);
    line-height: 1.6;
    opacity: 0;
    transition: opacity 0.5s linear 0.4s;
    padding: 0 40px;
}

.is-expanded .info-box .info-col-2 {
    opacity: 1;
}

.sgroup-container-mobile {
    color: var(--light-blue);
    font-size: 22px;
    min-height: 640px;
    display: none;
}

.sgroup-mobile-item1 {
    background-color: var(--green);
}

.sgroup-mobile-item2 {
    background-color: var(--pink);
}

.sgroup-mobile-item3 {
    background-color: var(--blue);
}

.sgroup-mobile-item4 {
    background-color: var(--dark-green);
}

.sgroup-mobile-wrapper {
    font-weight: 400;
    font-size: 24px;
    padding-bottom: 20px;
}

.page_text_bottom {
    padding: 80px 20px 40px 20px;
    font-size: 22px;
    color: var(--dark-green);
    text-align: justify;
}

.bottom_button {
    position: relative;
    min-height: 50px;
    width: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    transition: all 0.9s;
    margin-top: 40px;
}

.section-infrastructure {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    transition: transform 0.5s ease;
}

`, "",{"version":3,"sources":["webpack://./src/infrastructure_page_style/infrastructure_page_main.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,kDAAkD;IAClD,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,+DAA+D;AACnE;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,MAAM;IACN,OAAO;IACP,yDAAyD;AAC7D;;AAEA;IACI,MAAM;IACN,SAAS;IACT,yDAAuD;AAC3D;;AAEA;IACI,QAAQ;IACR,OAAO;IACP,yDAAuD;AAC3D;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,yDAAsD;AAC1D;;AAEA;IACI,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,wBAAwB;IACxB,UAAU;IACV,eAAe;IACf,oBAAoB;IACpB,gCAAgC;IAChC,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;IACxB,sHAAsH;IACtH,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,gBAAgB;IAChB,UAAU;IACV,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,8BAA8B;IAC9B,mCAAmC;IACnC,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,+BAA+B;AACnC","sourcesContent":[".sgroup-container {\r\n    position: relative;\r\n    min-height: 600px;\r\n    margin-top: 40px;\r\n}\r\n\r\n.sgroup {\r\n    position: absolute;\r\n    z-index: 0;\r\n    width: 50%;\r\n    height: 50%;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    transform: scale(1);\r\n    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n}\r\n\r\n.sgroup:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.4);\r\n    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.sgroup:hover:after {\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.sgroup:nth-child(1) {\r\n    top: 0;\r\n    left: 0;\r\n    background-image: url(../img/infrastructure/ecology.webp);\r\n}\r\n\r\n.sgroup:nth-child(2) {\r\n    top: 0;\r\n    left: 50%;\r\n    background-image: url(../img/infrastructure/sport.webp);\r\n}\r\n\r\n.sgroup:nth-child(3) {\r\n    top: 50%;\r\n    left: 0;\r\n    background-image: url(../img/infrastructure/roads.webp);\r\n}\r\n\r\n.sgroup:nth-child(4) {\r\n    top: 50%;\r\n    left: 50%;\r\n    background-image: url(../img/infrastructure/sale.webp);\r\n}\r\n\r\n.sgroup.is-expanded {\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: initial;\r\n}\r\n\r\n.has-expanded-item .sgroup:not(.is-expanded) {\r\n    transform: scale(0);\r\n}\r\n\r\n.close-sgroup {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 1;\r\n    font-size: 50px;\r\n    text-align: center;\r\n    color: var(--light-blue);\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    pointer-events: none;\r\n    transition: opacity 150ms linear;\r\n    will-change: opacity;\r\n}\r\n\r\n.sgroup.is-expanded .close-sgroup {\r\n    opacity: 1;\r\n    transition-delay: 500ms;\r\n    pointer-events: initial;\r\n}\r\n\r\n.title-box {\r\n    z-index: 1;\r\n    position: relative;\r\n    display: flex;\r\n    padding: 0 20px;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    color: var(--light-blue);\r\n    text-shadow: -1px 0 1px #989898, 0 1px 1px #989898, 5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(0, 0, 0, 0.4);\r\n    font-size: 26px;\r\n    font-weight: 600;\r\n}\r\n\r\n.sgroup.is-expanded:after {\r\n    background-color: rgba(0,0,0,0.7);\r\n}\r\n\r\n.sgroup.is-expanded .title-box {\r\n    justify-content: flex-start;\r\n    height: auto;\r\n    margin: 30px 40px;\r\n    font-size: 26px;\r\n}\r\n\r\n.sgroup.is-expanded .info-box {\r\n    z-index: 1;\r\n    position: relative;\r\n    display: flex;\r\n    padding: 0 20px;\r\n    height: 75%;\r\n    overflow: hidden;\r\n    align-items: center;\r\n}\r\n\r\n.info-col-1 {\r\n    padding: 0 40px;\r\n    width: 40%;\r\n}\r\n\r\n.info-col-1 img {\r\n    width: 100%;\r\n}\r\n\r\n.info-col-2 {\r\n    width: 60%;\r\n    max-height: 100%;\r\n    overflow-y: auto;\r\n    font-size: 22px;\r\n    color: var(--light-blue);\r\n    line-height: 1.6;\r\n    opacity: 0;\r\n    transition: opacity 0.5s linear 0.4s;\r\n    padding: 0 40px;\r\n}\r\n\r\n.is-expanded .info-box .info-col-2 {\r\n    opacity: 1;\r\n}\r\n\r\n.sgroup-container-mobile {\r\n    color: var(--light-blue);\r\n    font-size: 22px;\r\n    min-height: 640px;\r\n    display: none;\r\n}\r\n\r\n.sgroup-mobile-item1 {\r\n    background-color: var(--green);\r\n}\r\n\r\n.sgroup-mobile-item2 {\r\n    background-color: var(--pink);\r\n}\r\n\r\n.sgroup-mobile-item3 {\r\n    background-color: var(--blue);\r\n}\r\n\r\n.sgroup-mobile-item4 {\r\n    background-color: var(--dark-green);\r\n}\r\n\r\n.sgroup-mobile-wrapper {\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.page_text_bottom {\r\n    padding: 80px 20px 40px 20px;\r\n    font-size: 22px;\r\n    color: var(--dark-green);\r\n    text-align: justify;\r\n}\r\n\r\n.bottom_button {\r\n    position: relative;\r\n    min-height: 50px;\r\n    width: 100%;\r\n    background-color: var(--green);\r\n    border-radius: var(--border-radius);\r\n    transition: all 0.9s;\r\n    margin-top: 40px;\r\n}\r\n\r\n.section-infrastructure {\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100vh;\r\n    transition: transform 0.5s ease;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/infrastructure_page_style/infrastructure_page_media.css":
/*!*********************************************************************!*\
  !*** ./src/infrastructure_page_style/infrastructure_page_media.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_media_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./infrastructure_page_media.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_media.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/infrastructure_page_style/infrastructure_page_style.css":
/*!*********************************************************************!*\
  !*** ./src/infrastructure_page_style/infrastructure_page_style.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./infrastructure_page_style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/infrastructure_page_style/infrastructure_page_style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_infrastructure_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/img/infrastructure/ecology.webp":
/*!*********************************************!*\
  !*** ./src/img/infrastructure/ecology.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ecology.webp";

/***/ }),

/***/ "./src/img/infrastructure/roads.webp":
/*!*******************************************!*\
  !*** ./src/img/infrastructure/roads.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/roads.webp";

/***/ }),

/***/ "./src/img/infrastructure/sale.webp":
/*!******************************************!*\
  !*** ./src/img/infrastructure/sale.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sale.webp";

/***/ }),

/***/ "./src/img/infrastructure/sport.webp":
/*!*******************************************!*\
  !*** ./src/img/infrastructure/sport.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sport.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"infrastructura": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkResidentialComplex"] = self["webpackChunkResidentialComplex"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-ff8cde","src_js_main_page_fallMenu_js-src_js_main_page_feedback_js-src_js_main_page_preloader_js-node_-c82f4d","node_modules_css-loader_dist_cjs_js_src_style_blocks_page_hero_css-src_style_blocks_main_page-4c0ca3"], () => (__webpack_require__("./src/infrastructure_page.js/infrastructure_page_index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=infrastructura.bundle.js.map