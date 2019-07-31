Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var menuData = window.menus || [];

function formatter(data) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var parentAuthority = arguments[2];

  return data.map(function (item) {
    var result = _extends({}, item, {
      path: '' + parentPath + item.path,
      authority: item.authority || parentAuthority
    });
    if (item.children) {
      result.children = formatter(item.children, '' + parentPath + item.path + '/', item.authority);
    }
    return result;
  });
}

var getMenuData = exports.getMenuData = function getMenuData(_d) {
  return formatter(_d || menuData);
};