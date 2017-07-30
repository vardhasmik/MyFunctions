const fs = require('fs')

const countM = (n, cb) => {
  console.log('Starting: ' + n)
  setTimeout(() => {
    cb(n % 7 === 0 ? true : false)
  }, n * 1000)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8]

/* for (let i = 0; i < array.length; i++) {
  const element = array[i]
  countM(element, () => {
    console.log(element)
  })
} */

/*
const brtuj = (i=0) => {
  if (i === array.length) {
    return
  }
  let j=true
  const cb = (resut) => {
    console.log('finished: ' + array[i] + ' with result: ' + resut)
      if(resut===true){
        return
      }
      brtuj(i+1)

  }
  countM(array[i], cb)
}
brtuj()
//*/


/*
const Bibar = (callback) => {
  // zugaher xodi saxin
  // henc voreve meki result true a, kanchi callback funkcian talov te vor elementi vraya true, u erkror angam el chkanches callback
  let j=true
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const cb = (resut) => {
      console.log('Finish: ' + element)
      if (resut === true && j===true) {
        j=false
        callback(element)
      }
    }

    countM(element, cb)
  }
}

Bibar((tiv) => {
  console.log('bibar finished on :' + tiv)
})
//*/
/* const f = callback => {
  setTimeout(() => {
    console.log(2)
    callback()
  }, 0)
}

/// Start Program
console.log('1')
f(function () {
  console.log('after setTimout')
})
console.log('3')
*/



const asyncParallel=(fn, arr, callback) =>{
  const resultArray = []
  // parallel call
  const brtuj = (i=0) => {
    if (i === arr.length) {
      return
    }
    const cb = (resut) => {
      console.log('finished: ' + arr[i] + ' with result: ' + resut)
        resultArray.push(resut)
        brtuj(i+1)
    }
    fn(arr[i], cb)
  }
  callback(resultArray)
}

asyncParallel(countM, array, (resultArray) => {
  console.log(resultArray)
  console.assert(resultArray[6] === true)
  console.assert(resultArray[5] === false)
})
