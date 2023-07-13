const switchRoman = (currentValue) => {
    let romanNumber = 0;
    switch (currentValue) {
        case 'I':
            romanNumber = 1;
            break;
        case 'V':
            romanNumber = 5;
            break;
        case 'X':
            romanNumber = 10;
            break;
        case 'L':
            romanNumber = 50;
            break;
        case 'C':
            romanNumber = 100;
            break;
        case 'D':
            romanNumber = 500;
            break;
        case 'M':
            romanNumber = 1000;
            break;
    }
    return romanNumber;
};
function romanToInt(s) {
    let accumulator = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            accumulator += 4;
            i++;
        }
        else if (s[i] === "I" && s[i + 1] === "X") {
            accumulator += 9;
            i++;
        }
        else if (s[i] === "X" && s[i + 1] === "L") {
            accumulator += 40;
            i++;
        }
        else if (s[i] === "X" && s[i + 1] === "C") {
            accumulator += 90;
            i++;
        }
        else if (s[i] === "C" && s[i + 1] === "D") {
            accumulator += 400;
            i++;
        }
        else if (s[i] === "C" && s[i + 1] === "M") {
            accumulator += 900;
            i++;
        }
        else {
            accumulator += switchRoman(s[i]);
        }
    }
    return accumulator;
}
console.log(romanToInt('MCMXCIV')); // 1994
//# sourceMappingURL=RomanToInteger.js.map