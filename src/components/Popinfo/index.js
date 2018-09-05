import React, {PureComponent} from 'react';
import {Form, Input, Popconfirm} from 'antd';
const FormItem = Form.Item;

class Popinfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false
    };
  };

  hideModelHandler = () => {
    this.setState({visible: false, confirmLoading: false});
  };

  showModelHandler = (e) => {
    if (e) {e.stopPropagation();}
    this.setState({visible: true});
  };


  onConfirm = (e) => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setVisible(false);
        this.props.form.resetFields();
        const { onConfirm } = this.props;
        if (onConfirm) {
          onConfirm.call(this, e, values);
        }
      } else {

      }
    });
  }

  onCancel = (e) => {
    this.setVisible(false);

    const { onCancel } = this.props;
    if (onCancel) {
      onCancel.call(this, e);
    }
  }


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
    const { getFieldDecorator } = this.props.form;

    const formB = (
      <div>
        <Form layout="horizontal">
          {this.props.title}
          <FormItem>
            {getFieldDecorator('value', {
              rules: [{ required: true, message: '请输入正确的值' }],
            })(
              <Input  />
            )}
          </FormItem>
        </Form>
      </div>

    );

    return (
      <span>
        <Popconfirm placement="bottom" visible={this.state.visible} title={formB} onConfirm={this.onConfirm} onCancel={this.onCancel}>
          <span onClick={this.showModelHandler}>
            {children}
          </span>
        </Popconfirm>
      </span>
    );
  }
}

export default Form.create()(Popinfo);
