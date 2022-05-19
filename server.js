const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");

const graphqlResolver = require("./graphql/resolvers");
const graphqlSchema = require("./graphql/schema");
const sequelize = require("./database");

sequelize
  .sync()
  .then(() => console.log("db ready "))
  .catch((err) => console.log("error connecting to the database", err));
const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

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
