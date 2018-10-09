/**
 * 通过authCode 获取是否有权限
 * @param  {[type]} authCode [description]
 * @return {[type]}          [description]
 */
export function getAuth(authCode) {
  //是否为系统管理员 3为平台管理员
  if (window.user.userType === '3'||window.user.userType === '4') {
    return true;
  } else {
    let codes = ['TradeorderSearch.merchId'];
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

Array.prototype.contains = function(val)
{
     for (var i = 0; i < this.length; i++)
    {
       if (this[i] === val)
      {
       return true;
      }
    }
     return false;
};

export function getAuthColumn(columns, authCode) {
  let keys = [];
  if (authCode === 'SettlogList' || authCode === 'ReportList' || authCode === 'OrderList') {
    keys.push('cpNo');
    keys.push('operation');
  }
  if(authCode === 'TradeorderList') {
    keys.push('merchId');
  }
  if(authCode === 'ProductflowList') {
    keys.push('merchId');
  }
  if(authCode === 'AppinfoList') {
    keys.push('merchId');
  }
  if(authCode === 'OrderreportList') {
    keys.push('merchId');
  }
  if(authCode === 'ActivityList') {
    keys.push('merchId');
  }
  const isAuth = getAuth(authCode);
  if (!isAuth) {
    return delColumn(columns, keys);
  } else {
    return columns;
  }
}

export function delColumn(columns, keys) {
  let newColumns = [];
  columns.map((c) => {
    if (keys.indexOf(c.key) == -1) {
      newColumns.push(c);
    }
  });
  return newColumns;
}
