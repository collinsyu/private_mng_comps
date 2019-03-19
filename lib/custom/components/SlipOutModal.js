Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcQueueAnim = require('rc-queue-anim');

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlipOutModal = function (_Component) {
  _inherits(SlipOutModal, _Component);

  function SlipOutModal(props) {
    _classCallCheck(this, SlipOutModal);

    var _this = _possibleConstructorReturn(this, (SlipOutModal.__proto__ || Object.getPrototypeOf(SlipOutModal)).call(this, props));

    _this.state = {
      visible: _this.props.visible,
      title: _this.props.title || '',
      footString: _this.props.footString || '',
      buttonLabel: _this.props.buttonLabel || ''
    };

    return _this;
  }

  _createClass(SlipOutModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // var _self= this;
      document.onmousedown = function (e) {
        //console.log(e);
        if (e.target.className.indexOf('absolute') !== -1) {
          //console.log("不等于-1");
        }
      };
    }
  }, {
    key: 'fuckClick',
    value: function fuckClick(e) {
      //console.log(e);
      e.stopPropagation();
      this.props.onCancel();
      //this.setState({visible: false})
      // var _self= this;
      // document.onmousedown = function(e){
      // 	console.log(e);
      // 	if(e.target.className.indexOf('absolute') !==-1){
      // 		console.log("不等于-1");
      // 		 _self.setState({visible:false,})
      // 	}
      // };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rcQueueAnim2.default,
        { key: 'demo', type: ['right', 'right'], ease: ['easeOutQuart', 'easeInOutQuart'] },
        this.props.visible ? _react2.default.createElement(
          'div',
          { key: 'adb', className: "_yhq_absolute" },
          _react2.default.createElement('div', { className: "masklayer", onClick: this.props.onCancel }),
          _react2.default.createElement(
            'div',
            { className: "_yhq_container" },
            _react2.default.createElement(
              'div',
              { className: "_yhq_head" },
              _react2.default.createElement(
                'span',
                { className: "_yqh_title" },
                this.state.title
              ),
              _react2.default.createElement(_icon2.default, { onClick: this.props.onCancel, className: "close", type: 'cross' })
            ),
            _react2.default.createElement(
              'div',
              { className: "_yhq_body", style: { maxHeight: document.body.clientHeight - 80 } },
              this.props.children
            ),
            _react2.default.createElement(
              'div',
              { className: "_yhq_foot" },
              this.state.footString
            )
          )
        ) : null,
        _react2.default.createElement(
          'style',
          null,
          '\n\n            ._yhq_absolute {\n            \tposition: fixed;\n            \ttop: 0;\n            \tright: 0;\n            \theight: 100%;\n            \twidth: 100%;\n            \tz-index: 99;\n            }\n\n            ._yhq_absolute .masklayer {\n            \tz-index: 9999;\n            \tposition: fixed;\n            \ttop: 0;\n            \tright: 0;\n            \theight: 100%;\n            \twidth: 100%;\n            }\n\n            ._yhq_absolute ._yhq_container {\n            \t-moz-box-shadow: -1px 0 20px #757474;\n            \t-webkit-box-shadow: -1px 0 20px #757474;\n            \tbox-shadow: -1px 0 20px #757474;\n            \tborder-left: 1px solid #dedede;\n            \tz-index: 100000;\n            \tposition: fixed;\n            \ttop: 0;\n            \tright: 0;\n            \theight: 100%;\n            \twidth: 50%;\n            \tbackground: #fff;\n            }\n\n            ._yhq_absolute ._yhq_head {\n              height: 40px;\n            \tline-height: 40px;\n            \tborder-bottom: 1px solid #dedede;\n\n            }\n            ._yhq_absolute ._yhq_head ._yqh_title {\n              padding: 0 10px;\n              font-size: large;\n              line-height: 40px;\n              float: left;\n            }\n            ._yhq_absolute ._yhq_head .close {\n              float: right;\n              line-height: 40px;\n              padding: 0 10px;\n              font-size: 22px;\n              cursor: pointer;\n              transition: All 0.4s ease-in-out;\n              -webkit-transition: All 0.4s ease-in-out;\n              -moz-transition: All 0.4s ease-in-out;\n              -o-transition: All 0.4s ease-in-out;\n            }\n            ._yhq_absolute ._yhq_head .close:hover {\n              transform: rotate(180deg);\n              -webkit-transform: rotate(180deg);\n              -moz-transform: rotate(180deg);\n              -o-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n            }\n\n            ._yhq_absolute ._yhq_body {\n            \tpadding: 20px;\n            \toverflow-y: auto;\n            }\n\n            ._yhq_absolute ._yhq_foot {\n            \tposition: absolute;\n            \tbottom: 0;\n            \theight: 40px;\n            \tline-height: 40px;\n            \ttext-align: center;\n            \twidth: 100%;\n            \tborder-top: 1px solid #dedede;\n            }\n\n          '
        )
      );
    }
  }]);

  return SlipOutModal;
}(_react.Component);

;

exports.default = SlipOutModal;
module.exports = exports['default'];