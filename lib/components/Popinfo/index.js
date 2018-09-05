var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import { Form, Input, Popconfirm } from 'antd';
var FormItem = Form.Item;

var Popinfo = function (_PureComponent) {
  _inherits(Popinfo, _PureComponent);

  function Popinfo(props) {
    _classCallCheck(this, Popinfo);

    var _this = _possibleConstructorReturn(this, (Popinfo.__proto__ || Object.getPrototypeOf(Popinfo)).call(this, props));

    _this.hideModelHandler = function () {
      _this.setState({ visible: false, confirmLoading: false });
    };

    _this.showModelHandler = function (e) {
      if (e) {
        e.stopPropagation();
      }
      _this.setState({ visible: true });
    };

    _this.onConfirm = function (e) {
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this.setVisible(false);
          _this.props.form.resetFields();
          var onConfirm = _this.props.onConfirm;

          if (onConfirm) {
            onConfirm.call(_this, e, values);
          }
        } else {}
      });
    };

    _this.onCancel = function (e) {
      _this.setVisible(false);

      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel.call(_this, e);
      }
    };

    _this.state = {
      visible: false,
      confirmLoading: false
    };
    return _this;
  }

  _createClass(Popinfo, [{
    key: 'setVisible',
    value: function setVisible(visible) {
      var props = this.props;
      if (!('visible' in props)) {
        this.setState({ visible: visible });
      }

      var onVisibleChange = props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var getFieldDecorator = this.props.form.getFieldDecorator;


      var formB = React.createElement(
        'div',
        null,
        React.createElement(
          Form,
          { layout: 'horizontal' },
          this.props.title,
          React.createElement(
            FormItem,
            null,
            getFieldDecorator('value', {
              rules: [{ required: true, message: '请输入正确的值' }]
            })(React.createElement(Input, null))
          )
        )
      );

      return React.createElement(
        'span',
        null,
        React.createElement(
          Popconfirm,
          { placement: 'bottom', visible: this.state.visible, title: formB, onConfirm: this.onConfirm, onCancel: this.onCancel },
          React.createElement(
            'span',
            { onClick: this.showModelHandler },
            children
          )
        )
      );
    }
  }]);

  return Popinfo;
}(PureComponent);

export default Form.create()(Popinfo);