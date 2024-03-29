import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import { Icon} from 'antd'
import QueueAnim from 'rc-queue-anim';
import Debounce from 'lodash-decorators/debounce';
import style from "./index.less"





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
      <div className={style._yhq_drawer}>
        <QueueAnim key="drawer" type={['right', 'right']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.props.visible
            ? (
              <div key='absolute' className={style._yhq_absolute}>
                <div className={style._yhq_masklayer} onClick={this.props.onCancel}></div>
                <div className={style._yhq_container} style={{width:width}} ref={container=>this.container = container}>
                  <div className={style._yhq_container_wrap}>
                    <div className={style._yhq_container_wrap_body}>


                    {/* <div 
                    className={style._yhq_leftborder}
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}>

                    </div> */}
                    {/* <div style={{flex:"1 0",width:"100%",overflow:"hidden"}}> */}
                      <div className={style._yhq_head}>
                        <span className={style._yhq_title}>{this.state.title}</span>
                        <Icon onClick={this.props.onCancel} className={style._yhq_close} type="close"/>

                      </div>
                      <div className={style._yhq_body} 
                      // style={{maxHeight: document.body.clientHeight-(this.props.footString?80:40)}}
                      >
                        {this.props.children}
                      </div>
                      {this.props.footString?<div className={style._yhq_foot}>
                        {this.props.footString}
                      </div>:null}
                    {/* </div> */}




                    </div>

                    

                    
                  </div>

                </div>
              </div>
            )
            : null}
        </QueueAnim>
        
      </div>
    );
  }


}

export default Drawer;
