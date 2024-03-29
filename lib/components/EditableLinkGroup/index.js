Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: 添加逻辑

var EditableLinkGroup = (_temp = _class = function (_PureComponent) {
  _inherits(EditableLinkGroup, _PureComponent);

  function EditableLinkGroup() {
    _classCallCheck(this, EditableLinkGroup);

    return _possibleConstructorReturn(this, (EditableLinkGroup.__proto__ || Object.getPrototypeOf(EditableLinkGroup)).apply(this, arguments));
  }

  _createClass(EditableLinkGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          links = _props.links,
          linkElement = _props.linkElement,
          onAdd = _props.onAdd;

      return _react2.default.createElement(
        'div',
        { className: _index2.default.linkGroup },
        links.map(function (link) {
          return (0, _react.createElement)(linkElement, {
            key: 'linkGroup-item-' + (link.id || link.title),
            to: link.href,
            href: link.href
          }, link.title);
        }),
        _react2.default.createElement(
          _button2.default,
          { size: 'small', type: 'primary', ghost: true, onClick: onAdd, icon: 'plus' },
          '\u6DFB\u52A0'
        )
      );
    }
  }]);

  return EditableLinkGroup;
}(_react.PureComponent), _class.defaultProps = {
  links: [],
  onAdd: function onAdd() {},
  linkElement: 'a'
}, _class.propTypes = {
  links: _propTypes2.default.array,
  onAdd: _propTypes2.default.func,
  linkElement: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
}, _temp);
exports.default = EditableLinkGroup;
module.exports = exports['default'];