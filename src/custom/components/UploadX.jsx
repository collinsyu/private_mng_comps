import React ,{ PureComponent }from 'react';
import { Upload, Icon, message,Modal,Button} from 'antd';

export default class PicturesWall extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };


  handleChange = (info) => {
    let fileList = info.fileList;

    this.setState({ fileList })
    const { onChange } = this.props;
    if (onChange) {
      // 在此处需要看状态，如果token存在就
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        //上传成功 目前这样只能是单个文件，当有多个文件时，需要在此处处理
        let fileTokens= fileList.map((file)=> file.response.fileToken);
        //返回多个文件token
        if(fileList.length == 1) {
          fileTokens=fileTokens[0]
        }
        onChange.call(this, fileTokens);
      }
    }
  }

  render() {
    return (
      <Upload {...this.props}
        onChange={this.handleChange} ><Button type="ghost"><Icon type="upload" />点击上传文件</Button></Upload>

    );
  }
}
