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
        { className: style.drawer },
        _react2.default.createElement(
          _rcQueueAnim2.default,
          { key: 'drawer', type: ['right', 'right'], ease: ['easeOutQuart', 'easeInOutQuart'] },
          this.props.visible ? _react2.default.createElement(
            'div',
            { key: 'absolute', className: style.absolute },
            _react2.default.createElement('div', { className: style.masklayer, onClick: this.props.onCancel }),
            _react2.default.createElement(
              'div',
              { className: style.container },
              _react2.default.createElement(
                'div',
                { className: style.head },
                _react2.default.createElement(
                  'span',
                  { className: style.title },
                  this.state.title
                ),
                _react2.default.createElement(_icon2.default, { onClick: this.props.onCancel, className: style.close, type: 'cross' })
              ),
              _react2.default.createElement(
                'div',
                { className: style.body, style: { maxHeight: document.body.clientHeight - (this.props.footString ? 80 : 40) } },
                this.props.children
              ),
              this.props.footString ? _react2.default.createElement(
                'div',
                { className: style.foot },
                this.props.footString
              ) : null
            )
          ) : null
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n\n          ._yhq_drawer ._yhq_absolute {\n            position: fixed;\n            top: 0;\n            right: 0;\n            height: 100%;\n            width: 100%;\n            z-index: 99;\n          }\n          ._yhq_drawer ._yhq_masklayer {\n            z-index: 9999;\n            position: fixed;\n            top: 0;\n            right: 0;\n            height: 100%;\n            width: 100%;\n          }\n          ._yhq_drawer ._yhq_container {\n            -moz-box-shadow: -1px 0 20px #757474;\n            -webkit-box-shadow: -1px 0 20px #757474;\n            box-shadow: -1px 0 20px #757474;\n            border-left: 1px solid #dedede;\n            z-index: 100000;\n            position: fixed;\n            top: 0;\n            right: 0;\n            height: 100%;\n            width: 50%;\n            background: #fff;\n          }\n          ._yhq_drawer ._yhq_body {\n            padding: 20px;\n            overflow-y: auto;\n          }\n          ._yhq_drawer ._yhq_foot {\n            position: absolute;\n            bottom: 0;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            width: 100%;\n            border-top: 1px solid #dedede;\n          }\n          ._yhq_drawer ._yhq_head  {\n            height: 40px;\n            line-height: 40px;\n            border-bottom: 1px solid #dedede;\n          }\n          ._yhq_drawer ._yhq_head ._yhq_title {\n            padding: 0 10px;\n            font-size: large;\n            line-height: 40px;\n          }\n          ._yhq_drawer ._yhq_head ._yhq_close {\n            float: right;\n            line-height: 40px;\n            padding: 0 10px;\n            font-size: 22px;\n            cursor: pointer;\n            transition: All 0.4s ease-in-out;\n            -webkit-transition: All 0.4s ease-in-out;\n            -moz-transition: All 0.4s ease-in-out;\n            -o-transition: All 0.4s ease-in-out;\n          }\n          ._yhq_drawer ._yhq_head ._yhq_close:hover {\n            transform: rotate(180deg);\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n          }\n\n        '
        )
      );
    }
  }]);

  return Drawer;
}(_react.PureComponent);

exports.default = Drawer;
module.exports = exports['default'];