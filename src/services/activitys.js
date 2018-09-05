import request from '../common/utils/request';
import qs from 'qs';
/**
 * 分页查询方式
 */
export async function query(params) {
  return request(`activitys?${qs.stringify(params)}`);
}

/**
 * 提交增加的数据
 */
export async function create(params) {
  return request('activitys', {
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
  if(params) {
    return request(`activitys/new?${qs.stringify(params)}`);
  } else {
    return request('activitys/new');
  }
}

export async function doLottery(params) {
    return request(`activitys/doLottery?${qs.stringify(params)}`);
}


/**
 * 查看数据的详情
 */
export async function show(params) {
  const id = params.currentItem.id;
  return request(`activitys/${id}`);
}


/**
 * 修改前需要显示的数据
 */
export async function edit(params) {
  const id = params.currentItem.id;
  return request(`activitys/${id}/edit`);
}

/**
 * 执行删除数据
 */
export async function remove(id) {
  const url = `activitys/${id}`;
  return request(url, {
    method: 'delete'
  });
}

/**
 * 执行更新操作
 */
export async function update(params) {
  const url = `activitys/${params.id}`;
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });
}

export async function updateBatch(params) {
  const url = `activitys/${params.id}/batch`;
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });
}
