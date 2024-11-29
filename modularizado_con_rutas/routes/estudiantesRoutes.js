const express = require("express");
const { actualizar, eliminar, listar } = require("../controllers/estudianteControllers.js");

const router = express.Router();

// Actualizar estudiante
router.put("/actualizar", actualizar);

// Eliminar estudiantes por edad
router.delete("/eliminar/:edad", eliminar);

// Listar todos los estudiantes
router.get("/listar", listar);

module.exports = router;
