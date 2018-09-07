import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Link, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';

import GlobalFooter from '../components/GlobalFooter';
var styles = {
  'container': '_--css-module-js',
  'top': '_--css-module-js',
  'header': '_--css-module-js',
  'logo': '_--css-module-js',
  'title': '_--css-module-js',
  'desc': '_--css-module-js',
  'footer': '_--css-module-js'
};

import logo from '../assets/logo.svg';

var links = [{
  key: 'help',
  title: '帮助',
  href: ''
}, {
  key: 'privacy',
  title: '隐私',
  href: ''
}, {
  key: 'terms',
  title: '条款',
  href: ''
}];

var copyright = React.createElement(
  'div',
  null,
  'Copyright ',
  React.createElement(_Icon, { type: 'copyright' }),
  ' 2018 \u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u51FA\u54C1'
);

var UserLayout = function (_React$PureComponent) {
  _inherits(UserLayout, _React$PureComponent);

  function UserLayout() {
    _classCallCheck(this, UserLayout);

    return _possibleConstructorReturn(this, (UserLayout.__proto__ || Object.getPrototypeOf(UserLayout)).apply(this, arguments));
  }

  _createClass(UserLayout, [{
    key: 'getPageTitle',
    value: function getPageTitle() {
      var _props = this.props,
          routerData = _props.routerData,
          location = _props.location;
      var pathname = location.pathname;

      var title = 'Ant Design Pro';
      if (routerData[pathname] && routerData[pathname].name) {
        title = routerData[pathname].name + ' - Ant Design Pro';
      }
      return title;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          routerData = _props2.routerData,
          match = _props2.match;

      return React.createElement(
        DocumentTitle,
        { title: this.getPageTitle() },
        React.createElement(
          'div',
          { className: styles.container },
          React.createElement(
            'div',
            { className: styles.top },
            React.createElement(
              'div',
              { className: styles.header },
              React.createElement(
                Link,
                { to: '/' },
                React.createElement('img', { alt: 'logo', className: styles.logo, src: logo }),
                React.createElement(
                  'span',
                  { className: styles.title },
                  'Ant Design'
                )
              )
            ),
            React.createElement(
              'div',
              { className: styles.desc },
              'Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303'
            )
          ),
          this.props.children,
          React.createElement(GlobalFooter, { className: styles.footer, links: links, copyright: copyright })
        )
      );
    }
  }]);

  return UserLayout;
}(React.PureComponent);

export default UserLayout;