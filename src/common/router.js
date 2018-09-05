import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import { getMenuData } from './menu';

let routerDataCache;

const modelNotExisted = (app, model) => (
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => namespace === model)
);

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach((model) => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return (props) => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () => models.filter(
      model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)
    ),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then((raw) => {
        const Component = raw.default || raw;
        return props => createElement(Component, {
          ...props,
          routerData: routerDataCache,
        });
      });
    },
  });
};

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}

export const getRouterData = (app) => {
  const routerConfig = {
    '/': {
      component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    },
    '/dashboard/analysis': {
      component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
    },
    '/dashboard/monitor': {
      component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Monitor')),
    },
    '/dashboard/workplace': {
      component: dynamicWrapper(app, ['project', 'activities', 'chart'], () => import('../routes/Dashboard/Workplace')),
      // hideInBreadcrumb: true,
      // name: '工作台',
      // authority: 'admin',
    },
    '/activity/turntable': {
    component: dynamicWrapper(app, ['activitys'], () => import('../routes/Activity/activitys/ActivityIndex')),
  },
  '/activity/cashpacketactivitys': {
    component: dynamicWrapper(app, ['cashpacketactivitys'], () => import('../routes/Activity/cashpacketactivitys/CashpacketactivityIndex')),
  },

  '/recharge/index': {
    component: dynamicWrapper(app, ['user'], () => import('../routes/Recharge/index')),
  },
  '/recharge/list': {
    component: dynamicWrapper(app, ['oflows'], () => import('../routes/Order/Flow/OflowIndex')),
  },
  '/recharge/report': {
      component: dynamicWrapper(app, ['oreports'], () => import('../routes/Order/Report/OreportIndex')),
    },
  '/activitymetas': {
    component: dynamicWrapper(app, ['activitymetas'], () => import('../routes/Activity/activitymetas/ActivitymetaIndex')),
  },

  '/activity/activitypartys': {
    component: dynamicWrapper(app, ['activitypartys'], () => import('../routes/Activity/activitypartys/ActivitypartyIndex')),
  },

  '/system/wechat': {
    component: dynamicWrapper(app, ['merchconfigs'], () => import('../routes/Custmoer/merchconfigs/MerchconfigIndex')),
  },

  '/activity/prizeitems': {
    component: dynamicWrapper(app, ['prizeitems'], () => import('../routes/Activity/prizeitems/PrizeitemIndex')),
  },

  '/activity/prizeraffles': {
    component: dynamicWrapper(app, ['prizeraffles'], () => import('../routes/Activity/prizeraffles/PrizeraffleIndex')),
  },
  '/proxy/feedbacks': {
    component: dynamicWrapper(app, ['feedbacks'], () => import('../routes/Custmoer/feedbacks/FeedbackIndex')),
  },
  '/proxy/members': {
    component: dynamicWrapper(app, ['members'], () => import('../routes/Custmoer/members/MemberIndex')),
  },

  '/ad/adlaunchplans': {
    component: dynamicWrapper(app, ['adlaunchplans'], () => import('../routes/Add/adlaunchplans/AdlaunchplanIndex')),
  },
  '/ad/adlaunchdetails': {
    component: dynamicWrapper(app, ['adlaunchdetails'], () => import('../routes/Add/adlaunchdetails/AdlaunchdetailIndex')),
  },
  '/ad/adpositions': {
    component: dynamicWrapper(app, ['adpositions'], () => import('../routes/Add/adpositions/AdpositionIndex')),
  },
  '/system/miniwecatmaps': {
    component: dynamicWrapper(app, ['miniwecatmaps'], () => import('../routes/Add/miniwecatmaps/MiniwecatmapIndex')),
  },
  '/activity/prizerechargebills': {
    component: dynamicWrapper(app, ['prizerechargebills'], () => import('../routes/Activity/prizerechargebills/PrizerechargebillIndex')),
  },
  '/activity/prizerechargetasks': {
    component: dynamicWrapper(app, ['prizerechargetasks'], () => import('../routes/Activity/prizerechargetasks/PrizerechargetaskIndex')),
  },
  '/system/staticfile': {
    component: dynamicWrapper(app, ['staticfiles'], () => import('../routes/System/staticfiles/StaticfileIndex')),
  },
  '/system/schemaconfigs': {
    component: dynamicWrapper(app, ['schemaconfigs'], () => import('../routes/System/schemaconfigs/SchemaconfigIndex')),
  },
  '/system/shareconfigs': {
    component: dynamicWrapper(app, ['shareconfigs'], () => import('../routes/System/shareconfigs/ShareconfigIndex')),
  },
  '/h5module/package/edit': {
    component: dynamicWrapper(app, ['pagepackage'], () => import('../routes/h5module/package/Edit')),
  },
  '/material/materialgroupdetails': {
    component: dynamicWrapper(app, ['materialgroupdetails'], () => import('../routes/Material/materialgroupdetails/MaterialgroupdetailIndex')),
  },
  '/material/materialgroups': {
    component: dynamicWrapper(app, ['materialgroups'], () => import('../routes/Material/materialgroups/MaterialgroupIndex')),
  },
  '/material/materials': {
    component: dynamicWrapper(app, ['materials'], () => import('../routes/Material/materials/MaterialIndex')),
  },
  };
  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData(getMenuData());
  const routerData = {};
  Object.keys(routerConfig).forEach((item) => {
    const menuItem = menuData[item.replace(/^\//, '')] || {};
    routerData[item] = {
      ...routerConfig[item],
      name: routerConfig[item].name || menuItem.name,
      authority: routerConfig[item].authority || menuItem.authority,
    };
  });
  return routerData;
};
