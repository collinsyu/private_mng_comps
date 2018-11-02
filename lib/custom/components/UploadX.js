Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/upload/style');

require('antd/lib/button/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PicturesWall = function (_PureComponent) {
  _inherits(PicturesWall, _PureComponent);

  function PicturesWall() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PicturesWall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PicturesWall.__proto__ || Object.getPrototypeOf(PicturesWall)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: []
    }, _this.handleChange = function (info) {
      var fileList = info.fileList;

      _this.setState({ fileList: fileList });
      var onChange = _this.props.onChange;

      if (onChange) {
        // 在此处需要看状态，如果token存在就
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          //上传成功 目前这样只能是单个文件，当有多个文件时，需要在此处处理
          var fileTokens = fileList.map(function (file) {
            return file.response.fileToken;
          });
          //返回多个文件token
          if (fileList.length == 1) {
            fileTokens = fileTokens[0];
          }
          onChange.call(_this, fileTokens);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PicturesWall, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _upload2.default,
        _extends({}, this.props, {
          onChange: this.handleChange }),
        _react2.default.createElement(
          _button2.default,
          { type: 'ghost' },
          _react2.default.createElement(_icon2.default, { type: 'upload' }),
          '\u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6'
        )
      );
    }
  }]);

  return PicturesWall;
}(_react.PureComponent);

exports.default = PicturesWall;
module.exports = exports['default'];