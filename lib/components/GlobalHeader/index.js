var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
import { Link } from 'dva/router';
import NoticeIcon from '../NoticeIcon';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

var Header = Layout.Header;
var GlobalHeader = (_dec = Debounce(600), (_class = function (_PureComponent) {
  _inherits(GlobalHeader, _PureComponent);

  function GlobalHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GlobalHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GlobalHeader.__proto__ || Object.getPrototypeOf(GlobalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.toggle = function () {
      var _this$props = _this.props,
          collapsed = _this$props.collapsed,
          onCollapse = _this$props.onCollapse;

      onCollapse(!collapsed);
      _this.triggerResizeEvent();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GlobalHeader, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.triggerResizeEvent.cancel();
    }
  }, {
    key: 'getNoticeData',
    value: function getNoticeData() {
      var _props$notices = this.props.notices,
          notices = _props$notices === undefined ? [] : _props$notices;

      if (notices.length === 0) {
        return {};
      }
      var newNotices = notices.map(function (notice) {
        var newNotice = _extends({}, notice);
        if (newNotice.datetime) {
          newNotice.datetime = moment(notice.datetime).fromNow();
        }
        // transform id to item key
        if (newNotice.id) {
          newNotice.key = newNotice.id;
        }
        if (newNotice.extra && newNotice.status) {
          var color = {
            todo: '',
            processing: 'blue',
            urgent: 'red',
            doing: 'gold'
          }[newNotice.status];
          newNotice.extra = React.createElement(
            Tag,
            { color: color, style: { marginRight: 0 } },
            newNotice.extra
          );
        }
        return newNotice;
      });
      return groupBy(newNotices, 'type');
    }
  }, {
    key: 'triggerResizeEvent',
    value: function triggerResizeEvent() {
      // eslint-disable-line
      var event = document.createEvent('HTMLEvents');
      event.initEvent('resize', true, false);
      window.dispatchEvent(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentUser = _props.currentUser,
          collapsed = _props.collapsed,
          fetchingNotices = _props.fetchingNotices,
          isMobile = _props.isMobile,
          logo = _props.logo,
          onNoticeVisibleChange = _props.onNoticeVisibleChange,
          onMenuClick = _props.onMenuClick,
          onNoticeClear = _props.onNoticeClear;

      var menu = React.createElement(
        Menu,
        { className: styles.menu, selectedKeys: [], onClick: onMenuClick },
        React.createElement(
          Menu.Item,
          { disabled: true },
          React.createElement(Icon, { type: 'user' }),
          '\u4E2A\u4EBA\u4E2D\u5FC3'
        ),
        React.createElement(
          Menu.Item,
          { disabled: true },
          React.createElement(Icon, { type: 'setting' }),
          '\u8BBE\u7F6E'
        ),
        React.createElement(Menu.Divider, null),
        React.createElement(
          Menu.Item,
          { key: 'modifyPws' },
          React.createElement(Icon, { type: 'profile' }),
          '\u4FEE\u6539\u5BC6\u7801'
        ),
        React.createElement(
          Menu.Item,
          { key: 'logout' },
          React.createElement(Icon, { type: 'logout' }),
          '\u9000\u51FA\u767B\u5F55'
        )
      );
      var noticeData = this.getNoticeData();
      return React.createElement(
        Header,
        { className: styles.header },
        isMobile && [React.createElement(
          Link,
          { to: '/', className: styles.logo, key: 'logo' },
          React.createElement('img', { src: logo, alt: 'logo', width: '32' })
        ), React.createElement(Divider, { type: 'vertical', key: 'line' })],
        React.createElement(Icon, {
          className: styles.trigger,
          type: collapsed ? 'menu-unfold' : 'menu-fold',
          onClick: this.toggle
        }),
        React.createElement(
          'div',
          { className: styles.right },
          React.createElement(HeaderSearch, {
            className: styles.action + ' ' + styles.search,
            placeholder: '\u7AD9\u5185\u641C\u7D22',
            dataSource: ['搜索提示一', '搜索提示二', '搜索提示三'],
            onSearch: function onSearch(value) {
              console.log('input', value); // eslint-disable-line
            },
            onPressEnter: function onPressEnter(value) {
              console.log('enter', value); // eslint-disable-line
            }
          }),
          React.createElement(
            NoticeIcon,
            {
              className: styles.action,
              count: currentUser.notifyCount,
              onItemClick: function onItemClick(item, tabProps) {
                console.log(item, tabProps); // eslint-disable-line
              },
              onClear: onNoticeClear,
              onPopupVisibleChange: onNoticeVisibleChange,
              loading: fetchingNotices,
              popupAlign: { offset: [20, -16] }
            },
            React.createElement(NoticeIcon.Tab, {
              list: noticeData['通知'],
              title: '\u901A\u77E5',
              emptyText: '\u4F60\u5DF2\u67E5\u770B\u6240\u6709\u901A\u77E5',
              emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
            }),
            React.createElement(NoticeIcon.Tab, {
              list: noticeData['消息'],
              title: '\u6D88\u606F',
              emptyText: '\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F',
              emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
            }),
            React.createElement(NoticeIcon.Tab, {
              list: noticeData['待办'],
              title: '\u5F85\u529E',
              emptyText: '\u4F60\u5DF2\u5B8C\u6210\u6240\u6709\u5F85\u529E',
              emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg'
            })
          ),
          currentUser.name ? React.createElement(
            Dropdown,
            { overlay: menu },
            React.createElement(
              'span',
              { className: styles.action + ' ' + styles.account },
              React.createElement(Avatar, { size: 'small', className: styles.avatar, src: currentUser.avatar }),
              React.createElement(
                'span',
                { className: styles.name },
                currentUser.name
              )
            )
          ) : React.createElement(Spin, { size: 'small', style: { marginLeft: 8 } })
        )
      );
    }
  }]);

  return GlobalHeader;
}(PureComponent), (_applyDecoratedDescriptor(_class.prototype, 'triggerResizeEvent', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'triggerResizeEvent'), _class.prototype)), _class));
export { GlobalHeader as default };