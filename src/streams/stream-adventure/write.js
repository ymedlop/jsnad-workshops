const { Writable } = require('stream')

class WritableStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(`writing: ${chunk.toString()}`)
        callback()
    }
}

const ws = new WritableStream()
process.stdin.pipe(ws)