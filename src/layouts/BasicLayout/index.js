import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import GlobalHeader from '../../components/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter';
import SiderMenu from '../../components/SiderMenu';
import { getMenuData } from '../../custom/menu';
import ModifyPassModel from '../ModifyPassModel';

const { Content } = Layout;



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

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  }
  state = {
    isMobile,
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
    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    });
    /* this.props.dispatch({
      type: 'user/fetchCurrent',
    }); */
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
        <SiderMenu
          logo={logo}
          menuData={getMenuData()}
          collapsed={collapsed}
          location={location}
          isMobile={this.state.isMobile}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <GlobalHeader
            logo={logo}
            collapsed={collapsed}
            currentUser={currentUser}
            isMobile={this.state.isMobile}
            onNoticeClear={this.handleNoticeClear}
            onCollapse={this.handleMenuCollapse}
            onMenuClick={this.handleMenuClick}
            // onNoticeVisibleChange={this.handleNoticeVisibleChange}
          />
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <div style={{ minHeight: 'calc(100vh - 260px)' }}>
              {this.props.children}
            </div>
            <GlobalFooter
              copyright={
                <div>
                  Copyright <Icon type="copyright" /> 2018 慧曙通讯科技技术部出品
                </div>
              }
            />
            <ModifyPassModel hideModelHandler={this.hideModelHandler} visible={this.state.visible}/>
          </Content>
        </Layout>
      </Layout>
    );

    return (

        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>

    );
  }
}

export default BasicLayout;
