const myFilter = require('./mymodule.js')

myFilter(
    process.argv[2],
    process.argv[3],
    (err, data) => {
        if (err) return console.error(err)
        data.forEach(file => console.log(file))
    }
)