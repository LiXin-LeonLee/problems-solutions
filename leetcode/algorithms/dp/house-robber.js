var rob = function (nums) {
    let amount = [0, nums[0]];
    const len = nums.length;
    for (let i = 2; i <= len; i++) {
        amount[i] = Math.max(amount[i - 1], amount[i - 2] + nums[i - 1]);
    }
    console.log(amount)
    return amount[len];
};

// console.log(rob([2, 0, 3, 4, 8, 3, 4, 6])); // 19
console.log(rob([1])); // 19