// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
// Example 1:
//
// Input: nums = [1,2,3,1]
//
// Output: true
//
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// function containsDuplicate(nums: number[]): boolean {
//     const setNumbers = new Set<number>();
//
//     for (const num of nums){
//         if (setNumbers.has(num)) {
//             return true;
//         }
//         setNumbers.add(num);
//     }
//
//     return false;
// }

function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate([2,14,18,22,21]))