const request = require("request");

const path = "https://iss.moex.com/iss/engines/stock/markets/shares/securities/AFLT.json";

module.exports.data = function() {
  return request(path, (err, res, body) => {
    console.log(JSON.parse(body).marketdata.data);
    console.log(err);
    //return JSON.parse(body).marketdata.data;
    return 'test';
  });
}