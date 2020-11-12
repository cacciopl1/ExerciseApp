/*

*/
const mysql = require('./mysql')
const users = mysql.query('SELECT * FROM Users');
const types = mysql.query('SELECT id, Name FROM Types Where Type_id=2');


async function getAll() {
    return await users;
}

async function get(id) {
    const rows = await mysql.query('SELECT * FROM Users WHERE id=?', [id]);
    if (!rows.length) throw { status: 404, message: "Sorry the user you requested doesn't exist" }
    return rows;
}

async function getTypes() {
    return await types;
}

async function add(FirstName, LastName, DOB, Password, User_Type) {
    const sql = "INSERT INTO Users (created_at, FirstName, LastName, DOB, Password, User_Type) VALUES ?;";
    const data = [[new Date(), FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [data]);
}

async function update(id, FirstName, LastName, DOB, Password, User_Type) {
    const sql = "UPDATE Users SET ? WHERE id = ?;";
    const data = { created_at: new Date(), FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [data, id]);
}

async function remove(id) {
    const sql = "DELETE FROM Users WHERE Users.id = ?";
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { get, getAll, getTypes, add, update, remove, search}