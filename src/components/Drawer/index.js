import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import { Icon} from 'antd'
import QueueAnim from 'rc-queue-anim';
import Debounce from 'lodash-decorators/debounce';






class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <DrawerInner {...this.props}/>,
      this.el,
    );
  }
}
class DrawerInner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      title: this.props.title || '',
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
  }
  @Debounce(400)
  onMouseMove = (e)=>{
    console.warn("监听鼠标移动");
    
    if(this.ishold){
      
      var width = document.body.clientWidth - e.clientX
      if(width>=document.body.clientWidth){
        width = document.body.clientWidth - 100
      }
      this.container.style.width = width + "px";
    }
  }
  onMouseDown = ()=>{
    document.addEventListener("mousemove",this.onMouseMove)
    this.ishold = true; 
    
  }
  onMouseUp = ()=>{
    document.removeEventListener("mousemove",this.onMouseMove)
    this.ishold = false;
    console.warn("up");
    
  }
 
  resize = (width)=>{
    this.setState({width})
  }
  render() {
    var width = this.state.width || this.props.width;
    return (
      <div className={"_yhq_drawer"}>
        <QueueAnim key="drawer" type={['right', 'right']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.props.visible
            ? (
              <div key='absolute' className={"_yhq_absolute"}>
                <div className={"_yhq_masklayer"} onClick={this.props.onCancel}></div>
                <div className={"_yhq_container"} style={{width:width}} ref={container=>this.container = container}>
                  <div className="_yhq_leftborder"
                  onMouseDown={this.onMouseDown}
                  onMouseUp={this.onMouseUp}></div>
                  <div style={{flex:"1 0",width:"100%",overflow:"hidden"}}>
                    <div className={"_yhq_head"}>
                      <span className={"_yhq_title"}>{this.state.title}</span>
                      <Icon onClick={this.props.onCancel} className={"_yhq_close"} type="close"/>

                    </div>
                    <div className={"_yhq_body"} style={{maxHeight: document.body.clientHeight-(this.props.footString?80:40)}}>
                      {this.props.children}
                    </div>
                    {this.props.footString?<div className={"_yhq_foot"}>
                      {this.props.footString}
                    </div>:null}
                  </div>

                </div>
              </div>
            )
            : null}
        </QueueAnim>
        <style>{`
          ._yhq_drawer{
            display:inline-block;
          }
          ._yhq_drawer ._yhq_absolute {
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
            z-index: 99;
          }
          ._yhq_drawer ._yhq_masklayer {
            z-index: 9999;
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
          }
          ._yhq_drawer ._yhq_container {
            display:flex;
            -moz-box-shadow: -1px 0 20px #757474;
            -webkit-box-shadow: -1px 0 20px #757474;
            box-shadow: -1px 0 20px #757474;
            border-left: 1px solid #dedede;
            z-index: 100000;
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 50%;
            background: #fff;
          }
          ._yhq_leftborder{
            width: 3px;
            flex-shrink: 0;
            margin-left: -1.5px;
          }
          ._yhq_leftborder:hover{
            cursor:ew-resize;
          }
          ._yhq_drawer ._yhq_body {
            padding: 20px;
            overflow-y: auto;
          }
          ._yhq_drawer ._yhq_foot {
            position: absolute;
            bottom: 0;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 100%;
            border-top: 1px solid #dedede;
          }
          ._yhq_drawer ._yhq_head  {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #dedede;
          }
          ._yhq_drawer ._yhq_head ._yhq_title {
            padding: 0 10px;
            font-size: large;
            line-height: 40px;
          }
          ._yhq_drawer ._yhq_head ._yhq_close {
            float: right;
            line-height: 40px;
            padding: 0 10px;
            font-size: 22px;
            cursor: pointer;
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
          }
          ._yhq_drawer ._yhq_head ._yhq_close:hover {
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
          }

        `}</style>
      </div>
    );
  }


}

export default Drawer;
