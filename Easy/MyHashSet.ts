class MyHashSet {
    arr: Array<number>

    constructor() {
        this.arr = []
    }

    add(key: number): void {
        if (this.arr.indexOf(key) === - 1) this.arr.push(key)
    }

    remove(key: number): void {
        const idx = this.arr.indexOf(key)
        if (idx !== - 1) this.arr.splice(idx, 1)
    }

    contains(key: number): boolean {
        return this.arr.indexOf(key) !== -1;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */