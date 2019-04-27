export const shuffleArray = array =>
  array.sort(() => Math.random() - 0.5).map(item => item);

export const deepClone = arr => arr.map(object => (object = { ...object }));
