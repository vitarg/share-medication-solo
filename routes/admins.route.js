const { Router } = require("express");
const { adminsController } = require("../controllers/admins.controller");

const router = Router();

router.post("/registration", adminsController.adminRegistration);
router.post("/authorization", adminsController.adminAuth);

module.exports = router;
