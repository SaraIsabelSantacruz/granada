module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/book.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/saraisabelsantacruzcano/Code/React/granadaTest/components/book.js";



function Book(props) {
  var publishDate = props.publishDate;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2169412544" + " " + "container-book"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2169412544" + " " + "container-image"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "http://picsum.photos/200/300/?image=".concat(props.id),
    alt: "",
    width: 200,
    height: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2169412544"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-2169412544"
  }, props.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-2169412544"
  }, publishDate), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-2169412544"
  }, props.description), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-2169412544"
  }, props.excerpt), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2169412544",
    css: "h3.jsx-2169412544{margin:4px;}img.jsx-2169412544{cursor:pointer;}.container-book.jsx-2169412544{margin-top:2%;}.container-image.jsx-2169412544{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm9vay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBR3FCLEFBR0ksQUFHRCxBQUdJLFdBUm5CLEdBTUEsQ0FIQSxHQU1BIiwiZmlsZSI6ImNvbXBvbmVudHMvYm9vay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWlzYWJlbHNhbnRhY3J1emNhbm8vQ29kZS9SZWFjdC9ncmFuYWRhVGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEJvb2sgKHByb3BzKXtcbiAgbGV0IHB1Ymxpc2hEYXRlID0gcHJvcHMucHVibGlzaERhdGU7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1ib29rXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbWFnZVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgaHR0cDovL3BpY3N1bS5waG90b3MvMjAwLzMwMC8/aW1hZ2U9JHtwcm9wcy5pZH1gfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgPHNwYW4+e3B1Ymxpc2hEYXRlfTwvc3Bhbj5cbiAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8cD57cHJvcHMuZXhjZXJwdH08L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW46NHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyLWJvb2t7XG4gICAgICAgICAgbWFyZ2luLXRvcDoyJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyLWltYWdle1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcbiJdfQ== */\n/*@ sourceURL=components/book.js */"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Book);

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/Users/saraisabelsantacruzcano/Code/React/granadaTest/components/layout.js";





function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2646481728"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2646481728"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2646481728"
  }, "granada.io")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2646481728"
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "173269899",
    css: "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN5QixBQUdpQixTQUNWIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXJhaXNhYmVsc2FudGFjcnV6Y2Fuby9Db2RlL1JlYWN0L2dyYW5hZGFUZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmZ1bmN0aW9uIExheW91dChwcm9wcyl7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgICAgPHRpdGxlPmdyYW5hZGEuaW88L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlcj48L2hlYWRlcj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjQwRjQ3O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=components/layout.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3432157730",
    css: "header.jsx-2646481728{height:70px;background:#F40F47;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CZ0IsQUFHcUIsWUFDTyxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhcmFpc2FiZWxzYW50YWNydXpjYW5vL0NvZGUvUmVhY3QvZ3JhbmFkYVRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKXtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICA8dGl0bGU+Z3JhbmFkYS5pbzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyPjwvaGVhZGVyPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNDBGNDc7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=components/layout.js */"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/book.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_book__ = __webpack_require__("./components/book.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__);

var _jsxFileName = "/Users/saraisabelsantacruzcano/Code/React/granadaTest/pages/book.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        book: {}
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        book: this.props.book
      });
    }
  }, {
    key: "render",
    value: function render() {
      var book = this.state.book;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_layout__["a" /* default */], {
        title: (book.Title, book.PublishDate),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_book__["a" /* default */], {
        title: book.Title,
        publishDate: book.PublishDate,
        id: book.ID,
        description: book.Description,
        excerpt: book.Excerpt,
        "data-id": book.ID,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        route: "edit",
        params: {
          slug: 'edit',
          id: book.ID
        },
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-1325089092" + " " + "btn"
      }, "Editar")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1325089092",
        css: ".btn.jsx-1325089092{padding:8px 22px;background:#DA111B;color:#fff;font-size:17px;border:1px solid black;cursor:pointer;width:3%;border-radius:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUc4QixpQkFDRSxtQkFDUixXQUNJLGVBQ1EsdUJBQ1IsZUFDTixTQUNVLG1CQUV2QiIsImZpbGUiOiJwYWdlcy9ib29rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXJhaXNhYmVsc2FudGFjcnV6Y2Fuby9Db2RlL1JlYWN0L2dyYW5hZGFUZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBCb29rIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vaydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHN0YXRlPXtcbiAgICBib29rOnt9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSl7XG4gICAgbGV0IGlkQm9vayA9IHF1ZXJ5LmlkXG4gICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Zha2VyZXN0YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9ib29rcy8ke2lkQm9va31gKVxuICAgIGxldCBqc29uID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIHJldHVybiB7IGJvb2s6IGpzb24gfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYm9vazogdGhpcy5wcm9wcy5ib29rXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGJvb2sgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dFxuICAgICAgICB0aXRsZT17Ym9vay5UaXRsZSwgYm9vay5QdWJsaXNoRGF0ZX1cbiAgICAgID5cbiAgICAgICAgPEJvb2tcbiAgICAgICAgICB0aXRsZSA9IHtib29rLlRpdGxlfVxuICAgICAgICAgIHB1Ymxpc2hEYXRlID0ge2Jvb2suUHVibGlzaERhdGV9XG4gICAgICAgICAgaWQgPSB7Ym9vay5JRH1cbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtib29rLkRlc2NyaXB0aW9ufVxuICAgICAgICAgIGV4Y2VycHQgPSB7Ym9vay5FeGNlcnB0fVxuICAgICAgICAgIGRhdGEtaWQgPSB7Ym9vay5JRH1cbiAgICAgICAgLz5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICByb3V0ZSA9IFwiZWRpdFwiXG4gICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgc2x1ZzogJ2VkaXQnLFxuICAgICAgICAgICAgaWQ6Ym9vay5JRH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJ0bntcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0RBMTExQjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMyU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/book.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var query, idBook, req, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref2.query;
                idBook = query.id;
                _context.next = 4;
                return fetch("https://fakerestapi.azurewebsites.net/api/books/".concat(idBook));

              case 4:
                req = _context.sent;
                _context.next = 7;
                return req.json();

              case 7:
                json = _context.sent;
                return _context.abrupt("return", {
                  book: json
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes");

module.exports = routes().add('index', '/').add('book', '/:slug/:id', 'book').add('edit', '/:slug/:id', 'edit').add('new', '/:slug', 'new');

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/book.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=book.js.map