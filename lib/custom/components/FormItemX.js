Object.defineProperty(exports, "__esModule", {
  value: true
});

var _treeSelect = require('antd/lib/tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/tree-select/style');

require('antd/lib/upload/style');

require('antd/lib/button/style');

require('antd/lib/icon/style');

require('antd/lib/date-picker/style');

require('antd/lib/input-number/style');

require('antd/lib/form/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectX = require('./SelectX');

var _SelectX2 = _interopRequireDefault(_SelectX);

var _CheckboxX = require('./CheckboxX');

var _CheckboxX2 = _interopRequireDefault(_CheckboxX);

var _RadioX = require('./RadioX');

var _RadioX2 = _interopRequireDefault(_RadioX);

var _RangePickerX = require('./RangePickerX');

var _RangePickerX2 = _interopRequireDefault(_RangePickerX);

var _constants = require('../constants');

var _tool = require('../tool');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _UploadImageX = require('./UploadImageX');

var _UploadImageX2 = _interopRequireDefault(_UploadImageX);

var _request = require('../../utils/request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _input2.default.TextArea;

var FormItem = _form2.default.Item;

var FormItemX = function (_Component) {
  _inherits(FormItemX, _Component);

  function FormItemX() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormItemX);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormItemX.__proto__ || Object.getPrototypeOf(FormItemX)).call.apply(_ref, [this].concat(args))), _this), _this.getRules = function () {
      var rules = [];
      if (_this.props.required) {
        rules.push({
          required: true,
          message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684' + _this.props.label
        });
      }
      if (_this.props.rules) {
        // 合并
        rules = rules.concat(_this.props.rules);
      }
      if (_this.props.ruleType) {
        var ruleList = [];
        if (_this.props.ruleType instanceof Array) {
          ruleList = _this.props.ruleType;
        } else {
          ruleList.push(_this.props.ruleType);
        }
        ruleList.map(function (rule) {
          switch (rule) {
            case 'email':
              rules.push({
                type: 'email',
                message: '请输入正确的邮箱地址！'
              });
              break;
            case 'mobile':
              var mobileRegex = '^[1][3,4,5,6,7,8,9][0-9]{9}$';
              rules.push({
                pattern: new RegExp(mobileRegex),
                message: '请输入正确的手机号码！'
              });
              break;
            case 'phone':
              var phoneRegex = '^[1][3,4,5,7,8][0-9]{9}$';
              rules.push({
                pattern: new RegExp(phoneRegex),
                message: '请输入正确的手机号码！'
              });
              break;
            default:
          }
          return '';
        });
      }

      if (_this.props.exists) {
        rules.push({
          validator: _this.handleFieldExists,
          message: '呃，你输入的内容已存在，请重新输入！'
        });
      }

      return rules;
    }, _this.handleFieldExists = function (rule, value, callback) {
      if (_this.props.modalType !== 'create') {
        if (_this.props.formItem[rule.field] === value) {
          callback();
          return;
        }
      }

      if (!value) {
        callback();
      } else {
        var reqData = {
          fieldName: _this.props.name,
          value: value
        };
        (0, _request.query)(_this.props.pathname + '/exists', reqData).then(function (data) {
          if (data && !data.data.success) {
            callback(data.data.resultView);
          } else {
            if (data.data.exist) {
              callback("1");
            } else {
              callback();
            }
          }
        });
      }
    }, _this.transformSelectX = function (props) {
      //debugger
      // const obj2 = {...obj1}; 属于对象浅拷贝
      // let opts = {...props.typeOpts};
      var opts = JSON.parse(JSON.stringify(props.typeOpts));

      if (_this.props.modalType === 'update') {
        var _this$props$modifyDis = _this.props.modifyDisabled,
            modifyDisabled = _this$props$modifyDis === undefined ? false : _this$props$modifyDis;

        if (modifyDisabled) {
          // debugger
          opts.disabled = true;
        }
      }

      if (!props.typeOpts['typeName']) {
        opts.typeName = _this.props.name;
      }
      if (props.dataName) {
        opts.typeName = props.dataName;
      }
      if (props.mode) {
        opts.mode = props.mode;
      }
      // debugger;
      var placeholder = '\u8BF7\u9009\u62E9' + props.label;
      return _react2.default.createElement(_SelectX2.default, _extends({}, opts, { placeholder: placeholder, onSelect: function onSelect(value) {
          return props.onChange && props.onChange(props.name, value);
        }, onBlur: function onBlur(value) {
          return props.onBlur && props.onBlur(props.name, value);
        } }));
    }, _this.transformRangePickerX = function (props) {
      // const obj2 = {...obj1}; 属于对象浅拷贝
      var opts = _extends({}, props.typeOpts);
      if (_this.props.search) {
        opts = _extends({}, props.typeOpts, { style: { width: 210 } });
      }
      return _react2.default.createElement(_RangePickerX2.default, _extends({}, opts, { onChange: function onChange(value) {
          return props.onChange && props.onChange(props.name, value);
        } }));
    }, _this.getFormItem = function () {
      var type = _this.props.type;
      if (!type) {
        //设置默认值
        type = 'input';
      }
      var typeOpts = JSON.parse(JSON.stringify(_this.props.typeOpts));
      if (!typeOpts) {
        typeOpts = {};
      }

      var placeholder = '\u8BF7\u8F93\u5165' + _this.props.label;
      if (_this.props.placeholder) {
        placeholder = _this.props.placeholder;
      }
      switch (type) {
        case 'input':
          var itOpts = _extends({}, typeOpts);
          delete itOpts.all;
          delete itOpts.typeName;
          return _react2.default.createElement(_input2.default, _extends({}, itOpts, { placeholder: placeholder }));

        case 'select':
          var stOpts = _extends({}, typeOpts);
          delete stOpts.all;
          delete stOpts.typeName;
          placeholder = '\u8BF7\u9009\u62E9' + _this.props.label;
          return _react2.default.createElement(_input2.default, _extends({}, stOpts, { placeholder: placeholder, onBlur: function onBlur(value) {
              return _this.props.onBlur && _this.props.onBlur(_this.props.name, value.target.value);
            }, onChange: function onChange(value) {
              return _this.props.onChange && _this.props.onChange(_this.props.name, value.target.value);
            } }));

        case 'selectx':
          return _this.transformSelectX(_this.props);
        case 'number':
          var inOpts = _extends({}, typeOpts);
          delete inOpts.all;
          delete inOpts.typeName;
          placeholder = '\u8BF7\u8F93\u5165' + _this.props.label;
          return _react2.default.createElement(_inputNumber2.default, _extends({}, inOpts, { placeholder: placeholder }));
        case 'checkboxx':
          placeholder = '\u8BF7\u9009\u62E9' + _this.props.label;
          typeOpts.typeName = _this.props.name;
          return _react2.default.createElement(_CheckboxX2.default, _extends({}, typeOpts, { onChange: function onChange(value) {
              return _this.props.onChange && _this.props.onChange(_this.props.name, value);
            } }));
        case 'radiox':
          placeholder = '\u8BF7\u9009\u62E9' + _this.props.label;
          typeOpts.typeName = _this.props.name;
          return _react2.default.createElement(_RadioX2.default, _extends({}, typeOpts, { onChange: function onChange(value) {
              return _this.props.onChange && _this.props.onChange(_this.props.name, value.target.value);
            } }));
        case 'rangepickerx':
          return _this.transformRangePickerX(_this.props);
        case 'datepicker':
          return _react2.default.createElement(_datePicker2.default, _extends({}, typeOpts, { placeholder: placeholder }));
        case 'textarea':
          var rows = _this.props.rows;

          return _react2.default.createElement(TextArea, { rows: rows, placeholder: placeholder });
        case 'upload':
          var uploadFileprops = _extends({
            action: window.path + 'upload',
            multiple: false,
            onChange: _this.props.uploadCallbak,
            data: { type: _this.props.uploadType },
            showUploadList: false,
            accept: ''
          }, _this.props.uploadProps);
          return _react2.default.createElement(
            _upload2.default,
            uploadFileprops,
            _react2.default.createElement(
              _button2.default,
              { type: 'ghost' },
              _react2.default.createElement(_icon2.default, { type: 'upload' }),
              '\u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6'
            )
          );
        case 'treeselect':
          var treeData = [];
          var _this$props$typeOpts$ = _this.props.typeOpts.data,
              data = _this$props$typeOpts$ === undefined ? {} : _this$props$typeOpts$;

          if (data[_this.props.name] instanceof Array) {
            treeData = data[_this.props.name];
          }
          var treeProps = _extends({
            dropdownStyle: { maxHeight: 400, overflow: 'auto' },
            treeData: treeData,
            allowClear: true,
            placeholder: placeholder
          }, _this.props.treeProps);
          return _react2.default.createElement(_treeSelect2.default, _extends({ showSearch: true, treeNodeFilterProp: 'pinyin' }, treeProps, { onChange: function onChange(value) {
              return _this.props.onChange && _this.props.onChange(_this.props.name, value);
            } }));

        case 'uploadimagex':
          var uiOpts = _extends({}, typeOpts);
          delete uiOpts.all;
          delete uiOpts.typeName;
          return _react2.default.createElement(_UploadImageX2.default, uiOpts);

        case 'null':
          return [];
          break;
        default:
          var ooOpts = _extends({}, typeOpts);
          delete ooOpts.all;
          delete ooOpts.typeName;
          if (_this.props.modalType === 'update') {
            var _this$props$modifyDis2 = _this.props.modifyDisabled,
                modifyDisabled = _this$props$modifyDis2 === undefined ? false : _this$props$modifyDis2;

            if (modifyDisabled) {
              ooOpts.disabled = true;
            }
          }

          return _react2.default.createElement(_input2.default, _extends({}, ooOpts, { placeholder: placeholder, onBlur: function onBlur(value) {
              return _this.props.onBlur && _this.props.onBlur(_this.props.name, value.target.value);
            }, onChange: function onChange(value) {
              return _this.props.onChange && _this.props.onChange(_this.props.name, value.target.value);
            }, onKeyUp: function onKeyUp(value) {
              return _this.props.onKeyUp && _this.props.onKeyUp(_this.props.name, value.target.value);
            } }));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  //获取校验规则


  _createClass(FormItemX, [{
    key: 'render',
    value: function render() {
      var initValue = this.props.initValue;
      var formItem = this.props.formItem;
      if (this.props.modalType === 'create') {
        if (this.props.newData['initData']) {
          formItem = this.props.newData['initData'];
        }
      }

      if (initValue === undefined && formItem) {
        //从item中取
        initValue = formItem[this.props.name];
      }
      // 时间类型的需要处理
      if (this.props.type === 'rangepickerx') {
        var rangePickerData = [];
        if (formItem) {
          if (formItem[this.props.start] && formItem[this.props.end]) {
            rangePickerData.push((0, _moment2.default)(formItem[this.props.start], 'YYYY-MM-DD'));
            rangePickerData.push((0, _moment2.default)(formItem[this.props.end], 'YYYY-MM-DD'));
          }
        }

        initValue = rangePickerData;
      }

      if (this.props.type === 'datepicker') {
        if (formItem[this.props.name]) {
          initValue = (0, _moment2.default)(formItem[this.props.name], 'YYYY-MM-DD');
        }
      }

      var defaultOpts = {};
      if (this.props.search) {
        if (this.props.formItemLayout) {
          defaultOpts = _extends({}, this.props.formItemLayout);
        }
      } else {
        var _formItemLayout = _constants.formItemLayout;
        if (this.props.formItemLayout) {
          _formItemLayout = this.props.formItemLayout;
        }
        defaultOpts = _extends({
          hasFeedback: true
        }, _formItemLayout);
      }
      var _props = this.props,
          _props$modifyDisplay = _props.modifyDisplay,
          modifyDisplay = _props$modifyDisplay === undefined ? true : _props$modifyDisplay,
          _props$modifyText = _props.modifyText,
          modifyText = _props$modifyText === undefined ? false : _props$modifyText,
          _props$modifyDisabled = _props.modifyDisabled,
          modifyDisabled = _props$modifyDisabled === undefined ? false : _props$modifyDisabled;

      var authCode = this.props.useName + '.' + this.props.name;
      var display = (0, _tool.getAuth)(authCode);
      if (display) {
        if (this.props.modalType === 'update') {
          display = modifyDisplay;
        }
      }
      var isText = this.props.type === 'text';
      if (this.props.modalType === 'update') {

        isText = modifyText;
      }

      return display ? _react2.default.createElement(
        FormItem,
        _extends({}, defaultOpts, this.props),
        isText ? initValue : this.props.type === 'null' ? this.props.children : this.props.getFieldDecorator(this.props.name, {
          rules: this.getRules(),
          initialValue: initValue || undefined
        })(this.getFormItem())
      ) : _react2.default.createElement('span', null);
    }
  }]);

  return FormItemX;
}(_react.Component);

;

exports.default = FormItemX;
module.exports = exports['default'];