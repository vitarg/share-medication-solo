const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.model");

module.exports.adminsController = {
  adminRegistration: async (req, res) => {
    try {
      const { name, login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      await Admin.create({
        name,
        login,
        password: hash,
      });

      return res.json("Успешно зарегистрирован");
    } catch (e) {
      return res.status(401).json({ error: e.toString() });
    }
  },
  adminAuth: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await Admin.findOne({ login });

      if (!candidate) return res.status(401).json({ error: "Неверный логин" });

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) return res.status(401).json({ error: "Неверный пароль" });

      const payload = {
        id: candidate.id,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "14d",
      });

      return res.json({ token });
    } catch (e) {
      return res.status(401).json({ error: e.toString() });
    }
  },
};
