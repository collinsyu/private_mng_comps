import React, { PureComponent } from 'react';
import { Icon} from 'antd'
import QueueAnim from 'rc-queue-anim';

class Drawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      title: this.props.title || '',
      // footString: this.props.footString || '',
      buttonLabel: this.props.buttonLabel || ''
    };
  };

  render() {
    return (
      <div className={"_yhq_drawer"}>
        <QueueAnim key="drawer" type={['right', 'right']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.props.visible
            ? (
              <div key='absolute' className={"_yhq_absolute"}>
                <div className={"_yhq_masklayer"} onClick={this.props.onCancel}></div>
                <div className={"_yhq_container"}>
                  <div className={"_yhq_head"}>
                    <span className={"_yhq_title"}>{this.state.title}</span>
                    <Icon onClick={this.props.onCancel} className={"_yhq_close"} type="cross"/>

                  </div>
                  <div className={"_yhq_body"} style={{maxHeight: document.body.clientHeight-(this.props.footString?80:40)}}>
                    {this.props.children}
                  </div>
                  {this.props.footString?<div className={"_yhq_foot"}>
                    {this.props.footString}
                  </div>:null}


                </div>
              </div>
            )
            : null}
        </QueueAnim>
        <style>{`

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
