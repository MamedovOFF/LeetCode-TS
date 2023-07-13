class LRUCache {
    constructor(capacity) {
        this.max_size = capacity;
        this.cache = {};
        this.list_cache_key = [];
    }
    get(key) {
        if (this.cache[key] >= 0) {
            this.list_cache_key = this.list_cache_key.filter((el) => el !== key);
            this.list_cache_key.push(key);
            return this.cache[key];
        }
        return -1;
    }
    put(key, value) {
        const keys = Object.keys(this.cache);
        if (this.max_size === keys.length && !this.cache[key]) {
            delete this.cache[this.list_cache_key[0]];
            this.list_cache_key.shift();
        }
        this.list_cache_key = this.list_cache_key.filter((el) => el !== key);
        this.list_cache_key.push(key);
        this.cache[key] = value;
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1));    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2));    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1));    // return -1 (not found)
// console.log(lRUCache.get(3));    // return 3
// console.log(lRUCache.get(4));    // return 4
const lRUCache = new LRUCache(2);
lRUCache.put(2, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(2)); // 2
lRUCache.put(1, 1);
lRUCache.put(4, 1);
console.log(lRUCache.get(2)); // -1
