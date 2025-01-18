/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page_preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_page_preloader.js */ "./src/js/main_page_preloader.js");
/* harmony import */ var _main_page_fallMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_page_fallMenu.js */ "./src/js/main_page_fallMenu.js");
/* harmony import */ var _main_page_animationLetters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main_page_animationLetters.js */ "./src/js/main_page_animationLetters.js");
/* harmony import */ var _main_page_feedback_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main_page_feedback.js */ "./src/js/main_page_feedback.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");





(0,_main_page_preloader_js__WEBPACK_IMPORTED_MODULE_0__.preloader)();
(0,_main_page_fallMenu_js__WEBPACK_IMPORTED_MODULE_1__.fallMenu)();
(0,_main_page_animationLetters_js__WEBPACK_IMPORTED_MODULE_2__.splitWords)();
(0,_main_page_feedback_js__WEBPACK_IMPORTED_MODULE_3__.feedback)();

/***/ }),

/***/ "./src/js/main_page_animationLetters.js":
/*!**********************************************!*\
  !*** ./src/js/main_page_animationLetters.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitWords: () => (/* binding */ splitWords)
/* harmony export */ });
var splitWords = function splitWords() {
  var title = document.querySelector('.letters');
  var text = title.textContent.replace(/(-|#|@){1}/g, function (findSymbolInStr) {
    findSymbolInStr[1] + findSymbolInStr[0];
  });
  title.innerHTML = text.replace(/(\S)/g, '<span class="letter">$&</span>');
  title.querySelectorAll('.letter').forEach(function (letter, i) {
    letter.style.zIndex = -i;
    letter.style.transitionDuration = "".concat(i / 10 + 1, "s");
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/style.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/style.css ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normolaiz_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normolaiz.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/normolaiz.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_main_page_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base/main_page_normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_globol_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./globol.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/globol.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_main_page_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base/main_page_global.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_global.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vars_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./vars.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/vars.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_main_page_vars_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base/main_page_vars.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_vars.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_main_page_header_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./blocks/main_page_header.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sektion_map_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./sektion-map.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/sektion-map.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/form.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_main_page_footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./blocks/main_page_footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_media_header_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./media/media-header.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_media_sektion_map_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./media/media-sektion-map.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-sektion-map.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_media_footer_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./media/media-footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_media_form_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./media/media-form.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-form.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_main_page_media_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./blocks/main_page_media.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_media.css");
// Imports




















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normolaiz_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_main_page_normalize_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_globol_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_main_page_global_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_vars_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_main_page_vars_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_main_page_header_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_sektion_map_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_main_page_footer_css__WEBPACK_IMPORTED_MODULE_14__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_media_media_header_css__WEBPACK_IMPORTED_MODULE_15__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_media_media_sektion_map_css__WEBPACK_IMPORTED_MODULE_16__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_media_media_footer_css__WEBPACK_IMPORTED_MODULE_17__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_media_media_form_css__WEBPACK_IMPORTED_MODULE_18__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_main_page_media_css__WEBPACK_IMPORTED_MODULE_19__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* @import url(../style/btns.css); */
/* @import "./base/fonts.css";
@import "./base/normalize.css";
@import "./base/vars.css";
@import "./base/global.css";
@import "./blocks/header.css";
@import "./blocks/promo.css";
@import "./blocks/apartments.css";

@import "./blocks/interior.css";
@import "./blocks/book.css";

@import "./blocks/advantages.css";
@import "blocks/interior_main.css";
@import "./blocks/book.css"; */`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAWA,oCAAA;AAaA;;;;;;;;;;;;;8BAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/fonts.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/fonts.css ***!
  \*******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Overpass-Regular.woff */ "./src/fonts/Overpass-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Overpass-Regular.woff2 */ "./src/fonts/Overpass-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Overpass-SemiBold.woff */ "./src/fonts/Overpass-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Overpass-SemiBold.woff2 */ "./src/fonts/Overpass-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Saira-Regular.woff */ "./src/fonts/Saira-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Saira-Regular.woff2 */ "./src/fonts/Saira-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Saira-Black.woff */ "./src/fonts/Saira-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Saira-Black.woff2 */ "./src/fonts/Saira-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
@font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    src: local(""),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
}

@font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 600;
    src: local(""),
    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
}

@font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 400;
    src: local(""),
    url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff2");
}

@font-face {
    font-family: 'Saira';
    font-style: normal;
    font-weight: 900;
    src: local(""),
    url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff2");
}`, "",{"version":3,"sources":["webpack://./src/style/fonts.css"],"names":[],"mappings":";AACA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEsD;AAC1D;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEuD;AAC3D;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEmD;AACvD;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEiD;AACrD","sourcesContent":["\r\n@font-face {\r\n    font-family: 'Overpass';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local(\"\"),\r\n    url(\"../fonts/Overpass-Regular.woff\") format(\"woff\"),\r\n    url(\"../fonts/Overpass-Regular.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Overpass';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local(\"\"),\r\n    url(\"../fonts/Overpass-SemiBold.woff\") format(\"woff\"),\r\n    url(\"../fonts/Overpass-SemiBold.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Saira';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local(\"\"),\r\n    url(\"../fonts/Saira-Regular.woff\") format(\"woff\"),\r\n    url(\"../fonts/Saira-Regular.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Saira';\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    src: local(\"\"),\r\n    url(\"../fonts/Saira-Black.woff\") format(\"woff\"),\r\n    url(\"../fonts/Saira-Black.woff2\") format(\"woff2\");\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/footer.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/footer.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `
.wrapper-footer {
    max-width: 1140px;
    margin-top: 640px;
    height: 345px;
    margin-inline: auto;
    margin-bottom: 65px;
    border: 1px solid var(--green);
}

.wrapper-contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--green);
}

.addres-footer {
    max-width: 420px;
    max-height: 155px;
    font-style: normal;
    text-align: center;
    font-size: 20px;
    color: var(--green);
}

.btn-footer {
    position: relative;
    min-width: 315px;
    min-height: 155px;
    color: var(--green);
    border-radius: 0;
    text-align: center;
    font-size: 20px;
    transition: 0.9s;
}

.btn-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: 0.6s;
}

.btn-footer:hover::before {
    opacity: 0;
    transform: scale(0.6, 0.6);
}

.btn-footer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: 0.6s;
    border: 1px solid var(--green);
    transform: scale(1.2, 1.2);
}

.btn-footer:active {
    background-color: var(--green);
    color: var(--light-blue);
}

.btn-footer:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}

.footer-link-telephone {
    text-align: center;
    width: 311px;
    font-weight: 600;
    font-size: 20px;
    color: var(--green);
}

/* .footer-link-telephone:hover {
    color: var(--white);
    transition-duration: 0.5s;
} */

.title-footer {
    text-transform: uppercase;
    display: block;
    text-align: center;
    font-family: 'Saira', sans-serif;
    font-weight: 900;
    font-size: 128px;
    letter-spacing: 10px;
    color: var(--green);
}`, "",{"version":3,"sources":["webpack://./src/style/footer.css"],"names":[],"mappings":";AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;IACV,UAAU;IACV,gBAAgB;IAChB,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,8BAA8B;IAC9B,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,mBAAmB;AACvB;;AAEA;;;GAGG;;AAEH;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;AACvB","sourcesContent":["\r\n.wrapper-footer {\r\n    max-width: 1140px;\r\n    margin-top: 640px;\r\n    height: 345px;\r\n    margin-inline: auto;\r\n    margin-bottom: 65px;\r\n    border: 1px solid var(--green);\r\n}\r\n\r\n.wrapper-contact {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid var(--green);\r\n}\r\n\r\n.addres-footer {\r\n    max-width: 420px;\r\n    max-height: 155px;\r\n    font-style: normal;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color: var(--green);\r\n}\r\n\r\n.btn-footer {\r\n    position: relative;\r\n    min-width: 315px;\r\n    min-height: 155px;\r\n    color: var(--green);\r\n    border-radius: 0;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    transition: 0.9s;\r\n}\r\n\r\n.btn-footer::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    transition: 0.6s;\r\n}\r\n\r\n.btn-footer:hover::before {\r\n    opacity: 0;\r\n    transform: scale(0.6, 0.6);\r\n}\r\n\r\n.btn-footer::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: 0.6s;\r\n    border: 1px solid var(--green);\r\n    transform: scale(1.2, 1.2);\r\n}\r\n\r\n.btn-footer:active {\r\n    background-color: var(--green);\r\n    color: var(--light-blue);\r\n}\r\n\r\n.btn-footer:hover::after {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n}\r\n\r\n.footer-link-telephone {\r\n    text-align: center;\r\n    width: 311px;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    color: var(--green);\r\n}\r\n\r\n/* .footer-link-telephone:hover {\r\n    color: var(--white);\r\n    transition-duration: 0.5s;\r\n} */\r\n\r\n.title-footer {\r\n    text-transform: uppercase;\r\n    display: block;\r\n    text-align: center;\r\n    font-family: 'Saira', sans-serif;\r\n    font-weight: 900;\r\n    font-size: 128px;\r\n    letter-spacing: 10px;\r\n    color: var(--green);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/form.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/form.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `
.wrapper-connection {
        display: none;
        width: 700px;
        height: 360px;
        border-radius: 10px;
        padding-top: 78px;
        position: fixed;
        z-index: 3;
        top: 30%;
        left: 25%;
        background-color: rgba(255, 255, 255, 0.6);
}

.openForm {
    display: block;
}

.img-connection {
    position: absolute;
    bottom: 302px;
    border-radius: 10px;
    left: 37%;
}

.btn-close {
    position: absolute;
    left: 654px;
    bottom: 311px;
}

.wrapper-form {
    margin: 0 auto;
    width: 467px;
    height: 196px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    align-content: center;
}

.text-form {
    font-family: 'Saira';
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    letter-spacing: normal;
    width: 467px;
    line-height: 30px;
    color: #114B5F;
}

.form {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 20px;
}

.wrapper-input {
    display: flex;
    gap: 10px;
    margin-top: 35px;
}

.input {
    outline: none;
}

.input:focus::placeholder {
    color: transparent;
  }

.input {
    width: 200px;
    height: 40px;
    padding-left: 14px;
    border-color: #E67B6B;
    border-radius: 10px;
}

.btn-form {
    width: 214px;
    height: 40px;
    border-radius: 10px;
    font-family: 'Saira';
    font-weight: 400;
    font-size: 20px;
    line-height: auto;
    color: #CFE4E6;
    background-color: #F45B69;
}


.message {
    margin-top: 60px;
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style/form.css"],"names":[],"mappings":";AACA;QACQ,aAAa;QACb,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,iBAAiB;QACjB,eAAe;QACf,UAAU;QACV,QAAQ;QACR,SAAS;QACT,0CAA0C;AAClD;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,4BAA4B;IAC5B,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;EACpB;;AAEF;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,yBAAyB;AAC7B;;;AAGA;IACI,gBAAgB;IAChB,aAAa;AACjB","sourcesContent":["\r\n.wrapper-connection {\r\n        display: none;\r\n        width: 700px;\r\n        height: 360px;\r\n        border-radius: 10px;\r\n        padding-top: 78px;\r\n        position: fixed;\r\n        z-index: 3;\r\n        top: 30%;\r\n        left: 25%;\r\n        background-color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.openForm {\r\n    display: block;\r\n}\r\n\r\n.img-connection {\r\n    position: absolute;\r\n    bottom: 302px;\r\n    border-radius: 10px;\r\n    left: 37%;\r\n}\r\n\r\n.btn-close {\r\n    position: absolute;\r\n    left: 654px;\r\n    bottom: 311px;\r\n}\r\n\r\n.wrapper-form {\r\n    margin: 0 auto;\r\n    width: 467px;\r\n    height: 196px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: space-between;\r\n    align-content: center;\r\n}\r\n\r\n.text-form {\r\n    font-family: 'Saira';\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    text-align: left;\r\n    letter-spacing: normal;\r\n    width: 467px;\r\n    line-height: 30px;\r\n    color: #114B5F;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 50px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.wrapper-input {\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-top: 35px;\r\n}\r\n\r\n.input {\r\n    outline: none;\r\n}\r\n\r\n.input:focus::placeholder {\r\n    color: transparent;\r\n  }\r\n\r\n.input {\r\n    width: 200px;\r\n    height: 40px;\r\n    padding-left: 14px;\r\n    border-color: #E67B6B;\r\n    border-radius: 10px;\r\n}\r\n\r\n.btn-form {\r\n    width: 214px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    font-family: 'Saira';\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: auto;\r\n    color: #CFE4E6;\r\n    background-color: #F45B69;\r\n}\r\n\r\n\r\n.message {\r\n    margin-top: 60px;\r\n    display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/globol.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/globol.css ***!
  \********************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/main-bg/body.webp */ "./src/img/main-bg/body.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    box-sizing: border-box;
}
*,
*::before,
::after {
    box-sizing: border-box;
}
p,h1,h2,h3,h4,h5,h6 {
    margin: 0;
}
a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
    word-break: normal;
    object-fit: cover;
}


/* global */

.list-reset {
    margin: 0;
    padding: 0;
    list-style: none;
}
.btn-reset {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

img {
    display: block;
    max-width: 100%;
}

input,
textarea,
select,
button {
    font: inherit;
}

html {
    height: 100%;
    scroll-behavior: smooth;
}


body {
    margin: 0;
    min-height: 100vh;
    line-height: 1.5;
    scroll-behavior: smooth;
    touch-action: none;
    font-size: 16px;
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
    background-color: var(--color-light-blue);
}
  
  
  .dp-fl {
    display: flex;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 40px;
    margin: 0 40px;
  }
  
  .section-parameters {
    max-width: 1140px;
    margin: 0 auto;
  
  }
  
  .bg {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
  


`, "",{"version":3,"sources":["webpack://./src/style/globol.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;;;IAGI,sBAAsB;AAC1B;AACA;IACI,SAAS;AACb;AACA;IACI,qBAAqB;IACrB,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA,WAAW;;AAEX;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,YAAY;IACZ,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;IAII,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;;AAGA;IACI,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,mCAAmC;IACnC,gBAAgB;IAChB,yCAAyC;AAC7C;;;EAGE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sCAAsC;IACtC,SAAS;IACT,cAAc;EAChB;;EAEA;IACE,iBAAiB;IACjB,cAAc;;EAEhB;;EAEA;IACE,yDAAiD;IACjD,4BAA4B;IAC5B,sBAAsB;IACtB,YAAY;EACd","sourcesContent":["html {\r\n    box-sizing: border-box;\r\n}\r\n*,\r\n*::before,\r\n::after {\r\n    box-sizing: border-box;\r\n}\r\np,h1,h2,h3,h4,h5,h6 {\r\n    margin: 0;\r\n}\r\na {\r\n    display: inline-block;\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    word-break: normal;\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n/* global */\r\n\r\n.list-reset {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n.btn-reset {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect,\r\nbutton {\r\n    font: inherit;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    min-height: 100vh;\r\n    line-height: 1.5;\r\n    scroll-behavior: smooth;\r\n    touch-action: none;\r\n    font-size: 16px;\r\n    font-family: 'Overpass', sans-serif;\r\n    font-weight: 400;\r\n    background-color: var(--color-light-blue);\r\n}\r\n  \r\n  \r\n  .dp-fl {\r\n    display: flex;\r\n  }\r\n  \r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(12, 1fr);\r\n    gap: 40px;\r\n    margin: 0 40px;\r\n  }\r\n  \r\n  .section-parameters {\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n  \r\n  }\r\n  \r\n  .bg {\r\n    background-image: url(\"../img/main-bg/body.webp\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n  }\r\n  \r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/header.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/header.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.header {
    position: fixed;
    left: 0;
    right: 0;
    min-height: 150px;
    padding-top: 75px;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(var(--color-light-green), rgba(0, 0, 0, 0));
    z-index: 10;
}

.header-container {
    z-index:3;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(var(--green), rgba(0, 0, 0, 0));
    padding: 25px 55px 0 55px;
    position: fixed;
    inset: 0 0 auto;
    min-height: 150px;
}

.nav-container {
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;
}
.header__menu {
    position: relative;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
}

.hamburger {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.bar {
    display: block;
    width: 18px;
    height: 2px;
    background-color: var(--light-blue);
    border-radius: var(--border-radius);
}

.bar:nth-child(2) {
    transform: translateX(5px);
}

.popup-fade::before {
    content: "";
    background: #000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .8;
    z-index:1;
}

.popup {
    position: fixed;
    display: flex;
    top: 0;
    width: 0;
    transition: left .5s ease, width 1s ease;
    z-index: 7;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--light-blue);
}

.popup__menu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px 20px 0;
    margin-left: 70px;
    text-align: left;
    width: 35%;
    min-width: 450px;
    line-height: 1.15;
}

.title-menu {
    margin-top: 64px;
}

.title-menu span {
    font-family: "Saira", sans-serif;
    display: block;
    line-height: 1;
    font-style: italic;
    font-weight: 800;
    font-size: 48px;
    text-transform: uppercase;
    color: var(--white);
}

.title-menu span:nth-child(2) {
    margin-left: 80px;
}

.nav {
    margin-top: 40px;
}

.header__list {
    display: flex;
    flex-direction: column;
}

.header__list-item a {
    font-family: "Overpass", sans-serif;
    display: block;
    font-weight: 400;
    font-size: 40px;
    text-transform: uppercase;
    color: var(--blue);
    transition: var(--transition-duration);
    padding-top: 40px;
}

.header__list-item a:hover {
    color: var(--pink);
}

.menu-close {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 400px;
    top: 15px;
    width: 100px;
    aspect-ratio: 1;
    border: 1px solid var(--blue);
    border-radius: 100%;
    cursor: pointer;
}

.menu-close span {
    display: inline-block;
    width: 50px;
    height: 3px;
    background-color: var(--blue);
}

.menu-close span:nth-child(1) {
    transform: rotate(45deg) translate(2px);
}

.menu-close span:nth-child(2) {
    transform: rotate(-45deg) translate(2px);
}

.menu-close:hover span {
    background-color: var(--pink);
    transition: var(--transition-duration);
}

.menu-close:hover {
    border-color: var(--pink);
    transition: var(--transition-duration);
}

.image-container.show {
    display: flex;
    width: 100%;
    height: 100%;
    transition: right .4s ease, width 1s ease;
}

.popup__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.open {
    left: 0;
    width: 60%;
    transition: right .4s ease, width 1s ease;
    height: 100%;
}

.text {
    font-size: 16px;
    color: var(--blue);
}

.z0 {
    z-index: 0;
}



`, "",{"version":3,"sources":["webpack://./src/style/header.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,iBAAiB;IACjB,kCAAkC;IAClC,6EAA6E;IAC7E,WAAW;AACf;;AAEA;IACI,SAAS;IACT,kCAAkC;IAClC,iEAAiE;IACjE,yBAAyB;IACzB,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,WAAW;IACX,mCAAmC;IACnC,mCAAmC;AACvC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;AACb;;AAEA;IACI,eAAe;IACf,aAAa;IACb,MAAM;IACN,QAAQ;IACR,wCAAwC;IACxC,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;IACV,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,OAAO;IACP,UAAU;IACV,yCAAyC;IACzC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd","sourcesContent":[".header {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    min-height: 150px;\r\n    padding-top: 75px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    background-image: linear-gradient(var(--color-light-green), rgba(0, 0, 0, 0));\r\n    z-index: 10;\r\n}\r\n\r\n.header-container {\r\n    z-index:3;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    background-image: linear-gradient(var(--green), rgba(0, 0, 0, 0));\r\n    padding: 25px 55px 0 55px;\r\n    position: fixed;\r\n    inset: 0 0 auto;\r\n    min-height: 150px;\r\n}\r\n\r\n.nav-container {\r\n    justify-content: space-between;\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n}\r\n.header__menu {\r\n    position: relative;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.hamburger {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 4px;\r\n}\r\n\r\n.bar {\r\n    display: block;\r\n    width: 18px;\r\n    height: 2px;\r\n    background-color: var(--light-blue);\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.bar:nth-child(2) {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.popup-fade::before {\r\n    content: \"\";\r\n    background: #000;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: .8;\r\n    z-index:1;\r\n}\r\n\r\n.popup {\r\n    position: fixed;\r\n    display: flex;\r\n    top: 0;\r\n    width: 0;\r\n    transition: left .5s ease, width 1s ease;\r\n    z-index: 7;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    background-color: var(--light-blue);\r\n}\r\n\r\n.popup__menu-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 0 15px 20px 0;\r\n    margin-left: 70px;\r\n    text-align: left;\r\n    width: 35%;\r\n    min-width: 450px;\r\n    line-height: 1.15;\r\n}\r\n\r\n.title-menu {\r\n    margin-top: 64px;\r\n}\r\n\r\n.title-menu span {\r\n    font-family: \"Saira\", sans-serif;\r\n    display: block;\r\n    line-height: 1;\r\n    font-style: italic;\r\n    font-weight: 800;\r\n    font-size: 48px;\r\n    text-transform: uppercase;\r\n    color: var(--white);\r\n}\r\n\r\n.title-menu span:nth-child(2) {\r\n    margin-left: 80px;\r\n}\r\n\r\n.nav {\r\n    margin-top: 40px;\r\n}\r\n\r\n.header__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header__list-item a {\r\n    font-family: \"Overpass\", sans-serif;\r\n    display: block;\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    text-transform: uppercase;\r\n    color: var(--blue);\r\n    transition: var(--transition-duration);\r\n    padding-top: 40px;\r\n}\r\n\r\n.header__list-item a:hover {\r\n    color: var(--pink);\r\n}\r\n\r\n.menu-close {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    left: 400px;\r\n    top: 15px;\r\n    width: 100px;\r\n    aspect-ratio: 1;\r\n    border: 1px solid var(--blue);\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-close span {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 3px;\r\n    background-color: var(--blue);\r\n}\r\n\r\n.menu-close span:nth-child(1) {\r\n    transform: rotate(45deg) translate(2px);\r\n}\r\n\r\n.menu-close span:nth-child(2) {\r\n    transform: rotate(-45deg) translate(2px);\r\n}\r\n\r\n.menu-close:hover span {\r\n    background-color: var(--pink);\r\n    transition: var(--transition-duration);\r\n}\r\n\r\n.menu-close:hover {\r\n    border-color: var(--pink);\r\n    transition: var(--transition-duration);\r\n}\r\n\r\n.image-container.show {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: right .4s ease, width 1s ease;\r\n}\r\n\r\n.popup__img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.open {\r\n    left: 0;\r\n    width: 60%;\r\n    transition: right .4s ease, width 1s ease;\r\n    height: 100%;\r\n}\r\n\r\n.text {\r\n    font-size: 16px;\r\n    color: var(--blue);\r\n}\r\n\r\n.z0 {\r\n    z-index: 0;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-footer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/media/media-footer.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1140px) {
    .wrapper-footer {
        max-width: 940px;
    }

    .addres-footer {
        max-width: 330px;
    }

    .title-footer {
        font-size: 110px;
    }
}

@media (max-width: 940px) {
    .wrapper-footer {
        max-width: 830px;
    }

    .addres-footer {
        max-width: 230px;
    }

    .title-footer {
        font-size: 85px;
        display: flex;
        justify-content: center
    }
}

@media (max-width: 840px) {
    .wrapper-footer {
        max-width: 680px;
    }

    .addres-footer {
        max-width: 195px;
        font-size: 18px;
    }


    .title-footer {
        font-size: 70px;
        display: flex;
        justify-content: center;
    }

}

@media (max-width: 690px) {
    .wrapper-contact {
        flex-direction: column-reverse;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 13px;
        border: none;
    }

    .wrapper-footer {
        max-height: 510px;
        max-width: 370px;
    }

    .btn-footer {
        min-height: 25px;
    }

    .link-telephone {
        font-size: 18px;
    }

    .addres-footer {
        font-size: 18px;
        max-width: 315px;
    }

    .title-footer {
        margin-top: 23px;
        font-size: 38px;
        padding: 0 50px;
        max-width: 390px;
    }
}

@media (max-width: 400px) {
    .wrapper-footer {
        max-height: 510px;
        max-width: 310px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/media/media-footer.css"],"names":[],"mappings":"AAAA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,aAAa;QACb;IACJ;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,eAAe;IACnB;;;IAGA;QACI,eAAe;QACf,aAAa;QACb,uBAAuB;IAC3B;;AAEJ;;AAEA;IACI;QACI,8BAA8B;QAC9B,eAAe;QACf,SAAS;QACT,gBAAgB;QAChB,YAAY;IAChB;;IAEA;QACI,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,eAAe;QACf,eAAe;QACf,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,iBAAiB;QACjB,gBAAgB;IACpB;AACJ","sourcesContent":["@media (max-width: 1140px) {\r\n    .wrapper-footer {\r\n        max-width: 940px;\r\n    }\r\n\r\n    .addres-footer {\r\n        max-width: 330px;\r\n    }\r\n\r\n    .title-footer {\r\n        font-size: 110px;\r\n    }\r\n}\r\n\r\n@media (max-width: 940px) {\r\n    .wrapper-footer {\r\n        max-width: 830px;\r\n    }\r\n\r\n    .addres-footer {\r\n        max-width: 230px;\r\n    }\r\n\r\n    .title-footer {\r\n        font-size: 85px;\r\n        display: flex;\r\n        justify-content: center\r\n    }\r\n}\r\n\r\n@media (max-width: 840px) {\r\n    .wrapper-footer {\r\n        max-width: 680px;\r\n    }\r\n\r\n    .addres-footer {\r\n        max-width: 195px;\r\n        font-size: 18px;\r\n    }\r\n\r\n\r\n    .title-footer {\r\n        font-size: 70px;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 690px) {\r\n    .wrapper-contact {\r\n        flex-direction: column-reverse;\r\n        flex-wrap: wrap;\r\n        gap: 10px;\r\n        margin-top: 13px;\r\n        border: none;\r\n    }\r\n\r\n    .wrapper-footer {\r\n        max-height: 510px;\r\n        max-width: 370px;\r\n    }\r\n\r\n    .btn-footer {\r\n        min-height: 25px;\r\n    }\r\n\r\n    .link-telephone {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .addres-footer {\r\n        font-size: 18px;\r\n        max-width: 315px;\r\n    }\r\n\r\n    .title-footer {\r\n        margin-top: 23px;\r\n        font-size: 38px;\r\n        padding: 0 50px;\r\n        max-width: 390px;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .wrapper-footer {\r\n        max-height: 510px;\r\n        max-width: 310px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-form.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/media/media-form.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1000px) {
    .wrapper-connection {
        margin: 0 auto;
        max-width: 360px;
        height: 450px;
    }

    .btn-close {
        left: 310px;
        bottom: 395px;
    }

    .img-connection {    
        width: 130px;
        left: 32%;
    }

    .wrapper-input {
        display: flex;
         gap: 10px;
        flex-direction: column;
    }

    .wrapper-form {
        max-width: 300px;
        margin-top: 92px;
    }

    .form {
        max-width: 300px;
        margin-top: 50px;
    }

    .text-form {
        max-width: 300px;
        text-align: center;
        font-size: 19px;

    }
    .wrapper-input {
        max-width: 300px;
        display: flex;
        margin: 0 auto;
    }

    .input {
        width: 300px;
    }

    .btn-form {
        width: 300px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style/media/media-form.css"],"names":[],"mappings":"AAAA;IACI;QACI,cAAc;QACd,gBAAgB;QAChB,aAAa;IACjB;;IAEA;QACI,WAAW;QACX,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,SAAS;IACb;;IAEA;QACI,aAAa;SACZ,SAAS;QACV,sBAAsB;IAC1B;;IAEA;QACI,gBAAgB;QAChB,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,kBAAkB;QAClB,eAAe;;IAEnB;IACA;QACI,gBAAgB;QAChB,aAAa;QACb,cAAc;IAClB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;AACJ","sourcesContent":["@media (max-width: 1000px) {\r\n    .wrapper-connection {\r\n        margin: 0 auto;\r\n        max-width: 360px;\r\n        height: 450px;\r\n    }\r\n\r\n    .btn-close {\r\n        left: 310px;\r\n        bottom: 395px;\r\n    }\r\n\r\n    .img-connection {    \r\n        width: 130px;\r\n        left: 32%;\r\n    }\r\n\r\n    .wrapper-input {\r\n        display: flex;\r\n         gap: 10px;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .wrapper-form {\r\n        max-width: 300px;\r\n        margin-top: 92px;\r\n    }\r\n\r\n    .form {\r\n        max-width: 300px;\r\n        margin-top: 50px;\r\n    }\r\n\r\n    .text-form {\r\n        max-width: 300px;\r\n        text-align: center;\r\n        font-size: 19px;\r\n\r\n    }\r\n    .wrapper-input {\r\n        max-width: 300px;\r\n        display: flex;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .input {\r\n        width: 300px;\r\n    }\r\n\r\n    .btn-form {\r\n        width: 300px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/media/media-header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1300px) {
    .open {
        width: 65%;
    }
}

@media (max-width: 1280px) {
    .open {
        width: 70%;
    }
}

@media (max-width: 1200px) {
    .open {
        width: 75%;
    }
}

@media (max-width: 1050px) {
    .open {
        width: 80%;
    }
}


@media (max-width: 1100px) {
    .open {
        width: 85%;
    }
}

@media (max-width: 780px) {

    .header-container {
        min-height: 350px
    }

    .nav-container  {
        display: flex;
    flex-direction: column;
    align-items: center;
 
    }

    .btn-menu {
        height: 40px;
        position: absolute;
        top: 124px;
    }

    .btn-select {
        position: relative;
        top: 60px;
    }

    .section-map {
        padding-top: 280px;
    }

    .open {
        width: 100%;
    }

    .popup__menu-wrapper {
        min-width: 100%;
    }

    .menu-close {
        left: 640px;
    }

}

@media (max-width: 760px) {
    .menu-close {
        left: 600px;
    }
}

@media (max-width: 705px) {
    .menu-close {
        left: 540px;
    }
}

@media (max-width: 650px) {
    .menu-close {
        left: 500px;
    }
}

@media (max-width: 605px) {
    .menu-close {
        left: 440px;
    }

    .text {
        max-width: 390px;
    }
}

@media (max-width: 545px) {
    .menu-close {
        left: 390px;
    }
}

@media (max-width: 500px) {
    .menu-close {
        left: 340px;
    }
}

@media (max-width: 445px) {
    .menu-close {
        left: 290px;
    }
}

@media (max-width: 395px) {
    .menu-close {
        left: 240px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/media/media-header.css"],"names":[],"mappings":"AAAA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;;AAGA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;;IAEI;QACI;IACJ;;IAEA;QACI,aAAa;IACjB,sBAAsB;IACtB,mBAAmB;;IAEnB;;IAEA;QACI,YAAY;QACZ,kBAAkB;QAClB,UAAU;IACd;;IAEA;QACI,kBAAkB;QAClB,SAAS;IACb;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,WAAW;IACf;;AAEJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,WAAW;IACf;;IAEA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ","sourcesContent":["@media (max-width: 1300px) {\r\n    .open {\r\n        width: 65%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1280px) {\r\n    .open {\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .open {\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n    .open {\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 1100px) {\r\n    .open {\r\n        width: 85%;\r\n    }\r\n}\r\n\r\n@media (max-width: 780px) {\r\n\r\n    .header-container {\r\n        min-height: 350px\r\n    }\r\n\r\n    .nav-container  {\r\n        display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n \r\n    }\r\n\r\n    .btn-menu {\r\n        height: 40px;\r\n        position: absolute;\r\n        top: 124px;\r\n    }\r\n\r\n    .btn-select {\r\n        position: relative;\r\n        top: 60px;\r\n    }\r\n\r\n    .section-map {\r\n        padding-top: 280px;\r\n    }\r\n\r\n    .open {\r\n        width: 100%;\r\n    }\r\n\r\n    .popup__menu-wrapper {\r\n        min-width: 100%;\r\n    }\r\n\r\n    .menu-close {\r\n        left: 640px;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 760px) {\r\n    .menu-close {\r\n        left: 600px;\r\n    }\r\n}\r\n\r\n@media (max-width: 705px) {\r\n    .menu-close {\r\n        left: 540px;\r\n    }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n    .menu-close {\r\n        left: 500px;\r\n    }\r\n}\r\n\r\n@media (max-width: 605px) {\r\n    .menu-close {\r\n        left: 440px;\r\n    }\r\n\r\n    .text {\r\n        max-width: 390px;\r\n    }\r\n}\r\n\r\n@media (max-width: 545px) {\r\n    .menu-close {\r\n        left: 390px;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .menu-close {\r\n        left: 340px;\r\n    }\r\n}\r\n\r\n@media (max-width: 445px) {\r\n    .menu-close {\r\n        left: 290px;\r\n    }\r\n}\r\n\r\n@media (max-width: 395px) {\r\n    .menu-close {\r\n        left: 240px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/media/media-sektion-map.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/media/media-sektion-map.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1140px) {
    .section-map {
        max-width: 940px;
    }

    .link-map {
        max-width: 700px;
        font-size: 100px;
        margin: 170px 0 130px 0;
    }

    .wrapper-map {
        display: flex;
        justify-content: space-evenly;
        padding-left: 65px;
    }

    .map {
        width: 460px;
        height: 300px;
    }
}

@media (max-width: 940px) {
    .section-map {
        max-width: 780px;
    }
    
    .link-map  {
        font-size: 70px;
        margin: 150px 0 100px 0;
    }

    .wrapper-map {
        padding-left: 0px;
    }

    .map {
        width: 320px;
        height: 320px;
    }
}

@media (max-width: 780px) {
    .section-map {
        max-width: 580px;
        display: flex;
        flex-direction: column;
        padding-top: 295px;
    }

    .link-map  {
        padding: 30px;
        width: 5px;
        word-wrap: break-word;
        font-size: 25px;
        margin: 35px 0 0 30px;
    }

    .wrapper-map {
        max-width: 360px;
        margin: 0 auto;
        padding-left: 0px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        font-size: 23px;
    }
}

@media (max-width: 580px) {

    .wrapper-address {
        max-width: 200px;
        display: flex;
        align-items: center;
    }

    .text-map {
        max-width: 200px;
    }

    .addres-map {
        max-width: 200px;
    }

    .map {
        width: 250px;
        height: 250px;
    }

    .wrapper-map {
        max-width: 250px;
        margin: 0 auto;
        padding-left: 0px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        font-size: 23px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/media/media-sektion-map.css"],"names":[],"mappings":"AAAA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,gBAAgB;QAChB,uBAAuB;IAC3B;;IAEA;QACI,aAAa;QACb,6BAA6B;QAC7B,kBAAkB;IACtB;;IAEA;QACI,YAAY;QACZ,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,uBAAuB;IAC3B;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,YAAY;QACZ,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,gBAAgB;QAChB,aAAa;QACb,sBAAsB;QACtB,kBAAkB;IACtB;;IAEA;QACI,aAAa;QACb,UAAU;QACV,qBAAqB;QACrB,eAAe;QACf,qBAAqB;IACzB;;IAEA;QACI,gBAAgB;QAChB,cAAc;QACd,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,SAAS;QACT,eAAe;IACnB;AACJ;;AAEA;;IAEI;QACI,gBAAgB;QAChB,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,cAAc;QACd,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,SAAS;QACT,eAAe;IACnB;AACJ","sourcesContent":["@media (max-width: 1140px) {\r\n    .section-map {\r\n        max-width: 940px;\r\n    }\r\n\r\n    .link-map {\r\n        max-width: 700px;\r\n        font-size: 100px;\r\n        margin: 170px 0 130px 0;\r\n    }\r\n\r\n    .wrapper-map {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        padding-left: 65px;\r\n    }\r\n\r\n    .map {\r\n        width: 460px;\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n@media (max-width: 940px) {\r\n    .section-map {\r\n        max-width: 780px;\r\n    }\r\n    \r\n    .link-map  {\r\n        font-size: 70px;\r\n        margin: 150px 0 100px 0;\r\n    }\r\n\r\n    .wrapper-map {\r\n        padding-left: 0px;\r\n    }\r\n\r\n    .map {\r\n        width: 320px;\r\n        height: 320px;\r\n    }\r\n}\r\n\r\n@media (max-width: 780px) {\r\n    .section-map {\r\n        max-width: 580px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding-top: 295px;\r\n    }\r\n\r\n    .link-map  {\r\n        padding: 30px;\r\n        width: 5px;\r\n        word-wrap: break-word;\r\n        font-size: 25px;\r\n        margin: 35px 0 0 30px;\r\n    }\r\n\r\n    .wrapper-map {\r\n        max-width: 360px;\r\n        margin: 0 auto;\r\n        padding-left: 0px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 50px;\r\n        font-size: 23px;\r\n    }\r\n}\r\n\r\n@media (max-width: 580px) {\r\n\r\n    .wrapper-address {\r\n        max-width: 200px;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .text-map {\r\n        max-width: 200px;\r\n    }\r\n\r\n    .addres-map {\r\n        max-width: 200px;\r\n    }\r\n\r\n    .map {\r\n        width: 250px;\r\n        height: 250px;\r\n    }\r\n\r\n    .wrapper-map {\r\n        max-width: 250px;\r\n        margin: 0 auto;\r\n        padding-left: 0px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 50px;\r\n        font-size: 23px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/normolaiz.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/normolaiz.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
  }
  
  /**
   * Render the \`main\` element consistently in IE.
   */
  
  main {
    display: block;
  }
  
  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }`, "",{"version":3,"sources":["webpack://./src/style/normolaiz.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\r\n  \r\n  /* Sections\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  \r\n  main {\r\n    display: block;\r\n  }\r\n  \r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  \r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  \r\n  /* Grouping content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\n  hr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  pre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  \r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  \r\n  abbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  \r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* Embedded content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  \r\n  img {\r\n    border-style: none;\r\n  }\r\n  \r\n  /* Forms\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  \r\n  button,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  \r\n  button,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\r\n  \r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  \r\n  button,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  \r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  \r\n  button:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  \r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  \r\n  legend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  \r\n  [type=\"checkbox\"],\r\n  [type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  \r\n  [type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  \r\n  [type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  \r\n  [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\r\n  \r\n  /* Interactive\r\n     ========================================================================== */\r\n  \r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  \r\n  details {\r\n    display: block;\r\n  }\r\n  \r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  \r\n  summary {\r\n    display: list-item;\r\n  }\r\n  \r\n  /* Misc\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  \r\n  [hidden] {\r\n    display: none;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/sektion-map.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/sektion-map.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `
.section-map {
    position: relative;
    max-width: 1140px;
    padding-top: 85px;
    margin-inline: auto;
    text-align: center;
}

.link-map {
    height: 125px;
    font-weight: 400;
    font-size: 128px;
    margin: 170px 0 170px 0;
    color: #028090;
}

.wrapper-map {
    padding-left: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wrapper-address {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
}

.text-map {
    width: 249px;
    font-weight: 600;
    font-size: 22px;
    color: var(--green);
    
}

.addres-map {
    line-height: 30px;
    width: 249px;
    font-weight: 600;
    font-size: 22px;
    font-style: normal;
    color: var(--green);
}
`, "",{"version":3,"sources":["webpack://./src/style/sektion-map.css"],"names":[],"mappings":";AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,mBAAmB;;AAEvB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["\r\n.section-map {\r\n    position: relative;\r\n    max-width: 1140px;\r\n    padding-top: 85px;\r\n    margin-inline: auto;\r\n    text-align: center;\r\n}\r\n\r\n.link-map {\r\n    height: 125px;\r\n    font-weight: 400;\r\n    font-size: 128px;\r\n    margin: 170px 0 170px 0;\r\n    color: #028090;\r\n}\r\n\r\n.wrapper-map {\r\n    padding-left: 130px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.wrapper-address {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 60px;\r\n}\r\n\r\n.text-map {\r\n    width: 249px;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n    color: var(--green);\r\n    \r\n}\r\n\r\n.addres-map {\r\n    line-height: 30px;\r\n    width: 249px;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    color: var(--green);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/vars.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/vars.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --color-white: #ffffff;
    --color-light-blue: #CFE4E6;
    --color-pink: #F45B69;
    --color-grey: grey;
    --color-dark-blue: #113B5f;
    --color-light-green: #028090;
    --color-blue: #456990;
    --color-dark-blue: #114B5F;
    --white: #fff;
    --light-blue: #CFE4E6;
    --dark-blue: #113B5f;
    --dark-green: #114B5F;
    --green: #028090;
    --blue: #456990;
    --pink: #F45B69;
    --transition-duration: ease-in-out .2s;
    --border-radius: 10px;
    
    


    --border-radius: 10px;
    --border: 1px solid var(--color-white);
    --outline: 1px solid var(--color-dark-blue);
    
    
    --font-base: 'Overpass', sans-serif;
    --font-secondary: 'Saira', sans-serif;
    --font-title: 'Montserrat', sans-serif;

    --transition-duration: ease-in-out .2s;

    --container-width: 1060px;
    --container-padding-x: 20px;
    --index: calc(1vw + 1vh);
}

`, "",{"version":3,"sources":["webpack://./src/style/vars.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;IACrB,kBAAkB;IAClB,0BAA0B;IAC1B,4BAA4B;IAC5B,qBAAqB;IACrB,0BAA0B;IAC1B,aAAa;IACb,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,sCAAsC;IACtC,qBAAqB;;;;;IAKrB,qBAAqB;IACrB,sCAAsC;IACtC,2CAA2C;;;IAG3C,mCAAmC;IACnC,qCAAqC;IACrC,sCAAsC;;IAEtC,sCAAsC;;IAEtC,yBAAyB;IACzB,2BAA2B;IAC3B,wBAAwB;AAC5B","sourcesContent":[":root {\r\n    --color-white: #ffffff;\r\n    --color-light-blue: #CFE4E6;\r\n    --color-pink: #F45B69;\r\n    --color-grey: grey;\r\n    --color-dark-blue: #113B5f;\r\n    --color-light-green: #028090;\r\n    --color-blue: #456990;\r\n    --color-dark-blue: #114B5F;\r\n    --white: #fff;\r\n    --light-blue: #CFE4E6;\r\n    --dark-blue: #113B5f;\r\n    --dark-green: #114B5F;\r\n    --green: #028090;\r\n    --blue: #456990;\r\n    --pink: #F45B69;\r\n    --transition-duration: ease-in-out .2s;\r\n    --border-radius: 10px;\r\n    \r\n    \r\n\r\n\r\n    --border-radius: 10px;\r\n    --border: 1px solid var(--color-white);\r\n    --outline: 1px solid var(--color-dark-blue);\r\n    \r\n    \r\n    --font-base: 'Overpass', sans-serif;\r\n    --font-secondary: 'Saira', sans-serif;\r\n    --font-title: 'Montserrat', sans-serif;\r\n\r\n    --transition-duration: ease-in-out .2s;\r\n\r\n    --container-width: 1060px;\r\n    --container-padding-x: 20px;\r\n    --index: calc(1vw + 1vh);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-ff8cde","src_js_main_page_fallMenu_js-src_js_main_page_feedback_js-src_js_main_page_preloader_js-node_-e0c96c","node_modules_css-loader_dist_cjs_js_src_style_blocks_main_page_media_css"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map