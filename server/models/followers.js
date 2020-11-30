/*
    Follower model
*/
const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';

async function getAll(){
    const sql = `SELECT P.*, FirstName, LastName FROM ${PREFIX}Followers P Join ${PREFIX}Users U ON P.Follower_id = U.id`
    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT 
        P.*, Firstname, LastName
    FROM ${PREFIX}Followers P Join ${PREFIX}Users U ON P.Follower_id = U.id WHERE Following_id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such follower" };
    return rows;
}

async function add(Following_id, Follower_id, isAccepted){
    const sql = `INSERT INTO ${PREFIX}Followers (Following_id, Follower_id, isAccepted) VALUES ? ;`;
    const params = [[Following_id, Follower_id, isAccepted]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(Following_id, Follower_id, isAccepted){
    const sql = `UPDATE ${PREFIX}Followers SET ? WHERE id = ?;`;
    const params = { Following_id, Follower_id, isAccepted };
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Followers WHERE Follower_id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`Follower_id FROM ${PREFIX}Followers WHERE Follower_id LIKE ? ; `, [`%${q}%`]);

module.exports = { get, getAll, add, update, remove, search}