const http = require('http');

const urls = process.argv.slice(2);
let results = {};

const doRequest = (url, cb) => {
    let result = '';
    http.get(url, res => {
        res.on('data', chunk => result += chunk.toString());
        res.on('end', () => {
            const data = {};
            data[url] = result;
            cb(null, data);
        });
    })
    .on('error', err => cb(err));
}

const callback = (err, result) => {
    if (err) return console.error(err);
    results = Object.assign({}, results, result);
    if (Object.keys(results).length === urls.length) {
        urls.forEach(url => console.log(results[url]));
    }
}

urls.forEach(url => doRequest(url, callback));