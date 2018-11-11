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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz9iYWJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/normalize.css/normalize.css\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n\n__webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n\n//import hammer from \"hammerjs\"\n\nconst sHeight = document.querySelector(\".a\").clientHeight;\nconst sLength = document.querySelectorAll(\".section\").length;\nconst mainWrap = document.querySelector(\".main-wrap\");\nconst main = document.querySelector(\".main\");\nconst PCT = 0.1; //移动多少百分比触发scroll\nlet sIndex = 0;\nlet isScroll = false;\nlet sMoveStart, sMoveEnd, sMove, percentage;\n\nlet scrollTo = i => {\n    isScroll = true;\n    main.style.top = `${-i * sHeight}px`;\n    setTimeout(() => {\n        isScroll = false;\n    }, 700);\n};\n\nmainWrap.addEventListener(\"touchstart\", e => {\n    sMoveStart = e.changedTouches[0].clientY;\n    mainWrap.addEventListener(\"touchend\", e => {\n        sMoveEnd = e.changedTouches[0].clientY;\n        sMove = sMoveStart - sMoveEnd;\n        percentage = Math.abs(sMove) / sHeight;\n        if (sMove > 0 && percentage > PCT && !isScroll && sIndex !== sLength - 1) {\n            sIndex++;\n            scrollTo(sIndex);\n        }\n        if (sMove < 0 && percentage > PCT && !isScroll && sIndex !== 0) {\n            sIndex--;\n            scrollTo(sIndex);\n        }\n    });\n});\n\nArray.from(document.querySelector(\".a\").querySelectorAll(\"p\")).forEach(p => {\n    p.addEventListener(\"click\", () => {\n        sIndex = 1;\n        scrollTo(1);\n    });\n});\n\ndocument.querySelector(\".d\").querySelector(\"span\").addEventListener(\"click\", () => {\n    sIndex = 0;\n    scrollTo(0);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tYWluLnNjc3NcIlxuaW1wb3J0IFwibm9ybWFsaXplLmNzc1wiXG4vL2ltcG9ydCBoYW1tZXIgZnJvbSBcImhhbW1lcmpzXCJcblxuY29uc3Qgc0hlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYVwiKS5jbGllbnRIZWlnaHRcbmNvbnN0IHNMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIikubGVuZ3RoXG5jb25zdCBtYWluV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwXCIpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG5jb25zdCBQQ1QgPSAwLjEgLy/np7vliqjlpJrlsJHnmb7liIbmr5Top6blj5FzY3JvbGxcbmxldCBzSW5kZXggPSAwXG5sZXQgaXNTY3JvbGwgPSBmYWxzZVxubGV0IHNNb3ZlU3RhcnQsIHNNb3ZlRW5kLCBzTW92ZSwgcGVyY2VudGFnZVxuXG5sZXQgc2Nyb2xsVG8gPSBpID0+IHtcbiAgICBpc1Njcm9sbCA9IHRydWVcbiAgICBtYWluLnN0eWxlLnRvcCA9IGAkey1pICogc0hlaWdodH1weGBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaXNTY3JvbGwgPSBmYWxzZVxuICAgIH0sIDcwMClcbn1cblxubWFpbldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZSA9PiB7XG4gICAgc01vdmVTdGFydCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIG1haW5XcmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBlID0+IHtcbiAgICAgICAgc01vdmVFbmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgc01vdmUgPSBzTW92ZVN0YXJ0IC0gc01vdmVFbmRcbiAgICAgICAgcGVyY2VudGFnZSA9IE1hdGguYWJzKHNNb3ZlKSAvIHNIZWlnaHRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc01vdmUgPiAwICYmXG4gICAgICAgICAgICBwZXJjZW50YWdlID4gUENUICYmXG4gICAgICAgICAgICAhaXNTY3JvbGwgJiZcbiAgICAgICAgICAgIHNJbmRleCAhPT0gc0xlbmd0aCAtIDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzSW5kZXgrK1xuICAgICAgICAgICAgc2Nyb2xsVG8oc0luZGV4KVxuICAgICAgICB9XG4gICAgICAgIGlmIChzTW92ZSA8IDAgJiYgcGVyY2VudGFnZSA+IFBDVCAmJiAhaXNTY3JvbGwgJiYgc0luZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICBzSW5kZXgtLVxuICAgICAgICAgICAgc2Nyb2xsVG8oc0luZGV4KVxuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpKS5mb3JFYWNoKHAgPT4ge1xuICAgIHAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc0luZGV4ID0gMVxuICAgICAgICBzY3JvbGxUbygxKVxuICAgIH0pXG59KVxuXG5kb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRcIilcbiAgICAucXVlcnlTZWxlY3RvcihcInNwYW5cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc0luZGV4ID0gMFxuICAgICAgICBzY3JvbGxUbygwKVxuICAgIH0pXG5cblxuXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Nzcz8xMGNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.scss\n");

/***/ })

/******/ });