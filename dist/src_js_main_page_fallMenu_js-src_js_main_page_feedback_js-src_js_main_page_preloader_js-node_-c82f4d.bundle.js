"use strict";
(self["webpackChunkResidentialComplex"] = self["webpackChunkResidentialComplex"] || []).push([["src_js_main_page_fallMenu_js-src_js_main_page_feedback_js-src_js_main_page_preloader_js-node_-c82f4d"],{

/***/ "./src/js/main_page_fallMenu.js":
/*!**************************************!*\
  !*** ./src/js/main_page_fallMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fallMenu: () => (/* binding */ fallMenu)
/* harmony export */ });
/* harmony import */ var _node_modules_on_change_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/on-change/index.js */ "./node_modules/on-change/index.js");

var fallMenu = function fallMenu() {
  document.addEventListener('DOMContentLoaded', function () {
    var state = {
      mode: 'close'
    };
    window.addEventListener('load', function () {
      window.scrollTo(0, 0);
    });
    var watchedState = (0,_node_modules_on_change_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function () {
      var popup = document.querySelector('#popup');
      var popupFade = document.querySelector('#popup-fade');
      var body = document.body;
      var imageContainer = document.getElementById('imageContainer');
      if (state.mode === 'open') {
        popup.classList.toggle('open');
        body.classList.add('no-scroll');
        popupFade.classList.toggle('popup-fade');
        imageContainer.classList.add('show');
      } else {
        popup.classList.remove('open');
        body.classList.remove('no-scroll');
        popupFade.classList.remove('popup-fade');
        imageContainer.classList.remove('show');
      }
    });
    var menuCloseButton = document.querySelector('.menu-close');
    var menuBtn = document.querySelector('#menu_btn');
    menuBtn.addEventListener('click', function () {
      watchedState.mode = 'open';
    });
    var links = Array.from(menu.children);
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        watchedState.mode = 'close';
      });
    });
    menuCloseButton.addEventListener('click', function () {
      watchedState.mode = 'close';
    });
    document.addEventListener('click', function (event) {
      var isClickInsideMenu = popup.contains(event.target) || menuBtn.contains(event.target);
      if (!isClickInsideMenu) {
        watchedState.mode = 'close';
      }
    });
  });
};

/***/ }),

/***/ "./src/js/main_page_feedback.js":
/*!**************************************!*\
  !*** ./src/js/main_page_feedback.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   feedback: () => (/* binding */ feedback)
/* harmony export */ });
var feedback = function feedback() {
  document.addEventListener('DOMContentLoaded', function () {
    var btnShow = document.querySelector('#connection__btn-phone');
    var connectionWrapper = document.querySelector('#connection__wrapper-content');
    var btnClose = document.querySelector('#btn-close');
    var wrapperForm = document.querySelector('#wrapper-form');
    var form = document.querySelector('#connection__form');
    var textSuccess = document.querySelector('#connection__feedback');
    var body = document.body;
    var header = document.querySelector('.header');
    var btnFeedBack = document.querySelector('#btn-feedback');
    var btnSubmit = document.querySelector('#connection__submit');
    var connectionInput = document.querySelector('#connection__input');
    var buttonInfrastructure = document.querySelector('#button_infrastructure');
    // const buttonLink = document.querySelector('#button_link')

    var closeConnection = function closeConnection() {
      body.classList.remove('popup-fade');
      connectionWrapper.classList.remove('openForm');
      body.classList.remove('no-scroll');
      form.reset();
      header.classList.remove('z0');
      btnShow.classList.remove('z0');
      btnShow.style.display = 'flex';
    };
    var isDisabled = function isDisabled() {
      btnSubmit.disabled = true;
      btnSubmit.style.background = 'grey';
    };
    var notDisabled = function notDisabled() {
      btnSubmit.disabled = false;
      btnSubmit.style.background = '#F45B69';
    };
    var toggleConnection = function toggleConnection() {
      btnShow.classList.toggle('z0');
      header.classList.toggle('z0');
      body.classList.toggle('popup-fade');
      body.classList.toggle('no-scroll');
      connectionWrapper.classList.add('openForm');
      btnShow.style.display = 'none';
      isDisabled();
      connectionInput.addEventListener('input', function (e) {
        if (connectionInput.checkValidity() && e.target.value !== '0' && e.target.value.length > 0) {
          notDisabled();
        } else {
          isDisabled();
        }
      });
      if (connectionWrapper.contains(textSuccess)) {
        textSuccess.remove();
        wrapperForm.append(form);
      }
    };
    var clickOutsideMenu = function clickOutsideMenu(e) {
      var clickInsideMenu = connectionWrapper.contains(e.target) || btnShow.contains(e.target) || btnFeedBack.contains(e.target);
      if (!clickInsideMenu) {
        closeConnection();
      }
    };
    btnFeedBack.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleConnection();
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.replaceWith(textSuccess);
    });
    btnClose.addEventListener('click', function (e) {
      e.stopPropagation();
      closeConnection();
    });
    btnShow.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleConnection();
    });

    // buttonLink.addEventListener('click', (e) => {
    //     e.stopPropagation()
    //     toggleConnection()
    // })

    // buttonInfrastructure.addEventListener('click', (e) => {
    //     e.stopPropagation()
    //     toggleConnection()
    // })

    document.addEventListener('click', function (e) {
      clickOutsideMenu(e);
    });
    document.addEventListener('touchstart', function (e) {
      clickOutsideMenu(e);
    });
  });
};

/***/ }),

/***/ "./src/js/main_page_preloader.js":
/*!***************************************!*\
  !*** ./src/js/main_page_preloader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preloader: () => (/* binding */ preloader)
/* harmony export */ });
var preloader = function preloader() {
  document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.getElementById('preloader');
    var mainContent = document.getElementById('main-content');
    window.addEventListener('load', function () {
      preloader.style.display = 'none'; // Скрываем прелоадер
      mainContent.classList.remove('hidden'); // Показываем контент
    });
    /* window.onload = function () {
    document.body.classList.add('loaded_hiding')
    window.setTimeout(function () {
        document.body.classList.add('loaded')
        document.body.classList.remove('loaded_hiding')
    }, 500)
    } */
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_fonts.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_fonts.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Overpass-Black.woff2 */ "./src/fonts/Overpass-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Overpass-Black.woff */ "./src/fonts/Overpass-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-Regular.woff2 */ "./src/fonts/Saira-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-Regular.woff */ "./src/fonts/Saira-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-SemiBold.woff2 */ "./src/fonts/Saira-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-SemiBold.woff */ "./src/fonts/Saira-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Overpass-Regular.woff2 */ "./src/fonts/Overpass-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Overpass-Regular.woff */ "./src/fonts/Overpass-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Overpass-SemiBold.woff2 */ "./src/fonts/Overpass-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Overpass-SemiBold.woff */ "./src/fonts/Overpass-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-ExtraBoldItalic.woff2 */ "./src/fonts/Saira-ExtraBoldItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-ExtraBoldItalic.woff */ "./src/fonts/Saira-ExtraBoldItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-Black.woff2 */ "./src/fonts/Saira-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Saira-Black.woff */ "./src/fonts/Saira-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-Black.woff2 */ "./src/fonts/Montserrat-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../../fonts/Montserrat-Black.woff */ "./src/fonts/Montserrat-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Overpass';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Saira';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Saira';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Overpass';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Overpass';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}


@font-face {
    font-family: 'Saira';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format('woff');
    font-weight: 800;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Saira';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_12___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_14___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_15___}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 400;
    src: local(''),
    url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2");
}

@font-face {
    font-family: "Saira";
    font-style: normal;
    font-weight: 400;
    src: local(''),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2");
}

@font-face {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 600;
    src: local(''),
    url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("woff2");
}

@font-face {
    font-family: "Saira";
    font-style: normal;
    font-weight: 600;
    src: local(''),
    url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2");
}

@font-face {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 800;
    src: local(''),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
}

@font-face {
    font-family: "Saira";
    font-style: normal;
    font-weight: 800;
    src: local(''),
    url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format("woff"),
    url(${___CSS_LOADER_URL_REPLACEMENT_12___}) format("woff2");
}`, "",{"version":3,"sources":["webpack://./src/style/base/main_page_fonts.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB;8DACyD;IACzD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB;8DACwD;IACxD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB;8DACyD;IACzD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB;8DAC2D;IAC3D,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB;8DAC4D;IAC5D,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,oBAAoB;IACpB;+DACgE;IAChE,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB;+DACsD;IACtD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB;+DAC2D;IAC3D,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEyD;AAC7D;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEsD;AAC1D;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAE0D;AAC9D;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEuD;AAC3D;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB;;2DAEuD;AAC3D;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB;;4DAEoD;AACxD","sourcesContent":["@font-face {\r\n    font-family: 'Overpass';\r\n    src: url('../../fonts/Overpass-Black.woff2') format('woff2'),\r\n        url('../../fonts/Overpass-Black.woff') format('woff');\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Saira';\r\n    src: url('../../fonts/Saira-Regular.woff2') format('woff2'),\r\n        url('../../fonts/Saira-Regular.woff') format('woff');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Saira';\r\n    src: url('../../fonts/Saira-SemiBold.woff2') format('woff2'),\r\n        url('../../fonts/Saira-SemiBold.woff') format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Overpass';\r\n    src: url('../../fonts/Overpass-Regular.woff2') format('woff2'),\r\n        url('../../fonts/Overpass-Regular.woff') format('woff');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Overpass';\r\n    src: url('../../fonts/Overpass-SemiBold.woff2') format('woff2'),\r\n        url('../../fonts/Overpass-SemiBold.woff') format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'Saira';\r\n    src: url('../../fonts/Saira-ExtraBoldItalic.woff2') format('woff2'),\r\n        url('../../fonts/Saira-ExtraBoldItalic.woff') format('woff');\r\n    font-weight: 800;\r\n    font-style: italic;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Saira';\r\n    src: url('../../fonts/Saira-Black.woff2') format('woff2'),\r\n        url('../../fonts/Saira-Black.woff') format('woff');\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    src: url('../../fonts/Montserrat-Black.woff2') format('woff2'),\r\n        url('../../fonts/Montserrat-Black.woff') format('woff');\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Overpass\";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local(''),\r\n    url(\"../../fonts/Overpass-Regular.woff\") format(\"woff\"),\r\n    url(\"../../fonts/Overpass-Regular.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Saira\";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local(''),\r\n    url(\"../../fonts/Saira-Regular.woff\") format(\"woff\"),\r\n    url(\"../../fonts/Saira-Regular.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Overpass\";\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local(''),\r\n    url(\"../../fonts/Overpass-SemiBold.woff\") format(\"woff\"),\r\n    url(\"../../fonts/Overpass-SemiBold.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Saira\";\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local(''),\r\n    url(\"../../fonts/Saira-SemiBold.woff\") format(\"woff\"),\r\n    url(\"../../fonts/Saira-SemiBold.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Overpass\";\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    src: local(''),\r\n    url(\"../../fonts/Overpass-Black.woff\") format(\"woff\"),\r\n    url(\"../../fonts/Overpass-Black.woff2\") format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Saira\";\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    src: local(''),\r\n    url(\"../../fonts/Saira-Black.woff\") format(\"woff\"),\r\n    url(\"../../fonts/Saira-Black.woff2\") format(\"woff2\");\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_global.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_global.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/main-bg/body.webp */ "./src/img/main-bg/body.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/main-bg/menu-bg.webp */ "./src/img/main-bg/menu-bg.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/main-bg/promo.webp */ "./src/img/main-bg/promo.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/advantages/ecology_main.webp */ "./src/img/advantages/ecology_main.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/advantages/infrastructure.webp */ "./src/img/advantages/infrastructure.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/advantages/roads_main.webp */ "./src/img/advantages/roads_main.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/advantages/sport_main.webp */ "./src/img/advantages/sport_main.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/apartments/apart-1.webp */ "./src/img/apartments/apart-1.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/apartments/apart-2.webp */ "./src/img/apartments/apart-2.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/apartments/apart-3.webp */ "./src/img/apartments/apart-3.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/apartments/apart-4.webp */ "./src/img/apartments/apart-4.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/interior/interior-1.webp */ "./src/img/interior/interior-1.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/interior/interior-2.webp */ "./src/img/interior/interior-2.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/interior/interior-3.webp */ "./src/img/interior/interior-3.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/interior/interior-4.webp */ "./src/img/interior/interior-4.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `img {
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
    scrollbar-gutter: stable;
}

body {
    position: relative;
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

body:after {
    content:
        url(${___CSS_LOADER_URL_REPLACEMENT_0___}) url(${___CSS_LOADER_URL_REPLACEMENT_1___}) url(${___CSS_LOADER_URL_REPLACEMENT_2___}) url(${___CSS_LOADER_URL_REPLACEMENT_3___}) url(${___CSS_LOADER_URL_REPLACEMENT_4___}) url(${___CSS_LOADER_URL_REPLACEMENT_5___}) url(${___CSS_LOADER_URL_REPLACEMENT_6___}) url(${___CSS_LOADER_URL_REPLACEMENT_7___}) url(${___CSS_LOADER_URL_REPLACEMENT_8___}) url(${___CSS_LOADER_URL_REPLACEMENT_9___}) url(${___CSS_LOADER_URL_REPLACEMENT_10___}) url(${___CSS_LOADER_URL_REPLACEMENT_11___}) url(${___CSS_LOADER_URL_REPLACEMENT_12___}) url(${___CSS_LOADER_URL_REPLACEMENT_13___}) url(${___CSS_LOADER_URL_REPLACEMENT_14___});
    display: none;
}

.flex-jc-sp_beet-al-it_cent {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container {
    max-width: calc(var(--container-width) + var(--container-padding-x) * 2);
    padding-inline: var(--container-padding-x);
    margin-inline: auto;
}

.no-scroll {
    overflow: hidden;
}

a {
    display: block;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
}

a,
button,
input,
textarea,
svg * {
    transition-duration: var(--transition-duration);
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
}

button {
    background: rgba(0, 0, 0, 0);
    border: none;
}

.bg-image {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
}

.wrapper-content {
    max-width: 747px;
    margin-left: auto;
    margin-right: auto;
}

.section-title {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: 32px;
    text-transform: capitalize;
    color: var(--color-dark-blue);
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
}

.preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background: #e0e0e0;
    z-index: 1000;
}

.preloader__image {
    position: relative;
    top: 50%;
    left: 50%;
    width: 70px;
    height: 70px;
    margin-top: -35px;
    margin-left: -35px;
    text-align: center;
    animation: preloader-rotate 2s infinite linear;
}

@keyframes preloader-rotate {
    100% {
        transform: rotate(360deg);
    }
}

.loaded_hiding .preloader {
    transition: .3s opacity;
    opacity: 0;
}

.loaded .preloader {
    display: none;
}

.hidden {
    display: none;
}

.menu-button {
    position: relative;
    text-transform: uppercase;
    text-align: center;
    color: var(--color-light-blue);
    border-radius: var(--border-radius);
    background-color: var(--color-light-green);
}

.menu-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: var(--color-light-blue);
    opacity: 15%;
    transition: all .6s ease;
    border-radius: var(--border-radius);
}

.menu-button:hover::before {
    opacity: 0;
    transform: scale(0.6, 0.6);
}

.menu-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all .6s ease;
    border: 1px solid var(--color-light-blue);
    transform: scale(1.2, 1.2);
    border-radius: 10px;
}

.menu-button:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}

.menu-button:active {
    background-color: var(--color-light-green);
}

.phone {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 50px;
    right: 100px;
    z-index: 11;
}

.phone svg {
    width: 50px;
    height: 50px;
}

.phone:before,
.phone:after {
    content: " ";
    display: block;
    position: absolute;
    border: 50%;
    border: 1px solid var(--color-pink);
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 50%;
}

.phone:before,
.phone:after {
    animation: animate 1.5s linear infinite;
}


@keyframes animate {

    0% {
        transform: scale(0.5);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: scale(1.2);
        opacity: 0;
    }
}


.popup_menu_overflow {
    overflow: auto;
}

.btn-style {
    position: relative;
    border-radius: var(--border-radius);
    color: var(--light-blue);
}

.btn-style::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: var(--light-blue);
    opacity: 15%;
    transition: 0.6s;
    border-radius: var(--border-radius);
}

.btn-style:hover::before {
    opacity: 0;
    transform: scale(0.6, 0.6);
}

.btn-style::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: 0.6s;
    border: 1px solid var(--light-blue);
    transform: scale(1.2, 1.2);
    border-radius: var(--border-radius);
}

.btn-style:active {
    background-color: var(--dark-green);
}

.btn-style:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}

.btn-style:focus {
    outline: none;
}

.card-mobile-parameters {
    min-height: 320px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    text-align: center;
}

.container {
    max-width: calc(var(--container-width) + var(--container-padding-x) * 2);
    padding-inline: var(--container-padding-x);
    margin-inline: auto;
}

.no-scroll {
    overflow: hidden;
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    height: 100vh;
}

.btn-reset {
    border: none;
    cursor: pointer;
    font-family: "Overpass", "sans-serif";
    background: none;
}`, "",{"version":3,"sources":["webpack://./src/style/base/main_page_global.css"],"names":[],"mappings":"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","sourcesContent":["img {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect,\r\nbutton {\r\n    font: inherit;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n    scroll-behavior: smooth;\r\n    scrollbar-gutter: stable;\r\n}\r\n\r\nbody {\r\n    position: relative;\r\n    margin: 0;\r\n    min-height: 100vh;\r\n    line-height: 1.5;\r\n    scroll-behavior: smooth;\r\n    touch-action: none;\r\n    font-size: 16px;\r\n    font-family: 'Overpass', sans-serif;\r\n    font-weight: 400;\r\n    background-color: var(--color-light-blue);\r\n}\r\n\r\nbody:after {\r\n    content:\r\n        url('../../img/main-bg/body.webp') url('../../img/main-bg/menu-bg.webp') url('../../img/main-bg/promo.webp') url('../../img/advantages/ecology_main.webp') url('../../img/advantages/infrastructure.webp') url('../../img/advantages/roads_main.webp') url('../../img/advantages/sport_main.webp') url('../../img/apartments/apart-1.webp') url('../../img/apartments/apart-2.webp') url('../../img/apartments/apart-3.webp') url('../../img/apartments/apart-4.webp') url('../../img/interior/interior-1.webp') url('../../img/interior/interior-2.webp') url('../../img/interior/interior-3.webp') url('../../img/interior/interior-4.webp');\r\n    display: none;\r\n}\r\n\r\n.flex-jc-sp_beet-al-it_cent {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.container {\r\n    max-width: calc(var(--container-width) + var(--container-padding-x) * 2);\r\n    padding-inline: var(--container-padding-x);\r\n    margin-inline: auto;\r\n}\r\n\r\n.no-scroll {\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    display: block;\r\n    -webkit-text-decoration: none;\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\na,\r\nbutton,\r\ninput,\r\ntextarea,\r\nsvg * {\r\n    transition-duration: var(--transition-duration);\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\nbutton {\r\n    background: rgba(0, 0, 0, 0);\r\n    border: none;\r\n}\r\n\r\n.bg-image {\r\n    background-image: url(../../img/main-bg/body.webp);\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.wrapper-content {\r\n    max-width: 747px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.section-title {\r\n    font-family: var(--font-secondary);\r\n    font-weight: 600;\r\n    font-size: 32px;\r\n    text-transform: capitalize;\r\n    color: var(--color-dark-blue);\r\n}\r\n\r\n.visually-hidden {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    border: 0;\r\n    padding: 0;\r\n    white-space: nowrap;\r\n    clip-path: inset(100%);\r\n    clip: rect(0 0 0 0);\r\n    overflow: hidden;\r\n}\r\n\r\n.preloader {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    background: #e0e0e0;\r\n    z-index: 1000;\r\n}\r\n\r\n.preloader__image {\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 70px;\r\n    height: 70px;\r\n    margin-top: -35px;\r\n    margin-left: -35px;\r\n    text-align: center;\r\n    animation: preloader-rotate 2s infinite linear;\r\n}\r\n\r\n@keyframes preloader-rotate {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.loaded_hiding .preloader {\r\n    transition: .3s opacity;\r\n    opacity: 0;\r\n}\r\n\r\n.loaded .preloader {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.menu-button {\r\n    position: relative;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: var(--color-light-blue);\r\n    border-radius: var(--border-radius);\r\n    background-color: var(--color-light-green);\r\n}\r\n\r\n.menu-button::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    background-color: var(--color-light-blue);\r\n    opacity: 15%;\r\n    transition: all .6s ease;\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.menu-button:hover::before {\r\n    opacity: 0;\r\n    transform: scale(0.6, 0.6);\r\n}\r\n\r\n.menu-button::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: all .6s ease;\r\n    border: 1px solid var(--color-light-blue);\r\n    transform: scale(1.2, 1.2);\r\n    border-radius: 10px;\r\n}\r\n\r\n.menu-button:hover::after {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n}\r\n\r\n.menu-button:active {\r\n    background-color: var(--color-light-green);\r\n}\r\n\r\n.phone {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    bottom: 50px;\r\n    right: 100px;\r\n    z-index: 11;\r\n}\r\n\r\n.phone svg {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.phone:before,\r\n.phone:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    border: 50%;\r\n    border: 1px solid var(--color-pink);\r\n    left: -20px;\r\n    right: -20px;\r\n    top: -20px;\r\n    bottom: -20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.phone:before,\r\n.phone:after {\r\n    animation: animate 1.5s linear infinite;\r\n}\r\n\r\n\r\n@keyframes animate {\r\n\r\n    0% {\r\n        transform: scale(0.5);\r\n        opacity: 0;\r\n    }\r\n\r\n    50% {\r\n        opacity: 1;\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1.2);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n\r\n.popup_menu_overflow {\r\n    overflow: auto;\r\n}\r\n\r\n.btn-style {\r\n    position: relative;\r\n    border-radius: var(--border-radius);\r\n    color: var(--light-blue);\r\n}\r\n\r\n.btn-style::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    background-color: var(--light-blue);\r\n    opacity: 15%;\r\n    transition: 0.6s;\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.btn-style:hover::before {\r\n    opacity: 0;\r\n    transform: scale(0.6, 0.6);\r\n}\r\n\r\n.btn-style::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: 0.6s;\r\n    border: 1px solid var(--light-blue);\r\n    transform: scale(1.2, 1.2);\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.btn-style:active {\r\n    background-color: var(--dark-green);\r\n}\r\n\r\n.btn-style:hover::after {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n}\r\n\r\n.btn-style:focus {\r\n    outline: none;\r\n}\r\n\r\n.card-mobile-parameters {\r\n    min-height: 320px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    max-width: calc(var(--container-width) + var(--container-padding-x) * 2);\r\n    padding-inline: var(--container-padding-x);\r\n    margin-inline: auto;\r\n}\r\n\r\n.no-scroll {\r\n    overflow: hidden;\r\n}\r\n\r\n.dp-fl {\r\n    display: flex;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(12, 1fr);\r\n    gap: 40px;\r\n    margin: 0 40px;\r\n}\r\n\r\n.section-parameters {\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.bg {\r\n    background: url(\"../../img/main-bg/body.webp\");\r\n    background-size: cover;\r\n    height: 100vh;\r\n}\r\n\r\n.btn-reset {\r\n    border: none;\r\n    cursor: pointer;\r\n    font-family: \"Overpass\", \"sans-serif\";\r\n    background: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_normalize.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_normalize.css ***!
  \**************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
  Нормализация блочной модели
 */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/**
  Убираем внутренние отступы слева тегам списков,
  у которых есть атрибут class
 */
:where(ul, ol):where([class]) {
    padding-left: 0;
}

/**
  Убираем внешние отступы body и двум другим тегам,
  у которых есть атрибут class
 */
body,
:where(blockquote, figure):where([class]) {
    margin: 0;
    padding: 0;
}

/**
  Убираем внешние отступы вертикали нужным тегам,
  у которых есть атрибут class
 */
:where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
    margin-block: 0;
}

:where(dd[class]) {
    margin-left: 0;
}

/**
  Убираем стандартный маркер маркированному списку,
  у которого есть атрибут class
 */
:where(ul[class]) {
    list-style: none;
}

/**
  Упрощаем работу с изображениями
 */
img {
    display: block;
    max-width: 100%;
}

/**
  Наследуем свойства шрифт для полей ввода
 */
input,
textarea,
select,
button {
    font: inherit;
}

html {
    /**
    Пригодится в большинстве ситуаций
    (когда, например, нужно будет "прижать" футер к низу сайта)
   */
    height: 100%;
    /**
    Плавный скролл
   */
    scroll-behavior: smooth;
}

body {
    /**
    Пригодится в большинстве ситуаций
    (когда, например, нужно будет "прижать" футер к низу сайта)
   */
    min-height: 100%;
    /**
    Унифицированный интерлиньяж
   */
    line-height: 1.5;
}
`, "",{"version":3,"sources":["webpack://./src/style/base/main_page_normalize.css"],"names":[],"mappings":"AAAA;;EAEE;AACF;;;IAGI,sBAAsB;AAC1B;;AAEA;;;EAGE;AACF;IACI,eAAe;AACnB;;AAEA;;;EAGE;AACF;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;;;EAGE;AACF;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;;;EAGE;AACF;IACI,gBAAgB;AACpB;;AAEA;;EAEE;AACF;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;EAEE;AACF;;;;IAII,aAAa;AACjB;;AAEA;IACI;;;IAGA;IACA,YAAY;IACZ;;IAEA;IACA,uBAAuB;AAC3B;;AAEA;IACI;;;IAGA;IACA,gBAAgB;IAChB;;IAEA;IACA,gBAAgB;AACpB","sourcesContent":["/**\r\n  Нормализация блочной модели\r\n */\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/**\r\n  Убираем внутренние отступы слева тегам списков,\r\n  у которых есть атрибут class\r\n */\r\n:where(ul, ol):where([class]) {\r\n    padding-left: 0;\r\n}\r\n\r\n/**\r\n  Убираем внешние отступы body и двум другим тегам,\r\n  у которых есть атрибут class\r\n */\r\nbody,\r\n:where(blockquote, figure):where([class]) {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n  Убираем внешние отступы вертикали нужным тегам,\r\n  у которых есть атрибут class\r\n */\r\n:where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {\r\n    margin-block: 0;\r\n}\r\n\r\n:where(dd[class]) {\r\n    margin-left: 0;\r\n}\r\n\r\n/**\r\n  Убираем стандартный маркер маркированному списку,\r\n  у которого есть атрибут class\r\n */\r\n:where(ul[class]) {\r\n    list-style: none;\r\n}\r\n\r\n/**\r\n  Упрощаем работу с изображениями\r\n */\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n  Наследуем свойства шрифт для полей ввода\r\n */\r\ninput,\r\ntextarea,\r\nselect,\r\nbutton {\r\n    font: inherit;\r\n}\r\n\r\nhtml {\r\n    /**\r\n    Пригодится в большинстве ситуаций\r\n    (когда, например, нужно будет \"прижать\" футер к низу сайта)\r\n   */\r\n    height: 100%;\r\n    /**\r\n    Плавный скролл\r\n   */\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    /**\r\n    Пригодится в большинстве ситуаций\r\n    (когда, например, нужно будет \"прижать\" футер к низу сайта)\r\n   */\r\n    min-height: 100%;\r\n    /**\r\n    Унифицированный интерлиньяж\r\n   */\r\n    line-height: 1.5;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_phone.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_phone.css ***!
  \**********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.connection__phone {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 16vw;
    right: 3.822vw;
    z-index: 10;
    cursor: pointer;
}

.connection__phone svg {
    width: 50px;
    height: 50px;
}

.connection__phone:before,
.connection__phone:after {
    content: " ";
    display: block;
    position: absolute;
    border: 1px solid var(--pink);
    border: 1px solid var(--color-pink);
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 50%;
    animation: animate 1.5s linear infinite
}


@keyframes animate {

    0% {
        transform: scale(0.5);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: scale(1.2);
        opacity: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/base/main_page_phone.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,6BAA6B;IAC7B,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,UAAU;IACV,aAAa;IACb,kBAAkB;IAClB;AACJ;;;AAGA;;IAEI;QACI,qBAAqB;QACrB,UAAU;IACd;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,qBAAqB;QACrB,UAAU;IACd;AACJ","sourcesContent":[".connection__phone {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    bottom: 16vw;\r\n    right: 3.822vw;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}\r\n\r\n.connection__phone svg {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.connection__phone:before,\r\n.connection__phone:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    border: 1px solid var(--pink);\r\n    border: 1px solid var(--color-pink);\r\n    left: -20px;\r\n    right: -20px;\r\n    top: -20px;\r\n    bottom: -20px;\r\n    border-radius: 50%;\r\n    animation: animate 1.5s linear infinite\r\n}\r\n\r\n\r\n@keyframes animate {\r\n\r\n    0% {\r\n        transform: scale(0.5);\r\n        opacity: 0;\r\n    }\r\n\r\n    50% {\r\n        opacity: 1;\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1.2);\r\n        opacity: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_vars.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/base/main_page_vars.css ***!
  \*********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {

    --color-white: #ffffff;
    --color-light-blue: #CFE4E6;
    --color-light-green: #028090;
    --color-pink: #F45B69;
    --color-grey: grey;
    --color-blue: #456990;
    --white: #fff;
    --light-blue: #CFE4E6;
    --dark-blue: #113B5f;
    --dark-green: #114B5F;
    --green: #028090;
    --blue: #456990;
    --pink: #F45B69;
    --color-dark-blue: #114B5F;
    --color-dark-blue-footer: #113B5f;


    --border-radius: 10px;
    --border: 1px solid var(--color-white);
    --outline: 1px solid var(--color-dark-blue);

    
    --font-base: 'Overpass', sans-serif;
    --font-secondary: 'Saira', sans-serif;
    --font-title: 'Montserrat', sans-serif;

    --transition-duration: ease-in-out .2s;

    --index: calc(1vw + 1vh);

    --container-width: 1060px;
    --container-padding-x: 20px;
    --container-width: 1060px;
    --container-padding-x: 20px;
}`, "",{"version":3,"sources":["webpack://./src/style/base/main_page_vars.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,0BAA0B;IAC1B,iCAAiC;;;IAGjC,qBAAqB;IACrB,sCAAsC;IACtC,2CAA2C;;;IAG3C,mCAAmC;IACnC,qCAAqC;IACrC,sCAAsC;;IAEtC,sCAAsC;;IAEtC,wBAAwB;;IAExB,yBAAyB;IACzB,2BAA2B;IAC3B,yBAAyB;IACzB,2BAA2B;AAC/B","sourcesContent":[":root {\r\n\r\n    --color-white: #ffffff;\r\n    --color-light-blue: #CFE4E6;\r\n    --color-light-green: #028090;\r\n    --color-pink: #F45B69;\r\n    --color-grey: grey;\r\n    --color-blue: #456990;\r\n    --white: #fff;\r\n    --light-blue: #CFE4E6;\r\n    --dark-blue: #113B5f;\r\n    --dark-green: #114B5F;\r\n    --green: #028090;\r\n    --blue: #456990;\r\n    --pink: #F45B69;\r\n    --color-dark-blue: #114B5F;\r\n    --color-dark-blue-footer: #113B5f;\r\n\r\n\r\n    --border-radius: 10px;\r\n    --border: 1px solid var(--color-white);\r\n    --outline: 1px solid var(--color-dark-blue);\r\n\r\n    \r\n    --font-base: 'Overpass', sans-serif;\r\n    --font-secondary: 'Saira', sans-serif;\r\n    --font-title: 'Montserrat', sans-serif;\r\n\r\n    --transition-duration: ease-in-out .2s;\r\n\r\n    --index: calc(1vw + 1vh);\r\n\r\n    --container-width: 1060px;\r\n    --container-padding-x: 20px;\r\n    --container-width: 1060px;\r\n    --container-padding-x: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_connection.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_connection.css ***!
  \*****************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.connection {
    position: relative;
}
.connection__wrapper {
    position: absolute;
    display: none;
    min-width: 700px;
    min-height: 360px;
    border-radius: 10px;
    padding-top: 78px;
    position: fixed;
    z-index: 7;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
}

.connection__wrapper.openForm {
    display: block;
}

.connection__img {
    position: absolute;
    width: 154px;
    height: 189px;
    bottom: 302px;
    border-radius: 10px;
    left: 37%;
}

.connection__wrapper-form {
    margin: 0 auto;
    width: 467px;
    height: 196px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}

.connection__form {
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
}

.connection__text-form {
    font-family: 'Saira', sans-serif;
    font-size: 20px;
    text-align: center;
    letter-spacing: normal;
    line-height: 30px;
    color: var(--dark-green);
}

.connection__input {
    display: inline-block;
    padding-left: 14px;
    margin-right: 46px;
    outline: none;
    min-width: 200px;
    min-height: 40px;
    border-radius: 10px;
    border: 1px solid var(--color-pink);
    background-color: var(--color-white);
}

.connection__input:invalid {
    border: 2px solid red;
}

.connection__input:valid {
    border: 2px solid green;
}

.connection__input:focus::placeholder {
    color: transparent;
}

.form-close {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 10px;
    top: 10px;
    width: 100px;
    aspect-ratio: 1;
    border: 1px solid var(--blue);
    border-radius: 100%;
    cursor: pointer;
}

.form-close span {
    display: inline-block;
    width: 50px;
    height: 3px;
    background-color: var(--blue);
}

.form-close span:nth-child(1) {
    transform: rotate(45deg) translate(2px);
}

.form-close span:nth-child(2) {
    transform: rotate(-45deg) translate(2px);
}

.form-close:hover span {
    background-color: var(--pink);
    transition: var(--transition-duration);
}

.form-close:hover {
    border-color: var(--pink);
    transition: var(--transition-duration);
}

.btn-form {
    display: inline-block;
    width: 214px;
    height: 40px;
    border-radius: var(--border-radius);
    font-family: 'Saira', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: var(--blue);
    background-color: var(--pink);
    z-index: 20;
    cursor: pointer;
}

.btn-form:active {
    color: var(--pink);
    background-color: var(--blue);
}

.connection__feedback-text {
    color: var(--dark-blue);
    line-height: 30px;
    text-align: center;
    margin: 50px;
    font-size: 20px;
    font-family: 'Saira', sans-serif;
}


`, "",{"version":3,"sources":["webpack://./src/style/blocks/main_page_connection.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,0CAA0C;IAC1C,2BAA2B;AAC/B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,mCAAmC;IACnC,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,6BAA6B;IAC7B,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,gCAAgC;AACpC","sourcesContent":[".connection {\r\n    position: relative;\r\n}\r\n.connection__wrapper {\r\n    position: absolute;\r\n    display: none;\r\n    min-width: 700px;\r\n    min-height: 360px;\r\n    border-radius: 10px;\r\n    padding-top: 78px;\r\n    position: fixed;\r\n    z-index: 7;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    backdrop-filter: blur(10px);\r\n}\r\n\r\n.connection__wrapper.openForm {\r\n    display: block;\r\n}\r\n\r\n.connection__img {\r\n    position: absolute;\r\n    width: 154px;\r\n    height: 189px;\r\n    bottom: 302px;\r\n    border-radius: 10px;\r\n    left: 37%;\r\n}\r\n\r\n.connection__wrapper-form {\r\n    margin: 0 auto;\r\n    width: 467px;\r\n    height: 196px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: space-between;\r\n}\r\n\r\n.connection__form {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    row-gap: 50px;\r\n}\r\n\r\n.connection__text-form {\r\n    font-family: 'Saira', sans-serif;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    letter-spacing: normal;\r\n    line-height: 30px;\r\n    color: var(--dark-green);\r\n}\r\n\r\n.connection__input {\r\n    display: inline-block;\r\n    padding-left: 14px;\r\n    margin-right: 46px;\r\n    outline: none;\r\n    min-width: 200px;\r\n    min-height: 40px;\r\n    border-radius: 10px;\r\n    border: 1px solid var(--color-pink);\r\n    background-color: var(--color-white);\r\n}\r\n\r\n.connection__input:invalid {\r\n    border: 2px solid red;\r\n}\r\n\r\n.connection__input:valid {\r\n    border: 2px solid green;\r\n}\r\n\r\n.connection__input:focus::placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-close {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    right: 10px;\r\n    top: 10px;\r\n    width: 100px;\r\n    aspect-ratio: 1;\r\n    border: 1px solid var(--blue);\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-close span {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 3px;\r\n    background-color: var(--blue);\r\n}\r\n\r\n.form-close span:nth-child(1) {\r\n    transform: rotate(45deg) translate(2px);\r\n}\r\n\r\n.form-close span:nth-child(2) {\r\n    transform: rotate(-45deg) translate(2px);\r\n}\r\n\r\n.form-close:hover span {\r\n    background-color: var(--pink);\r\n    transition: var(--transition-duration);\r\n}\r\n\r\n.form-close:hover {\r\n    border-color: var(--pink);\r\n    transition: var(--transition-duration);\r\n}\r\n\r\n.btn-form {\r\n    display: inline-block;\r\n    width: 214px;\r\n    height: 40px;\r\n    border-radius: var(--border-radius);\r\n    font-family: 'Saira', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    color: var(--blue);\r\n    background-color: var(--pink);\r\n    z-index: 20;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-form:active {\r\n    color: var(--pink);\r\n    background-color: var(--blue);\r\n}\r\n\r\n.connection__feedback-text {\r\n    color: var(--dark-blue);\r\n    line-height: 30px;\r\n    text-align: center;\r\n    margin: 50px;\r\n    font-size: 20px;\r\n    font-family: 'Saira', sans-serif;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_footer.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_footer.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.wrapper-footer {
    margin-top: 4.166vw;
    border: 1px solid var(--color-dark-blue-footer);
    font-size: 20px;
    color: var(--color-dark-blue-footer);
}

.wrapper-contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-dark-blue-footer);
}

.wrapper-contact>div:nth-child(1) {
    width: 42%;
}

.wrapper-contact>div:nth-child(2) {
    width: 29%;
    display: flex;
    justify-content: center;
}

.wrapper-contact>div:nth-child(3) {
    width: 29%;
    display: flex;
    justify-content: center;
}

.address-footer {
    max-height: 8.072vw;
    font-style: normal;
    text-align: center;
    font-size: clamp(15px, 1.041vw, 20px);
}

.footer-link-telephone {
    white-space: nowrap;
    font-size: clamp(15px, 1.041vw, 20px);
}

.footer-link-telephone:hover {
    color: var(--color-light-blue);
    transition-duration: 0.5s;
}

.title-footer {
    display: block;
    text-align: center;
    font-family: 'Saira', sans-serif;
    font-weight: 900;
    font-size: 6.666vw;
    letter-spacing: 0.520vw;
    color: var(--color-light-green);
}

.btn-footer {
    position: relative;
    font-size: clamp(15px, 1.041vw, 20px);
    min-width: 16.40vw;
    min-height: 155px;
    color: var(--color-blue);
    border-radius: 0;
    text-align: center;
    transition: 0.9s;
    cursor: pointer;
    z-index: 0;
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
    border: 1px solid var(--color-dark-blue-footer);
    transform: scale(1.2, 1.2);
}

.btn-footer:active {
    background-color: var(--color-dark-blue-footer);
    color: var(--color-light-blue);
}

.btn-footer:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}`, "",{"version":3,"sources":["webpack://./src/style/blocks/main_page_footer.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,+CAA+C;IAC/C,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,sDAAsD;AAC1D;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,qCAAqC;IACrC,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,UAAU;IACV,UAAU;IACV,gBAAgB;IAChB,+CAA+C;IAC/C,0BAA0B;AAC9B;;AAEA;IACI,+CAA+C;IAC/C,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,sBAAsB;AAC1B","sourcesContent":[".wrapper-footer {\r\n    margin-top: 4.166vw;\r\n    border: 1px solid var(--color-dark-blue-footer);\r\n    font-size: 20px;\r\n    color: var(--color-dark-blue-footer);\r\n}\r\n\r\n.wrapper-contact {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid var(--color-dark-blue-footer);\r\n}\r\n\r\n.wrapper-contact>div:nth-child(1) {\r\n    width: 42%;\r\n}\r\n\r\n.wrapper-contact>div:nth-child(2) {\r\n    width: 29%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.wrapper-contact>div:nth-child(3) {\r\n    width: 29%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.address-footer {\r\n    max-height: 8.072vw;\r\n    font-style: normal;\r\n    text-align: center;\r\n    font-size: clamp(15px, 1.041vw, 20px);\r\n}\r\n\r\n.footer-link-telephone {\r\n    white-space: nowrap;\r\n    font-size: clamp(15px, 1.041vw, 20px);\r\n}\r\n\r\n.footer-link-telephone:hover {\r\n    color: var(--color-light-blue);\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n.title-footer {\r\n    display: block;\r\n    text-align: center;\r\n    font-family: 'Saira', sans-serif;\r\n    font-weight: 900;\r\n    font-size: 6.666vw;\r\n    letter-spacing: 0.520vw;\r\n    color: var(--color-light-green);\r\n}\r\n\r\n.btn-footer {\r\n    position: relative;\r\n    font-size: clamp(15px, 1.041vw, 20px);\r\n    min-width: 16.40vw;\r\n    min-height: 155px;\r\n    color: var(--color-blue);\r\n    border-radius: 0;\r\n    text-align: center;\r\n    transition: 0.9s;\r\n    cursor: pointer;\r\n    z-index: 0;\r\n}\r\n\r\n.btn-footer::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    transition: 0.6s;\r\n}\r\n\r\n.btn-footer:hover::before {\r\n    opacity: 0;\r\n    transform: scale(0.6, 0.6);\r\n}\r\n\r\n.btn-footer::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: 0.6s;\r\n    border: 1px solid var(--color-dark-blue-footer);\r\n    transform: scale(1.2, 1.2);\r\n}\r\n\r\n.btn-footer:active {\r\n    background-color: var(--color-dark-blue-footer);\r\n    color: var(--color-light-blue);\r\n}\r\n\r\n.btn-footer:hover::after {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_header.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/blocks/main_page_header.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/* * {
    border: 1px solid red;
} */

.header {
    position: fixed;
    left: 0;
    right: 0;
    min-height: 150px;
    padding-top: 40px;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(var(--color-light-green), rgba(0, 0, 0, 0));
    z-index: 10;
}

.header__wrapper_menu {
    display: flex;
    justify-content: space-between;
}

.header__menu-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    min-width: 115px;
    min-height: 40px;
    color: var(--color-light-blue);
    border-radius: var(--border-radius);
    cursor: pointer;
    text-transform: uppercase;
    transition: .9s ease;
}


.header__menu-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: var(--color-light-blue);
    opacity: 15%;
    transition: all .6s ease;
    border-radius: var(--border-radius);
}

.header__menu-btn:hover::before {
    opacity: 0;
    transform: scale(0.6, 0.6);
}

.header__menu-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all .6s ease;
    border: 1px solid var(--color-light-blue);
    transform: scale(1.2, 1.2);
    border-radius: 10px;
}

.header__menu-btn:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}

.header__menu-btn:active {
    background-color: var(--color-light-green);
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
    background-color: var(--color-light-blue);
    border-radius: var(--border-radius);
}

.bar:nth-child(2) {
    transform: translateX(5px);
}

.header__menu {
    position: relative;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
}

.header__link_contact {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 43px;
    font-family: "Inter 18pt", serif;
    text-transform: uppercase;
    font-size: 14px;
    color: #253466;
    color: var(--color-dark-blue, #253466);
}

.header__link_contact:hover {
    color: var(--color-light-green);
}

.logo {
    width: 184px;
    height: 89px;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    color: var(--color-white, #fff);
}

.mr-67 {
    margin-right: 67px;
}

.popup-fade::before {
    content: "";
    background: #000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    opacity: .8;
    z-index: 1;
}

.popup {
    position: fixed;
    display: flex;
    top: 0;
    width: 0;
    height: 100%;
    transition: width 1s ease;
    height: 100%;
    transition: width 1s ease;
    background: #fff;
    z-index: 1;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--color-light-blue);
}

.popup__menu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px 20px 0px;
    margin-left: 70px;
    text-align: left;
    width: 35%;
    min-width: 450px;
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
    color: var(--color-white);
}

.title-menu span:nth-child(2) {
    margin-left: 80px;
}

.nav {
    margin-top: 50px;
}

.header__list {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.header__list-item a {
    font-family: "Overpass", sans-serif;
    display: block;
    font-weight: 400;
    font-size: 30px;
    text-transform: uppercase;
    color: var(--color-blue);
    transition: var(--transition-duration);
}

.header__list-item a:hover {
    color: var(--color-pink);
}

.header__menu-popup-button {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    margin-right: 50px;
    font-size: 20px;
    font-weight: 400;
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
    border: 1px solid var(--color-blue);
    border-radius: 100%;
    cursor: pointer;
}

.menu-close span {
    display: inline-block;
    width: 50px;
    height: 3px;
    background-color: var(--color-blue);
}

.menu-close span:nth-child(1) {
    transform: rotate(45deg) translate(2px);
}

.menu-close span:nth-child(2) {
    transform: rotate(-45deg) translate(2px);
}

.menu-close:hover span {
    background-color: var(--color-pink);
    transition: var(--transition-duration);
}

.menu-close:hover {
    border-color: var(--color-pink);
    transition: var(--transition-duration);
}

.image-container.show {
    display: flex;
    width: 100%;
    height: 100vh;
    transition: width 1s ease;
}

.popup__img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

.open {
    left: 0;
    width: 60%;
    transition: width 1s ease;
}

.z0 {
    z-index: 0;
}

.pt {
    padding-top: 7px;
}

.text {
    color: var(--color-blue);
}
`, "",{"version":3,"sources":["webpack://./src/style/blocks/main_page_header.css"],"names":[],"mappings":"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","sourcesContent":["/* * {\r\n    border: 1px solid red;\r\n} */\r\n\r\n.header {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    min-height: 150px;\r\n    padding-top: 40px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    background-image: linear-gradient(var(--color-light-green), rgba(0, 0, 0, 0));\r\n    z-index: 10;\r\n}\r\n\r\n.header__wrapper_menu {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header__menu-btn {\r\n    position: relative;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    column-gap: 16px;\r\n    min-width: 115px;\r\n    min-height: 40px;\r\n    color: var(--color-light-blue);\r\n    border-radius: var(--border-radius);\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    transition: .9s ease;\r\n}\r\n\r\n\r\n.header__menu-btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    background-color: var(--color-light-blue);\r\n    opacity: 15%;\r\n    transition: all .6s ease;\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.header__menu-btn:hover::before {\r\n    opacity: 0;\r\n    transform: scale(0.6, 0.6);\r\n}\r\n\r\n.header__menu-btn::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: all .6s ease;\r\n    border: 1px solid var(--color-light-blue);\r\n    transform: scale(1.2, 1.2);\r\n    border-radius: 10px;\r\n}\r\n\r\n.header__menu-btn:hover::after {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n}\r\n\r\n.header__menu-btn:active {\r\n    background-color: var(--color-light-green);\r\n}\r\n\r\n.hamburger {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 4px;\r\n}\r\n\r\n.bar {\r\n    display: block;\r\n    width: 18px;\r\n    height: 2px;\r\n    background-color: var(--color-light-blue);\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.bar:nth-child(2) {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.header__menu {\r\n    position: relative;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.header__link_contact {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 43px;\r\n    font-family: \"Inter 18pt\", serif;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    color: #253466;\r\n    color: var(--color-dark-blue, #253466);\r\n}\r\n\r\n.header__link_contact:hover {\r\n    color: var(--color-light-green);\r\n}\r\n\r\n.logo {\r\n    width: 184px;\r\n    height: 89px;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: #fff;\r\n    color: var(--color-white, #fff);\r\n}\r\n\r\n.mr-67 {\r\n    margin-right: 67px;\r\n}\r\n\r\n.popup-fade::before {\r\n    content: \"\";\r\n    background: #000;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    opacity: .8;\r\n    z-index: 1;\r\n}\r\n\r\n.popup {\r\n    position: fixed;\r\n    display: flex;\r\n    top: 0;\r\n    width: 0;\r\n    height: 100%;\r\n    transition: width 1s ease;\r\n    height: 100%;\r\n    transition: width 1s ease;\r\n    background: #fff;\r\n    z-index: 1;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    background-color: var(--color-light-blue);\r\n}\r\n\r\n.popup__menu-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 0 15px 20px 0px;\r\n    margin-left: 70px;\r\n    text-align: left;\r\n    width: 35%;\r\n    min-width: 450px;\r\n}\r\n\r\n.title-menu {\r\n    margin-top: 64px;\r\n}\r\n\r\n.title-menu span {\r\n    font-family: \"Saira\", sans-serif;\r\n    display: block;\r\n    line-height: 1;\r\n    font-style: italic;\r\n    font-weight: 800;\r\n    font-size: 48px;\r\n    text-transform: uppercase;\r\n    color: var(--color-white);\r\n}\r\n\r\n.title-menu span:nth-child(2) {\r\n    margin-left: 80px;\r\n}\r\n\r\n.nav {\r\n    margin-top: 50px;\r\n}\r\n\r\n.header__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n}\r\n\r\n.header__list-item a {\r\n    font-family: \"Overpass\", sans-serif;\r\n    display: block;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    color: var(--color-blue);\r\n    transition: var(--transition-duration);\r\n}\r\n\r\n.header__list-item a:hover {\r\n    color: var(--color-pink);\r\n}\r\n\r\n.header__menu-popup-button {\r\n    width: 200px;\r\n    height: 40px;\r\n    margin-top: 30px;\r\n    margin-right: 50px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.menu-close {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    left: 400px;\r\n    top: 15px;\r\n    width: 100px;\r\n    aspect-ratio: 1;\r\n    border: 1px solid var(--color-blue);\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-close span {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 3px;\r\n    background-color: var(--color-blue);\r\n}\r\n\r\n.menu-close span:nth-child(1) {\r\n    transform: rotate(45deg) translate(2px);\r\n}\r\n\r\n.menu-close span:nth-child(2) {\r\n    transform: rotate(-45deg) translate(2px);\r\n}\r\n\r\n.menu-close:hover span {\r\n    background-color: var(--color-pink);\r\n    transition: var(--transition-duration);\r\n}\r\n\r\n.menu-close:hover {\r\n    border-color: var(--color-pink);\r\n    transition: var(--transition-duration);\r\n}\r\n\r\n.image-container.show {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100vh;\r\n    transition: width 1s ease;\r\n}\r\n\r\n.popup__img {\r\n    width: 100%;\r\n    height: 100vh;\r\n    object-fit: cover;\r\n}\r\n\r\n.open {\r\n    left: 0;\r\n    width: 60%;\r\n    transition: width 1s ease;\r\n}\r\n\r\n.z0 {\r\n    z-index: 0;\r\n}\r\n\r\n.pt {\r\n    padding-top: 7px;\r\n}\r\n\r\n.text {\r\n    color: var(--color-blue);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/fonts/Montserrat-Black.woff":
/*!*****************************************!*\
  !*** ./src/fonts/Montserrat-Black.woff ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Montserrat-Black.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Black.woff2":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Black.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Montserrat-Black.woff2";

/***/ }),

/***/ "./src/fonts/Overpass-Black.woff":
/*!***************************************!*\
  !*** ./src/fonts/Overpass-Black.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Overpass-Black.woff";

/***/ }),

/***/ "./src/fonts/Overpass-Black.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Overpass-Black.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Overpass-Black.woff2";

/***/ }),

/***/ "./src/fonts/Overpass-Regular.woff":
/*!*****************************************!*\
  !*** ./src/fonts/Overpass-Regular.woff ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Overpass-Regular.woff";

/***/ }),

/***/ "./src/fonts/Overpass-Regular.woff2":
/*!******************************************!*\
  !*** ./src/fonts/Overpass-Regular.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Overpass-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Overpass-SemiBold.woff":
/*!******************************************!*\
  !*** ./src/fonts/Overpass-SemiBold.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Overpass-SemiBold.woff";

/***/ }),

/***/ "./src/fonts/Overpass-SemiBold.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/Overpass-SemiBold.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Overpass-SemiBold.woff2";

/***/ }),

/***/ "./src/fonts/Saira-Black.woff":
/*!************************************!*\
  !*** ./src/fonts/Saira-Black.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-Black.woff";

/***/ }),

/***/ "./src/fonts/Saira-Black.woff2":
/*!*************************************!*\
  !*** ./src/fonts/Saira-Black.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-Black.woff2";

/***/ }),

/***/ "./src/fonts/Saira-ExtraBoldItalic.woff":
/*!**********************************************!*\
  !*** ./src/fonts/Saira-ExtraBoldItalic.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-ExtraBoldItalic.woff";

/***/ }),

/***/ "./src/fonts/Saira-ExtraBoldItalic.woff2":
/*!***********************************************!*\
  !*** ./src/fonts/Saira-ExtraBoldItalic.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-ExtraBoldItalic.woff2";

/***/ }),

/***/ "./src/fonts/Saira-Regular.woff":
/*!**************************************!*\
  !*** ./src/fonts/Saira-Regular.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-Regular.woff";

/***/ }),

/***/ "./src/fonts/Saira-Regular.woff2":
/*!***************************************!*\
  !*** ./src/fonts/Saira-Regular.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Saira-SemiBold.woff":
/*!***************************************!*\
  !*** ./src/fonts/Saira-SemiBold.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-SemiBold.woff";

/***/ }),

/***/ "./src/fonts/Saira-SemiBold.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Saira-SemiBold.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Saira-SemiBold.woff2";

/***/ }),

/***/ "./src/img/advantages/ecology_main.webp":
/*!**********************************************!*\
  !*** ./src/img/advantages/ecology_main.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ecology_main.webp";

/***/ }),

/***/ "./src/img/advantages/infrastructure.webp":
/*!************************************************!*\
  !*** ./src/img/advantages/infrastructure.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/infrastructure.webp";

/***/ }),

/***/ "./src/img/advantages/roads_main.webp":
/*!********************************************!*\
  !*** ./src/img/advantages/roads_main.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/roads_main.webp";

/***/ }),

/***/ "./src/img/advantages/sport_main.webp":
/*!********************************************!*\
  !*** ./src/img/advantages/sport_main.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sport_main.webp";

/***/ }),

/***/ "./src/img/apartments/apart-1.webp":
/*!*****************************************!*\
  !*** ./src/img/apartments/apart-1.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/apart-1.webp";

/***/ }),

/***/ "./src/img/apartments/apart-2.webp":
/*!*****************************************!*\
  !*** ./src/img/apartments/apart-2.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/apart-2.webp";

/***/ }),

/***/ "./src/img/apartments/apart-3.webp":
/*!*****************************************!*\
  !*** ./src/img/apartments/apart-3.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/apart-3.webp";

/***/ }),

/***/ "./src/img/apartments/apart-4.webp":
/*!*****************************************!*\
  !*** ./src/img/apartments/apart-4.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/apart-4.webp";

/***/ }),

/***/ "./src/img/interior/interior-1.webp":
/*!******************************************!*\
  !*** ./src/img/interior/interior-1.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/interior-1.webp";

/***/ }),

/***/ "./src/img/interior/interior-2.webp":
/*!******************************************!*\
  !*** ./src/img/interior/interior-2.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/interior-2.webp";

/***/ }),

/***/ "./src/img/interior/interior-3.webp":
/*!******************************************!*\
  !*** ./src/img/interior/interior-3.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/interior-3.webp";

/***/ }),

/***/ "./src/img/interior/interior-4.webp":
/*!******************************************!*\
  !*** ./src/img/interior/interior-4.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/interior-4.webp";

/***/ }),

/***/ "./src/img/main-bg/body.webp":
/*!***********************************!*\
  !*** ./src/img/main-bg/body.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/body.webp";

/***/ }),

/***/ "./src/img/main-bg/menu-bg.webp":
/*!**************************************!*\
  !*** ./src/img/main-bg/menu-bg.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/menu-bg.webp";

/***/ }),

/***/ "./src/img/main-bg/promo.webp":
/*!************************************!*\
  !*** ./src/img/main-bg/promo.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/promo.webp";

/***/ })

}]);
//# sourceMappingURL=src_js_main_page_fallMenu_js-src_js_main_page_feedback_js-src_js_main_page_preloader_js-node_-c82f4d.bundle.js.map