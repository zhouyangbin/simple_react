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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: [BABEL] C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\src\\May.js: Unknown option: .targets. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.\n    at throwUnknownError (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:123:11)\n    at Object.keys.forEach.key (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:107:5)\n    at Array.forEach (<anonymous>)\n    at validateNested (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:83:21)\n    at validate (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:74:10)\n    at instantiatePreset (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\full.js:244:36)\n    at cachedFunction (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\caching.js:33:19)\n    at loadPresetDescriptor (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\full.js:235:45)\n    at config.presets.reduce (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\full.js:77:21)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\full.js:74:38)\n    at loadFullConfig (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\config\\full.js:108:6)\n    at transformSync (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\transform.js:41:38)\n    at Object.transform (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\@babel\\core\\lib\\transform.js:22:38)\n    at transpile (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\babel-loader\\lib\\index.js:50:20)\n    at Object.module.exports (C:\\Users\\Zhouyb\\Desktop\\simple_react\\MayReact\\node_modules\\babel-loader\\lib\\index.js:173:20)");

/***/ })
/******/ ]);