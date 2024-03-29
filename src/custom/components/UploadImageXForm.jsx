import React ,{ PureComponent }from 'react';
import { Upload, Icon, message,Modal} from 'antd';

function beforeUpload(file) {
  /*const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('只能上传图片文件!');
    console.log(file.type);
  }*/
  const isJPG = true;
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片不能大于 2MB!');
  }
  return isJPG && isLt2M;
}


export default class PicturesWall extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  //初始化加载数据
  componentWillReceiveProps(nextProps) {
    // console.warn(nextProps);
    if (this.props.value !== nextProps.value) {
      this.setState({fileList:nextProps.value})
        // if(Array.isArray(nextProps.value)){
        //
        //   this.setState({
        //     fileList: nextProps.value.map((item,ii)=>{
        //       return {
        //         uid: ii,
        //         name: 'xxx.png',
        //         status: 'done',
        //         url: window.path+item,
        //       }
        //     })
        //   })
        // }else{
        //   this.setState({fileList: [{
        //     uid: -1,
        //     name: 'xxx.png',
        //     status: 'done',
        //     url: window.path+nextProps.value,
        //   }]})
        // }
    }
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  // 上传多张图片时，应该返回一个列表或者,分
  handleChange = (info) => {
    let fileList = info.fileList;
    this.setState({ fileList })
    const { onChange } = this.props;
    if (onChange) {
      // 在此处需要看状态，如果token存在就
      if (info.file.status === 'done'||info.file.status === 'removed') {
        // Get this url from response in real world.
        //上传成功 目前这样只能是单个文件，当有多个文件时，需要在此处处理
        // let fileTokens= fileList.map((file)=> file.response.fileToken);
        //返回多个文件token
        // if(fileList.length == 1) {
        //   fileTokens=fileTokens[0]
        // }
        fileList.map((file)=> {
          if(file.response){
            file.fileToken = file.response.fileToken
          }

        });
        // console.warn("发生了变化",fileList);

        onChange.call(this, fileList);
      }
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    console.log("xx");
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">点击上传</div>
      </div>
    );
    // 默认为一张图片
    const { fileLength=1 } = this.props;
    return (
      <div className="clearfix">
        <Upload
          action={window.path+'upload'}
          listType="picture-card"
          // disabled={true}
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          beforeUpload={beforeUpload}
        >
          {fileList.length >= fileLength ? null : uploadButton}
        </Upload>

        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
