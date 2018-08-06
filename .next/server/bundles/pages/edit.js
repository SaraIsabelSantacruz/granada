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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./containers/form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = "/Users/saraisabelsantacruzcano/Code/React/granadaTest/containers/form.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        form: {}
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "sendForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();
        __WEBPACK_IMPORTED_MODULE_2__routes__["Router"].pushRoute('index');

        if (_this.props.type == 'update') {
          fetch("https://fakerestapi.azurewebsites.net/api/Books/".concat(_this.props.item.ID), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(_this.state.form)
          }).catch(function (err) {
            return console.error(err);
          }).then(function (res) {
            return res.json();
          }).then(function (thing) {
            return console.log(thing);
          });
        } else {
          fetch("https://fakerestapi.azurewebsites.net/api/Books", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(_this.state.form)
          }).catch(function (err) {
            return console.log(err);
          }).then(function (res) {
            return res.json();
          }).then(function (thing) {
            return console.log(thing);
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var target = event.target;
        var name = target.name;

        _this.setState({
          form: _objectSpread({}, _this.state.form, _defineProperty({}, name, target.value))
        });
      }
    }), _temp));
  }

  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.type == 'update') {
        var elements = document.querySelectorAll('.FormInput-Input');
        elements[1].value = this.props.item.ID;
        elements[2].value = this.props.item.Title;
        elements[3].value = this.props.item.Description;
        elements[4].value = this.props.item.PageCount;
        elements[5].checked = this.props.item.Excerpt;
        elements[6].checked = this.props.item.PublishDate;
        this.setState({
          form: {
            ID: this.props.item.ID,
            Title: this.props.item.Title,
            Description: this.props.item.Description,
            PageCount: this.props.item.PageCount,
            Excerpt: this.props.item.Excerpt,
            PublishDate: this.props.item.PublishDate
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.form);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-218699562" + " " + "container-form"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-218699562" + " " + "container-img"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "http://picsum.photos/200/300/?image=".concat(this.props.item.ID),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: "jsx-218699562"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-218699562" + " " + "PostForm"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-218699562" + " " + "FormInput"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "ImageURL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-218699562" + " " + "FormInput-Label"
      }, "Image"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "ImageURL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-218699562" + " " + "FormInput-Input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-218699562" + " " + "FormInput"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-218699562" + " " + "FormInput-Label"
      }, "ID"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "ID",
        onChange: function onChange(ev) {
          _this2.setState({
            form: _objectSpread({}, _this2.state.form, {
              ID: ev.target.value
            })
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-218699562" + " " + "FormInput-Input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-218699562" + " " + "FormInput"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-218699562" + " " + "FormInput-Label"
      }, "Title"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "Title",
        onChange: function onChange(ev) {
          _this2.setState({
            form: _objectSpread({}, _this2.state.form, {
              Title: ev.target.value
            })
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-218699562" + " " + "FormInput-Input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: "jsx-218699562" + " " + "container-numbers"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-218699562" + " " + "FormInput"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "PublishDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-218699562" + " " + "FormInput-Label"
      }, "Fecha"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "date",
        name: "PublishDate",
        onChange: function onChange(ev) {
          _this2.setState({
            form: _objectSpread({}, _this2.state.form, {
              PublishDate: ev.target.value
            })
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-218699562" + " " + "FormInput-Input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-218699562" + " " + "FormInput"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "PageCount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        className: "jsx-218699562" + " " + "FormInput-Label"
      }, "N\xBA p\xE1ginas"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "PageCount",
        onChange: function onChange(ev) {
          _this2.setState({
            form: _objectSpread({}, _this2.state.form, {
              PageCount: ev.target.value
            })
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-218699562" + " " + "FormInput-Input"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: "jsx-218699562" + " " + "FormInput"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: "jsx-218699562" + " " + "FormInput-Label"
      }, "Descripcion"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "Description",
        onChange: function onChange(ev) {
          _this2.setState({
            form: _objectSpread({}, _this2.state.form, {
              Description: ev.target.value
            })
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: "jsx-218699562" + " " + "FormInput-Input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-218699562" + " " + "FormInput Textarea"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "Excerpt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-218699562" + " " + "FormInput-Label"
      }, "Extracto"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        type: "text",
        name: "Excerpt",
        onChange: function onChange(ev) {
          _this2.setState({
            form: _objectSpread({}, _this2.state.form, {
              Excerpt: ev.target.value
            })
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-218699562" + " " + "FormInput-Input"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.sendForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        className: "jsx-218699562" + " " + "Form-Btn"
      }, "Guardar")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "218699562",
        css: ".container-form.jsx-218699562{text-align:center;margin-top:2%;}.container-img.jsx-218699562{border:1px solid black;width:200px;margin:auto;height:300px;}.PostForm.jsx-218699562{width:50%;margin:5% auto;text-align:left;}.FormInput.jsx-218699562{margin:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.FormInput.jsx-218699562 input.jsx-218699562{width:78%;display:inline-block;height:20px;border-radius:5px;text-shadow:none;box-shadow:none;border:1px solid #8080805c;}.FormInput.jsx-218699562 label.jsx-218699562{margin-right:5%;width:80px;text-align:end;}.Textarea.jsx-218699562{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.Textarea.jsx-218699562 textarea.jsx-218699562{margin:0px;height:99px;width:482px;border-radius:5px;border:1px solid #80808069;}.container-numbers.jsx-218699562{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.container-numbers.jsx-218699562 .FormInput.jsx-218699562{width:50%;}.container-numbers.jsx-218699562 input.jsx-218699562{width:65%;}.Form-Btn.jsx-218699562{padding:8px 22px;border-radius:5px;background:#DA111B;color:#fff;font-size:17px;float:right;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Sm9CLEFBRytCLEFBSUssQUFNYixBQUtDLEFBS0QsQUFTTSxBQUtKLEFBR0QsQUFPRSxBQUlKLEFBR0EsQUFHUSxVQTNDRixBQVVNLEFBNEJ2QixBQUdBLENBZGMsQ0F0QkMsSUFjRixDQXlCTyxDQXRESixLQUlGLEFBa0NBLEVBM0JJLEVBbUJELElBVEgsQ0FwQmQsR0FJYyxBQWtDTSxBQWdCQyxNQTNDckIsQ0FtQkEsQ0FUb0IsSUFoQkwsTUFrQ2MsQ0FnQmhCLE1BakRiLENBZ0JtQixJQWtDRixTQXZCakIsQUFVZ0MsSUFwQmQsRUFpQmxCLEFBaUJjLE1BMUNrQixNQTJDZixFQWxDWSxhQW1DN0IsY0FsQ0Esb0VBbUJBLFlBNUJBIiwiZmlsZSI6ImNvbnRhaW5lcnMvZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWlzYWJlbHNhbnRhY3J1emNhbm8vQ29kZS9SZWFjdC9ncmFuYWRhVGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJ1xuXG5jbGFzcyBGb3JtICBleHRlbmRzIENvbXBvbmVudHtcblxuICBzdGF0ZSA9IHtcbiAgICBmb3JtOnt9XG4gIH1cblxuICBzZW5kRm9ybSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBSb3V0ZXIucHVzaFJvdXRlKCdpbmRleCcpXG4gICAgaWYodGhpcy5wcm9wcy50eXBlID09ICd1cGRhdGUnKSB7XG4gICAgICBmZXRjaChgaHR0cHM6Ly9mYWtlcmVzdGFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvQm9va3MvJHt0aGlzLnByb3BzLml0ZW0uSUR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmZvcm0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHRoaW5nID0+IGNvbnNvbGUubG9nKHRoaW5nKSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmZXRjaChgaHR0cHM6Ly9mYWtlcmVzdGFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvQm9va3NgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmZvcm0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbih0aGluZyA9PiBjb25zb2xlLmxvZyh0aGluZykpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBpZih0aGlzLnByb3BzLnR5cGUgPT0gJ3VwZGF0ZScpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkZvcm1JbnB1dC1JbnB1dCcpO1xuXG4gICAgICBlbGVtZW50c1sxXS52YWx1ZSA9IHRoaXMucHJvcHMuaXRlbS5JRFxuICAgICAgZWxlbWVudHNbMl0udmFsdWUgPSB0aGlzLnByb3BzLml0ZW0uVGl0bGVcbiAgICAgIGVsZW1lbnRzWzNdLnZhbHVlID0gdGhpcy5wcm9wcy5pdGVtLkRlc2NyaXB0aW9uXG4gICAgICBlbGVtZW50c1s0XS52YWx1ZSA9IHRoaXMucHJvcHMuaXRlbS5QYWdlQ291bnRcbiAgICAgIGVsZW1lbnRzWzVdLmNoZWNrZWQgPSB0aGlzLnByb3BzLml0ZW0uRXhjZXJwdFxuICAgICAgZWxlbWVudHNbNl0uY2hlY2tlZCA9IHRoaXMucHJvcHMuaXRlbS5QdWJsaXNoRGF0ZVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybTp7XG4gICAgICAgICAgSUQ6IHRoaXMucHJvcHMuaXRlbS5JRCxcbiAgICAgICAgICBUaXRsZTogdGhpcy5wcm9wcy5pdGVtLlRpdGxlLFxuICAgICAgICAgIERlc2NyaXB0aW9uOiB0aGlzLnByb3BzLml0ZW0uRGVzY3JpcHRpb24sXG4gICAgICAgICAgUGFnZUNvdW50OiB0aGlzLnByb3BzLml0ZW0uUGFnZUNvdW50LFxuICAgICAgICAgIEV4Y2VycHQ6IHRoaXMucHJvcHMuaXRlbS5FeGNlcnB0LFxuICAgICAgICAgIFB1Ymxpc2hEYXRlOiB0aGlzLnByb3BzLml0ZW0uUHVibGlzaERhdGVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSA9IChldmVudCkgPT57XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm06e1xuICAgICAgICAuLi50aGlzLnN0YXRlLmZvcm0sXG4gICAgICAgIFtuYW1lXTogdGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZvcm0pO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW1nXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgaHR0cDovL3BpY3N1bS5waG90b3MvMjAwLzMwMC8/aW1hZ2U9JHt0aGlzLnByb3BzLml0ZW0uSUR9YH1cbiAgICAgICAgICA+XG5cbiAgICAgICAgICA8L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIlBvc3RGb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtSW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiSW1hZ2VVUkxcIiBjbGFzc05hbWU9XCJGb3JtSW5wdXQtTGFiZWxcIj5JbWFnZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRm9ybUlucHV0LUlucHV0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiSW1hZ2VVUkxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtSW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiSURcIiBjbGFzc05hbWU9XCJGb3JtSW5wdXQtTGFiZWxcIj5JRDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJGb3JtSW5wdXQtSW5wdXRcIlxuICAgICAgICAgICAgICBuYW1lPVwiSURcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBmb3JtOiB7IC4uLnRoaXMuc3RhdGUuZm9ybSwgSUQ6IGV2LnRhcmdldC52YWx1ZSB9IH0pIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybUlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlRpdGxlXCIgY2xhc3NOYW1lPVwiRm9ybUlucHV0LUxhYmVsXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJGb3JtSW5wdXQtSW5wdXRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4geyB0aGlzLnNldFN0YXRlKHsgZm9ybTogeyAuLi50aGlzLnN0YXRlLmZvcm0sIFRpdGxlOiBldi50YXJnZXQudmFsdWUgfSB9KSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1udW1iZXJzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvcm1JbnB1dFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlB1Ymxpc2hEYXRlXCIgY2xhc3NOYW1lPVwiRm9ybUlucHV0LUxhYmVsXCI+RmVjaGE8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkZvcm1JbnB1dC1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiUHVibGlzaERhdGVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4geyB0aGlzLnNldFN0YXRlKHsgZm9ybTogeyAuLi50aGlzLnN0YXRlLmZvcm0sIFB1Ymxpc2hEYXRlOiBldi50YXJnZXQudmFsdWUgfSB9KSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvcm1JbnB1dFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlBhZ2VDb3VudFwiIGNsYXNzTmFtZT1cIkZvcm1JbnB1dC1MYWJlbFwiPk7CuiBww6FnaW5hczwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRm9ybUlucHV0LUlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJQYWdlQ291bnRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4geyB0aGlzLnNldFN0YXRlKHsgZm9ybTogeyAuLi50aGlzLnN0YXRlLmZvcm0sIFBhZ2VDb3VudDogZXYudGFyZ2V0LnZhbHVlIH0gfSkgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybUlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwiRm9ybUlucHV0LUxhYmVsXCI+RGVzY3JpcGNpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkZvcm1JbnB1dC1JbnB1dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBmb3JtOiB7IC4uLnRoaXMuc3RhdGUuZm9ybSwgRGVzY3JpcHRpb246IGV2LnRhcmdldC52YWx1ZSB9IH0pIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybUlucHV0IFRleHRhcmVhXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkV4Y2VycHRcIiBjbGFzc05hbWU9XCJGb3JtSW5wdXQtTGFiZWxcIj5FeHRyYWN0bzwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRm9ybUlucHV0LUlucHV0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiRXhjZXJwdFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4geyB0aGlzLnNldFN0YXRlKHsgZm9ybTogeyAuLi50aGlzLnN0YXRlLmZvcm0sIEV4Y2VycHQ6IGV2LnRhcmdldC52YWx1ZSB9IH0pIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZW5kRm9ybX0gY2xhc3NOYW1lPVwiRm9ybS1CdG5cIj5HdWFyZGFyPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXItZm9ybSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1pbWd7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5Qb3N0Rm9ybXtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDUlIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuRm9ybUlucHV0e1xuICAgICAgICAgICAgbWFyZ2luOjEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuRm9ybUlucHV0IGlucHV0e1xuICAgICAgICAgICAgd2lkdGg6IDc4JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA1YztcbiAgICAgICAgICB9XG4gICAgICAgICAgLkZvcm1JbnB1dCBsYWJlbHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLlRleHRhcmVhe1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuVGV4dGFyZWEgdGV4dGFyZWF7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTlweDtcbiAgICAgICAgICAgIHdpZHRoOiA0ODJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA2OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1udW1iZXJze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1udW1iZXJzIC5Gb3JtSW5wdXR7XG4gICAgICAgICAgICB3aWR0aDo1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXItbnVtYmVycyBpbnB1dHtcbiAgICAgICAgICAgIHdpZHRoOjY1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLkZvcm0tQnRue1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREExMTFCO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ== */\n/*@ sourceURL=containers/form.js */"
      }));
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./pages/edit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_form__ = __webpack_require__("./containers/form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");

var _jsxFileName = "/Users/saraisabelsantacruzcano/Code/React/granadaTest/pages/edit.js";


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
        item: ''
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_form__["a" /* default */], {
        type: "update",
        item: this.props.book,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
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
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes");

module.exports = routes().add('index', '/').add('book', '/:slug/:id', 'book').add('edit', '/:slug/:id', 'edit').add('new', '/:slug', 'new');

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/edit.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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
//# sourceMappingURL=edit.js.map