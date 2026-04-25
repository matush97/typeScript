// Graph
// A — B — D
// |   |
// C   E
//
// Trace
// A → B → D → späť → E → späť → C

function dfs(graph: Record<string, string[]>, start: string): string[] {
    const visited = new Set<string>();
    const result: string[] = [];

    function traverse(node: string) {
        if (visited.has(node)) return;

        visited.add(node);
        result.push(node);

        for (const neighbor of graph[node]) {
            traverse(neighbor);
        }
    }

    traverse(start);
    return result;
}

const graph: Record<string, string[]> = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A"],
    D: ["B"],
    E: ["B"]
};

console.log(dfs(graph, "A"))