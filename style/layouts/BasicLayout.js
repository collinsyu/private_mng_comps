import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderMenu from '../components/SiderMenu';
import { getRoutes } from '../utils/utils';
import Authorized from '../utils/Authorized';
import { getMenuData } from '../common/menu';
import ModifyPassModel from './ModifyPassModel';
import Exception from '../components/Exception';
import { Link } from 'dva/router';

const { Content } = Layout;
const { AuthorizedRoute } = Authorized;

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
  getChildContext() {
    const { location, routerData } = this.props;
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

  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = 'Ant Design Pro';
    if (typeof window.SYS_TITLE !== 'undefined') {
      title = window.SYS_TITLE;
    }
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - ${title}`;
    }
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
          // 不带Authorized参数的情况下如果没有权限,会强制跳到403界面
          // If you do not have the Authorized parameter
          // you will be forced to jump to the 403 interface without permission
          Authorized={Authorized}
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
              <Switch>
                {
                  getRoutes(match.path, routerData).map(item =>
                    (
                      <AuthorizedRoute
                        key={item.key}
                        path={item.path}
                        component={item.component}
                        exact={item.exact}
                        authority={item.authority}
                        redirectPath="/exception/403"
                      />
                    )
                  )
                }
                {
                  redirectData.map(item =>
                    <Redirect key={item.from} exact from={item.from} to={item.to} />
                  )
                }
                <Redirect exact from="/" to="/dashboard/workplace" />
                <Route render={<Exception type="404" style={{ minHeight: 500, height: '80%' }} linkElement={Link} />} />
              </Switch>
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

export default connect(({ user, global, loading }) => ({
  currentUser: user.currentUser,
  collapsed: global.collapsed,
  fetchingNotices: {},
  notices: global.notices,
}))(BasicLayout);
