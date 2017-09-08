function f1(callback) {
  //console.log(1)
  callback(null, 'one', 'two');
}
function f2(arg1, arg2, callback) {
  // console.log(2)
  // console.log(arg1, arg2)
  callback(null, 'three');
}
function f3(arg1, callback) {
  // console.log(3)
  callback(null, 'done');
}
const array = [f1, f2, f3]
let i = 0
const waterfall = (array, callback) => {
  const cb = (err,...result) => {
    if(err===null){
      i++
      if(i<array.length){
        array[i](...result, cb)
      }
      else{
         callback(...result)
      }
    }
    else{
      callback(...result)
    }
  }

  array[i](cb)
}
const cb = (err, result) => {
  if(err) {
    console.log(err)
    return err
  }
  else
    {
      console.log(...result)
      return result
    }

}
 waterfall(array,cb)