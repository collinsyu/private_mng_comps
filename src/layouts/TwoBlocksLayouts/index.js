import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message,LocaleProvider } from 'antd';
import classNames from 'classnames';
import GlobalHeader from '../../components/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter';
import SiderMenu from '../../components/SiderMenu';
import { getMenuData } from '../../custom/menu';
import ModifyPassModel from '../ModifyPassModel';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import HomeHeader from './home/HomeHeader';

const { Header, Content, Footer, Sider } = Layout;


function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}
/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = (item) => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `/${item.path}`,
        to: `/${item.children[0].path}`,
      });
      item.children.forEach((children) => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);


class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  }
  state = {
    visible: false,
    collapsed:false,
  };
  getChildContext() {
    const { location, route } = this.props;
    // debugger
    const menuData = getFlatMenuData(getMenuData());
    const routerConfig = route.routes;
    const routerData = {};
    // debugger
    routerConfig.map((item)=>{
      // debugger
      const path = item.path||"";
      const menuItem = menuData[path.replace(/^\//, '')] || {};
      routerData[path] = {
        ...item,
        name: item.name || menuItem.name,
      };
    })
    return {
      location,
      breadcrumbNameMap: routerData,
    };
  }
  componentDidMount() {

  }
  hideModelHandler = () => {
    this.setState({ visible: false });
  };


  handleMenuCollapse = (collapsed) => {
    this.setState({collapsed})
  }
  handleNoticeClear = (type) => {
    message.success(`清空了${type}`);
    // this.props.dispatch({
    //   type: 'global/clearNotices',
    //   payload: type,
    // });
  }
  handleMenuClick = ({ key }) => {
    // if (key === 'logout') {
    //   this.props.dispatch({
    //     type: 'login/logout',
    //   });
    // }
    if (key === 'logout') {
      window.location.href = window.path + "logout"
    }

    if (key === 'modifyPws') {
        this.setState({ visible: true });
    }
  }
  // handleNoticeVisibleChange = (visible) => {
  //   // if (visible) {
  //   //   this.props.dispatch({
  //   //     type: 'global/fetchNotices',
  //   //   });
  //   // }
  // }
  render() {
    const {
      currentUser, match, location,logo
    } = this.props;
    const { collapsed } = this.state;
    const layout = (

      <Layout>
        <HomeHeader logo={logo} currentUser={currentUser}  handleMenuClick={this.handleMenuClick}/>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>

            <Content style={{ padding: '24px 24px', height: '100%' }}>
              <div style={{ minHeight: 'calc(100vh - 195px)' }}>
                {this.props.children}
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <div>

          </div>
        </Footer>
        <ModifyPassModel hideModelHandler={this.hideModelHandler} visible={this.state.visible} resetPassword={this.props.resetPassword}/>

      </Layout>


    );

    return (
      <LocaleProvider locale={zhCN}>
        {layout}
      </LocaleProvider>

    );
  }
}

export default BasicLayout;
