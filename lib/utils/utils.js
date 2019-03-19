Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fixedZero = fixedZero;
exports.getTimeDistance = getTimeDistance;
exports.getPlainNode = getPlainNode;
exports.digitUppercase = digitUppercase;
exports.getRoutes = getRoutes;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function fixedZero(val) {
  return val * 1 < 10 ? '0' + val : val;
}

function getTimeDistance(type) {
  var now = new Date();
  var oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [(0, _moment2.default)(now), (0, _moment2.default)(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    var day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    var beginTime = now.getTime() - day * oneDay;

    return [(0, _moment2.default)(beginTime), (0, _moment2.default)(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    var year = now.getFullYear();
    var month = now.getMonth();
    var nextDate = (0, _moment2.default)(now).add(1, 'months');
    var nextYear = nextDate.year();
    var nextMonth = nextDate.month();

    return [(0, _moment2.default)(year + '-' + fixedZero(month + 1) + '-01 00:00:00'), (0, _moment2.default)((0, _moment2.default)(nextYear + '-' + fixedZero(nextMonth + 1) + '-01 00:00:00').valueOf() - 1000)];
  }

  if (type === 'year') {
    var _year = now.getFullYear();

    return [(0, _moment2.default)(_year + '-01-01 00:00:00'), (0, _moment2.default)(_year + '-12-31 23:59:59')];
  }
}

function getPlainNode(nodeList) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var arr = [];
  nodeList.forEach(function (node) {
    var item = node;
    item.path = (parentPath + '/' + (item.path || '')).replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push.apply(arr, _toConsumableArray(getPlainNode(item.children, item.path)));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

function digitUppercase(n) {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var num = Math.abs(n);
  var s = '';
  fraction.forEach(function (item, index) {
    s += (digit[Math.floor(num * 10 * Math.pow(10, index)) % 10] + item).replace(/零./, '');
  });
  s = s || '整';
  num = Math.floor(num);
  for (var i = 0; i < unit[0].length && num > 0; i += 1) {
    var p = '';
    for (var j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  var arr1 = str1.split('/');
  var arr2 = str2.split('/');
  if (arr2.every(function (item, index) {
    return item === arr1[index];
  })) {
    return 1;
  } else if (arr1.every(function (item, index) {
    return item === arr2[index];
  })) {
    return 2;
  }
  return 3;
}

function getRoutes(path, routerData) {
  var routes = Object.keys(routerData).filter(function (routePath) {
    return routePath.indexOf(path) === 0 && routePath !== path;
  });
  routes = routes.map(function (item) {
    return item.replace(path, '');
  });
  var renderArr = [];
  renderArr.push(routes[0]);

  var _loop = function _loop(i) {
    var isAdd = false;
    isAdd = renderArr.every(function (item) {
      return getRelation(item, routes[i]) === 3;
    });
    renderArr = renderArr.filter(function (item) {
      return getRelation(item, routes[i]) !== 1;
    });
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  };

  for (var i = 1; i < routes.length; i += 1) {
    _loop(i);
  }
  var renderRoutes = renderArr.map(function (item) {
    var exact = !routes.some(function (route) {
      return route !== item && getRelation(route, item) === 1;
    });
    return _extends({}, routerData['' + path + item], {
      key: '' + path + item,
      path: '' + path + item,
      exact: exact
    });
  });
  return renderRoutes;
}