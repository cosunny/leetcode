/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0;i < nums.length; i++){
        for(let j = i+1; j< nums.length;j++)
        if(nums[i]+ nums[j] === target){
            return([i,j])
        }
    }
};

let a = [2,7,10,11];
let tar = 17;
console.log(twoSum(a,tar));