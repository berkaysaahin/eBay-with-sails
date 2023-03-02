module.exports = {


  friendlyName: 'Get by user name',


  description: '',


  inputs: {
    name:{
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs,exits) {

  const user = await sails.models.user.findOne({
    name: inputs.name
  })

  exits.success({data:user})
  }


};
