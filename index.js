const actualizarEstudiante = require("./queries/actualizar")
const elimiarEstudiantePorEdad = require("./queries/eliminar")
const todosEstudiantes = require("./queries/seleccionar")


const main = async()=>{
  try {
    //actualizar
    console.log('Actualizando estudiante...')
    // const estudianteActualizado = await actualizarEstudiante(18, 23) //(id 17 edad 22)
    // console.log('estudiante actualizado', estudianteActualizado)

    //para eliminar
    console.log('eliminando a los estudiantes de 20 años...')
    const estudianteEliminados = await elimiarEstudiantePorEdad(20) //borre los datos de los estudiantes que tienen 20 años
    console.log('estudiantes eliminados', estudianteEliminados)
    //ver los estudiantes
    await todosEstudiantes()

  
  }catch(error){
    console.error('error en index', error.message)
  }
}

main()





