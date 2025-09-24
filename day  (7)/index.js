// 2160 minimum-sum-of-four-digit-number-after-splitting-digits

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    const arr = num.toString().split("").sort();
    console.log(arr)
    const sum = Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
    return sum;
};

console.log(minimumSum(2932))
console.log(minimumSum(4009))