var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { MiniArea } from '../Charts';
import NumberInfo from '../NumberInfo';

var styles = {
  'activeChart': '_--css-module-js',
  'activeChartGrid': '_--css-module-js',
  'activeChartLegend': '_--css-module-js'
};


function fixedZero(val) {
  return val * 1 < 10 ? '0' + val : val;
}

function getActiveData() {
  var activeData = [];
  for (var i = 0; i < 24; i += 1) {
    activeData.push({
      x: fixedZero(i) + ':00',
      y: Math.floor(Math.random() * 200) + i * 50
    });
  }
  return activeData;
}

var ActiveChart = function (_Component) {
  _inherits(ActiveChart, _Component);

  function ActiveChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActiveChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActiveChart.__proto__ || Object.getPrototypeOf(ActiveChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeData: getActiveData()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActiveChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setInterval(function () {
        _this2.setState({
          activeData: getActiveData()
        });
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state$activeData = this.state.activeData,
          activeData = _state$activeData === undefined ? [] : _state$activeData;


      return React.createElement(
        'div',
        { className: styles.activeChart },
        React.createElement(NumberInfo, { subTitle: '\u76EE\u6807\u8BC4\u4F30', total: '\u6709\u671B\u8FBE\u5230\u9884\u671F' }),
        React.createElement(
          'div',
          { style: { marginTop: 32 } },
          React.createElement(MiniArea, {
            animate: false,
            line: true,
            borderWidth: 2,
            height: 84,
            scale: {
              y: {
                tickCount: 3
              }
            },
            yAxis: {
              tickLine: false,
              label: false,
              title: false,
              line: false
            },
            data: activeData
          })
        ),
        activeData && React.createElement(
          'div',
          { className: styles.activeChartGrid },
          React.createElement(
            'p',
            null,
            [].concat(_toConsumableArray(activeData)).sort()[activeData.length - 1].y + 200,
            ' \u4EBF\u5143'
          ),
          React.createElement(
            'p',
            null,
            [].concat(_toConsumableArray(activeData)).sort()[Math.floor(activeData.length / 2)].y,
            ' \u4EBF\u5143'
          )
        ),
        activeData && React.createElement(
          'div',
          { className: styles.activeChartLegend },
          React.createElement(
            'span',
            null,
            '00:00'
          ),
          React.createElement(
            'span',
            null,
            activeData[Math.floor(activeData.length / 2)].x
          ),
          React.createElement(
            'span',
            null,
            activeData[activeData.length - 1].x
          )
        )
      );
    }
  }]);

  return ActiveChart;
}(Component);

export { ActiveChart as default };