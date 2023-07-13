function plusOne(digits) {
    const res = digits.map((el) => el + '').join('');
    const ret = BigInt(res) + BigInt(1);
    return (ret + '').split('').map((el) => Number(el));
}
//# sourceMappingURL=PlusOne.js.map