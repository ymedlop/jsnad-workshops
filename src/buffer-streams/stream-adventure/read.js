const { Readable } = require('stream')

class MyStream extends Readable {
  _read() {}
}

new MyStream().pipe(process.stdin).pipe(process.stdout)

