const request = require("request");

const path = "https://iss.moex.com/iss/engines/stock/markets/shares/securities/AFLT.json";

module.exports.data = function() {
  request(path, (err, res, body) => {
    return JSON.parse(body).marketdata.data;
  });
}