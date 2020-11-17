/*
    reactions model
*/
const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';
const Emojis = { LIKE: '❤️',
                 DISLIKE: '👎'
                }

async function getAll() {
    const sql = `SELECT P.*, FirstName, LastName FROM ${PREFIX}Reactions P Join ${PREFIX}Users U ON P.Owner_id = U.id`
    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Reactions WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such comment" };
    return rows[0];
}

async function getForWorkout(Workout_id){
    const sql = `SELECT P.*, FirstName, LastName FROM ${PREFIX}Reactions P Join ${PREFIX}Users U ON P.Owner_id = U.id WHERE P.Workout_id = ?`
    return await mysql.query(sql, [Workout_id]);
}

async function addLike( Emoji = Emojis.LIKE, Workout_id, Owner_id){
    const sql = `INSERT INTO ${PREFIX}Reactions (created_at, Emoji, Workout_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Emoji, Workout_id, Owner_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function addDislike( Emoji = Emojis.DISLIKE, Workout_id, Owner_id){
    const sql = `INSERT INTO ${PREFIX}Reactions (created_at, Emoji, Workout_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Emoji, Workout_id, Owner_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Emoji, Workout_id, Owner_id){
    const sql = `UPDATE ${PREFIX}Reactions SET ? WHERE id = ?;`;
    const params = { Emoji, Workout_id, Owner_id };
    const res = await mysql.query(sql, [params, id]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Reactions WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Workout_id FROM ${PREFIX}Reactions WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { get, getAll, getForWorkout, addLike, addDislike, update, remove, search}