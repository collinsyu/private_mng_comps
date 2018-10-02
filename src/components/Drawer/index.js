import React, { PureComponent } from 'react';
import { Icon} from 'antd'
import QueueAnim from 'rc-queue-anim';
import style from './index.less';

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

  fuckClick(e) {
    e.stopPropagation();
    this.props.onCancel();
  };

  render() {
    return (
      <div className={style.drawer}>
        <QueueAnim key="drawer" type={['right', 'right']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.props.visible
            ? (
              <div key='absolute' className={style.absolute}>
                <div className={style.masklayer} onClick={this.props.onCancel}></div>
                <div className={style.container}>
                  <div className={style.head}>
                    <span className={style.title}>{this.state.title}</span>
                    <Icon onClick={this.props.onCancel} className={style.close} type="cross"/>

                  </div>
                  <div className={style.body} style={{maxHeight: document.body.clientHeight-(this.props.footString?80:40)}}>
                    {this.props.children}
                  </div>
                  {this.props.footString?<div className={style.foot}>
                    {this.props.footString}
                  </div>:null}


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
