webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _headerComponent = __webpack_require__(4);

var _headerComponent2 = _interopRequireDefault(_headerComponent);

var _navComponent = __webpack_require__(6);

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
        this.header.rotateMenu();
        this.nav.handleOpening();
        this.header.paintHeader();
        this.header.paintNetIcons();
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


var CONFIG_APP = {
  ANIMATION_END: 'webkitAnimationEnd mozAnimationEnd ' + 'MSAnimationEnd oanimationend animationend'
};

module.exports = CONFIG_APP;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderComponent = function () {
  function HeaderComponent(dadComponent) {
    _classCallCheck(this, HeaderComponent);

    this.paintClass = 'u--font-primary-dark-color';
    this.rotateClass = 'u--a-rotate-logo';
    this._mainComponent = (0, _jquery2.default)('[data-sezzh-comp="header"]');
    this._logoComponent = (0, _jquery2.default)('[data-sezzh-comp="logo-menu"]');
    this._networkingIcons = (0, _jquery2.default)('[data-sezzh-comp="net-icon"]');
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
  }, {
    key: 'paintNetIcons',
    value: function paintNetIcons() {
      var _this = this;

      this._networkingIcons.each(function (index, element) {
        (0, _jquery2.default)(element).toggleClass(_this.paintClass);
      });
    }
  }, {
    key: 'rotateMenu',
    value: function rotateMenu() {
      this._logoComponent.toggleClass(this.rotateClass);
    }
  }]);

  return HeaderComponent;
}();

exports.default = HeaderComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _siteComponent = __webpack_require__(1);

var _siteComponent2 = _interopRequireDefault(_siteComponent);

var _upBtn = __webpack_require__(16);

var _upBtn2 = _interopRequireDefault(_upBtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  (0, _siteComponent2.default)();
  (0, _upBtn2.default)();
})();

/***/ }),
/* 6 */
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

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function upBtn() {
  var timeAnimation = 400;
  var selector = (0, _jquery2.default)('[data-sezzh-comp="up-btn"]');
  window.addEventListener('scroll', function (event) {
    selector.addClass('sezzh-up-btn--visible');
    if (window.scrollY === 0) {
      selector.removeClass('sezzh-up-btn--visible');
    }
  });
  selector.on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    (0, _jquery2.default)('body').animate({ scrollTop: 0 }, timeAnimation);
  });
}

module.exports = upBtn;

/***/ })
],[5]);