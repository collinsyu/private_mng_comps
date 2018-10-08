export function filterQueryData(payload) {
  //组件新的查询参数
  const newQuery = {page: 1,...payload};

  //去掉为''的参数，这些参数不在会URL显示
  for (var key in newQuery) {
    if (!newQuery[key]) {
      newQuery[key] = undefined
    } else if(newQuery[key] === 'all'){
      newQuery[key] = undefined
    }
  }
  return newQuery;
}
