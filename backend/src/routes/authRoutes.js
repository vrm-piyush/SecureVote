// backend/src/routes/authRoutes.js

const express = require("express");
const { middleware } = require("supertokens-node/framework/express");
const {
  default: SuperTokens,
} = require("supertokens-node/lib/build/supertokens");

const router = express.Router();

// Middleware to protect routes
router.use(middleware());

// Route to handle login
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    await supertokens
      .authRecipeByEmailPassword()
      .signInWithEmailAndPassword(email, password);

    res.status(200).send({ message: "Login successful" });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).send({ error: "Login failed" });
  }
});

module.exports = router;
