Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormItemX = require('./FormItemX');

var _FormItemX2 = _interopRequireDefault(_FormItemX);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItemXGen = function (_PureComponent) {
  _inherits(FormItemXGen, _PureComponent);

  function FormItemXGen(props) {
    _classCallCheck(this, FormItemXGen);

    var _this = _possibleConstructorReturn(this, (FormItemXGen.__proto__ || Object.getPrototypeOf(FormItemXGen)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(FormItemXGen, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$formConfigs = _props.formConfigs,
          formConfigs = _props$formConfigs === undefined ? [] : _props$formConfigs,
          newData = _props.newData,
          form = _props.form;

      var getFieldDecorator = form ? form.getFieldDecorator : this.props.getFieldDecorator;
      if (!getFieldDecorator) {
        console.error("请务必传入form或者getFieldDecorator");
      }
      var itemOpts = _extends({
        getFieldDecorator: getFieldDecorator,
        typeOpts: {
          data: newData
        }
      }, this.props);
      var defaultOpts = {};
      if (this.props.search) {
        if (this.props.formItemLayout) {
          defaultOpts = _extends({}, this.props.formItemLayout);
        }
      } else {
        var _formItemLayout = _constants.formItemLayout;
        if (this.props.formItemLayout) {
          _formItemLayout = this.props.formItemLayout;
        }
        defaultOpts = _extends({
          hasFeedback: true
        }, _formItemLayout);
      }
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        formConfigs.map(function (item, ii) {
          var newitemOpts = _lodash2.default.cloneDeep(itemOpts);
          newitemOpts = Object.assign(newitemOpts, item.opts || {});
          newitemOpts.typeOpts.data = {};
          newitemOpts.typeOpts.data[item.name] = item.values;
          return _react2.default.createElement(_FormItemX2.default, _extends({ key: ii }, defaultOpts, newitemOpts, { label: item.label, name: item.name, type: item.type }));
        })
      );
    }
  }]);

  return FormItemXGen;
}(_react.PureComponent);

exports.default = FormItemXGen;
module.exports = exports['default'];