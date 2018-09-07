import 'antd/lib/list/style';
import _List from 'antd/lib/list';
import 'antd/lib/avatar/style';
import _Avatar from 'antd/lib/avatar';
export { NoticeList as default };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';

import classNames from 'classnames';
var styles = {
  'list': '_--css-module-js',
  'item': '_--css-module-js',
  'meta': '_--css-module-js',
  'avatar': '_--css-module-js',
  'read': '_--css-module-js',
  'title': '_--css-module-js',
  'description': '_--css-module-js',
  'datetime': '_--css-module-js',
  'extra': '_--css-module-js',
  'notFound': '_--css-module-js',
  'clear': '_--css-module-js'
};
function NoticeList(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _onClick = _ref.onClick,
      onClear = _ref.onClear,
      title = _ref.title,
      locale = _ref.locale,
      emptyText = _ref.emptyText,
      emptyImage = _ref.emptyImage;

  if (data.length === 0) {
    return React.createElement(
      'div',
      { className: styles.notFound },
      emptyImage ? React.createElement('img', { src: emptyImage, alt: 'not found' }) : null,
      React.createElement(
        'div',
        null,
        emptyText || locale.emptyText
      )
    );
  }
  return React.createElement(
    'div',
    null,
    React.createElement(
      _List,
      { className: styles.list },
      data.map(function (item, i) {
        var itemCls = classNames(styles.item, _defineProperty({}, styles.read, item.read));
        return React.createElement(
          _List.Item,
          { className: itemCls, key: item.key || i, onClick: function onClick() {
              return _onClick(item);
            } },
          React.createElement(_List.Item.Meta, {
            className: styles.meta,
            avatar: item.avatar ? React.createElement(_Avatar, { className: styles.avatar, src: item.avatar }) : null,
            title: React.createElement(
              'div',
              { className: styles.title },
              item.title,
              React.createElement(
                'div',
                { className: styles.extra },
                item.extra
              )
            ),
            description: React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { className: styles.description, title: item.description },
                item.description
              ),
              React.createElement(
                'div',
                { className: styles.datetime },
                item.datetime
              )
            )
          })
        );
      })
    ),
    React.createElement(
      'div',
      { className: styles.clear, onClick: onClear },
      locale.clear,
      title
    )
  );
}
module.exports = exports['default'];