function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import request from '../common/utils/request';
import qs from 'qs';
/**
 * 分页查询方式
 */
export var query = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', request('prizerechargetasks?' + qs.stringify(params)));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function query(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 提交增加的数据
 */
export var create = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', request('prizerechargetasks', {
              method: 'post',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: qs.stringify(params)
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function create(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 请求服务器获取一些共用的数据
 */
export var donew = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', request('prizerechargetasks/new'));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function donew(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 查看数据的详情
 */
export var show = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
    var id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = params.id;
            return _context4.abrupt('return', request('prizerechargetasks/' + id));

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function show(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 修改前需要显示的数据
 */
export var edit = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = params.currentItem.id;
            return _context5.abrupt('return', request('prizerechargetasks/' + id + '/edit'));

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function edit(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 执行删除数据
 */
export var remove = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
    var url;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            url = 'prizerechargetasks/' + id;
            return _context6.abrupt('return', request(url, {
              method: 'delete'
            }));

          case 2:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function remove(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * 执行更新操作
 */
export var update = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params) {
    var url;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            url = 'prizerechargetasks/' + params.id;
            return _context7.abrupt('return', request(url, {
              method: 'PATCH',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: qs.stringify(params)
            }));

          case 2:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function update(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

export var updateBatch = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(params) {
    var url;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            url = 'prizerechargetasks/' + params.id + '/batch';
            return _context8.abrupt('return', request(url, {
              method: 'PATCH',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: qs.stringify(params)
            }));

          case 2:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function updateBatch(_x8) {
    return _ref8.apply(this, arguments);
  };
}();