import 'antd/lib/message/style';
import _message from 'antd/lib/message';
import React from 'react';


/**
 * 双击自动Copy选中的文本内容
 * 问题：这个 message 的位置需要调整到选中节点的右边
 * @param {[type]} children [description]
 */
export default function DbclickCopySpan(_ref) {
  var children = _ref.children;

  function handleDoubleClick() {
    var nodeText = window.getSelection().baseNode.textContent;
    document.execCommand("Copy");
    _message.success(nodeText + ' \u590D\u5236\u6210\u529F\uFF01');
  }

  return React.createElement(
    'span',
    { onDoubleClick: handleDoubleClick },
    children
  );
}