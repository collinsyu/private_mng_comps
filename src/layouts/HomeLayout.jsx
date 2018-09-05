import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { Layout, Icon, message,Menu, Breadcrumb } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderMenu from '../components/SiderMenu';
import NotFound from '../routes/Exception/404';
import { getRoutes } from '../utils/utils';
import Authorized from '../utils/Authorized';
import { getMenuData } from '../common/menu';
import logo from '../assets/unicom.svg';
import ModifyPassModel from './ModifyPassModel';
import HomeHeader from './home/HomeHeader';
import HomeMenu from './home/HomeMenu';
import styles from './HomeLayout.less';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;
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
  handleNoticeVisibleChange = (visible) => {
    // if (visible) {
    //   this.props.dispatch({
    //     type: 'global/fetchNotices',
    //   });
    // }
  }
  render() {
    const {
      currentUser, collapsed, routerData, match, location,
    } = this.props;
    const layout = (
      <Layout>
        <Header className="header" id="header">
          <div className={styles.logo} key="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              <h1>{window.SYS_TITLE}</h1>
            </Link>
          </div>
          <Menu id="nav"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '54px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <MenuItemGroup key="g1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', margin: '24px 24px 0', height: '100%' }}>
              <div style={{ minHeight: 'calc(100vh - 195px)' }}>
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
                  <Route render={NotFound} />
                </Switch>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <div>
            Copyright <Icon type="copyright" /> 2018 慧曙通讯科技技术部出品
          </div>
        </Footer>
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
