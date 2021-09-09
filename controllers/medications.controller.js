const Medication = require("../models/Medication.model");

module.exports.medicationsController = {
  addMedication: async (req, res) => {
    try {
      const { name, description, category, price, expireDate, hasRecipe } =
        req.body;

      await Medication.create({
        name,
        description,
        category,
        price,
        expireDate,
        hasRecipe,
      });

      return res.json("Лекарство добавлено");
    } catch (e) {
      return res.status(401).json({ error: e.toString() });
    }
  },
};
