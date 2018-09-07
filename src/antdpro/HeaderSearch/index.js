'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _autoComplete = require('antd/lib/auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'headerSearch': 'antd-pro-header-search-headerSearch',
  'input': 'antd-pro-header-search-input',
  'show': 'antd-pro-header-search-show'
};
var HeaderSearch = (_temp2 = _class = function (_PureComponent) {
  _inherits(HeaderSearch, _PureComponent);

  function HeaderSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderSearch.__proto__ || Object.getPrototypeOf(HeaderSearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchMode: false,
      value: ''
    }, _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.timeout = setTimeout(function () {
          _this.props.onPressEnter(_this.state.value); // Fix duplicate onPressEnter
        }, 0);
      }
    }, _this.onChange = function (value) {
      _this.setState({ value: value });
      if (_this.props.onChange) {
        _this.props.onChange();
      }
    }, _this.enterSearchMode = function () {
      _this.setState({ searchMode: true }, function () {
        if (_this.state.searchMode) {
          _this.input.focus();
        }
      });
    }, _this.leaveSearchMode = function () {
      _this.setState({
        searchMode: false,
        value: ''
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderSearch, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          placeholder = _props.placeholder,
          restProps = _objectWithoutProperties(_props, ['className', 'placeholder']);

      var inputClass = (0, _classnames2.default)(styles.input, _defineProperty({}, styles.show, this.state.searchMode));
      return _react2.default.createElement(
        'span',
        {
          className: (0, _classnames2.default)(className, styles.headerSearch),
          onClick: this.enterSearchMode
        },
        _react2.default.createElement(_icon2.default, { type: 'search', key: 'Icon' }),
        _react2.default.createElement(
          _autoComplete2.default,
          _extends({
            key: 'AutoComplete'
          }, restProps, {
            className: inputClass,
            value: this.state.value,
            onChange: this.onChange
          }),
          _react2.default.createElement(_input2.default, {
            placeholder: placeholder,
            ref: function ref(node) {
              _this2.input = node;
            },
            onKeyDown: this.onKeyDown,
            onBlur: this.leaveSearchMode
          })
        )
      );
    }
  }]);

  return HeaderSearch;
}(_react.PureComponent), _class.defaultProps = {
  defaultActiveFirstOption: false,
  onPressEnter: function onPressEnter() {},
  onSearch: function onSearch() {},
  className: '',
  placeholder: '',
  dataSource: []
}, _class.propTypes = {
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onSearch: _propTypes2.default.func,
  onPressEnter: _propTypes2.default.func,
  defaultActiveFirstOption: _propTypes2.default.bool,
  dataSource: _propTypes2.default.array
}, _temp2);
exports.default = HeaderSearch;
module.exports = exports['default'];