import 'antd/lib/popover/style';
import _Popover from 'antd/lib/popover';
import 'antd/lib/badge/style';
import _Badge from 'antd/lib/badge';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/spin/style';
import _Spin from 'antd/lib/spin';
import 'antd/lib/tabs/style';
import _Tabs from 'antd/lib/tabs';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';

import classNames from 'classnames';
import List from './NoticeList';
var styles = {
  'popover': '_--css-module-js',
  'noticeButton': '_--css-module-js',
  'icon': '_--css-module-js',
  'tabs': '_--css-module-js',
  'ant-tabs-nav-scroll': '_--css-module-js',
  'ant-tabs-bar': '_--css-module-js'
};
var TabPane = _Tabs.TabPane;
var NoticeIcon = (_temp = _class = function (_PureComponent) {
  _inherits(NoticeIcon, _PureComponent);

  function NoticeIcon(props) {
    _classCallCheck(this, NoticeIcon);

    var _this = _possibleConstructorReturn(this, (NoticeIcon.__proto__ || Object.getPrototypeOf(NoticeIcon)).call(this, props));

    _this.onItemClick = function (item, tabProps) {
      var onItemClick = _this.props.onItemClick;

      onItemClick(item, tabProps);
    };

    _this.onTabChange = function (tabType) {
      _this.setState({ tabType: tabType });
      _this.props.onTabChange(tabType);
    };

    _this.state = {};
    if (props.children && props.children[0]) {
      _this.state.tabType = props.children[0].props.title;
    }
    return _this;
  }

  _createClass(NoticeIcon, [{
    key: 'getNotificationBox',
    value: function getNotificationBox() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          loading = _props.loading,
          locale = _props.locale;

      if (!children) {
        return null;
      }
      var panes = React.Children.map(children, function (child) {
        var title = child.props.list && child.props.list.length > 0 ? child.props.title + ' (' + child.props.list.length + ')' : child.props.title;
        return React.createElement(
          TabPane,
          { tab: title, key: child.props.title },
          React.createElement(List, _extends({}, child.props, {
            data: child.props.list,
            onClick: function onClick(item) {
              return _this2.onItemClick(item, child.props);
            },
            onClear: function onClear() {
              return _this2.props.onClear(child.props.title);
            },
            title: child.props.title,
            locale: locale
          }))
        );
      });
      return React.createElement(
        _Spin,
        { spinning: loading, delay: 0 },
        React.createElement(
          _Tabs,
          { className: styles.tabs, onChange: this.onTabChange },
          panes
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          count = _props2.count,
          popupAlign = _props2.popupAlign,
          onPopupVisibleChange = _props2.onPopupVisibleChange;

      var noticeButtonClass = classNames(className, styles.noticeButton);
      var notificationBox = this.getNotificationBox();
      var trigger = React.createElement(
        'span',
        { className: noticeButtonClass },
        React.createElement(
          _Badge,
          { count: count, className: styles.badge },
          React.createElement(_Icon, { type: 'bell', className: styles.icon })
        )
      );
      if (!notificationBox) {
        return trigger;
      }
      var popoverProps = {};
      if ('popupVisible' in this.props) {
        popoverProps.visible = this.props.popupVisible;
      }
      return React.createElement(
        _Popover,
        _extends({
          placement: 'bottomRight',
          content: notificationBox,
          popupClassName: styles.popover,
          trigger: 'click',
          arrowPointAtCenter: true,
          popupAlign: popupAlign,
          onVisibleChange: onPopupVisibleChange
        }, popoverProps),
        trigger
      );
    }
  }]);

  return NoticeIcon;
}(PureComponent), _class.defaultProps = {
  onItemClick: function onItemClick() {},
  onPopupVisibleChange: function onPopupVisibleChange() {},
  onTabChange: function onTabChange() {},
  onClear: function onClear() {},
  loading: false,
  locale: {
    emptyText: '暂无数据',
    clear: '清空'
  },
  emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
}, _class.Tab = TabPane, _temp);
export { NoticeIcon as default };