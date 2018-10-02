import React, { PureComponent } from 'react';
import { Popover, Icon, Tabs, Badge, Spin } from 'antd';
import classNames from 'classnames';
import List from './NoticeList';

const { TabPane } = Tabs;

export default class NoticeIcon extends PureComponent {
  static defaultProps = {
    onItemClick: () => {},
    onPopupVisibleChange: () => {},
    onTabChange: () => {},
    onClear: () => {},
    loading: false,
    locale: {
      emptyText: '暂无数据',
      clear: '清空',
    },
    emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
  };
  static Tab = TabPane;
  constructor(props) {
    super(props);
    this.state = {};
    if (props.children && props.children[0]) {
      this.state.tabType = props.children[0].props.title;
    }
  }
  onItemClick = (item, tabProps) => {
    const { onItemClick } = this.props;
    onItemClick(item, tabProps);
  }
  onTabChange = (tabType) => {
    this.setState({ tabType });
    this.props.onTabChange(tabType);
  }
  getNotificationBox() {
    const { children, loading, locale } = this.props;
    if (!children) {
      return null;
    }
    const panes = React.Children.map(children, (child) => {
      const title = child.props.list && child.props.list.length > 0
        ? `${child.props.title} (${child.props.list.length})` : child.props.title;
      return (
        <TabPane tab={title} key={child.props.title}>
          <List
            {...child.props}
            data={child.props.list}
            onClick={item => this.onItemClick(item, child.props)}
            onClear={() => this.props.onClear(child.props.title)}
            title={child.props.title}
            locale={locale}
          />
        </TabPane>
      );
    });
    return (
      <Spin spinning={loading} delay={0}>
        <Tabs className="_yhqmng_tabs" onChange={this.onTabChange}>
          {panes}
        </Tabs>
      </Spin>
    );
  }
  render() {
    const { className, count, popupAlign, onPopupVisibleChange } = this.props;
    const noticeButtonClass = classNames(className, "_yhqmng_noticeButton");
    const notificationBox = this.getNotificationBox();
    const trigger = (
      <span className={noticeButtonClass}>
        <Badge count={count} >
          <Icon type="bell" className="_yhqmng_icon" />
        </Badge>
      </span>
    );
    if (!notificationBox) {
      return trigger;
    }
    const popoverProps = {};
    if ('popupVisible' in this.props) {
      popoverProps.visible = this.props.popupVisible;
    }
    return (
      <Popover
        placement="bottomRight"
        content={notificationBox}
        popupClassName="_yhqmng_popover"
        trigger="click"
        arrowPointAtCenter
        popupAlign={popupAlign}
        onVisibleChange={onPopupVisibleChange}
        {...popoverProps}
      >
        {trigger}
        <style>{`
          ._yhqmng_popover {
            width: 336px;
          }
          ._yhqmng_popover .ant-popover-inner-content {
            padding: 0;
          }
          ._yhqmng_popover ._yhqmng_noticeButton {
            cursor: pointer;
            display: inline-block;
            transition: all .3s;
          }

          ._yhqmng_popover  ._yhqmng_icon {
            font-size: 16px;
            padding: 4px;
          }

          ._yhqmng_popover  ._yhqmng_tabs .ant-tabs-nav-scroll {
            text-align: center;
          }
          ._yhqmng_popover  ._yhqmng_tabs .ant-tabs-bar {
            margin-bottom: 4px;
          }
        `}</style>
      </Popover>

    );
  }
}
