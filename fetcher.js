const fs = require('fs');
const request = require('request');

const args = process.argv.splice(2);
const fetcher = function(URL, path, cb) {
  request(URL, (error, response, body) => {
    cb(path, body);
    console.log(`downloaded and saved ${body.length} to path`);
  });
};

const write = (path, body) => fs.writeFile(path, body, err => {
  if (err) {
    console.error(err);
  }
});

fetcher(args[0], args[1], write);