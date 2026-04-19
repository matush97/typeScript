// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
//
//     Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//     Example 1:
//
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// climbStairs(5)
// ├── climbStairs(4)
// │   ├── climbStairs(3)
// │   │   ├── climbStairs(2)
// │   │   └── climbStairs(1)
// │   └── climbStairs(2)
// └── climbStairs(3)
//     ├── climbStairs(2)
//     └── climbStairs(1)

// function climbStairs(n: number): number {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return climbStairs(n - 1) + climbStairs(n - 2);
// }

function climbStairs(n: number, memo: Record<number, number> = {}): number {
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (memo[n]) return memo[n];
    console.log(memo);
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
}

console.log(climbStairs(6))