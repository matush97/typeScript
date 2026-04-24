// 543. Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
//
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
//
// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

//     Example 2:
// Input: root = [1,2]
// Output: 1

// Time: O(n)
// Space: O(h)

import TreeNode from "./TreeNode";

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function diameterOfNode(node: TreeNode | null): number {
        if (node === null) return 0;

        const left = diameterOfNode(node.left);
        const right = diameterOfNode(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    }

    diameterOfNode(root);

    return diameter;
}

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root))