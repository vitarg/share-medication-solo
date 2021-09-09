const mongoose = require("mongoose");

const medicationSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    img: String,
    price: Number,
    hasRecipe: Boolean,
    expireDate: String,
  },
  { timestamps: true }
);

const Medication = mongoose.model("Medication", medicationSchema);

module.exports = Medication;
