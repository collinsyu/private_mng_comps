Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/popover/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../../common/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagePopview = function (_PureComponent) {
  _inherits(ImagePopview, _PureComponent);

  function ImagePopview(props) {
    _classCallCheck(this, ImagePopview);

    var _this = _possibleConstructorReturn(this, (ImagePopview.__proto__ || Object.getPrototypeOf(ImagePopview)).call(this, props));

    _this.handleCancel = function () {
      return _this.setState({ visible: false });
    };

    _this.handlePreview = function () {
      return _this.setState({ visible: false });
    };

    _this.renderContent11 = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { 'class': 'ant-upload-list ant-upload-list-picture-card' },
          _react2.default.createElement(
            'div',
            { 'class': 'ant-upload-list-item ant-upload-list-item-done' },
            _react2.default.createElement(
              'div',
              { 'class': 'ant-upload-list-item-info' },
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('img', { height: '180', width: '200', src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', alt: 'xxx.png' })
              )
            ),
            _react2.default.createElement(
              'span',
              { 'class': 'ant-upload-list-item-actions' },
              _react2.default.createElement(
                'a',
                { href: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', target: '_blank', rel: 'noopener noreferrer', title: 'Preview file' },
                _react2.default.createElement('i', { 'class': 'anticon anticon-eye-o' })
              ),
              _react2.default.createElement('i', { title: 'Remove file', 'class': 'anticon anticon-delete' })
            )
          )
        )
      );
    };

    _this.renderContent = function () {
      return _react2.default.createElement('img', { onClick: _this.handlePreview(), height: '180', width: '200', src: window.path + 'dist/' + _this.props.value });
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ImagePopview, [{
    key: 'setVisible',
    value: function setVisible(visible) {
      var props = this.props;
      if (!('visible' in props)) {
        this.setState({ visible: visible });
      }

      var onVisibleChange = props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var previewImage = window.path + 'dist/' + this.props.value;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _popover2.default,
          { content: this.renderContent(), trigger: 'hover' },
          _react2.default.createElement(_button2.default, { icon: 'picture' })
        ),
        _react2.default.createElement(
          _modal2.default,
          { visible: this.state.visible, footer: null, onCancel: this.handleCancel },
          _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
        )
      );
    }
  }]);

  return ImagePopview;
}(_react.PureComponent);

exports.default = ImagePopview;
module.exports = exports['default'];