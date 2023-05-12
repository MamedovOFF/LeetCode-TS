function longestCommonPrefix(strs) {
    var firstStr = strs[0];
    for (var i = 0; i < firstStr.length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (firstStr[i] !== strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return firstStr;
}
console.log(longestCommonPrefix(['asdf', 'asdfqwe', 'asdfzxclq']));
