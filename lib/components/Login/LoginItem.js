var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'antd';
import omit from 'omit.js';
import styles from './index.less';
import map from './map';

var FormItem = Form.Item;

function generator(_ref) {
  var defaultProps = _ref.defaultProps,
      defaultRules = _ref.defaultRules,
      type = _ref.type;

  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(BasicComponent, _Component);

      function BasicComponent(props) {
        _classCallCheck(this, BasicComponent);

        var _this = _possibleConstructorReturn(this, (BasicComponent.__proto__ || Object.getPrototypeOf(BasicComponent)).call(this, props));

        _this.onGetCaptcha = function () {
          var count = 59;
          _this.setState({ count: count });
          if (_this.props.onGetCaptcha) {
            _this.props.onGetCaptcha();
          }
          _this.interval = setInterval(function () {
            count -= 1;
            _this.setState({ count: count });
            if (count === 0) {
              clearInterval(_this.interval);
            }
          }, 1000);
        };

        _this.state = {
          count: 0
        };
        return _this;
      }

      _createClass(BasicComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.context.updateActive) {
            this.context.updateActive(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearInterval(this.interval);
        }
      }, {
        key: 'render',
        value: function render() {
          var getFieldDecorator = this.context.form.getFieldDecorator;

          var options = {};
          var otherProps = {};

          var _props = this.props,
              onChange = _props.onChange,
              defaultValue = _props.defaultValue,
              rules = _props.rules,
              name = _props.name,
              restProps = _objectWithoutProperties(_props, ['onChange', 'defaultValue', 'rules', 'name']);

          var count = this.state.count;

          options.rules = rules || defaultRules;
          if (onChange) {
            options.onChange = onChange;
          }
          if (defaultValue) {
            options.initialValue = defaultValue;
          }
          otherProps = restProps || otherProps;
          if (type === 'Captcha') {
            var inputProps = omit(otherProps, ['onGetCaptcha']);
            return React.createElement(
              FormItem,
              null,
              React.createElement(
                Row,
                { gutter: 8 },
                React.createElement(
                  Col,
                  { span: 16 },
                  getFieldDecorator(name, options)(React.createElement(WrappedComponent, _extends({}, defaultProps, inputProps)))
                ),
                React.createElement(
                  Col,
                  { span: 8 },
                  React.createElement(
                    Button,
                    {
                      disabled: count,
                      className: styles.getCaptcha,
                      size: 'large',
                      onClick: this.onGetCaptcha
                    },
                    count ? count + ' s' : '获取验证码'
                  )
                )
              )
            );
          }
          return React.createElement(
            FormItem,
            null,
            getFieldDecorator(name, options)(React.createElement(WrappedComponent, _extends({}, defaultProps, otherProps)))
          );
        }
      }]);

      return BasicComponent;
    }(Component), _class.contextTypes = {
      form: PropTypes.object,
      updateActive: PropTypes.func
    }, _temp;
  };
}

var LoginItem = {};
Object.keys(map).forEach(function (item) {
  LoginItem[item] = generator({
    defaultProps: map[item].props,
    defaultRules: map[item].rules,
    type: item
  })(map[item].component);
});

export default LoginItem;