webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_app.App, document.getElementById('app'));

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

var _header = __webpack_require__(29);

var _footer = __webpack_require__(32);

var _main = __webpack_require__(37);

var _error = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = exports.App = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_header.Header, null),
    _react2.default.createElement(_error.Error, {
        text: 'Some text !!!',
        type: 'warn',
        color: 'red'
    }),
    _react2.default.createElement(_main.Main, null),
    _react2.default.createElement(_footer.Footer, null)
);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(30);

Object.keys(_Header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Header[key];
    }
  });
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header() {
    return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(
            'p',
            null,
            'header'
        )
    );
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Footer = __webpack_require__(33);

Object.keys(_Footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Footer[key];
    }
  });
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Footer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

var _Navigation = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = exports.Footer = function Footer() {
    return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(_Navigation.Navigation, null),
        _react2.default.createElement(
            'p',
            null,
            'footer'
        )
    );
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Navigation = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = exports.Navigation = function Navigation() {
    var text = 'Home';
    var items = ['Home', 'Gallery', 'About', 'Home'];
    return _react2.default.createElement(
        'nav',
        { className: 'main-nav' },
        _react2.default.createElement(
            'ul',
            null,
            items.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        'a',
                        { href: '/' + item.toLowerCase() },
                        item
                    )
                );
            })
        )
    );
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Main = __webpack_require__(38);

Object.keys(_Main).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Main[key];
    }
  });
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _statusMessage = __webpack_require__(39);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = exports.Main = function Main() {
    return _react2.default.createElement(
        'main',
        { className: 'main' },
        _react2.default.createElement(
            'p',
            null,
            'main'
        )
    );
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusMessage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(props) {
    return _react2.default.createElement(
        'mark',
        { style: { color: 'red' } },
        props.text || 'Error!'
    );
};
var SuccessMessage = function SuccessMessage(props) {
    return _react2.default.createElement(
        'mark',
        { style: { color: 'green' } },
        props.text || 'Success!'
    );
};

var StatusMessage = exports.StatusMessage = function StatusMessage(props) {
    if (props.valid) {
        return _react2.default.createElement(SuccessMessage, null);
    } else {
        return _react2.default.createElement(ErrorMessage, null);
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = __webpack_require__(42);

Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _error[key];
    }
  });
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Error = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = exports.Error = function Error(props) {
    console.log(props);
    return _react2.default.createElement(
        'mark',
        { style: { color: props.color } },
        props.text
    );
};

/***/ })
],[15]);
//# sourceMappingURL=main.js.map