const nums = [2, 3, 6, 7, 11, 15],
  target = 9

const calculate = (candidate, target) => {
  const result = []

  for (let i = 0; i < candidate.length; i++) {
    for (let j = 0; j < candidate.length; j++)
      if (i !== j && candidate[i] + candidate[j] === target) {
        result.push([nums[i], nums[j]])
        candidate.splice(j, 1)
      }
  }

  return result
}

const result = calculate(nums, target)

console.log(result)
