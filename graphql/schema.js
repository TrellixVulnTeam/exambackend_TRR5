const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type Link {
        link: String!
        slug: String!
    }

    input UserInputData {
        link: String!
        customSlug: String
    }

    type rootMutation {
        createLink(userInput: UserInputData) : Link
    }

    type RootQuery {
        getAllLinks: [Link!]!
    }

    schema {
        query: RootQuery
        mutation: rootMutation
    }
`);
