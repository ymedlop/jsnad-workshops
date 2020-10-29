const { Readable } = require('stream')

class ReadableStream extends Readable {
  _read() {}
}

const rs = new ReadableStream()
rs.push(process.argv[2])
rs.pipe(process.stdout)