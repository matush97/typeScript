// 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Example 1
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
// Example 3:
// Input: root = []
// Output: []

// https://www.geeksforgeeks.org/dsa/inorder-traversal-of-binary-tree/

// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

import TreeNode from "./TreeNode";

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function dfs(node: TreeNode | null): void {
        if (node === null) return;

        dfs(node.left)

        result.push(node.val);

        dfs(node.right)
    }

    dfs(root)
    return result;
}

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);

// const root = new TreeNode(1);
// root.right = new TreeNode(2);
// root.right.left = new TreeNode(3);

console.log(inorderTraversal(root))