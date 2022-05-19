const Product = require("../models/product");

module.exports = {
  hello: () => "Hello world",
  createUser: async function ({ userInput }, req) {
    const prod = await Product.create({
      title: userInput.name,
    });
    console.log("I am in here", prod);
    return {
      email: prod.title,
      name: prod.id,
      password: "asasasas",
    };
  },
};
