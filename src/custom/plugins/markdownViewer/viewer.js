import React from 'React'
import {
    Icon,
    Breadcrumb,
    Menu,
    Button,
    Dropdown,
    Badge,
    Tooltip
} from 'antd';
import marked from  './tide-marked';
import Moment from "moment";

class Viewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // markedDom: ""
        };
    }
    componentDidMount() {}
    render() {
        const {source="",metaInfo} = this.props;
        var domValue = marked(source);


        return (
            <div className="main-wrapper-doc-article">
                <div className="doc-article">
                    <article className="doc-article-inner">
                        {/* <h1 className="typo-title">{articleInfo.title}</h1> */}
                        <div className="typo typo-github" dangerouslySetInnerHTML={{
                            __html: domValue
                        }} id="J-doc"/>
                    </article>
                    {metaInfo?
                      <div className="meta clearfix">
                        <div className="meta-left">
                          <div className="meta-item">
                            <div className="item">
                              <Tooltip placement="top" title="阅读数">
                                <Icon type="eye-o" />
                              </Tooltip>

                              <span className="item-text">{metaInfo.hits}</span>
                            </div>
                          </div>
                          <div className="meta-item">
                            <span className="item">
                              <Tooltip placement="top" title="更新时间">
                                <Icon type="clock-circle-o" />
                              </Tooltip>
                              <Tooltip placement="top" title={Moment(new Date(metaInfo?metaInfo.updateAt:"")).format('YYYY-MM-DD HH:mm:ss')}>
                                <span className="item-text">{Moment(new Date(metaInfo?metaInfo.updateAt:"")).locale('en').fromNow()}</span>
                              </Tooltip>
                            </span>
                          </div>
                          <div className="meta-item meta-item-last">
                            <span className="item">
                              <Tooltip placement="top" title="作者">
                                <Icon type="user" />
                              </Tooltip>
                              <span className="item-text">
                                <span>{metaInfo.name}</span>
                            </span>
                          </span>
                        </div>
                      </div>

                    </div>

                    :null}
                </div>
            </div>
        );
    }
}
export default Viewer
