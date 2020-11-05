/*

*/

const data = [{name: 'Luc', age: 22}, {name: 'Dom', age: 25}];

async function getAll() {
    //throw {status: 501, message: "This is a fake error" }
    return data;
}

async function add(name, age) {
    data.push({name, age});
}

module.exports = { getAll, add, search: q => data.filter(x=> x.name == q) }