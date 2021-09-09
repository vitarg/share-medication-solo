const { v4: uuidv4 } = require("uuid");
const path = require("path");
const Medication = require("../models/Medication.model");

module.exports.medicationsController = {
  addMedication: async (req, res) => {
    try {
      const { name, description, category, price, expireDate, hasRecipe } =
        req.body;

      const image = req.files.img;
      const imageName = `${uuidv4()}${path.extname(image.name)}`;

      await image.mv(
        path.resolve(__dirname, "../public/img", imageName),
        (e) => {
          if (e) console.log(e);
        }
      );

      await Medication.create({
        name,
        description,
        category,
        img: `/img/${imageName}`,
        price,
        expireDate,
        hasRecipe,
      });

      return res.json("Лекарство добавлено");
    } catch (e) {
      return res.status(401).json({ error: e.toString() });
    }
  },
  getAllMedications: async (req, res) => {
    try {
      const medications = await Medication.find();

      return res.json(medications);
    } catch (e) {
      return res.status(401).json({ error: e.toString() });
    }
  },
  getMedicationsByCategory: async (req, res) => {
    try {
      const medications = await Medication.find({
        category: req.params.categoryId,
      });

      return res.json(medications);
    } catch (e) {
      return res.status(401).json({ error: e.toString() });
    }
  },
};
