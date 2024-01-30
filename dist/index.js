/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Inter.ttf */ \"./src/assets/fonts/Inter.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/list-marker.svg */ \"./src/assets/img/list-marker.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Inter\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  font-style: normal;\n  font-weight: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: #fff;\n}\n\nhtml {\n  width: 100%;\n  overflow-x: hidden;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  font-family: \"Inter\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 12px;\n  background: rgb(54, 96, 62);\n  background: linear-gradient(160deg, rgb(54, 96, 62) 0%, rgb(30, 38, 44) 100%);\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nli {\n  list-style: none;\n}\nli:before {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  margin-right: 7px;\n}\n\nbutton {\n  position: relative;\n  padding: 12px 20px;\n  background: none;\n  border: 2px solid #fff;\n  border-radius: 7px;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\nbutton:hover {\n  box-shadow: inset 300px 0 0 0 #BC4749;\n  border: 2px solid #D66567;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.open-burger-btn {\n  display: none;\n  position: fixed;\n  left: 15px;\n  top: 15px;\n  width: 50px;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  transition: 0.3s ease;\n  z-index: 100;\n}\n.open-burger-btn span {\n  position: relative;\n  width: 70%;\n  height: 3px;\n  background: #fff;\n  border-radius: 3px;\n  transition: 0.3s ease;\n}\n.open-burger-btn span::before, .open-burger-btn span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  border-radius: 3px;\n  background: #fff;\n  transition: 0.3s ease;\n}\n.open-burger-btn span::before {\n  bottom: 250%;\n}\n.open-burger-btn span::after {\n  top: 275%;\n}\n\n.close-burger-btn {\n  background: none;\n}\n.close-burger-btn span {\n  background: transparent;\n}\n.close-burger-btn span::before {\n  left: 0;\n  top: 0;\n  transform: rotate(45deg);\n}\n.close-burger-btn span::after {\n  left: 0;\n  top: 0;\n  transform: rotate(-45deg);\n}\n\n.overlay {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9;\n  transition: 0.3s ease;\n  display: none;\n}\n\n.overlay--visible {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.burger-menu {\n  position: fixed;\n  display: block;\n  left: -60vw;\n  top: 0;\n  width: 60vw;\n  height: 100vh;\n  margin: 0;\n  padding: 30px;\n  padding-top: 70px;\n  background: #6A994E;\n  z-index: 10;\n  transition: 0.3s ease;\n}\n.burger-menu .burger-sign-btns {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.burger-menu .burger-sign-btns .burger__signup-btn {\n  padding: 5px 10px;\n}\n.burger-menu .burger-nav {\n  display: block;\n}\n.burger-menu .burger-nav__link {\n  display: block;\n}\n.burger-menu .burger-nav__link + .burger-nav__link {\n  margin-top: 15px;\n}\n.burger-menu--visible {\n  left: 0;\n}\n\nheader {\n  margin: 0 auto;\n  margin-top: 15px;\n  width: 90%;\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader .header-links {\n  width: 50%;\n  display: flex;\n  align-items: center;\n}\nheader .header-logo {\n  display: flex;\n  align-items: center;\n  padding-right: 15%;\n}\nheader .header-logo__img {\n  width: 40px;\n  height: auto;\n  margin-right: 5px;\n}\nheader .header-logo__text {\n  position: relative;\n  font-weight: 800;\n  text-wrap: nowrap;\n}\nheader .header-logo__text:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  height: 1px;\n  width: 100%;\n  background: #fff;\n  transition: 0.2s ease;\n}\nheader .header-logo:hover .header-logo__text:before {\n  left: 50%;\n  width: 0;\n}\nheader .header-nav {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nheader .header-nav__link {\n  opacity: 0.8;\n  transition: 0.2s ease;\n}\nheader .header-nav__link:hover {\n  opacity: 1;\n  font-weight: 700;\n  text-decoration: underline;\n  margin-top: -1px;\n}\nheader .header__login-link {\n  opacity: 0.8;\n  transition: 0.2s ease;\n}\nheader .header__login-link:hover {\n  opacity: 1;\n  font-weight: 700;\n}\nheader .header__signup-btn {\n  position: relative;\n  margin-left: 15px;\n  padding: 10px 20px;\n  background: none;\n  border: 2px solid #fff;\n  overflow: hidden;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\nheader .header__signup-btn:hover {\n  box-shadow: inset 100px 0 0 0 #BC4749;\n  border: 2px solid #D66567;\n}\n\n#main {\n  padding: 50px 15px;\n  overflow-x: hidden;\n}\n#main .main__title {\n  position: relative;\n  margin-bottom: 68px;\n  font-size: 40px;\n  text-align: center;\n}\n#main .main__title img {\n  position: absolute;\n  user-select: none;\n}\n#main .main__title .svg-left {\n  left: 0;\n  top: 0;\n  transform: translate(-21%, -10%);\n  width: 30vw;\n}\n#main .main__title .svg-right {\n  right: 0;\n  top: 0;\n  transform: translate(21%, -15%);\n  width: 30vw;\n}\n#main .main__title .svg-bottom {\n  left: 50%;\n  top: 60%;\n  transform: translate(-50%, 0);\n  width: 100vw;\n}\n#main .main__title .svg-bottom path {\n  width: 110vw;\n}\n#main .main-cards {\n  width: 75%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n#main .main-cards .main-card-item {\n  width: 333px;\n  height: 592px;\n  padding-bottom: 38px;\n  background: #6A994E;\n  border-radius: 11px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms {\n  padding: 37px 60px 27px 60px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  margin-bottom: 20px;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms__title {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms-price {\n  position: relative;\n  padding-left: 5px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  margin-bottom: 15px;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms-price__valute-logo {\n  position: absolute;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms-price__valute-logo:hover {\n  font-weight: 800;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms-price__sum {\n  position: relative;\n  font-size: 37px;\n  font-weight: 800;\n  filter: blur(10px);\n  transition: 0.3s ease;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms-price__period {\n  cursor: pointer;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms-price__period:hover {\n  font-weight: 800;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-terms__description {\n  font-size: 12px;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-features {\n  padding: 0 60px;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-features__title {\n  font-size: 15px;\n  margin-bottom: 10px;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-features__subscription-title {\n  font-style: 13px;\n  margin-bottom: 24px;\n}\n#main .main-cards .main-card-item .card-item-text-block .card-item-features__list-item + .card-item-features__list-item {\n  margin-top: 15px;\n}\n#main .main-cards .main-card-item .main-card-item-btn-block {\n  padding: 0 60px;\n}\n#main .main-cards .main-card-item .main-card-item-btn-block .main-card-item__subscribe-btn {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#main .main-cards .main-card-item .main-card-item-btn-block .main-card-item__subscribe-btn span {\n  position: absolute;\n  right: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  transition: 0.3s ease;\n  opacity: 0;\n}\n#main .main-cards .main-card-item .main-card-item-btn-block .main-card-item__subscribe-btn:hover span {\n  opacity: 1;\n}\n#main .main-cards .main-basic-card {\n  margin-right: -15px;\n}\n#main .main-cards .main-proffessional-card {\n  height: 600px;\n  background: #1D252B;\n  margin-top: -30px;\n  z-index: 10;\n}\n#main .main-cards .main-proffessional-card .card-item-terms {\n  border: none !important;\n}\n#main .main-cards .main-rocketship-card {\n  margin-left: -15px;\n}\n\n@media screen and (max-width: 1100px) {\n  #header {\n    width: 100%;\n  }\n  #header .header-links {\n    width: 70%;\n  }\n  .main-cards {\n    width: 100% !important;\n  }\n}\n@media screen and (max-width: 850px) {\n  .main-cards {\n    display: block !important;\n  }\n  .main-cards .main-card-item {\n    margin: 0 auto !important;\n  }\n  .main-cards .main-card-item + .main-card-item {\n    margin-top: 30px !important;\n  }\n}\n@media screen and (max-width: 650px) {\n  .open-burger-btn {\n    display: flex;\n  }\n  #header {\n    display: none;\n  }\n  #main {\n    padding-top: 100px !important;\n  }\n}\n@media screen and (max-width: 450px) {\n  .main-card-item {\n    height: fit-content;\n    width: 100% !important;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test-task/./src/css/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://test-task/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://test-task/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://test-task/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://test-task/./src/css/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test-task/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://test-task/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://test-task/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://test-task/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://test-task/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://test-task/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/logo.svg */ \"./src/assets/img/logo.svg\");\n/* harmony import */ var _assets_img_bg_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/bg-left.svg */ \"./src/assets/img/bg-left.svg\");\n/* harmony import */ var _assets_img_bg_right_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/bg-right.svg */ \"./src/assets/img/bg-right.svg\");\n/* harmony import */ var _assets_img_bg_bt_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/bg-bt.svg */ \"./src/assets/img/bg-bt.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst valuteIconsArr = document.querySelectorAll(\".card-item-terms-price__valute-logo\"),\r\n    sumArr = document.querySelectorAll(\".card-item-terms-price__sum\"),\r\n    periodArr = document.querySelectorAll(\".card-item-terms-price__period\");\r\nlet currentPeriod = \"month\",\r\n    currentValute = \"usd\";\r\n\r\nwindow.onload = () => {\r\n    setTimeout(() => sumArr.forEach(item => { item.style.filter = \"blur(0)\" }), 300)\r\n}\r\n\r\ndocument.querySelector(\".open-burger-btn\").addEventListener(\"click\", () => {\r\n    document.querySelector(\".open-burger-btn\").classList.toggle(\"close-burger-btn\");\r\n    document.querySelector(\".burger-menu\").classList.toggle(\"burger-menu--visible\");\r\n    document.querySelector(\".overlay\").classList.toggle(\"d-block\");\r\n    setTimeout(() => document.querySelector(\".overlay\").classList.toggle(\"overlay--visible\"), 0);\r\n    document.body.classList.toggle(\"overflow-hidden\");\r\n})\r\n\r\ndocument.querySelector(\".overlay\").addEventListener(\"click\", () => {\r\n    document.querySelector(\".open-burger-btn\").classList.toggle(\"close-burger-btn\");\r\n    document.querySelector(\".burger-menu\").classList.toggle(\"burger-menu--visible\");\r\n    document.querySelector(\".overlay\").classList.toggle(\"d-block\");\r\n    setTimeout(() => document.querySelector(\".overlay\").classList.toggle(\"overlay--visible\"), 0);\r\n});\r\n\r\ndocument.querySelector(\".overlay\").onscroll = (e) => e.preventDefault();\r\n\r\nperiodArr.forEach(periodItem => {\r\n    periodItem.addEventListener(\"click\", () => {\r\n        if (currentPeriod === \"month\") {\r\n            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent / 30));\r\n            periodArr.forEach(item => item.textContent = \"/Day\");\r\n            currentPeriod = \"day\";\r\n        } else if (currentPeriod === \"day\") {\r\n            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 30));\r\n            periodArr.forEach(item => item.textContent = \"/Month\");\r\n            currentPeriod = \"month\";\r\n        }\r\n    })\r\n})\r\n\r\nvaluteIconsArr.forEach(valuteItem => {\r\n    valuteItem.addEventListener(\"click\", () => {\r\n        if (currentValute === \"usd\") {\r\n            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 0.9219));\r\n            valuteIconsArr.forEach(item => item.textContent = \"\\u20AC\");\r\n            currentValute = \"eur\";\r\n        } else if (currentValute === \"eur\") {\r\n            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 97.0945));\r\n            valuteIconsArr.forEach(item => item.textContent = \"\\u20BD\");\r\n            currentValute = \"rub\";\r\n        }\r\n        else if (currentValute === \"rub\") {\r\n            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 0.0112));\r\n            valuteIconsArr.forEach(item => item.textContent = \"\\u0024\");\r\n            currentValute = \"usd\";\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://test-task/./src/index.js?");

/***/ }),

/***/ "./src/assets/fonts/Inter.ttf":
/*!************************************!*\
  !*** ./src/assets/fonts/Inter.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fonts/Inter.ttf\";\n\n//# sourceURL=webpack://test-task/./src/assets/fonts/Inter.ttf?");

/***/ }),

/***/ "./src/assets/img/bg-bt.svg":
/*!**********************************!*\
  !*** ./src/assets/img/bg-bt.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/bg-bt.svg\";\n\n//# sourceURL=webpack://test-task/./src/assets/img/bg-bt.svg?");

/***/ }),

/***/ "./src/assets/img/bg-left.svg":
/*!************************************!*\
  !*** ./src/assets/img/bg-left.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/bg-left.svg\";\n\n//# sourceURL=webpack://test-task/./src/assets/img/bg-left.svg?");

/***/ }),

/***/ "./src/assets/img/bg-right.svg":
/*!*************************************!*\
  !*** ./src/assets/img/bg-right.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/bg-right.svg\";\n\n//# sourceURL=webpack://test-task/./src/assets/img/bg-right.svg?");

/***/ }),

/***/ "./src/assets/img/list-marker.svg":
/*!****************************************!*\
  !*** ./src/assets/img/list-marker.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/list-marker.svg\";\n\n//# sourceURL=webpack://test-task/./src/assets/img/list-marker.svg?");

/***/ }),

/***/ "./src/assets/img/logo.svg":
/*!*********************************!*\
  !*** ./src/assets/img/logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/logo.svg\";\n\n//# sourceURL=webpack://test-task/./src/assets/img/logo.svg?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 			"mainScript": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;