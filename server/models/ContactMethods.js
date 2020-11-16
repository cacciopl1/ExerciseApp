/*

*/
const mysql = require('./mysql')
const ContactMethods = mysql.query('SELECT * FROM ContactMethods');
const types = mysql.query('SELECT id, Name FROM Types Where Type_id=4');
const Types = { EMAIL: 'Email', CELL_PHONE: 'Cell Phone' };

async function getAll() {
    return await ContactMethods;
}

async function get(id) {
    const rows = await mysql.query('SELECT * FROM ContactMethods WHERE id=?', [id]);
    if (!rows.length) throw { status: 404, message: "Sorry the user you requested doesn't exist" }
    return rows[0];
}

async function exists(email) {
    const rows = await mysql.query('SELECT * FROM ContactMethods WHERE Value=?', [email]);
    return rows.length;
}

async function getTypes() {
    return await types;
}

async function add(Type, Value, IsPrimary = 0, CanSpam = 1, User_id) {
    const sql = "INSERT INTO ContactMethods (created_at, Type, Value, IsPrimary, CanSpam, User_id) VALUES ?;";
    const data = [[new Date(), Type, Value, IsPrimary, CanSpam, User_id]];
    return await mysql.query(sql, [data]);
}

async function update(id, Type, Value, IsPrimary, CanSpam, User_id) {
    const sql = "UPDATE ContactMethods SET ? WHERE id = ?;";
    const data = { Type, Value, IsPrimary, CanSpam, User_id };
    return await mysql.query(sql, [data, id]);
}

async function remove(id) {
    const sql = "DELETE FROM ContactMethods WHERE ContactMethods.id = ?";
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Value FROM ContactMethods WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { get, exists, getAll, getTypes, add, update, remove, search, Types}