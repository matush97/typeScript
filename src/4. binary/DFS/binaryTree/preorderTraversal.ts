// 144. Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]
//
// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [1,2,4,5,6,7,3,8,9]
//
// Example 3:
// Input: root = []
// Output: []
//
// Example 4:
// Input: root = [1]
// Output: [1]

// https://www.geeksforgeeks.org/dsa/preorder-traversal-of-binary-tree/

import TreeNode from "../TreeNode";

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function dfs(node: TreeNode | null) {
        if (node === null) return;
        result.push(node.val);

        dfs(node.left);

        dfs(node.right);
    }

    dfs(root);
    return result;
}

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);

console.log(preorderTraversal(root))