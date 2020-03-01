const fs = require("fs");
const csv = require("csv-parser");
const results = [];
const msg = "csv read!"

module.exports = {
  readCsv: async function readCsv() {
    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      // [
      //   { NAME: 'Daffy Duck', AGE: '24' },
      //   { NAME: 'Bugs Bunny', AGE: '22' }
      // ]
      return results;
    });
  },
  writeJ: async function writeJ(){
    const fs = require('fs');

    let student = { 
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };
     
    let data = JSON.stringify(student);
    fs.writeFileSync('student-2.json', data);  
  },
  readJ: async function readJ(){
    let rawdata = fs.readFileSync('student-2.json');
    let student = JSON.parse(rawdata);
    console.log(student);
    return student;
  }
};