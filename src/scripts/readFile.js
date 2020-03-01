const fs = require("fs");
const csv = require("csv-parser");

module.exports = {
  readCsv: async function readCsv() {
    fs.createReadStream("data.csv")
      .pipe(csv())
      .on("data", row => {
        console.log(row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
    console.log("called!!!!!!");
  }
};
