class UndergroundSystem {
  checkInData: { [id: number]: [string, number] }
  finished: { [path: string]: number[] }
  constructor() {
    this.checkInData = {}
    this.finished = {}
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.checkInData[id] = [stationName, t]
  }

  checkOut(id: number, stationName: string, t: number): void {
    const [startStation, time] = this.checkInData[id]
    delete this.checkInData[id]
    ;(this.finished[`${startStation}-${stationName}`] ??= []).push(t - time)
  }

  getAverageTime(startStation: string, endStation: string): number {
    const sum = this.finished[`${startStation}-${endStation}`].reduce((acc: number, v: number) => {
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
