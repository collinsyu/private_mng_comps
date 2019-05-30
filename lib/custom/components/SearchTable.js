Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

require('antd/lib/form/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tool = require('../tool');

var _request = require('../../utils/request');

var _components = require('../components');

var _queryTool = require('../../utils/queryTool');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 对table组件进行了扩展，增加了权限控制
 * 带查询与分页，应用在小的空间内使用表格
 */
var SearchTable = function (_Component) {
  _inherits(SearchTable, _Component);

  function SearchTable(props) {
    _classCallCheck(this, SearchTable);

    var _this = _possibleConstructorReturn(this, (SearchTable.__proto__ || Object.getPrototypeOf(SearchTable)).call(this, props));

    _this.onPageChange = function (pagination, filters, sorter) {
      var query = (0, _queryTool.filterQueryData)(_this.props.form.getFieldsValue());
      var queryData = _extends({}, query, {
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order
      }, _this.props.params);
      _this.getTableData(queryData);
    };

    _this.handleSubmit = function (_, _1, v) {
      var values = v;
      if (!values) {
        values = _this.props.form.getFieldsValue();
      }
      _this.getTableData((0, _queryTool.filterQueryData)(values));
    };

    _this.handleChange = function (name, value) {
      var values = _this.props.form.getFieldsValue();
      values[name] = value;
      _this.handleSubmit('', '', values);
    };

    _this.state = {
      dataSource: [],
      pagination: {}
    };
    return _this;
  }

  _createClass(SearchTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //组件出现前 就是dom还没有渲染到html文档里面，执行页面数据请求
      var data = _extends({}, this.props.params);
      this.getTableData(data);
    }
  }, {
    key: 'getTableData',
    value: function getTableData(params) {
      var _this2 = this;

      (0, _request.query)(this.props.path, params).then(function (data) {
        if (data && data.data.success) {
          //如果data不为空，执行querySuccess 方法更新state
          var p = {
            total: data.data.data.totalCount,
            current: data.data.data.pageNo,
            pageSize: data.data.data.pageSize
          };
          _this2.setState({ dataSource: data.data.data.result, pagination: p });
        }
      });
    }

    //默认分页处理方法


    //数据验证成功后回调事件

  }, {
    key: 'render',
    value: function render() {
      var itemOpts = {
        getFieldDecorator: this.props.form.getFieldDecorator,
        formItem: {},
        typeOpts: {
          style: { width: 120 },
          all: true,
          data: this.props.newData
        },
        search: true,
        onChange: this.handleChange

        // 进行权限控制
      };var columns = (0, _tool.getAuthColumn)(this.props.columns, this.props.useName);
      var _tableOpts = _extends({
        rowKey: function rowKey(record) {
          return record.id;
        },
        dataSource: this.state.dataSource,
        pagination: this.state.pagination
      }, this.props, {
        columns: columns
      });
      var _onChange = this.props.onChange ? this.props.onChange : this.onPageChange;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _form2.default,
          { layout: 'inline', onSubmit: this.handleSubmit },
          this.props.formitem && this.props.formitem.map(function (item) {
            return _react2.default.createElement(_components.FormItemX, _extends({ key: item.name }, item, itemOpts));
          }),
          _react2.default.createElement(
            _button2.default,
            { style: {
                marginRight: '10px'
              }, type: 'primary', htmlType: 'submit' },
            '\u641C\u7D22'
          )
        ),
        _react2.default.createElement(_table2.default, _extends({}, _tableOpts, { onChange: _onChange }))
      );
    }
  }]);

  return SearchTable;
}(_react.Component);

exports.default = _form2.default.create()(SearchTable);
module.exports = exports['default'];