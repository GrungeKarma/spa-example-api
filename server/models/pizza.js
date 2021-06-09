const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  crust: { type:String, default: "thin" },
  cheese: String,
  sauce: String,
  toppings: [String]
});
//contract of the data

//convert schema a Model with CRUD operators
const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = {
  model: Pizza,
  schema: pizzaSchema
};
