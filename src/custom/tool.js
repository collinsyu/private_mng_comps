/**
 * 通过authCode 获取是否有权限
 * @param  {[type]} authCode [description]
 * @return {[type]}          [description]
 */

function isDev() {
  return /localhost/gi.test(location.host) || /10\.(\d+)\.(\d+)\.(\d+)/gi.test(location.host) || /127\.0\.0\.1/gi.test(location.host)
}

if(isDev()&&!window.isDev){
  console.warn("开发环境过滤权限，请设置全局变量window.isDev = true; 生产环境务必设置 window.isDev = false ！！不可编辑")
}

export function getAuth(authCode) {
  if(window.isDev){
    return true;
  }
  if(window.user.username === 'admin') {
    return true;
  }
  if(window.viewAuth === '0') {
    return true;
  }

  let codes = window.authlist||["admin","user"];
  var _b = codes.contains(authCode)
  return _b;
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

export function getAuthFormItem(name, useName) {
  let keys = [];
  let cloumnsAuth = window.cloumnsAuth||{};
  keys = cloumnsAuth[useName]||[];
  var _b = keys.contains(name)
  return !_b;
}

//这是过滤掉表格的显示字段
export function getAuthColumn(columns, authCode) {

  // 先看是否有全部权限，否则细化权限！
  // const isAuth = getAuth(authCode);
  // if (!isAuth) {
    // 没有全部浏览权限，进行筛选！
    let keys = [];
    let cloumnsAuth = window.cloumnsAuth||{};
    keys = cloumnsAuth[authCode]||[];
    return delColumn(columns, keys);
  // } else {
  //   return columns;
  // }
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
