Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _breadcrumb = require('antd/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

require('antd/lib/breadcrumb/style');

require('antd/lib/tabs/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _tabs2.default.TabPane;


function getBreadcrumb(breadcrumbNameMap, url) {
  // debugger
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
      return last || !route.component ? _react2.default.createElement(
        'span',
        null,
        route.breadcrumbName
      ) : (0, _react.createElement)(linkElement, {
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

      var clsString = (0, _classnames2.default)("_yhq_pageHeader", className);
      var breadcrumb = void 0;
      if (breadcrumbList && breadcrumbList.length) {
        breadcrumb = _react2.default.createElement(
          _breadcrumb2.default,
          { className: "breadcrumb" },
          breadcrumbList.map(function (item) {
            return _react2.default.createElement(
              _breadcrumb2.default.Item,
              { key: item.title },
              item.href ? (0, _react.createElement)(linkElement, _defineProperty({}, linkElement === 'a' ? 'href' : 'to', item.href), item.title) : item.title
            );
          })
        );
      } else if (routes && params) {
        breadcrumb = _react2.default.createElement(_breadcrumb2.default, {
          className: "breadcrumb",
          routes: routes.filter(function (route) {
            return route.breadcrumbName;
          }),
          params: params,
          itemRender: this.itemRender
        });
      } else if (location && location.pathname) {
        // debugger
        var pathSnippets = location.pathname.split('/').filter(function (i) {
          return i;
        });
        var extraBreadcrumbItems = pathSnippets.map(function (_, index) {
          var url = '/' + pathSnippets.slice(0, index + 1).join('/');
          var currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url);
          // debugger
          var isLinkable = index !== pathSnippets.length - 1 && currentBreadcrumb.component;
          return currentBreadcrumb.name && !currentBreadcrumb.hideInBreadcrumb ? _react2.default.createElement(
            _breadcrumb2.default.Item,
            { key: url },
            (0, _react.createElement)(isLinkable ? linkElement : 'span', _defineProperty({}, linkElement === 'a' ? 'href' : 'to', url), currentBreadcrumb.name)
          ) : null;
        });
        var breadcrumbItems = [_react2.default.createElement(
          _breadcrumb2.default.Item,
          { key: 'home' },
          (0, _react.createElement)(linkElement, _defineProperty({}, linkElement === 'a' ? 'href' : 'to', '/'), '首页')
        )].concat(extraBreadcrumbItems);
        breadcrumb = _react2.default.createElement(
          _breadcrumb2.default,
          { className: "breadcrumb" },
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

      return _react2.default.createElement(
        'div',
        { className: clsString },
        breadcrumb,
        _react2.default.createElement(
          'div',
          { className: "detail" },
          logo && _react2.default.createElement(
            'div',
            { className: "logo" },
            logo
          ),
          _react2.default.createElement(
            'div',
            { className: "main" },
            _react2.default.createElement(
              'div',
              { className: "row" },
              title && _react2.default.createElement(
                'h1',
                { className: "title" },
                title
              ),
              action && _react2.default.createElement(
                'div',
                { className: "action" },
                action
              )
            ),
            _react2.default.createElement(
              'div',
              { className: "row" },
              content && _react2.default.createElement(
                'div',
                { className: "content" },
                content
              ),
              extraContent && _react2.default.createElement(
                'div',
                { className: "extraContent" },
                extraContent
              )
            )
          )
        ),
        tabList && tabList.length && _react2.default.createElement(
          _tabs2.default,
          _extends({
            className: "tabs"
          }, activeKeyProps, {
            onChange: this.onChange
          }),
          tabList.map(function (item) {
            return _react2.default.createElement(TabPane, { tab: item.tab, key: item.key });
          })
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n          ._yhq_pageHeader {\n            background: #fff;\n            //padding: 8px 22px 0 22px;\n            border-bottom: 1px solid hsv(0, 0, 91%);\n          }\n          ._yhq_pageHeader .detail {\n            display: flex;\n          }\n          ._yhq_pageHeader .row {\n            display: flex;\n          }\n          ._yhq_pageHeader .breadcrumb {\n            //margin-bottom: 8px;\n            line-height: 36px;\n            padding: 0 24px;\n          }\n          ._yhq_pageHeader .tabs {\n            margin: 0 0 -17px -8px;\n          }\n          ._yhq_pageHeader .tabs .ant-tabs-bar {\n            border-bottom: 1px solid hsv(0, 0, 91%);\n          }\n\n          ._yhq_pageHeader .logo {\n            flex: 0 1 auto;\n            margin-right: 16px;\n            padding-top: 1px;\n          }\n          ._yhq_pageHeader .logo > img {\n            width: 28px;\n            height: 28px;\n            border-radius: 4px;\n            display: block;\n          }\n          ._yhq_pageHeader .title {\n            font-size: 20px;\n            font-weight: 500;\n            color: fade(#000, 85%);\n          }\n          ._yhq_pageHeader .action {\n            margin-left: 56px;\n            min-width: 266px;\n          }\n\n          ._yhq_pageHeader .action .ant-btn-group:not(:last-child),\n          ._yhq_pageHeader .action .ant-btn:not(:last-child) {\n            margin-right: 8px;\n          }\n          ._yhq_pageHeader .action .ant-btn-group > .ant-btn {\n            margin-right: 0;\n          }\n          ._yhq_pageHeader .title, .action,\n          ._yhq_pageHeader .content,\n          ._yhq_pageHeader .extraContent,\n          ._yhq_pageHeader .main {\n            flex: auto;\n          }\n          ._yhq_pageHeader .title,\n          ._yhq_pageHeader .action {\n            margin-bottom: 16px;\n          }\n          ._yhq_pageHeader .logo, .content,\n          ._yhq_pageHeader .extraContent {\n            margin-bottom: 16px;\n          }\n          ._yhq_pageHeader .action,\n          ._yhq_pageHeader .extraContent {\n            text-align: right;\n          }\n\n          ._yhq_pageHeader .extraContent {\n            margin-left: 88px;\n            min-width: 242px;\n          }\n\n\n          @media screen and (max-width: 1200px) {\n            ._yhq_pageHeader .extraContent {\n              margin-left: 44px;\n            }\n          }\n\n          @media screen and (max-width: 992px) {\n            ._yhq_pageHeader .extraContent {\n              margin-left: 20px;\n            }\n          }\n\n          @media screen and (max-width: 768px) {\n            ._yhq_pageHeader .row {\n              display: block;\n            }\n            ._yhq_pageHeader .action,\n            ._yhq_pageHeader .extraContent {\n              margin-left: 0;\n              text-align: left;\n            }\n          }\n\n          @media screen and (max-width: 576px) {\n            ._yhq_pageHeader .detail {\n              display: block;\n            }\n          }\n\n          @media screen and (max-width: 480px) {\n            ._yhq_pageHeader .action .ant-btn-group,\n            ._yhq_pageHeader .action  .ant-btn {\n              display: block;\n              margin-bottom: 8px;\n            }\n            ._yhq_pageHeader .action .ant-btn-group > .ant-btn {\n              display: inline-block;\n              margin-bottom: 0;\n            }\n          }\n\n        '
        )
      );
    }
  }]);

  return PageHeader;
}(_react.PureComponent), _class.contextTypes = {
  routes: _propTypes2.default.array,
  params: _propTypes2.default.object,
  location: _propTypes2.default.object,
  breadcrumbNameMap: _propTypes2.default.object
}, _temp2);
exports.default = PageHeader;
module.exports = exports['default'];