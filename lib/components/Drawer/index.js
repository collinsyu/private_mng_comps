Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _dec, _desc, _value, _class, _descriptor;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcQueueAnim = require('rc-queue-anim');

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

var _debounce = require('lodash-decorators/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // The portal element is inserted in the DOM tree after
      // the Modal's children are mounted, meaning that children
      // will be mounted on a detached DOM node. If a child
      // component requires to be attached to the DOM tree
      // immediately when mounted, for example to measure a
      // DOM node, or uses 'autoFocus' in a descendant, add
      // state to Modal and only render the children when Modal
      // is inserted in the DOM tree.
      document.body.appendChild(this.el);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
    }
  }, {
    key: 'render',
    value: function render() {
      return _reactDom2.default.createPortal(_react2.default.createElement(DrawerInner, this.props), this.el);
    }
  }]);

  return Drawer;
}(_react2.default.Component);

var DrawerInner = (_dec = (0, _debounce2.default)(400), (_class = function (_PureComponent) {
  _inherits(DrawerInner, _PureComponent);

  function DrawerInner(props) {
    _classCallCheck(this, DrawerInner);

    var _this2 = _possibleConstructorReturn(this, (DrawerInner.__proto__ || Object.getPrototypeOf(DrawerInner)).call(this, props));

    _this2.componentDidMount = function () {};

    _this2.componentWillUnmount = function () {
      document.removeEventListener("mousemove", _this2.onMouseMove);
    };

    _initDefineProp(_this2, 'onMouseMove', _descriptor, _this2);

    _this2.onMouseDown = function () {
      document.addEventListener("mousemove", _this2.onMouseMove);
      _this2.ishold = true;
    };

    _this2.onMouseUp = function () {
      document.removeEventListener("mousemove", _this2.onMouseMove);
      _this2.ishold = false;
      console.warn("up");
    };

    _this2.resize = function (width) {
      _this2.setState({ width: width });
    };

    _this2.state = {
      visible: _this2.props.visible,
      title: _this2.props.title || '',
      // footString: this.props.footString || '',
      buttonLabel: _this2.props.buttonLabel || '',
      width: 0
    };
    _this2.ishold = false;
    return _this2;
  }

  _createClass(DrawerInner, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var width = this.state.width || this.props.width;
      return _react2.default.createElement(
        'div',
        { className: "_yhq_drawer" },
        _react2.default.createElement(
          _rcQueueAnim2.default,
          { key: 'drawer', type: ['right', 'right'], ease: ['easeOutQuart', 'easeInOutQuart'] },
          this.props.visible ? _react2.default.createElement(
            'div',
            { key: 'absolute', className: "_yhq_absolute" },
            _react2.default.createElement('div', { className: "_yhq_masklayer", onClick: this.props.onCancel }),
            _react2.default.createElement(
              'div',
              { className: "_yhq_container", style: { width: width }, ref: function ref(container) {
                  return _this3.container = container;
                } },
              _react2.default.createElement('div', { className: '_yhq_leftborder',
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp }),
              _react2.default.createElement(
                'div',
                { style: { flex: "1 0", width: "100%", overflow: "hidden" } },
                _react2.default.createElement(
                  'div',
                  { className: "_yhq_head" },
                  _react2.default.createElement(
                    'span',
                    { className: "_yhq_title" },
                    this.state.title
                  ),
                  _react2.default.createElement(_icon2.default, { onClick: this.props.onCancel, className: "_yhq_close", type: 'close' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: "_yhq_body", style: { maxHeight: document.body.clientHeight - (this.props.footString ? 80 : 40) } },
                  this.props.children
                ),
                this.props.footString ? _react2.default.createElement(
                  'div',
                  { className: "_yhq_foot" },
                  this.props.footString
                ) : null
              )
            )
          ) : null
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n          ._yhq_drawer{\n            display:inline-block;\n          }\n          ._yhq_drawer ._yhq_absolute {\n            position: fixed;\n            top: 0;\n            right: 0;\n            height: 100%;\n            width: 100%;\n            z-index: 99;\n          }\n          ._yhq_drawer ._yhq_masklayer {\n            z-index: 9999;\n            position: fixed;\n            top: 0;\n            right: 0;\n            height: 100%;\n            width: 100%;\n          }\n          ._yhq_drawer ._yhq_container {\n            display:flex;\n            -moz-box-shadow: -1px 0 20px #757474;\n            -webkit-box-shadow: -1px 0 20px #757474;\n            box-shadow: -1px 0 20px #757474;\n            border-left: 1px solid #dedede;\n            z-index: 100000;\n            position: fixed;\n            top: 0;\n            right: 0;\n            height: 100%;\n            width: 50%;\n            background: #fff;\n          }\n          ._yhq_leftborder{\n            width: 3px;\n            flex-shrink: 0;\n            margin-left: -1.5px;\n          }\n          ._yhq_leftborder:hover{\n            cursor:ew-resize;\n          }\n          ._yhq_drawer ._yhq_body {\n            padding: 20px;\n            overflow-y: auto;\n          }\n          ._yhq_drawer ._yhq_foot {\n            position: absolute;\n            bottom: 0;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            width: 100%;\n            border-top: 1px solid #dedede;\n          }\n          ._yhq_drawer ._yhq_head  {\n            height: 40px;\n            line-height: 40px;\n            border-bottom: 1px solid #dedede;\n          }\n          ._yhq_drawer ._yhq_head ._yhq_title {\n            padding: 0 10px;\n            font-size: large;\n            line-height: 40px;\n          }\n          ._yhq_drawer ._yhq_head ._yhq_close {\n            float: right;\n            line-height: 40px;\n            padding: 0 10px;\n            font-size: 22px;\n            cursor: pointer;\n            transition: All 0.4s ease-in-out;\n            -webkit-transition: All 0.4s ease-in-out;\n            -moz-transition: All 0.4s ease-in-out;\n            -o-transition: All 0.4s ease-in-out;\n          }\n          ._yhq_drawer ._yhq_head ._yhq_close:hover {\n            transform: rotate(180deg);\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n          }\n\n        '
        )
      );
    }
  }]);

  return DrawerInner;
}(_react.PureComponent), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'onMouseMove', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (e) {
      console.warn("监听鼠标移动");

      if (_this4.ishold) {

        var width = document.body.clientWidth - e.clientX;
        if (width >= document.body.clientWidth) {
          width = document.body.clientWidth - 100;
        }
        _this4.container.style.width = width + "px";
      }
    };
  }
})), _class));
exports.default = Drawer;
module.exports = exports['default'];