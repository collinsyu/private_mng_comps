'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _typeConfig = require('./typeConfig');

var _typeConfig2 = _interopRequireDefault(_typeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = {
  'exception': 'antd-pro-exception-exception',
  'imgBlock': 'antd-pro-exception-imgBlock',
  'imgEle': 'antd-pro-exception-imgEle',
  'content': 'antd-pro-exception-content',
  'desc': 'antd-pro-exception-desc',
  'actions': 'antd-pro-exception-actions'
};

exports.default = function (_ref) {
  var className = _ref.className,
      _ref$linkElement = _ref.linkElement,
      linkElement = _ref$linkElement === undefined ? 'a' : _ref$linkElement,
      type = _ref.type,
      title = _ref.title,
      desc = _ref.desc,
      img = _ref.img,
      actions = _ref.actions,
      rest = _objectWithoutProperties(_ref, ['className', 'linkElement', 'type', 'title', 'desc', 'img', 'actions']);

  var pageType = type in _typeConfig2.default ? type : '404';
  var clsString = (0, _classnames2.default)(styles.exception, className);
  return _react2.default.createElement(
    'div',
    _extends({ className: clsString }, rest),
    _react2.default.createElement(
      'div',
      { className: styles.imgBlock },
      _react2.default.createElement('div', {
        className: styles.imgEle,
        style: { backgroundImage: 'url(' + (img || _typeConfig2.default[pageType].img) + ')' }
      })
    ),
    _react2.default.createElement(
      'div',
      { className: styles.content },
      _react2.default.createElement(
        'h1',
        null,
        title || _typeConfig2.default[pageType].title
      ),
      _react2.default.createElement(
        'div',
        { className: styles.desc },
        desc || _typeConfig2.default[pageType].desc
      ),
      _react2.default.createElement(
        'div',
        { className: styles.actions },
        actions || (0, _react.createElement)(linkElement, {
          to: '/',
          href: '/'
        }, _react2.default.createElement(
          _button2.default,
          { type: 'primary' },
          '\u8FD4\u56DE\u9996\u9875'
        ))
      )
    )
  );
};

module.exports = exports['default'];