import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
import { Link } from 'dva/router';
import NoticeIcon from '../NoticeIcon';
import HeaderSearch from '../HeaderSearch';

const { Header } = Layout;

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  getNoticeData() {
    const { notices = [] } = this.props;
    if (notices.length === 0) {
      return {};
    }
    const newNotices = notices.map((notice) => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      // transform id to item key
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = ({
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        })[newNotice.status];
        newNotice.extra = <Tag color={color} style={{ marginRight: 0 }}>{newNotice.extra}</Tag>;
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  }
  @Debounce(600)
  triggerResizeEvent() { // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  render() {
    const {
      currentUser, collapsed, fetchingNotices, isMobile, logo,
      onNoticeVisibleChange, onMenuClick, onNoticeClear,
    } = this.props;
    const menu = (
      <Menu className={"menu"} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="modifyPws"><Icon type="profile" />修改密码</Menu.Item>
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );
    const noticeData = this.getNoticeData();
    return (
      <Header className={"_yhqmng_header"}>
        {isMobile && (
          [
            (
              <Link to="/" className={"logo"} key="logo">
                <img src={logo} alt="logo" width="32" />
              </Link>
            ),
            <Divider type="vertical" key="line" />,
          ]
        )}
        <Icon
          className={"trigger"}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className={"right"}>
          <HeaderSearch
            className={`action search`}
            placeholder="站内搜索"
            dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
            onSearch={(value) => {
              console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={(value) => {
              console.log('enter', value); // eslint-disable-line
            }}
          />
          <NoticeIcon
            className={"action"}
            count={currentUser.notifyCount}
            onItemClick={(item, tabProps) => {
              console.log(item, tabProps); // eslint-disable-line
            }}
            onClear={onNoticeClear}
            onPopupVisibleChange={onNoticeVisibleChange}
            loading={fetchingNotices}
            popupAlign={{ offset: [20, -16] }}
          >
            <NoticeIcon.Tab
              list={noticeData['通知']}
              title="通知"
              emptyText="你已查看所有通知"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
            />
            <NoticeIcon.Tab
              list={noticeData['消息']}
              title="消息"
              emptyText="您已读完所有消息"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
            />
            <NoticeIcon.Tab
              list={noticeData['待办']}
              title="待办"
              emptyText="你已完成所有待办"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
            />
          </NoticeIcon>
          {currentUser.name ? (
            <Dropdown overlay={menu}>
              <span className={`action account`}>
                <Avatar size="small" className={"avatar"} src={currentUser.avatar} />
                <span className={"name"}>{currentUser.name}</span>
              </span>
            </Dropdown>
          ) : <Spin size="small" style={{ marginLeft: 8 }} />}
        </div>
        <style>{`
          ._yhqmng_header {
            padding: 0 12px 0 0;
            background: #fff;
            box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
            position: relative;
          }
          ._yhqmng_header .ant-layout {
            overflow-x: hidden;
          }
          ._yhqmng_header .ant-layout-header {
            height: 54px;
            line-height: 54px;
          }
          ._yhqmng_header .logo {
            height: 50px;
            line-height: 58px;
            vertical-align: top;
            display: inline-block;
            padding: 0 0 0 24px;
            cursor: pointer;
            font-size: 20px;

          }
          ._yhqmng_header .logo img {
            display: inline-block;
            vertical-align: middle;
          }
          ._yhqmng_header .menu .anticon{

            margin-right: 8px;
          }
          ._yhqmng_header .menu .anticon{
            width: 160px;
          }
          ._yhqmng_header i.trigger {
            font-size: 20px;
            line-height: 64px;
            cursor: pointer;
            transition: all .3s, padding 0s;
            padding: 0 24px;
          }
          ._yhqmng_header .right {
            float: right;
            height: 100%;

          }
          ._yhqmng_header .right .action {
            cursor: pointer;
            padding: 0 12px;
            display: inline-block;
            transition: all .3s;
            height: 100%;
          }
          ._yhqmng_header .right .action > i {
            font-size: 16px;
            vertical-align: middle;
          }
          ._yhqmng_header .right .action:hover,
          ._yhqmng_header .right .action .ant-popover-open{
            background: #e6f7ff;
          }

          ._yhqmng_header .right .search {
            padding: 0;
            margin: 0 12px;
          }
          ._yhqmng_header .right .search:hover {
            background: transparent;
          }
          ._yhqmng_header .right .account .avatar {
            margin: 20px 8px 20px 0;
            color: #1890ff;
            background: rgba(255, 255, 255, .85);
            vertical-align: middle;
          }

          @media only screen and (max-width: @screen-md) {

            ._yhqmng_header .header .ant-divider-vertical{
              vertical-align: unset;
            }
            ._yhqmng_header .header .name {
              display: none;
            }
            ._yhqmng_header .header i.trigger {
              padding: 0 12px;
            }
            ._yhqmng_header .header .logo {
              padding-right: 12px;
              position: relative;
            }
            ._yhqmng_header .header .right {
              position: absolute;
              right: 12px;
              top: 0;
              background: #fff;

            }
            ._yhqmng_header .header .right .account .avatar {
              margin-right: 0;
            }
          }

        `}</style>
      </Header>
    );
  }
}
