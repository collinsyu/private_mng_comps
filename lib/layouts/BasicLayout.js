var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderMenu from '../components/SiderMenu';
import NotFound from '../routes/Exception/404';
import { getRoutes } from '../utils/utils';
import Authorized from '../utils/Authorized';
import { getMenuData } from '../common/menu';
import logo from '../assets/unicom.svg';
import ModifyPassModel from './ModifyPassModel';

var Content = Layout.Content;
var AuthorizedRoute = Authorized.AuthorizedRoute;

/**
 * 根据菜单取得重定向地址.
 */

var redirectData = [];
var getRedirect = function getRedirect(item) {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: '/' + item.path,
        to: '/' + item.children[0].path
      });
      item.children.forEach(function (children) {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

var query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200
  }
};

var isMobile = void 0;
enquireScreen(function (b) {
  isMobile = b;
});

var BasicLayout = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(BasicLayout, _React$PureComponent);

  function BasicLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BasicLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMobile: isMobile,
      visible: false
    }, _this.hideModelHandler = function () {
      _this.setState({ visible: false });
    }, _this.handleMenuCollapse = function (collapsed) {
      // this.props.dispatch({
      //   type: 'global/changeLayoutCollapsed',
      //   payload: collapsed,
      // });
    }, _this.handleNoticeClear = function (type) {
      message.success('\u6E05\u7A7A\u4E86' + type);
      // this.props.dispatch({
      //   type: 'global/clearNotices',
      //   payload: type,
      // });
    }, _this.handleMenuClick = function (_ref2) {
      var key = _ref2.key;

      // if (key === 'logout') {
      //   this.props.dispatch({
      //     type: 'login/logout',
      //   });
      // }
      if (key === 'logout') {
        window.location.href = window.path + "logout";
      }

      if (key === 'modifyPws') {
        _this.setState({ visible: true });
      }
    }, _this.handleNoticeVisibleChange = function (visible) {
      // if (visible) {
      //   this.props.dispatch({
      //     type: 'global/fetchNotices',
      //   });
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BasicLayout, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          location = _props.location,
          routerData = _props.routerData;

      return {
        location: location,
        breadcrumbNameMap: routerData
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      enquireScreen(function (mobile) {
        _this2.setState({
          isMobile: mobile
        });
      });
      /* this.props.dispatch({
        type: 'user/fetchCurrent',
      }); */
    }
  }, {
    key: 'getPageTitle',
    value: function getPageTitle() {
      var _props2 = this.props,
          routerData = _props2.routerData,
          location = _props2.location;
      var pathname = location.pathname;

      var title = 'Ant Design Pro';
      if (typeof window.SYS_TITLE !== 'undefined') {
        title = window.SYS_TITLE;
      }
      if (routerData[pathname] && routerData[pathname].name) {
        title = routerData[pathname].name + ' - ' + title;
      }
      return title;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          currentUser = _props3.currentUser,
          collapsed = _props3.collapsed,
          routerData = _props3.routerData,
          match = _props3.match,
          location = _props3.location;

      var layout = React.createElement(
        Layout,
        null,
        React.createElement(SiderMenu, {
          logo: logo
          // 不带Authorized参数的情况下如果没有权限,会强制跳到403界面
          // If you do not have the Authorized parameter
          // you will be forced to jump to the 403 interface without permission
          , Authorized: Authorized,
          menuData: getMenuData(),
          collapsed: collapsed,
          location: location,
          isMobile: this.state.isMobile,
          onCollapse: this.handleMenuCollapse
        }),
        React.createElement(
          Layout,
          null,
          React.createElement(GlobalHeader, {
            logo: logo,
            currentUser: currentUser,
            isMobile: this.state.isMobile,
            onNoticeClear: this.handleNoticeClear,
            onCollapse: this.handleMenuCollapse,
            onMenuClick: this.handleMenuClick,
            onNoticeVisibleChange: this.handleNoticeVisibleChange
          }),
          React.createElement(
            Content,
            { style: { margin: '24px 24px 0', height: '100%' } },
            React.createElement(
              'div',
              { style: { minHeight: 'calc(100vh - 260px)' } },
              React.createElement(
                Switch,
                null,
                getRoutes(match.path, routerData).map(function (item) {
                  return React.createElement(AuthorizedRoute, {
                    key: item.key,
                    path: item.path,
                    component: item.component,
                    exact: item.exact,
                    authority: item.authority,
                    redirectPath: '/exception/403'
                  });
                }),
                redirectData.map(function (item) {
                  return React.createElement(Redirect, { key: item.from, exact: true, from: item.from, to: item.to });
                }),
                React.createElement(Redirect, { exact: true, from: '/', to: '/dashboard/workplace' }),
                React.createElement(Route, { render: NotFound })
              )
            ),
            React.createElement(GlobalFooter, {
              copyright: React.createElement(
                'div',
                null,
                'Copyright ',
                React.createElement(Icon, { type: 'copyright' }),
                ' 2018 \u6167\u66D9\u901A\u8BAF\u79D1\u6280\u6280\u672F\u90E8\u51FA\u54C1'
              )
            }),
            React.createElement(ModifyPassModel, { hideModelHandler: this.hideModelHandler, visible: this.state.visible })
          )
        )
      );

      return React.createElement(
        DocumentTitle,
        { title: this.getPageTitle() },
        React.createElement(
          ContainerQuery,
          { query: query },
          function (params) {
            return React.createElement(
              'div',
              { className: classNames(params) },
              layout
            );
          }
        )
      );
    }
  }]);

  return BasicLayout;
}(React.PureComponent), _class.childContextTypes = {
  location: PropTypes.object,
  breadcrumbNameMap: PropTypes.object
}, _temp2);


export default connect(function (_ref3) {
  var user = _ref3.user,
      global = _ref3.global,
      loading = _ref3.loading;
  return {
    currentUser: user.currentUser,
    collapsed: global.collapsed,
    fetchingNotices: {},
    notices: global.notices
  };
})(BasicLayout);