import 'antd/lib/table/style';
import _Table from 'antd/lib/table';
import 'antd/lib/alert/style';
import _Alert from 'antd/lib/alert';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';

import { getAuthColumn } from '../tool';
/**
 * 对table组件进行了扩展，增加了权限控制
 */

var TableX = function (_PureComponent) {
  _inherits(TableX, _PureComponent);

  function TableX() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableX);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableX.__proto__ || Object.getPrototypeOf(TableX)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedRowKeys: [],
      totalCallNo: 0
    }, _this.handleRowSelectChange = function (selectedRowKeys, selectedRows) {
      var totalCallNo = selectedRows.reduce(function (sum, val) {
        return sum + parseFloat(val.callNo, 10);
      }, 0);

      if (_this.props.onSelectRow) {
        _this.props.onSelectRow(selectedRows);
      } else {
        _this.handleSelectRows(selectedRows);
      }

      _this.setState({ selectedRowKeys: selectedRowKeys, totalCallNo: totalCallNo });
    }, _this.onPageChange = function (pagination, filters, sorter) {
      var dispatch = _this.props.dispatch;

      var queryData = _extends({}, _this.props.searchItem, {
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order
      });
      var pathname = _this.props.pathname.replace('/', '');
      dispatch({
        type: pathname + '/query',
        payload: queryData
      });
    }, _this.handleSelectRows = function (rows) {
      var dispatch = _this.props.dispatch;

      var data = {
        selectedRows: rows
      };
      var pathname = _this.props.pathname.replace('/', '');
      dispatch({
        type: pathname + '/dosetstate',
        payload: data
      });
    }, _this.cleanSelectedKeys = function () {
      _this.handleRowSelectChange([], []);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableX, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // clean state
      if (nextProps.selectedRows && nextProps.selectedRows.length === 0) {
        this.setState({
          selectedRowKeys: [],
          totalCallNo: 0
        });
      }
    }

    //默认分页处理方法

  }, {
    key: 'render',
    value: function render() {
      // const status = ['关闭', '运行中', '已上线', '异常'];
      var selectedRowKeys = this.state.selectedRowKeys;
      // 进行权限控制

      var columns = getAuthColumn(this.props.columns, this.props.useName);
      var _tableOpts = _extends({
        rowKey: function rowKey(record) {
          return record.id;
        }
      }, this.props, {
        columns: columns
      });
      var _onChange = this.props.onChange ? this.props.onChange : this.onPageChange;

      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            disabled: record.disabled
          };
        }
      };

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          this.props.shwoRows && React.createElement(_Alert, {
            message: React.createElement(
              'div',
              null,
              '\u5DF2\u9009\u62E9 ',
              React.createElement(
                'a',
                { style: { fontWeight: 600 } },
                selectedRowKeys.length
              ),
              ' \u9879\xA0\xA0 ',
              React.createElement(
                'a',
                { onClick: this.cleanSelectedKeys, style: { marginLeft: 24 } },
                '\u6E05\u7A7A'
              )
            ),
            type: 'info',
            showIcon: true
          })
        ),
        React.createElement(_Table, _extends({ size: 'small' }, _tableOpts, { onChange: _onChange, rowSelection: this.props.shwoRows && rowSelection }))
      );
    }
  }]);

  return TableX;
}(PureComponent);

export default TableX;
module.exports = exports['default'];