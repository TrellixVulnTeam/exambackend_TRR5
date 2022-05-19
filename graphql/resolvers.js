const Link = require("../models/link");

module.exports = {
  hello: () => "Hello world",
  createLink: async function ({ userInput }, req) {
    const result = await Link.create({
      text: userInput.link,
      slug: "http://localhost:3001/testsl",
    });
    console.log("created a link");
    return {
      link: result.text,
      slug: result.slug,
    };
  },
};
