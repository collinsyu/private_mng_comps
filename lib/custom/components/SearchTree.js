Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _tree = require('antd/lib/tree');

var _tree2 = _interopRequireDefault(_tree);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/input/style');

require('antd/lib/tree/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = _tree2.default.TreeNode;
var Search = _input2.default.Search;

var dataList = [];
var generateList = function generateList(data) {
  for (var i = 0; i < data.length; i++) {
    var node = data[i];
    var key = node.key;
    var path = node.path;
    dataList.push({ key: key, title: key, path: path });
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};

var getParentKey = function getParentKey(key, tree) {
  var parentKey = void 0;
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.children) {
      if (node.children.some(function (item) {
        return item.key === key;
      })) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

var SearchTree = function (_PureComponent) {
  _inherits(SearchTree, _PureComponent);

  function SearchTree() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchTree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchTree.__proto__ || Object.getPrototypeOf(SearchTree)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      treeData: _this.props.treeData
      //注释1.props被改变时调用
      //注释2.通过路由被匹配此组件时调用，so
      //在index组件通过不同/index/${path}来对应到这个list组件
      //list组件会根据path来调用不同的数据
      //修改自身的state
    }, _this.onExpand = function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys,
        autoExpandParent: false
      });
    }, _this.onSelect = function (expandedKeys, e) {
      _this.setState({ expandedKeys: [].concat(_toConsumableArray(_this.state.expandedKeys), _toConsumableArray(expandedKeys)) });
      var nodeInfo = dataList.filter(function (item) {
        return item.key === expandedKeys[0];
      });
      _this.props.onTreeSelect && _this.props.onTreeSelect(nodeInfo[0]);
    }, _this.onChange = function (e) {
      var value = e.target.value;
      var expandedKeys = dataList.map(function (item) {
        if (item.key.indexOf(value) > -1) {
          //return getParentKey(item.key, gData);
          return getParentKey(item.key, _this.state.treeData);
        }
        return null;
      }).filter(function (item, i, self) {
        return item && self.indexOf(item) === i;
      });
      _this.setState({
        expandedKeys: expandedKeys,
        searchValue: value,
        autoExpandParent: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchTree, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ treeData: nextProps.treeData });
      dataList = [];
      generateList(nextProps.treeData);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          searchValue = _state.searchValue,
          expandedKeys = _state.expandedKeys,
          autoExpandParent = _state.autoExpandParent;

      var loop = function loop(data) {
        return data.map(function (item) {
          var index = item.key.indexOf(searchValue);
          var beforeStr = item.key.substr(0, index);
          var afterStr = item.key.substr(index + searchValue.length);
          var title = index > -1 ? _react2.default.createElement(
            'span',
            null,
            beforeStr,
            _react2.default.createElement(
              'span',
              { style: { color: '#f50' } },
              searchValue
            ),
            afterStr
          ) : _react2.default.createElement(
            'span',
            null,
            item.key
          );
          if (item.children) {
            return _react2.default.createElement(
              TreeNode,
              { key: item.key, title: title },
              loop(item.children)
            );
          }
          return _react2.default.createElement(TreeNode, { key: item.key, title: title });
        });
      };
      return _react2.default.createElement(
        'div',
        { style: { background: '#fafafa' } },
        _react2.default.createElement(Search, { style: { marginBottom: 8 }, placeholder: 'Search', onChange: this.onChange }),
        _react2.default.createElement(
          _tree2.default,
          {
            onExpand: this.onExpand,
            expandedKeys: expandedKeys,
            autoExpandParent: autoExpandParent,
            onSelect: this.onSelect
          },
          loop(this.state.treeData)
        )
      );
    }
  }]);

  return SearchTree;
}(_react.PureComponent);

exports.default = SearchTree;
module.exports = exports['default'];