// function longestSubsequence(arr: number[], difference: number): number {
//     let res = []
//     let test = 0
//     const cloneArr = [...arr]
//     while (cloneArr.length) {
//         let max = 0
//         for (let i = 0; i < cloneArr.length; i++) {
//             const temp = cloneArr[i] + difference
//             for (let j = i + 1; j < cloneArr.length; j++) {
//                 if (cloneArr[j] === temp) {
//                     if (!res.length) {
//                         max = cloneArr[i]
//                         res.push(cloneArr[i])
//                     } else if (max > cloneArr[i])  {
//                         max  = cloneArr[i]
//                         res.push(cloneArr[i])
//                     }
//                 }
//             }
//         }
//         cloneArr.shift()
//         if (test < res.length) {
//             test = res.length
//         }
//         res = []
//     }
//     return new Set(res).size + 1
// }
// function longestSubsequence(arr: number[], difference: number): number {
//     let res = []
//     for (let i = arr.length - 1 ; i >= 0; i--) {
//         const temp = arr[i] - difference
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[j] === temp) {
//                 console.log(i, j)
//                 if (!res.length) res.push(arr[i])
//                 i = (i + 1) - (i - j)
//                 res.push(arr[j])
//                 break
//             }
//         }
//     }
//     return Array.from(new Set(res)).length
// }
function longestSubsequence(arr, difference) {
    const obj = {};
    let maxLen = 0;
    for (let num of arr) {
        if (obj[num - difference]) {
            obj[num] = obj[num - difference] + 1;
        }
        else {
            obj[num] = 1;
        }
        maxLen = Math.max(maxLen, obj[num]);
    }
    console.log(obj);
    return maxLen;
}
// longestSubsequence([1,5,7,8,5,3,4,2,1], -2)
// 8 5 4 2
longestSubsequence([4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8], 0);
// longestSubsequence([1,2,3,4], 1)
// console.log(longestSubsequence([1,5,7,8,5,3,4,2,1], -2))
