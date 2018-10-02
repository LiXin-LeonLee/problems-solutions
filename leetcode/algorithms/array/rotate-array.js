var rotate = function (nums, k) {
    let len = nums.length;
    let x = (-k % len) === 0 ? 0 : (-k % len);
    if(x !== 0) nums.unshift(...nums.splice(x));
    console.log(nums);
};

rotate([-1], 3);