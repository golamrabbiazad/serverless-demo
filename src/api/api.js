const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  //github.com/dougmoscrop/serverless-http/issues/86#issuecomment-849958755
  https: event.path = event.path === "" ? "/" : event.path;

  const result = await handler(event, context);

  return result;
};
