// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
var threeSum = function (nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
    if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
        for (let i = 0; i < length - 2;) {
            if (nums[i] > 0)
                break; // 优化2: 最左值为正数则一定无解
            let first = i + 1
            let last = length - 1
            do {
                if (first >= last || nums[i] * nums[last] > 0)
                    break // 两人选相遇，或者三人同符号，则退出
                let result = nums[i] + nums[first] + nums[last]
                if (result === 0) { // 如果可以组队
                    res.push([nums[i], nums[first], nums[last]])
                }
                if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
                    while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
                } else { // 实力太强，把大神那边右移一位
                    while (first < last && nums[last] === nums[--last]) {}
                }
            } while (first < last)
            while (nums[i] === nums[++i]) {}
        }
    }
    return res
}

let nums = [1,2,-2,-1];
// let nums = [0,0,0];
// let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [-2,10,-14,11,5,-4,2,0,-10,-10,5,7,-11,10,-2,-5,2,12,-5,14,-11,-15,-5,12,0,13,8,7,10,6,-9,-15,1,14,11,-9,-13,-10,6,-8,-5,-11,6,-9,14,11,-7,-6,8,3,-7,5,-5,3,2,10,-6,-12,3,11,1,1,12,10,-8,0,8,-5,6,-8,-6,8,-12,-14,7,9,12,-15,-12,-2,-4,-4,-12,6,7,-3,-6,-14,-8,4,4,9,-10,-7,-4,-3,1,11,-1,-8,-12,9,7,-9,10,-1,-14,-1,-8,11,12,-5,-7];
console.log(threeSum(nums));