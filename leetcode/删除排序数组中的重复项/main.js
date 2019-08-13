/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1)
        return nums.length;
    let left = 0;
    for(let right = 1; right < nums.length;){
        if(nums[right] !== nums[left]){
            let temp = nums[right];
            left++;
            right++;
            nums[left] = temp;
        }else{
            right ++;
        }
    }
    return ++left;
};

// let nums = [0,0,1,1,1,2,2,3,3,4];
// let nums = [1,1,2];
console.log(removeDuplicates(nums));