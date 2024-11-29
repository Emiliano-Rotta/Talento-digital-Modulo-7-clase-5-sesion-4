const pool = require("../../db/config");

const todosEstudiantes = async() => {
    try { 
      const result = await pool.query('SELECT * FROM estudiantes')
       console.log(result.rows); //rows, fields, command, rowCount
    }catch(error) {
      console.log("error en todosEstudiantes", error.message)
    }
  
  }

  module.exports = todosEstudiantes
    
