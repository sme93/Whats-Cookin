/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  height: 100vh;\n  width: 100%; }\n\nbody {\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  margin: 0;\n  height: 100vh;\n  width: 100%; }\n\n/* REMOVE DEFAULT BUTTON STYLES */\nbutton {\n  background: transparent;\n  box-shadow: 0px 0px 0px transparent;\n  border: 0px solid transparent;\n  text-shadow: 0px 0px 0px transparent; }\n\nbutton:hover {\n  background: transparent;\n  box-shadow: 0px 0px 0px transparent;\n  border: 0px solid transparent;\n  text-shadow: 0px 0px 0px transparent;\n  cursor: pointer; }\n\nbutton:active {\n  outline: none;\n  border: none; }\n\nbutton:focus {\n  outline: 0; }\n\n.hidden {\n  display: none; }\n\n/* BUTTON STYLES */\n.button {\n  font-size: 16px;\n  font-family: \"Playfair Display\", serif;\n  letter-spacing: 2px;\n  margin-top: 10px;\n  padding: 9px;\n  text-transform: uppercase; }\n\n.button:hover {\n  border-bottom: 2px solid #3cb371; }\n\n.button:active {\n  border-bottom: 2px solid #3cb371; }\n\n.button:focus {\n  border-bottom: 2px solid #3cb371; }\n\n/* NAV BAR */\n.nav-bar {\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 3px solid #f0f0f0;\n  background: white;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 85px; }\n\n.greeting-header {\n  display: flex;\n  flex-direction: row;\n  font-size: 24px;\n  padding: 10px; }\n\n.welcome-icon {\n  height: 77px;\n  margin-left: 50px; }\n\n.user-greeting {\n  padding: 20px;\n  font-size: 24px;\n  color: #3cb371; }\n\n.nav-buttons {\n  padding: 20px;\n  align-items: center; }\n\n.my-favorites,\n.recipes-to-cook {\n  font-size: 16px;\n  margin: 10px 20px;\n  font-family: \"Playfair Display\", serif;\n  text-transform: uppercase;\n  letter-spacing: 2px; }\n\n.recipes-to-cook:hover,\n.my-favorites:hover {\n  border-bottom: 2px solid #3cb371;\n  cursor: pointer; }\n\n/* HEADER */\n.main-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 40px 0px 20px 0px; }\n\nh1 {\n  font-size: 60px;\n  font-weight: 900;\n  letter-spacing: 3px;\n  margin: 0px; }\n\nh2 {\n  font-size: 24px;\n  font-style: italic;\n  margin: 0px; }\n\n/* MAIN */\n.main-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100%; }\n\n.all-recipes {\n  overflow-y: scroll;\n  margin: 0px 40px 70px 40px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(200px, 1fr) 1rem minmax(200px, 1fr) 1rem minmax(200px, 1fr) 1rem minmax(200px, 1fr);\n  grid-template-columns: repeat(4, minmax(200px, 1fr));\n  gap: 1rem; }\n\n.no-recipes {\n  text-align: center;\n  width: 342px;\n  margin-left: 20px; }\n\n/* RECIPE CARD */\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  width: 240px;\n  margin: 30px; }\n\n.recipe-card-bottom {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0px;\n  min-height: 72px; }\n\n.recipe-img {\n  height: 200px;\n  position: relative; }\n\n.recipe-img:hover {\n  cursor: pointer; }\n\n.add-to-cook-icon,\n.favorite-icon {\n  height: 40px; }\n\n.favorite-icon:hover,\n.add-to-cook-icon:hover {\n  transform: scale(1.1);\n  cursor: pointer; }\n\n.view-recipe-text {\n  margin: 0px 0px 5px 0px;\n  height: 60px;\n  text-align: center;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black; }\n\n.active {\n  background-image: url(https://img.icons8.com/fluent/48/000000/hearts.png);\n  height: 48px; }\n\n/* RECIPE MODAL */\n.modal {\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  display: flex;\n  display: none; }\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 25px;\n  border: 1px solid #888;\n  width: 60%;\n  height: 80%;\n  overflow-y: scroll;\n  box-shadow: 0px 7px 29px 0px black; }\n\n.modal-details {\n  display: flex;\n  flex-direction: row; }\n\n.x {\n  display: flex;\n  justify-content: space-between; }\n\n.x-icon {\n  height: 40px;\n  width: 40px; }\n\n.modal-header {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  font-size: 32px;\n  justify-content: space-around;\n  margin: 30px; }\n\n.modal-img {\n  box-shadow: 6px 5px 9px lightgray;\n  height: 200px;\n  object-fit: cover; }\n\n.all-modal-ing {\n  border: 2px solid lightgray;\n  display: flex;\n  flex-direction: column;\n  width: 50%; }\n\n.modal-ingredients {\n  display: flex;\n  flex-direction: column;\n  width: 50%; }\n\n.modal-instructions {\n  width: 50%; }\n\n.ingredients {\n  margin: 0px 0px 10px 20px;\n  width: max-content; }\n\n.instructions {\n  margin: 0px 20px 15px 20px; }\n\n.ingredient-header,\n.cost-header,\n.instructions-header {\n  margin: 20px; }\n\n.modal-cost {\n  display: flex;\n  margin-top: 35px; }\n\n.total-cost {\n  margin-top: 21px; }\n\n.modal-icons {\n  display: flex;\n  flex-direction: row;\n  padding-right: 40px; }\n\n.add-to-cook,\n.favorite-heart {\n  padding: 16px;\n  min-height: 62px;\n  min-width: 50px; }\n\n/* ASIDE */\n.filter-by-tag {\n  font-size: 18px;\n  font-style: italic;\n  text-decoration-line: underline; }\n\n.filter-section {\n  border-left: 3px solid #3cb371;\n  display: flex;\n  flex-direction: column;\n  width: 275px;\n  height: 680px;\n  padding: 25px; }\n\n.recipe-tag {\n  color: #333;\n  display: flex;\n  align-items: center;\n  margin: 8px; }\n\n.recipe-tag-input {\n  margin-right: 8px; }\n\n.recipe-tag-input:hover {\n  cursor: pointer; }\n\n.recipe-tag-quantity {\n  color: lightgray;\n  font-size: 14px; }\n\n/* Media-queries */\n@media screen and (max-width: 1330px) {\n  .all-recipes {\n    grid-template-columns: repeat(3, minmax(200px, 1fr)); } }\n\n@media screen and (max-width: 1070px) {\n  .all-recipes {\n    grid-template-columns: repeat(2, minmax(200px, 1fr)); } }\n\n@media screen and (max-width: 820px) {\n  .all-recipes {\n    grid-template-columns: repeat(1, minmax(200px, 1fr)); } }\n\n@media screen and (max-width: 590px) {\n  .main-page {\n    flex-direction: column; }\n  .nav-bar {\n    height: unset; }\n  .header {\n    font-size: 36px; }\n  .recipe-card {\n    margin: auto; }\n  .all-recipes {\n    order: 2; }\n  .filter-section {\n    order: 1;\n    width: unset; }\n  .filter-section form {\n    display: flex;\n    flex-flow: wrap; } }\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  height: 100vh;\n  width: 100%;\n}\n\nbody {\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  margin: 0;\n  height: 100vh;\n  width: 100%;\n}\n\n/* REMOVE DEFAULT BUTTON STYLES */\nbutton {\n  background: transparent;\n  box-shadow: 0px 0px 0px transparent;\n  border: 0px solid transparent;\n  text-shadow: 0px 0px 0px transparent;\n}\n\nbutton:hover {\n  background: transparent;\n  box-shadow: 0px 0px 0px transparent;\n  border: 0px solid transparent;\n  text-shadow: 0px 0px 0px transparent;\n  cursor: pointer;\n}\n\nbutton:active {\n  outline: none;\n  border: none;\n}\n\nbutton:focus {\n  outline: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n/* BUTTON STYLES */\n\n.button {\n  font-size: 16px;\n  font-family: \"Playfair Display\", serif;\n  letter-spacing: 2px;\n  margin-top: 10px;\n  padding: 9px;\n  text-transform: uppercase;\n}\n\n.button:hover {\n  border-bottom: 2px solid #3cb371;\n}\n\n.button:active {\n  border-bottom: 2px solid #3cb371;\n}\n\n.button:focus {\n  border-bottom: 2px solid #3cb371;\n}\n\n/* NAV BAR */\n.nav-bar {\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 3px solid #f0f0f0;\n  background: white;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 85px;\n}\n\n.greeting-header {\n  display: flex;\n  flex-direction: row;\n  font-size: 24px;\n  padding: 10px;\n}\n\n.welcome-icon {\n  height: 77px;\n  margin-left: 50px;\n}\n\n.user-greeting {\n  padding: 20px;\n  font-size: 24px;\n  color: #3cb371;\n}\n\n.nav-buttons {\n  padding: 20px;\n  align-items: center;\n}\n\n.my-favorites,\n.recipes-to-cook {\n  font-size: 16px;\n  margin: 10px 20px;\n  font-family: \"Playfair Display\", serif;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n.recipes-to-cook:hover,\n.my-favorites:hover {\n  border-bottom: 2px solid #3cb371;\n  cursor: pointer;\n}\n\n/* HEADER */\n\n.main-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 40px 0px 20px 0px;\n}\n\nh1 {\n  font-size: 60px;\n  font-weight: 900;\n  letter-spacing: 3px;\n  margin: 0px;\n}\n\nh2 {\n  font-size: 24px;\n  font-style: italic;\n  margin: 0px;\n}\n\n/* MAIN */\n\n.main-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.all-recipes {\n  overflow-y: scroll;\n  margin: 0px 40px 70px 40px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(200px, 1fr) 1rem minmax(200px, 1fr) 1rem\n    minmax(200px, 1fr) 1rem minmax(200px, 1fr);\n  grid-template-columns: repeat(4, minmax(200px, 1fr));\n  gap: 1rem;\n}\n\n.no-recipes {\n  text-align: center;\n  width: 342px;\n  margin-left: 20px;\n}\n/* RECIPE CARD */\n\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  width: 240px;\n  margin: 30px;\n}\n\n.recipe-card-bottom {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0px;\n  min-height: 72px;\n}\n\n.recipe-img {\n  height: 200px;\n  position: relative;\n}\n\n.recipe-img:hover {\n  cursor: pointer;\n}\n\n.add-to-cook-icon,\n.favorite-icon {\n  height: 40px;\n}\n\n.favorite-icon:hover,\n.add-to-cook-icon:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.view-recipe-text {\n  margin: 0px 0px 5px 0px;\n  height: 60px;\n  text-align: center;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n}\n\n.active {\n  background-image: url(https://img.icons8.com/fluent/48/000000/hearts.png);\n  height: 48px;\n}\n\n/* RECIPE MODAL */\n\n.modal {\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  display: flex;\n  display: none;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 25px;\n  border: 1px solid #888;\n  width: 60%;\n  height: 80%;\n  overflow-y: scroll;\n  box-shadow: 0px 7px 29px 0px black;\n}\n\n.modal-details {\n  display: flex;\n  flex-direction: row;\n}\n\n.x {\n  display: flex;\n  justify-content: space-between;\n}\n\n.x-icon {\n  height: 40px;\n  width: 40px;\n}\n\n.modal-header {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  font-size: 32px;\n  justify-content: space-around;\n  margin: 30px;\n}\n\n.modal-img {\n  box-shadow: 6px 5px 9px lightgray;\n  height: 200px;\n  object-fit: cover;\n}\n\n.all-modal-ing {\n  border: 2px solid lightgray;\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n.modal-ingredients {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n.modal-instructions {\n width: 50%;\n}\n\n.ingredients {\n  margin: 0px 0px 10px 20px;\n  width: max-content\n  }\n\n.instructions {\n  margin: 0px 20px 15px 20px;\n}\n\n.ingredient-header,\n.cost-header,\n.instructions-header {\n  margin: 20px;\n}\n\n.modal-cost {\n  display: flex;\n  margin-top: 35px;\n}\n\n.total-cost {\n  margin-top: 21px;\n}\n\n.modal-icons {\n  display: flex;\n  flex-direction: row;\n  padding-right: 40px;\n}\n\n.add-to-cook,\n.favorite-heart {\n  padding: 16px;\n  min-height: 62px;\n  min-width: 50px;\n}\n\n/* ASIDE */\n\n.filter-by-tag {\n  font-size: 18px;\n  font-style: italic;\n  text-decoration-line: underline;\n}\n\n.filter-section {\n  border-left: 3px solid #3cb371;\n  display: flex;\n  flex-direction: column;\n  width: 275px;\n  height: 680px;\n  padding: 25px;\n}\n\n.recipe-tag {\n  color: #333;\n  display: flex;\n  align-items: center;\n  margin: 8px;\n}\n\n.recipe-tag-input {\n  margin-right: 8px;\n}\n\n.recipe-tag-input:hover {\n  cursor: pointer;\n}\n\n.recipe-tag-quantity {\n  color: lightgray;\n  font-size: 14px;\n}\n\n/* Media-queries */\n@media screen and (max-width: 1330px) {\n  .all-recipes {\n    grid-template-columns: repeat(3, minmax(200px, 1fr));\n  }\n}\n\n@media screen and (max-width: 1070px) {\n  .all-recipes {\n    grid-template-columns: repeat(2, minmax(200px, 1fr));\n  }\n}\n\n@media screen and (max-width: 820px) {\n  .all-recipes {\n    grid-template-columns: repeat(1, minmax(200px, 1fr));\n  }\n}\n\n@media screen and (max-width: 590px) {\n  .main-page {\n    flex-direction: column;\n  }\n\n  .nav-bar {\n    height: unset;\n  }\n\n  .header {\n    font-size: 36px;\n  }\n\n  .recipe-card {\n    margin: auto;\n  }\n\n  .all-recipes {\n    order: 2;\n  }\n\n  .filter-section {\n    order: 1;\n    width: unset;\n  }\n\n  .filter-section form {\n    display: flex;\n    flex-flow: wrap;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
const fetchData = () => {
  const userData = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(userData => {
      return userData;
    })

  const ingredientData = fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .then(ingredientData => {
      return ingredientData;
    })

  const recipeData = fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(recipeData => {
      return recipeData;
    })

  return Promise.all([userData, ingredientData, recipeData])
    .then(data => {
      const allData = {};
      allData.users = data[0].usersData;
      allData.ingredients = data[1].ingredientsData;
      allData.recipes = data[2].recipeData;
      return allData;
    })
    .catch(err => console.log('ERROR', err))
}



/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  __findMatchingIngredient(ingredients, targetIngredient) {
    return ingredients.find(ingredient => {
      return ingredient.id === targetIngredient.id;
    });
  }

  calculateCost(ingredientsData) {
    const totalCost = this.ingredients.reduce((acc, ingredient) => {
      const matchingIngredient = this.__findMatchingIngredient(
        ingredientsData,
        ingredient
      );
      acc += matchingIngredient.estimatedCostInCents;
      return acc;
    }, 0) / 100;

    return `$${totalCost}`;
  }

  returnIngredients(ingredientsData) {
    const completeIngredients = this.ingredients.reduce((acc, ingredient) => {
      const matchingIngredient = this.__findMatchingIngredient(
        ingredientsData,
        ingredient
      );
      const mergedIngredient = Object.assign(matchingIngredient, ingredient);
      return [...acc, mergedIngredient];
    }, []);

    return completeIngredients;
  }

  returnInstructions() {
    const numberedInstructions = this.instructions.map(instruction => {
      return `${instruction.number}. ${instruction.instruction}`
    });

    return numberedInstructions;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/classes/RecipeCollection.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeCollection.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class RecipeCollection {
  constructor(allRecipes, allIngredients) {
    this.recipes = allRecipes;
    this.ingredients = allIngredients;
  }

  filterByTag(tags) {
    const recipeMatches = this.recipes.reduce((searchedRecipes, recipe) => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          searchedRecipes.push(recipe)
        }
      });
      return searchedRecipes;
    }, [])
    return [...new Set(recipeMatches)];
  }

  filterByName(input) {
    const recipesWithInput = this.recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(input.toLowerCase())
    });
    return recipesWithInput;
  }

  filterByIngredient(input) {
    const ingredientMatch = this.ingredients.find(ingredient => {
      if (ingredient.name.includes(input.toLowerCase())) {
        return ingredient;
      }
    });
    const recipesWithInput = [];
    this.recipes.forEach(recipe => {
      recipe.ingredients.filter(ingredient => {
        if (ingredient.id === ingredientMatch.id) {
          recipesWithInput.push(recipe);
        }
      });
    });
    return recipesWithInput;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RecipeCollection);


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor({name, id}) {
    this.name = name;
    this.id = id;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    };
  }

  removeFromFavorites(recipe) {
    this.favoriteRecipes = this.favoriteRecipes.filter(favRecipe => {
      if (favRecipe.id !== recipe.id) {
        return favRecipe;
      };
    });
  }

  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    };
  }

  filterByTag(tags) {
    const newFilterTags = typeof tags === "string" ? [tags] : tags;
    let filteredRecipes = [];
    newFilterTags.forEach(tag => {
      this.favoriteRecipes.forEach(recipe => {
        if (recipe.tags.includes(tag)) {
          filteredRecipes.push(recipe)
        };
      });
    });

    return [...new Set(filteredRecipes)];
  }

  findFavorites(nameOrIngredient) {
    const newSearchText = nameOrIngredient.toLowerCase();
    return this.favoriteRecipes.filter(recipe => {
      const stringifiedInstructions = recipe.instructions.map(item => {
        return item.instruction;
      }).join(' ').toLowerCase();

      return recipe.name.toLowerCase().includes(newSearchText) ||
        stringifiedInstructions.includes(newSearchText)
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _src_classes_Recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/classes/Recipe */ "./src/classes/Recipe.js");
/* harmony import */ var _src_classes_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/classes/User */ "./src/classes/User.js");
/* harmony import */ var _src_classes_RecipeCollection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/classes/RecipeCollection */ "./src/classes/RecipeCollection.js");






const allRecipesSection = document.getElementById('allRecipes');
const userName = document.getElementById('userGreeting');
const recipeModal = document.getElementById('modal')
const recipeTags = document.getElementById('recipeTags');
const searchBar = document.getElementById('searchBar');
const favoriteRecipes = document.getElementById('myFavoriteRecipes');
const recipesToCook = document.getElementById('recipesToCook');
let currentUser, recipeCollection, ingredients, recipes;

window.addEventListener('load', onPageLoad);
recipeTags.addEventListener('click', filterUIByTag);
searchBar.addEventListener('keyup', searchNameOrIngredient);
favoriteRecipes.addEventListener('click', displayFavoriteRecipes);
recipesToCook.addEventListener('click', displayRecipesToCook);
allRecipesSection.addEventListener('click', determineRecipeClick);
recipeModal.addEventListener('click', determineModalClick);

const HEART_ICON =
  `https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png`;
const PLUS_ICON =
  `https://img.icons8.com/ios/50/000000/plus--v1.png`;
const CLOSE_ICON =
  `https://img.icons8.com/fluent-systems-regular/48/000000/x.png`;

function onPageLoad() {
  Object(_apiCalls__WEBPACK_IMPORTED_MODULE_1__["fetchData"])()
    .then(allData => {
      recipes = allData.recipes.map(recipe => {
        return new _src_classes_Recipe__WEBPACK_IMPORTED_MODULE_2__["default"](recipe)
      });
      const randomUserIndex = Math.floor(Math.random() * allData.users.length);
      currentUser = new _src_classes_User__WEBPACK_IMPORTED_MODULE_3__["default"](allData.users[randomUserIndex]);
      ingredients = allData.ingredients;
      recipeCollection = new _src_classes_RecipeCollection__WEBPACK_IMPORTED_MODULE_4__["default"](recipes, ingredients);
      greetUser();
      renderRecipes(recipeCollection.recipes);
      renderFilterTags(recipeCollection);
    })
    .catch(err => displayPageLevelError());
}

function displayPageLevelError() {
  userName.innerHTML = `~ Follow us on IG ~ @rosemary&sage`
  allRecipesSection.innerHTML = `Ooops, we seem to be experiencing some
    technical difficulties!`
}

function greetUser() {
  userName.innerHTML = `Hello, ${currentUser.name.split(' ')[0]}`
}

function renderRecipes(recipes) {
  const userFavorites = getUsersFavoriteIds();
  const recipeMarkup = recipes.map(recipe => {
    const isFavorite = userFavorites.includes(recipe.id);
    const favoriteClass = isFavorite ? 'active' : '';
    return ` <article id=${recipe.id}>
        <div class='recipe-card'>
          <img src=${recipe.image} class='recipe-img' alt='${recipe.name}'>
          <section class='recipe-card-bottom' id='recipeCardBottom'>
            <div class='favorite-heart' id='favoriteHeart'>
              <img
                src=${HEART_ICON}
                class='favorite-icon ${favoriteClass}'
                id='favoriteIcon' alt='heart icon'/>
            </div>
            <div class='add-to-cook' id='addToCook'>
              <img
                src=${PLUS_ICON}
                class='add-to-cook-icon'
                id='addToCookIcon' alt='plus icon'>
            </div>
          </section>
            <div class='view-recipe-text' id='viewRecipeText'>
            <p class='view-recipe' id='showRecipe'>${recipe.name}</p>
            </div>
         </article>`
  }).join('');

  allRecipesSection.innerHTML = recipeMarkup;
}

function getUsersFavoriteIds() {
  return currentUser.favoriteRecipes.map(recipe => {
    return recipe.id;
  })
}

function renderFilterTags(recipeCollection) {
  const allFilters = document.getElementById('recipeTags');

  const recipeTags = recipeCollection.recipes.reduce((acc, recipe) => {
    recipe.tags.forEach(tag => {
      if (acc[tag]) {
        acc[tag] += 1
      } else {
        acc[tag] = 1
      }
    })
    return acc;
  }, {});

  const tagMarkup = Object.entries(recipeTags).map(tag => {
    const [tagName, quantity] = tag;
    return `
      <div class='recipe-tag'>
        <input
          class='recipe-tag-input'
          type='radio'
          id="${tagName}"
          name="${tagName}"
          value="${tagName}">
        <label for="${tagName}">${tagName}
          <span class='recipe-tag-quantity'>  (${quantity})</span>
        </label>
      </div>`
  }).join('');

  const clearFilters = `
  <div class='clear-filters'>
    <button class='button' id='clearFilters'>Clear Filters</button>
  </div>`

  allFilters.innerHTML = tagMarkup + clearFilters;
}

function filterUIByTag(event) {
  if (event.target.type === 'radio') {
    event.target.className += ' clicked';
    const radioButtons = document.querySelectorAll('.recipe-tag-input.clicked');
    const radioButtonIds = [...radioButtons].map(button => {
      return button.id;
    })
    const recipes = recipeCollection.filterByTag(radioButtonIds);
    renderRecipes(recipes);
    return
  }
  event.preventDefault();
  if (event.target.id === 'clearFilters') {
    renderRecipes(recipeCollection.recipes);
    const radioButtons = document.querySelectorAll('.recipe-tag-input.clicked');
    radioButtons.forEach(button => {
      button.classList.remove('clicked');
      button.checked = false;
    });
  }
}

function determineRecipeClick(event) {
  if (event.target.className.includes('favorite-icon')) {
    if (event.target.className.includes('active')) {
      removeFromFavorites(event);
    } else {
      addToFavoritesList(event);
    }
  } else if (event.target.id === 'addToCookIcon') {
    addToCook(event);
  } else {
    const recipeId = parseInt(event.target.closest("article").id);
    const matchingRecipe = recipeCollection.recipes.find(recipe => {
      if (recipe.id === recipeId) {
        return recipe;
      }
    })
    displayRecipe(matchingRecipe)
  }
}

function displayRecipe(matchingRecipe) {
  const userFavorites = getUsersFavoriteIds();
  const isFavorite = userFavorites.includes(matchingRecipe.id);
  const favoriteClass = isFavorite ? 'active' : '';
  const matchingRecipeIng = matchingRecipe.returnIngredients(ingredients);
  const formattedIngredients = matchingRecipeIng.map(ingredient => {
    return `<br><strong>${ingredient.name}</strong> - ${ingredient.quantity.amount} ${ingredient.quantity.unit}</br>`
  }).join('');
  const matchingRecipeInst = matchingRecipe.returnInstructions()
  console.log("matchingRecipeInst ", matchingRecipeInst);
  const formattedInstructions = matchingRecipeInst.map(instruction => {
    return `<br><em>Step</em> ${instruction}</br>`
  }).join('')
  recipeModal.innerHTML = `
        <article class='modal-content' id='${matchingRecipe.id}'>
        <div class='x'>
          <div class='modal-icons'>
           <div class='favorite-heart' id='favoriteHeart'>
            <img
              src=${HEART_ICON}
              class='favorite-icon ${favoriteClass}'
              id='favoriteIcon' alt='heart-icon'/>
           </div>
           <div class='add-to-cook' id='addToCook'>
            <img
              src=${PLUS_ICON}
              class='add-to-cook-icon'
              id='addToCookIcon' alt='plus-icon'/>
           </div>
          </div>
         <img id='closeModal' src=${CLOSE_ICON} class='x-icon'/>
        </div>
          <div class='modal-header'>
            <img
              id="modalImg"
              src='${matchingRecipe.image}'
              alt="recipe image"
              class="modal-img">
            <h2
              class='modal-header'
              id='modalHeader'>${matchingRecipe.name}</h2>
          </div>
        <div class='modal-details'>
          <article class='all-modal-ing'>
           <div class='modal-ingredients'>
            <h3 class='ingredient-header'>Ingredients:</h3>
              <p
              class='ingredients'
              id='recipeIngredients'>${formattedIngredients}</p>
           </div>
           <div class='modal-cost'>
            <h3 class='cost-header'>Cost of Ingredients:</h3>
              <p
              class='total-cost'
              id='totalCost'>${matchingRecipe.calculateCost(ingredients)}</p>
           </div>
          </article>
          <article class='modal-instructions'>
           <div class='instructions-div'>
            <h3 class='instructions-header'>Instructions:</h3>
              <p
             class='instructions'
             id='instructions'>${formattedInstructions}</p>
           </div>
          </article>
         </div>
       </article>`
  openModal();
}

function openModal() {
  recipeModal.style.display = 'flex';
}

function determineModalClick(event) {
  if (event.target.id === 'closeModal') {
    recipeModal.innerHTML = '';
    recipeModal.style.display = 'none';
  } else if (event.target.className.includes('favorite-icon')) {
    if (event.target.className.includes('active')) {
      removeFromFavorites(event);
    } else {
      addToFavoritesList(event);
    }
  } else if (event.target.id === 'addToCookIcon') {
    addToCook(event);
  }
}

function addToFavoritesList(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  activate(event.target);

  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.addToFavorites(matchedRecipe);
}

function removeFromFavorites(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  deactivate(event.target);
  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.removeFromFavorites(matchedRecipe);
}

function addToCook(event) {
  const clickedRecipe = parseInt(event.target.closest('article').id);
  const matchedRecipe = recipeCollection.recipes.find((recipe) => {
    return recipe.id === clickedRecipe;
  });
  currentUser.addToRecipesToCook(matchedRecipe);
}

function activate(element) {
  element.classList.add('active');
}

function deactivate(element) {
  element.classList.remove('active');
}

function searchNameOrIngredient(event) {
  const searchText = event.target.value;
  if (favoriteRecipes.innerHTML === 'Show All Recipes') {
    let favoriteResult = currentUser.findFavorites(searchText);
    renderRecipes(favoriteResult);
  } else {
    let nameResult = recipeCollection.filterByName(searchText);
    let ingredientResult = recipeCollection.filterByIngredient(searchText);
    let finalResult = [...nameResult, ...ingredientResult];
    renderRecipes([...new Set(finalResult)]);
  }
}

function displayFavoriteRecipes(event) {
  if (event.target.innerHTML === 'Show All Recipes') {
    renderRecipes(recipeCollection.recipes);
    favoriteRecipes.innerHTML = 'My Favorite Recipes';
  } else {
    favoriteRecipes.innerHTML = 'Show All Recipes';
    if (!currentUser.favoriteRecipes.length) {
      allRecipesSection.innerHTML = `
      <div class='favorites-text'>
        <p class='no-recipes'>Oh no! You have no favorites to display!</p>
      </div>`
    } else {
      renderRecipes(currentUser.favoriteRecipes);
    }
  }
}

function displayRecipesToCook(event) {
  if (event.target.innerHTML === 'Show All Recipes') {
    renderRecipes(recipeCollection.recipes);
    recipesToCook.innerHTML = 'My Recipes To Cook';
  } else {
    recipesToCook.innerHTML = 'Show All Recipes';
    if (!currentUser.recipesToCook.length) {
      allRecipesSection.innerHTML = `
      <div class='no-recipes-text'>
        <p class='no-recipes'>Add a few recipes to cook!</p>
      </div>`
    } else {
      renderRecipes(currentUser.recipesToCook);
    }
  }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGVDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyxrQkFBa0IsZ0JBQWdCLEVBQUUsVUFBVSw2Q0FBNkMscUJBQXFCLGNBQWMsa0JBQWtCLGdCQUFnQixFQUFFLGdEQUFnRCw0QkFBNEIsd0NBQXdDLGtDQUFrQyx5Q0FBeUMsRUFBRSxrQkFBa0IsNEJBQTRCLHdDQUF3QyxrQ0FBa0MseUNBQXlDLG9CQUFvQixFQUFFLG1CQUFtQixrQkFBa0IsaUJBQWlCLEVBQUUsa0JBQWtCLGVBQWUsRUFBRSxhQUFhLGtCQUFrQixFQUFFLGtDQUFrQyxvQkFBb0IsNkNBQTZDLHdCQUF3QixxQkFBcUIsaUJBQWlCLDhCQUE4QixFQUFFLG1CQUFtQixxQ0FBcUMsRUFBRSxvQkFBb0IscUNBQXFDLEVBQUUsbUJBQW1CLHFDQUFxQyxFQUFFLDZCQUE2QixlQUFlLGtCQUFrQixtQ0FBbUMsa0JBQWtCLHFDQUFxQyxzQkFBc0IscUJBQXFCLFdBQVcsZ0JBQWdCLGlCQUFpQixFQUFFLHNCQUFzQixrQkFBa0Isd0JBQXdCLG9CQUFvQixrQkFBa0IsRUFBRSxtQkFBbUIsaUJBQWlCLHNCQUFzQixFQUFFLG9CQUFvQixrQkFBa0Isb0JBQW9CLG1CQUFtQixFQUFFLGtCQUFrQixrQkFBa0Isd0JBQXdCLEVBQUUsc0NBQXNDLG9CQUFvQixzQkFBc0IsNkNBQTZDLDhCQUE4Qix3QkFBd0IsRUFBRSxrREFBa0QscUNBQXFDLG9CQUFvQixFQUFFLGdDQUFnQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsRUFBRSxRQUFRLG9CQUFvQixxQkFBcUIsd0JBQXdCLGdCQUFnQixFQUFFLFFBQVEsb0JBQW9CLHVCQUF1QixnQkFBZ0IsRUFBRSw0QkFBNEIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsaUJBQWlCLEVBQUUsa0JBQWtCLHVCQUF1QiwrQkFBK0Isc0JBQXNCLGtCQUFrQixpSEFBaUgseURBQXlELGNBQWMsRUFBRSxpQkFBaUIsdUJBQXVCLGlCQUFpQixzQkFBc0IsRUFBRSxxQ0FBcUMsa0JBQWtCLDJCQUEyQixrQkFBa0IsaUJBQWlCLGlCQUFpQixFQUFFLHlCQUF5QixrQkFBa0Isa0NBQWtDLGdCQUFnQixxQkFBcUIsRUFBRSxpQkFBaUIsa0JBQWtCLHVCQUF1QixFQUFFLHVCQUF1QixvQkFBb0IsRUFBRSx3Q0FBd0MsaUJBQWlCLEVBQUUsb0RBQW9ELDBCQUEwQixvQkFBb0IsRUFBRSx1QkFBdUIsNEJBQTRCLGlCQUFpQix1QkFBdUIsZ0NBQWdDLG1DQUFtQyxFQUFFLGFBQWEsOEVBQThFLGlCQUFpQixFQUFFLGdDQUFnQyx3QkFBd0Isb0JBQW9CLGdCQUFnQixrQkFBa0IsZUFBZSxXQUFXLFlBQVkseUNBQXlDLDRCQUE0QixrQkFBa0Isa0JBQWtCLEVBQUUsb0JBQW9CLGtCQUFrQiwyQkFBMkIsOEJBQThCLHFCQUFxQixrQkFBa0IsMkJBQTJCLGVBQWUsZ0JBQWdCLHVCQUF1Qix1Q0FBdUMsRUFBRSxvQkFBb0Isa0JBQWtCLHdCQUF3QixFQUFFLFFBQVEsa0JBQWtCLG1DQUFtQyxFQUFFLGFBQWEsaUJBQWlCLGdCQUFnQixFQUFFLG1CQUFtQix3QkFBd0Isa0JBQWtCLHdCQUF3QixvQkFBb0Isa0NBQWtDLGlCQUFpQixFQUFFLGdCQUFnQixzQ0FBc0Msa0JBQWtCLHNCQUFzQixFQUFFLG9CQUFvQixnQ0FBZ0Msa0JBQWtCLDJCQUEyQixlQUFlLEVBQUUsd0JBQXdCLGtCQUFrQiwyQkFBMkIsZUFBZSxFQUFFLHlCQUF5QixlQUFlLEVBQUUsa0JBQWtCLDhCQUE4Qix1QkFBdUIsRUFBRSxtQkFBbUIsK0JBQStCLEVBQUUsOERBQThELGlCQUFpQixFQUFFLGlCQUFpQixrQkFBa0IscUJBQXFCLEVBQUUsaUJBQWlCLHFCQUFxQixFQUFFLGtCQUFrQixrQkFBa0Isd0JBQXdCLHdCQUF3QixFQUFFLG9DQUFvQyxrQkFBa0IscUJBQXFCLG9CQUFvQixFQUFFLGlDQUFpQyxvQkFBb0IsdUJBQXVCLG9DQUFvQyxFQUFFLHFCQUFxQixtQ0FBbUMsa0JBQWtCLDJCQUEyQixpQkFBaUIsa0JBQWtCLGtCQUFrQixFQUFFLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixnQkFBZ0IsRUFBRSx1QkFBdUIsc0JBQXNCLEVBQUUsNkJBQTZCLG9CQUFvQixFQUFFLDBCQUEwQixxQkFBcUIsb0JBQW9CLEVBQUUsZ0VBQWdFLGtCQUFrQiwyREFBMkQsRUFBRSxFQUFFLDJDQUEyQyxrQkFBa0IsMkRBQTJELEVBQUUsRUFBRSwwQ0FBMEMsa0JBQWtCLDJEQUEyRCxFQUFFLEVBQUUsMENBQTBDLGdCQUFnQiw2QkFBNkIsRUFBRSxjQUFjLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsa0JBQWtCLG1CQUFtQixFQUFFLGtCQUFrQixlQUFlLEVBQUUscUJBQXFCLGVBQWUsbUJBQW1CLEVBQUUsMEJBQTBCLG9CQUFvQixzQkFBc0IsRUFBRSxFQUFFLFNBQVMsaUZBQWlGLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxnQkFBZ0IsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLE1BQU0sVUFBVSxnQkFBZ0IsS0FBSyxnQkFBZ0IsS0FBSyxnQkFBZ0IsV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsa0JBQWtCLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxZQUFZLGlCQUFpQixXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxZQUFZLGlCQUFpQixVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsaUJBQWlCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsaUJBQWlCLEtBQUssWUFBWSxXQUFXLGtCQUFrQixZQUFZLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxVQUFVLGtCQUFrQixNQUFNLGdCQUFnQixPQUFPLGdCQUFnQixNQUFNLFlBQVksaUJBQWlCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGlCQUFpQixXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksaUJBQWlCLEtBQUssWUFBWSxXQUFXLGtCQUFrQixNQUFNLFlBQVksV0FBVyxZQUFZLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxnQkFBZ0IsS0FBSyxZQUFZLGtCQUFrQixLQUFLLGtCQUFrQixRQUFRLGdCQUFnQixLQUFLLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLFVBQVUsWUFBWSxpQkFBaUIsV0FBVyxLQUFLLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsZ0JBQWdCLEtBQUss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QTtBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2VkE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDekYsWUFBZ0k7O0FBRWhJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSVQsMkxBQU8sYUFBYSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi8qIFJFTU9WRSBERUZBVUxUIEJVVFRPTiBTVFlMRVMgKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50OyB9XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyogQlVUVE9OIFNUWUxFUyAqL1xcbi5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjM2NiMzcxOyB9XFxuXFxuLmJ1dHRvbjphY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzY2IzNzE7IH1cXG5cXG4uYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjM2NiMzcxOyB9XFxuXFxuLyogTkFWIEJBUiAqL1xcbi5uYXYtYmFyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjBmMGYwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDg1cHg7IH1cXG5cXG4uZ3JlZXRpbmctaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMTBweDsgfVxcblxcbi53ZWxjb21lLWljb24ge1xcbiAgaGVpZ2h0OiA3N3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7IH1cXG5cXG4udXNlci1ncmVldGluZyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICMzY2IzNzE7IH1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubXktZmF2b3JpdGVzLFxcbi5yZWNpcGVzLXRvLWNvb2sge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4OyB9XFxuXFxuLnJlY2lwZXMtdG8tY29vazpob3ZlcixcXG4ubXktZmF2b3JpdGVzOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjM2NiMzcxO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLyogSEVBREVSICovXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNDBweCAwcHggMjBweCAwcHg7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIG1hcmdpbjogMHB4OyB9XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luOiAwcHg7IH1cXG5cXG4vKiBNQUlOICovXFxuLm1haW4tcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5hbGwtcmVjaXBlcyB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBtYXJnaW46IDBweCA0MHB4IDcwcHggNDBweDtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSAxcmVtIG1pbm1heCgyMDBweCwgMWZyKSAxcmVtIG1pbm1heCgyMDBweCwgMWZyKSAxcmVtIG1pbm1heCgyMDBweCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBnYXA6IDFyZW07IH1cXG5cXG4ubm8tcmVjaXBlcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzQycHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDsgfVxcblxcbi8qIFJFQ0lQRSBDQVJEICovXFxuLnJlY2lwZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIG1hcmdpbjogMzBweDsgfVxcblxcbi5yZWNpcGUtY2FyZC1ib3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtaW4taGVpZ2h0OiA3MnB4OyB9XFxuXFxuLnJlY2lwZS1pbWcge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5yZWNpcGUtaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5hZGQtdG8tY29vay1pY29uLFxcbi5mYXZvcml0ZS1pY29uIHtcXG4gIGhlaWdodDogNDBweDsgfVxcblxcbi5mYXZvcml0ZS1pY29uOmhvdmVyLFxcbi5hZGQtdG8tY29vay1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi52aWV3LXJlY2lwZS10ZXh0IHtcXG4gIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbnQvNDgvMDAwMDAwL2hlYXJ0cy5wbmcpO1xcbiAgaGVpZ2h0OiA0OHB4OyB9XFxuXFxuLyogUkVDSVBFIE1PREFMICovXFxuLm1vZGFsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBib3gtc2hhZG93OiAwcHggN3B4IDI5cHggMHB4IGJsYWNrOyB9XFxuXFxuLm1vZGFsLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4ueCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLngtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDsgfVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDMwcHg7IH1cXG5cXG4ubW9kYWwtaW1nIHtcXG4gIGJveC1zaGFkb3c6IDZweCA1cHggOXB4IGxpZ2h0Z3JheTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblxcbi5hbGwtbW9kYWwtaW5nIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwJTsgfVxcblxcbi5tb2RhbC1pbmdyZWRpZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4ubW9kYWwtaW5zdHJ1Y3Rpb25zIHtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4uaW5ncmVkaWVudHMge1xcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMjBweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDsgfVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWFyZ2luOiAwcHggMjBweCAxNXB4IDIwcHg7IH1cXG5cXG4uaW5ncmVkaWVudC1oZWFkZXIsXFxuLmNvc3QtaGVhZGVyLFxcbi5pbnN0cnVjdGlvbnMtaGVhZGVyIHtcXG4gIG1hcmdpbjogMjBweDsgfVxcblxcbi5tb2RhbC1jb3N0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAzNXB4OyB9XFxuXFxuLnRvdGFsLWNvc3Qge1xcbiAgbWFyZ2luLXRvcDogMjFweDsgfVxcblxcbi5tb2RhbC1pY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7IH1cXG5cXG4uYWRkLXRvLWNvb2ssXFxuLmZhdm9yaXRlLWhlYXJ0IHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtaW4taGVpZ2h0OiA2MnB4O1xcbiAgbWluLXdpZHRoOiA1MHB4OyB9XFxuXFxuLyogQVNJREUgKi9cXG4uZmlsdGVyLWJ5LXRhZyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lOyB9XFxuXFxuLmZpbHRlci1zZWN0aW9uIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzNjYjM3MTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI3NXB4O1xcbiAgaGVpZ2h0OiA2ODBweDtcXG4gIHBhZGRpbmc6IDI1cHg7IH1cXG5cXG4ucmVjaXBlLXRhZyB7XFxuICBjb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA4cHg7IH1cXG5cXG4ucmVjaXBlLXRhZy1pbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcblxcbi5yZWNpcGUtdGFnLWlucHV0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5yZWNpcGUtdGFnLXF1YW50aXR5IHtcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4vKiBNZWRpYS1xdWVyaWVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMzMHB4KSB7XFxuICAuYWxsLXJlY2lwZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMjAwcHgsIDFmcikpOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDcwcHgpIHtcXG4gIC5hbGwtcmVjaXBlcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyMDBweCwgMWZyKSk7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAuYWxsLXJlY2lwZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMjAwcHgsIDFmcikpOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTBweCkge1xcbiAgLm1haW4tcGFnZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5uYXYtYmFyIHtcXG4gICAgaGVpZ2h0OiB1bnNldDsgfVxcbiAgLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDsgfVxcbiAgLnJlY2lwZS1jYXJkIHtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuICAuYWxsLXJlY2lwZXMge1xcbiAgICBvcmRlcjogMjsgfVxcbiAgLmZpbHRlci1zZWN0aW9uIHtcXG4gICAgb3JkZXI6IDE7XFxuICAgIHdpZHRoOiB1bnNldDsgfVxcbiAgLmZpbHRlci1zZWN0aW9uIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHdyYXA7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2IsaUNBQUE7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWEsRUFBQTs7QUFHZixrQkFBQTtBQUVBO0VBQ0UsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEMsWUFBQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VB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QUFHakM7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUdqQixrQkFBQTtBQUNBO0VBQ0U7SUFDRSxvREFBb0QsRUFBQSxFQUNyRDs7QUFHSDtFQUNFO0lBQ0Usb0RBQW9ELEVBQUEsRUFDckQ7O0FBR0g7RUFDRTtJQUNFLG9EQUFvRCxFQUFBLEVBQ3JEOztBQUdIO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxRQUFRLEVBQUE7RUFHVjtJQUNFLFFBQVE7SUFDUixZQUFZLEVBQUE7RUFHZDtJQUNFLGFBQWE7SUFDYixlQUFlLEVBQUEsRUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBSRU1PVkUgREVGQVVMVCBCVVRUT04gU1RZTEVTICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBCVVRUT04gU1RZTEVTICovXFxuXFxuLmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNjYjM3MTtcXG59XFxuXFxuLmJ1dHRvbjphY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzY2IzNzE7XFxufVxcblxcbi5idXR0b246Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzY2IzNzE7XFxufVxcblxcbi8qIE5BViBCQVIgKi9cXG4ubmF2LWJhciB7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YwZjBmMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4NXB4O1xcbn1cXG5cXG4uZ3JlZXRpbmctaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLndlbGNvbWUtaWNvbiB7XFxuICBoZWlnaHQ6IDc3cHg7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLnVzZXItZ3JlZXRpbmcge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjM2NiMzcxO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5teS1mYXZvcml0ZXMsXFxuLnJlY2lwZXMtdG8tY29vayB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5yZWNpcGVzLXRvLWNvb2s6aG92ZXIsXFxuLm15LWZhdm9yaXRlczpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNjYjM3MTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogSEVBREVSICovXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNDBweCAwcHggMjBweCAwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiBNQUlOICovXFxuXFxuLm1haW4tcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFsbC1yZWNpcGVzIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1hcmdpbjogMHB4IDQwcHggNzBweCA0MHB4O1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIDFyZW0gbWlubWF4KDIwMHB4LCAxZnIpIDFyZW1cXG4gICAgbWlubWF4KDIwMHB4LCAxZnIpIDFyZW0gbWlubWF4KDIwMHB4LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5vLXJlY2lwZXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDM0MnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi8qIFJFQ0lQRSBDQVJEICovXFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW46IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDcycHg7XFxufVxcblxcbi5yZWNpcGUtaW1nIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yZWNpcGUtaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10by1jb29rLWljb24sXFxuLmZhdm9yaXRlLWljb24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uZmF2b3JpdGUtaWNvbjpob3ZlcixcXG4uYWRkLXRvLWNvb2staWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi52aWV3LXJlY2lwZS10ZXh0IHtcXG4gIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVudC80OC8wMDAwMDAvaGVhcnRzLnBuZyk7XFxuICBoZWlnaHQ6IDQ4cHg7XFxufVxcblxcbi8qIFJFQ0lQRSBNT0RBTCAqL1xcblxcbi5tb2RhbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBib3gtc2hhZG93OiAwcHggN3B4IDI5cHggMHB4IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLngge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLngtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuLm1vZGFsLWltZyB7XFxuICBib3gtc2hhZG93OiA2cHggNXB4IDlweCBsaWdodGdyYXk7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5hbGwtbW9kYWwtaW5nIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLm1vZGFsLWluZ3JlZGllbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLm1vZGFsLWluc3RydWN0aW9ucyB7XFxuIHdpZHRoOiA1MCU7XFxufVxcblxcbi5pbmdyZWRpZW50cyB7XFxuICBtYXJnaW46IDBweCAwcHggMTBweCAyMHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50XFxuICB9XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDBweCAyMHB4IDE1cHggMjBweDtcXG59XFxuXFxuLmluZ3JlZGllbnQtaGVhZGVyLFxcbi5jb3N0LWhlYWRlcixcXG4uaW5zdHJ1Y3Rpb25zLWhlYWRlciB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5tb2RhbC1jb3N0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbn1cXG5cXG4udG90YWwtY29zdCB7XFxuICBtYXJnaW4tdG9wOiAyMXB4O1xcbn1cXG5cXG4ubW9kYWwtaWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWRkLXRvLWNvb2ssXFxuLmZhdm9yaXRlLWhlYXJ0IHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtaW4taGVpZ2h0OiA2MnB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4vKiBBU0lERSAqL1xcblxcbi5maWx0ZXItYnktdGFnIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxufVxcblxcbi5maWx0ZXItc2VjdGlvbiB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMzY2IzNzE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNzVweDtcXG4gIGhlaWdodDogNjgwcHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4ucmVjaXBlLXRhZyB7XFxuICBjb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA4cHg7XFxufVxcblxcbi5yZWNpcGUtdGFnLWlucHV0IHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4ucmVjaXBlLXRhZy1pbnB1dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGUtdGFnLXF1YW50aXR5IHtcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi8qIE1lZGlhLXF1ZXJpZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzMwcHgpIHtcXG4gIC5hbGwtcmVjaXBlcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzBweCkge1xcbiAgLmFsbC1yZWNpcGVzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcXG4gIC5hbGwtcmVjaXBlcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5MHB4KSB7XFxuICAubWFpbi1wYWdlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5uYXYtYmFyIHtcXG4gICAgaGVpZ2h0OiB1bnNldDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICB9XFxuXFxuICAucmVjaXBlLWNhcmQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAuYWxsLXJlY2lwZXMge1xcbiAgICBvcmRlcjogMjtcXG4gIH1cXG5cXG4gIC5maWx0ZXItc2VjdGlvbiB7XFxuICAgIG9yZGVyOiAxO1xcbiAgICB3aWR0aDogdW5zZXQ7XFxuICB9XFxuXFxuICAuZmlsdGVyLXNlY3Rpb24gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogd3JhcDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICBjb25zdCB1c2VyRGF0YSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4odXNlckRhdGEgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJEYXRhO1xuICAgIH0pXG5cbiAgY29uc3QgaW5ncmVkaWVudERhdGEgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9pbmdyZWRpZW50cycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGluZ3JlZGllbnREYXRhID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50RGF0YTtcbiAgICB9KVxuXG4gIGNvbnN0IHJlY2lwZURhdGEgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9yZWNpcGVzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVjaXBlRGF0YSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlRGF0YTtcbiAgICB9KVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChbdXNlckRhdGEsIGluZ3JlZGllbnREYXRhLCByZWNpcGVEYXRhXSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnN0IGFsbERhdGEgPSB7fTtcbiAgICAgIGFsbERhdGEudXNlcnMgPSBkYXRhWzBdLnVzZXJzRGF0YTtcbiAgICAgIGFsbERhdGEuaW5ncmVkaWVudHMgPSBkYXRhWzFdLmluZ3JlZGllbnRzRGF0YTtcbiAgICAgIGFsbERhdGEucmVjaXBlcyA9IGRhdGFbMl0ucmVjaXBlRGF0YTtcbiAgICAgIHJldHVybiBhbGxEYXRhO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRVJST1InLCBlcnIpKVxufVxuXG5leHBvcnQgeyBmZXRjaERhdGEgfSIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgfVxuXG4gIF9fZmluZE1hdGNoaW5nSW5ncmVkaWVudChpbmdyZWRpZW50cywgdGFyZ2V0SW5ncmVkaWVudCkge1xuICAgIHJldHVybiBpbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWQgPT09IHRhcmdldEluZ3JlZGllbnQuaWQ7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVDb3N0KGluZ3JlZGllbnRzRGF0YSkge1xuICAgIGNvbnN0IHRvdGFsQ29zdCA9IHRoaXMuaW5ncmVkaWVudHMucmVkdWNlKChhY2MsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoaW5nSW5ncmVkaWVudCA9IHRoaXMuX19maW5kTWF0Y2hpbmdJbmdyZWRpZW50KFxuICAgICAgICBpbmdyZWRpZW50c0RhdGEsXG4gICAgICAgIGluZ3JlZGllbnRcbiAgICAgICk7XG4gICAgICBhY2MgKz0gbWF0Y2hpbmdJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSAvIDEwMDtcblxuICAgIHJldHVybiBgJCR7dG90YWxDb3N0fWA7XG4gIH1cblxuICByZXR1cm5JbmdyZWRpZW50cyhpbmdyZWRpZW50c0RhdGEpIHtcbiAgICBjb25zdCBjb21wbGV0ZUluZ3JlZGllbnRzID0gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdJbmdyZWRpZW50ID0gdGhpcy5fX2ZpbmRNYXRjaGluZ0luZ3JlZGllbnQoXG4gICAgICAgIGluZ3JlZGllbnRzRGF0YSxcbiAgICAgICAgaW5ncmVkaWVudFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG1lcmdlZEluZ3JlZGllbnQgPSBPYmplY3QuYXNzaWduKG1hdGNoaW5nSW5ncmVkaWVudCwgaW5ncmVkaWVudCk7XG4gICAgICByZXR1cm4gWy4uLmFjYywgbWVyZ2VkSW5ncmVkaWVudF07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGNvbXBsZXRlSW5ncmVkaWVudHM7XG4gIH1cblxuICByZXR1cm5JbnN0cnVjdGlvbnMoKSB7XG4gICAgY29uc3QgbnVtYmVyZWRJbnN0cnVjdGlvbnMgPSB0aGlzLmluc3RydWN0aW9ucy5tYXAoaW5zdHJ1Y3Rpb24gPT4ge1xuICAgICAgcmV0dXJuIGAke2luc3RydWN0aW9uLm51bWJlcn0uICR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259YFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG51bWJlcmVkSW5zdHJ1Y3Rpb25zO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsImNsYXNzIFJlY2lwZUNvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihhbGxSZWNpcGVzLCBhbGxJbmdyZWRpZW50cykge1xuICAgIHRoaXMucmVjaXBlcyA9IGFsbFJlY2lwZXM7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGFsbEluZ3JlZGllbnRzO1xuICB9XG5cbiAgZmlsdGVyQnlUYWcodGFncykge1xuICAgIGNvbnN0IHJlY2lwZU1hdGNoZXMgPSB0aGlzLnJlY2lwZXMucmVkdWNlKChzZWFyY2hlZFJlY2lwZXMsIHJlY2lwZSkgPT4ge1xuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgIGlmIChyZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICAgICAgc2VhcmNoZWRSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWFyY2hlZFJlY2lwZXM7XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KHJlY2lwZU1hdGNoZXMpXTtcbiAgfVxuXG4gIGZpbHRlckJ5TmFtZShpbnB1dCkge1xuICAgIGNvbnN0IHJlY2lwZXNXaXRoSW5wdXQgPSB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dC50b0xvd2VyQ2FzZSgpKVxuICAgIH0pO1xuICAgIHJldHVybiByZWNpcGVzV2l0aElucHV0O1xuICB9XG5cbiAgZmlsdGVyQnlJbmdyZWRpZW50KGlucHV0KSB7XG4gICAgY29uc3QgaW5ncmVkaWVudE1hdGNoID0gdGhpcy5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhpbnB1dC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCByZWNpcGVzV2l0aElucHV0ID0gW107XG4gICAgdGhpcy5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChpbmdyZWRpZW50LmlkID09PSBpbmdyZWRpZW50TWF0Y2guaWQpIHtcbiAgICAgICAgICByZWNpcGVzV2l0aElucHV0LnB1c2gocmVjaXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlY2lwZXNXaXRoSW5wdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlQ29sbGVjdGlvbjtcbiIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7bmFtZSwgaWR9KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgfVxuXG4gIGFkZFRvRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIGlmICghdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgIH07XG4gIH1cblxuICByZW1vdmVGcm9tRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKGZhdlJlY2lwZSA9PiB7XG4gICAgICBpZiAoZmF2UmVjaXBlLmlkICE9PSByZWNpcGUuaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhdlJlY2lwZTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBhZGRUb1JlY2lwZXNUb0Nvb2socmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5yZWNpcGVzVG9Db29rLnB1c2gocmVjaXBlKTtcbiAgICB9O1xuICB9XG5cbiAgZmlsdGVyQnlUYWcodGFncykge1xuICAgIGNvbnN0IG5ld0ZpbHRlclRhZ3MgPSB0eXBlb2YgdGFncyA9PT0gXCJzdHJpbmdcIiA/IFt0YWdzXSA6IHRhZ3M7XG4gICAgbGV0IGZpbHRlcmVkUmVjaXBlcyA9IFtdO1xuICAgIG5ld0ZpbHRlclRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBpZiAocmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnKSkge1xuICAgICAgICAgIGZpbHRlcmVkUmVjaXBlcy5wdXNoKHJlY2lwZSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KGZpbHRlcmVkUmVjaXBlcyldO1xuICB9XG5cbiAgZmluZEZhdm9yaXRlcyhuYW1lT3JJbmdyZWRpZW50KSB7XG4gICAgY29uc3QgbmV3U2VhcmNoVGV4dCA9IG5hbWVPckluZ3JlZGllbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmdpZmllZEluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5pbnN0cnVjdGlvbjtcbiAgICAgIH0pLmpvaW4oJyAnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICByZXR1cm4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuZXdTZWFyY2hUZXh0KSB8fFxuICAgICAgICBzdHJpbmdpZmllZEluc3RydWN0aW9ucy5pbmNsdWRlcyhuZXdTZWFyY2hUZXh0KVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9hcGlDYWxscyc7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4uL3NyYy9jbGFzc2VzL1JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9zcmMvY2xhc3Nlcy9Vc2VyJztcbmltcG9ydCBSZWNpcGVDb2xsZWN0aW9uIGZyb20gJy4uL3NyYy9jbGFzc2VzL1JlY2lwZUNvbGxlY3Rpb24nO1xuXG5jb25zdCBhbGxSZWNpcGVzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxSZWNpcGVzJyk7XG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyR3JlZXRpbmcnKTtcbmNvbnN0IHJlY2lwZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJylcbmNvbnN0IHJlY2lwZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlVGFncycpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJhcicpO1xuY29uc3QgZmF2b3JpdGVSZWNpcGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215RmF2b3JpdGVSZWNpcGVzJyk7XG5jb25zdCByZWNpcGVzVG9Db29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXNUb0Nvb2snKTtcbmxldCBjdXJyZW50VXNlciwgcmVjaXBlQ29sbGVjdGlvbiwgaW5ncmVkaWVudHMsIHJlY2lwZXM7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25QYWdlTG9hZCk7XG5yZWNpcGVUYWdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyVUlCeVRhZyk7XG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzZWFyY2hOYW1lT3JJbmdyZWRpZW50KTtcbmZhdm9yaXRlUmVjaXBlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGYXZvcml0ZVJlY2lwZXMpO1xucmVjaXBlc1RvQ29vay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlSZWNpcGVzVG9Db29rKTtcbmFsbFJlY2lwZXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGV0ZXJtaW5lUmVjaXBlQ2xpY2spO1xucmVjaXBlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXRlcm1pbmVNb2RhbENsaWNrKTtcblxuY29uc3QgSEVBUlRfSUNPTiA9XG4gIGBodHRwczovL2ltZy5pY29uczguY29tL3Bhc3RlbC1nbHlwaC82NC8wMDAwMDAvaGVhcnRzLS12MS5wbmdgO1xuY29uc3QgUExVU19JQ09OID1cbiAgYGh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzUwLzAwMDAwMC9wbHVzLS12MS5wbmdgO1xuY29uc3QgQ0xPU0VfSUNPTiA9XG4gIGBodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVudC1zeXN0ZW1zLXJlZ3VsYXIvNDgvMDAwMDAwL3gucG5nYDtcblxuZnVuY3Rpb24gb25QYWdlTG9hZCgpIHtcbiAgZmV0Y2hEYXRhKClcbiAgICAudGhlbihhbGxEYXRhID0+IHtcbiAgICAgIHJlY2lwZXMgPSBhbGxEYXRhLnJlY2lwZXMubWFwKHJlY2lwZSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjaXBlKHJlY2lwZSlcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmFuZG9tVXNlckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsRGF0YS51c2Vycy5sZW5ndGgpO1xuICAgICAgY3VycmVudFVzZXIgPSBuZXcgVXNlcihhbGxEYXRhLnVzZXJzW3JhbmRvbVVzZXJJbmRleF0pO1xuICAgICAgaW5ncmVkaWVudHMgPSBhbGxEYXRhLmluZ3JlZGllbnRzO1xuICAgICAgcmVjaXBlQ29sbGVjdGlvbiA9IG5ldyBSZWNpcGVDb2xsZWN0aW9uKHJlY2lwZXMsIGluZ3JlZGllbnRzKTtcbiAgICAgIGdyZWV0VXNlcigpO1xuICAgICAgcmVuZGVyUmVjaXBlcyhyZWNpcGVDb2xsZWN0aW9uLnJlY2lwZXMpO1xuICAgICAgcmVuZGVyRmlsdGVyVGFncyhyZWNpcGVDb2xsZWN0aW9uKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gZGlzcGxheVBhZ2VMZXZlbEVycm9yKCkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZUxldmVsRXJyb3IoKSB7XG4gIHVzZXJOYW1lLmlubmVySFRNTCA9IGB+IEZvbGxvdyB1cyBvbiBJRyB+IEByb3NlbWFyeSZzYWdlYFxuICBhbGxSZWNpcGVzU2VjdGlvbi5pbm5lckhUTUwgPSBgT29vcHMsIHdlIHNlZW0gdG8gYmUgZXhwZXJpZW5jaW5nIHNvbWVcbiAgICB0ZWNobmljYWwgZGlmZmljdWx0aWVzIWBcbn1cblxuZnVuY3Rpb24gZ3JlZXRVc2VyKCkge1xuICB1c2VyTmFtZS5pbm5lckhUTUwgPSBgSGVsbG8sICR7Y3VycmVudFVzZXIubmFtZS5zcGxpdCgnICcpWzBdfWBcbn1cblxuZnVuY3Rpb24gcmVuZGVyUmVjaXBlcyhyZWNpcGVzKSB7XG4gIGNvbnN0IHVzZXJGYXZvcml0ZXMgPSBnZXRVc2Vyc0Zhdm9yaXRlSWRzKCk7XG4gIGNvbnN0IHJlY2lwZU1hcmt1cCA9IHJlY2lwZXMubWFwKHJlY2lwZSA9PiB7XG4gICAgY29uc3QgaXNGYXZvcml0ZSA9IHVzZXJGYXZvcml0ZXMuaW5jbHVkZXMocmVjaXBlLmlkKTtcbiAgICBjb25zdCBmYXZvcml0ZUNsYXNzID0gaXNGYXZvcml0ZSA/ICdhY3RpdmUnIDogJyc7XG4gICAgcmV0dXJuIGAgPGFydGljbGUgaWQ9JHtyZWNpcGUuaWR9PlxuICAgICAgICA8ZGl2IGNsYXNzPSdyZWNpcGUtY2FyZCc+XG4gICAgICAgICAgPGltZyBzcmM9JHtyZWNpcGUuaW1hZ2V9IGNsYXNzPSdyZWNpcGUtaW1nJyBhbHQ9JyR7cmVjaXBlLm5hbWV9Jz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0ncmVjaXBlLWNhcmQtYm90dG9tJyBpZD0ncmVjaXBlQ2FyZEJvdHRvbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmYXZvcml0ZS1oZWFydCcgaWQ9J2Zhdm9yaXRlSGVhcnQnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPSR7SEVBUlRfSUNPTn1cbiAgICAgICAgICAgICAgICBjbGFzcz0nZmF2b3JpdGUtaWNvbiAke2Zhdm9yaXRlQ2xhc3N9J1xuICAgICAgICAgICAgICAgIGlkPSdmYXZvcml0ZUljb24nIGFsdD0naGVhcnQgaWNvbicvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdhZGQtdG8tY29vaycgaWQ9J2FkZFRvQ29vayc+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9JHtQTFVTX0lDT059XG4gICAgICAgICAgICAgICAgY2xhc3M9J2FkZC10by1jb29rLWljb24nXG4gICAgICAgICAgICAgICAgaWQ9J2FkZFRvQ29va0ljb24nIGFsdD0ncGx1cyBpY29uJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXctcmVjaXBlLXRleHQnIGlkPSd2aWV3UmVjaXBlVGV4dCc+XG4gICAgICAgICAgICA8cCBjbGFzcz0ndmlldy1yZWNpcGUnIGlkPSdzaG93UmVjaXBlJz4ke3JlY2lwZS5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9hcnRpY2xlPmBcbiAgfSkuam9pbignJyk7XG5cbiAgYWxsUmVjaXBlc1NlY3Rpb24uaW5uZXJIVE1MID0gcmVjaXBlTWFya3VwO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc0Zhdm9yaXRlSWRzKCkge1xuICByZXR1cm4gY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzLm1hcChyZWNpcGUgPT4ge1xuICAgIHJldHVybiByZWNpcGUuaWQ7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlckZpbHRlclRhZ3MocmVjaXBlQ29sbGVjdGlvbikge1xuICBjb25zdCBhbGxGaWx0ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZVRhZ3MnKTtcblxuICBjb25zdCByZWNpcGVUYWdzID0gcmVjaXBlQ29sbGVjdGlvbi5yZWNpcGVzLnJlZHVjZSgoYWNjLCByZWNpcGUpID0+IHtcbiAgICByZWNpcGUudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBpZiAoYWNjW3RhZ10pIHtcbiAgICAgICAgYWNjW3RhZ10gKz0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjW3RhZ10gPSAxXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgY29uc3QgdGFnTWFya3VwID0gT2JqZWN0LmVudHJpZXMocmVjaXBlVGFncykubWFwKHRhZyA9PiB7XG4gICAgY29uc3QgW3RhZ05hbWUsIHF1YW50aXR5XSA9IHRhZztcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz0ncmVjaXBlLXRhZyc+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPSdyZWNpcGUtdGFnLWlucHV0J1xuICAgICAgICAgIHR5cGU9J3JhZGlvJ1xuICAgICAgICAgIGlkPVwiJHt0YWdOYW1lfVwiXG4gICAgICAgICAgbmFtZT1cIiR7dGFnTmFtZX1cIlxuICAgICAgICAgIHZhbHVlPVwiJHt0YWdOYW1lfVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiJHt0YWdOYW1lfVwiPiR7dGFnTmFtZX1cbiAgICAgICAgICA8c3BhbiBjbGFzcz0ncmVjaXBlLXRhZy1xdWFudGl0eSc+ICAoJHtxdWFudGl0eX0pPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+YFxuICB9KS5qb2luKCcnKTtcblxuICBjb25zdCBjbGVhckZpbHRlcnMgPSBgXG4gIDxkaXYgY2xhc3M9J2NsZWFyLWZpbHRlcnMnPlxuICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbicgaWQ9J2NsZWFyRmlsdGVycyc+Q2xlYXIgRmlsdGVyczwvYnV0dG9uPlxuICA8L2Rpdj5gXG5cbiAgYWxsRmlsdGVycy5pbm5lckhUTUwgPSB0YWdNYXJrdXAgKyBjbGVhckZpbHRlcnM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclVJQnlUYWcoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSArPSAnIGNsaWNrZWQnO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWNpcGUtdGFnLWlucHV0LmNsaWNrZWQnKTtcbiAgICBjb25zdCByYWRpb0J1dHRvbklkcyA9IFsuLi5yYWRpb0J1dHRvbnNdLm1hcChidXR0b24gPT4ge1xuICAgICAgcmV0dXJuIGJ1dHRvbi5pZDtcbiAgICB9KVxuICAgIGNvbnN0IHJlY2lwZXMgPSByZWNpcGVDb2xsZWN0aW9uLmZpbHRlckJ5VGFnKHJhZGlvQnV0dG9uSWRzKTtcbiAgICByZW5kZXJSZWNpcGVzKHJlY2lwZXMpO1xuICAgIHJldHVyblxuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdjbGVhckZpbHRlcnMnKSB7XG4gICAgcmVuZGVyUmVjaXBlcyhyZWNpcGVDb2xsZWN0aW9uLnJlY2lwZXMpO1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWNpcGUtdGFnLWlucHV0LmNsaWNrZWQnKTtcbiAgICByYWRpb0J1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgIGJ1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lUmVjaXBlQ2xpY2soZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ2Zhdm9yaXRlLWljb24nKSkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCdhY3RpdmUnKSkge1xuICAgICAgcmVtb3ZlRnJvbUZhdm9yaXRlcyhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRvRmF2b3JpdGVzTGlzdChldmVudCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2FkZFRvQ29va0ljb24nKSB7XG4gICAgYWRkVG9Db29rKGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWNpcGVJZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYXJ0aWNsZVwiKS5pZCk7XG4gICAgY29uc3QgbWF0Y2hpbmdSZWNpcGUgPSByZWNpcGVDb2xsZWN0aW9uLnJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICAgICAgaWYgKHJlY2lwZS5pZCA9PT0gcmVjaXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGRpc3BsYXlSZWNpcGUobWF0Y2hpbmdSZWNpcGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlY2lwZShtYXRjaGluZ1JlY2lwZSkge1xuICBjb25zdCB1c2VyRmF2b3JpdGVzID0gZ2V0VXNlcnNGYXZvcml0ZUlkcygpO1xuICBjb25zdCBpc0Zhdm9yaXRlID0gdXNlckZhdm9yaXRlcy5pbmNsdWRlcyhtYXRjaGluZ1JlY2lwZS5pZCk7XG4gIGNvbnN0IGZhdm9yaXRlQ2xhc3MgPSBpc0Zhdm9yaXRlID8gJ2FjdGl2ZScgOiAnJztcbiAgY29uc3QgbWF0Y2hpbmdSZWNpcGVJbmcgPSBtYXRjaGluZ1JlY2lwZS5yZXR1cm5JbmdyZWRpZW50cyhpbmdyZWRpZW50cyk7XG4gIGNvbnN0IGZvcm1hdHRlZEluZ3JlZGllbnRzID0gbWF0Y2hpbmdSZWNpcGVJbmcubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgIHJldHVybiBgPGJyPjxzdHJvbmc+JHtpbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+IC0gJHtpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudH0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9PC9icj5gXG4gIH0pLmpvaW4oJycpO1xuICBjb25zdCBtYXRjaGluZ1JlY2lwZUluc3QgPSBtYXRjaGluZ1JlY2lwZS5yZXR1cm5JbnN0cnVjdGlvbnMoKVxuICBjb25zb2xlLmxvZyhcIm1hdGNoaW5nUmVjaXBlSW5zdCBcIiwgbWF0Y2hpbmdSZWNpcGVJbnN0KTtcbiAgY29uc3QgZm9ybWF0dGVkSW5zdHJ1Y3Rpb25zID0gbWF0Y2hpbmdSZWNpcGVJbnN0Lm1hcChpbnN0cnVjdGlvbiA9PiB7XG4gICAgcmV0dXJuIGA8YnI+PGVtPlN0ZXA8L2VtPiAke2luc3RydWN0aW9ufTwvYnI+YFxuICB9KS5qb2luKCcnKVxuICByZWNpcGVNb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPSdtb2RhbC1jb250ZW50JyBpZD0nJHttYXRjaGluZ1JlY2lwZS5pZH0nPlxuICAgICAgICA8ZGl2IGNsYXNzPSd4Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1pY29ucyc+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9J2Zhdm9yaXRlLWhlYXJ0JyBpZD0nZmF2b3JpdGVIZWFydCc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz0ke0hFQVJUX0lDT059XG4gICAgICAgICAgICAgIGNsYXNzPSdmYXZvcml0ZS1pY29uICR7ZmF2b3JpdGVDbGFzc30nXG4gICAgICAgICAgICAgIGlkPSdmYXZvcml0ZUljb24nIGFsdD0naGVhcnQtaWNvbicvPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz0nYWRkLXRvLWNvb2snIGlkPSdhZGRUb0Nvb2snPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9JHtQTFVTX0lDT059XG4gICAgICAgICAgICAgIGNsYXNzPSdhZGQtdG8tY29vay1pY29uJ1xuICAgICAgICAgICAgICBpZD0nYWRkVG9Db29rSWNvbicgYWx0PSdwbHVzLWljb24nLz5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8aW1nIGlkPSdjbG9zZU1vZGFsJyBzcmM9JHtDTE9TRV9JQ09OfSBjbGFzcz0neC1pY29uJy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxJbWdcIlxuICAgICAgICAgICAgICBzcmM9JyR7bWF0Y2hpbmdSZWNpcGUuaW1hZ2V9J1xuICAgICAgICAgICAgICBhbHQ9XCJyZWNpcGUgaW1hZ2VcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1vZGFsLWltZ1wiPlxuICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgIGNsYXNzPSdtb2RhbC1oZWFkZXInXG4gICAgICAgICAgICAgIGlkPSdtb2RhbEhlYWRlcic+JHttYXRjaGluZ1JlY2lwZS5uYW1lfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWRldGFpbHMnPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPSdhbGwtbW9kYWwtaW5nJz5cbiAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaW5ncmVkaWVudHMnPlxuICAgICAgICAgICAgPGgzIGNsYXNzPSdpbmdyZWRpZW50LWhlYWRlcic+SW5ncmVkaWVudHM6PC9oMz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3M9J2luZ3JlZGllbnRzJ1xuICAgICAgICAgICAgICBpZD0ncmVjaXBlSW5ncmVkaWVudHMnPiR7Zm9ybWF0dGVkSW5ncmVkaWVudHN9PC9wPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29zdCc+XG4gICAgICAgICAgICA8aDMgY2xhc3M9J2Nvc3QtaGVhZGVyJz5Db3N0IG9mIEluZ3JlZGllbnRzOjwvaDM+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzPSd0b3RhbC1jb3N0J1xuICAgICAgICAgICAgICBpZD0ndG90YWxDb3N0Jz4ke21hdGNoaW5nUmVjaXBlLmNhbGN1bGF0ZUNvc3QoaW5ncmVkaWVudHMpfTwvcD5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPSdtb2RhbC1pbnN0cnVjdGlvbnMnPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnN0cnVjdGlvbnMtZGl2Jz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz0naW5zdHJ1Y3Rpb25zLWhlYWRlcic+SW5zdHJ1Y3Rpb25zOjwvaDM+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgY2xhc3M9J2luc3RydWN0aW9ucydcbiAgICAgICAgICAgICBpZD0naW5zdHJ1Y3Rpb25zJz4ke2Zvcm1hdHRlZEluc3RydWN0aW9uc308L3A+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvYXJ0aWNsZT5gXG4gIG9wZW5Nb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIHJlY2lwZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZU1vZGFsQ2xpY2soZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2Nsb3NlTW9kYWwnKSB7XG4gICAgcmVjaXBlTW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVjaXBlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCdmYXZvcml0ZS1pY29uJykpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnYWN0aXZlJykpIHtcbiAgICAgIHJlbW92ZUZyb21GYXZvcml0ZXMoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb0Zhdm9yaXRlc0xpc3QoZXZlbnQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdhZGRUb0Nvb2tJY29uJykge1xuICAgIGFkZFRvQ29vayhldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9GYXZvcml0ZXNMaXN0KGV2ZW50KSB7XG4gIGNvbnN0IGNsaWNrZWRSZWNpcGUgPSBwYXJzZUludChldmVudC50YXJnZXQuY2xvc2VzdCgnYXJ0aWNsZScpLmlkKTtcbiAgYWN0aXZhdGUoZXZlbnQudGFyZ2V0KTtcblxuICBjb25zdCBtYXRjaGVkUmVjaXBlID0gcmVjaXBlQ29sbGVjdGlvbi5yZWNpcGVzLmZpbmQoKHJlY2lwZSkgPT4ge1xuICAgIHJldHVybiByZWNpcGUuaWQgPT09IGNsaWNrZWRSZWNpcGU7XG4gIH0pO1xuICBjdXJyZW50VXNlci5hZGRUb0Zhdm9yaXRlcyhtYXRjaGVkUmVjaXBlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUZhdm9yaXRlcyhldmVudCkge1xuICBjb25zdCBjbGlja2VkUmVjaXBlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2FydGljbGUnKS5pZCk7XG4gIGRlYWN0aXZhdGUoZXZlbnQudGFyZ2V0KTtcbiAgY29uc3QgbWF0Y2hlZFJlY2lwZSA9IHJlY2lwZUNvbGxlY3Rpb24ucmVjaXBlcy5maW5kKChyZWNpcGUpID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLmlkID09PSBjbGlja2VkUmVjaXBlO1xuICB9KTtcbiAgY3VycmVudFVzZXIucmVtb3ZlRnJvbUZhdm9yaXRlcyhtYXRjaGVkUmVjaXBlKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Db29rKGV2ZW50KSB7XG4gIGNvbnN0IGNsaWNrZWRSZWNpcGUgPSBwYXJzZUludChldmVudC50YXJnZXQuY2xvc2VzdCgnYXJ0aWNsZScpLmlkKTtcbiAgY29uc3QgbWF0Y2hlZFJlY2lwZSA9IHJlY2lwZUNvbGxlY3Rpb24ucmVjaXBlcy5maW5kKChyZWNpcGUpID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLmlkID09PSBjbGlja2VkUmVjaXBlO1xuICB9KTtcbiAgY3VycmVudFVzZXIuYWRkVG9SZWNpcGVzVG9Db29rKG1hdGNoZWRSZWNpcGUpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZShlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGUoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hOYW1lT3JJbmdyZWRpZW50KGV2ZW50KSB7XG4gIGNvbnN0IHNlYXJjaFRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIGlmIChmYXZvcml0ZVJlY2lwZXMuaW5uZXJIVE1MID09PSAnU2hvdyBBbGwgUmVjaXBlcycpIHtcbiAgICBsZXQgZmF2b3JpdGVSZXN1bHQgPSBjdXJyZW50VXNlci5maW5kRmF2b3JpdGVzKHNlYXJjaFRleHQpO1xuICAgIHJlbmRlclJlY2lwZXMoZmF2b3JpdGVSZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuYW1lUmVzdWx0ID0gcmVjaXBlQ29sbGVjdGlvbi5maWx0ZXJCeU5hbWUoc2VhcmNoVGV4dCk7XG4gICAgbGV0IGluZ3JlZGllbnRSZXN1bHQgPSByZWNpcGVDb2xsZWN0aW9uLmZpbHRlckJ5SW5ncmVkaWVudChzZWFyY2hUZXh0KTtcbiAgICBsZXQgZmluYWxSZXN1bHQgPSBbLi4ubmFtZVJlc3VsdCwgLi4uaW5ncmVkaWVudFJlc3VsdF07XG4gICAgcmVuZGVyUmVjaXBlcyhbLi4ubmV3IFNldChmaW5hbFJlc3VsdCldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmF2b3JpdGVSZWNpcGVzKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuaW5uZXJIVE1MID09PSAnU2hvdyBBbGwgUmVjaXBlcycpIHtcbiAgICByZW5kZXJSZWNpcGVzKHJlY2lwZUNvbGxlY3Rpb24ucmVjaXBlcyk7XG4gICAgZmF2b3JpdGVSZWNpcGVzLmlubmVySFRNTCA9ICdNeSBGYXZvcml0ZSBSZWNpcGVzJztcbiAgfSBlbHNlIHtcbiAgICBmYXZvcml0ZVJlY2lwZXMuaW5uZXJIVE1MID0gJ1Nob3cgQWxsIFJlY2lwZXMnO1xuICAgIGlmICghY3VycmVudFVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCkge1xuICAgICAgYWxsUmVjaXBlc1NlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz0nZmF2b3JpdGVzLXRleHQnPlxuICAgICAgICA8cCBjbGFzcz0nbm8tcmVjaXBlcyc+T2ggbm8hIFlvdSBoYXZlIG5vIGZhdm9yaXRlcyB0byBkaXNwbGF5ITwvcD5cbiAgICAgIDwvZGl2PmBcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyUmVjaXBlcyhjdXJyZW50VXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UmVjaXBlc1RvQ29vayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PT0gJ1Nob3cgQWxsIFJlY2lwZXMnKSB7XG4gICAgcmVuZGVyUmVjaXBlcyhyZWNpcGVDb2xsZWN0aW9uLnJlY2lwZXMpO1xuICAgIHJlY2lwZXNUb0Nvb2suaW5uZXJIVE1MID0gJ015IFJlY2lwZXMgVG8gQ29vayc7XG4gIH0gZWxzZSB7XG4gICAgcmVjaXBlc1RvQ29vay5pbm5lckhUTUwgPSAnU2hvdyBBbGwgUmVjaXBlcyc7XG4gICAgaWYgKCFjdXJyZW50VXNlci5yZWNpcGVzVG9Db29rLmxlbmd0aCkge1xuICAgICAgYWxsUmVjaXBlc1NlY3Rpb24uaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz0nbm8tcmVjaXBlcy10ZXh0Jz5cbiAgICAgICAgPHAgY2xhc3M9J25vLXJlY2lwZXMnPkFkZCBhIGZldyByZWNpcGVzIHRvIGNvb2shPC9wPlxuICAgICAgPC9kaXY+YFxuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJSZWNpcGVzKGN1cnJlbnRVc2VyLnJlY2lwZXNUb0Nvb2spO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=