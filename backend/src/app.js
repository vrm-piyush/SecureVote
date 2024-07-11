// backend/src/app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { middleware } = require("supertokens-node/framework/express");
const Session = require("supertokens-node/recipe/session");
const EmailPassword = require("supertokens-node/recipe/emailpassword");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initiate SuperTokens
app.use(middleware());

const supertokens = require("supertokens-node");

supertokens.init({
  framework: "express",
  supertokens: {
    connectionURI: "https://try.supertokens.io",
  },
  appInfo: {
    appName: "SecureVote",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

module.exports = app;
