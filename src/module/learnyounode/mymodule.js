'use strict'
const fs = require('fs')
const path = require('path')

function fileFilter(folder, ext, cb) {
    fs.readdir(folder, (err, files) => {
        if (err) return cb(err)
        cb(null, files.filter(file => path.extname(file) === `.${ext}`))
    })
}

module.exports = fileFilter