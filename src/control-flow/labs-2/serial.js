'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const opAAsync = promisify(opA);
const opBAsync = promisify(opB);
const opCAsync = promisify(opC);

async function printLetters() {
  const A = await opAAsync();
  const B = await opBAsync();
  const C = await opCAsync();
  print(A);
  print(B);
  print(C);
}

printLetters()