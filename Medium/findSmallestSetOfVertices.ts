function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const inorder:Array<number>=new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
        let  temp:number[]=edges[i];
        inorder[temp[1]]++;
    }
    const output: Array<number> = []
    for (let i = 0; i < inorder.length; i ++) {
        if (inorder[i] === 0)
            output.push(i)
    }
    return output
}

console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]))