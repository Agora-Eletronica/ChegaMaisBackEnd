const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  cpf: {
    type: String,
    maxlength: 11,
    minlength: 9,
    required: true
  }
});

module.exports = model("Users", UserSchema);
