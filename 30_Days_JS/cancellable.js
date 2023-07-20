function cancellable(fn, args, t) {
    let time;
    if (!time) {
        time = setTimeout(() => {
            fn(args);
        }, t);
    }
    return () => {
        clearTimeout(time);
    };
}
const result = [];
const fn = (x) => x * 5;
const args = [2], t = 20, cancelT = 50;
const start = new Date().getTime();
const logs = (...argsArr) => {
    const diff = Math.floor(new Date().getTime() - start);
    console.log(diff);
    //@ts-ignore
    result.push({ time: diff, returned: fn(...argsArr) });
};
const cancel = cancellable(logs, args, t);
const maxT = Math.max(t, cancelT);
setTimeout(() => {
    cancel();
}, cancelT);
setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
