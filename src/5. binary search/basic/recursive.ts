// Recursive Algorithm:
// Time: O(log n)
// Space: O(log n)

function binarySearchRecursive(
    nums: number[],
    target: number,
    left = 0,
    right = nums.length - 1
): number {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
        return binarySearchRecursive(nums, target, mid + 1, right);
    } else {
        return binarySearchRecursive(nums, target, left, mid - 1);
    }
}

console.log(binarySearchRecursive([1,3,5,7,9], 7));