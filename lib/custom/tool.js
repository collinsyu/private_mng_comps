Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuth = getAuth;
exports.getAuthColumn = getAuthColumn;
exports.delColumn = delColumn;
/**
 * 通过authCode 获取是否有权限
 * @param  {[type]} authCode [description]
 * @return {[type]}          [description]
 */
function getAuth(authCode) {
  //是否为系统管理员 3为平台管理员
  if (window.user.userType === '3' || window.user.userType === '4') {
    return true;
  } else {
    var codes = ['TradeorderSearch.merchId'];
    codes.push('TradeorderList');
    codes.push('ProductflowList');
    codes.push('AppinfoList');
    codes.push('OrderreportList');
    codes.push('ActivityList');
    codes.push('Templet.adopt');
    codes.push('Templet.notpass');
    codes.push('Signlist.adopt');
    codes.push('Signlist.notpass');
    //codes.push('Placard.edit');
    return !codes.contains(authCode);
  }
}

Array.prototype.contains = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === val) {
      return true;
    }
  }
  return false;
};

function getAuthColumn(columns, authCode) {
  var keys = [];
  if (authCode === 'SettlogList' || authCode === 'ReportList' || authCode === 'OrderList') {
    keys.push('cpNo');
    keys.push('operation');
  }
  if (authCode === 'TradeorderList') {
    keys.push('merchId');
  }
  if (authCode === 'ProductflowList') {
    keys.push('merchId');
  }
  if (authCode === 'AppinfoList') {
    keys.push('merchId');
  }
  if (authCode === 'OrderreportList') {
    keys.push('merchId');
  }
  if (authCode === 'ActivityList') {
    keys.push('merchId');
  }
  var isAuth = getAuth(authCode);
  if (!isAuth) {
    return delColumn(columns, keys);
  } else {
    return columns;
  }
}

function delColumn(columns, keys) {
  var newColumns = [];
  columns.map(function (c) {
    if (keys.indexOf(c.key) == -1) {
      newColumns.push(c);
    }
  });
  return newColumns;
}