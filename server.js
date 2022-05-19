const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const graphqlResolver = require("./graphql/resolvers");
const graphqlSchema = require("./graphql/schema");
const sequelize = require("./database");

sequelize
  .sync()
  .then(() => console.log("db ready "))
  .catch((err) => console.log("error connecting to the database", err));
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`Example app listening on port 4000`);
});
