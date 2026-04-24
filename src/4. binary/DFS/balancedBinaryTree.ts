// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
//
// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
//
// Example 3:
// Input: root = []
// Output: true

// Time: O(n)
// Space: O(n)

import TreeNode from "./TreeNode";

function isBalanced(root: TreeNode | null): boolean {
    function height(node: TreeNode | null): number {
        if (node === null) return 0;

        const left = height(node.left);
        if (left === -1) return -1;

        const right = height(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }

    return height(root) !== -1;
}

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);

console.log(isBalanced(root))