module.exports = {


  friendlyName: 'Create',


  description: 'Create product.',


  inputs: {

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


  exits: {

  },


  fn: async function (inputs,exits) {

    const product = await sails.models.product.create({
      productName: inputs.productName,
      productPrice: inputs.productPrice,
      brand: inputs.brand,
      category: inputs.category,
      sellerInfo: inputs.sellerInfo
    }).fetch();

    exits.success({message: 'basarili', data: product})

  }


};
