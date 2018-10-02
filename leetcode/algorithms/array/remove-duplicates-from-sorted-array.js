var removeDuplicates = function (nums) {
    let len = nums.length;
    for (let i = len - 1; i > 0; i--) {
        if(nums[i] === nums[i-1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

// 额外空间
// var removeDuplicates = function (nums) {
//     return nums.filter((e, i) => nums.indexOf(e) === i).length;
// };


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5