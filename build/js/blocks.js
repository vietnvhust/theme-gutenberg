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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks.js":
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_blocks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/blocks.scss */ "./src/scss/blocks.scss");
/* harmony import */ var _scss_blocks_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_blocks_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gutenberg_blocks_heading_with_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/blocks/heading-with-icon */ "./src/js/gutenberg/blocks/heading-with-icon/index.js");



/***/ }),

/***/ "./src/js/gutenberg/blocks/heading-with-icon/edit.js":
/*!***********************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-with-icon/edit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-map */ "./src/js/gutenberg/blocks/heading-with-icon/icons-map.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Edit = function Edit(props) {
  var className = props.className,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  var option = attributes.option,
      content = attributes.content;
  var HeadingIcon = Object(_icons_map__WEBPACK_IMPORTED_MODULE_4__["getIconComponent"])(option);
  return /*#__PURE__*/React.createElement("div", {
    className: 'chestnut-icon-heading'
  }, /*#__PURE__*/React.createElement("span", {
    className: 'chestnut-icon-heading__heading'
  }, /*#__PURE__*/React.createElement(HeadingIcon, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "h4",
    value: content,
    onChange: function onChange(content) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        content: content
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Heading...', 'chestnut')
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block Settings', 'chestnut')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select the icon', 'chestnut'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Controls icon selection', 'chestnut'),
    selected: option,
    options: [{
      label: 'Dos',
      value: 'dos'
    }, {
      label: "Dont's",
      value: 'donts'
    }],
    onChange: function onChange(optionVal) {
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        option: optionVal
      }));
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/heading-with-icon/icons-map.js":
/*!****************************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-with-icon/icons-map.js ***!
  \****************************************************************/
/*! exports provided: getIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconComponent", function() { return getIconComponent; });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../icons */ "./src/js/icons/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var getIconComponent = function getIconComponent(option) {
  var IconsMap = {
    dos: _icons__WEBPACK_IMPORTED_MODULE_0__["Check"],
    donts: _icons__WEBPACK_IMPORTED_MODULE_0__["Cross"]
  };
  return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(option) && option in IconsMap ? IconsMap[option] : IconsMap.dos;
};

/***/ }),

/***/ "./src/js/gutenberg/blocks/heading-with-icon/index.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-with-icon/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/heading-with-icon/edit.js");
/* harmony import */ var _icons_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons-map */ "./src/js/gutenberg/blocks/heading-with-icon/icons-map.js");






var blockStyle = {
  backgroundColor: '#900',
  color: '#fff',
  padding: '20px'
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('chestnut-blocks/heading', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Heading with icon", 'chestnut'),
  icon: 'admin-customizer',
  category: 'chestnut',
  attributes: {
    option: {
      type: 'string',
      default: 'dos'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Heading", 'chestnut')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(props) {
    var _props$attributes = props.attributes,
        option = _props$attributes.option,
        content = _props$attributes.content;
    var HeadingIcon = Object(_icons_map__WEBPACK_IMPORTED_MODULE_6__["getIconComponent"])(option);
    return /*#__PURE__*/React.createElement("div", {
      className: "aquila-icon-heading"
    }, /*#__PURE__*/React.createElement("span", {
      className: "aquila-icon-heading__heading"
    }, /*#__PURE__*/React.createElement(HeadingIcon, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      tagName: "h4",
      value: content
    }));
  }
});

/***/ }),

/***/ "./src/js/icons/Check.js":
/*!*******************************!*\
  !*** ./src/js/icons/Check.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 417.813 417"
  }, props), /*#__PURE__*/React.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0",
    fill: "#06ab1c",
    "data-original": "#2196f3"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCheck);

/***/ }),

/***/ "./src/js/icons/Cross.js":
/*!*******************************!*\
  !*** ./src/js/icons/Cross.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgCross(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 123.05 123.05"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M121.325 10.925l-8.5-8.399c-2.3-2.3-6.1-2.3-8.5 0l-42.4 42.399L18.726 1.726c-2.301-2.301-6.101-2.301-8.5 0l-8.5 8.5c-2.301 2.3-2.301 6.1 0 8.5l43.1 43.1-42.3 42.5c-2.3 2.3-2.3 6.1 0 8.5l8.5 8.5c2.3 2.3 6.1 2.3 8.5 0l42.399-42.4 42.4 42.4c2.3 2.3 6.1 2.3 8.5 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.5l-42.5-42.4 42.4-42.399a6.13 6.13 0 00.1-8.602z",
    fill: "#e30101",
    "data-original": "#000000",
    xmlns: "http://www.w3.org/2000/svg"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCross);

/***/ }),

/***/ "./src/js/icons/index.js":
/*!*******************************!*\
  !*** ./src/js/icons/index.js ***!
  \*******************************/
/*! exports provided: Check, Cross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Check */ "./src/js/icons/Check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return _Check__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cross */ "./src/js/icons/Cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cross", function() { return _Cross__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/scss/blocks.scss":
/*!******************************!*\
  !*** ./src/scss/blocks.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=blocks.js.map