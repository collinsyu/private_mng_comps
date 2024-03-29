Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _divider = require('antd/lib/divider');

var _divider2 = _interopRequireDefault(_divider);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

require('antd/lib/divider/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bizcharts = require('bizcharts');

var _dataSet = require('@antv/data-set');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFittext = require('react-fittext');

var _reactFittext2 = _interopRequireDefault(_reactFittext);

var _debounce = require('lodash-decorators/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _bind = require('lodash-decorators/bind');

var _bind2 = _interopRequireDefault(_bind);

var _autoHeight = require('../autoHeight');

var _autoHeight2 = _interopRequireDefault(_autoHeight);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* eslint react/no-danger:0 */
var Pie = (_dec = (0, _autoHeight2.default)(), _dec2 = (0, _bind2.default)(), _dec3 = (0, _debounce2.default)(300), _dec(_class = (_class2 = function (_Component) {
  _inherits(Pie, _Component);

  function Pie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pie.__proto__ || Object.getPrototypeOf(Pie)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      legendData: [],
      legendBlock: false
    }, _this.getG2Instance = function (chart) {
      _this.chart = chart;
    }, _this.getLengendData = function () {
      if (!_this.chart) return;
      var geom = _this.chart.getAllGeoms()[0]; // 获取所有的图形
      var items = geom.get('dataArray') || []; // 获取图形对应的

      var legendData = items.map(function (item) {
        /* eslint no-underscore-dangle:0 */
        var origin = item[0]._origin;
        origin.color = item[0].color;
        origin.checked = true;
        return origin;
      });

      _this.setState({
        legendData: legendData
      });
    }, _this.handleRoot = function (n) {
      _this.root = n;
    }, _this.handleLegendClick = function (item, i) {
      var newItem = item;
      newItem.checked = !newItem.checked;

      var legendData = _this.state.legendData;

      legendData[i] = newItem;

      var filteredLegendData = legendData.filter(function (l) {
        return l.checked;
      }).map(function (l) {
        return l.x;
      });

      if (_this.chart) {
        _this.chart.filter('x', function (val) {
          return filteredLegendData.indexOf(val) > -1;
        });
      }

      _this.setState({
        legendData: legendData
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pie, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getLengendData();
      this.resize();
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data) {
        this.getLengendData();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
      this.resize.cancel();
    }

    // for custom lengend view

  }, {
    key: 'resize',


    // for window resize auto responsive legend
    value: function resize() {
      var hasLegend = this.props.hasLegend;

      if (!hasLegend || !this.root) {
        window.removeEventListener('resize', this.resize);
        return;
      }
      if (this.root.parentNode.clientWidth <= 380) {
        if (!this.state.legendBlock) {
          this.setState({
            legendBlock: true
          });
        }
      } else if (this.state.legendBlock) {
        this.setState({
          legendBlock: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          valueFormat = _props.valueFormat,
          subTitle = _props.subTitle,
          total = _props.total,
          _props$hasLegend = _props.hasLegend,
          hasLegend = _props$hasLegend === undefined ? false : _props$hasLegend,
          className = _props.className,
          style = _props.style,
          height = _props.height,
          _props$forceFit = _props.forceFit,
          forceFit = _props$forceFit === undefined ? true : _props$forceFit,
          _props$percent = _props.percent,
          percent = _props$percent === undefined ? 0 : _props$percent,
          color = _props.color,
          _props$inner = _props.inner,
          inner = _props$inner === undefined ? 0.75 : _props$inner,
          _props$animate = _props.animate,
          animate = _props$animate === undefined ? true : _props$animate,
          colors = _props.colors,
          _props$lineWidth = _props.lineWidth,
          lineWidth = _props$lineWidth === undefined ? 1 : _props$lineWidth;
      var _state = this.state,
          legendData = _state.legendData,
          legendBlock = _state.legendBlock;

      var pieClassName = (0, _classnames2.default)(_index2.default.pie, className, (_classNames = {}, _defineProperty(_classNames, _index2.default.hasLegend, !!hasLegend), _defineProperty(_classNames, _index2.default.legendBlock, legendBlock), _classNames));

      var defaultColors = colors;
      var data = this.props.data || [];
      var selected = this.props.selected || true;
      var tooltip = this.props.tooltip || true;
      var formatColor = void 0;

      var scale = {
        x: {
          type: 'cat',
          range: [0, 1]
        },
        y: {
          min: 0
        }
      };

      if (percent) {
        selected = false;
        tooltip = false;
        formatColor = function formatColor(value) {
          if (value === '占比') {
            return color || 'rgba(24, 144, 255, 0.85)';
          } else {
            return '#F0F2F5';
          }
        };

        data = [{
          x: '占比',
          y: parseFloat(percent)
        }, {
          x: '反比',
          y: 100 - parseFloat(percent)
        }];
      }

      var tooltipFormat = ['x*percent', function (x, p) {
        return {
          name: x,
          value: (p * 100).toFixed(2) + '%'
        };
      }];

      var padding = [12, 0, 12, 0];

      var dv = new _dataSet.DataView();
      dv.source(data).transform({
        type: 'percent',
        field: 'y',
        dimension: 'x',
        as: 'percent'
      });

      return _react2.default.createElement(
        'div',
        { ref: this.handleRoot, className: pieClassName, style: style },
        _react2.default.createElement(
          _reactFittext2.default,
          { maxFontSize: 25 },
          _react2.default.createElement(
            'div',
            { className: _index2.default.chart },
            _react2.default.createElement(
              _bizcharts.Chart,
              {
                scale: scale,
                height: height,
                forceFit: forceFit,
                data: dv,
                padding: padding,
                animate: animate,
                onGetG2Instance: this.getG2Instance
              },
              !!tooltip && _react2.default.createElement(_bizcharts.Tooltip, { showTitle: false }),
              _react2.default.createElement(_bizcharts.Coord, { type: 'theta', innerRadius: inner }),
              _react2.default.createElement(_bizcharts.Geom, {
                style: { lineWidth: lineWidth, stroke: '#fff' },
                tooltip: tooltip && tooltipFormat,
                type: 'intervalStack',
                position: 'percent',
                color: ['x', percent ? formatColor : defaultColors],
                selected: selected
              })
            ),
            (subTitle || total) && _react2.default.createElement(
              'div',
              { className: _index2.default.total },
              subTitle && _react2.default.createElement(
                'h4',
                { className: 'pie-sub-title' },
                subTitle
              ),
              total && _react2.default.createElement('div', { className: 'pie-stat', dangerouslySetInnerHTML: { __html: total } })
            )
          )
        ),
        hasLegend && _react2.default.createElement(
          'ul',
          { className: _index2.default.legend },
          legendData.map(function (item, i) {
            return _react2.default.createElement(
              'li',
              { key: item.x, onClick: function onClick() {
                  return _this2.handleLegendClick(item, i);
                } },
              _react2.default.createElement('span', {
                className: _index2.default.dot,
                style: { backgroundColor: !item.checked ? '#aaa' : item.color }
              }),
              _react2.default.createElement(
                'span',
                { className: _index2.default.legendTitle },
                item.x
              ),
              _react2.default.createElement(_divider2.default, { type: 'vertical' }),
              _react2.default.createElement(
                'span',
                { className: _index2.default.percent },
                (item.percent * 100).toFixed(2) + '%'
              ),
              _react2.default.createElement('span', {
                className: _index2.default.value,
                dangerouslySetInnerHTML: {
                  __html: valueFormat ? valueFormat(item.y) : item.y
                }
              })
            );
          })
        )
      );
    }
  }]);

  return Pie;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, 'resize', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'resize'), _class2.prototype)), _class2)) || _class);
exports.default = Pie;
module.exports = exports['default'];