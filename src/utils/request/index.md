用于发起ajax请求

## 何时使用

当页面需要想后台发起请求时。

## API




### `request`：

```
request(url,options).then(...)

// url 应该是path，真正的请求url会转化为window.path + url；
// options 参考 https://github.com/github/fetch
```

后面的方法都是基于request 更具体的方法；
***



### `query`：

```

<!-- 其实就是get请求 -->

query(url,params).then(...)
请求地址会被转化为 ${url}?${qs.stringify(params)}

```




### `create`：

```
<!--  其实就是post 请求，名字先这样定义吧，以后再正 -->
create(url,params).then(...)；

```



### `donew`：

```
懵逼！
请不要使用这个方法！！！

太细致的方法， 请到项目model中自定义
```



### `show`：

```
懵逼！
请不要使用这个方法！！！

太细致的方法， 请到项目model中自定义
```



### `edit`：

```
懵逼！
请不要使用这个方法！！！

太细致的方法， 请到项目model中自定义
```



### `remove`：

```

remove(url,params).then(...)；
// url 会被改造为 `${url}/${params.id}`; 所以params里面请务必有id

<!--  该方法为delete，params应为对象 -->
```



### `patch`：

```

patch(url,params).then(...)


<!--  该方法为patch，params应为对象 -->
```



### `update`：

```
update(url,params).then(...)


// url 会被改造为 `${url}/${params.id}`; 所以params里面请务必有id

<!--  该方法为patch，params应为对象 -->

```
