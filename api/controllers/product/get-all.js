module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs,exits) {

   var users = sails.models.product.find();
    exits.success(products)
  }


};
