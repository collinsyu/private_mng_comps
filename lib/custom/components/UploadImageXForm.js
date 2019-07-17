Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/upload/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function beforeUpload(file) {
  /*const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('只能上传图片文件!');
    console.log(file.type);
  }*/
  var isJPG = true;
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    _message3.default.error('图片不能大于 2MB!');
  }
  return isJPG && isLt2M;
}

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
    }, _this.handleCancel = function () {
      return _this.setState({ previewVisible: false });
    }, _this.handlePreview = function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    }, _this.handleChange = function (info) {
      var fileList = info.fileList;
      _this.setState({ fileList: fileList });
      var onChange = _this.props.onChange;

      if (onChange) {
        // 在此处需要看状态，如果token存在就
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          //上传成功 目前这样只能是单个文件，当有多个文件时，需要在此处处理
          // let fileTokens= fileList.map((file)=> file.response.fileToken);
          //返回多个文件token
          // if(fileList.length == 1) {
          //   fileTokens=fileTokens[0]
          // }
          fileList.map(function (file) {
            if (file.response) {
              file.fileToken = file.response.fileToken;
            }
          });
          onChange.call(_this, fileList);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PicturesWall, [{
    key: 'componentWillReceiveProps',


    //初始化加载数据
    value: function componentWillReceiveProps(nextProps) {
      console.warn(nextProps);
      if (this.props.value !== nextProps.value) {
        this.setState({ fileList: nextProps.value });
        // if(Array.isArray(nextProps.value)){
        //
        //   this.setState({
        //     fileList: nextProps.value.map((item,ii)=>{
        //       return {
        //         uid: ii,
        //         name: 'xxx.png',
        //         status: 'done',
        //         url: window.path+item,
        //       }
        //     })
        //   })
        // }else{
        //   this.setState({fileList: [{
        //     uid: -1,
        //     name: 'xxx.png',
        //     status: 'done',
        //     url: window.path+nextProps.value,
        //   }]})
        // }
      }
    }
    // 上传多张图片时，应该返回一个列表或者,分

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          previewVisible = _state.previewVisible,
          previewImage = _state.previewImage,
          fileList = _state.fileList;

      console.log("xx");
      var uploadButton = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_icon2.default, { type: 'plus' }),
        _react2.default.createElement(
          'div',
          { className: 'ant-upload-text' },
          '\u70B9\u51FB\u4E0A\u4F20'
        )
      );
      // 默认为一张图片
      var _props$fileLength = this.props.fileLength,
          fileLength = _props$fileLength === undefined ? 1 : _props$fileLength;

      return _react2.default.createElement(
        'div',
        { className: 'clearfix' },
        _react2.default.createElement(
          _upload2.default,
          {
            action: window.path + 'upload',
            listType: 'picture-card'
            // disabled={true}
            , fileList: fileList,
            onPreview: this.handlePreview,
            onChange: this.handleChange,
            beforeUpload: beforeUpload
          },
          fileList.length >= fileLength ? null : uploadButton
        ),
        _react2.default.createElement(
          _modal2.default,
          { visible: previewVisible, footer: null, onCancel: this.handleCancel },
          _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
        )
      );
    }
  }]);

  return PicturesWall;
}(_react.PureComponent);

exports.default = PicturesWall;
module.exports = exports['default'];