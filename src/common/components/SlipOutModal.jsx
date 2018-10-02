import React, {Component} from 'react';
import { Icon } from 'antd'
import QueueAnim from 'rc-queue-anim';

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
              <div key='adb' className={"_yhq_absolute"}>
                <div className={"masklayer"} onClick={this.props.onCancel}></div>
                <div className={"_yhq_container"}>
                  <div className={"_yhq_head"}>
                    <span className={"_yqh_title"}>{this.state.title}</span>
                    <Icon onClick={this.props.onCancel} className={"close"} type="cross"/>
                  </div>
                  <div className={"_yhq_body"} style={{maxHeight: document.body.clientHeight-80}}>
                    {this.props.children}
                  </div>
                  <div className={"_yhq_foot"}>
                    {this.state.footString}
                  </div>
                </div>
              </div>
            )
            : null}
          <style>{`

            ._yhq_absolute {
            	position: fixed;
            	top: 0;
            	right: 0;
            	height: 100%;
            	width: 100%;
            	z-index: 99;
            }

            ._yhq_absolute .masklayer {
            	z-index: 9999;
            	position: fixed;
            	top: 0;
            	right: 0;
            	height: 100%;
            	width: 100%;
            }

            ._yhq_absolute ._yhq_container {
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

            ._yhq_absolute ._yhq_head {
              height: 40px;
            	line-height: 40px;
            	border-bottom: 1px solid #dedede;

            }
            ._yhq_absolute ._yhq_head ._yqh_title {
              padding: 0 10px;
              font-size: large;
              line-height: 40px;
              float: left;
            }
            ._yhq_absolute ._yhq_head .close {
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
            ._yhq_absolute ._yhq_head .close:hover {
              transform: rotate(180deg);
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
            }

            ._yhq_absolute ._yhq_body {
            	padding: 20px;
            	overflow-y: auto;
            }

            ._yhq_absolute ._yhq_foot {
            	position: absolute;
            	bottom: 0;
            	height: 40px;
            	line-height: 40px;
            	text-align: center;
            	width: 100%;
            	border-top: 1px solid #dedede;
            }

          `}</style>
        </QueueAnim>
    );
  }
};

export default SlipOutModal;
