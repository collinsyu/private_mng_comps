Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

exports.default = DbclickCopySpan;

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 双击自动Copy选中的文本内容
 * 问题：这个 message 的位置需要调整到选中节点的右边
 * @param {[type]} children [description]
 */
function DbclickCopySpan(_ref) {
  var children = _ref.children;

  function handleDoubleClick() {
    var nodeText = window.getSelection().baseNode.textContent;
    document.execCommand("Copy");
    _message3.default.success(nodeText + ' \u590D\u5236\u6210\u529F\uFF01');
  }

  return _react2.default.createElement(
    'span',
    { onDoubleClick: handleDoubleClick },
    children
  );
}
module.exports = exports['default'];