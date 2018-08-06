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
        className: "jsx-4124069146" + " " + "items-container"
      }, books.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: item.ID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          className: "jsx-4124069146"
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
          className: "jsx-4124069146" + " " + "item"
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
          className: "jsx-4124069146"
        }, "Borrar"));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4124069146",
        css: ".items-container.jsx-4124069146{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:2% auto;width:85%;}.item.jsx-4124069146{margin:5px;text-align:center;}button.jsx-4124069146{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvYm9va2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VzQixBQUc0QixBQU9GLEFBSUcsV0FISSxJQUlwQixjQUhBLDZDQVJpQix5REFDYywySEFDZCxlQUNMLFVBQ1oiLCJmaWxlIjoiY29udGFpbmVycy9ib29rbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FyYWlzYWJlbHNhbnRhY3J1emNhbm8vQ29kZS9SZWFjdC9ncmFuYWRhVGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IEJvb2sgZnJvbSAnLi4vY29tcG9uZW50cy9ib29rJ1xuXG5jbGFzcyBCb29rTGlzdCBleHRlbmRzIENvbXBvbmVudHtcblxuICBzdGF0ZSA9IHtcbiAgICBib29rczogW11cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKCdodHRwczovL2Zha2VyZXN0YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9ib29rcycpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oYm9va3MgPT4gdGhpcy5zZXRTdGF0ZSh7IGJvb2tzIH0pKVxuICB9XG5cbiAgb25DbGljayA9IChldmVudCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgZmV0Y2goYGh0dHBzOi8vZmFrZXJlc3RhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL0Jvb2tzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgbGV0IGJvb2tzID0gdGhpcy5zdGF0ZS5ib29rc1xuICAgICAgYm9va3Muc3BsaWNlKGlkLCAxKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvb2tzOiBib29rc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5ib29rcyk7XG4gICAgY29uc3QgYm9va3MgPSB0aGlzLnN0YXRlLmJvb2tzO1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYm9va3MubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHtpdGVtLklEfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID0gXCJib29rXCJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uSURcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJvb2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0ge2l0ZW0uVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoRGF0ZSA9IHtpdGVtLlB1Ymxpc2hEYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7aXRlbS5JRH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGlkID0ge2l0ZW0uSUR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEJvcnJhclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5pdGVtcy1jb250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMiUgYXV0bztcbiAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVte1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0O1xuIl19 */\n/*@ sourceURL=containers/booklist.js */"
      })));
    }
  }]);

  return BookList;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BookList);

/***/ })

})
//# sourceMappingURL=4.31e2b7b6968aa157cfbf.hot-update.js.map