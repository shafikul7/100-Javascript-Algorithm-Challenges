// palindrome-number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result= x.toString().split('').reverse().join('');
    if(result == x){
        return true;
    }else {
        return false;
    }
};

console.log(isPalindrome(211))
console.log(isPalindrome(121))

