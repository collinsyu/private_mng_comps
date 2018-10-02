import React from 'react';
import {message} from 'antd'

/**
 * 双击自动Copy选中的文本内容
 * 问题：这个 message 的位置需要调整到选中节点的右边
 * @param {[type]} children [description]
 */
export default function DbclickCopySpan({children}) {
  function handleDoubleClick() {
    const nodeText = window.getSelection().baseNode.textContent;
    document.execCommand("Copy");
    message.success(`${nodeText} 复制成功！`);
  }

  return (
    <span onDoubleClick={handleDoubleClick}>{children}</span>
  );
}
