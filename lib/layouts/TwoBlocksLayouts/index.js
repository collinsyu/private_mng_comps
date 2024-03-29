Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeProvider = require('antd/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/locale-provider/style');

require('antd/lib/message/style');

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _GlobalHeader = require('../../components/GlobalHeader');

var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

var _GlobalFooter = require('../../components/GlobalFooter');

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter);

var _SiderMenu = require('../../components/SiderMenu');

var _SiderMenu2 = _interopRequireDefault(_SiderMenu);

var _menu = require('../../custom/menu');

var _ModifyPassModel = require('../ModifyPassModel');

var _ModifyPassModel2 = _interopRequireDefault(_ModifyPassModel);

var _zh_CN = require('antd/lib/locale-provider/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _HomeHeader = require('./home/HomeHeader');

var _HomeHeader2 = _interopRequireDefault(_HomeHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider;


function getFlatMenuData(menus) {
  var keys = {};
  menus.forEach(function (item) {
    if (item.children) {
      keys[item.path] = _extends({}, item);
      keys = _extends({}, keys, getFlatMenuData(item.children));
    } else {
      keys[item.path] = _extends({}, item);
    }
  });
  return keys;
}
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
(0, _menu.getMenuData)().forEach(getRedirect);

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
      visible: false,
      collapsed: false
    }, _this.hideModelHandler = function () {
      var isNeedResetPassword = _this.props.isNeedResetPassword;

      if (isNeedResetPassword) {
        return _message3.default.warn("首次登陆请修改密码");
      }
      _this.setState({ visible: false });
    }, _this.handleMenuCollapse = function (collapsed) {
      _this.setState({ collapsed: collapsed });
    }, _this.handleNoticeClear = function (type) {
      _message3.default.success('\u6E05\u7A7A\u4E86' + type);
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BasicLayout, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          location = _props.location,
          route = _props.route;
      // debugger

      var menuData = getFlatMenuData((0, _menu.getMenuData)());
      var routerConfig = route.routes;
      var routerData = {};
      // debugger
      routerConfig.map(function (item) {
        // debugger
        var path = item.path || "";
        var menuItem = menuData[path.replace(/^\//, '')] || {};
        routerData[path] = _extends({}, item, {
          name: item.name || menuItem.name
        });
      });
      return {
        location: location,
        breadcrumbNameMap: routerData
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isNeedResetPassword = this.props.isNeedResetPassword;


      if (isNeedResetPassword) {
        this.handleMenuClick({ key: "modifyPws" });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          currentUser = _props2.currentUser,
          match = _props2.match,
          location = _props2.location,
          logo = _props2.logo,
          isNeedResetPassword = _props2.isNeedResetPassword;
      var collapsed = this.state.collapsed;

      var layout = _react2.default.createElement(
        _layout2.default,
        null,
        _react2.default.createElement(_HomeHeader2.default, { logo: logo, currentUser: currentUser, handleMenuClick: this.handleMenuClick }),
        _react2.default.createElement(
          Content,
          { style: { padding: '0 50px' } },
          _react2.default.createElement(
            _layout2.default,
            { style: { padding: '24px 0', background: '#fff' } },
            _react2.default.createElement(
              Content,
              { style: { padding: '24px 24px', height: '100%' } },
              _react2.default.createElement(
                'div',
                { style: { minHeight: 'calc(100vh - 195px)' } },
                this.props.children
              )
            )
          )
        ),
        _react2.default.createElement(
          Footer,
          { style: { textAlign: 'center' } },
          _react2.default.createElement('div', null)
        ),
        _react2.default.createElement(_ModifyPassModel2.default, { isNeedResetPassword: isNeedResetPassword, hideModelHandler: this.hideModelHandler, visible: this.state.visible, resetPassword: this.props.resetPassword })
      );

      return _react2.default.createElement(
        _localeProvider2.default,
        { locale: _zh_CN2.default },
        layout
      );
    }
  }]);

  return BasicLayout;
}(_react2.default.PureComponent), _class.childContextTypes = {
  location: _propTypes2.default.object,
  breadcrumbNameMap: _propTypes2.default.object
}, _temp2);
exports.default = BasicLayout;
module.exports = exports['default'];