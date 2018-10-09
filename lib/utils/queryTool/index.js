Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.filterQueryData = filterQueryData;
function filterQueryData(payload) {
  //组件新的查询参数
  var newQuery = _extends({ page: 1 }, payload);

  //去掉为''的参数，这些参数不在会URL显示
  for (var key in newQuery) {
    if (!newQuery[key]) {
      newQuery[key] = undefined;
    } else if (newQuery[key] === 'all') {
      newQuery[key] = undefined;
    }
  }
  return newQuery;
}