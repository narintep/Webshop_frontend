import { createConnection } from 'mysql';
const connection = createConnection({
  host: 'localhost', user: 'root', password: '1234', database: 'webshop', port: 3306
  // insecureAuth : true,
});

async function send() {
  const row = []
  await connection
    .query('SELECT * FROM purchased_item', function (err, rows) {
      if (err) 
        throw err;
      row.push(rows)
    });
    return row;
}
export default send;