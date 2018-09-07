import 'antd/lib/tooltip/style';
import _Tooltip from 'antd/lib/tooltip';
import React from 'react';
var styles = {
  'miniProgress': '_--css-module-js',
  'progressWrap': '_--css-module-js',
  'progress': '_--css-module-js',
  'target': '_--css-module-js'
};


var MiniProgress = function MiniProgress(_ref) {
  var target = _ref.target,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'rgb(19, 194, 194)' : _ref$color,
      strokeWidth = _ref.strokeWidth,
      percent = _ref.percent;
  return React.createElement(
    'div',
    { className: styles.miniProgress },
    React.createElement(
      _Tooltip,
      { title: '\u76EE\u6807\u503C: ' + target + '%' },
      React.createElement(
        'div',
        {
          className: styles.target,
          style: { left: target ? target + '%' : null }
        },
        React.createElement('span', { style: { backgroundColor: color || null } }),
        React.createElement('span', { style: { backgroundColor: color || null } })
      )
    ),
    React.createElement(
      'div',
      { className: styles.progressWrap },
      React.createElement('div', {
        className: styles.progress,
        style: {
          backgroundColor: color || null,
          width: percent ? percent + '%' : null,
          height: strokeWidth || null
        }
      })
    )
  );
};

export default MiniProgress;
module.exports = exports['default'];