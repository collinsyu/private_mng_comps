import 'antd/lib/date-picker/style';
import _DatePicker from 'antd/lib/date-picker';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import moment from 'moment';

var RangePicker = _DatePicker.RangePicker;

var RangePickerX = function (_Component) {
  _inherits(RangePickerX, _Component);

  function RangePickerX() {
    _classCallCheck(this, RangePickerX);

    return _possibleConstructorReturn(this, (RangePickerX.__proto__ || Object.getPrototypeOf(RangePickerX)).apply(this, arguments));
  }

  _createClass(RangePickerX, [{
    key: 'render',
    value: function render() {
      var ranges = {
        '今天': [moment(), moment()],
        '昨天': [moment().add(-1, 'days'), moment().add(-1, 'days')],
        '前7天': [moment().add(-7, 'days'), moment()],
        '本月': [moment().startOf('month'), moment()]
      };

      var _props = _extends({
        ranges: ranges,
        style: { width: 180 }
      }, this.props);

      return React.createElement(
        'div',
        null,
        React.createElement(RangePicker, _props)
      );
    }
  }]);

  return RangePickerX;
}(Component);

export default RangePickerX;