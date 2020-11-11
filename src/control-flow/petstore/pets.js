const https = require('https');
const pets = [1,2,3,4,5,6,7,8,9]

function getPet(id) {
    const url = `https://petstore.swagger.io/v2/pet/${id}`
    let result = ''
    return new Promise((resolve, reject) => {
        console.log(`Calling to ${url}`)
        https.get(url, res => {
            res.on('data', chunk => result += chunk.toString())
            res.on('end', () => setTimeout(() => resolve(result), Math.floor(Math.random() * 1000)))
        })
        .on('error', err => reject(err))
    })
}

const promises = pets.map(pet => getPet(pet));
console.log(promises)

Promise.all(promises).then(resp => {
    console.log(JSON.stringify(resp));
});