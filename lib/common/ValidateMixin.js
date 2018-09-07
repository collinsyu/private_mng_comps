function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DEFAULT_VALIDATORS = {
  'require': {
    fn: function fn(val) {
      return val !== null && val !== undefined && val !== '';
    },
    message: function message(name) {
      return name + '\u4E0D\u80FD\u4E3A\u7A7A';
    }
  },
  'email': {
    fn: function fn(val) {
      return (/@/.test(val)
      );
    },

    message: '邮箱格式不合法'
  },
  'minLength': {
    fn: function fn(val) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

      return val.length >= min;
    },
    message: function message(name) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

      return name + '\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E ' + min;
    }
  },
  'password': {
    fn: function fn(val) {
      return (/[a-z]/.test(val) && /[A-Z]/.test(val) && /\d/.test(val)
      );
    },

    message: '密码必须同时包含大写字母, 小写字母和数字'
  }
};

function isFn(obj) {
  return typeof obj === 'function';
}

export default {
  validate: function validate(keyName) {
    var _state = this.state,
        formData = _state.formData,
        formErrors = _state.formErrors;

    var val = formData[keyName];
    var pass = void 0;

    for (var _len = arguments.length, rules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rules[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      var fieldName = rule.name || keyName;
      var params = isFn(rule.params) ? rule.params.call(this) : rule.params || [];
      var fn = isFn(rule.type) ? rule.type : DEFAULT_VALIDATORS[rule.type].fn;
      var msg = rule.message || DEFAULT_VALIDATORS[rule.type].message || fieldName + ' \u6821\u9A8C\u5931\u8D25';
      pass = fn.apply(this, [val].concat(_toConsumableArray(params)));
      if (!pass) {
        formErrors[keyName] = isFn(msg) ? msg.apply(this, [fieldName].concat(_toConsumableArray(params))) : msg;
        break;
      }
    }
    if (pass) {
      formErrors[keyName] = false;
    }
    this.setState({ formData: formData, formErrors: formErrors });
  },
  validateAll: function validateAll() {
    var breakWhenMeetFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var formRules = this.state.formRules;

    var pass = true;
    for (var k in formRules) {
      if (!this.validate.apply(this, [k].concat(_toConsumableArray(formRules[k])))) {
        pass = false;
      }
      if (breakWhenMeetFirst) {
        break;
      }
    }
    return pass;
  }
};
module.exports = exports['default'];