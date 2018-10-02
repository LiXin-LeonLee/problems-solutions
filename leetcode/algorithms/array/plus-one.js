// 超出表示数范围
// var plusOne = function(digits) {
//     return String(Number(digits.join('')) + 1).split('').map(Number);
// };

var plusOne = function (digits) {
    let digitUp = (nums) => {
        console.log(nums, nums.length);
        if (nums.length === 0) return [1];
        let lastDigit = nums[nums.length - 1] + 1;
        if (lastDigit > 9) {
            nums.pop();
            let temp = digitUp(nums);
            temp.push(lastDigit % 10);
            console.log(temp)
            return temp;
        } else {
            nums[nums.length - 1]++;
            return nums;
        }
    }
    return digitUp(digits);
}

console.log(plusOne([8,9,9, 9]))