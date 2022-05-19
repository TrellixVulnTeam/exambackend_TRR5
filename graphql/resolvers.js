const randomString = require("randomstring");

const Link = require("../models/link");

module.exports = {
  createLink: async function ({ userInput }, req) {
    const randomChars = randomString.generate(7);
    console.log("++===============+==", userInput);
    let possibleSlug = "http://localhost:3001/" + userInput.slug ?? randomChars;

    console.log("=================================", possibleSlug);
    const exists = await Link.findAll({
      where: {
        slug: possibleSlug,
      },
    });

    console.log("Does it exists", exists);

    if (exists.length > 0)
      possibleSlug = "http://localhost:3001/" + randomString.generate(7);
    else console.log("it doesn't exists");

    const result = await Link.create({
      text: userInput.link,
      slug: possibleSlug,
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
