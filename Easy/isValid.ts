function isValid(s: string): boolean {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i + 1]) {
            switch (s[i]) {
                case '(':
                    if (s[i + 1] !== ')') return false
                    break
                case '[':
                    if (s[i + 1] !== ']') return false
                    break
                case '{':
                    if (s[i + 1] !== '}') return false
            }
        }
    }
    return true
}
console.log(isValid('{[]}'))