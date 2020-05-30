var lengthOfLongestSubstring = function(s) {
  let max_length = 0
  let current = 0
  let hash = {}

  if (s.length < 2) {
    max_length = s.length
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      current++
    } else {
      current = Math.min(i - hash[s[i]], current + 1)
    }

    hash[s[i]] = i
    max_length = Math.max(max_length, current)
  }

  return max_length
}

console.log(lengthOfLongestSubstring('abba'))

// var lengthOfLongestSubstring = function(s) {
//   let max = 0

//   if (s.length < 2) {
//     return s.length
//   }

//   for (let i = 0; i < s.length - 1; i++) {
//     let current = 1
//     let set = new Set([s[i]])
//     for (let j = i + 1; j < s.length; j++) {
//       if (set.has(s[j])) break
//       current++
//       set.add(s[j])
//     }
//     max = Math.max(max, current)
//   }

//   return max
// }

// console.log(lengthOfLongestSubstring('abcdb'))
