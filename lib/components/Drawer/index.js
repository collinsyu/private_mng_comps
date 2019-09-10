Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drawer = require('antd/lib/drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _descriptor;

require('antd/lib/drawer/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcQueueAnim = require('rc-queue-anim');

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

var _debounce = require('lodash-decorators/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// import style from "./index.less"


var Drawer = (_dec = (0, _debounce2.default)(400), (_class = function (_PureComponent) {
  _inherits(Drawer, _PureComponent);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.componentDidMount = function () {};

    _this.componentWillUnmount = function () {
      document.removeEventListener("mousemove", _this.onMouseMove);
      document.removeEventListener("mouseup", _this.onMouseUp);
    };

    _initDefineProp(_this, 'onMouseMove', _descriptor, _this);

    _this.onMouseDown = function () {
      document.addEventListener("mousemove", _this.onMouseMove);
      _this.ishold = true;
      document.addEventListener("mouseup", _this.onMouseUp);
    };

    _this.onMouseUp = function () {
      document.removeEventListener("mousemove", _this.onMouseMove);
      document.removeEventListener("mouseup", _this.onMouseUp);

      _this.ishold = false;
      console.warn("up");
    };

    _this.resize = function (width) {
      _this.setState({ width: width });
    };

    _this.state = {
      visible: _this.props.visible,
      // footString: this.props.footString || '',
      buttonLabel: _this.props.buttonLabel || '',
      width: 0
    };
    _this.ishold = false;
    return _this;
  }

  _createClass(Drawer, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      var width = this.state.width || this.props.width || "50%";
      return _react2.default.createElement(
        _drawer2.default,
        (_React$createElement = {
          width: width,
          closable: true,
          title: this.props.title,
          placement: 'right'
        }, _defineProperty(_React$createElement, 'closable', false), _defineProperty(_React$createElement, 'onClose', this.props.onCancel), _defineProperty(_React$createElement, 'visible', this.props.visible), _defineProperty(_React$createElement, 'bodyStyle', { padding: 0 }), _React$createElement),
        _react2.default.createElement(
          'div',
          { style: { display: "flex" } },
          _react2.default.createElement('div', { className: "_yhq_leftborder", onMouseDown: this.onMouseDown }),
          _react2.default.createElement(
            'div',
            { style: { flex: "1 0", width: "100%", padding: 24 } },
            this.props.children
          )
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n        ._yhq_leftborder{\n          width: 3px;\n          flex-shrink: 0;\n          margin-left: -1.5px;\n          position: absolute;\n          left: 0;\n          height: 100%;\n        }\n        ._yhq_leftborder:hover{\n          cursor:ew-resize;\n        }\n        '
        )
      );
    }
  }]);

  return Drawer;
}(_react.PureComponent), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'onMouseMove', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (e) {
      console.warn("监听鼠标移动");

      if (_this2.ishold) {

        var width = document.body.clientWidth - e.clientX;
        if (width >= document.body.clientWidth) {
          width = document.body.clientWidth - 100;
        }
        _this2.resize(width + "px");
        // this.container.style.width = width + "px";
      }
    };
  }
})), _class));
exports.default = Drawer;
module.exports = exports['default'];