const { Router } = require("express");
const {
  medicationsController,
} = require("../controllers/medications.controller");

const router = Router();

router.post("/medications", medicationsController.addMedication);

module.exports = router;
