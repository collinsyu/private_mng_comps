import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';

const { Header } = Layout;
const {SubMenu } = Menu;





function _nest(_arr,str){
  _arr = _arr || [];
  return _arr.map(function(item,ii){
    if(item.children){
      return (
        <SubMenu key={str+"-"+ii} title={<span className="submenu-title-wrapper">{item.label}</span>}>
          {_nest(item.children,str+"-"+ii)}
        </SubMenu>
      )
    }else{
      return <Menu.Item key={str+"-"+ii}><a href={item.url} target="_blank">{item.label}</a></Menu.Item>
    }
  })
}
class HomeHeader extends React.PureComponent {

  renderSubmenu(){
    var headerMenu = window.headerMenu||[];

    return (

      _nest(headerMenu,"b")


    )
  }

  render() {
   const { currentUser,  logo,} = this.props;
   const menuMode=  'horizontal';
   const menu = (
     <Menu className={"menu"} selectedKeys={[]} onClick={this.props.handleMenuClick}>
       <Menu.Item ><Icon type="user" />账户详情</Menu.Item>
       <Menu.Item ><Icon type="check-circle" />认证详情</Menu.Item>
       <Menu.Item ><Icon type="setting" />功能设置</Menu.Item>
       <Menu.Divider />
       <Menu.Item key="modifyPws"><Icon type="profile" />修改密码</Menu.Item>
       <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
     </Menu>
   );

    return (
      <Header id="_yhq_header1" className="_yhq_header1">
        <div className={"logo"} key="logo" id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>{window.SYS_TITLE}</h1>
          </Link>
        </div>
        <Menu id="nav"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >

          {this.renderSubmenu()}


          {currentUser.name ? (
            <Dropdown overlay={menu}>
              <span className={`${"action"} ${"account"}`}>
                <Avatar size="small" className={"avatar"} src={currentUser.avatar} />
                <span className={"name"}>{currentUser.name}</span>
              </span>
            </Dropdown>
          ) : <Spin size="small" style={{ marginLeft: 8 }} />}

        </Menu>


        <style>{`

          ._yhq_header1 .ant-layout {
            overflow-x: hidden;
          }
          ._yhq_header1 .ant-layout-sider {
            background: #fff;
          }
          ._yhq_header1 .ant-layout-header {
            height: 64px;
            line-height: 64px;
          }
          ._yhq_header1 .ant-layout-content {
            margin-top: 0px;
          }
          ._yhq_header1 .ant-menu-item-group-title {
            color: inherit;
          }

          ._yhq_header1 #nav {
            float: right;
            font-size: 14px;
            font-family: Lato, "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
          }
          #_yhq_header1 {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            background: #fff;
            -webkit-box-shadow: 0 2px 8px #f0f1f2;
            box-shadow: 0 2px 8px #f0f1f2;
            position: relative;
            z-index: 10;
            max-width: 100%;
          }
          ._yhq_header1 #logo {
            overflow: hidden;
            padding-left: 40px;
            float: left;
            height: 64px;
            line-height: 64px;
            text-decoration: none;
            white-space: nowrap;
          }
          ._yhq_header1 #logo img {
            height: 32px;
            margin-right: 16px;
          }
          ._yhq_header1 #logo img + img {
            height: 16px;
            position: relative;
            top: 1px;
          }


          ._yhq_header1 .logo {
            overflow: hidden;
            padding-left: 40px;
            float: left;
            height: 64px;
            line-height: 64px;
            text-decoration: none;
            white-space: nowrap;

          }
          ._yhq_header1 .logo img {
            display: inline-block;
            vertical-align: middle;
            height: 32px;
          }
          ._yhq_header1 .logo h1 {
            display: inline-block;
            vertical-align: middle;
            font-size: 20px;
            margin: 0 0 0 12px;
            font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
          }


        `}</style>
      </Header>
    )
  }
}

export default HomeHeader;
