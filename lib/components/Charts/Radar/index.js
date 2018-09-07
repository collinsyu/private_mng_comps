import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Chart, Tooltip, Geom, Coord, Axis } from 'bizcharts';

import autoHeight from '../autoHeight';
var styles = {
  'radar': '_--css-module-js',
  'legend': '_--css-module-js',
  'legendItem': '_--css-module-js',
  'dot': '_--css-module-js'
};

/* eslint react/no-danger:0 */

var Radar = (_dec = autoHeight(), _dec(_class = function (_Component) {
  _inherits(Radar, _Component);

  function Radar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Radar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radar.__proto__ || Object.getPrototypeOf(Radar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      legendData: []
    }, _this.getG2Instance = function (chart) {
      _this.chart = chart;
    }, _this.getLengendData = function () {
      if (!_this.chart) return;
      var geom = _this.chart.getAllGeoms()[0]; // 获取所有的图形
      var items = geom.get('dataArray') || []; // 获取图形对应的

      var legendData = items.map(function (item) {
        // eslint-disable-next-line
        var origins = item.map(function (t) {
          return t._origin;
        });
        var result = {
          name: origins[0].name,
          color: item[0].color,
          checked: true,
          value: origins.reduce(function (p, n) {
            return p + n.value;
          }, 0)
        };

        return result;
      });

      _this.setState({
        legendData: legendData
      });
    }, _this.handleRef = function (n) {
      _this.node = n;
    }, _this.handleLegendClick = function (item, i) {
      var newItem = item;
      newItem.checked = !newItem.checked;

      var legendData = _this.state.legendData;

      legendData[i] = newItem;

      var filteredLegendData = legendData.filter(function (l) {
        return l.checked;
      }).map(function (l) {
        return l.name;
      });

      if (_this.chart) {
        _this.chart.filter('name', function (val) {
          return filteredLegendData.indexOf(val) > -1;
        });
        _this.chart.repaint();
      }

      _this.setState({
        legendData: legendData
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Radar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getLengendData();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data) {
        this.getLengendData();
      }
    }

    // for custom lengend view

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var defaultColors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];

      var _props = this.props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          _props$height = _props.height,
          height = _props$height === undefined ? 0 : _props$height,
          title = _props.title,
          _props$hasLegend = _props.hasLegend,
          hasLegend = _props$hasLegend === undefined ? false : _props$hasLegend,
          _props$forceFit = _props.forceFit,
          forceFit = _props$forceFit === undefined ? true : _props$forceFit,
          _props$tickCount = _props.tickCount,
          tickCount = _props$tickCount === undefined ? 4 : _props$tickCount,
          _props$padding = _props.padding,
          padding = _props$padding === undefined ? [35, 30, 16, 30] : _props$padding,
          _props$animate = _props.animate,
          animate = _props$animate === undefined ? true : _props$animate,
          _props$colors = _props.colors,
          colors = _props$colors === undefined ? defaultColors : _props$colors;
      var legendData = this.state.legendData;


      var scale = {
        value: {
          min: 0,
          tickCount: tickCount
        }
      };

      var chartHeight = height - (hasLegend ? 80 : 22);

      return React.createElement(
        'div',
        { className: styles.radar, style: { height: height } },
        React.createElement(
          'div',
          null,
          title && React.createElement(
            'h4',
            null,
            title
          ),
          React.createElement(
            Chart,
            {
              scale: scale,
              height: chartHeight,
              forceFit: forceFit,
              data: data,
              padding: padding,
              animate: animate,
              onGetG2Instance: this.getG2Instance
            },
            React.createElement(Tooltip, null),
            React.createElement(Coord, { type: 'polar' }),
            React.createElement(Axis, {
              name: 'label',
              line: null,
              tickLine: null,
              grid: {
                lineStyle: {
                  lineDash: null
                },
                hideFirstLine: false
              }
            }),
            React.createElement(Axis, {
              name: 'value',
              grid: {
                type: 'polygon',
                lineStyle: {
                  lineDash: null
                }
              }
            }),
            React.createElement(Geom, { type: 'line', position: 'label*value', color: ['name', colors], size: 1 }),
            React.createElement(Geom, {
              type: 'point',
              position: 'label*value',
              color: ['name', colors],
              shape: 'circle',
              size: 3
            })
          ),
          hasLegend && React.createElement(
            _Row,
            { className: styles.legend },
            legendData.map(function (item, i) {
              return React.createElement(
                _Col,
                {
                  span: 24 / legendData.length,
                  key: item.name,
                  onClick: function onClick() {
                    return _this2.handleLegendClick(item, i);
                  }
                },
                React.createElement(
                  'div',
                  { className: styles.legendItem },
                  React.createElement(
                    'p',
                    null,
                    React.createElement('span', {
                      className: styles.dot,
                      style: { backgroundColor: !item.checked ? '#aaa' : item.color }
                    }),
                    React.createElement(
                      'span',
                      null,
                      item.name
                    )
                  ),
                  React.createElement(
                    'h6',
                    null,
                    item.value
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Radar;
}(Component)) || _class);
export { Radar as default };