type ColumnDataType = { text: string; value: string; children: ColumnDataType }[];

/**
 * @param {
 * list为源数组
 * key为源数组每个对象中的期望展示为text的值
 * value为源数组每个对象中期望回调的值
 * childListKey为递归对象的键值
 * }
 */

export function renderColumnData<T extends AnyArray>({
  list,
  key,
  value,
  childListKey,
}:{
  list: T,
  key:string,
  value:any,
  childListKey: string,
}): ColumnDataType {
  if (!list) return [];
  return list.map?.((item) => ({
    text: item[key],
    value: item[value],
    children: renderColumnData({
      list: item[childListKey], key, value, childListKey,
    }),
  }));
}

// # 使用示例
const test = [{
  name: '一年级',
  id: '1-0',
  children: [
    {
      name: '1.1班',
      id: '1-1',
      children: [
        {
          name: '草拟大额',
          id: 'bbb',
        },
      ],
    },
    {
      name: '1.2班',
      id: '1-2',
    },
  ],
},
{
  name: '二年级',
  id: '2-0',
},
{
  name: '三年级',
  id: '3-0',
}];

renderColumnData({
  list: test,
  key: 'name',
  value: 'id',
  childListKey: 'children',
});
