// 9. roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let strArr = s.split('');
  for (let i = 0; i < strArr.length; i++) {
    let currentElement = strArr[i];
    let nextElement = strArr[i + 1];
    if (roman[currentElement] < roman[nextElement]) {
      sum = sum + roman[nextElement] - roman[currentElement];
      i++;
    } else {
      sum = sum + roman[currentElement];
    }
  }

  return sum;
};

