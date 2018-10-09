import React from 'react';
import classNames from 'classnames';
import { Row } from 'antd';

export default ({ className, title, col = 3, layout = 'horizontal', gutter = 32,
  children, size, ...restProps }) => {
  const clsString = classNames("_yhq_descriptionList", layout, className, {
    ["_yhq_small"]: size === 'small',
    ["_yhq_large"]: size === 'large',
  });
  const column = col > 4 ? 4 : col;
  return (
    <div className={clsString} {...restProps}>
      {title ? <div className={"_yhq_title"}>{title}</div> : null}
      <Row gutter={gutter}>
        {React.Children.map(children, child => React.cloneElement(child, { column }))}
      </Row>
      <style>{`
        ._yhq_descriptionList .ant-row {
          margin-bottom: -16px;
          overflow: hidden;
        }
        ._yhq_descriptionList ._yhq_title {
          font-size: 14px;
          color: fade(#000, 85%);
          font-weight: 500;
          margin-bottom: 16px;
        }
        ._yhq_descriptionList ._yhq_draw_term:after {
          content: ":";
          margin: 0 8px 0 2px;
          position: relative;
          top: -.5px;
        }
        ._yhq_descriptionList ._yhq_draw_term {
          line-height: 22px;
          padding-bottom: 16px;
          margin-right: 8px;
          color: fade(#000, 85%);
          white-space: nowrap;
          display: table-cell;
        }
        ._yhq_descriptionList ._yhq_draw_detail {
          line-height: 22px;
          width: 100%;
          padding-bottom: 16px;
          color: fade(#000, 65%);
          display: table-cell;
        }
        ._yhq_descriptionList._yhq_small .ant-row {
          margin-bottom: -8px;
        }
        ._yhq_descriptionList._yhq_small ._yhq_title {
          margin-bottom: 12px;
          color: fade(#000, 65%);
        }
        ._yhq_descriptionList._yhq_small ._yhq_draw_term,
        ._yhq_descriptionList._yhq_small ._yhq_draw_detail {
          padding-bottom: 8px;
        }
        ._yhq_descriptionList_yhq_large ._yhq_title {
          font-size: 16px;
        }
        ._yhq_descriptionList.vertical ._yhq_draw_term {
          padding-bottom: 8px;
          display: block;
        }
        ._yhq_descriptionList.vertical ._yhq_draw_detail {
          display: block;
        }

      `}</style>
    </div>
  );
};
