var move = [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1],
];
function shortestPathBinaryMatrix(grid) {
    var n = grid.length - 1;
    if (grid[0][0] === 1 || grid[n][n] === 1)
        return -1;
    var stack = [{ position: [0, 0], count: 1 }];
    grid[0][0] = 1;
    var _loop_1 = function () {
        var _a = stack.shift(), position = _a.position, count = _a.count;
        if (position[0] === n && position[1] === n)
            return { value: count };
        move.forEach(function (mov) {
            var _a;
            var i = position[0] + mov[0];
            var j = position[1] + mov[1];
            if (((_a = grid[i]) === null || _a === void 0 ? void 0 : _a[j]) === 0) {
                stack.push({ position: [i, j], count: count + 1 });
                grid[i][j] = 1;
            }
        });
    };
    while (stack.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return -1;
}
console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]));
