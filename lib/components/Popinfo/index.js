Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/popconfirm/style');

require('antd/lib/input/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var Popinfo = function (_PureComponent) {
  _inherits(Popinfo, _PureComponent);

  function Popinfo(props) {
    _classCallCheck(this, Popinfo);

    var _this = _possibleConstructorReturn(this, (Popinfo.__proto__ || Object.getPrototypeOf(Popinfo)).call(this, props));

    _this.hideModelHandler = function () {
      _this.setState({ visible: false, confirmLoading: false });
    };

    _this.showModelHandler = function (e) {
      if (e) {
        e.stopPropagation();
      }
      _this.setState({ visible: true });
    };

    _this.onConfirm = function (e) {
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this.setVisible(false);
          _this.props.form.resetFields();
          var onConfirm = _this.props.onConfirm;

          if (onConfirm) {
            onConfirm.call(_this, e, values);
          }
        } else {}
      });
    };

    _this.onCancel = function (e) {
      _this.setVisible(false);

      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel.call(_this, e);
      }
    };

    _this.state = {
      visible: false,
      confirmLoading: false
    };
    return _this;
  }

  _createClass(Popinfo, [{
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
      var getFieldDecorator = this.props.form.getFieldDecorator;


      var formB = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _form2.default,
          { layout: 'horizontal' },
          this.props.title,
          _react2.default.createElement(
            FormItem,
            null,
            getFieldDecorator('value', {
              rules: [{ required: true, message: '请输入正确的值' }]
            })(_react2.default.createElement(_input2.default, null))
          )
        )
      );

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _popconfirm2.default,
          { placement: 'bottom', visible: this.state.visible, title: formB, onConfirm: this.onConfirm, onCancel: this.onCancel },
          _react2.default.createElement(
            'span',
            { onClick: this.showModelHandler },
            children
          )
        )
      );
    }
  }]);

  return Popinfo;
}(_react.PureComponent);

exports.default = _form2.default.create()(Popinfo);
module.exports = exports['default'];