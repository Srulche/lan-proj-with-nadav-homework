const express = require("express"),
  router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const { createResponse } = require("../utilities");

router.post("/sign-up", async (req, res) => {
  try {
    const newUser = await userController.signUp(req.body);
    return res.status(201).json(createResponse(newUser, 201));
  } catch (error) {
    return res.status(400).json(createResponse(null, 400, error));
  }
});

router.post("/sign-in", async (req, res) => {
  try {
    const access_token = await userController.signIn(req.body);
    return res.status(201).json(createResponse({ access_token }, 201));
  } catch (error) {
    return res.status(400).json(createResponse(null, 400, error));
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await userController.me(req.user);
    return res.status(201).json(createResponse({ user }, 201));
  } catch (error) {
    return res.status(400).json(createResponse(null, 400, error));
  }
});

module.exports = router;
