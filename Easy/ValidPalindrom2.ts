function isValidSubPalindrome(sr: string, left: number, right: number): boolean {
    while (left < right) {
        if (sr[left] !== sr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true
};

function validPalindrome(s: string): boolean {
    let left=0;
    let right=s.length-1;
    while (left<right) {
        if (s[left] !== s[right]) {
            return (isValidSubPalindrome(s, left + 1, right) ||isValidSubPalindrome(s, left, right - 1))
        }
        left++;
        right--;
    }
    return true
};