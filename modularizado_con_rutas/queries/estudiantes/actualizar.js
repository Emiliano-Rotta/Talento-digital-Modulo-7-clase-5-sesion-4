const pool = require("../../db/config");

const actualizarEstudiante = async (id, nuevaEdad)=>{
    const query = 'UPDATE estudiantes SET edad = $1 WHERE id = $2 RETURNING *;'
    const values = [nuevaEdad, id]

try{
    const result = await pool.query(query, values);
    return result.rows;

}catch(error){
    console.error('error en actualizar estudiantes', error.message)
}

}

module.exports = actualizarEstudiante