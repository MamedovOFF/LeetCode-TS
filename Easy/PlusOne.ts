function plusOne(digits: number[]): number[] {
  const res: string = digits.map((el) => el + '').join('')
  const ret = BigInt(res) + BigInt(1)
  return (ret + '').split('').map((el) => Number(el))
}
