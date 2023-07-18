class UndergroundSystem {
  constructor() {
    this.checkInData = {}
    this.finished = {}
  }
  checkIn(id, stationName, t) {
    this.checkInData[id] = [stationName, t]
  }
  checkOut(id, stationName, t) {
    var _a
    var _b, _c
    const [startStation, time] = this.checkInData[id]
    delete this.checkInData[id]
    ;((_a = (_b = this.finished)[(_c = `${startStation}-${stationName}`)]) !== null && _a !== void 0
      ? _a
      : (_b[_c] = [])
    ).push(t - time)
  }
  getAverageTime(startStation, endStation) {
    const sum = this.finished[`${startStation}-${endStation}`].reduce((acc, v) => {
      return acc + v
    })
    return sum / this.finished[`${startStation}-${endStation}`].length
  }
}
/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
//# sourceMappingURL=UndergroundSystem.js.map
