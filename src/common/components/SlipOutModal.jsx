import React, {Component} from 'react';
import { Icon } from 'antd'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import style from './SlipOutModal.less'

class SlipOutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      title: this.props.title || '',
      footString: this.props.footString || '',
      buttonLabel: this.props.buttonLabel || ''
    };

  };

  componentWillMount() {
    // var _self= this;
    document.onmousedown = function(e) {
      //console.log(e);
      if (e.target.className.indexOf('absolute') !== -1) {
        //console.log("不等于-1");
      }
    };
  };
  fuckClick(e) {
    //console.log(e);
    e.stopPropagation();
    this.props.onCancel();
    //this.setState({visible: false})
    // var _self= this;
    // document.onmousedown = function(e){
    // 	console.log(e);
    // 	if(e.target.className.indexOf('absolute') !==-1){
    // 		console.log("不等于-1");
    // 		 _self.setState({visible:false,})
    // 	}
    // };
  };

  render() {
    return (
        <QueueAnim key="demo" type={['right', 'right']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.props.visible
            ? (
              <div key='adb' className={style.absolute}>
                <div className={style.masklayer} onClick={this.props.onCancel}></div>
                <div className={style.container}>
                  <div className={style.head}>
                    <span className={style.title}>{this.state.title}</span>
                    <Icon onClick={this.props.onCancel} className={style.close} type="cross"/>
                  </div>
                  <div className={style.body} style={{maxHeight: document.body.clientHeight-80}}>
                    {this.props.children}
                  </div>
                  <div className={style.foot}>
                    {this.state.footString}
                  </div>
                </div>
              </div>
            )
            : null}
        </QueueAnim>
    );
  }
};

export default SlipOutModal;
