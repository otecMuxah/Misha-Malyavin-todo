webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _navigation = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        'Hello react !!!!'
    ),
    _react2.default.createElement(_navigation.Navigation, null)
);

_reactDom2.default.render(Component, document.getElementById('app'));

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navigation = __webpack_require__(28);

Object.keys(_Navigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Navigation[key];
    }
  });
});

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navigation = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = exports.Navigation = function Navigation() {
    var text = 'Home';

    return _react2.default.createElement(
        'nav',
        { className: 'main-nav' },
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                text
            ),
            _react2.default.createElement(
                'li',
                null,
                'Gallery'
            )
        )
    );
};

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[15]);
//# sourceMappingURL=main.js.map