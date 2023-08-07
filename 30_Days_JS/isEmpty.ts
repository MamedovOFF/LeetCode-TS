function isEmpty(obj: Record<string, any> | any[]): boolean {
  for (let el in obj) {
    return false
  }
  return true
}
