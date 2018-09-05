import React, {PureComponent} from 'react';
import { Upload, Icon,Button, message,Modal } from 'antd';
import style from './index.less'

export default class PicturesWall extends React.Component {
  state = {
    fileList: [],
  };

  //初始化加载数据
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (this.props.value !== nextProps.value) {
      if(nextProps.value&&nextProps.value.length !== 32) {
        console.log(window.path+'dist/'+nextProps.value);
        this.setState({fileList: [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: window.path+'dist/'+nextProps.value,
        }]})
      }
    }
  }

  handleChange = (info) => {
    let fileList = info.fileList;
    this.setState({ fileList })
    const { onChange } = this.props;
    if (onChange) {

      // 在此处需要看状态，如果token存在就
      if (info.file.status === 'done') {
      // Get this url from response in real world.
        //上传成功
        //console.log(info);
        onChange.call(this, info.file.response.fileToken);
      }

    }
  }


  render() {
    const props = {
      action={window.path+'upload'},
      onChange: this.handleChange,
      defaultFileList: [{
        uid: 1,
        name: 'xxx.png',
        status: 'done',
        reponse: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      }, {
        uid: 2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      }, {
        uid: 3,
        name: 'zzz.png',
        status: 'error',
        reponse: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      }],
    };
    return (
      <div className="clearfix">
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> 上传
          </Button>
        </Upload>
      </div>
    );
  }
}
