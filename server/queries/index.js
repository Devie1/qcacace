// Libraries
const db = require('../connection');

// Crud
const Authentication = require('./crud/Authentication');
const Users = require('./crud/Users');
const Category = require('./crud/Category');

const authentication = (data, type) => { return new Authentication(data)[type](); }

const profile = (table, query) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users(query)['profile']()); break;
        }
    });
}

const list = (table, query) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users(query)['list']()); break;
            case 'tbl_pet_category': resolve(await new Category(query)['list']()); break;
        }
    });
}

const get = (table, type, query) => {
    return new Promise(async (resolve) => {
        switch(table) {
            case 'tbl_users': resolve(await new Users(query)[type]()); break;
            case 'tbl_pet_category': resolve(await new Category(query)[type]()); break;
        }
    });
}

const save = (table, type, data) => {
    return new Promise(resolve => {
        switch(table) {
            case 'tbl_users': resolve(new Users('', data)[type]()); break
            case 'tbl_pet_category': resolve(new Category('', data)[type]()); break;
        }
    });
}

const update = (table, type, query, data) => {
    return new Promise(resolve => {
        switch(table) {
            case 'tbl_users': resolve(new Users(query, data)[type]()); break;
            case 'tbl_pet_category': resolve(new Category(query, data)[type]()); break;
        }
    });
}

module.exports = {
    authentication,
    profile,
    list,
    get,
    save,
    update
}