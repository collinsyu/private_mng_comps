import * as React from 'react';
import { Button } from "antd";
export interface NewButtonProps { 
  [key: string]: any;    
}

export default class NewButton extends React.PureComponent<NewButtonProps, {}>{
    constructor(props: Readonly<NewButtonProps>){
        super(props)
    }
    render(){
        return (
            <Button {...this.props}>{this.props.children}</Button>
        )
    }
}