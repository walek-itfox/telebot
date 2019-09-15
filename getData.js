const request = require("request");

const path = "https://iss.moex.com/iss/engines/stock/markets/shares/securities/AFLT.json";

module.exports.data = async function() {
  return await request(path, (err, res, body) => {
    console.log(JSON.parse(body).marketdata.data);
    return JSON.parse(body).marketdata.data;
  });
}