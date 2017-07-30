const lib = require('./ParrarelCall.js')
const fs = require('fs')

const finishedResult = (filename, cb) => {
  console.log('Startied writing in ' + filename + ' file.')
/*
    fs.readFile('./min.js', function(error, data){
      if(error){
        return console.error(error);
      }

    fs.open('../MyFiles/' + filename + '.js', 'w', function(error){
      if(error){
        return console.error();
      }

      fs.writeFile('../MyFiles/' + filename + '.js', data.toString(), function(err){
        if(err){
          return console.error(err);
        }
    })
  })
})
  // */
  cb(filename.length)
}

const filesArray = ['file1.js', 'file2.js', 'file3.js', 'file4.js', 'file5.js', 'file6.js', 'file7.js', 'file8.js', 'file9.js', 'file10.js']

const fn = (dataToWrite) => {
  return function (filename, cb) {
    // write to file.....
    fs.open('../MyFiles/' + filename + '.js', 'w', function (error) {
      if (error) {
        return console.error()
      }
      fs.writeFile('../MyFiles/' + filename + '.js', dataToWrite.toString(), function (err) {
        if (err) {
          return console.error(err)
        }
      })
    })
  }
}

fs.readFile('./min.js', function (error, data) {
  if (error) {
    return console.error(error)
  }

  lib.asyncParallel(
    fn(data),
    filesArray,
    (callback) => console.log(callback)
  )
})
//* /
