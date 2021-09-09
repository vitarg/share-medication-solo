const { Router } = require("express");
const {
  medicationsController,
} = require("../controllers/medications.controller");

const router = Router();

router.post("/medications", medicationsController.addMedication);
router.get("/medications", medicationsController.getAllMedications);
router.get("/medications/:categoryId", medicationsController.getMedicationsByCategory);

module.exports = router;
