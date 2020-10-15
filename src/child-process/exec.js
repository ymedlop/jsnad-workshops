'use strict'
const { exec } = require('child_process')
const cmd = process.platform === 'win32' ? 'dir' : 'ls'
exec(cmd, (err, stdout, stderr) => {
    console.log('err', err)
    console.log('subprocess stdout: ', stdout.toString())
    console.log('subprocess stderr: ', stderr.toString())
});
