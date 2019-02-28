Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _locale = require('umi/locale');

var _link = require('umi/link');

var _link2 = _interopRequireDefault(_link);

var _PageHeader = require('@/components/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _dva = require('dva');

var _GridContent = require('./GridContent');

var _GridContent2 = _interopRequireDefault(_GridContent);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

var _MenuContext = require('@/layouts/MenuContext');

var _MenuContext2 = _interopRequireDefault(_MenuContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PageHeaderWrapper = function PageHeaderWrapper(_ref) {
  var children = _ref.children,
      contentWidth = _ref.contentWidth,
      wrapperClassName = _ref.wrapperClassName,
      top = _ref.top,
      restProps = _objectWithoutProperties(_ref, ['children', 'contentWidth', 'wrapperClassName', 'top']);

  return _react2.default.createElement(
    'div',
    { style: { margin: '-24px -24px 0' }, className: wrapperClassName },
    top,
    _react2.default.createElement(
      _MenuContext2.default.Consumer,
      null,
      function (value) {
        return _react2.default.createElement(_PageHeader2.default, _extends({
          wide: contentWidth === 'Fixed',
          home: _react2.default.createElement(_locale.FormattedMessage, { id: 'menu.home', defaultMessage: 'Home' })
        }, value, {
          key: 'pageheader'
        }, restProps, {
          linkElement: _link2.default,
          itemRender: function itemRender(item) {
            if (item.locale) {
              return _react2.default.createElement(_locale.FormattedMessage, { id: item.locale, defaultMessage: item.title });
            }
            return item.title;
          }
        }));
      }
    ),
    children ? _react2.default.createElement(
      'div',
      { className: _index2.default.content },
      _react2.default.createElement(
        _GridContent2.default,
        null,
        children
      )
    ) : null
  );
};

exports.default = (0, _dva.connect)(function (_ref2) {
  var setting = _ref2.setting;
  return {
    contentWidth: setting.contentWidth
  };
})(PageHeaderWrapper);
module.exports = exports['default'];