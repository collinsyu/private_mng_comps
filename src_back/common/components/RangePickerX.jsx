import React, {Component} from 'react';
import {DatePicker} from 'antd';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;


class RangePickerX extends Component {


  render() {
    const ranges ={
      '今天': [moment(), moment()],
      '昨天': [moment().add(-1, 'days'), moment().add(-1, 'days')],
      '前7天': [moment().add(-7, 'days'), moment()],
      '本月': [moment().startOf('month'), moment() ]
    };

    const _props = {
      ranges:ranges,
      style:{width: 180},
      ...this.props
    };

    return (
      <div>
        <RangePicker {..._props} />
      </div>

    );
  }
}

export default RangePickerX;
