Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/button/style');

require('antd/lib/input/style');

require('antd/lib/upload/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

require('antd/lib/tabs/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _request = require('../../utils/request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _tabs2.default.TabPane;

function _beforeUpload(file, self) {
  var _self$props$fileSize = self.props.fileSize,
      fileSize = _self$props$fileSize === undefined ? 2 : _self$props$fileSize;

  var isJPG = true;
  var isLt2M = file.size / 1024 / 1024 < fileSize;
  if (!isLt2M) {
    _message3.default.error('\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E ' + fileSize + 'MB!');
  }
  return isJPG && isLt2M;
}

var UploadImageOrOnline = function (_PureComponent) {
  _inherits(UploadImageOrOnline, _PureComponent);

  function UploadImageOrOnline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UploadImageOrOnline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UploadImageOrOnline.__proto__ || Object.getPrototypeOf(UploadImageOrOnline)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
      meansVisible: false
    }, _this.handleCancel = function () {
      return _this.setState({ previewVisible: false });
    }, _this.handlePreview = function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    }, _this.handleInputChange = function (imageUrl) {
      var _self = _this;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          _this$props$fetchfile = _this$props.fetchfiletokenurl,
          fetchfiletokenurl = _this$props$fetchfile === undefined ? "upload/image/network" : _this$props$fetchfile;
      // NOTE: 拿到url，去后台换取token

      (0, _request.create)(fetchfiletokenurl, { imageUrl: imageUrl }).then(function (data) {
        console.log(data);
        var fileTokens = data.fileToken;
        onChange.call(_this, fileTokens);
        var _t = new Date().getTime();
        _self.setState({
          fileList: [{
            lastModified: _t,
            lastModifiedDate: {},
            name: 'u=' + _t + '&fm=26&gp=0.jpg',
            originFileObj: {
              lastModified: _t,
              lastModifiedDate: {},
              name: 'u=' + _t + '&fm=26&gp=0.jpg',
              size: 10000,
              type: "image/jpeg",
              uid: 'rc-upload-' + _t + '-12',
              webkitRelativePath: ""
            },
            percent: 100,
            response: {},
            size: 10000,
            status: "done",
            thumbUrl: imageUrl,
            type: "image/jpeg",
            uid: 'rc-upload-' + _t + '-12'
          }]
        });
      });
    }, _this.handleChange = function (info) {
      var fileList = info.fileList;
      console.log(fileList);
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

  _createClass(UploadImageOrOnline, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log("did", this.props);
      this.setState({ fileList: [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: this.props.value
        }] });
    }
    //初始化加载数据

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        console.log(nextProps);

        if (nextProps.value && nextProps.value.length !== 32) {
          //在此处也要看是几张图片
          // console.log(window.path+'dist/'+nextProps.value);
          // 为啥要更新这个呢？
          console.log("为啥要更新这个呢？");
          this.setState({ fileList: [{
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: nextProps.value
            }] });
        }
      }
    }
    // 上传多张图片时，应该返回一个列表或者,分

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          previewVisible = _state.previewVisible,
          previewImage = _state.previewImage,
          fileList = _state.fileList,
          meansVisible = _state.meansVisible;

      var uploadButton = _react2.default.createElement(
        'div',
        { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 'calc(100% + 16px)',
            margin: "-8px",
            width: 'calc(100% + 16px)'

          },
          onClick: function onClick() {
            if (meansVisible) {
              return;
            }
            _this2.setState({ meansVisible: true });
          }
        },
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


      var realupload = _react2.default.createElement(
        _upload2.default,
        {
          action: window.path + 'upload',
          listType: 'picture-card',
          fileList: fileList,
          onPreview: this.handlePreview,
          onChange: this.handleChange,
          beforeUpload: function beforeUpload(file) {
            _beforeUpload(file, _this2);
          },
          openFileDialogOnClick: meansVisible
        },
        fileList.length >= fileLength ? null : uploadButton
      );
      return _react2.default.createElement(
        'div',
        { className: 'clearfix' },
        realupload,
        _react2.default.createElement(
          _modal2.default,
          { title: '', visible: meansVisible, footer: null, onCancel: function onCancel() {
              _this2.setState({ meansVisible: false });
            } },
          _react2.default.createElement(
            _tabs2.default,
            { defaultActiveKey: '1' },
            _react2.default.createElement(
              TabPane,
              { tab: '\u7F51\u7EDC\u6587\u4EF6', key: '1' },
              realupload
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u4E0A\u4F20\u6587\u4EF6', key: '2' },
              _react2.default.createElement(_input2.default, { placeholder: '\u8BF7\u586B\u5199\u56FE\u7247url', onBlur: function onBlur(e) {
                  _this2.handleInputChange(e.target.value);
                } })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { textAlign: "center", marginTop: "4px" } },
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  _this2.setState({ meansVisible: false });
                } },
              '\u786E\u8BA4'
            )
          )
        ),
        _react2.default.createElement(
          _modal2.default,
          { visible: previewVisible, footer: null, onCancel: this.handleCancel },
          _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
        )
      );
    }
  }]);

  return UploadImageOrOnline;
}(_react.PureComponent);

exports.default = UploadImageOrOnline;
module.exports = exports['default'];