import Nprogress from 'Nprogress';
const SHOW = '@@NP_LOADING/SHOW';
const HIDE = '@@NP_LOADING/HIDE';
const NAMESPACE = 'nploading';

function npLoading(opts = {}) {
  const namespace = opts.namespace || NAMESPACE;
  let initialState = {
    global: false,
    models: {}
  };
  if (opts.effects) {
    initialState.effects = {};
  }

  const extraReducers = {
    [namespace](state = initialState, {type, payload}) {
      let ret = state;
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
    }
  };

  function onEffect(effect, {
    put
  }, model, actionType) {
    const {namespace} = model;
    return function * (...args) {
      yield put({
        type: SHOW,
        payload: {
          namespace,
          actionType
        }
      });
      yield effect(...args);
      yield put({
        type: HIDE,
        payload: {
          namespace,
          actionType
        }
      });
    };
  }

  return {extraReducers, onEffect};
}

export default npLoading;
