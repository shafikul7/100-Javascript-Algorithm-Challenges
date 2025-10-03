const TwoSum = (a, b) => {
  let c = 10;
  if (a == c || b == c || a+b==c) {
    return true;
  } else {
    return false;
  }
};
console.log(TwoSum(91, 1));


const checkTen=(x,y)=>console.log([x,y,x+y].includes(10));
checkTen(9,11)