import {TreeNode} from "../utils";

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    if (!root) return null;
    if (k === 0) return [target.val]
    // create a new graph
    const graph = new Map<number, number[]>();
    graph.set(root.val, [])
    // create the bi-directional connections via traversing the tree
    preOrder(root, graph)

    const elemsWithDistK: Array<number> = [];
    const visited = new Set<number>();
    // traverse the graph and collect the node values with k distance from target
    graphTraversal(graph, target.val, k, visited, elemsWithDistK)
    // get only distinct node values
    const tempSet = new Set(elemsWithDistK)

    return [...tempSet];
};

function graphTraversal(graph: Map<number, number[]>, root: number, k: number, visited: Set<number>, elemsWithDistK: Array<number>): undefined {
    if (k < 0 || visited.has(root)) return;


    if (k === 0) {
        elemsWithDistK.push(root);
        return;
    }

    visited.add(root)

    for (let node of graph.get(root)) {
        graphTraversal(graph, node, k - 1, visited, elemsWithDistK)
    }
}

function preOrder(root: TreeNode, graph: Map<number, number[]>): void {
    if (!root) return;

    if (root.left) {
        graph.get(root.val).push(root.left.val);
        graph.set(root.left.val, [root.val]);
    }
    if (root.right) {
        graph.get(root.val).push(root.right.val);
        graph.set(root.right.val, [root.val]);
    }


    preOrder(root.left, graph);
    preOrder(root.right, graph);
}