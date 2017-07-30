const countM = (n, cb) => {
  console.log('Starting: ' + n)
  setTimeout(() => {
    cb(n % 6 === 0 ? true : false)
  }, n === 6 ? 100 : n + 1 * 1000)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// /*
const asyncParallel = (fn, arr, callback) => {
  const resultArray = []
  // parallel call
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    const cb = (result) => {
      console.log('finished: ' + element + ' with result: ' + result)
      resultArray[i] = result
      if (resultArray.length === arr.length) {
        callback(resultArray)
      }
    }
    fn(arr[i], cb)
  }
}

/* asyncParallel(countM, array, (resultArray) => {
    console.log(resultArray)
  // console.assert(resultArray[6] === true)
  // console.assert(resultArray[5] === false)
}) */

// */

const asyncSerial = (array, f, callback) => {
  const resultArray = []
  const cb = (result) => {
    const index = resultArray.length
    console.log('finished: ' + array[index] + ' with result: ' + result)
    resultArray[index] = result
    if (resultArray.length === array.length) {
      callback(resultArray)
    } else {
      f(array[index], cb)
    }
  }
  f(array[0], cb)
}
module.exports = {
  asyncParallel,
  asyncSerial
}

/* asyncSerial(array, countM, (resultArray) => {
  console.log(resultArray)
} ) */

/*
const resultArray = []
const asyncSerial=(element,i, callback)=>{
  const cb=(result)=>{
    console.log('finished: ' + element + ' with result: ' + result)
    resultArray[i]=result
    if(resultArray.length===array.length){
      callback(resultArray)
    }
  }
  countM(element, cb)
}

for(let i=0; i<array.length;i++){
  asyncSerial(array[i],i, (resultArray)=>{
    console.log((resultArray));
  })

}
// */
