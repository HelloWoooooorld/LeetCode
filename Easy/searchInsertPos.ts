function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

console.log(searchInsert([1, 3, 5, 6], 1));
