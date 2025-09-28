//  1672 richest customer Wealth 
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let rich=[];
    let bankCusSum=0;
    for (let i = 0; i < accounts.length; i++) {
        for (let b = 0; b < accounts[i].length; b++) {
            bankCusSum +=accounts[i][b];
            // console.log(bankCusSum);
            
        }

        rich[i]=bankCusSum;
        bankCusSum=0;
    }
    for (let r = 0; r < rich.length; r++) {
      if(rich[0]<rich[r]){
        rich[0]=rich[r];
      }
        
    }
    return rich[0];
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))