Object.defineProperty(exports, "__esModule", {
  value: true
});

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/col/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _responsive = require('./responsive');

var _responsive2 = _interopRequireDefault(_responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Description = function Description(_ref) {
  var term = _ref.term,
      column = _ref.column,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['term', 'column', 'className', 'children']);

  var clsString = (0, _classnames2.default)("description", className);
  var initValue = restProps.initValue;
  var formItem = restProps.formItem;
  if (restProps.modalType === 'create') {
    if (restProps.newData['initData']) {
      formItem = restProps.newData['initData'];
    }
  }

  if (initValue === undefined && formItem) {
    //从item中取
    initValue = formItem[restProps.value];
  }

  var newProps = restProps;
  delete newProps.formItem;
  delete newProps.typeOpts;
  return _react2.default.createElement(
    _col2.default,
    _extends({ className: clsString }, _responsive2.default[column], restProps),
    term && _react2.default.createElement(
      'div',
      { className: "_yhq_draw_term" },
      term
    ),
    children ? _react2.default.createElement(
      'div',
      { className: "_yhq_draw_detail" },
      children
    ) : _react2.default.createElement(
      'div',
      { className: "_yhq_draw_detail" },
      initValue
    )
  );
};

Description.defaultProps = {
  term: '',
  children: ''
};

Description.propTypes = {
  term: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

exports.default = Description;
module.exports = exports['default'];