const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });

      res.json("Категория добавлена");
    } catch (e) {
      res.status(401).json({ error: e.toString() });
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();

      return res.json(categories);
    } catch (e) {
      return res.status(401).json({ error: e.toString() });
    }
  },
};
