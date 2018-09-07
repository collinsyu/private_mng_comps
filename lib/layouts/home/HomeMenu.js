import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import 'antd/lib/layout/style';
import _Layout from 'antd/lib/layout';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
var styles = {
  'header': '_--css-module-js',
  'ant-layout': '_--css-module-js',
  'ant-layout-header': '_--css-module-js',
  'logo': '_--css-module-js',
  'menu': '_--css-module-js',
  'trigger': '_--css-module-js',
  'right': '_--css-module-js',
  'action': '_--css-module-js',
  'search': '_--css-module-js',
  'account': '_--css-module-js',
  'avatar': '_--css-module-js',
  'name': '_--css-module-js'
};
var Sider = _Layout.Sider;


var SubMenu = _Menu.SubMenu;

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
          _Menu,
          null,
          React.createElement(
            _Menu.Item,
            null,
            '\u83DC\u5355\u9879'
          ),
          React.createElement(
            SubMenu,
            { title: '\u5B50\u83DC\u5355' },
            React.createElement(
              _Menu.Item,
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