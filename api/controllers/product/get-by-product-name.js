module.exports = {


  friendlyName: 'Get by product name',


  description: '',


  inputs: {
    productName: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs,exits) {

      const product = await sails.models.product.find({
        productName: inputs.productName
      }) 
      exits.success({data:product})
    
  }


};
