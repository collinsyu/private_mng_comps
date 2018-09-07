Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

require('antd/lib/icon/style');

require('antd/lib/message/style');

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _reactContainerQuery = require('react-container-query');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _enquireJs = require('enquire-js');

var _antdpro = require('../antdpro');

var _menu = require('../common/menu');

var _ModifyPassModel = require('./ModifyPassModel');

var _ModifyPassModel2 = _interopRequireDefault(_ModifyPassModel);

var _router = require('dva/router');

var _PageHeaderLayout = require('./PageHeaderLayout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _layout2.default.Content;

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
(0, _enquireJs.enquireScreen)(function (b) {
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
      _message3.default.success('\u6E05\u7A7A\u4E86' + type);
      // this.props.dispatch({
      //   type: 'global/clearNotices',
      //   payload: type,
      // });
    }, _this.handleMenuClick = function (_ref2) {
      var key = _ref2.key;


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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _enquireJs.enquireScreen)(function (mobile) {
        console.log("mobile", mobile);
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
      var _props = this.props,
          routerData = _props.routerData,
          location = _props.location;
      var pathname = location.pathname;

      var title = 'Ant Design Pro';
      if (typeof window.SYS_TITLE !== 'undefined') {
        title = window.SYS_TITLE;
      }
      // if (routerData[pathname] && routerData[pathname].name) {
      //   title = `${routerData[pathname].name} - ${title}`;
      // }
      return title;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          currentUser = _props2.currentUser,
          collapsed = _props2.collapsed,
          routerData = _props2.routerData,
          match = _props2.match,
          location = _props2.location,
          logo = _props2.logo;

      var layout = _react2.default.createElement(
        _layout2.default,
        null,
        _react2.default.createElement(_antdpro.SiderMenu, {
          logo: logo,
          menuData: (0, _menu.getMenuData)(),
          collapsed: collapsed,
          location: location,
          isMobile: this.state.isMobile,
          onCollapse: this.handleMenuCollapse
        }),
        _react2.default.createElement(
          _layout2.default,
          null,
          _react2.default.createElement(_antdpro.GlobalHeader, {
            logo: logo,
            currentUser: currentUser,
            isMobile: this.state.isMobile,
            onNoticeClear: this.handleNoticeClear,
            onCollapse: this.handleMenuCollapse,
            onMenuClick: this.handleMenuClick,
            onNoticeVisibleChange: this.handleNoticeVisibleChange
          }),
          _react2.default.createElement(
            Content,
            { style: { margin: '24px 24px 0', height: '100%' } },
            _react2.default.createElement(
              'div',
              { style: { minHeight: 'calc(100vh - 260px)' } },
              _react2.default.createElement(_PageHeaderLayout.PageHeaderLayout, this.props)
            ),
            _react2.default.createElement(_antdpro.GlobalFooter, {
              copyright: _react2.default.createElement(
                'div',
                null,
                'Copyright ',
                _react2.default.createElement(_icon2.default, { type: 'copyright' }),
                ' 2018 \u6167\u66D9\u901A\u8BAF\u79D1\u6280\u6280\u672F\u90E8\u51FA\u54C1'
              )
            }),
            _react2.default.createElement(_ModifyPassModel2.default, { hideModelHandler: this.hideModelHandler, visible: this.state.visible })
          )
        )
      );

      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: this.getPageTitle() },
        _react2.default.createElement(
          _reactContainerQuery.ContainerQuery,
          { query: query },
          function (params) {
            return _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)(params) },
              layout
            );
          }
        )
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