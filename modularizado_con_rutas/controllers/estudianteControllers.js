const actualizarEstudiante = require("../queries/estudiantes/actualizar")
const elimiarEstudiantePorEdad = require("../queries/estudiantes/eliminar")
const todosEstudiantes = require("../queries/estudiantes/seleccionar")


const actualizar = async (req, res) => {
    const { id, nuevaEdad } = req.body; //esto es asi cuando trabajamos con rutas
    try {
        const estudiante = await actualizarEstudiante(id, nuevaEdad);
        res.status(200).json(estudiante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const eliminar = async (req, res) => {
    const { edad } = req.params;
    try {
        const eliminados = await elimiarEstudiantePorEdad(edad);
        res.status(200).json(eliminados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listar = async (req, res) => {
    try {
        const estudiantes = await todosEstudiantes();
        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    actualizar,
    eliminar,
    listar,
};