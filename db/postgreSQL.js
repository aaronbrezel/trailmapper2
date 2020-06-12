///////////////////////////////////////
//Currently unused in favor of Sequelize ORM
// See sequelize.js for new db connection
//////////////////////////////////////




// pg-promise examples: https://github.com/vitaly-t/pg-promise, https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
// pg-promise documentation: http://vitaly-t.github.io/pg-promise/index.html

//PostgreSQL
const pgp = require('pg-promise')(/*options*/)
const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  max: 30 //use up to 30 connections
}; //prepare connection information
console.log(cn)

const db = pgp(cn) //create new database instance THIS IS CAUSING ISSUES

//Test Query wrapped in async function (makes js code wait for result of query)
// async function test_query(db){
//   var test_query = await db.any("SELECT * FROM test_table")
//   console.log(test_query)
// }
// test_query(db)



module.exports = db; //export datbase object for shared usage

// It's not totally clear where this database connecction stuff is supposed to go
// https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
// This provides some help