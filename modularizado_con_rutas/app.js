const express = require('express')
const estudiantesRoutes = require('./routes/estudiantesRoutes')
const PORT = 3000

const app = express();
app.use(express.json());

//Rutas
app.use("/estudiantes", estudiantesRoutes)

app.listen(PORT , ()=>{
  console.log(`Servidor corriend en el puerto ${PORT}`)
})