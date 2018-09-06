import 'antd/lib/tabs/style';
import _Tabs from 'antd/lib/tabs';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import LoginItem from './LoginItem';
import LoginTab from './LoginTab';
import LoginSubmit from './LoginSubmit';
import styles from './index.less';

var Login = (_dec = _Form.create(), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      type: _this.props.defaultActiveKey,
      tabs: [],
      active: {}
    }, _this.onSwitch = function (type) {
      _this.setState({
        type: type
      });
      _this.props.onTabChange(type);
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          active = _this$state.active,
          type = _this$state.type;

      var activeFileds = active[type];
      _this.props.form.validateFields(activeFileds, { force: true }, function (err, values) {
        _this.props.onSubmit(err, values);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        tabUtil: {
          addTab: function addTab(id) {
            _this2.setState({
              tabs: [].concat(_toConsumableArray(_this2.state.tabs), [id])
            });
          },
          removeTab: function removeTab(id) {
            _this2.setState({
              tabs: _this2.state.tabs.filter(function (currentId) {
                return currentId !== id;
              })
            });
          }
        },
        form: this.props.form,
        updateActive: function updateActive(activeItem) {
          var _state = _this2.state,
              type = _state.type,
              active = _state.active;

          if (active[type]) {
            active[type].push(activeItem);
          } else {
            active[type] = [activeItem];
          }
          _this2.setState({
            active: active
          });
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;
      var _state2 = this.state,
          type = _state2.type,
          tabs = _state2.tabs;

      var TabChildren = [];
      var otherChildren = [];
      React.Children.forEach(children, function (item) {
        // eslint-disable-next-line
        if (item.type.__ANT_PRO_LOGIN_TAB) {
          TabChildren.push(item);
        } else {
          otherChildren.push(item);
        }
      });
      return React.createElement(
        'div',
        { className: classNames(className, styles.main) },
        React.createElement(
          _Form,
          { onSubmit: this.handleSubmit },
          tabs.length ? React.createElement(
            'div',
            null,
            React.createElement(
              _Tabs,
              {
                animated: false,
                className: styles.tabs,
                activeKey: type,
                onChange: this.onSwitch
              },
              TabChildren
            ),
            otherChildren
          ) : children
        )
      );
    }
  }]);

  return Login;
}(Component), _class2.defaultProps = {
  className: '',
  defaultActiveKey: '',
  onTabChange: function onTabChange() {},
  onSubmit: function onSubmit() {}
}, _class2.propTypes = {
  className: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onTabChange: PropTypes.func,
  onSubmit: PropTypes.func
}, _class2.childContextTypes = {
  tabUtil: PropTypes.object,
  form: PropTypes.object,
  updateActive: PropTypes.func
}, _temp2)) || _class);


Login.Tab = LoginTab;
Login.Submit = LoginSubmit;
Object.keys(LoginItem).forEach(function (item) {
  Login[item] = LoginItem[item];
});

export default Login;