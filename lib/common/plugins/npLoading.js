import _regeneratorRuntime from 'babel-runtime/regenerator';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Nprogress from 'Nprogress';
var SHOW = '@@NP_LOADING/SHOW';
var HIDE = '@@NP_LOADING/HIDE';
var NAMESPACE = 'nploading';

function npLoading() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var namespace = opts.namespace || NAMESPACE;
  var initialState = {
    global: false,
    models: {}
  };
  if (opts.effects) {
    initialState.effects = {};
  }

  var extraReducers = _defineProperty({}, namespace, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    var ret = state;
    switch (type) {
      case SHOW:
        Nprogress.start();
        break;
      case HIDE:
        Nprogress.done(true);
        break;
      default:
        ret = state;
        break;
    }
    return ret;
  });

  function onEffect(effect, _ref2, model, actionType) {
    var put = _ref2.put;
    var namespace = model.namespace;

    return (/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return put({
                  type: SHOW,
                  payload: {
                    namespace: namespace,
                    actionType: actionType
                  }
                });

              case 2:
                _context.next = 4;
                return effect.apply(undefined, _args);

              case 4:
                _context.next = 6;
                return put({
                  type: HIDE,
                  payload: {
                    namespace: namespace,
                    actionType: actionType
                  }
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })
    );
  }

  return { extraReducers: extraReducers, onEffect: onEffect };
}

export default npLoading;
module.exports = exports['default'];