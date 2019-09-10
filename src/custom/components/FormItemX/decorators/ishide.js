import React from "react"
import {getAuthFormItem} from '../../../tool';


const ishide = () => (WrappedComponent) => {
    return class extends React.PureComponent {
       render() {
        const { modifyDisplay = true } = this.props;

        let display = getAuthFormItem(this.props.name,this.props.useName);
        if(display) {
          if(this.props.modalType === 'update') {
            display =  modifyDisplay;
          }
        }
        if(display){
            return <WrappedComponent {...this.props} />
        }
        return <span style={{display:"none"}}>hide formitem with name {this.props.name}</span>
       }
    }
}
export default ishide;