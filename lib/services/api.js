var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { stringify } from 'qs';
import request from '../utils/request';

export var queryProjectNotice = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', request('/api/project/notice'));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function queryProjectNotice() {
    return _ref.apply(this, arguments);
  };
}();

export var queryActivities = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', request('/api/activities'));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function queryActivities() {
    return _ref2.apply(this, arguments);
  };
}();

export var queryRule = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', request('/api/rule?' + stringify(params)));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function queryRule(_x) {
    return _ref3.apply(this, arguments);
  };
}();

export var removeRule = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', request('/api/rule', {
              method: 'POST',
              body: _extends({}, params, {
                method: 'delete'
              })
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function removeRule(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

export var addRule = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', request('/api/rule', {
              method: 'POST',
              body: _extends({}, params, {
                method: 'post'
              })
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function addRule(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

export var fakeSubmitForm = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', request('/api/forms', {
              method: 'POST',
              body: params
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function fakeSubmitForm(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

export var fakeChartData = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', request('/api/fake_chart_data'));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function fakeChartData() {
    return _ref7.apply(this, arguments);
  };
}();

export var queryTags = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt('return', request('/api/tags'));

          case 1:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function queryTags() {
    return _ref8.apply(this, arguments);
  };
}();

export var queryBasicProfile = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt('return', request('/api/profile/basic'));

          case 1:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function queryBasicProfile() {
    return _ref9.apply(this, arguments);
  };
}();

export var queryAdvancedProfile = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt('return', request('/api/profile/advanced'));

          case 1:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function queryAdvancedProfile() {
    return _ref10.apply(this, arguments);
  };
}();

export var queryFakeList = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt('return', request('/api/fake_list?' + stringify(params)));

          case 1:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function queryFakeList(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

export var fakeAccountLogin = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(params) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt('return', request('/api/login/account', {
              method: 'POST',
              body: params
            }));

          case 1:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function fakeAccountLogin(_x6) {
    return _ref12.apply(this, arguments);
  };
}();

export var fakeRegister = function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(params) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt('return', request('/api/register', {
              method: 'POST',
              body: params
            }));

          case 1:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  return function fakeRegister(_x7) {
    return _ref13.apply(this, arguments);
  };
}();

export var queryNotices = function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt('return', request('/api/notices'));

          case 1:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));

  return function queryNotices() {
    return _ref14.apply(this, arguments);
  };
}();