function isValid(s) {
    var arr = s.split('').sort();
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1]) {
            switch (arr[i]) {
                case '(':
                    if (arr[i + 1] !== ')')
                        return false;
                    break;
                case '[':
                    if (arr[i + 1] !== ']')
                        return false;
                    break;
                case '{':
                    if (arr[i + 1] !== '}')
                        return false;
            }
        }
    }
    return true;
}
console.log(isValid('{[]}'));
