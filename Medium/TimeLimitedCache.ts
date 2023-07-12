class TimeLimitedCache {
    public cache: {
        value?: number,
        time?:number
    }
    constructor() {
        this.cache = {}
    }

    set(key: number, value: number, duration: number): boolean {
        let res = false
        if (this.cache[key]?.time >  new Date().getTime()) res = true
        this.cache[key] = {
            value: value,
            time:  new Date().getTime() + duration
        }
        return res
    }

    get(key: number): number {
        if (this.cache[key]?.time > new Date().getTime()) return this.cache[key]?.value
        return -1
    }

    count(): number {
        let res = 0
        for (let key in this.cache) {
            if (this.cache[key]?.time > new Date().getTime()) {
                res++
            }
        }
        return res
    }
}



