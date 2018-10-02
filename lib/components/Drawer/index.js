Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcQueueAnim = require('rc-queue-anim');

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_PureComponent) {
  _inherits(Drawer, _PureComponent);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.state = {
      visible: _this.props.visible,
      title: _this.props.title || '',
      // footString: this.props.footString || '',
      buttonLabel: _this.props.buttonLabel || ''
    };
    return _this;
  }

  _createClass(Drawer, [{
    key: 'fuckClick',
    value: function fuckClick(e) {
      e.stopPropagation();
      this.props.onCancel();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _index2.default.drawer },
        _react2.default.createElement(
          _rcQueueAnim2.default,
          { key: 'drawer', type: ['right', 'right'], ease: ['easeOutQuart', 'easeInOutQuart'] },
          this.props.visible ? _react2.default.createElement(
            'div',
            { key: 'absolute', className: _index2.default.absolute },
            _react2.default.createElement('div', { className: _index2.default.masklayer, onClick: this.props.onCancel }),
            _react2.default.createElement(
              'div',
              { className: _index2.default.container },
              _react2.default.createElement(
                'div',
                { className: _index2.default.head },
                _react2.default.createElement(
                  'span',
                  { className: _index2.default.title },
                  this.state.title
                ),
                _react2.default.createElement(_icon2.default, { onClick: this.props.onCancel, className: _index2.default.close, type: 'cross' })
              ),
              _react2.default.createElement(
                'div',
                { className: _index2.default.body, style: { maxHeight: document.body.clientHeight - (this.props.footString ? 80 : 40) } },
                this.props.children
              ),
              this.props.footString ? _react2.default.createElement(
                'div',
                { className: _index2.default.foot },
                this.props.footString
              ) : null
            )
          ) : null
        )
      );
    }
  }]);

  return Drawer;
}(_react.PureComponent);

exports.default = Drawer;
module.exports = exports['default'];