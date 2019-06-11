Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.patch = exports.remove = exports.edit = exports.show = exports.donew = exports.create = exports.query = exports.reqwithWholeUrl = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reqwithWholeUrl = exports.reqwithWholeUrl = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, options) {
    var surl, opts;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            surl = url.startsWith('/mock') ? url : window.path + url;

            if (url.startsWith("http")) {
              surl = url;
            }

            opts = _extends({
              credentials: 'include',
              headers: {
                'x-requested-with': true
              }
            }, options);
            //options.credentials = 'include';

            return _context.abrupt('return', (0, _fetch2.default)(surl, opts).then(checkStatus).then(parseJSON).then(checkData).then(function (data) {
              return data;
            }).catch(parseError));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function reqwithWholeUrl(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 分页查询方式
 */


var query = exports.query = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(module, params) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', request(module + '?' + _qs2.default.stringify(params)));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function query(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 提交增加的数据
 */


var create = exports.create = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(module, params) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', request(module, {
              method: 'post',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: _qs2.default.stringify(params)
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function create(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 请求服务器获取一些共用的数据
 */


var donew = exports.donew = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(module, params) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', request(module + '/new'));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function donew(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 查看数据的详情
 */


var show = exports.show = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(module, params) {
    var id;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = params.id;
            return _context5.abrupt('return', request(module + '/' + id));

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function show(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 修改前需要显示的数据
 */


var edit = exports.edit = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(module, params) {
    var id;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = params.currentItem.id;
            return _context6.abrupt('return', request(module + '/' + id + '/edit'));

          case 2:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function edit(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * 执行删除数据
 */


var remove = exports.remove = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(module, id) {
    var url;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            url = module + '/' + id;
            return _context7.abrupt('return', request(url, {
              method: 'delete'
            }));

          case 2:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function remove(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var patch = exports.patch = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(path, params) {
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt('return', request(path, {
              method: 'PATCH',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: _qs2.default.stringify(params)
            }));

          case 1:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function patch(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * 执行更新操作
 */


var update = exports.update = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee9(module, params) {
    var url;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            url = module + '/' + params.id;
            return _context9.abrupt('return', request(url, {
              method: 'PATCH',
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: _qs2.default.stringify(params)
            }));

          case 2:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function update(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.default = request;

require('antd/lib/message/style');

require('antd/lib/modal/style');

var _fetch = require('dva/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isErrorModal = false;
/**
 * 对请求的数据转换成JSON数据格式
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function parseJSON(response) {
  return response.json();
}

function parseError(error) {

  //console.log(error);
  console.log(error.code);
  //console.log(error.title);
  if (!isErrorModal) {
    isErrorModal = true;
    if (error.code === '401' || error.code === '302' || error.code === 302) {
      _modal2.default.error({
        title: '访问失败',
        content: '您的会话已过期，需要重新登录',
        onOk: function onOk() {
          //window.location = response.url;
          window.location.reload();
          return new Promise(function (resolve) {
            setTimeout(resolve, 1);
          });
        }
      });
    } else if (error.code === 403) {
      _modal2.default.error({
        title: '操作失败',
        content: '抱歉，您的权限不够，请联系管理员!',
        onOk: function onOk() {
          isErrorModal = false;
        }
      });
    } else {
      console.log(error);
      _modal2.default.error({
        title: '操作失败',
        content: '网络请求失败了,请检查网络是否正常!',
        onOk: function onOk() {
          isErrorModal = false;
        }
      });
    }
  }

  //throw new Error("网络请求失败了!");
  var data = {
    success: false
  };
  var d = {
    data: data
  };
  return d;
}

/**
 * 检查HTTP请求的状态，如果网络请求失败，则提示
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function checkStatus(response) {
  //console.log("=======================302 有没有=======");
  //console.log(response);

  /*if (response.status >= 200 && response.status < 300) {
  
    return response;
  }*/

  //如果里面的URL有login，则进行跳转
  if (response.redirected && response.url.indexOf('login') > 0) {
    //  console.log("=======================login 有没有=======");
    /*Modal.error({
      title: '访问失败',
      content: '您的会话已过期，需要重新登录',
      onOk() {
        //window.location = response.url;
        window.location.reload();
        return new Promise((resolve) => {
          setTimeout(resolve, 1);
        });
      }
    });*/
    var error = new Error(401);
    error.code = '401';
    error.content = "您的会话已过期，需要重新登录";
    error.title = "访问失败";
    throw error;
  } else {
    if (response.status === 200) {
      //表示请求正确
      return response;
    } else {
      console.log(response);
      var _error = new Error(response.statusText);
      _error.response = response;
      _error.code = response.status;

      //Modal.error({title: '操作失败', content: '网络请求失败了11'});
      throw _error;
    }
  }
}

/**
 * 检查返回的数据，如果操作失败，则提示失败信息
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function checkData(data) {
  if (data && !data.success) {
    if (data.showType === 0) {
      if (data.resultCode === '0013') {
        //表示数据查询失败，不做全局提示
      } else {
        _message3.default.error(data.resultView);
      }
    } else {
      if (!isErrorModal) {
        _modal2.default.error({
          title: data.retInfo,
          content: data.resultView,
          onOk: function onOk() {
            if (data.resultCode === '401') {
              //表示需要登录，重新刷新页面进行跳转
              window.location.reload();
            }
            return new Promise(function (resolve) {
              setTimeout(resolve, 1);
            });
            isErrorModal = false;
          }
        });
      }
    }
  }
  return data;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(url, options) {
  //const murl = "api/"
  var surl = window.path + url;
  var opts = _extends({
    credentials: 'include',
    headers: {
      'x-requested-with': true
    }
  }, options);
  //options.credentials = 'include';
  return (0, _fetch2.default)(surl, opts).then(checkStatus).then(parseJSON).then(checkData).then(function (data) {
    return data;
  }).catch(parseError);
}