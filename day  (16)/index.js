// defanging-an-ip-address

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
   const str=address.split('');
   for (let index = 0; index < str.length; index++) {
    if(str[index]== '.'){
        str[index]='[.]';
    }
    
   }
   return str.join('');
};

console.log(defangIPaddr('1.1.1.1'))