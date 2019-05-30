Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

var _PageHeader = require('../../components/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var children = _ref.children,
      wrapperClassName = _ref.wrapperClassName,
      top = _ref.top,
      restProps = _objectWithoutProperties(_ref, ['children', 'wrapperClassName', 'top']);

  return _react2.default.createElement(
    'div',
    { className: wrapperClassName },
    top,
    _react2.default.createElement(_PageHeader2.default, _extends({ key: 'pageheader' }, restProps, { linkElement: _router.Link })),
    children ? _react2.default.createElement(
      'div',
      { className: '_yhq_content' },
      children
    ) : null,
    _react2.default.createElement(
      'style',
      null,
      '\n      ._yhq_content {\n        margin: 24px 24px 0;\n      }\n\n      @media screen and (max-width: 576px) {\n        ._yhq_content {\n          margin: 24px 0 0;\n        }\n      }\n\n    '
    )
  );
};

module.exports = exports['default'];