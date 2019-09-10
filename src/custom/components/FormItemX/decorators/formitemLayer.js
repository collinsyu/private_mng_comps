import React from "react"
import {Form} from 'antd';
import {formItemLayout} from '../../../constants'
const FormItem = Form.Item;


const nestform = () => (WrappedComponent) => {
    return class extends React.Component {
       render() {
        let defaultOpts = {}
        if(this.props.search) {
          if(this.props.formItemLayout) {
            defaultOpts={...this.props.formItemLayout}
          }
        } else {
          let _formItemLayout = formItemLayout;
          if(this.props.formItemLayout) {
            _formItemLayout = this.props.formItemLayout
          }
          defaultOpts = {
            hasFeedback: true,
            ..._formItemLayout
          }
        }
    
        return (
            <FormItem {...defaultOpts} {...this.props}>
                <WrappedComponent {...this.props} />
            </FormItem>
        )
        
       }
    }
}

export default nestform