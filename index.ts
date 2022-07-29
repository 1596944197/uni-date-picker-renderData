type ColumnDataType = { text: string; value: string; children: ColumnDataType }[];

function renderColumnData<T extends AnyArray>(list: T, key:string): ColumnDataType {
  if (!list) return [];
  return list.map?.((item) => ({
    text: item.name,
    value: item.id,
    children: renderColumnData(item, key),
  }));
}

export {
  renderColumnData,
};

export default {};