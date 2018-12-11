/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 248ms 9.76%
 */
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length-1;i++){
        const j = nums.slice(i+1).indexOf(target-nums[i]);
        if(j !== -1){
            return([i,j+i+1]);
        }
    }
};

console.log(twoSum([0,1,7,10],8));