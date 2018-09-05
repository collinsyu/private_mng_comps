var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

/* eslint react/no-did-mount-set-state: 0 */
/* eslint no-param-reassign: 0 */

var isSupportLineClamp = document.body.style.webkitLineClamp !== undefined;

var EllipsisText = function EllipsisText(_ref) {
  var text = _ref.text,
      length = _ref.length,
      tooltip = _ref.tooltip,
      other = _objectWithoutProperties(_ref, ['text', 'length', 'tooltip']);

  if (typeof text !== 'string') {
    throw new Error('Ellipsis children must be string.');
  }
  if (text.length <= length || length < 0) {
    return React.createElement(
      'span',
      other,
      text
    );
  }
  var tail = '...';
  var displayText = void 0;
  if (length - tail.length <= 0) {
    displayText = '';
  } else {
    displayText = text.slice(0, length - tail.length);
  }

  if (tooltip) {
    return React.createElement(
      Tooltip,
      { title: text },
      React.createElement(
        'span',
        null,
        displayText,
        tail
      )
    );
  }

  return React.createElement(
    'span',
    other,
    displayText,
    tail
  );
};

var Ellipsis = function (_Component) {
  _inherits(Ellipsis, _Component);

  function Ellipsis() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Ellipsis);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Ellipsis.__proto__ || Object.getPrototypeOf(Ellipsis)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      text: '',
      targetCount: 0
    }, _this.computeLine = function () {
      var lines = _this.props.lines;

      if (lines && !isSupportLineClamp) {
        var text = _this.shadowChildren.innerText;
        var lineHeight = parseInt(getComputedStyle(_this.root).lineHeight, 10);
        var targetHeight = lines * lineHeight;
        _this.content.style.height = targetHeight + 'px';
        var totalHeight = _this.shadowChildren.offsetHeight;
        var shadowNode = _this.shadow.firstChild;

        if (totalHeight <= targetHeight) {
          _this.setState({
            text: text,
            targetCount: text.length
          });
          return;
        }

        // bisection
        var len = text.length;
        var mid = Math.floor(len / 2);

        var count = _this.bisection(targetHeight, mid, 0, len, text, shadowNode);

        _this.setState({
          text: text,
          targetCount: count
        });
      }
    }, _this.bisection = function (th, m, b, e, text, shadowNode) {
      var suffix = '...';
      var mid = m;
      var end = e;
      var begin = b;
      shadowNode.innerHTML = text.substring(0, mid) + suffix;
      var sh = shadowNode.offsetHeight;

      if (sh <= th) {
        shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
        sh = shadowNode.offsetHeight;
        if (sh > th) {
          return mid;
        } else {
          begin = mid;
          mid = Math.floor((end - begin) / 2) + begin;
          return _this.bisection(th, mid, begin, end, text, shadowNode);
        }
      } else {
        if (mid - 1 < 0) {
          return mid;
        }
        shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
        sh = shadowNode.offsetHeight;
        if (sh <= th) {
          return mid - 1;
        } else {
          end = mid;
          mid = Math.floor((end - begin) / 2) + begin;
          return _this.bisection(th, mid, begin, end, text, shadowNode);
        }
      }
    }, _this.handleRoot = function (n) {
      _this.root = n;
    }, _this.handleContent = function (n) {
      _this.content = n;
    }, _this.handleNode = function (n) {
      _this.node = n;
    }, _this.handleShadow = function (n) {
      _this.shadow = n;
    }, _this.handleShadowChildren = function (n) {
      _this.shadowChildren = n;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ellipsis, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.node) {
        this.computeLine();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.lines !== nextProps.lines) {
        this.computeLine();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _state = this.state,
          text = _state.text,
          targetCount = _state.targetCount;

      var _props = this.props,
          children = _props.children,
          lines = _props.lines,
          length = _props.length,
          className = _props.className,
          tooltip = _props.tooltip,
          restProps = _objectWithoutProperties(_props, ['children', 'lines', 'length', 'className', 'tooltip']);

      var cls = classNames(styles.ellipsis, className, (_classNames = {}, _defineProperty(_classNames, styles.lines, lines && !isSupportLineClamp), _defineProperty(_classNames, styles.lineClamp, lines && isSupportLineClamp), _classNames));

      if (!lines && !length) {
        return React.createElement(
          'span',
          _extends({ className: cls }, restProps),
          children
        );
      }

      // length
      if (!lines) {
        return React.createElement(EllipsisText, _extends({ className: cls, length: length, text: children || '', tooltip: tooltip }, restProps));
      }

      var id = 'antd-pro-ellipsis-' + ('' + new Date().getTime() + Math.floor(Math.random() * 100));

      // support document.body.style.webkitLineClamp
      if (isSupportLineClamp) {
        var style = '#' + id + '{-webkit-line-clamp:' + lines + ';}';
        return React.createElement(
          'div',
          _extends({ id: id, className: cls }, restProps),
          React.createElement(
            'style',
            null,
            style
          ),
          tooltip ? React.createElement(
            Tooltip,
            { title: text },
            children
          ) : children
        );
      }

      var childNode = React.createElement(
        'span',
        { ref: this.handleNode },
        targetCount > 0 && text.substring(0, targetCount),
        targetCount > 0 && targetCount < text.length && '...'
      );

      return React.createElement(
        'div',
        _extends({}, restProps, {
          ref: this.handleRoot,
          className: cls
        }),
        React.createElement(
          'div',
          {
            ref: this.handleContent
          },
          tooltip ? React.createElement(
            Tooltip,
            { title: text },
            childNode
          ) : childNode,
          React.createElement(
            'div',
            { className: styles.shadow, ref: this.handleShadowChildren },
            children
          ),
          React.createElement(
            'div',
            { className: styles.shadow, ref: this.handleShadow },
            React.createElement(
              'span',
              null,
              text
            )
          )
        )
      );
    }
  }]);

  return Ellipsis;
}(Component);

export { Ellipsis as default };