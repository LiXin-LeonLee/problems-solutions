var maxSubArray = function(nums) {
    let s = [nums[0]];
    const len = nums.length;
    for (let i=1; i<len; i++) {
        s[i] = (s[i-1] > 0 ? s[i-1] : 0) + nums[i];
    }
    return Math.max.apply(null, s);
};