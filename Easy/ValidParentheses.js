function isValid(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            i++;
        }
        else {
            console.log(s[i], s[i + 1]);
            return false;
        }
    }
    return true;
}
console.log(isValid('{}[]()'));
