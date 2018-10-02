// 耗时长
// var containsDuplicate = function(nums) {
//     return nums.some((e, i) => nums.indexOf(e) !== i);
// };

// 耗时长：重复的遍历搜索
// var containsDuplicate = function(nums) {
//     let len = nums.length;
//     for (let i = 0; i<len-1; i++) {
//         if(nums.lastIndexOf(nums[i]) !== i) return true;
//     }
//     return false;
// };

// hash 快
var containsDuplicate = function (nums) {
    let len = nums.length;
    let obj = {};
    for (let i=0; i<len; i++) {
        if(obj[nums[i]]) {
            return true;
        }
        obj[nums[i]] = 1;
    }
    return false;
}

console.log(containsDuplicate([1,2,0,2]))