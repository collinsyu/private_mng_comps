import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
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
var Header = _Layout.Header;

var HomeHeader = function (_React$PureComponent) {
  _inherits(HomeHeader, _React$PureComponent);

  function HomeHeader() {
    _classCallCheck(this, HomeHeader);

    return _possibleConstructorReturn(this, (HomeHeader.__proto__ || Object.getPrototypeOf(HomeHeader)).apply(this, arguments));
  }

  _createClass(HomeHeader, [{
    key: 'render',
    value: function render() {
      var menuMode = 'horizontal';
      return React.createElement(
        Header,
        { className: styles.header },
        React.createElement(
          _Menu,
          { mode: menuMode, className: styles.menu, selectedKeys: [] },
          React.createElement(
            _Menu.Item,
            { disabled: true },
            React.createElement(_Icon, { type: 'user' }),
            '\u4E2A\u4EBA\u4E2D\u5FC3'
          ),
          React.createElement(
            _Menu.Item,
            { disabled: true },
            React.createElement(_Icon, { type: 'setting' }),
            '\u8BBE\u7F6E'
          ),
          React.createElement(
            _Menu.Item,
            { key: 'modifyPws' },
            React.createElement(_Icon, { type: 'profile' }),
            '\u4FEE\u6539\u5BC6\u7801'
          ),
          React.createElement(
            _Menu.Item,
            { key: 'logout' },
            React.createElement(_Icon, { type: 'logout' }),
            '\u9000\u51FA\u767B\u5F55'
          )
        )
      );
    }
  }]);

  return HomeHeader;
}(React.PureComponent);

export default HomeHeader;