const csvStringify = require('csv-stringify');
const fs = require('fs');

const outputStream = fs.createWriteStream('output.csv', {encoding: 'utf8'});

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'remote',
  password: 'UjiCoba72',
  database: 'u598234738_dbsimulasicbt',
  dateStrings: true,
  // stringifyObjects: true,
  supportBigNumbers: true
//  debug: true
});

connection.connect();

// connection.query('SELECT * from  person', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

connection.query('SELECT cMataUji,cSubTes FROM tbl_mastersoal').stream().on('end', () => {
  connection.end();
}).pipe(csvStringify({
  header: true
})).pipe(outputStream);