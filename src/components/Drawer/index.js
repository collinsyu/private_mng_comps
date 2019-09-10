import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import { Icon ,Drawer as DDrawer} from 'antd'
import QueueAnim from 'rc-queue-anim';
import Debounce from 'lodash-decorators/debounce';
// import style from "./index.less"





class Drawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      // footString: this.props.footString || '',
      buttonLabel: this.props.buttonLabel || '',
      width:0,
    };
    this.ishold = false;
  };
 
  componentDidMount = ()=>{
  }

  componentWillUnmount = ()=>{
    document.removeEventListener("mousemove",this.onMouseMove)
    document.removeEventListener("mouseup",this.onMouseUp)
  }
  @Debounce(400)
  onMouseMove = (e)=>{
    console.warn("监听鼠标移动");
    
    if(this.ishold){
      
      var width = document.body.clientWidth - e.clientX
      if(width>=document.body.clientWidth){
        width = document.body.clientWidth - 100
      }
      this.resize(width + "px")
      // this.container.style.width = width + "px";
    }
  }
  onMouseDown = ()=>{
    document.addEventListener("mousemove",this.onMouseMove)
    this.ishold = true; 
    document.addEventListener("mouseup",this.onMouseUp)
  }
  onMouseUp = ()=>{
    document.removeEventListener("mousemove",this.onMouseMove)
    document.removeEventListener("mouseup",this.onMouseUp)

    this.ishold = false;
    console.warn("up");
    
  }
 
  resize = (width)=>{
    this.setState({width})
  }
  render() {
    var width = this.state.width || this.props.width || "50%" ;
    return (

      <DDrawer
        width={width}
        closable
        title={this.props.title}
        placement="right"
        closable={false}
        onClose={this.props.onCancel}
        visible={this.props.visible}
        // className={style.outcontainer}
        bodyStyle={{padding:0}}
      >
        <div style={{display:"flex"}}>
          <div className={"_yhq_leftborder"} onMouseDown={this.onMouseDown}></div>
          <div style={{flex:"1 0",width:"100%",padding:24}}>{this.props.children}</div>
        </div>
        <style>{`
        ._yhq_leftborder{
          width: 3px;
          flex-shrink: 0;
          margin-left: -1.5px;
          position: absolute;
          left: 0;
          height: 100%;
        }
        ._yhq_leftborder:hover{
          cursor:ew-resize;
        }
        `}</style>
      </DDrawer>
      
    );
  }


}

export default Drawer;
