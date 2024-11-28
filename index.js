const actualizarEstudiante = require("./queries/actualizar")
const todosEstudiantes = require("./queries/seleccionar")


const main = async()=>{
  try {
    //actualizar
    console.log('Actualizando estudiante...')
    const estudianteActualizado = await actualizarEstudiante(18, 23) //(id 17 edad 22)
    console.log('estudiante actualizado', estudianteActualizado)

    //ver los estudiantes
    await todosEstudiantes()
  }catch(error){
    console.error('error en index', error.message)
  }
}

main()





