const split2 = require('split2')
const through2 = require('through2')

let lineCount = 0

process.stdin
  .pipe(split2())
  .pipe(through2(function (buf, _, next) {
    const line = buf.toString()
    if (lineCount % 2 === 0) {
        this.push(line.toLowerCase() + '\n')
    } else {
        this.push(line.toUpperCase() + '\n')
    }
    lineCount++
    next()
  }))
  .pipe(process.stdout)