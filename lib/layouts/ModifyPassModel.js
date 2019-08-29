Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _alert = require('antd/lib/alert');

var _alert2 = _interopRequireDefault(_alert);

var _progress = require('antd/lib/progress');

var _progress2 = _interopRequireDefault(_progress);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/popover/style');

require('antd/lib/input/style');

require('antd/lib/alert/style');

require('antd/lib/progress/style');

require('antd/lib/message/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _style = require('./style.less');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var passwordStatusMap = {
  ok: _react2.default.createElement(
    'div',
    { className: _style2.default.success },
    '\u5F3A\u5EA6\uFF1A\u5F3A'
  ),
  pass: _react2.default.createElement(
    'div',
    { className: _style2.default.warning },
    '\u5F3A\u5EA6\uFF1A\u4E2D'
  ),
  poor: _react2.default.createElement(
    'div',
    { className: _style2.default.error },
    '\u5F3A\u5EA6\uFF1A\u592A\u77ED'
  )
};
var passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception'
};
var testP = {
  regex: {
    illegal: /[^-+=|,0-9a-zA-Z!@#$%^&*?_.~+\/\\(){}\[\]<>]/,
    allNumber: /^\d+$/,
    allLetter: /^[a-zA-Z]+$/,
    allCharacter: /^[-+=|,!@#$%^&*?_.~+\/\\(){}\[\]<>]+$/,
    allSame: /^([\s\S])\1*$/,
    upperLetter: /[A-Z]/,
    lowerLetter: /[a-z]/,
    number: /\d/g,
    character: /[-+=|,!@#$%^&*?_.~+\/\\()|{}\[\]<>]/
  },
  score: function score(e) {
    var t = 0;
    if (this.isIllegal(e)) return t;
    var n = this.size(e);
    n <= 4 ? t += 5 : n > 4 && n < 8 ? t += 10 : n >= 8 && (t += 25);
    var r = this.hasLowerAndUpperLetter(e),
        o = this.hasLetter(e);
    r ? t += 20 : o && (t += 10);
    var i = this.hasNumber(e);
    i >= 3 ? t += 20 : i && (t += 10);
    var s = this.hasCharacter(e);
    return s >= 3 ? t += 25 : s && (t += 10), r && i && s ? t += 10 : o && i && s ? t += 5 : (o && i || o && s || i && s) && (t += 2), t;
  },
  level: function level(e) {
    return Math.floor(this.score(e) / 10);
  },
  size: function size(e) {
    return e.length;
  },
  isIllegal: function isIllegal(e) {
    return !!e.match(this.regex.illegal);
  },
  isAllNumber: function isAllNumber(e) {
    return !!e.match(this.regex.allNumber);
  },
  isAllLetter: function isAllLetter(e) {
    return !!e.match(this.regex.allLetter);
  },
  isAllSame: function isAllSame(e) {
    return !!e.match(this.regex.allSame);
  },
  hasNumber: function hasNumber(e) {
    return (e.match(this.regex.number) || []).length;
  },
  hasLetter: function hasLetter(e) {
    return !!e.match(this.regex.lowerLetter) || !!e.match(this.regex.upperLetter);
  },
  hasLowerAndUpperLetter: function hasLowerAndUpperLetter(e) {
    return !!e.match(this.regex.lowerLetter) && !!e.match(this.regex.upperLetter);
  },
  hasNumberAndLetter: function hasNumberAndLetter(e) {
    return !(!e.match(this.regex.number) || !e.match(this.regex.lowerLetter) && !e.match(this.regexp.upperLetter));
  },
  hasCharacter: function hasCharacter(e) {
    return (e.match(this.regex.character) || []).length;
  }
};

var ModifyPassModel = function (_Component) {
  _inherits(ModifyPassModel, _Component);

  function ModifyPassModel(props) {
    _classCallCheck(this, ModifyPassModel);

    var _this = _possibleConstructorReturn(this, (ModifyPassModel.__proto__ || Object.getPrototypeOf(ModifyPassModel)).call(this, props));

    _this.showModelHandler = function (e) {
      if (e) e.stopPropagation();
      _this.setState({ visible: true });
    };

    _this.okHandler = function () {
      var resetPassword = _this.props.resetPassword;

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          var reqData = _extends({}, values);
          if (resetPassword) {
            return resetPassword(values, _this.props.hideModelHandler);
          }
          // 没有配置走默认
          (0, _request2.default)('password/reset', {
            method: 'post',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: _qs2.default.stringify(values)
          }).then(function (data) {
            if (data && !data.success) {
              _message3.default.error(data.resultView);
            } else {
              _this.props.hideModelHandler();
              _message3.default.info('修改密码成功！');
              window.location.href = window.path + "logout";
            }
          });
        }
      });
    };

    _this.checkPassword = function (rule, value, callback) {
      var form = _this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码必须一致!');
      } else {
        callback();
      }
    };

    _this.checkConfirm = function (rule, value, callback) {
      var _this$state = _this.state,
          popvisible = _this$state.popvisible,
          confirmDirty = _this$state.confirmDirty;


      if (!value) {
        _this.setState({
          help: '请输入密码！',
          popvisible: !!value
        });
        return callback('error');
      }

      _this.setState({
        help: ''
      });
      if (!popvisible) {
        _this.setState({
          popvisible: !!value
        });
      }
      if (value.length < 9) {
        return callback("密码至少8位以上");
      }
      if (testP.isIllegal(value)) {
        return callback("密码不能含有特殊符号");
      }
      if (!testP.hasNumber(value)) {
        return callback("密码必须包含数字");
      }
      if (!testP.hasCharacter(value)) {
        return callback("密码必须包含特殊字符如：@#¥%……&*");
      }
      if (!testP.hasLowerAndUpperLetter(value)) {
        return callback("密码必须包含大小写字母");
      }

      if (!!!(testP.hasNumber(value) && testP.hasLetter(value) || testP.hasNumber(value) && testP.hasCharacter(value) || testP.hasLetter(value) && testP.hasCharacter(value))) {
        return callback("密码设置不符合要求，应包含数字大小写字母");
      }

      var form = _this.props.form;
      if (value && confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    _this.getPasswordStatus = function () {
      var form = _this.props.form;

      var value = form.getFieldValue('password');

      if (value && value.length > 9) {
        return 'ok';
      }

      if (value && value.length > 5) {
        return 'pass';
      }

      return 'poor';
    };

    _this.handleConfirmBlur = function (e) {
      var value = e.target.value;
      _this.setState({
        confirmDirty: _this.state.confirmDirty || !!value
      });
    };

    _this.renderPasswordProgress = function () {
      var form = _this.props.form;

      var value = form.getFieldValue('password');
      var passwordStatus = _this.getPasswordStatus();
      return value && value.length ? _react2.default.createElement(
        'div',
        { className: _style2.default['progress-' + passwordStatus] },
        _react2.default.createElement(_progress2.default, {
          status: passwordProgressMap[passwordStatus],
          className: _style2.default.progress,
          strokeWidth: 6,
          percent: value.length * 10 > 100 ? 100 : value.length * 10,
          showInfo: false
        })
      ) : null;
    };

    _this.state = {
      visible: _this.props.visible,
      confirmDirty: false,
      popvisible: false
    };
    return _this;
  }

  _createClass(ModifyPassModel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isNeedResetPassword = _props.isNeedResetPassword;

      var modalOpts = {
        title: '修改密码',
        visible: this.props.visible,
        onOk: this.okHandler,
        maskClosable: !isNeedResetPassword,
        onCancel: this.props.hideModelHandler
      };
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItem = this.props.formItem;
      if (this.props.modalType === 'create') {
        if (this.props.newData['initData']) {
          formItem = this.props.newData['initData'];
        }
      }
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 6
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 14
          }
        }
      };
      var popvisible = this.state.popvisible;

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          { onClick: this.showModelHandler },
          children
        ),
        _react2.default.createElement(
          _modal2.default,
          modalOpts,
          isNeedResetPassword ? _react2.default.createElement(_alert2.default, { message: '\u9996\u6B21\u767B\u9646\u8BF7\u4FEE\u6539\u5BC6\u7801', type: 'warning', showIcon: true }) : null,
          _react2.default.createElement(
            _form2.default,
            { layout: 'horizontal' },
            _react2.default.createElement(
              FormItem,
              _extends({}, formItemLayout, { label: '\u65E7\u5BC6\u7801', hasFeedback: true }),
              getFieldDecorator('oldpassword', {
                rules: [{
                  required: true,
                  message: '请输入旧的登录密码'
                }]
              })(_react2.default.createElement(_input2.default, { type: 'password' }))
            ),
            _react2.default.createElement(
              _popover2.default,
              {
                getPopupContainer: function getPopupContainer(node) {
                  if (node && node.parentNode) {
                    return node.parentNode;
                  }

                  return node;
                },
                content: _react2.default.createElement(
                  'div',
                  {
                    style: {
                      padding: '4px 0'
                    }
                  },
                  passwordStatusMap[this.getPasswordStatus()],
                  this.renderPasswordProgress(),
                  _react2.default.createElement(
                    'div',
                    {
                      style: {
                        marginTop: 10
                      }
                    },
                    '\u8BF7\u81F3\u5C11\u8F93\u5165 8 \u4E2A\u5B57\u7B26\u3002\u5305\u542B\u5B57\u6BCD\u5927\u5C0F\u5199+\u6570\u5B57+\u7279\u6B8A\u5B57\u7B26\u3002'
                  )
                ),
                overlayStyle: {
                  width: 240
                },
                placement: 'right',
                visible: popvisible
              },
              _react2.default.createElement(
                FormItem,
                _extends({}, formItemLayout, { label: '\u65B0\u5BC6\u7801', hasFeedback: true }),
                getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: '请输入登录密码'
                  }, {
                    validator: this.checkConfirm,
                    trigger: "onBlur"
                  }]
                })(_react2.default.createElement(_input2.default, { type: 'password' }))
              )
            ),
            _react2.default.createElement(
              FormItem,
              _extends({}, formItemLayout, { label: '\u786E\u8BA4\u65B0\u5BC6\u7801', hasFeedback: true }),
              getFieldDecorator('confirm', {
                rules: [{
                  required: true,
                  message: '请两次输入新密码!'
                }, {
                  validator: this.checkPassword
                }]
              })(_react2.default.createElement(_input2.default, { type: 'password', onBlur: this.handleConfirmBlur }))
            )
          )
        )
      );
    }
  }]);

  return ModifyPassModel;
}(_react.Component);

exports.default = _form2.default.create()(ModifyPassModel);
module.exports = exports['default'];