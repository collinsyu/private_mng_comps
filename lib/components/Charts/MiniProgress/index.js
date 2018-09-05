import React from 'react';
import { Tooltip } from 'antd';

import styles from './index.less';

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
      Tooltip,
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