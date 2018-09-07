var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import 'rc-drawer-menu/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer-menu';
import SiderMenu from './SiderMenu';

export default (function (props) {
  return props.isMobile ? React.createElement(
    DrawerMenu,
    {
      parent: null,
      level: null,
      iconChild: null,
      open: !props.collapsed,
      onMaskClick: function onMaskClick() {
        props.onCollapse(true);
      },
      width: '226px'
    },
    React.createElement(SiderMenu, _extends({}, props, { collapsed: props.isMobile ? false : props.collapsed }))
  ) : React.createElement(SiderMenu, props);
});