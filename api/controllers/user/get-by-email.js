module.exports = {


  friendlyName: 'Get by email',


  description: '',


  inputs: {

    email: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs,exits) {

   const user = sails.models.user.findOne({
    email: inputs.email
   })

   exits.success({data: user})
  }


};
