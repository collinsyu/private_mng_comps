Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bizcharts = require('bizcharts');

var _dataSet = require('@antv/data-set');

var _dataSet2 = _interopRequireDefault(_dataSet);

var _debounce = require('lodash-decorators/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _bind = require('lodash-decorators/bind');

var _bind2 = _interopRequireDefault(_bind);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autoHeight = require('../autoHeight');

var _autoHeight2 = _interopRequireDefault(_autoHeight);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

/* eslint no-underscore-dangle: 0 */
/* eslint no-param-reassign: 0 */

var imgUrl = 'https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png';

var TagCloud = (_dec = (0, _autoHeight2.default)(), _dec2 = (0, _bind2.default)(), _dec3 = (0, _debounce2.default)(500), _dec(_class = (_class2 = function (_Component) {
  _inherits(TagCloud, _Component);

  function TagCloud() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TagCloud);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TagCloud.__proto__ || Object.getPrototypeOf(TagCloud)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dv: null
    }, _this.resize = function () {
      _this.renderChart();
    }, _this.saveRootRef = function (node) {
      _this.root = node;
    }, _this.initTagCloud = function () {
      function getTextAttrs(cfg) {
        return Object.assign({}, {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic'
        }, cfg.style);
      }

      // 给point注册一个词云的shape
      _bizcharts.Shape.registerShape('point', 'cloud', {
        drawShape: function drawShape(cfg, container) {
          var attrs = getTextAttrs(cfg);
          return container.addShape('text', {
            attrs: Object.assign(attrs, {
              x: cfg.x,
              y: cfg.y
            })
          });
        }
      });
    }, _initDefineProp(_this, 'renderChart', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TagCloud, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initTagCloud();
      this.renderChart();
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
        this.renderChart(nextProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isUnmount = true;
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          height = _props.height;
      var _state = this.state,
          dv = _state.dv,
          w = _state.w,
          h = _state.h;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_index2.default.tagCloud, className),
          style: { width: '100%', height: height },
          ref: this.saveRootRef
        },
        dv && _react2.default.createElement(
          _bizcharts.Chart,
          {
            width: w,
            height: h,
            data: dv,
            padding: 0,
            scale: {
              x: { nice: false },
              y: { nice: false }
            }
          },
          _react2.default.createElement(_bizcharts.Coord, { reflect: 'y' }),
          _react2.default.createElement(_bizcharts.Geom, { type: 'point', position: 'x*y', color: 'text', shape: 'cloud' })
        )
      );
    }
  }]);

  return TagCloud;
}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'renderChart', [_dec2, _dec3], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (nextProps) {
      // const colors = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#9AE65C'];
      var _ref2 = nextProps || _this2.props,
          data = _ref2.data,
          height = _ref2.height;

      if (data.length < 1 || !_this2.root) {
        return;
      }

      var h = height * 4;
      var w = _this2.root.offsetWidth * 4;

      var onload = function onload() {
        var dv = new _dataSet2.default.View().source(data);
        var range = dv.range('value');

        var _range = _slicedToArray(range, 2),
            min = _range[0],
            max = _range[1];

        dv.transform({
          type: 'tag-cloud',
          fields: ['name', 'value'],
          imageMask: _this2.imageMask,
          font: 'Verdana',
          size: [w, h], // 宽高设置最好根据 imageMask 做调整
          padding: 5,
          timeInterval: 5000, // max execute time
          rotate: function rotate() {
            return 0;
          },
          fontSize: function fontSize(d) {
            // eslint-disable-next-line
            return Math.pow((d.value - min) / (max - min), 2) * (70 - 20) + 20;
          }
        });

        if (_this2.isUnmount) {
          return;
        }

        _this2.setState({
          dv: dv,
          w: w,
          h: h
        });
      };

      if (!_this2.imageMask) {
        _this2.imageMask = new Image();
        _this2.imageMask.crossOrigin = '';
        _this2.imageMask.src = imgUrl;

        _this2.imageMask.onload = onload;
      } else {
        onload();
      }
    };
  }
})), _class2)) || _class);
exports.default = TagCloud;
module.exports = exports['default'];