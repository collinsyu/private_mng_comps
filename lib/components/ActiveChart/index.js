Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Charts = require('../Charts');

var _NumberInfo = require('../NumberInfo');

var _NumberInfo2 = _interopRequireDefault(_NumberInfo);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


      return _react2.default.createElement(
        'div',
        { className: _index2.default.activeChart },
        _react2.default.createElement(_NumberInfo2.default, { subTitle: '\u76EE\u6807\u8BC4\u4F30', total: '\u6709\u671B\u8FBE\u5230\u9884\u671F' }),
        _react2.default.createElement(
          'div',
          { style: { marginTop: 32 } },
          _react2.default.createElement(_Charts.MiniArea, {
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
        activeData && _react2.default.createElement(
          'div',
          { className: _index2.default.activeChartGrid },
          _react2.default.createElement(
            'p',
            null,
            [].concat(_toConsumableArray(activeData)).sort()[activeData.length - 1].y + 200,
            ' \u4EBF\u5143'
          ),
          _react2.default.createElement(
            'p',
            null,
            [].concat(_toConsumableArray(activeData)).sort()[Math.floor(activeData.length / 2)].y,
            ' \u4EBF\u5143'
          )
        ),
        activeData && _react2.default.createElement(
          'div',
          { className: _index2.default.activeChartLegend },
          _react2.default.createElement(
            'span',
            null,
            '00:00'
          ),
          _react2.default.createElement(
            'span',
            null,
            activeData[Math.floor(activeData.length / 2)].x
          ),
          _react2.default.createElement(
            'span',
            null,
            activeData[activeData.length - 1].x
          )
        )
      );
    }
  }]);

  return ActiveChart;
}(_react.Component);

exports.default = ActiveChart;
module.exports = exports['default'];