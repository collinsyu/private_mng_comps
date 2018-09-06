import 'antd/lib/breadcrumb/style';
import _Breadcrumb from 'antd/lib/breadcrumb';
import 'antd/lib/tabs/style';
import _Tabs from 'antd/lib/tabs';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './index.less';

var TabPane = _Tabs.TabPane;


function getBreadcrumb(breadcrumbNameMap, url) {
  if (breadcrumbNameMap[url]) {
    return breadcrumbNameMap[url];
  }
  var urlWithoutSplash = url.replace(/\/$/, '');
  if (breadcrumbNameMap[urlWithoutSplash]) {
    return breadcrumbNameMap[urlWithoutSplash];
  }
  var breadcrumb = {};
  Object.keys(breadcrumbNameMap).forEach(function (item) {
    var itemRegExpStr = '^' + item.replace(/:[\w-]+/g, '[\\w-]+') + '$';
    var itemRegExp = new RegExp(itemRegExpStr);
    if (itemRegExp.test(url)) {
      breadcrumb = breadcrumbNameMap[item];
    }
  });
  return breadcrumb;
}

var PageHeader = (_temp2 = _class = function (_PureComponent) {
  _inherits(PageHeader, _PureComponent);

  function PageHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (key) {
      if (_this.props.onTabChange) {
        _this.props.onTabChange(key);
      }
    }, _this.getBreadcrumbProps = function () {
      return {
        routes: _this.props.routes || _this.context.routes,
        params: _this.props.params || _this.context.params,
        location: _this.props.location || _this.context.location,
        breadcrumbNameMap: _this.props.breadcrumbNameMap || _this.context.breadcrumbNameMap
      };
    }, _this.itemRender = function (route, params, routes, paths) {
      var _this$props$linkEleme = _this.props.linkElement,
          linkElement = _this$props$linkEleme === undefined ? 'a' : _this$props$linkEleme;

      var last = routes.indexOf(route) === routes.length - 1;
      return last || !route.component ? React.createElement(
        'span',
        null,
        route.breadcrumbName
      ) : createElement(linkElement, {
        href: paths.join('/') || '/',
        to: paths.join('/') || '/'
      }, route.breadcrumbName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageHeader, [{
    key: 'render',
    value: function render() {
      var _getBreadcrumbProps = this.getBreadcrumbProps(),
          routes = _getBreadcrumbProps.routes,
          params = _getBreadcrumbProps.params,
          location = _getBreadcrumbProps.location,
          breadcrumbNameMap = _getBreadcrumbProps.breadcrumbNameMap;

      var _props = this.props,
          title = _props.title,
          logo = _props.logo,
          action = _props.action,
          content = _props.content,
          extraContent = _props.extraContent,
          breadcrumbList = _props.breadcrumbList,
          tabList = _props.tabList,
          className = _props.className,
          _props$linkElement = _props.linkElement,
          linkElement = _props$linkElement === undefined ? 'a' : _props$linkElement,
          activeTabKey = _props.activeTabKey;

      var clsString = classNames(styles.pageHeader, className);
      var breadcrumb = void 0;
      if (breadcrumbList && breadcrumbList.length) {
        breadcrumb = React.createElement(
          _Breadcrumb,
          { className: styles.breadcrumb },
          breadcrumbList.map(function (item) {
            return React.createElement(
              _Breadcrumb.Item,
              { key: item.title },
              item.href ? createElement(linkElement, _defineProperty({}, linkElement === 'a' ? 'href' : 'to', item.href), item.title) : item.title
            );
          })
        );
      } else if (routes && params) {
        breadcrumb = React.createElement(_Breadcrumb, {
          className: styles.breadcrumb,
          routes: routes.filter(function (route) {
            return route.breadcrumbName;
          }),
          params: params,
          itemRender: this.itemRender
        });
      } else if (location && location.pathname) {
        var pathSnippets = location.pathname.split('/').filter(function (i) {
          return i;
        });
        var extraBreadcrumbItems = pathSnippets.map(function (_, index) {
          var url = '/' + pathSnippets.slice(0, index + 1).join('/');
          var currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url);
          var isLinkable = index !== pathSnippets.length - 1 && currentBreadcrumb.component;
          return currentBreadcrumb.name && !currentBreadcrumb.hideInBreadcrumb ? React.createElement(
            _Breadcrumb.Item,
            { key: url },
            createElement(isLinkable ? linkElement : 'span', _defineProperty({}, linkElement === 'a' ? 'href' : 'to', url), currentBreadcrumb.name)
          ) : null;
        });
        var breadcrumbItems = [React.createElement(
          _Breadcrumb.Item,
          { key: 'home' },
          createElement(linkElement, _defineProperty({}, linkElement === 'a' ? 'href' : 'to', '/'), '首页')
        )].concat(extraBreadcrumbItems);
        breadcrumb = React.createElement(
          _Breadcrumb,
          { className: styles.breadcrumb },
          breadcrumbItems
        );
      } else {
        breadcrumb = null;
      }

      var tabDefaultValue = void 0;
      if (activeTabKey !== undefined && tabList) {
        tabDefaultValue = tabList.filter(function (item) {
          return item.default;
        })[0] || tabList[0];
      }

      var activeKeyProps = {
        defaultActiveKey: tabDefaultValue && tabDefaultValue.key
      };
      if (activeTabKey !== undefined) {
        activeKeyProps.activeKey = activeTabKey;
      }

      return React.createElement(
        'div',
        { className: clsString },
        breadcrumb,
        React.createElement(
          'div',
          { className: styles.detail },
          logo && React.createElement(
            'div',
            { className: styles.logo },
            logo
          ),
          React.createElement(
            'div',
            { className: styles.main },
            React.createElement(
              'div',
              { className: styles.row },
              title && React.createElement(
                'h1',
                { className: styles.title },
                title
              ),
              action && React.createElement(
                'div',
                { className: styles.action },
                action
              )
            ),
            React.createElement(
              'div',
              { className: styles.row },
              content && React.createElement(
                'div',
                { className: styles.content },
                content
              ),
              extraContent && React.createElement(
                'div',
                { className: styles.extraContent },
                extraContent
              )
            )
          )
        ),
        tabList && tabList.length && React.createElement(
          _Tabs,
          _extends({
            className: styles.tabs
          }, activeKeyProps, {
            onChange: this.onChange
          }),
          tabList.map(function (item) {
            return React.createElement(TabPane, { tab: item.tab, key: item.key });
          })
        )
      );
    }
  }]);

  return PageHeader;
}(PureComponent), _class.contextTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
  location: PropTypes.object,
  breadcrumbNameMap: PropTypes.object
}, _temp2);
export { PageHeader as default };