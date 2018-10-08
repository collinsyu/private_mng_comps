import React, { PureComponent } from 'react';
import { Tree, Input } from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

let dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    const path = node.path;
    dataList.push({ key, title: key, path});
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

class SearchTree extends PureComponent {
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
    treeData:this.props.treeData
  }
  //注释1.props被改变时调用
    //注释2.通过路由被匹配此组件时调用，so
    //在index组件通过不同/index/${path}来对应到这个list组件
    //list组件会根据path来调用不同的数据
    //修改自身的state
  componentWillReceiveProps(nextProps){
    this.setState({treeData:nextProps.treeData});
    dataList = [];
    generateList(nextProps.treeData);
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  onSelect = (expandedKeys,e) => {
    this.setState({expandedKeys:[...this.state.expandedKeys,...expandedKeys]});
    const nodeInfo = dataList.filter((item)=> item.key === expandedKeys[0]);
    this.props.onTreeSelect && this.props.onTreeSelect(nodeInfo[0]);
  }
  onChange = (e) => {
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => {
      if (item.key.indexOf(value) > -1) {
        //return getParentKey(item.key, gData);
        return getParentKey(item.key, this.state.treeData);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }
  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data => data.map((item) => {
      const index = item.key.indexOf(searchValue);
      const beforeStr = item.key.substr(0, index);
      const afterStr = item.key.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.key}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={title} />;
    });
    return (
      <div style={{background:'#fafafa'}}>
        <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
        <Tree
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onSelect={this.onSelect}
        >
          {loop(this.state.treeData)}
        </Tree>
      </div>
    );
  }
}

export default SearchTree;
