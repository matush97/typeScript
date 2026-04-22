// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
//
// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false
//
// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// https://www.youtube.com/watch?v=jK6XXYezw2g
// https://www.geeksforgeeks.org/dsa/write-c-code-to-determine-if-two-trees-are-identical/

import TreeNode from "./TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const rootP = new TreeNode(1);
rootP.left = new TreeNode(2);
rootP.right = new TreeNode(3);

const rootQ = new TreeNode(1);
rootQ.left = new TreeNode(2);
rootQ.right = new TreeNode(3);

console.log(isSameTree(rootP, rootQ))
