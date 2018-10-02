import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Tabs } from 'antd';
import classNames from 'classnames';

const { TabPane } = Tabs;

function getBreadcrumb(breadcrumbNameMap, url) {
  if (breadcrumbNameMap[url]) {
    return breadcrumbNameMap[url];
  }
  const urlWithoutSplash = url.replace(/\/$/, '');
  if (breadcrumbNameMap[urlWithoutSplash]) {
    return breadcrumbNameMap[urlWithoutSplash];
  }
  let breadcrumb = {};
  Object.keys(breadcrumbNameMap).forEach((item) => {
    const itemRegExpStr = `^${item.replace(/:[\w-]+/g, '[\\w-]+')}$`;
    const itemRegExp = new RegExp(itemRegExpStr);
    if (itemRegExp.test(url)) {
      breadcrumb = breadcrumbNameMap[item];
    }
  });
  return breadcrumb;
}

export default class PageHeader extends PureComponent {
  static contextTypes = {
    routes: PropTypes.array,
    params: PropTypes.object,
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  };
  onChange = (key) => {
    if (this.props.onTabChange) {
      this.props.onTabChange(key);
    }
  };
  getBreadcrumbProps = () => {
    return {
      routes: this.props.routes || this.context.routes,
      params: this.props.params || this.context.params,
      location: this.props.location || this.context.location,
      breadcrumbNameMap: this.props.breadcrumbNameMap || this.context.breadcrumbNameMap,
    };
  };
  itemRender = (route, params, routes, paths) => {
    const { linkElement = 'a' } = this.props;
    const last = routes.indexOf(route) === routes.length - 1;
    return (last || !route.component)
      ? <span>{route.breadcrumbName}</span>
      : createElement(linkElement, {
        href: paths.join('/') || '/',
        to: paths.join('/') || '/',
      }, route.breadcrumbName);
  }
  render() {
    const { routes, params, location, breadcrumbNameMap } = this.getBreadcrumbProps();
    const {
      title, logo, action, content, extraContent,
      breadcrumbList, tabList, className, linkElement = 'a',
      activeTabKey,
    } = this.props;
    const clsString = classNames("_yhq_pageHeader", className);
    let breadcrumb;
    if (breadcrumbList && breadcrumbList.length) {
      breadcrumb = (
        <Breadcrumb className={"breadcrumb"}>
          {
            breadcrumbList.map(item => (
              <Breadcrumb.Item key={item.title}>
                {item.href ? (
                  createElement(linkElement, {
                    [linkElement === 'a' ? 'href' : 'to']: item.href,
                  }, item.title)
                ) : item.title}
              </Breadcrumb.Item>)
            )
          }
        </Breadcrumb>
      );
    } else if (routes && params) {
      breadcrumb = (
        <Breadcrumb
          className={"breadcrumb"}
          routes={routes.filter(route => route.breadcrumbName)}
          params={params}
          itemRender={this.itemRender}
        />
      );
    } else if (location && location.pathname) {
      const pathSnippets = location.pathname.split('/').filter(i => i);
      const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        const currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url);
        const isLinkable = (index !== pathSnippets.length - 1) && currentBreadcrumb.component;
        return currentBreadcrumb.name && !currentBreadcrumb.hideInBreadcrumb ? (
          <Breadcrumb.Item key={url}>
            {createElement(
              isLinkable ? linkElement : 'span',
              { [linkElement === 'a' ? 'href' : 'to']: url },
              currentBreadcrumb.name,
            )}
          </Breadcrumb.Item>
        ) : null;
      });
      const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
          {createElement(linkElement, {
            [linkElement === 'a' ? 'href' : 'to']: '/',
          }, '首页')}
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
      breadcrumb = (
        <Breadcrumb className={"breadcrumb"}>
          {breadcrumbItems}
        </Breadcrumb>
      );
    } else {
      breadcrumb = null;
    }

    let tabDefaultValue;
    if (activeTabKey !== undefined && tabList) {
      tabDefaultValue = tabList.filter(item => item.default)[0] || tabList[0];
    }

    const activeKeyProps = {
      defaultActiveKey: tabDefaultValue && tabDefaultValue.key,
    };
    if (activeTabKey !== undefined) {
      activeKeyProps.activeKey = activeTabKey;
    }

    return (
      <div className={clsString}>
        {breadcrumb}
        <div className={"detail"}>
          {logo && <div className={"logo"}>{logo}</div>}
          <div className={"main"}>
            <div className={"row"}>
              {title && <h1 className={"title"}>{title}</h1>}
              {action && <div className={"action"}>{action}</div>}
            </div>
            <div className={"row"}>
              {content && <div className={"content"}>{content}</div>}
              {extraContent && <div className={"extraContent"}>{extraContent}</div>}
            </div>
          </div>
        </div>
        {
          tabList &&
          tabList.length && (
            <Tabs
              className={"tabs"}
              {...activeKeyProps}
              onChange={this.onChange}
            >
              {
                tabList.map(item => <TabPane tab={item.tab} key={item.key} />)
              }
            </Tabs>
          )
        }

        <style>{`
          ._yhq_pageHeader {
            background: #fff;
            padding: 8px 22px 0 22px;
            border-bottom: 1px solid hsv(0, 0, 91%);
          }
          ._yhq_pageHeader .detail {
            display: flex;
          }
          ._yhq_pageHeader .row {
            display: flex;
          }
          ._yhq_pageHeader .breadcrumb {
            margin-bottom: 8px;
          }
          ._yhq_pageHeader .tabs {
            margin: 0 0 -17px -8px;
          }
          ._yhq_pageHeader .tabs .ant-tabs-bar {
            border-bottom: 1px solid hsv(0, 0, 91%);
          }

          ._yhq_pageHeader .logo {
            flex: 0 1 auto;
            margin-right: 16px;
            padding-top: 1px;
          }
          ._yhq_pageHeader .logo > img {
            width: 28px;
            height: 28px;
            border-radius: 4px;
            display: block;
          }
          ._yhq_pageHeader .title {
            font-size: 20px;
            font-weight: 500;
            color: fade(#000, 85%);
          }
          ._yhq_pageHeader .action {
            margin-left: 56px;
            min-width: 266px;
          }

          ._yhq_pageHeader .action .ant-btn-group:not(:last-child),
          ._yhq_pageHeader .action .ant-btn:not(:last-child) {
            margin-right: 8px;
          }
          ._yhq_pageHeader .action .ant-btn-group > .ant-btn {
            margin-right: 0;
          }
          ._yhq_pageHeader .title, .action,
          ._yhq_pageHeader .content,
          ._yhq_pageHeader .extraContent,
          ._yhq_pageHeader .main {
            flex: auto;
          }
          ._yhq_pageHeader .title,
          ._yhq_pageHeader .action {
            margin-bottom: 16px;
          }
          ._yhq_pageHeader .logo, .content,
          ._yhq_pageHeader .extraContent {
            margin-bottom: 16px;
          }
          ._yhq_pageHeader .action,
          ._yhq_pageHeader .extraContent {
            text-align: right;
          }

          ._yhq_pageHeader .extraContent {
            margin-left: 88px;
            min-width: 242px;
          }


          @media screen and (max-width: 1200px) {
            ._yhq_pageHeader .extraContent {
              margin-left: 44px;
            }
          }

          @media screen and (max-width: 992px) {
            ._yhq_pageHeader .extraContent {
              margin-left: 20px;
            }
          }

          @media screen and (max-width: 768px) {
            ._yhq_pageHeader .row {
              display: block;
            }
            ._yhq_pageHeader .action,
            ._yhq_pageHeader .extraContent {
              margin-left: 0;
              text-align: left;
            }
          }

          @media screen and (max-width: 576px) {
            ._yhq_pageHeader .detail {
              display: block;
            }
          }

          @media screen and (max-width: 480px) {
            ._yhq_pageHeader .action .ant-btn-group,
            ._yhq_pageHeader .action  .ant-btn {
              display: block;
              margin-bottom: 8px;
            }
            ._yhq_pageHeader .action .ant-btn-group > .ant-btn {
              display: inline-block;
              margin-bottom: 0;
            }
          }

        `}</style>
      </div>
    );
  }
}
