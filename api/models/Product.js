/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    productName: {
      type: 'string',
      required: true
    },

    productPrice: {
      type: 'number',
      required: true
    },

    brand: {
      type: 'string',
      required: true
    },

    category: {
      type: 'string',
      required: true
    },

    sellerInfo: {
      type: 'string',
      required: true
    }
    
  },

};

