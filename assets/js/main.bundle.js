webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _headerComponent = __webpack_require__(3);

var _headerComponent2 = _interopRequireDefault(_headerComponent);

var _navComponent = __webpack_require__(5);

var _navComponent2 = _interopRequireDefault(_navComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SiteComponent = function () {
  function SiteComponent() {
    _classCallCheck(this, SiteComponent);

    this.header = new _headerComponent2.default(this);
    this.nav = new _navComponent2.default(this);
  }

  _createClass(SiteComponent, [{
    key: 'events',
    value: function events(event) {
      if (event.target.getAttribute('data-sezzh-comp') === 'logo-menu') {
        this.nav.handleOpening();
        this.header.paintHeader();
      }
    }
  }]);

  return SiteComponent;
}();

module.exports = function () {
  return new SiteComponent();
};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderComponent = function () {
  function HeaderComponent(dadComponent) {
    _classCallCheck(this, HeaderComponent);

    this._mainComponent = (0, _jquery2.default)('[data-sezzh-comp="header"]');
    this._logoComponent = (0, _jquery2.default)('[data-sezzh-comp="logo-menu"]');
    this._logoComponent.on('click', this.handleClick.bind(this));
    this.dadComponent = dadComponent;
  }

  _createClass(HeaderComponent, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      event.stopPropagation();
      this.dadComponent.events(event);
    }
  }, {
    key: 'paintHeader',
    value: function paintHeader() {
      this._mainComponent.toggleClass('sezzh-header--solid');
    }
  }]);

  return HeaderComponent;
}();

exports.default = HeaderComponent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _siteComponent = __webpack_require__(1);

var _siteComponent2 = _interopRequireDefault(_siteComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  (0, _siteComponent2.default)();
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavComponent = function () {
  function NavComponent() {
    _classCallCheck(this, NavComponent);

    this.className = 'sezzh-nav--closed';
    this._mainComponent = (0, _jquery2.default)('[data-sezzh-comp="nav"]');
  }

  _createClass(NavComponent, [{
    key: 'handleOpening',
    value: function handleOpening() {
      this._mainComponent.toggleClass(this.className);
    }
  }]);

  return NavComponent;
}();

exports.default = NavComponent;

/***/ })
],[4]);