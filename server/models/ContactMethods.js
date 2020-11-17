/*

*/
const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';
const Types = { EMAIL: 'Email', CELL_PHONE: 'Cell Phone' };

async function getAll() {
    return await mysql.query(`SELECT * FROM ${PREFIX}ContactMethods`);;
}

async function get(id) {
    const rows = await mysql.query(`SELECT * FROM ${PREFIX}ContactMethods WHERE id=?`, [id]);
    if (!rows.length) throw { status: 404, message: "Sorry the user you requested doesn't exist" }
    return rows[0];
}

async function exists(email) {
    const rows = await mysql.query(`SELECT * FROM ${PREFIX}ContactMethods WHERE Value=?`, [email]);
    return rows.length;
}

async function getTypes() {
    return await mysql.query(`SELECT id, Name FROM ${PREFIX}Types WHERE Type_id = 4`);
}

async function add(Type, Value, IsPrimary = 0, CanSpam = 1, User_id) {
    const sql = `INSERT INTO ${PREFIX}ContactMethods (created_at, Type, Value, IsPrimary, CanSpam, User_id) VALUES ? ;`;
    const data = [[new Date(), Type, Value, IsPrimary, CanSpam, User_id]];
    return await mysql.query(sql, [data]);
}

async function update(id, Type, Value, IsPrimary, CanSpam, User_id) {
    const sql = `UPDATE ${PREFIX}ContactMethods SET ? WHERE id = ?;`;
    const data = { Type, Value, IsPrimary, CanSpam, User_id };
    return await mysql.query(sql, [data, id]);
}

async function remove(id) {
    const sql = `DELETE FROM ${PREFIX}ContactMethods WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Value FROM ${PREFIX}ContactMethods WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { get, exists, getAll, getTypes, add, update, remove, search, Types}