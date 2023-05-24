function strStr(haystack, needle) {
    if (!haystack || !needle)
        return -1;
    var i = 0;
    while (haystack[i]) {
        var j = 0;
        while (haystack[i + j] && needle[j] && i + j < haystack.length && haystack[i + j] == needle[j])
            j++;
        if (!needle[j])
            return i;
        i++;
    }
    return -1;
}
console.log(strStr('butsadsad', 'sad'));
