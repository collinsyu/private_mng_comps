Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autoHeight = require('../autoHeight');

var _autoHeight2 = _interopRequireDefault(_autoHeight);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-return-assign: 0 */
/* eslint no-mixed-operators: 0 */
// riddle: https://riddle.alibaba-inc.com/riddles/2d9a4b90

var WaterWave = (_dec = (0, _autoHeight2.default)(), _dec(_class = function (_PureComponent) {
  _inherits(WaterWave, _PureComponent);

  function WaterWave() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WaterWave);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WaterWave.__proto__ || Object.getPrototypeOf(WaterWave)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      radio: 1
    }, _this.resize = function () {
      var height = _this.props.height;
      var offsetWidth = _this.root.parentNode.offsetWidth;

      _this.setState({
        radio: offsetWidth < height ? offsetWidth / height : 1
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WaterWave, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderChart();
      this.resize();

      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.timer);
      if (this.node) {
        this.node.innerHTML = '';
      }
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'renderChart',
    value: function renderChart() {
      var _props = this.props,
          percent = _props.percent,
          _props$color = _props.color,
          color = _props$color === undefined ? '#1890FF' : _props$color;

      var data = percent / 100;
      var self = this;

      if (!this.node || !data) {
        return;
      }

      var canvas = this.node;
      var ctx = canvas.getContext('2d');

      var canvasWidth = canvas.width;
      var canvasHeight = canvas.height;
      var radius = canvasWidth / 2;
      var lineWidth = 2;
      var cR = radius - lineWidth;

      ctx.beginPath();
      ctx.lineWidth = lineWidth * 2;

      var axisLength = canvasWidth - lineWidth;
      var unit = axisLength / 8;
      var range = 0.2; // 振幅
      var currRange = range;
      var xOffset = lineWidth;
      var sp = 0; // 周期偏移量
      var currData = 0;
      var waveupsp = 0.005; // 水波上涨速度

      var arcStack = [];
      var bR = radius - lineWidth;
      var circleOffset = -(Math.PI / 2);
      var circleLock = true;

      for (var i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
        arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
      }

      var cStartPoint = arcStack.shift();
      ctx.strokeStyle = color;
      ctx.moveTo(cStartPoint[0], cStartPoint[1]);

      function drawSin() {
        ctx.beginPath();
        ctx.save();

        var sinStack = [];
        for (var _i = xOffset; _i <= xOffset + axisLength; _i += 20 / axisLength) {
          var x = sp + (xOffset + _i) / unit;
          var y = Math.sin(x) * currRange;
          var dx = _i;
          var dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;

          ctx.lineTo(dx, dy);
          sinStack.push([dx, dy]);
        }

        var startPoint = sinStack.shift();

        ctx.lineTo(xOffset + axisLength, canvasHeight);
        ctx.lineTo(xOffset, canvasHeight);
        ctx.lineTo(startPoint[0], startPoint[1]);

        var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(1, '#1890FF');
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }

      function render() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (circleLock) {
          if (arcStack.length) {
            var temp = arcStack.shift();
            ctx.lineTo(temp[0], temp[1]);
            ctx.stroke();
          } else {
            circleLock = false;
            ctx.lineTo(cStartPoint[0], cStartPoint[1]);
            ctx.stroke();
            arcStack = null;

            ctx.globalCompositeOperation = 'destination-over';
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.arc(radius, radius, bR, 0, 2 * Math.PI, 1);

            ctx.beginPath();
            ctx.save();
            ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, 1);

            ctx.restore();
            ctx.clip();
            ctx.fillStyle = '#1890FF';
          }
        } else {
          if (data >= 0.85) {
            if (currRange > range / 4) {
              var t = range * 0.01;
              currRange -= t;
            }
          } else if (data <= 0.1) {
            if (currRange < range * 1.5) {
              var _t = range * 0.01;
              currRange += _t;
            }
          } else {
            if (currRange <= range) {
              var _t2 = range * 0.01;
              currRange += _t2;
            }
            if (currRange >= range) {
              var _t3 = range * 0.01;
              currRange -= _t3;
            }
          }
          if (data - currData > 0) {
            currData += waveupsp;
          }
          if (data - currData < 0) {
            currData -= waveupsp;
          }

          sp += 0.07;
          drawSin();
        }
        self.timer = requestAnimationFrame(render);
      }

      render();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var radio = this.state.radio;
      var _props2 = this.props,
          percent = _props2.percent,
          title = _props2.title,
          height = _props2.height;

      return _react2.default.createElement(
        'div',
        {
          className: _index2.default.waterWave,
          ref: function ref(n) {
            return _this2.root = n;
          },
          style: { transform: 'scale(' + radio + ')' }
        },
        _react2.default.createElement(
          'div',
          { style: { width: height, height: height, overflow: 'hidden' } },
          _react2.default.createElement('canvas', {
            className: _index2.default.waterWaveCanvasWrapper,
            ref: function ref(n) {
              return _this2.node = n;
            },
            width: height * 2,
            height: height * 2
          })
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default.text, style: { width: height } },
          title && _react2.default.createElement(
            'span',
            null,
            title
          ),
          _react2.default.createElement(
            'h4',
            null,
            percent,
            '%'
          )
        )
      );
    }
  }]);

  return WaterWave;
}(_react.PureComponent)) || _class);
exports.default = WaterWave;
module.exports = exports['default'];