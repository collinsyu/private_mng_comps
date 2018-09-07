import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import {GlobalHeader,GlobalFooter,SiderMenu,Exception} from '../antdpro';
import { getMenuData } from '../common/menu';
import ModifyPassModel from './ModifyPassModel';
import { Link } from 'dva/router';
import {PageHeaderLayout} from './PageHeaderLayout';

const { Content } = Layout;

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
    visible: false
  };

  componentDidMount() {
    enquireScreen((mobile) => {
      console.log("mobile",mobile);
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

  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = 'Ant Design Pro';
    if (typeof window.SYS_TITLE !== 'undefined') {
      title = window.SYS_TITLE;
    }
    // if (routerData[pathname] && routerData[pathname].name) {
    //   title = `${routerData[pathname].name} - ${title}`;
    // }
    return title;
  }
  handleMenuCollapse = (collapsed) => {
    // this.props.dispatch({
    //   type: 'global/changeLayoutCollapsed',
    //   payload: collapsed,
    // });
  }
  handleNoticeClear = (type) => {
    message.success(`清空了${type}`);
    // this.props.dispatch({
    //   type: 'global/clearNotices',
    //   payload: type,
    // });
  }
  handleMenuClick = ({ key }) => {

    if (key === 'logout') {
      window.location.href = window.path + "logout"
    }

    if (key === 'modifyPws') {
        this.setState({ visible: true });
    }
  }
  handleNoticeVisibleChange = (visible) => {
    // if (visible) {
    //   this.props.dispatch({
    //     type: 'global/fetchNotices',
    //   });
    // }
  }
  render() {
    const {
      currentUser, collapsed, routerData, match, location,logo
    } = this.props;
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
            currentUser={currentUser}
            isMobile={this.state.isMobile}
            onNoticeClear={this.handleNoticeClear}
            onCollapse={this.handleMenuCollapse}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
          />
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <div style={{ minHeight: 'calc(100vh - 260px)' }}>
              <PageHeaderLayout {...this.props}/>

                {/* {this.props.children} */}
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
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default BasicLayout
