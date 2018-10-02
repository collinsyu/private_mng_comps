Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

require('antd/lib/popconfirm/style');

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _request = require('../utils/request');

var _AuthA = require('./AuthA');

var _AuthA2 = _interopRequireDefault(_AuthA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 快捷操作工具，删除，冻结等场景，主要是单向与服务器交互
 * 无状态组件下无this，请注意使用
 *
 */
var QuickTool = function QuickTool(props) {
  var auth = props.auth,
      text = props.text,
      field = props.field,
      value = props.value,
      path = props.path,
      params = props.params;


  function handleClick() {

    (0, _request.patch)(path, params).then(function (data) {
      if (data && data.data && data.data.success) {
        _message3.default.info('操作成功');
        if (props.callbak) {
          props.callbak();
        }
      } else {
        console.log(data);
      }
    });
  };

  // 如果没有权限，需要不同的提示方式
  return _react2.default.createElement(
    'div',
    null,
    field === value ? _react2.default.createElement(
      _popconfirm2.default,
      { title: '\u786E\u5B9A\u8981' + text + '\u5417\uFF1F', onConfirm: function onConfirm() {
          return handleClick();
        } },
      _react2.default.createElement(
        _AuthA2.default,
        { auth: auth },
        text
      )
    ) : ""
  );
};

exports.default = QuickTool;
module.exports = exports['default'];