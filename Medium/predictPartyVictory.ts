function predictPartyVictory(senate: string): string {
  let banIndex = {}
  let rBan = 0
  let dBan = 0
  let R = 0
  let D = 0

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') R++
    if (senate[i] === 'D') D++
  }

  while (true) {
    for (let i = 0; i < senate.length; i++) {
      if (banIndex[i]) continue
      if (senate[i] === 'R')
        if (rBan > 0) {
          rBan--
          banIndex[i] = true
          R--
        } else dBan++
      if (senate[i] === 'D')
        if (dBan > 0) {
          dBan--
          banIndex[i] = true
          D--
        } else rBan++
      if (R === 0) return 'Dire'
      if (D === 0) return 'Radiant'
    }
  }
}
