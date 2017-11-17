export default function filterObject(obj, predicate) {
  const result = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (Object.prototype.hasOwnProperty.call(obj, key) && !predicate({ param: obj[key], key })) {
      result[key] = obj[key];
    }
  }

  return result;
}
