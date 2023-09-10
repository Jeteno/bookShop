/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/slider/banner1.png":
/*!************************************!*\
  !*** ./src/img/slider/banner1.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6844ef944865335f27f2f4a9e3cd5d18.png");

/***/ }),

/***/ "./src/img/slider/banner2.png":
/*!************************************!*\
  !*** ./src/img/slider/banner2.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c9ef60dcbf2368b1e8ed43b58be2b8b0.png");

/***/ }),

/***/ "./src/img/slider/banner3.png":
/*!************************************!*\
  !*** ./src/img/slider/banner3.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "64b91fc08f2a814db89f50a5b9f21592.png");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _Users_user_Documents_frontend_bookshop_src_img_slider_banner1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/img/slider/banner1.png */ "./src/img/slider/banner1.png");
/* harmony import */ var _Users_user_Documents_frontend_bookshop_src_img_slider_banner2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/img/slider/banner2.png */ "./src/img/slider/banner2.png");
/* harmony import */ var _Users_user_Documents_frontend_bookshop_src_img_slider_banner3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/img/slider/banner3.png */ "./src/img/slider/banner3.png");




function slider() {

   const entities = [
      {
         img: _Users_user_Documents_frontend_bookshop_src_img_slider_banner1_png__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      {
         img: _Users_user_Documents_frontend_bookshop_src_img_slider_banner2_png__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      {
         img: _Users_user_Documents_frontend_bookshop_src_img_slider_banner3_png__WEBPACK_IMPORTED_MODULE_2__["default"]
      }
   ];
   
   const img = document.getElementById('images');

   const sliderDot = document.querySelectorAll('.slider__dot');

   const setEntity = (index) => {
      img.src = entities[index].img
   }

   let currentIndex = 0;
   
   setEntity(currentIndex);

   function thisSlider(index) {
      sliderDot.forEach(item => item.classList.remove('active'));
      sliderDot[index].classList.add('active');
   }

   function sliderDotActive() {
      sliderDot.forEach((dot, index) => {
         dot.addEventListener('click', () => {
            currentIndex = index;
   
            setEntity(currentIndex);
            thisSlider(currentIndex);
         });
      });
   }

   setInterval(() => {
      if(currentIndex == (entities.length - 1)) {
         currentIndex = 0;
      } else {
         currentIndex ++;
      }
      
      setEntity(currentIndex);
      thisSlider(currentIndex);
      sliderDotActive();
   }, 5000);
}



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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _src_modules_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/modules/slider.js */ "./src/modules/slider.js");



(0,_src_modules_slider_js__WEBPACK_IMPORTED_MODULE_1__.slider)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map