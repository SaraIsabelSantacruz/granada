webpackHotUpdate(4,{

/***/ "./containers/booklist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_book__ = __webpack_require__("./components/book.js");
var _jsxFileName = "/Users/saraisabelsantacruzcano/Code/React/granadaTest/containers/booklist.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var BookList =
/*#__PURE__*/
function (_Component) {
  _inherits(BookList, _Component);

  function BookList() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, BookList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BookList.__proto__ || Object.getPrototypeOf(BookList)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        books: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var element = event.target;
        var id = element.id;
        fetch("https://fakerestapi.azurewebsites.net/api/Books/".concat(id), {
          method: 'DELETE'
        }).catch(function (err) {
          return console.error(err);
        }).then(function () {
          var books = _this.state.books;
          books.splice(id, 1);

          _this.setState({
            books: books
          });
        });
      }
    }), _temp));
  }

  _createClass(BookList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('https://fakerestapi.azurewebsites.net/api/books').catch(function (err) {
        return console.error(err);
      }).then(function (res) {
        return res.json();
      }).then(function (books) {
        return _this2.setState({
          books: books
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log(this.state.books);
      var books = this.state.books;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-1537543562" + " " + "items-container"
      }, books.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: item.ID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          className: "jsx-1537543562"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
          route: "book",
          params: {
            slug: 'book',
            id: item.ID
          },
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          className: "jsx-1537543562" + " " + "item"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_book__["a" /* default */], {
          title: item.Title,
          publishDate: item.PublishDate,
          id: item.ID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          onClick: _this3.onClick,
          id: item.ID,
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          className: "jsx-1537543562"
        }, "Borrar"));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1537543562",
        css: ".items-container.jsx-1537543562{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:auto;width:85%;}.item.jsx-1537543562{margin:5px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvYm9va2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VzQixBQUc0QixBQVFGLFdBQ08sa0JBQ3BCLDZDQVRpQix5REFDYywySEFDakIsWUFDRixVQUNaIiwiZmlsZSI6ImNvbnRhaW5lcnMvYm9va2xpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhcmFpc2FiZWxzYW50YWNydXpjYW5vL0NvZGUvUmVhY3QvZ3JhbmFkYVRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCBCb29rIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vaydcblxuY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgc3RhdGUgPSB7XG4gICAgYm9va3M6IFtdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9mYWtlcmVzdGFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvYm9va3MnKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGJvb2tzID0+IHRoaXMuc2V0U3RhdGUoeyBib29rcyB9KSlcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgIGZldGNoKGBodHRwczovL2Zha2VyZXN0YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9Cb29rcy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGxldCBib29rcyA9IHRoaXMuc3RhdGUuYm9va3NcbiAgICAgIGJvb2tzLnNwbGljZShpZCwgMSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBib29rczogYm9va3NcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYm9va3MpO1xuICAgIGNvbnN0IGJvb2tzID0gdGhpcy5zdGF0ZS5ib29rcztcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvb2tzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBrZXkgPSB7aXRlbS5JRH0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSA9IFwiYm9va1wiXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgc2x1ZzogJ2Jvb2snLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLklEXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCb29rXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHtpdGVtLlRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaERhdGUgPSB7aXRlbS5QdWJsaXNoRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0ge2l0ZW0uSUR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7dGhpcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBpZCA9IHtpdGVtLklEfVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBCb3JyYXJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaXRlbXMtY29udGFpbmVye1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVte1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3Q7XG4iXX0= */\n/*@ sourceURL=containers/booklist.js */"
      })));
    }
  }]);

  return BookList;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BookList);

/***/ })

})
//# sourceMappingURL=4.4c2b2933334df7edad09.hot-update.js.map