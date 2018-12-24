import fetch from 'dva/fetch';
import {message, Modal} from 'antd';
import qs from 'qs';
import path from "path";

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
  if(!isErrorModal) {
    isErrorModal = true;
    if(error.code === '401' || error.code === '302' || error.code === 302) {
      Modal.error({
        title: '访问失败',
        content: '您的会话已过期，需要重新登录',
        onOk() {
          //window.location = response.url;
          window.location.reload();
          return new Promise((resolve) => {
            setTimeout(resolve, 1);
          });
        }
      });
    } else if(error.code === 403) {
      Modal.error({
        title: '操作失败',
        content: '抱歉，您的权限不够，请联系管理员!',
        onOk() {
          isErrorModal = false;
        }
      });
    } else {
      console.log(error);
      Modal.error({
        title: '操作失败',
        content: '网络请求失败了,请检查网络是否正常!',
        onOk() {
          isErrorModal = false;
        }
      });
    }

  }


  //throw new Error("网络请求失败了!");
  const data = {
    success: false
  }
  const d = {
    data
  }
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
    const error = new Error(401);
    error.code = '401';
    error.content = "您的会话已过期，需要重新登录";
    error.title="访问失败";
    throw error;
  } else {
    if (response.status === 200) {
      //表示请求正确
      return response;
    } else {
      console.log(response);
      const error = new Error(response.statusText);
      error.response = response;
      error.code = response.status;

      //Modal.error({title: '操作失败', content: '网络请求失败了11'});
      throw error;
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
        message.error(data.resultView);
      }
    } else {
      if(!isErrorModal) {
        Modal.error({
          title: data.retInfo,
          content: data.resultView,
          onOk() {
            if (data.resultCode === '401') {
              //表示需要登录，重新刷新页面进行跳转
              window.location.reload();
            }
            return new Promise((resolve) => {
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
export default function request(url, options) {
  //const murl = "api/"
  const surl = path.join(window.path ,url);

  let opts = {
    credentials: 'include',
    headers: {
      'x-requested-with': true
    },
    ...options
  };
  //options.credentials = 'include';
  return fetch(surl, opts).then(checkStatus).then(parseJSON).then(checkData).then((data) => (data)).catch(parseError);
}

/**
 * 分页查询方式
 */
export async function query(module,params) {
  return request(`${module}?${qs.stringify(params)}`);
}

/**
 * 提交增加的数据
 */
export async function create(module,params) {
  return request(module, {
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
export async function donew(module,params) {
  return request(`${module}/new`);
}

/**
 * 查看数据的详情
 */
export async function show(module,params) {
  const id = params.id;
  return request(`${module}/${id}`);
}

/**
 * 修改前需要显示的数据
 */
export async function edit(module,params) {
  const id = params.currentItem.id;
  return request(`${module}/${id}/edit`);
}

/**
 * 执行删除数据
 */
export async function remove(module,id) {
  const url = `${module}/${id}`;
  return request(url, {
    method: 'delete'
  });
}

export async function patch(path, params) {
  return request(path, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });
}

/**
 * 执行更新操作
 */
export async function update(module,params) {
  const url = `${module}/${params.id}`;
  return request(url, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: qs.stringify(params)
  });
}
