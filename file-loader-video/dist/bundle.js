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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./url-loader-video/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./url-loader-video/src/css/estilos.css":
/*!**********************************************!*\
  !*** ./url-loader-video/src/css/estilos.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./url-loader-video/src/css/estilos.css?");

/***/ }),

/***/ "./url-loader-video/src/images/logo.png":
/*!**********************************************!*\
  !*** ./url-loader-video/src/images/logo.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./url-loader-video/src/images/logo.png?");

/***/ }),

/***/ "./url-loader-video/src/js/index.js":
/*!******************************************!*\
  !*** ./url-loader-video/src/js/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/estilos.css */ \"./url-loader-video/src/css/estilos.css\");\n\nvar _message = __webpack_require__(/*! ./message.js */ \"./url-loader-video/src/js/message.js\");\n\nvar _logo = __webpack_require__(/*! ../images/logo.png */ \"./url-loader-video/src/images/logo.png\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _queEsCore = __webpack_require__(/*! ../video/que-es-core.mp4 */ \"./url-loader-video/src/video/que-es-core.mp4\");\n\nvar _queEsCore2 = _interopRequireDefault(_queEsCore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.write(_message.firstMessage);\n(0, _message.delayedMessage)();\n\nvar img = document.createElement(\"img\");\nimg.setAttribute(\"src\", _logo2.default);\nimg.setAttribute(\"width\", 50);\nimg.setAttribute(\"height\", 50);\ndocument.body.append(img);\n\nvar video = document.createElement(\"video\");\nvideo.setAttribute(\"src\", _queEsCore2.default);\nvideo.setAttribute(\"width\", 480);\nvideo.setAttribute(\"autoplay\", true);\nvideo.setAttribute(\"controls\", true);\ndocument.body.append(video);\n\nconsole.log(\"Hola mundo desde webpack.config\");\n\n//# sourceURL=webpack:///./url-loader-video/src/js/index.js?");

/***/ }),

/***/ "./url-loader-video/src/js/make-message.js":
/*!*************************************************!*\
  !*** ./url-loader-video/src/js/make-message.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction makeMessage(msg) {\n  var element = document.createElement(\"p\");\n  element.textContent = msg;\n  return element;\n}\n\nexports.default = makeMessage;\n\n//# sourceURL=webpack:///./url-loader-video/src/js/make-message.js?");

/***/ }),

/***/ "./url-loader-video/src/js/message.js":
/*!********************************************!*\
  !*** ./url-loader-video/src/js/message.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _renderToDom = __webpack_require__(/*! ./render-to-dom.js */ \"./url-loader-video/src/js/render-to-dom.js\");\n\nvar _renderToDom2 = _interopRequireDefault(_renderToDom);\n\nvar _makeMessage = __webpack_require__(/*! ./make-message.js */ \"./url-loader-video/src/js/make-message.js\");\n\nvar _makeMessage2 = _interopRequireDefault(_makeMessage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar waitTime = new Promise(function (todoOk, todoMal) {\n  setTimeout(function () {\n    todoOk(\"Han pasado 3 segundos!\");\n  }, 3000);\n});\n\nmodule.exports = {\n  firstMessage: \"hola mundo desde un módulo\",\n  delayedMessage: async function delayedMessage() {\n    var message = await waitTime;\n    console.log(message);\n    (0, _renderToDom2.default)((0, _makeMessage2.default)(message));\n  }\n};\n\n//# sourceURL=webpack:///./url-loader-video/src/js/message.js?");

/***/ }),

/***/ "./url-loader-video/src/js/render-to-dom.js":
/*!**************************************************!*\
  !*** ./url-loader-video/src/js/render-to-dom.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function renderToDom(element) {\n  document.body.append(element);\n};\n\n//# sourceURL=webpack:///./url-loader-video/src/js/render-to-dom.js?");

/***/ }),

/***/ "./url-loader-video/src/video/que-es-core.mp4":
/*!****************************************************!*\
  !*** ./url-loader-video/src/video/que-es-core.mp4 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"video/que-es-core.7a8923a28f2c8458d615a3f8743d8339.mp4\";\n\n//# sourceURL=webpack:///./url-loader-video/src/video/que-es-core.mp4?");

/***/ })

/******/ });