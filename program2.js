function smallest_missing_positive_integer(nums) {
  // Step 1: Remove negative numbers and zeros
  nums = nums.filter(num => num > 0);

  // Step 2: Mark the presence of each positive integer
  for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (index < nums.length && nums[index] > 0) {
          nums[index] = -nums[index];
      }
  }

  // Step 3: Find the smallest missing positive integer
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }

  return nums.length + 1;
}

// Test cases
console.log(smallest_missing_positive_integer([3, 4, -1, 1]));  // Output: 2
console.log(smallest_missing_positive_integer([1, 2, 0]));      // Output: 3
console.log(smallest_missing_positive_integer([-1, -3, 4, 2])); // Output: 1
