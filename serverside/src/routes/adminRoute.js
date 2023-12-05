const express = require("express"),
  router = express.Router();
const adminController = require("../controllers/adminController");
const { createResponse } = require("../utilities");

router.post("/create-language", async (req, res) => {
  try {
    const newLanguage = await adminController.createNewLanguage(req.body);
    return res.status(201).json(createResponse(newLanguage, 201));
  } catch (error) {
    return res.status(400).json(createResponse(null, 400, error));
  }
});

router.put("/add-level/:languageId", async (req, res) => {
  try {
    const access_token = await adminController.addLevelToLanguage(
      req.params.languageId,
      req.body
    );
    return res.status(201).json(createResponse({ access_token }, 201));
  } catch (error) {
    return res.status(400).json(createResponse(null, 400, error));
  }
});

module.exports = router;
