export { NoticeList as default };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Avatar, List } from 'antd';
import classNames from 'classnames';
import styles from './NoticeList.less';

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
      List,
      { className: styles.list },
      data.map(function (item, i) {
        var itemCls = classNames(styles.item, _defineProperty({}, styles.read, item.read));
        return React.createElement(
          List.Item,
          { className: itemCls, key: item.key || i, onClick: function onClick() {
              return _onClick(item);
            } },
          React.createElement(List.Item.Meta, {
            className: styles.meta,
            avatar: item.avatar ? React.createElement(Avatar, { className: styles.avatar, src: item.avatar }) : null,
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