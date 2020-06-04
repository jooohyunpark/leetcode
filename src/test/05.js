var longestPalindrome = function(s) {
  if (s.length < 2) return s

  let max = 0
  let answer = null

  for (let i = 0; i < s.length - 1; i++) {
    let cur1 = 0
    let cur2 = 1
    let temp1
    let temp2

    // case 1 even
    if (s[i] === s[i + 1]) {
      temp1 = s[i] + s[i + 1]
      cur1 = 2

      for (let j = 1; j <= s.length / 2; j++) {
        if (
          s[i - j] !== s[i + 1 + j] ||
          s[i - j] === undefined ||
          s[i + 1 + j] === undefined
        )
          break

        cur1 += 2
        temp1 = s[i - j] + temp1 + s[i + 1 + j]
      }
    }

    // case 2 general
    temp2 = s[i]

    for (let j = 1; j <= s.length / 2; j++) {
      if (
        s[i - j] !== s[i + j] ||
        s[i - j] === undefined ||
        s[i + j] === undefined
      )
        break

      cur2 += 2
      temp2 = s[i - j] + temp2 + s[i + j]
    }

    let cur = Math.max(cur1, cur2)

    if (max < cur) {
      answer = cur1 > cur2 ? temp1 : temp2
      max = cur
    }
  }

  return answer
}

console.log(longestPalindrome('aaaa'))
