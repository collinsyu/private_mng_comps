Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

require('antd/lib/row/style');

require('antd/lib/col/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RowCallList(_ref) {
  var formItemLayout = _ref.formItemLayout,
      data = _ref.data;


  function toCal(data) {
    if (data instanceof Array) {
      var spanlenthg = parseInt(24 / data.length, 10);
      return data.map(function (obj) {
        return _react2.default.createElement(
          _col2.default,
          { span: spanlenthg },
          _react2.default.createElement(
            _row2.default,
            null,
            _react2.default.createElement(
              _col2.default,
              { span: formItemLayout.labelCol.span, className: 'ant-form-item-label' },
              obj.label === '' ? '' : _react2.default.createElement(
                'label',
                { 'class': '', title: obj.label },
                obj.label
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { span: formItemLayout.wrapperCol.span, className: 'ant-form-item-control-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'ant-form-item-control ' },
                obj.value
              )
            )
          )
        );
      });
    } else {
      return '';
    }
  }

  return _react2.default.createElement(
    'div',
    null,
    data.map(function (d) {
      return _react2.default.createElement(
        _row2.default,
        null,
        toCal(d)
      );
    })
  );
}

exports.default = RowCallList;
module.exports = exports['default'];