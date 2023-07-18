async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  const res1 = await promise1
  const res2 = await promise2
  return new Promise((resolve) => resolve(res1 + res2))
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((res) => console.log(res))
