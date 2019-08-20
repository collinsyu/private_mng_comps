Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _alert = require('antd/lib/alert');

var _alert2 = _interopRequireDefault(_alert);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

require('antd/lib/alert/style');

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tool = require('../tool');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactResizable = require('react-resizable');

var _Ellipsis = require('../../components/Ellipsis');

var _Ellipsis2 = _interopRequireDefault(_Ellipsis);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import DbclickCopySpan from "./DbclickCopySpan";


var ResizeableTitle = function ResizeableTitle(props) {
  var onResize = props.onResize,
      width = props.width,
      restProps = _objectWithoutProperties(props, ['onResize', 'width']);

  if (!width) {
    return _react2.default.createElement('th', restProps);
  }

  return _react2.default.createElement(
    _reactResizable.Resizable,
    {
      width: width,
      height: 0,
      onResize: onResize,
      draggableOpts: { enableUserSelectHack: false }
    },
    _react2.default.createElement('th', restProps)
  );
};

/**
 * 对table组件进行了扩展，增加了权限控制
 */

var TableX = function (_PureComponent) {
  _inherits(TableX, _PureComponent);

  function TableX() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, TableX);

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
    }, _this.modifyC = function (columns) {
      // console.log(columns);
      var _bbb = _lodash2.default.cloneDeep(columns);
      // console.info(_bbb);;;
      _bbb.map(function (dou, _ii) {
        // NOTE: 添加copied属性
        var _formatDom_fn = dou.render;
        // NOTE: 添加省略属性
        if (dou.omitLength) {
          if (dou.omitText) {
            return _formatDom_fn = function _formatDom_fn(text) {
              return _react2.default.createElement(
                _Ellipsis2.default,
                { length: dou.omitLength, tooltip: true },
                dou.omitText
              );
            };
          }
          if (dou.render) {
            console.error("使用该属性不支持使用render 方法，请设置omitText属性");
          }
          _formatDom_fn = function _formatDom_fn(text) {
            return _react2.default.createElement(
              _Ellipsis2.default,
              { length: dou.omitLength, tooltip: true },
              text
            );
          };
        }
        // NOTE: 复制模式
        if (dou.copyText !== undefined) {
          var _render = _formatDom_fn ? _formatDom_fn : dou.render;
          if (_render) {
            _formatDom_fn = function _formatDom_fn(t, r) {
              var _t = dou.copyText;
              if (r[_t] !== undefined) {
                _t = r[_t];
              };
              return _react2.default.createElement(
                _reactCopyToClipboard.CopyToClipboard,
                { text: _t },
                _react2.default.createElement(
                  'span',
                  { style: { cursor: "pointer" }, onClick: function onClick() {
                      _message3.default.success("copy succed");
                    } },
                  _render.apply(undefined, arguments)
                )
              );
            };
          } else {
            _formatDom_fn = function _formatDom_fn(text, r) {
              var _t = dou.copyText;
              if (r[_t] !== undefined) {
                _t = r[_t];
              };
              return _react2.default.createElement(
                _reactCopyToClipboard.CopyToClipboard,
                { text: _t },
                _react2.default.createElement(
                  'span',
                  { style: { cursor: "pointer" }, onClick: function onClick() {
                      _message3.default.success("copy succed");
                    } },
                  text
                )
              );
            };
          }
        }
        dou.render = _formatDom_fn;
      });
      // NOTE: 2019-08-20 12:38:27 如果是最后一列，那么没有单独设置fixed=false的话，就默认fixed
      var _last = _bbb[_bbb.length - 1];
      if (_last.fixed == undefined) {
        _last.fixed = "right";
      }
      return _bbb;
    }, _this.handleResize = function (index) {
      return function (e, _ref2) {
        var size = _ref2.size;

        _this.setState(function (_ref3) {
          var columns = _ref3.columns;

          var nextColumns = [].concat(_toConsumableArray(columns));
          nextColumns[index] = _extends({}, nextColumns[index], {
            width: size.width
          });
          return { columns: nextColumns };
        });
      };
    }, _this.components = {
      header: {
        cell: ResizeableTitle
      }
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
      var _this2 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      // 进行权限控制

      var columns = (0, _tool.getAuthColumn)(this.props.columns, this.props.useName);

      // NOTE: 修饰columns
      var _columns = this.modifyC(columns);
      _columns = _columns.map(function (col, index) {
        return _extends({}, col, {
          onHeaderCell: function onHeaderCell(column) {
            return {
              width: column.width,
              onResize: _this2.handleResize(index)
            };
          }
        });
      });

      var _tableOpts = _extends({
        rowKey: function rowKey(record) {
          return record.id;
        }
      }, this.props, {
        columns: _columns
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

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          this.props.shwoRows && _react2.default.createElement(_alert2.default, {
            message: _react2.default.createElement(
              'div',
              null,
              '\u5DF2\u9009\u62E9aaaa ',
              _react2.default.createElement(
                'a',
                { style: { fontWeight: 600 } },
                selectedRowKeys.length
              ),
              ' \u9879\xA0\xA0 ',
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
        _react2.default.createElement(_table2.default, _extends({ size: 'small',
          scroll: { x: 'max-content' }
        }, _tableOpts, {
          onChange: _onChange,
          rowSelection: this.props.shwoRows && rowSelection,
          components: this.components
        }))
      );
    }
  }]);

  return TableX;
}(_react.PureComponent);

exports.default = TableX;
module.exports = exports['default'];