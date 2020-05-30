// import './test/01'
// import './test/02'

var lengthOfLongestSubstring = function(s) {
  let max = 0

  if (s.length < 2) {
    return s.length
  }

  for (let i = 0; i < s.length - 1; i++) {
    let current = 1
    let set = new Set([s[i]])
    for (let j = i + 1; j < s.length; j++) {
      if (set.has(s[j])) break
      current++
      set.add(s[j])
    }
    max = Math.max(max, current)
  }

  return max
}

console.log(lengthOfLongestSubstring('abcdb'))
