// 145. Binary Tree Postorder Traversal
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
//
// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
//
// Example 3:
// Input: root = []
// Output: []
//
// Example 4:
// Input: root = [1]
// Output: [1]

import TreeNode from "../TreeNode";

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function dfs(node: TreeNode | null): void {
        if (node === null) return;

        dfs(node.left);
        dfs(node.right);

        result.push(node.val);
    }

    dfs(root);
    return result;
}

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);

console.log(postorderTraversal(root))