export default {

  ArrayToHashMap(array: Array<object>, fieldForKey: string = 'id'): Map<number, object> {
    const HashMap = new Map();
    array.forEach((item) => HashMap.set(item[fieldForKey], item));
    return HashMap;
  },

  HashMapToArray(map: Map<number, object>): Array<object> {
    const array: Array<object> = [];
    map.forEach((item) => array.push(item));
    return array;
  },

};
