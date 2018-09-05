import request from '../common/utils/request';
import qs from 'qs';
/**
 * 分页查询方式
 */
export async function query(params) {
  return request(`rolemerchants?${qs.stringify(params)}`);
}

/**
 * 提交增加的数据
 */
export async function create(params) {
  return request('rolemerchants', {
    method: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });
}
export async function createApp(params) {
  return request('rolemerchants/app', {
    method: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });
}


/**
 * 请求服务器获取一些共用的数据
 */
export async function donew(params) {
  if(params && params.currentItem) {
    const data ={
      merchId: params.currentItem.ipRoleId
    }
    return request(`rolemerchants/new?${qs.stringify(data)}`);
  } else {
    return request('rolemerchants/new');
  }
}

/**
 * 查看数据的详情
 */
export async function show(params) {
  const id = params.currentItem.id;
  return request(`rolemerchants/${id}`);
}

/**
 * 修改前需要显示的数据
 */
export async function edit(params) {
  const id = params.currentItem.id;
  return request(`rolemerchants/${id}/edit`);
}
export async function editapp(params) {
  const id = params.currentItem.id;
  return request(`rolemerchants/app/${id}/edit`);
}

/**
 * 执行删除数据
 */
export async function remove(params) {
  const url = `rolemerchants/${params.id}`;
  return request(url, {
    method: 'delete'
  });
}

/**
 * 执行更新操作
 */
export async function update(params) {
  const url = `rolemerchants/${params.id}`;
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });

}
export async function updateApp(params) {
  const url = `rolemerchants/app/${params.id}`;
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });

}

export async function recharge(params) {
  const url = `rolemerchants/${params.id}/recharge`;
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });

}
