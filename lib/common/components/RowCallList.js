import React from 'react';
import { Row, Col } from 'antd';

function RowCallList(_ref) {
  var formItemLayout = _ref.formItemLayout,
      data = _ref.data;


  function toCal(data) {
    if (data instanceof Array) {
      var spanlenthg = parseInt(24 / data.length, 10);
      return data.map(function (obj) {
        return React.createElement(
          Col,
          { span: spanlenthg },
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { span: formItemLayout.labelCol.span, className: 'ant-form-item-label' },
              obj.label === '' ? '' : React.createElement(
                'label',
                { 'class': '', title: obj.label },
                obj.label
              )
            ),
            React.createElement(
              Col,
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
        Row,
        null,
        toCal(d)
      );
    })
  );
}

export default RowCallList;