import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import React from 'react';


function RowCallList(_ref) {
  var formItemLayout = _ref.formItemLayout,
      data = _ref.data;


  function toCal(data) {
    if (data instanceof Array) {
      var spanlenthg = parseInt(24 / data.length, 10);
      return data.map(function (obj) {
        return React.createElement(
          _Col,
          { span: spanlenthg },
          React.createElement(
            _Row,
            null,
            React.createElement(
              _Col,
              { span: formItemLayout.labelCol.span, className: 'ant-form-item-label' },
              obj.label === '' ? '' : React.createElement(
                'label',
                { 'class': '', title: obj.label },
                obj.label
              )
            ),
            React.createElement(
              _Col,
              { span: formItemLayout.wrapperCol.span, className: 'ant-form-item-control-wrapper' },
              React.createElement(
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

  return React.createElement(
    'div',
    null,
    data.map(function (d) {
      return React.createElement(
        _Row,
        null,
        toCal(d)
      );
    })
  );
}

export default RowCallList;
module.exports = exports['default'];