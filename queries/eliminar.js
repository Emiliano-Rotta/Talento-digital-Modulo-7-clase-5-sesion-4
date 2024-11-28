const pool = require("../db/config")

const elimiarEstudiantePorEdad = async (edad) => {
    const query = 'DELETE FROM estudiantes WHERE edad = $1 RETURNING *;'
    const values = [edad]
    try {
        const result = await pool.query(query, values)
        return result.rows
    }catch(error){
        console.error('Error al eliminar un estudiante', error.message)
    }
}

module.exports = elimiarEstudiantePorEdad