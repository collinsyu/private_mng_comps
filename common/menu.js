/*const menuData = [{
  name: 'dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: '监控页',
    path: 'monitor',
    hideInMenu: true,
  }, {
    name: '工作台',
    path: 'workplace',
    // hideInMenu: true,
  }],
},{
  name: '活动管理',
  path: 'activity',
  icon: 'pay-circle',
  children: [{
    name: '大转盘活动',
    path: 'turntable',
  },{
    name: '奖品管理',
    path: 'prizeitems',
  },{
    name: '中奖记录',
    path: 'prizeraffles',
  },{
    name: '中奖充值记录',
    path: 'prizerechargetasks',
  },{
    name: '参与活动记录',
    path: 'activitypartys',
  }

  ]
},{
  name: '广告管理',
  path: 'ad',
  icon: 'pay-circle',
  children: [{
    name: '投放计划',
    path: 'adlaunchplans',
  },{
    name: '投放详情',
    path: 'adlaunchdetails',
  },{
    name: '位置管理',
    path: 'adpositions',
  },
  ]
},{
  name: '代理分销',
  path: 'proxy',
  icon: 'setting',
  children: [
    {
      name: '代理用户',
      path: 'members',
    },{
      name: '用户反馈',
      path: 'feedbacks',
    },
  ],
},{
  name: '页面充值',
  path: 'recharge',
  icon: 'setting',
  children: [
    {
      name: '页面充值',
      path: 'index',
    },{
      name: '充值列表',
      path: 'list',
    },{
      name: '充值日统计',
      path: 'report',
    }

  ],
},{
  name: '系统管理',
  path: 'system',
  icon: 'setting',
  children: [
    {
      name: '商户配置信息',
      path: 'merchconfigs',
    },{
      name: '微信小程序与商户关系',
      path: 'miniwecatmaps',
    },{
      name: '静态文件配置',
      path: 'staticfile',
    },

  ],
}];*/

const menuData = window.menus;

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
