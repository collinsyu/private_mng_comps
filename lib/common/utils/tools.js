Object.defineProperty(exports, "__esModule", {
  value: true
});
var tools = {
  Date: {
    format: function format(date, pattern) {
      if (!date) {
        return "";
      }
      var o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //day
        "H+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
        "S": date.getMilliseconds() //millisecond
      };
      var _pattern = pattern;
      if (!_pattern) {
        _pattern = "yyyy-MM-dd";
      }
      var text = "";
      if (/(y+)/.test(_pattern)) {
        _pattern = _pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(_pattern)) {
          _pattern = _pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
      }
      return _pattern;
    }
  }
};

exports.default = tools;
module.exports = exports["default"];