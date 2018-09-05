var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

var TabPane = Tabs.TabPane;


var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    i += 1;
    return '' + prefix + i;
  };
}();

var LoginTab = (_temp = _class = function (_Component) {
  _inherits(LoginTab, _Component);

  function LoginTab(props) {
    _classCallCheck(this, LoginTab);

    var _this = _possibleConstructorReturn(this, (LoginTab.__proto__ || Object.getPrototypeOf(LoginTab)).call(this, props));

    _this.uniqueId = generateId('login-tab-');
    return _this;
  }

  _createClass(LoginTab, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.context.tabUtil) {
        this.context.tabUtil.addTab(this.uniqueId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(TabPane, this.props);
    }
  }]);

  return LoginTab;
}(Component), _class.__ANT_PRO_LOGIN_TAB = true, _class.contextTypes = {
  tabUtil: PropTypes.object
}, _temp);
export { LoginTab as default };