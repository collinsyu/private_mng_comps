import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
import 'antd/lib/popover/style';
import _Popover from 'antd/lib/popover';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';

import { formItemLayout } from '../../common/constants';

var ImagePopview = function (_PureComponent) {
  _inherits(ImagePopview, _PureComponent);

  function ImagePopview(props) {
    _classCallCheck(this, ImagePopview);

    var _this = _possibleConstructorReturn(this, (ImagePopview.__proto__ || Object.getPrototypeOf(ImagePopview)).call(this, props));

    _this.handleCancel = function () {
      return _this.setState({ visible: false });
    };

    _this.handlePreview = function () {
      return _this.setState({ visible: false });
    };

    _this.renderContent11 = function () {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { 'class': 'ant-upload-list ant-upload-list-picture-card' },
          React.createElement(
            'div',
            { 'class': 'ant-upload-list-item ant-upload-list-item-done' },
            React.createElement(
              'div',
              { 'class': 'ant-upload-list-item-info' },
              React.createElement(
                'span',
                null,
                React.createElement('img', { height: '180', width: '200', src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', alt: 'xxx.png' })
              )
            ),
            React.createElement(
              'span',
              { 'class': 'ant-upload-list-item-actions' },
              React.createElement(
                'a',
                { href: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', target: '_blank', rel: 'noopener noreferrer', title: 'Preview file' },
                React.createElement('i', { 'class': 'anticon anticon-eye-o' })
              ),
              React.createElement('i', { title: 'Remove file', 'class': 'anticon anticon-delete' })
            )
          )
        )
      );
    };

    _this.renderContent = function () {
      return React.createElement('img', { onClick: _this.handlePreview(), height: '180', width: '200', src: window.path + 'dist/' + _this.props.value });
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ImagePopview, [{
    key: 'setVisible',
    value: function setVisible(visible) {
      var props = this.props;
      if (!('visible' in props)) {
        this.setState({ visible: visible });
      }

      var onVisibleChange = props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var previewImage = window.path + 'dist/' + this.props.value;

      return React.createElement(
        'div',
        null,
        React.createElement(
          _Popover,
          { content: this.renderContent(), trigger: 'hover' },
          React.createElement(_Button, { icon: 'picture' })
        ),
        React.createElement(
          _Modal,
          { visible: this.state.visible, footer: null, onCancel: this.handleCancel },
          React.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
        )
      );
    }
  }]);

  return ImagePopview;
}(PureComponent);

export default ImagePopview;