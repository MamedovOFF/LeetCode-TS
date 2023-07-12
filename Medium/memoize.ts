type Fm = (...params: any) => any

function memoize(fn: Fm): Fm {
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args)
        if (key in cache) return cache[key]
        const result = fn(...args)
        cache[key] = result
        return result
    }
}
