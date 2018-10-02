import React from 'react';
import { Link } from 'dva/router';
import PageHeader from '../components/PageHeader';

// export default ({ children, wrapperClassName, top, ...restProps }) => (
//   <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
//     {top}
//     <PageHeader key="pageheader" {...restProps} linkElement={Link} />
//     {children ? <div className={"_yhqmng_content"}>{children}</div> : null}
//     <style>{`
//       ._yhqmng_content{
//         margin: 24px 24px 0;
//       }
//
//     `}</style>
//   </div>
// );
class PageHeaderLayout extends React.PureComponent {


  componentDidMount() {

  }

  render() {
    const { children, wrapperClassName,routerData, top, ...restProps } = this.props;
    
    return (
        <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
          {top}
          <PageHeader key="pageheader" {...restProps} breadcrumbNameMap={routerData} linkElement={Link} />
          {children ? <div className={"_yhqmng_content"}>{children}</div> : null}
          <style>{`
            ._yhqmng_content{
              margin: 24px 24px 0;
            }

          `}</style>
        </div>
    );
  }
}

export default PageHeaderLayout
