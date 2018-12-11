/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    const cur = lengthOfLongestSubstring(s.substring(1));
    const str = s.substring(1,cur);

    if(s==null) return 0;  

    if(!str.includes(s[0])) {return (cur+1);}
    else{return cur }
    //if cant find return cur+1
    //if find return cur
};
let str = "st";
console.log(str[0]);
console.log(str.substring(1));
