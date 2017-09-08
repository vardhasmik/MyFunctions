const arr = []
const pr = cb => {
  cb(Math.random(), arr)
  if (arr.length < 20) {
    setTimeout(() => {
      pr(cb)
    }, 1000)
  } else {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    console.log(arr)
    console.log(sum / arr.length)
    return sum / arr.length
  }
}

const cb = (number, arr) => {
  arr.push(number)
  return arr
}

console.log(pr(cb))
