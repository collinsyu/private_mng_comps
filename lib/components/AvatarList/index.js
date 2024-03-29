Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/tooltip/style');

require('antd/lib/avatar/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AvatarList = function AvatarList(_ref) {
  var children = _ref.children,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ['children', 'size']);

  var childrenWithProps = _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, {
      size: size
    });
  });

  return _react2.default.createElement(
    'div',
    _extends({}, other, { className: _index2.default.avatarList }),
    _react2.default.createElement(
      'ul',
      null,
      ' ',
      childrenWithProps,
      ' '
    )
  );
};

var Item = function Item(_ref2) {
  var _classNames;

  var src = _ref2.src,
      size = _ref2.size,
      tips = _ref2.tips,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === undefined ? function () {} : _ref2$onClick;

  var cls = (0, _classnames2.default)(_index2.default.avatarItem, (_classNames = {}, _defineProperty(_classNames, _index2.default.avatarItemLarge, size === 'large'), _defineProperty(_classNames, _index2.default.avatarItemSmall, size === 'small'), _defineProperty(_classNames, _index2.default.avatarItemMini, size === 'mini'), _classNames));

  return _react2.default.createElement(
    'li',
    { className: cls, onClick: onClick },
    tips ? _react2.default.createElement(
      _tooltip2.default,
      { title: tips },
      _react2.default.createElement(_avatar2.default, { src: src, size: size, style: { cursor: 'pointer' } })
    ) : _react2.default.createElement(_avatar2.default, { src: src, size: size })
  );
};

AvatarList.Item = Item;

exports.default = AvatarList;
module.exports = exports['default'];