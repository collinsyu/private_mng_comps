Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/tooltip/style');

require('antd/lib/icon/style');

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _tideMarked = require('./tide-marked');

var _tideMarked2 = _interopRequireDefault(_tideMarked);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Viewer = function (_React$Component) {
  _inherits(Viewer, _React$Component);

  function Viewer(props) {
    _classCallCheck(this, Viewer);

    var _this = _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this, props));

    _this.state = {
      // markedDom: ""
    };
    return _this;
  }

  _createClass(Viewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$source = _props.source,
          source = _props$source === undefined ? "" : _props$source,
          metaInfo = _props.metaInfo;

      var domValue = (0, _tideMarked2.default)(source);

      return _React2.default.createElement(
        'div',
        { className: 'main-wrapper-doc-article' },
        _React2.default.createElement(
          'div',
          { className: 'doc-article' },
          _React2.default.createElement(
            'article',
            { className: 'doc-article-inner' },
            _React2.default.createElement('div', { className: 'typo typo-github', dangerouslySetInnerHTML: {
                __html: domValue
              }, id: 'J-doc' })
          ),
          metaInfo ? _React2.default.createElement(
            'div',
            { className: 'meta clearfix' },
            _React2.default.createElement(
              'div',
              { className: 'meta-left' },
              _React2.default.createElement(
                'div',
                { className: 'meta-item' },
                _React2.default.createElement(
                  'div',
                  { className: 'item' },
                  _React2.default.createElement(
                    _tooltip2.default,
                    { placement: 'top', title: '\u9605\u8BFB\u6570' },
                    _React2.default.createElement(_icon2.default, { type: 'eye-o' })
                  ),
                  _React2.default.createElement(
                    'span',
                    { className: 'item-text' },
                    metaInfo.hits
                  )
                )
              ),
              _React2.default.createElement(
                'div',
                { className: 'meta-item' },
                _React2.default.createElement(
                  'span',
                  { className: 'item' },
                  _React2.default.createElement(
                    _tooltip2.default,
                    { placement: 'top', title: '\u66F4\u65B0\u65F6\u95F4' },
                    _React2.default.createElement(_icon2.default, { type: 'clock-circle-o' })
                  ),
                  _React2.default.createElement(
                    _tooltip2.default,
                    { placement: 'top', title: (0, _moment2.default)(new Date(metaInfo ? metaInfo.updateAt : "")).format('YYYY-MM-DD HH:mm:ss') },
                    _React2.default.createElement(
                      'span',
                      { className: 'item-text' },
                      (0, _moment2.default)(new Date(metaInfo ? metaInfo.updateAt : "")).locale('en').fromNow()
                    )
                  )
                )
              ),
              _React2.default.createElement(
                'div',
                { className: 'meta-item meta-item-last' },
                _React2.default.createElement(
                  'span',
                  { className: 'item' },
                  _React2.default.createElement(
                    _tooltip2.default,
                    { placement: 'top', title: '\u4F5C\u8005' },
                    _React2.default.createElement(_icon2.default, { type: 'user' })
                  ),
                  _React2.default.createElement(
                    'span',
                    { className: 'item-text' },
                    _React2.default.createElement(
                      'span',
                      null,
                      metaInfo.name
                    )
                  )
                )
              )
            )
          ) : null
        )
      );
    }
  }]);

  return Viewer;
}(_React2.default.Component);

exports.default = Viewer;
module.exports = exports['default'];