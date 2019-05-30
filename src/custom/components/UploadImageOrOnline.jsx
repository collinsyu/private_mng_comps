import React ,{ PureComponent }from 'react';
import { Upload, Icon, message,Modal,Input,Tabs,Button} from 'antd';
import { create } from '../../utils/request';

const { TabPane } = Tabs;
function beforeUpload(file,self) {
  const {fileSize=2} = self.props;
  const isJPG = true;
  const isLt2M = file.size / 1024 / 1024 < fileSize;
  if (!isLt2M) {
    message.error(`图片不能大于 ${fileSize}MB!`);
  }
  return isJPG && isLt2M;
}

export default class UploadImageOrOnline extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    meansVisible:false,
  };
  componentDidMount() {
    // console.log(this.props);
  }
  //初始化加载数据
  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
    if (this.props.value !== nextProps.value) {
      if(nextProps.value&&nextProps.value.length !== 32) {
        //在此处也要看是几张图片
        // console.log(window.path+'dist/'+nextProps.value);
        // 为啥要更新这个呢？
        console.log("为啥要更新这个呢？");
        this.setState({fileList: [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: nextProps.value,
        }]})
      }
    }
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  handleInputChange = (imageUrl)=>{
    var _self = this;
    const { onChange , fetchfiletokenurl = "upload/image/network"} = this.props;
    // NOTE: 拿到url，去后台换取token
    create(fetchfiletokenurl,{imageUrl}).then((data)=>{
      console.log(data);
      let fileTokens= data.fileToken;
      onChange.call(this, fileTokens);
      var _t = (new Date()).getTime();
      _self.setState({
        fileList:[{
          lastModified: _t,
          lastModifiedDate: {},
          name: `u=${_t}&fm=26&gp=0.jpg`,
          originFileObj: {
            lastModified: _t,
            lastModifiedDate: {},
            name: `u=${_t}&fm=26&gp=0.jpg`,
            size: 10000,
            type: "image/jpeg",
            uid: `rc-upload-${_t}-12`,
            webkitRelativePath: "",
          },
          percent: 100,
          response: {},
          size: 10000,
          status: "done",
          thumbUrl: imageUrl,
          type: "image/jpeg",
          uid: `rc-upload-${_t}-12`,
        }]
      })
    })
  }
  // 上传多张图片时，应该返回一个列表或者,分
  handleChange = (info) => {
    let fileList = info.fileList;
    console.log(fileList);
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
    const { previewVisible, previewImage, fileList,meansVisible } = this.state;
    const uploadButton = (
      <div style={{
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 'calc(100% + 16px)',
        margin:"-8px",
        width: 'calc(100% + 16px)',

      }}
        onClick={()=>{
          if(meansVisible){
            return
          }
          this.setState({meansVisible:true})
        }}
      >
        <Icon type="plus" />
        <div className="ant-upload-text">点击上传</div>
      </div>
    );
    // 默认为一张图片
    const { fileLength=1 } = this.props;

    var realupload = <Upload
      action={window.path+'upload'}
      listType="picture-card"
      fileList={fileList}
      onPreview={this.handlePreview}
      onChange={this.handleChange}
      beforeUpload={(file)=>{beforeUpload(file,this)}}
      openFileDialogOnClick={meansVisible}
    >
      {fileList.length >= fileLength ? null : uploadButton}
    </Upload>
    return (
      <div className="clearfix">
        {realupload}

        <Modal title="" visible={meansVisible} footer={null} onCancel={()=>{this.setState({meansVisible:false})}}>
          <Tabs defaultActiveKey="1">
             <TabPane tab="网络文件" key="1">
               {realupload}
             </TabPane>
             <TabPane tab="上传文件" key="2">
               <Input placeholder="请填写图片url" onBlur={(e)=>{this.handleInputChange(e.target.value)}}/>
             </TabPane>
           </Tabs>
           <div style={{textAlign:"center",marginTop:"4px"}}>
            <Button type="primary" onClick={()=>{this.setState({meansVisible:false})}}>确认</Button>
           </div>
        </Modal>

        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
