const { Sequelize } = require("sequelize");
import createDb from '../createDb';
// const sequelize = new Sequelize("Teashop", "TeashopAdmin", "6def3656DEF3656", {
//     dialect: "mssql",
//     host: "localhost",
//     port: "1433"
// });

// async function test() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// test()

// const sql = require('mssql');
// var dbname = 'Teashop_test';
// sql.connect('mssql://TeashopAdmin:6def3656DEF3656@localhost/').then(pool => {
//   return pool.request().query`select db_id(${dbname}) as idn`.then(result => {
//     console.log(result);  
//     if (result.recordset[0].idn === null) {
//       sql.D
//       return pool.request().query`create database ${dbname}`;
//     }
//   }).catch(err => {throw(err)});
// }).catch(err => console.log(err));

async function test() {
    await createDb;
}
test();