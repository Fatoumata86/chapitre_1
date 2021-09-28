var request = require('request');
    request.get("http://localhost:8000/poke", function (err, res, body) {
    // console.log(res.statusCode);
    // console.log(err);
    console.log(body)
})
