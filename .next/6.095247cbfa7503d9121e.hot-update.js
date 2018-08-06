webpackHotUpdate(6,{

/***/ "./pages/book.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_book__ = __webpack_require__("./components/book.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
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
        className: "jsx-3801823183" + " " + "btn"
      }, "Editar")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3801823183",
        css: ".btn.jsx-3801823183{padding:8px 22px;background:#DA111B;color:#000;font-size:17px;border:1px solid black;cursor:pointer;position:absolute;right:35px;top:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUc4QixpQkFDRSxtQkFDUixXQUNJLGVBQ1EsdUJBQ1IsZUFDRyxrQkFDUCxXQUNGLFNBRWIiLCJmaWxlIjoicGFnZXMvYm9vay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWlzYWJlbHNhbnRhY3J1emNhbm8vQ29kZS9SZWFjdC9ncmFuYWRhVGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgQm9vayBmcm9tICcuLi9jb21wb25lbnRzL2Jvb2snXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBzdGF0ZT17XG4gICAgYm9vazp7fVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pe1xuICAgIGxldCBpZEJvb2sgPSBxdWVyeS5pZFxuICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mYWtlcmVzdGFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvYm9va3MvJHtpZEJvb2t9YClcbiAgICBsZXQganNvbiA9IGF3YWl0IHJlcS5qc29uKClcbiAgICByZXR1cm4geyBib29rOiBqc29uIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJvb2s6IHRoaXMucHJvcHMuYm9va1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBib29rIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXRcbiAgICAgICAgdGl0bGU9e2Jvb2suVGl0bGUsIGJvb2suUHVibGlzaERhdGV9XG4gICAgICA+XG4gICAgICAgIDxCb29rXG4gICAgICAgICAgdGl0bGUgPSB7Ym9vay5UaXRsZX1cbiAgICAgICAgICBwdWJsaXNoRGF0ZSA9IHtib29rLlB1Ymxpc2hEYXRlfVxuICAgICAgICAgIGlkID0ge2Jvb2suSUR9XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSB7Ym9vay5EZXNjcmlwdGlvbn1cbiAgICAgICAgICBleGNlcnB0ID0ge2Jvb2suRXhjZXJwdH1cbiAgICAgICAgICBkYXRhLWlkID0ge2Jvb2suSUR9XG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgcm91dGUgPSBcImVkaXRcIlxuICAgICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHNsdWc6ICdlZGl0JyxcbiAgICAgICAgICAgIGlkOmJvb2suSUR9XG4gICAgICAgICAgfVxuICAgICAgICAgIHByZWZldGNoXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgICAgRWRpdGFyXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idG57XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEQTExMUI7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICB0b3A6IDE0cHg7XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/book.js */"
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


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/book")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.095247cbfa7503d9121e.hot-update.js.map