/*
    types model
*/
const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';

async function getAll(){
    const sql = `SELECT * FROM ${PREFIX}Types`
    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Types WHERE Type_id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such type" };
    return rows[0];
}

async function add(Name, Type_id){
    const sql = `INSERT INTO ${PREFIX}Types (Name, Type_id) VALUES ? ;`;
    const params = [[new Date(), Name, Type_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(Name, Type_id){
    const sql = `UPDATE ${PREFIX}Types SET ? WHERE id = ?;`;
    const params = { Name, Type_id };
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Types WHERE Type_id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`Type_id FROM ${PREFIX}Types WHERE Type_id LIKE ? ; `, [`%${q}%`]);

module.exports = { get, getAll, add, update, remove, search}