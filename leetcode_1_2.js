/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 60ms 74.3%
 */
var twoSum = function(nums, target) {
    const nmap = new Map();
    nums.forEach((v,i) => nmap.set(v,i));

    for(let i = 0;i < nums.length-1; i++){
        const j = nmap.get(target-nums[i]);
        if(nmap.has(target-nums[i]) && j!==i){
            return([i,j]);
        }
    }
};

console.log(twoSum([0,1,7,10],17))