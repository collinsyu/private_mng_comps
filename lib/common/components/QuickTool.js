import 'antd/lib/popconfirm/style';
import _Popconfirm from 'antd/lib/popconfirm';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';
import React from 'react';

import { patch } from '../utils/request';
import AuthA from './AuthA';
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

    patch(path, params).then(function (data) {
      if (data && data.data && data.data.success) {
        _message.info('操作成功');
        if (props.callbak) {
          props.callbak();
        }
      } else {
        console.log(data);
      }
    });
  };

  // 如果没有权限，需要不同的提示方式
  return React.createElement(
    'div',
    null,
    field === value ? React.createElement(
      _Popconfirm,
      { title: '\u786E\u5B9A\u8981' + text + '\u5417\uFF1F', onConfirm: function onConfirm() {
          return handleClick();
        } },
      React.createElement(
        AuthA,
        { auth: auth },
        text
      )
    ) : ""
  );
};

export default QuickTool;