var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

var Sider = Layout.Sider;
var SubMenu = Menu.SubMenu;

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,

var getIcon = function getIcon(icon) {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return React.createElement('img', { src: icon, alt: 'icon', className: styles.icon });
  }
  if (typeof icon === 'string') {
    return React.createElement(Icon, { type: icon });
  }
  return icon;
};

var SiderMenu = function (_PureComponent) {
  _inherits(SiderMenu, _PureComponent);

  function SiderMenu(props) {
    _classCallCheck(this, SiderMenu);

    var _this = _possibleConstructorReturn(this, (SiderMenu.__proto__ || Object.getPrototypeOf(SiderMenu)).call(this, props));

    _this.getSelectedMenuKeys = function (path) {
      var flatMenuKeys = _this.getFlatMenuKeys(_this.menus);
      if (flatMenuKeys.indexOf(path.replace(/^\//, '')) > -1) {
        return [path.replace(/^\//, '')];
      }
      if (flatMenuKeys.indexOf(path.replace(/^\//, '').replace(/\/$/, '')) > -1) {
        return [path.replace(/^\//, '').replace(/\/$/, '')];
      }
      return flatMenuKeys.filter(function (item) {
        var itemRegExpStr = '^' + item.replace(/:[\w-]+/g, '[\\w-]+') + '$';
        var itemRegExp = new RegExp(itemRegExpStr);
        return itemRegExp.test(path.replace(/^\//, '').replace(/\/$/, ''));
      });
    };

    _this.getMenuItemPath = function (item) {
      var itemPath = _this.conversionPath(item.path);
      var icon = getIcon(item.icon);
      var target = item.target,
          name = item.name;
      // Is it a http link

      if (/^https?:\/\//.test(itemPath)) {
        return React.createElement(
          'a',
          { href: itemPath, target: target },
          icon,
          React.createElement(
            'span',
            null,
            name
          )
        );
      }
      return React.createElement(
        Link,
        {
          to: itemPath,
          target: target,
          replace: itemPath === _this.props.location.pathname,
          onClick: _this.props.isMobile ? function () {
            _this.props.onCollapse(true);
          } : undefined
        },
        icon,
        React.createElement(
          'span',
          null,
          name
        )
      );
    };

    _this.getSubMenuOrItem = function (item) {
      if (item.children && item.children.some(function (child) {
        return child.name;
      })) {
        return React.createElement(
          SubMenu,
          {
            title: item.icon ? React.createElement(
              'span',
              null,
              getIcon(item.icon),
              React.createElement(
                'span',
                null,
                item.name
              )
            ) : item.name,
            key: item.key || item.path
          },
          _this.getNavMenuItems(item.children)
        );
      } else {
        return React.createElement(
          Menu.Item,
          { key: item.key || item.path },
          _this.getMenuItemPath(item)
        );
      }
    };

    _this.getNavMenuItems = function (menusData) {
      if (!menusData) {
        return [];
      }
      return menusData.filter(function (item) {
        return item.name && !item.hideInMenu;
      }).map(function (item) {
        var ItemDom = _this.getSubMenuOrItem(item);
        return _this.checkPermissionItem(item.authority, ItemDom);
      }).filter(function (item) {
        return !!item;
      });
    };

    _this.conversionPath = function (path) {
      if (path && path.indexOf('http') === 0) {
        return path;
      } else {
        return ('/' + (path || '')).replace(/\/+/g, '/');
      }
    };

    _this.checkPermissionItem = function (authority, ItemDom) {
      if (_this.props.Authorized && _this.props.Authorized.check) {
        var check = _this.props.Authorized.check;

        return check(authority, ItemDom);
      }
      return ItemDom;
    };

    _this.handleOpenChange = function (openKeys) {
      var lastOpenKey = openKeys[openKeys.length - 1];
      var isMainMenu = _this.menus.some(function (item) {
        return lastOpenKey && (item.key === lastOpenKey || item.path === lastOpenKey);
      });
      _this.setState({
        openKeys: isMainMenu ? [lastOpenKey] : [].concat(_toConsumableArray(openKeys))
      });
    };

    _this.menus = props.menuData;
    _this.state = {
      openKeys: _this.getDefaultCollapsedSubMenus(props)
    };
    return _this;
  }

  _createClass(SiderMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        this.setState({
          openKeys: this.getDefaultCollapsedSubMenus(nextProps)
        });
      }
    }
  }, {
    key: 'getDefaultCollapsedSubMenus',
    value: function getDefaultCollapsedSubMenus(props) {
      var _this2 = this;

      var _ref = props || this.props,
          pathname = _ref.location.pathname;

      var snippets = pathname.split('/').slice(1, -1);
      var currentPathSnippets = snippets.map(function (item, index) {
        var arr = snippets.filter(function (_, i) {
          return i <= index;
        });
        return arr.join('/');
      });
      var currentMenuSelectedKeys = [];
      currentPathSnippets.forEach(function (item) {
        currentMenuSelectedKeys = currentMenuSelectedKeys.concat(_this2.getSelectedMenuKeys(item));
      });
      if (currentMenuSelectedKeys.length === 0) {
        return ['dashboard'];
      }
      return currentMenuSelectedKeys;
    }
  }, {
    key: 'getFlatMenuKeys',
    value: function getFlatMenuKeys(menus) {
      var _this3 = this;

      var keys = [];
      menus.forEach(function (item) {
        if (item.children) {
          keys.push(item.path);
          keys = keys.concat(_this3.getFlatMenuKeys(item.children));
        } else {
          keys.push(item.path);
        }
      });
      return keys;
    }
    /**
    * 判断是否是http链接.返回 Link 或 a
    * Judge whether it is http link.return a or Link
    * @memberof SiderMenu
    */

    /**
     * get SubMenu or Item
     */

    /**
    * 获得菜单子节点
    * @memberof SiderMenu
    */

    // conversion Path
    // 转化路径

    // permission to check

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          logo = _props.logo,
          collapsed = _props.collapsed,
          pathname = _props.location.pathname,
          onCollapse = _props.onCollapse;
      var openKeys = this.state.openKeys;
      // Don't show popup menu when it is been collapsed

      var menuProps = collapsed ? {} : {
        openKeys: openKeys
      };
      // if pathname can't match, use the nearest parent's key
      var selectedKeys = this.getSelectedMenuKeys(pathname);
      if (!selectedKeys.length) {
        selectedKeys = [openKeys[openKeys.length - 1]];
      }
      return React.createElement(
        Sider,
        {
          trigger: null,
          collapsible: true,
          collapsed: collapsed,
          breakpoint: 'md',
          onCollapse: onCollapse,
          width: 226,
          className: styles.sider

        },
        React.createElement(
          'div',
          { className: styles.logo, key: 'logo' },
          React.createElement(
            Link,
            { to: '/' },
            React.createElement('img', { src: logo, alt: 'logo' }),
            React.createElement(
              'h1',
              null,
              window.SYS_TITLE
            )
          )
        ),
        React.createElement(
          Menu,
          _extends({
            key: 'Menu',
            theme: 'dark',
            mode: 'inline'
          }, menuProps, {
            onOpenChange: this.handleOpenChange,
            selectedKeys: selectedKeys,
            style: { padding: '16px 0', width: '100%' }
          }),
          this.getNavMenuItems(this.menus)
        )
      );
    }
  }]);

  return SiderMenu;
}(PureComponent);

export { SiderMenu as default };