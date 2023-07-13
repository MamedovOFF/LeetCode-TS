function isValid(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+ 1]) {
            i++;
        } else {
            return false
        }
    }
    return true
}

console.log(isValid('{}[]()'))