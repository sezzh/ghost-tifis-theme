webpackJsonp([1],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(117);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _lodash = __webpack_require__(118);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SezzhComponent = function () {
  function SezzhComponent() {
    _classCallCheck(this, SezzhComponent);
  }

  _createClass(SezzhComponent, [{
    key: 'createComponent',
    value: function createComponent() {
      var element = document.createElement('div');
      element.innerHTML = _lodash2.default.join(['hello', 'webpack'], ' ');
      return element;
    }
  }, {
    key: 'doSomething',
    value: function doSomething() {
      return 'ss';
    }
  }, {
    key: 'doSomething2',
    value: function doSomething2() {
      return 'ssss';
    }
  }]);

  return SezzhComponent;
}();

var sezzhComp = new SezzhComponent();
document.body.appendChild(sezzhComp.createComponent());
console.log((0, _moment2.default)().format());

/***/ })

},[119]);