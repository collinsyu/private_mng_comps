Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _divider = require('antd/lib/divider');

var _divider2 = _interopRequireDefault(_divider);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;
// import NoticeIcon from '../NoticeIcon';


require('antd/lib/spin/style');

require('antd/lib/dropdown/style');

require('antd/lib/avatar/style');

require('antd/lib/divider/style');

require('antd/lib/icon/style');

require('antd/lib/tag/style');

require('antd/lib/menu/style');

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _groupBy = require('lodash/groupBy');

var _groupBy2 = _interopRequireDefault(_groupBy);

var _debounce = require('lodash-decorators/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _router = require('dva/router');

var _HeaderSearch = require('../HeaderSearch');

var _HeaderSearch2 = _interopRequireDefault(_HeaderSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Header = _layout2.default.Header;

var SubMenu = _menu2.default.SubMenu;
var MenuItemGroup = _menu2.default.ItemGroup;

function _nest(_arr, str) {
  _arr = _arr || [];
  return _arr.map(function (item, ii) {
    if (item.children) {
      return _react2.default.createElement(
        SubMenu,
        { key: str + "-" + ii, title: _react2.default.createElement(
            'span',
            { className: 'submenu-title-wrapper' },
            item.label
          ) },
        _nest(item.children, str + "-" + ii)
      );
    } else {
      return _react2.default.createElement(
        _menu2.default.Item,
        { key: str + "-" + ii },
        _react2.default.createElement(
          'a',
          { href: item.url, target: '_blank' },
          item.label
        )
      );
    }
  });
}

var GlobalHeader = (_dec = (0, _debounce2.default)(600), (_class = function (_PureComponent) {
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
          newNotice.datetime = (0, _moment2.default)(notice.datetime).fromNow();
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
          newNotice.extra = _react2.default.createElement(
            _tag2.default,
            { color: color, style: { marginRight: 0 } },
            newNotice.extra
          );
        }
        return newNotice;
      });
      return (0, _groupBy2.default)(newNotices, 'type');
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
    key: 'renderSubmenu',
    value: function renderSubmenu() {
      var headerMenu = window.headerMenu || [];

      return _react2.default.createElement(
        _menu2.default,
        {
          mode: 'horizontal',
          defaultSelectedKeys: ['2'],
          style: { lineHeight: '64px', height: 65 }
        },
        _nest(headerMenu, "b")
      );
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

      var menu = _react2.default.createElement(
        _menu2.default,
        { className: "menu", selectedKeys: [], onClick: onMenuClick },
        _react2.default.createElement(
          _menu2.default.Item,
          { disabled: true },
          _react2.default.createElement(_icon2.default, { type: 'user' }),
          '\u4E2A\u4EBA\u4E2D\u5FC3'
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { disabled: true },
          _react2.default.createElement(_icon2.default, { type: 'setting' }),
          '\u8BBE\u7F6E'
        ),
        _react2.default.createElement(_menu2.default.Divider, null),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: 'modifyPws' },
          _react2.default.createElement(_icon2.default, { type: 'profile' }),
          '\u4FEE\u6539\u5BC6\u7801'
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: 'logout' },
          _react2.default.createElement(_icon2.default, { type: 'logout' }),
          '\u9000\u51FA\u767B\u5F55'
        )
      );
      var noticeData = this.getNoticeData();
      return _react2.default.createElement(
        Header,
        { className: "_yhq_header" },
        isMobile && [_react2.default.createElement(
          _router.Link,
          { to: '/', className: "logo", key: 'logo' },
          _react2.default.createElement('img', { src: logo, alt: 'logo', width: '32' })
        ), _react2.default.createElement(_divider2.default, { type: 'vertical', key: 'line' })],
        _react2.default.createElement(_icon2.default, {
          className: "trigger",
          type: collapsed ? 'menu-unfold' : 'menu-fold',
          onClick: this.toggle
        }),
        _react2.default.createElement(
          'div',
          { className: "right" },
          _react2.default.createElement(_HeaderSearch2.default, {
            className: "action" + ' ' + "search",
            placeholder: '\u7AD9\u5185\u641C\u7D22',
            dataSource: ['搜索提示一', '搜索提示二', '搜索提示三'],
            onSearch: function onSearch(value) {
              console.log('input', value); // eslint-disable-line
            },
            onPressEnter: function onPressEnter(value) {
              console.log('enter', value); // eslint-disable-line
            }
          }),
          currentUser.name ? _react2.default.createElement(
            _dropdown2.default,
            { overlay: menu },
            _react2.default.createElement(
              'span',
              { className: "action" + ' ' + "account" },
              _react2.default.createElement(_avatar2.default, { size: 'small', className: "avatar", src: currentUser.avatar }),
              _react2.default.createElement(
                'span',
                { className: "name" },
                currentUser.name
              )
            )
          ) : _react2.default.createElement(_spin2.default, { size: 'small', style: { marginLeft: 8 } })
        ),
        _react2.default.createElement(
          'div',
          { className: "right" },
          this.renderSubmenu()
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n\n\n          ._yhq_header {\n            padding: 0 12px 0 0;\n            background: #fff;\n            box-shadow: 0 1px 4px rgba(0, 21, 41, .08);\n            position: relative;\n          }\n          ._yhq_header .ant-layout {\n            overflow-x: hidden;\n          }\n          ._yhq_header .ant-layout-header {\n            height: 54px;\n            line-height: 54px;\n          }\n          ._yhq_header .logo img {\n            display: inline-block;\n            vertical-align: middle;\n          }\n          ._yhq_header .logo {\n            height: 50px;\n            line-height: 58px;\n            vertical-align: top;\n            display: inline-block;\n            padding: 0 0 0 24px;\n            cursor: pointer;\n            font-size: 20px;\n          }\n          ._yhq_header .menu .anticon {\n            margin-right: 8px;\n          }\n          ._yhq_header .menu .ant-dropdown-menu-item{\n            width: 160px;\n          }\n          ._yhq_header i.trigger:hover {\n            background: #e6f7ff;\n          }\n          ._yhq_header i.trigger {\n            font-size: 20px;\n            line-height: 64px;\n            cursor: pointer;\n            transition: all .3s, padding 0s;\n            padding: 0 24px;\n          }\n          ._yhq_header .right {\n            float: right;\n            height: 100%;\n          }\n          ._yhq_header .right .action > i {\n            font-size: 16px;\n            vertical-align: middle;\n          }\n          ._yhq_header .right .action :hover,\n          ._yhq_header .right .action .ant-popover-open{\n            background: #e6f7ff;\n          }\n          ._yhq_header .right .action {\n            cursor: pointer;\n            padding: 0 12px;\n            display: inline-block;\n            transition: all .3s;\n            height: 100%;\n          }\n          ._yhq_header .right .search:hover {\n            background: transparent;\n          }\n          ._yhq_header .right .search {\n            padding: 0;\n            margin: 0 12px;\n          }\n          ._yhq_header .right .account .avatar {\n            margin: 20px 8px 20px 0;\n            color: "#1890ff";\n            background: rgba(255, 255, 255, .85);\n            vertical-align: middle;\n          }\n          @media only screen and (max-width: 768px) {\n            ._yhq_header .ant-divider-vertical {\n              vertical-align: unset;\n            }\n            ._yhq_header .name {\n              display: none;\n            }\n            ._yhq_header i.trigger {\n              padding: 0 12px;\n            }\n            ._yhq_header .logo {\n              padding-right: 12px;\n              position: relative;\n            }\n            ._yhq_header .right .account .avatar {\n              margin-right: 0;\n            }\n            ._yhq_header .right {\n              position: absolute;\n              right: 12px;\n              top: 0;\n              background: #fff;\n\n            }\n          }\n\n        '
        )
      );
    }
  }]);

  return GlobalHeader;
}(_react.PureComponent), (_applyDecoratedDescriptor(_class.prototype, 'triggerResizeEvent', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'triggerResizeEvent'), _class.prototype)), _class));
exports.default = GlobalHeader;
module.exports = exports['default'];