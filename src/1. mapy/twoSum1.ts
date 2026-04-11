// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.

// @ts-ignore
// function twoSum1(nums: number[], target: number): number[] {
//     let firstNumber: number;
//     let secondNumber: number;
//     let existTarget: boolean = false;
//
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 firstNumber = i;
//                 secondNumber = j;
//                 existTarget = true;
//                 break;
//             }
//         }
//         if (existTarget) break;
//     }
//
//     return [firstNumber, secondNumber]
// }

// const nums = [3, 2, 4]
// const target = 6;

// twoSum1(nums, target)

// https://www.youtube.com/watch?v=JQmId3YNsvE
// 5:28
// BETTER SOLUTION
function twoSum1_1(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const searchNumber: number = target - nums[i];

        if (map.has(searchNumber)) {
            return [map.get(searchNumber)!, i]
        }

        map.set(nums[i], i);
    }

    return []

}

const nums = [3, 2, 4]
const target = 6;

console.log(twoSum1_1(nums, target))