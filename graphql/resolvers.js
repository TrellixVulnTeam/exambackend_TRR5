const Link = require("../models/link");

module.exports = {
  createLink: async function ({ userInput }, req) {
    const result = await Link.create({
      text: userInput.link,
      slug: "http://localhost:3001/testsl",
    });
    console.log("created a link");
    return {
      link: result.text,
      slug: result.slug,
      id: result.id,
    };
  },

  getAllLinks: async function () {
    const result = await Link.findAll();
    const links = [];
    result.forEach((link) => {
      links.push({ link: link.text, slug: link.slug, id: link.id });
    });
    return links;
  },
};
