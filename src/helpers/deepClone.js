export const deepClone = arr => {
  let clone = [];
  arr.forEach(object => {
    let clonedObject = {};
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        clonedObject[key] = object[key];
      }
    }
    clone.push(clonedObject);
  });
  return clone;
};
