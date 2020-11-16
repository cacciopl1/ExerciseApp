/*

*/
const mysql = require('./mysql');
const cm = require('./ContactMethods');
const users = mysql.query('SELECT * FROM Users');
const types = mysql.query('SELECT id, Name FROM Types Where Type_id=2');
const Types = { ADMIN:5, USER:6 };


async function getAll() {
    return await users;
}

async function get(id){
    const sql = `SELECT 
        *,
        (SELECT Value FROM ContactMethods Where User_id = Users.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = true) as PrimaryEmail
    FROM Users WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
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
    const data = { FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [data, id]);
}

async function remove(id) {
    const sql = "DELETE FROM Users WHERE Users.id = ?";
    return await mysql.query(sql, [id]);
}

async function register(FirstName, LastName, DOB, Password, User_Type, email) {
    if(await cm.exists(email)) {
        throw {status: 409, message: "you already signed up with this email. Please go to login."}
    }
    const res = await add(FirstName, LastName, DOB, Password, User_Type);
    const emailRes = await cm.add(cm.Types.EMAIL, email, true, true, res.insertId);
    const user = await get(res.insertId);
    return user;

}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { get, getAll, getTypes, add, update, remove, search, register, Types}