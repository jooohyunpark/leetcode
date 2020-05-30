const l1 = [2, 4, 3]
const l2 = [5, 6, 4]

var addTwoNumbers = function(l1, l2) {
  const _l1 = l1.reduce((acc, cur, i) => acc + cur * Math.pow(10, i), 0)
  const _l2 = l2.reduce((acc, cur, i) => acc + cur * Math.pow(10, i), 0)
  const sum = _l1 + _l2

  return String(sum)
    .split('')
    .map(Number)
    .reverse()
}

addTwoNumbers(l1, l2)
