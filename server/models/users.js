/*

*/
const mysql = require('./mysql')
const users = mysql.query('SELECT * FROM Users');
const types = mysql.query('SELECT id, Name FROM Types Where Type_id=2');


async function getAll() {
    return await users;
}

async function get(id) {
    return await mysql.query('SELECT * FROM Users WHERE id=?', [id]);
}

async function getTypes() {
    return await types;
}

async function add(FirstName, LastName, DOB, Password, User_Type) {
    const sql = 'INSERT INTO `Users` (created_at`, `FirstName`, `LastName`, `DOB`, `Password`, `User_Type`) VALUES ?;';
    const data = [['NOW()', FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [data]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { get, getAll, getTypes, add, search}