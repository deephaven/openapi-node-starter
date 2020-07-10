const https = require('https');
const fs = require('fs');

// Required for its side-effects (exposing missing values to global)
require("./openapiPolyfill.js");

module.exports = (url, fileName='irisapi.nocache.js') => {
    global.location = new URL(url);
    return new Promise((resolve, reject) => {
        const apiFile = fs.createWriteStream(`./${fileName}`);
        const request = https.get(url, response => {
            // Write JS text to file
            response.pipe(apiFile);
            apiFile.on('finish', () => {
                apiFile.close(() => {
                    require(`./${fileName}`); // require is synchronous, so the resolve won't happen until it is done
                    resolve(iris); // iris is globally exposed by the require, but we'll return it anyway
                });
            });
        })
        .on('error', err => {
            // Delete the created file and reject when done
            fs.unlink(`./${fileName}`, () => reject(err));
        });
    });
}
