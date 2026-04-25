// 111. Minimum Depth of Binary Tree
// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root
// node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2
//
// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

import TreeNode from "../DFS/TreeNode";

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    const queue: [TreeNode, number][] = [[root, 1]];

    while(queue.length > 0) {
        // @ts-ignore
        const [node, depth] = queue.shift();

        if (node.left === null && node.right === null) {
            return depth;
        }

        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }

    return 0;
}