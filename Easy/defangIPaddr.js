function defangIPaddr(address) {
  return address.split('.').join('[.]')
}
console.log(defangIPaddr('1.1.1.1'))
//# sourceMappingURL=defangIPaddr.js.map
