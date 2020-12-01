/*
    workouts model
*/
const mysql = require('./mysql');
const comments = require('./comments');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';

async function getAll(){
    const sql = `
    SELECT 
        P.*, FirstName, LastName,
        (SELECT COUNT(*) FROM ${PREFIX}Reactions WHERE Workout_id = P.id) as Reactions 
    FROM ${PREFIX}Workouts P Join ${PREFIX}Users U ON P.Owner_id = U.id`
    return await mysql.query(sql);
}

async function getByUser(user_id){
    const sql = `
    SELECT 
        P.*, FirstName, LastName,
        (SELECT COUNT(*) FROM ${PREFIX}Reactions WHERE Workout_id = P.id) as Reactions 
    FROM ${PREFIX}Workouts P Join ${PREFIX}Users U ON P.Owner_id = U.id
    WHERE P.Owner_id = ?`

    const data = await mysql.query(sql, [user_id]);

    for (const p of data) {
        p.Comments = await comments.getForWorkout(p.id)
    }

    return data;
}

async function getByFollower(user_id){
    const sql = `
    SELECT 
        P.*, FirstName, LastName,
        (SELECT COUNT(*) FROM ${PREFIX}Reactions WHERE Workout_id = P.id) as Reactions 
    FROM ${PREFIX}Workouts P Join ${PREFIX}Users U ON P.Owner_id = U.id
    WHERE P.Owner_id = ?`

    const data = await mysql.query(sql, [user_id]);

    for (const p of data) {
        p.Comments = await comments.getForWorkout(p.id)
    }

    return data;
}

async function getFeed(user_id){
    const sql = `
    SELECT 
        P.*, FirstName, LastName,
        (SELECT COUNT(*) FROM ${PREFIX}Reactions WHERE Workout_id = P.id) as Reactions 
    FROM ${PREFIX}Workouts P Join ${PREFIX}Users U ON P.Owner_id = U.id`
    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Workouts WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such workout" };
    return rows[0];
}

async function add(Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight){
    const sql = `INSERT INTO ${PREFIX}Workouts (created_at, Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight) VALUES ? ;`;
    const params = [[new Date(), Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight){
    const sql = `UPDATE ${PREFIX}Workouts SET ? WHERE id = ?;`;
    const params = { Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight };
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Workouts WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`Workout_id FROM ${PREFIX}Workouts WHERE Workout_id LIKE ? ; `, [`%${q}%`]);

module.exports = { get, getAll, getByUser, getByFollower, getFeed, add, update, remove, search}