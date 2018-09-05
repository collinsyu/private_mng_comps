import React from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';
import styles from './HomeHeader.less';
const { Sider } = Layout;

const SubMenu = Menu.SubMenu;

class HomeMenu extends React.PureComponent {

  render() {
   const menuMode=  'horizontal';
    return (
      <Sider>
        <Menu>
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

    )
  }
}

export default HomeMenu;
