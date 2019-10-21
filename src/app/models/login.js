const { Schema, model } = require("mongoose");

const loginSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: {
    type: String,
    required: true
  },
  password_hash: {
    type: String,
    required: true
  }
});

module.exports = model("Login", loginSchema);
