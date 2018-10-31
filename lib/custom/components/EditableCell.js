Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/icon/style');

require('antd/lib/input/style');

require('antd/lib/checkbox/style');

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var EditableCell = function (_PureComponent) {
  _inherits(EditableCell, _PureComponent);

  function EditableCell(props) {
    _classCallCheck(this, EditableCell);

    var _this = _possibleConstructorReturn(this, (EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).call(this, props));

    _this.handleChange = function (e) {
      var value = e.target.value;
      _this.setState({ value: value });
    };

    _this._handleChange = function (value) {
      _this.setState({ value: value });
    };

    _this.handleSelectChange = function (value) {
      _this.setState({ value: value.key, text: value.label });
    };

    _this.check = function () {
      _this.setState({ editable: false });
      if (_this.props.onChange) {
        _this.props.onChange(_this.props.record, _this.props.dataIndex, _this.state.value);
      }
    };

    _this.edit = function () {
      _this.setState({ editable: true });
    };

    _this.getInputItem = function () {
      var value = _this.state.value;

      var type = _this.props.type;
      if (!type) {
        //设置默认值
        type = 'input';
      }
      switch (type) {
        case 'select':
          return _react2.default.createElement(
            _select2.default,
            { onBlur: _this.check, labelInValue: true, defaultValue: { key: value }, autoFocus: true, onChange: _this.handleSelectChange, style: { width: '100%' } },
            _this.getSelectOption()
          );
        case 'checkbox':
          return _react2.default.createElement(_checkbox2.default, { onBlur: _this.check, labelInValue: true, checked: value, autoFocus: true, onChange: function onChange(e) {
              _this._handleChange(e.target.checked);
            } });
        default:
          return _react2.default.createElement(_input2.default, { onBlur: _this.check, autoFocus: true, value: value, onChange: _this.handleChange, onPressEnter: _this.check });
      }
    };

    _this.renderLabel = function () {
      var type = _this.props.type;
      var _this$state = _this.state,
          value = _this$state.value,
          text = _this$state.text,
          editable = _this$state.editable;

      switch (type) {
        case 'checkbox':
          return value ? _react2.default.createElement(_icon2.default, { type: 'check-circle-o', style: { color: "green" } }) : _react2.default.createElement(_icon2.default, { type: 'close-circle-o', style: { color: "red" } });
        default:
          return text ? text : value || ' ';
      }
    };

    _this.state = {
      value: _this.props.value,
      text: _this.props.text,
      editable: false
    };
    return _this;
  }

  _createClass(EditableCell, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'getSelectOption',
    value: function getSelectOption() {
      if (this.props.option instanceof Array) {
        return this.props.option.map(function (type) {
          return _react2.default.createElement(
            Option,
            { key: type.value, value: type.value },
            type.name
          );
        });
      }
    }
    // 通过type属性，返回不同的控件类型

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          text = _state.text,
          editable = _state.editable;

      return _react2.default.createElement(
        'div',
        { className: 'editable-cell' },
        editable ? _react2.default.createElement(
          'div',
          { className: 'editable-cell-input-wrapper' },
          this.getInputItem()
        ) : _react2.default.createElement(
          'div',
          { className: 'editable-cell-text-wrapper', onDoubleClick: this.edit },
          this.renderLabel()
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n\n            .editable-cell {\n              position: relative;\n            }\n            .editable-cell .editable-cell-input-wrapper,\n            .editable-cell .editable-cell-text-wrapper {\n              padding-right: 24px;\n            }\n            .editable-cell .editable-cell-text-wrapper {\n              padding: 5px 24px 5px 5px;\n            }\n            .editable-cell .editable-cell-icon,\n            .editable-cell .editable-cell-icon-check {\n              position: absolute;\n              right: 0;\n              width: 20px;\n              cursor: pointer;\n            }\n\n            .editable-cell .editable-cell-icon {\n              line-height: 18px;\n              display: none;\n            }\n\n            .editable-cell .editable-cell-icon-check {\n              line-height: 28px;\n            }\n\n            .editable-cell .editable-cell:hover .editable-cell-icon {\n              display: inline-block;\n            }\n\n            .editable-cell .editable-cell-icon:hover,\n            .editable-cell .editable-cell-icon-check:hover {\n              color: #108ee9;\n            }\n\n            .editable-cell .editable-add-btn {\n              margin-bottom: 8px;\n            }\n        '
        )
      );
    }
  }]);

  return EditableCell;
}(_react.PureComponent);

exports.default = EditableCell;
module.exports = exports['default'];