Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/tooltip/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint react/no-did-mount-set-state: 0 */
/* eslint no-param-reassign: 0 */

var isSupportLineClamp = document.body.style.webkitLineClamp !== undefined;

var EllipsisText = function EllipsisText(_ref) {
  var text = _ref.text,
      length = _ref.length,
      tooltip = _ref.tooltip,
      pre = _ref.pre,
      other = _objectWithoutProperties(_ref, ['text', 'length', 'tooltip', 'pre']);

  if (typeof text !== 'string') {
    throw new Error('Ellipsis children must be string.');
  }
  if (text.length <= length || length < 0) {
    return _react2.default.createElement(
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
    if (pre) {
      return _react2.default.createElement(
        _tooltip2.default,
        { title: _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'pre',
              null,
              text
            )
          ) },
        _react2.default.createElement(
          'span',
          null,
          displayText,
          tail
        )
      );
    } else {
      return _react2.default.createElement(
        _tooltip2.default,
        { title: text },
        _react2.default.createElement(
          'span',
          null,
          displayText,
          tail
        )
      );
    }
  }

  return _react2.default.createElement(
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

      var cls = (0, _classnames2.default)("_yhq_ellipsis", className, (_classNames = {}, _defineProperty(_classNames, "_yhq_lines", lines && !isSupportLineClamp), _defineProperty(_classNames, "_yhq_lineClamp", lines && isSupportLineClamp), _classNames));

      if (!lines && !length) {
        return _react2.default.createElement(
          'span',
          _extends({ className: cls }, restProps),
          children
        );
      }

      // length
      if (!lines) {
        return _react2.default.createElement(EllipsisText, _extends({ className: cls, length: length, text: children || '', tooltip: tooltip }, restProps));
      }

      var id = 'antd-pro-ellipsis-' + ('' + new Date().getTime() + Math.floor(Math.random() * 100));

      // support document.body.style.webkitLineClamp
      // if (isSupportLineClamp) {
      //   const style = `#${id}{-webkit-line-clamp:${lines};}`;
      //   return (
      //     <div id={id} className={cls} {...restProps}>
      //       <style>{style}</style>
      //       {
      //         tooltip ? (<Tooltip title={text}>{children}</Tooltip>) : children
      //       }
      //     </div>);
      // }

      var childNode = _react2.default.createElement(
        'span',
        { ref: this.handleNode },
        targetCount > 0 && text.substring(0, targetCount),
        targetCount > 0 && targetCount < text.length && '...'
      );
      console.log("走到了最后");
      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          ref: this.handleRoot,
          className: cls
        }),
        _react2.default.createElement(
          'div',
          {
            ref: this.handleContent
          },
          tooltip ? _react2.default.createElement(
            _tooltip2.default,
            { title: text },
            childNode
          ) : childNode,
          _react2.default.createElement(
            'div',
            { className: "_yhq_shadow", ref: this.handleShadowChildren },
            children
          ),
          _react2.default.createElement(
            'div',
            { className: "_yhq_shadow", ref: this.handleShadow },
            _react2.default.createElement(
              'span',
              null,
              text
            )
          )
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n            pre {\n                white-space: normal;\n            }\n            ._yhq_ellipsis {\n              overflow: hidden;\n              display: inline-block;\n              word-break: break-all;\n              width: 100%;\n            }\n\n            ._yhq_lines {\n              position: relative;\n\n            }\n            .lines ._yhq_shadow {\n              display: block;\n              position: relative;\n              color: transparent;\n              opacity: 0;\n              z-index: -999;\n            }\n            ._yhq_lineClamp {\n              position: relative;\n              overflow: hidden;\n              text-overflow: ellipsis;\n              display: -webkit-box;\n              -webkit-box-orient: vertical;\n            }\n          '
        )
      );
    }
  }]);

  return Ellipsis;
}(_react.Component);

exports.default = Ellipsis;
module.exports = exports['default'];