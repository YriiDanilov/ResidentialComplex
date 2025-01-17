/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/select_page.js/select_page_index.js":
/*!*************************************************!*\
  !*** ./src/select_page.js/select_page_index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_page_style_select_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../select_page_style/select_page_style.css */ "./src/select_page_style/select_page_style.css");
/* harmony import */ var _select_page_style_select_page_media_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select_page_style/select_page_media.css */ "./src/select_page_style/select_page_media.css");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/select_page_style/select_page_media.css":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/select_page_style/select_page_media.css ***!
  \********************************************************************************************************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_1.webp */ "./src/img/select/house_1.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_2.webp */ "./src/img/select/house_2.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_3.webp */ "./src/img/select/house_3.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_4.webp */ "./src/img/select/house_4.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 820px) and (min-width: 600px) {
  .hero-container {
    height: 67vh;
  }
  .hero-h1 {
    font-size: 35px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .selectan-h2-btn {
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 40px 20px;
  }
  .select-h2-text {
    margin: 40px 0;
  }
  .text-bottom {
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .block-menu {
    margin: 0 auto;
  }
  .block-menu-link {
    display: none;
  }
  .block-menu-name {
    align-content: center;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--border-radius);
    color: var(--dark-green);
    display: block;
    font-size: 20px;
    left: 0;
    min-height: 40px;
    position: absolute;
    right: 0;
    text-align: center;
    transform: none;
  }
  .block-menu li .arrow svg {
    height: 30px;
    opacity: 1;
    stroke: var(--dark-green);
    stroke-width: 4;
    width: 30px;
  }
  .block-menu-wall {
    display: none;
  }
  .block-menu li .arrow {
    height: 0;
    opacity: 1;
    top: 4px;
    transition: none;
    width: 0;
  }
  .block-menu li:hover .arrow {
    opacity: 1;
    right: 30px;
  }
  .mobile_menu_link {
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    display: block;
    left: 0;
    margin-bottom: 40px;
    min-height: 420px;
    min-width: 100%;
    position: relative;
    right: 0;
  }
  .mobile_menu_link:hover {
    background-color: rgba(17, 59, 95, 0.6);
    transition: all 0.4s ease-in;
  }
  .mobile-card_1 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mobile-card_2 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mobile-card_3 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mobile-card_4 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-size: cover;
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
    font-size: 30px;
    padding: 40px 20px 20px 20px;
    position: relative;
  }
  .page_text_bottom {
    display: none;
  }
  .selectan-h2-btn {
    justify-content: center;
    padding: 40px 0;
  }
  .select-h2 {
    display: none;
  }
  .select-h2-text {
    display: none;
  }
  .select-btn {
    min-width: auto;
  }
  .block-menu {
    margin: 0 auto;
  }
  .block-menu-link {
    display: none;
  }
  .block-menu-name {
    align-content: center;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--border-radius);
    color: var(--dark-green);
    display: block;
    font-size: 20px;
    left: 0;
    min-height: 40px;
    position: absolute;
    right: 0;
    text-align: center;
    transform: none;
  }
  .block-menu li .arrow svg {
    height: 30px;
    opacity: 1;
    stroke: var(--dark-green);
    stroke-width: 4;
    width: 30px;
  }
  .block-menu-wall {
    display: none;
  }
  .block-menu li .arrow {
    height: 0;
    opacity: 1;
    top: 4px;
    transition: none;
    width: 0;
  }
  .block-menu li:hover .arrow {
    opacity: 1;
    right: 30px;
  }
  .mobile_menu_link {
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    display: block;
    left: 0;
    margin-bottom: 40px;
    min-height: 320px;
    min-width: 100%;
    position: relative;
    right: 0;
  }
  .mobile_menu_link {
    background-color: rgba(17, 59, 95, 0.6);
    transition: all 0.4s ease-in;
  }
  .mobile-card_1 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mobile-card_2 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mobile-card_3 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mobile-card_4 {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-size: cover;
  }
}`, "",{"version":3,"sources":["webpack://./src/select_page_style/select_page_media.css"],"names":[],"mappings":"AACA;EAEI;IACI,YAAA;EADN;EAIE;IACI,eAAA;IACA,kBAAA;IACA,mBAAA;EAFN;EAKE;IACI,eAAA;IACA,cAAA;IACA,kBAAA;EAHN;EAME;IACI,cAAA;EAJN;EAOE;IACI,eAAA;IACA,iBAAA;IACA,kBAAA;EALN;EAQE;IACI,cAAA;EANN;EASE;IACI,aAAA;EAPN;EAUE;IAWI,qBAAA;IADA,0CAAA;IAEA,mCAAA;IAPA,wBAAA;IACA,cAAA;IAFA,eAAA;IADA,OAAA;IAKA,gBAAA;IAPA,kBAAA;IACA,QAAA;IAOA,kBAAA;IAFA,eAAA;EAHN;EAWE;IAEI,YAAA;IACA,UAAA;IACA,yBAAA;IACA,eAAA;IAJA,WAAA;EALN;EAYE;IACI,aAAA;EAVN;EAaE;IAEI,SAAA;IAEA,UAAA;IAHA,QAAA;IAIA,gBAAA;IAFA,QAAA;EATN;EAcE;IAEI,UAAA;IADA,WAAA;EAXN;EAeE;IAMI,0CAAA;IACA,mCAAA;IALA,sBAAA;IACA,cAAA;IAMA,OAAA;IACA,mBAAA;IALA,iBAAA;IADA,eAAA;IAHA,kBAAA;IAOA,QAAA;EAXN;EAgBE;IACI,uCAAA;IACA,4BAAA;EAdN;EAiBE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EAdN;EAkBE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EAfN;EAmBE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EAhBN;EAoBE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EAjBN;AACF;AAqBA;EAEI;IACI,YAAA;IACA,kBAAA;EApBN;EAuBE;IACI,aAAA;EArBN;EAwBE;IAGI,uBAAA;IAFA,eAAA;IACA,4BAAA;IAEA,kBAAA;EAtBN;EAyBE;IACI,aAAA;EAvBN;EA0BE;IAEI,uBAAA;IADA,eAAA;EAvBN;EA2BE;IACI,aAAA;EAzBN;EA4BE;IACI,aAAA;EA1BN;EA6BE;IACI,eAAA;EA3BN;EA8BE;IACI,cAAA;EA5BN;EA+BE;IACI,aAAA;EA7BN;EAgCE;IAWI,qBAAA;IADA,0CAAA;IAEA,mCAAA;IAPA,wBAAA;IACA,cAAA;IAFA,eAAA;IADA,OAAA;IAKA,gBAAA;IAPA,kBAAA;IACA,QAAA;IAOA,kBAAA;IAFA,eAAA;EAzBN;EAiCE;IAEI,YAAA;IACA,UAAA;IACA,yBAAA;IACA,eAAA;IAJA,WAAA;EA3BN;EAkCE;IACI,aAAA;EAhCN;EAmCE;IAEI,SAAA;IAEA,UAAA;IAHA,QAAA;IAIA,gBAAA;IAFA,QAAA;EA/BN;EAoCE;IAEI,UAAA;IADA,WAAA;EAjCN;EAqCE;IAMI,0CAAA;IACA,mCAAA;IALA,sBAAA;IACA,cAAA;IAMA,OAAA;IACA,mBAAA;IALA,iBAAA;IADA,eAAA;IAHA,kBAAA;IAOA,QAAA;EAjCN;EAsCE;IACI,uCAAA;IACA,4BAAA;EApCN;EAuCE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EApCN;EAwCE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EArCN;EAyCE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EAtCN;EA0CE;IACI,mDAAA;IAEA,4BAAA;IADA,sBAAA;EAvCN;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/select_page_style/select_page_style.css":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/select_page_style/select_page_style.css ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_select_page_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./select_page_main.css */ "./node_modules/css-loader/dist/cjs.js!./src/select_page_style/select_page_main.css");
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
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_select_page_main_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/select_page_style/select_page_main.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/select_page_style/select_page_main.css ***!
  \******************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_1.webp */ "./src/img/select/house_1.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_2.webp */ "./src/img/select/house_2.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_3.webp */ "./src/img/select/house_3.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/select/house_4.webp */ "./src/img/select/house_4.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.selectan-h2-btn {
    padding: 80px 20px;
    font-size: 22px;
    color: var(--dark-blue);
    display: flex;
}

.select-h2 {
    padding-bottom: 40px;
    font-size: 32px;
    font-family: 'saira', sans-serif;
    font-weight: 600;
}

.select-h2-text {
    margin-left: 180px;
    text-align: justify;
}

.select-btn {
    position: relative;
    min-height: 50px;
    min-width: 510px;
    background-color: var(--green);
    border-radius: var(--border-radius);
    transition: all 0.9s;
}

.block-menu {
    padding: 0;
    position: relative;
    list-style-type: none;
    margin: 80px 0 0 0;
    min-height: 100%;
    max-height: 100%;
}

.block-menu-link {
    position: relative;
    min-width: 100%;
    min-height: 150px;
    border-bottom: 1px solid var(--light-blue);
    box-sizing: border-box;
    display: block;
    z-index: 2;
}

.block-menu-link:hover {
    background-color: rgba(17, 59, 95, 0.6);
    transition: all 0.4s ease-in;
}

.block-menu-item:nth-child(1):hover ~ .block-menu-wall {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    transition: all 0.4s ease-in;
}

.block-menu-item:nth-child(2):hover ~ .block-menu-wall {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    transition: all 0.4s ease-in;
}

.block-menu-item:nth-child(3):hover ~ .block-menu-wall {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    transition: all 0.4s ease-in;
}

.block-menu-item:nth-child(4):hover ~ .block-menu-wall {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    transition: all 0.4s ease-in;
}

.block-menu-name {
    position: absolute;
    display: flex;
    align-items: center;
    min-height: 150px;
    left: 40px;
    text-transform: uppercase;
    font-size: 32px;
    color: var(--light-blue);
}

.block-menu li .arrow {
    position: absolute;
    right: 60px;
    top: 50px;
    height: 200px;
    width: 200px;
    opacity: 0;
    transition: all 0.9s ease-in;
}

.block-menu li .arrow svg {
    width: 50px;
    height: 50px;
    fill: none;
    stroke: var(--light-blue);
    stroke-width: 2;
}

.block-menu-item:hover .block-menu-name {
    left: 60px;
    margin-right: 60px;
    transition: all 0.9s ease-in;
}

.block-menu li:hover .arrow {
    right: 20px;
    opacity: 1;
}

.block-menu-wall {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    background-color: var(--dark-blue);
    background-size: cover;
    background-position: center center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    transition: all 0.4s ease-in;
}

.page_text_bottom {
    padding: 80px 20px 40px 20px;
    font-size: 22px;
    color: var(--dark-green);
    text-align: justify;
}
`, "",{"version":3,"sources":["webpack://./src/select_page_style/select_page_main.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,eAAe;IACf,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,8BAA8B;IAC9B,mCAAmC;IACnC,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,0CAA0C;IAC1C,sBAAsB;IACtB,cAAc;IACd,UAAU;AACd;;AAEA;IACI,uCAAuC;IACvC,4BAA4B;AAChC;;AAEA;IACI,yDAAmD;IACnD,4BAA4B;AAChC;;AAEA;IACI,yDAAmD;IACnD,4BAA4B;AAChC;;AAEA;IACI,yDAAmD;IACnD,4BAA4B;AAChC;;AAEA;IACI,yDAAmD;IACnD,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;IACV,yBAAyB;IACzB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,aAAa;IACb,YAAY;IACZ,UAAU;IACV,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,UAAU;IACV,kCAAkC;IAClC,sBAAsB;IACtB,kCAAkC;IAClC,yDAAmD;IACnD,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,wBAAwB;IACxB,mBAAmB;AACvB","sourcesContent":[".selectan-h2-btn {\r\n    padding: 80px 20px;\r\n    font-size: 22px;\r\n    color: var(--dark-blue);\r\n    display: flex;\r\n}\r\n\r\n.select-h2 {\r\n    padding-bottom: 40px;\r\n    font-size: 32px;\r\n    font-family: 'saira', sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.select-h2-text {\r\n    margin-left: 180px;\r\n    text-align: justify;\r\n}\r\n\r\n.select-btn {\r\n    position: relative;\r\n    min-height: 50px;\r\n    min-width: 510px;\r\n    background-color: var(--green);\r\n    border-radius: var(--border-radius);\r\n    transition: all 0.9s;\r\n}\r\n\r\n.block-menu {\r\n    padding: 0;\r\n    position: relative;\r\n    list-style-type: none;\r\n    margin: 80px 0 0 0;\r\n    min-height: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.block-menu-link {\r\n    position: relative;\r\n    min-width: 100%;\r\n    min-height: 150px;\r\n    border-bottom: 1px solid var(--light-blue);\r\n    box-sizing: border-box;\r\n    display: block;\r\n    z-index: 2;\r\n}\r\n\r\n.block-menu-link:hover {\r\n    background-color: rgba(17, 59, 95, 0.6);\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.block-menu-item:nth-child(1):hover ~ .block-menu-wall {\r\n    background-image: url('../img/select/house_1.webp');\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.block-menu-item:nth-child(2):hover ~ .block-menu-wall {\r\n    background-image: url('../img/select/house_2.webp');\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.block-menu-item:nth-child(3):hover ~ .block-menu-wall {\r\n    background-image: url('../img/select/house_3.webp');\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.block-menu-item:nth-child(4):hover ~ .block-menu-wall {\r\n    background-image: url('../img/select/house_4.webp');\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.block-menu-name {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 150px;\r\n    left: 40px;\r\n    text-transform: uppercase;\r\n    font-size: 32px;\r\n    color: var(--light-blue);\r\n}\r\n\r\n.block-menu li .arrow {\r\n    position: absolute;\r\n    right: 60px;\r\n    top: 50px;\r\n    height: 200px;\r\n    width: 200px;\r\n    opacity: 0;\r\n    transition: all 0.9s ease-in;\r\n}\r\n\r\n.block-menu li .arrow svg {\r\n    width: 50px;\r\n    height: 50px;\r\n    fill: none;\r\n    stroke: var(--light-blue);\r\n    stroke-width: 2;\r\n}\r\n\r\n.block-menu-item:hover .block-menu-name {\r\n    left: 60px;\r\n    margin-right: 60px;\r\n    transition: all 0.9s ease-in;\r\n}\r\n\r\n.block-menu li:hover .arrow {\r\n    right: 20px;\r\n    opacity: 1;\r\n}\r\n\r\n.block-menu-wall {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n    background-color: var(--dark-blue);\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-image: url('../img/select/house_1.webp');\r\n    transition: all 0.4s ease-in;\r\n}\r\n\r\n.page_text_bottom {\r\n    padding: 80px 20px 40px 20px;\r\n    font-size: 22px;\r\n    color: var(--dark-green);\r\n    text-align: justify;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/select_page_style/select_page_media.css":
/*!*****************************************************!*\
  !*** ./src/select_page_style/select_page_media.css ***!
  \*****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_media_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./select_page_media.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/select_page_style/select_page_media.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/select_page_style/select_page_style.css":
/*!*****************************************************!*\
  !*** ./src/select_page_style/select_page_style.css ***!
  \*****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./select_page_style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/select_page_style/select_page_style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_select_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/img/select/house_1.webp":
/*!*************************************!*\
  !*** ./src/img/select/house_1.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/house_1.webp";

/***/ }),

/***/ "./src/img/select/house_2.webp":
/*!*************************************!*\
  !*** ./src/img/select/house_2.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/house_2.webp";

/***/ }),

/***/ "./src/img/select/house_3.webp":
/*!*************************************!*\
  !*** ./src/img/select/house_3.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/house_3.webp";

/***/ }),

/***/ "./src/img/select/house_4.webp":
/*!*************************************!*\
  !*** ./src/img/select/house_4.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/house_4.webp";

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
/******/ 			"select_page_index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-ff8cde","src_js_main_page_fallMenu_js-src_js_main_page_feedback_js-src_js_main_page_preloader_js-node_-c82f4d","node_modules_css-loader_dist_cjs_js_src_style_blocks_page_hero_css-src_style_blocks_main_page-4c0ca3"], () => (__webpack_require__("./src/select_page.js/select_page_index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=select_page_index.bundle.js.map