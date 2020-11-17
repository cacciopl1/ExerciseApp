/*
    Exercise_Types model
*/
const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';

async function getAll(){
    const sql = `SELECT P.*, FirstName, LastName FROM ${PREFIX}Exercise_Types P Join ${PREFIX}Users U ON P.id = U.id`
    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Exercise_Types WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise type" };
    return rows[0];
}

async function add(Name, Type, Muscle_Group, Video_Url, Relative_Dificulty){
    const sql = `INSERT INTO ${PREFIX}Exercise_Types (created_at, Name, Type, Muscle_Group, Video_Url, Relative_Dificulty) VALUES ? ;`;
    const params = [[new Date(), Name, Type, Muscle_Group, Video_Url, Relative_Dificulty]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(Name, Type, Muscle_Group, Video_Url, Relative_Dificulty){
    const sql = `UPDATE ${PREFIX}Exercise_Types SET ? WHERE id = ?;`;
    const params = { Name, Type, Muscle_Group, Video_Url, Relative_Dificulty };
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Exercise_Types WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`id FROM ${PREFIX}Exercise_Types WHERE id LIKE ? ; `, [`%${q}%`]);

module.exports = { get, getAll, add, update, remove, search}