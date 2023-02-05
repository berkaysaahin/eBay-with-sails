module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {

    name:{
      type: 'string',
      required: true,
    },

    surname: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    },

    age: {
      type: 'number',
      required: true
    },

    email: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs,exits) {

    const user = await sails.models.user.create({
      name: inputs.name,
      surname: inputs.surname,
      password: inputs.password,
      age: inputs.age,
      email: inputs.email
    }).fetch();

    exits.success({message:'basariyla olusturuldu',data:user})

  }


};
