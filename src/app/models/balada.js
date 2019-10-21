const { Schema, model } = require("mongoose");

const baladaSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  particular: {
    type: Boolean,
    default: false
  }
});

module.exports = model("Balada", baladaSchema);
