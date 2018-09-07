import 'antd/lib/upload/style';
import _Upload from 'antd/lib/upload';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
var style = {
  'UploadFile': '_--css-module-js',
  'clearfix': '_--css-module-js',
  'avatar-uploader': '_--css-module-js',
  'ant-upload': '_--css-module-js',
  'ant-upload-select-picture-card': '_--css-module-js',
  'ant-upload-text': '_--css-module-js'
};

var __window = window || {};

var PicturesWall = function (_React$Component) {
  _inherits(PicturesWall, _React$Component);

  function PicturesWall() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PicturesWall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PicturesWall.__proto__ || Object.getPrototypeOf(PicturesWall)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fileList: []
    }, _this.handleChange = function (info) {
      var fileList = info.fileList;
      _this.setState({ fileList: fileList });
      var onChange = _this.props.onChange;

      if (onChange) {

        // 在此处需要看状态，如果token存在就
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          //上传成功
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
          console.log(_window.path + 'dist/' + nextProps.value);
          this.setState({ fileList: [{
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: _window.path + 'dist/' + nextProps.value
            }] });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = {
        action: _window.path + 'upload',
        onChange: this.handleChange,
        defaultFileList: [{
          uid: 1,
          name: 'xxx.png',
          status: 'done',
          reponse: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png'
        }, {
          uid: 2,
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png'
        }, {
          uid: 3,
          name: 'zzz.png',
          status: 'error',
          reponse: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png'
        }]
      };
      return React.createElement(
        'div',
        { className: 'clearfix' },
        React.createElement(
          _Upload,
          props,
          React.createElement(
            _Button,
            null,
            React.createElement(_Icon, { type: 'upload' }),
            ' \u4E0A\u4F20'
          )
        )
      );
    }
  }]);

  return PicturesWall;
}(React.Component);

export { PicturesWall as default };