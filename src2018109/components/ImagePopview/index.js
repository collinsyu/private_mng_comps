import React, {PureComponent} from 'react';
import {Button,Popover,Modal} from 'antd';
import {formItemLayout} from '../../common/constants'

class ImagePopview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  };

  handleCancel = () => this.setState({ visible: false });
  handlePreview = () => this.setState({ visible: false });

  renderContent11 = () => {
  	return (
  		<div><div  class="ant-upload-list ant-upload-list-picture-card">
	<div class="ant-upload-list-item ant-upload-list-item-done">
		<div class="ant-upload-list-item-info">
			<span>
				<img height="180" width="200" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="xxx.png"/>
			</span>
		</div>
	<span class="ant-upload-list-item-actions">
	<a href="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" target="_blank" rel="noopener noreferrer" title="Preview file">
		<i class="anticon anticon-eye-o"></i>
	</a>
	<i title="Remove file" class="anticon anticon-delete"></i>
	</span>
	</div>
</div></div>);
  };

  renderContent = () => {
  	return <img onClick={this.handlePreview()} height="180" width="200"  src={window.path+'dist/'+this.props.value} />
  };

  setVisible(visible) {
    const props = this.props;
    if (!('visible' in props)) {
      this.setState({ visible });
    }

    const { onVisibleChange } = props;
    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }

  render() {
    const {children} = this.props;
    const previewImage = window.path + 'dist/' + this.props.value;

    return (
      <div>
        <Popover content={this.renderContent()} trigger="hover">  
        	<Button icon="picture"></Button> 
        </Popover>
        <Modal visible={this.state.visible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default ImagePopview;
