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
        className: "jsx-1946283963" + " " + "btn"
      }, "Editar")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1946283963",
        css: ".btn.jsx-1946283963{padding:8px 22px;background:#DA111B;color:#000;font-size:17px;border:1px solid black;cursor:pointer;width:20%;border-radius:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUc4QixpQkFDRSxtQkFDUixXQUNJLGVBQ1EsdUJBQ1IsZUFDTixVQUNTLG1CQUV0QiIsImZpbGUiOiJwYWdlcy9ib29rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYXJhaXNhYmVsc2FudGFjcnV6Y2Fuby9Db2RlL1JlYWN0L2dyYW5hZGFUZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBCb29rIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vaydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHN0YXRlPXtcbiAgICBib29rOnt9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSl7XG4gICAgbGV0IGlkQm9vayA9IHF1ZXJ5LmlkXG4gICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Zha2VyZXN0YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9ib29rcy8ke2lkQm9va31gKVxuICAgIGxldCBqc29uID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIHJldHVybiB7IGJvb2s6IGpzb24gfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYm9vazogdGhpcy5wcm9wcy5ib29rXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGJvb2sgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dFxuICAgICAgICB0aXRsZT17Ym9vay5UaXRsZSwgYm9vay5QdWJsaXNoRGF0ZX1cbiAgICAgID5cbiAgICAgICAgPEJvb2tcbiAgICAgICAgICB0aXRsZSA9IHtib29rLlRpdGxlfVxuICAgICAgICAgIHB1Ymxpc2hEYXRlID0ge2Jvb2suUHVibGlzaERhdGV9XG4gICAgICAgICAgaWQgPSB7Ym9vay5JRH1cbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtib29rLkRlc2NyaXB0aW9ufVxuICAgICAgICAgIGV4Y2VycHQgPSB7Ym9vay5FeGNlcnB0fVxuICAgICAgICAgIGRhdGEtaWQgPSB7Ym9vay5JRH1cbiAgICAgICAgLz5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICByb3V0ZSA9IFwiZWRpdFwiXG4gICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgc2x1ZzogJ2VkaXQnLFxuICAgICAgICAgICAgaWQ6Ym9vay5JRH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICBFZGl0YXJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJ0bntcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0RBMTExQjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB3aWR0aDoyMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/book.js */"
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
//# sourceMappingURL=6.0eaa161c5bd44b765ff9.hot-update.js.map