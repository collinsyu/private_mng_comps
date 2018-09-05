var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Input, Icon } from 'antd';

var EditSpanCell = function (_React$Component) {
  _inherits(EditSpanCell, _React$Component);

  function EditSpanCell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditSpanCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditSpanCell.__proto__ || Object.getPrototypeOf(EditSpanCell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value,
      editable: false
    }, _this.handleChange = function (e) {
      var value = e.target.value;
      _this.setState({ value: value });
    }, _this.check = function () {
      _this.setState({ editable: false });
      if (_this.props.onChange) {
        _this.props.onChange(_this.state.value);
      }
    }, _this.edit = function () {
      _this.setState({ editable: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditSpanCell, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          editable = _state.editable;

      return React.createElement(
        'div',
        { className: 'editable-cell' },
        editable ? React.createElement(
          'div',
          { className: 'editable-cell-input-wrapper' },
          React.createElement(Input, { value: value, onChange: this.handleChange, onPressEnter: this.check }),
          React.createElement(Icon, { type: 'check', className: 'editable-cell-icon-check', onClick: this.check })
        ) : React.createElement(
          'div',
          { className: 'editable-cell-text-wrapper' },
          value || ' ',
          React.createElement(Icon, { type: 'edit', className: 'editable-cell-icon', onClick: this.edit })
        )
      );
    }
  }]);

  return EditSpanCell;
}(React.Component);

export { EditSpanCell as default };
;