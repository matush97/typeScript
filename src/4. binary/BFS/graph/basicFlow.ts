// Graph
// A — B — D
// |   |
// C   E
//
// Trace
// A → B, C → D, E

function bfs(graph: Record<string, string[]>, start: string): string[] {
    const visited = new Set<string>();
    const queue: string[] = [];
    const result: string[] = [];

    queue.push(start);
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

const graphBFS: Record<string, string[]> = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A"],
    D: ["B"],
    E: ["B"]
};

console.log(bfs(graphBFS, "A"))