// how-many-numbers-are-smaller-than-the-current-number

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ansAry=[];
    let count =0;
    for(let i=0;i<nums.length;i++){
        for(let j=0 ;j<nums.length;j++){
            if(nums[j]<nums[i] && j!=i){
                count += 1;
            }
        }
        ansAry[i]=count;
        count =0;
        
    }
    return ansAry
};