Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _alert = require('antd/lib/alert');

var _alert2 = _interopRequireDefault(_alert);

var _divider = require('antd/lib/divider');

var _divider2 = _interopRequireDefault(_divider);

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

require('antd/lib/alert/style');

require('antd/lib/divider/style');

require('antd/lib/badge/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statusMap = ['default', 'processing', 'success', 'error'];

var StandardTable = function (_PureComponent) {
  _inherits(StandardTable, _PureComponent);

  function StandardTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StandardTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StandardTable.__proto__ || Object.getPrototypeOf(StandardTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedRowKeys: [],
      totalCallNo: 0
    }, _this.handleRowSelectChange = function (selectedRowKeys, selectedRows) {
      var totalCallNo = selectedRows.reduce(function (sum, val) {
        return sum + parseFloat(val.callNo, 10);
      }, 0);

      if (_this.props.onSelectRow) {
        _this.props.onSelectRow(selectedRows);
      }

      _this.setState({ selectedRowKeys: selectedRowKeys, totalCallNo: totalCallNo });
    }, _this.handleTableChange = function (pagination, filters, sorter) {
      _this.props.onChange(pagination, filters, sorter);
    }, _this.cleanSelectedKeys = function () {
      _this.handleRowSelectChange([], []);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StandardTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // clean state
      if (nextProps.selectedRows.length === 0) {
        this.setState({
          selectedRowKeys: [],
          totalCallNo: 0
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          selectedRowKeys = _state.selectedRowKeys,
          totalCallNo = _state.totalCallNo;
      var _props = this.props,
          _props$data = _props.data,
          list = _props$data.list,
          pagination = _props$data.pagination,
          loading = _props.loading;


      var status = ['关闭', '运行中', '已上线', '异常'];

      var columns = [{
        title: '规则编号',
        dataIndex: 'no'
      }, {
        title: '描述',
        dataIndex: 'description'
      }, {
        title: '服务调用次数',
        dataIndex: 'callNo',
        sorter: true,
        align: 'right',
        render: function render(val) {
          return val + ' \u4E07';
        }
      }, {
        title: '状态',
        dataIndex: 'status',
        filters: [{
          text: status[0],
          value: 0
        }, {
          text: status[1],
          value: 1
        }, {
          text: status[2],
          value: 2
        }, {
          text: status[3],
          value: 3
        }],
        render: function render(val) {
          return _react2.default.createElement(_badge2.default, { status: statusMap[val], text: status[val] });
        }
      }, {
        title: '更新时间',
        dataIndex: 'updatedAt',
        sorter: true,
        render: function render(val) {
          return _react2.default.createElement(
            'span',
            null,
            (0, _moment2.default)(val).format('YYYY-MM-DD HH:mm:ss')
          );
        }
      }, {
        title: '操作',
        render: function render() {
          return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'a',
              { href: '' },
              '\u914D\u7F6E'
            ),
            _react2.default.createElement(_divider2.default, { type: 'vertical' }),
            _react2.default.createElement(
              'a',
              { href: '' },
              '\u8BA2\u9605\u8B66\u62A5'
            )
          );
        }
      }];

      var paginationProps = _extends({
        showSizeChanger: true,
        showQuickJumper: true
      }, pagination);

      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            disabled: record.disabled
          };
        }
      };

      return _react2.default.createElement(
        'div',
        { className: _index2.default.standardTable },
        _react2.default.createElement(
          'div',
          { className: _index2.default.tableAlert },
          _react2.default.createElement(_alert2.default, {
            message: _react2.default.createElement(
              'div',
              null,
              '\u5DF2\u9009\u62E9 ',
              _react2.default.createElement(
                'a',
                { style: { fontWeight: 600 } },
                selectedRowKeys.length
              ),
              ' \u9879\xA0\xA0 \u670D\u52A1\u8C03\u7528\u603B\u8BA1 ',
              _react2.default.createElement(
                'span',
                { style: { fontWeight: 600 } },
                totalCallNo
              ),
              ' \u4E07',
              _react2.default.createElement(
                'a',
                { onClick: this.cleanSelectedKeys, style: { marginLeft: 24 } },
                '\u6E05\u7A7A'
              )
            ),
            type: 'info',
            showIcon: true
          })
        ),
        _react2.default.createElement(_table2.default, {
          loading: loading,
          rowKey: function rowKey(record) {
            return record.key;
          },
          rowSelection: rowSelection,
          dataSource: list,
          columns: columns,
          pagination: paginationProps,
          onChange: this.handleTableChange
        })
      );
    }
  }]);

  return StandardTable;
}(_react.PureComponent);

exports.default = StandardTable;
module.exports = exports['default'];