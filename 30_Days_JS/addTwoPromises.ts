async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  const res1: number = await promise1
  const res2: number = await promise2
  return new Promise((resolve) => resolve(res1 + res2))
}
