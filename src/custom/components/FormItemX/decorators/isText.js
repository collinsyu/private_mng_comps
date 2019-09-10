import React from "react"
import {getAuthFormItem} from '../../../tool';


const ishide = () => (WrappedComponent) => {
    return class extends React.PureComponent {
        renderInitValueToText = (_intValue)=>{
            // debugger
            var {name,type,newData} = this.props;
            if(type === "selectx"||type === "select"||type === "selectx"){
                if(!newData){
                return _intValue
                }
                if(!newData[name]){
                return _intValue
                }
                // 获取汉字
                var _obj = _.find(newData[name],(o)=>(o.value === _intValue))||{};
                return _obj.name|| _intValue;
        
            }
            return _intValue
    
        }
       render() {

        const { modifyText=false ,modalType,_intValue} = this.props;
   
        let isText = this.props.type==='text';
        if(modalType === 'update') {
            isText =  modifyText;
        };
        if(isText&&_intValue) {
            return this.renderInitValueToText(_intValue)
        }
        return <WrappedComponent {...this.props} />
       }
    }
}
export default ishide;