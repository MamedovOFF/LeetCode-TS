function strStr(haystack, needle) {
    if (!haystack || !needle)
        return -1;
    let i = 0;
    while (haystack[i]) {
        let j = 0;
        while (haystack[i + j] && needle[j] && i + j < haystack.length && haystack[i + j] == needle[j])
            j++;
        if (!needle[j])
            return i;
        i++;
    }
    return -1;
}
console.log(strStr('butsadsad', 'sad'));
//# sourceMappingURL=strStr.js.map