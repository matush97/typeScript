// 637. Average of Levels in Binary Tree

// Given the root of a binary tree, return the average value of the nodes
// on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
//
// Example 2:
// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

import TreeNode from "../DFS/TreeNode";

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];
    const queue: TreeNode[] = [root];
    const result: number[] = [];

    while(queue.length > 0) {
        const sizeOfQueue = queue.length;
        let valueNodes = 0;

        for (let i=0; i < sizeOfQueue; i++) {
            const node = queue.shift();

            // @ts-ignore
            valueNodes = valueNodes + node.val;
            // @ts-ignore
            if (node.left) queue.push(node.left);
            // @ts-ignore
            if (node.right) queue.push(node.right);
        }

        const avarage = valueNodes / sizeOfQueue;
        result.push(avarage);
    }

    return result;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(averageOfLevels(root))