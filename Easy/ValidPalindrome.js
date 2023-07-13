function isPalindrome(s) {
    const tempStr = s.replace(/[^a-zA-Z0-9]+/g, '');
    return tempStr.toUpperCase() === tempStr.split('').reverse().join('').toUpperCase();
}
;
//# sourceMappingURL=ValidPalindrome.js.map