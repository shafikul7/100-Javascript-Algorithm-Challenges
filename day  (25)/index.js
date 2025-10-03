// toArray({a:1,b:2}) -> [["a",1],["b",2]]

const toArray = (obj) => {
  return Object.keys(obj).map((k) => [k, obj[k]]);
//   console.log(k);
//   console.log(obj[k]);
};
console.log(toArray({ a: 1, b: 2 ,c:3}));
