/*

*/

const data = [{name: 'Luc', age: 22}, {name: 'Dom', age: 25}];

function getAll() {
    return data;
}

function add(name, age) {
    data.push({name, age});
}

module.exports = { getAll, add, search: q => data.filter(x=> x.name == q) }