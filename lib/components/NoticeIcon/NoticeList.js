Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _list = require('antd/lib/list');

var _list2 = _interopRequireDefault(_list);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

require('antd/lib/list/style');

require('antd/lib/avatar/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NoticeList = require('./NoticeList.less');

var _NoticeList2 = _interopRequireDefault(_NoticeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return _react2.default.createElement(
      'div',
      { className: _NoticeList2.default.notFound },
      emptyImage ? _react2.default.createElement('img', { src: emptyImage, alt: 'not found' }) : null,
      _react2.default.createElement(
        'div',
        null,
        emptyText || locale.emptyText
      )
    );
  }
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _list2.default,
      { className: _NoticeList2.default.list },
      data.map(function (item, i) {
        var itemCls = (0, _classnames2.default)(_NoticeList2.default.item, _defineProperty({}, _NoticeList2.default.read, item.read));
        return _react2.default.createElement(
          _list2.default.Item,
          { className: itemCls, key: item.key || i, onClick: function onClick() {
              return _onClick(item);
            } },
          _react2.default.createElement(_list2.default.Item.Meta, {
            className: _NoticeList2.default.meta,
            avatar: item.avatar ? _react2.default.createElement(_avatar2.default, { className: _NoticeList2.default.avatar, src: item.avatar }) : null,
            title: _react2.default.createElement(
              'div',
              { className: _NoticeList2.default.title },
              item.title,
              _react2.default.createElement(
                'div',
                { className: _NoticeList2.default.extra },
                item.extra
              )
            ),
            description: _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: _NoticeList2.default.description, title: item.description },
                item.description
              ),
              _react2.default.createElement(
                'div',
                { className: _NoticeList2.default.datetime },
                item.datetime
              )
            )
          })
        );
      })
    ),
    _react2.default.createElement(
      'div',
      { className: _NoticeList2.default.clear, onClick: onClear },
      locale.clear,
      title
    )
  );
}
exports.default = NoticeList;
module.exports = exports['default'];