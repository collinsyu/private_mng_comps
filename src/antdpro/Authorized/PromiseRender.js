'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PromiseRender = function (_React$PureComponent) {
  _inherits(PromiseRender, _React$PureComponent);

  function PromiseRender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PromiseRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PromiseRender.__proto__ || Object.getPrototypeOf(PromiseRender)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      component: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PromiseRender, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.props.promise.then(function () {
                  _this2.setState({
                    component: _this2.props.ok
                  });
                }).catch(function () {
                  _this2.setState({
                    component: _this2.props.error
                  });
                });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var C = this.state.component;
      return C ? _react2.default.createElement(C, this.props) : _react2.default.createElement(
        'div',
        {
          style: {
            width: '100%',
            height: '100%',
            margin: 'auto',
            paddingTop: 50,
            textAlign: 'center'
          }
        },
        _react2.default.createElement(_spin2.default, { size: 'large' })
      );
    }
  }]);

  return PromiseRender;
}(_react2.default.PureComponent);

exports.default = PromiseRender;
module.exports = exports['default'];