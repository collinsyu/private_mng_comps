import request from '../common/utils/request';
import qs from 'qs';
/**
 * 分页查询方式
 */
export async function query(params) {
  return request(`orderreports?${qs.stringify(params)}`);
}

/**
 * 提交增加的数据
 */
export async function create(params) {
  return request('orderreports', {
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
  return request('orderreports/new');
}

/**
 * 查看数据的详情
 */
export async function show(params) {
  const id = params.id;
  return request(`orderreports/${id}`);
}

/**
 * 修改前需要显示的数据
 */
export async function edit(params) {
  const id = params.currentItem.id;
  return request(`orderreports/${id}/edit`);
}

/**
 * 执行删除数据
 */
export async function remove(id) {
  const url = `orderreports/${id}`;
  return request(url, {
    method: 'delete'
  });
}

/**
 * 执行更新操作
 */
export async function update(params) {
  const url = `orderreports/${params.id}`;
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });

}
