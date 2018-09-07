var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Link } from 'dva/router';
import { PageHeader } from 'ant-design-pro';

export default (function (_ref) {
  var children = _ref.children,
      wrapperClassName = _ref.wrapperClassName,
      top = _ref.top,
      restProps = _objectWithoutProperties(_ref, ['children', 'wrapperClassName', 'top']);

  return React.createElement(
    'div',
    { style: { margin: '-24px -24px 0' }, className: wrapperClassName },
    top,
    React.createElement(PageHeader, _extends({ key: 'pageheader' }, restProps, { linkElement: Link })),
    children ? React.createElement(
      'div',
      { className: "_yhqmng_content" },
      children
    ) : null,
    React.createElement(
      'style',
      null,
      '\n      ._yhqmng_content{\n        margin: 24px 24px 0;\n      }\n\n    '
    )
  );
});