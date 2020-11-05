/*

*/
const mysql = require('./mysql')
const data = mysql.query('SELECT * FROM Users');

async function getAll() {
    return data;
}

async function add(name, age) {
    data.push({name, age});
}

module.exports = { getAll, add, search: q => data.filter(x=> x.name == q) }