import React from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';
import styles from './HomeHeader.less';
const { Header } = Layout;
class HomeHeader extends React.PureComponent {

  render() {
   const menuMode=  'horizontal';
    return (
      <Header className={styles.header}>
        <Menu mode={menuMode} className={styles.menu} selectedKeys={[]} >
          <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
          <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
          <Menu.Item key="modifyPws"><Icon type="profile" />修改密码</Menu.Item>
          <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default HomeHeader;
