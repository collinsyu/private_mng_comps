import React from 'react';
import { Link } from 'dva/router';
import PageHeader from '../components/PageHeader';

export default ({ children, wrapperClassName, top, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <PageHeader key="pageheader" {...restProps} linkElement={Link} />
    {children ? <div className="_yhq_content">{children}</div> : null}

    <style>{`
      ._yhq_content {
        margin: 24px 24px 0;
      }

      @media screen and (max-width: 576px) {
        ._yhq_content {
          margin: 24px 0 0;
        }
      }

    `}</style>
  </div>
);
