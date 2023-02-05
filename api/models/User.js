/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type: 'string',
      required: true,
      columnName: 'name'
    },

    surname: {
      type: 'string',
      required: true,
      columnName: 'surname'
    },

    password: {
      type: 'string',
      required: true,
      columnName: 'password',
      encrypt: true
    },

    age: {
      type: 'number',
      required: true,
      columnName: 'age'
    },

    email: {
      type: 'string',
      required: true,
      columnName: 'email',
      unique: true
    }
    
  },

};

