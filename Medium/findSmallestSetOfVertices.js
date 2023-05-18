function findSmallestSetOfVertices(n, edges) {
    // @ts-ignore
    var inorder = new Array(n).fill(0);
    for (var i = 0; i < edges.length; i++) {
        var temp = edges[i];
        console.log(temp[1], 'temp');
        inorder[temp[1]]++;
    }
    var output = [];
    for (var i = 0; i < inorder.length; i++) {
        if (inorder[i] === 0)
            output.push(i);
    }
    return output;
}
console.log(findSmallestSetOfVertices(6, [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]));
