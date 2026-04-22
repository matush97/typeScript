// 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
//
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
//
// Input: root = [1,null,2]
// Output: 2

// https://www.youtube.com/watch?v=ScvTcU2Aifs

// 1 + max(L,R)
// Time: O (n)
// Space: O(h)

import TreeNode from "./TreeNode";

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
}

// let root = new TreeNode(12);
// root.left = new TreeNode(8);
// root.right = new TreeNode(18);
// root.left.left = new TreeNode(5);
// root.left.right = new TreeNode(11);

let root = new TreeNode(1);
root.left = new TreeNode(2);

console.log(maxDepth(root))

