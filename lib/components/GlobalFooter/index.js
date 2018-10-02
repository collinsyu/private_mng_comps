Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var className = _ref.className,
      links = _ref.links,
      copyright = _ref.copyright;

  var clsString = (0, _classnames2.default)("_yhq_globalFooter", className);
  return _react2.default.createElement(
    'div',
    { className: clsString },
    links && _react2.default.createElement(
      'div',
      { className: "links" },
      links.map(function (link) {
        return _react2.default.createElement(
          'a',
          {
            key: link.key,
            target: link.blankTarget ? '_blank' : '_self',
            href: link.href
          },
          link.title
        );
      })
    ),
    copyright && _react2.default.createElement(
      'div',
      { className: "copyright" },
      copyright
    ),
    _react2.default.createElement(
      'style',
      null,
      '\n\n        ._yhq_globalFooter {\n          padding: 0 16px;\n          margin: 48px 0 24px 0;\n          text-align: center;\n        }\n        ._yhq_globalFooter .links {\n          margin-bottom: 8px;\n        }\n        ._yhq_globalFooter .links a:last-child {\n          margin-right: 40px;\n        }\n        ._yhq_globalFooter .links a:hover {\n          color: fade(#000, 65%);\n        }\n        ._yhq_globalFooter .links a {\n          color: fade(#000, 45%);\n          transition: all .3s;\n        }\n        ._yhq_globalFooter .copyright {\n          color: fade(#000, 45%);\n          font-size: 14px;\n        }\n\n      '
    )
  );
};

module.exports = exports['default'];