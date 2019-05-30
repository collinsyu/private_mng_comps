Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/spin/style');

require('antd/lib/dropdown/style');

require('antd/lib/avatar/style');

require('antd/lib/icon/style');

require('antd/lib/menu/style');

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header;
var SubMenu = _menu2.default.SubMenu;


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
      if (item.url.indexOf("http") !== -1 || item.url.indexOf("https") !== -1) {
        return _react2.default.createElement(
          _menu2.default.Item,
          { key: str + "-" + ii },
          _react2.default.createElement(
            'a',
            { href: item.url, target: '_blank' },
            item.label
          )
        );
      } else {
        return _react2.default.createElement(
          _menu2.default.Item,
          { key: str + "-" + ii },
          _react2.default.createElement(
            _router.Link,
            { to: item.url },
            item.label
          )
        );
      }
    }
  });
}

var HomeHeader = function (_React$PureComponent) {
  _inherits(HomeHeader, _React$PureComponent);

  function HomeHeader() {
    _classCallCheck(this, HomeHeader);

    return _possibleConstructorReturn(this, (HomeHeader.__proto__ || Object.getPrototypeOf(HomeHeader)).apply(this, arguments));
  }

  _createClass(HomeHeader, [{
    key: 'renderSubmenu',
    value: function renderSubmenu() {
      var headerMenu = window.headerMenu || [];

      return _nest(headerMenu, "b");
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentUser = _props.currentUser,
          logo = _props.logo;

      var menuMode = 'horizontal';
      var menu = _react2.default.createElement(
        _menu2.default,
        { className: "menu", selectedKeys: [], onClick: this.props.handleMenuClick },
        _react2.default.createElement(
          _menu2.default.Item,
          null,
          _react2.default.createElement(_icon2.default, { type: 'user' }),
          '\u8D26\u6237\u8BE6\u60C5'
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          null,
          _react2.default.createElement(_icon2.default, { type: 'check-circle' }),
          '\u8BA4\u8BC1\u8BE6\u60C5'
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          null,
          _react2.default.createElement(_icon2.default, { type: 'setting' }),
          '\u529F\u80FD\u8BBE\u7F6E'
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

      return _react2.default.createElement(
        Header,
        { id: '_yhq_header1', className: '_yhq_header1', theme: 'dark' },
        _react2.default.createElement(
          _menu2.default,
          { id: 'nav',
            theme: 'dark',
            mode: 'horizontal',
            defaultSelectedKeys: ['1'],
            style: { lineHeight: '54px' }
          },
          this.renderSubmenu()
        ),
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
        ) : _react2.default.createElement(_spin2.default, { size: 'small', style: { marginLeft: 8 } }),
        _react2.default.createElement(
          'style',
          null,
          '\n          ._yhq_header1{\n            height: 54px;\n            line-height: 54px;\n          }\n          ._yhq_header1 .name{\n            color: rgba(255, 255, 255, 0.65);\n    padding-left: 5px;\n          }\n          ._yhq_header1 .ant-layout {\n            overflow-x: hidden;\n          }\n          ._yhq_header1 .ant-layout-sider {\n            background: #fff;\n          }\n          ._yhq_header1 .ant-layout-header {\n            height: 54px;\n            line-height: 54px;\n          }\n          ._yhq_header1 .ant-layout-content {\n            margin-top: 0px;\n          }\n          ._yhq_header1 .ant-menu-item-group-title {\n            color: inherit;\n          }\n\n          ._yhq_header1 #nav {\n            float: left;\n            font-size: 14px;\n            font-family: Lato, "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n          }\n          #_yhq_header1 {\n            -webkit-transition: all 0.3s;\n            transition: all 0.3s;\n            -webkit-box-shadow: 0 2px 8px #f0f1f2;\n            box-shadow: 0 2px 8px #f0f1f2;\n            position: relative;\n            z-index: 10;\n            max-width: 100%;\n          }\n\n          ._yhq_header1 .logo {\n            overflow: hidden;\n            // padding-left: 40px;\n            float: left;\n            height: 54px;\n            line-height: 54px;\n            text-decoration: none;\n            white-space: nowrap;\n\n          }\n          ._yhq_header1 .logo h1 {\n            display: inline-block;\n            vertical-align: middle;\n            color:#fff;\n            font-size: 20px;\n            margin: 0 0 0 12px;\n            font-family: \'Myriad Pro\', \'Helvetica Neue\', Arial, Helvetica, sans-serif;\n            font-weight: 600;\n          }\n\n          ._yhq_header1 .account{\n            float:right;\n          }\n        '
        )
      );
    }
  }]);

  return HomeHeader;
}(_react2.default.PureComponent);

exports.default = HomeHeader;
module.exports = exports['default'];