async function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const res = [];
        let i = 0;
        functions.forEach(async (el, idx) => {
            try {
                const response = await el();
                res[idx] = response;
                i++;
                if (i === functions.length) {
                    resolve(res);
                }
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
const promise = promiseAll([
    () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
    () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
    () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]);
promise.then(console.log); // [42]
