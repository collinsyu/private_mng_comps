import 'antd/lib/card/style';
import _Card from 'antd/lib/card';
import 'antd/lib/spin/style';
import _Spin from 'antd/lib/spin';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import classNames from 'classnames';

var styles = {
  'chartCard': '_--css-module-js',
  'chartTop': '_--css-module-js',
  'chartTopMargin': '_--css-module-js',
  'chartTopHasMargin': '_--css-module-js',
  'metaWrap': '_--css-module-js',
  'avatar': '_--css-module-js',
  'meta': '_--css-module-js',
  'action': '_--css-module-js',
  'total': '_--css-module-js',
  'content': '_--css-module-js',
  'contentFixed': '_--css-module-js',
  'footer': '_--css-module-js',
  'footerMargin': '_--css-module-js',
  'spin': '_--css-module-js'
};


var ChartCard = function ChartCard(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === undefined ? false : _ref$loading,
      contentHeight = _ref.contentHeight,
      title = _ref.title,
      avatar = _ref.avatar,
      action = _ref.action,
      total = _ref.total,
      footer = _ref.footer,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['loading', 'contentHeight', 'title', 'avatar', 'action', 'total', 'footer', 'children']);

  var content = React.createElement(
    'div',
    { className: styles.chartCard },
    React.createElement(
      'div',
      {
        className: classNames(styles.chartTop, _defineProperty({}, styles.chartTopMargin, !children && !footer))
      },
      React.createElement(
        'div',
        { className: styles.avatar },
        avatar
      ),
      React.createElement(
        'div',
        { className: styles.metaWrap },
        React.createElement(
          'div',
          { className: styles.meta },
          React.createElement(
            'span',
            { className: styles.title },
            title
          ),
          React.createElement(
            'span',
            { className: styles.action },
            action
          )
        ),

        // eslint-disable-next-line
        total !== undefined && React.createElement('div', { className: styles.total, dangerouslySetInnerHTML: { __html: total } })
      )
    ),
    children && React.createElement(
      'div',
      { className: styles.content, style: { height: contentHeight || 'auto' } },
      React.createElement(
        'div',
        { className: contentHeight && styles.contentFixed },
        children
      )
    ),
    footer && React.createElement(
      'div',
      { className: classNames(styles.footer, _defineProperty({}, styles.footerMargin, !children)) },
      footer
    )
  );

  return React.createElement(
    _Card,
    _extends({
      bodyStyle: { padding: '20px 24px 8px 24px' }
    }, rest),
    React.createElement(
      _Spin,
      { spinning: loading, wrapperClassName: styles.spin },
      content
    )
  );
};

export default ChartCard;
module.exports = exports['default'];