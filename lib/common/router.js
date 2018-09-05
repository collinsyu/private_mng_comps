var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import { getMenuData } from './menu';

var routerDataCache = void 0;

var modelNotExisted = function modelNotExisted(app, model) {
  return (
    // eslint-disable-next-line
    !app._models.some(function (_ref) {
      var namespace = _ref.namespace;
      return namespace === model;
    })
  );
};

// wrapper of dynamic
var dynamicWrapper = function dynamicWrapper(app, _models, _component) {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (_component.toString().indexOf('.then(') < 0) {
    _models.forEach(function (model) {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require('../models/' + model).default);
      }
    });
    return function (props) {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(_component().default, _extends({}, props, {
        routerData: routerDataCache
      }));
    };
  }
  // () => import('module')
  return dynamic({
    app: app,
    models: function models() {
      return _models.filter(function (model) {
        return modelNotExisted(app, model);
      }).map(function (m) {
        return import('../models/' + m + '.js');
      });
    },
    // add routerData prop
    component: function component() {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return _component().then(function (raw) {
        var Component = raw.default || raw;
        return function (props) {
          return createElement(Component, _extends({}, props, {
            routerData: routerDataCache
          }));
        };
      });
    }
  });
};

function getFlatMenuData(menus) {
  var keys = {};
  menus.forEach(function (item) {
    if (item.children) {
      keys[item.path] = _extends({}, item);
      keys = _extends({}, keys, getFlatMenuData(item.children));
    } else {
      keys[item.path] = _extends({}, item);
    }
  });
  return keys;
}

export var getRouterData = function getRouterData(app) {
  var routerConfig = {
    '/': {
      component: dynamicWrapper(app, ['user', 'login'], function () {
        return import('../layouts/BasicLayout');
      })
    },
    '/dashboard/analysis': {
      component: dynamicWrapper(app, ['chart'], function () {
        return import('../routes/Dashboard/Analysis');
      })
    },
    '/dashboard/monitor': {
      component: dynamicWrapper(app, ['monitor'], function () {
        return import('../routes/Dashboard/Monitor');
      })
    },
    '/dashboard/workplace': {
      component: dynamicWrapper(app, ['project', 'activities', 'chart'], function () {
        return import('../routes/Dashboard/Workplace');
      })
      // hideInBreadcrumb: true,
      // name: '工作台',
      // authority: 'admin',
    },
    '/activity/turntable': {
      component: dynamicWrapper(app, ['activitys'], function () {
        return import('../routes/Activity/activitys/ActivityIndex');
      })
    },
    '/activity/cashpacketactivitys': {
      component: dynamicWrapper(app, ['cashpacketactivitys'], function () {
        return import('../routes/Activity/cashpacketactivitys/CashpacketactivityIndex');
      })
    },

    '/recharge/index': {
      component: dynamicWrapper(app, ['user'], function () {
        return import('../routes/Recharge/index');
      })
    },
    '/recharge/list': {
      component: dynamicWrapper(app, ['oflows'], function () {
        return import('../routes/Order/Flow/OflowIndex');
      })
    },
    '/recharge/report': {
      component: dynamicWrapper(app, ['oreports'], function () {
        return import('../routes/Order/Report/OreportIndex');
      })
    },
    '/activitymetas': {
      component: dynamicWrapper(app, ['activitymetas'], function () {
        return import('../routes/Activity/activitymetas/ActivitymetaIndex');
      })
    },

    '/activity/activitypartys': {
      component: dynamicWrapper(app, ['activitypartys'], function () {
        return import('../routes/Activity/activitypartys/ActivitypartyIndex');
      })
    },

    '/system/wechat': {
      component: dynamicWrapper(app, ['merchconfigs'], function () {
        return import('../routes/Custmoer/merchconfigs/MerchconfigIndex');
      })
    },

    '/activity/prizeitems': {
      component: dynamicWrapper(app, ['prizeitems'], function () {
        return import('../routes/Activity/prizeitems/PrizeitemIndex');
      })
    },

    '/activity/prizeraffles': {
      component: dynamicWrapper(app, ['prizeraffles'], function () {
        return import('../routes/Activity/prizeraffles/PrizeraffleIndex');
      })
    },
    '/proxy/feedbacks': {
      component: dynamicWrapper(app, ['feedbacks'], function () {
        return import('../routes/Custmoer/feedbacks/FeedbackIndex');
      })
    },
    '/proxy/members': {
      component: dynamicWrapper(app, ['members'], function () {
        return import('../routes/Custmoer/members/MemberIndex');
      })
    },

    '/ad/adlaunchplans': {
      component: dynamicWrapper(app, ['adlaunchplans'], function () {
        return import('../routes/Add/adlaunchplans/AdlaunchplanIndex');
      })
    },
    '/ad/adlaunchdetails': {
      component: dynamicWrapper(app, ['adlaunchdetails'], function () {
        return import('../routes/Add/adlaunchdetails/AdlaunchdetailIndex');
      })
    },
    '/ad/adpositions': {
      component: dynamicWrapper(app, ['adpositions'], function () {
        return import('../routes/Add/adpositions/AdpositionIndex');
      })
    },
    '/system/miniwecatmaps': {
      component: dynamicWrapper(app, ['miniwecatmaps'], function () {
        return import('../routes/Add/miniwecatmaps/MiniwecatmapIndex');
      })
    },
    '/activity/prizerechargebills': {
      component: dynamicWrapper(app, ['prizerechargebills'], function () {
        return import('../routes/Activity/prizerechargebills/PrizerechargebillIndex');
      })
    },
    '/activity/prizerechargetasks': {
      component: dynamicWrapper(app, ['prizerechargetasks'], function () {
        return import('../routes/Activity/prizerechargetasks/PrizerechargetaskIndex');
      })
    },
    '/system/staticfile': {
      component: dynamicWrapper(app, ['staticfiles'], function () {
        return import('../routes/System/staticfiles/StaticfileIndex');
      })
    },
    '/system/schemaconfigs': {
      component: dynamicWrapper(app, ['schemaconfigs'], function () {
        return import('../routes/System/schemaconfigs/SchemaconfigIndex');
      })
    },
    '/system/shareconfigs': {
      component: dynamicWrapper(app, ['shareconfigs'], function () {
        return import('../routes/System/shareconfigs/ShareconfigIndex');
      })
    },
    '/h5module/package/edit': {
      component: dynamicWrapper(app, ['pagepackage'], function () {
        return import('../routes/h5module/package/Edit');
      })
    },
    '/material/materialgroupdetails': {
      component: dynamicWrapper(app, ['materialgroupdetails'], function () {
        return import('../routes/Material/materialgroupdetails/MaterialgroupdetailIndex');
      })
    },
    '/material/materialgroups': {
      component: dynamicWrapper(app, ['materialgroups'], function () {
        return import('../routes/Material/materialgroups/MaterialgroupIndex');
      })
    },
    '/material/materials': {
      component: dynamicWrapper(app, ['materials'], function () {
        return import('../routes/Material/materials/MaterialIndex');
      })
    }
  };
  // Get name from ./menu.js or just set it in the router data.
  var menuData = getFlatMenuData(getMenuData());
  var routerData = {};
  Object.keys(routerConfig).forEach(function (item) {
    var menuItem = menuData[item.replace(/^\//, '')] || {};
    routerData[item] = _extends({}, routerConfig[item], {
      name: routerConfig[item].name || menuItem.name,
      authority: routerConfig[item].authority || menuItem.authority
    });
  });
  return routerData;
};