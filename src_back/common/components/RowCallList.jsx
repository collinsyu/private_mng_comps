import React from 'react';
import {Row, Col} from 'antd';

function RowCallList({formItemLayout, data}) {


  function toCal(data) {
    if (data instanceof Array) {
      const spanlenthg = parseInt((24 / data.length), 10);
      return data.map(obj => <Col span={spanlenthg}>
        <Row>
          <Col span={formItemLayout.labelCol.span} className="ant-form-item-label">
            {obj.label === ''?'':<label class="" title={obj.label}>{obj.label}</label>}
          </Col>
          <Col span={formItemLayout.wrapperCol.span} className="ant-form-item-control-wrapper">
            <div className="ant-form-item-control ">
              {obj.value}
            </div>
          </Col>
        </Row>
      </Col>);
    } else {
      return '';
    }
  }

  return (
    <div >
      {data.map(d => <Row>{toCal(d)}</Row>)}
    </div>
  );
}

export default RowCallList;
