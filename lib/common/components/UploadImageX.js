import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
import 'antd/lib/upload/style';
import _Upload from 'antd/lib/upload';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';


function beforeUpload(file) {
  /*const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('只能上传图片文件!');
    console.log(file.type);
  }*/
  var isJPG = true;
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    _message.error('图片不能大于 2MB!');
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
          //console.log(info);
          onChange.call(_this, info.file.response.fileToken);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PicturesWall, [{
    key: 'componentWillReceiveProps',


    //初始化加载数据
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      if (this.props.value !== nextProps.value) {
        if (nextProps.value && nextProps.value.length !== 32) {
          console.log(window.path + 'dist/' + nextProps.value);
          this.setState({ fileList: [{
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: window.path + 'dist/' + nextProps.value
            }] });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          previewVisible = _state.previewVisible,
          previewImage = _state.previewImage,
          fileList = _state.fileList;

      var uploadButton = React.createElement(
        'div',
        null,
        React.createElement(_Icon, { type: 'plus' }),
        React.createElement(
          'div',
          { className: 'ant-upload-text' },
          '\u70B9\u51FB\u4E0A\u4F20'
        )
      );
      return React.createElement(
        'div',
        { className: 'clearfix' },
        React.createElement(
          _Upload,
          {
            action: window.path + 'upload',
            listType: 'picture-card',
            fileList: fileList,
            onPreview: this.handlePreview,
            onChange: this.handleChange,
            beforeUpload: beforeUpload
          },
          fileList.length >= 1 ? null : uploadButton
        ),
        React.createElement(
          _Modal,
          { visible: previewVisible, footer: null, onCancel: this.handleCancel },
          React.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
        )
      );
    }
  }]);

  return PicturesWall;
}(PureComponent);

export { PicturesWall as default };
module.exports = exports['default'];