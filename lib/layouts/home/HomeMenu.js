var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';
import styles from './HomeHeader.less';
var Sider = Layout.Sider;


var SubMenu = Menu.SubMenu;

var HomeMenu = function (_React$PureComponent) {
  _inherits(HomeMenu, _React$PureComponent);

  function HomeMenu() {
    _classCallCheck(this, HomeMenu);

    return _possibleConstructorReturn(this, (HomeMenu.__proto__ || Object.getPrototypeOf(HomeMenu)).apply(this, arguments));
  }

  _createClass(HomeMenu, [{
    key: 'render',
    value: function render() {
      var menuMode = 'horizontal';
      return React.createElement(
        Sider,
        null,
        React.createElement(
          Menu,
          null,
          React.createElement(
            Menu.Item,
            null,
            '\u83DC\u5355\u9879'
          ),
          React.createElement(
            SubMenu,
            { title: '\u5B50\u83DC\u5355' },
            React.createElement(
              Menu.Item,
              null,
              '\u5B50\u83DC\u5355\u9879'
            )
          )
        )
      );
    }
  }]);

  return HomeMenu;
}(React.PureComponent);

export default HomeMenu;