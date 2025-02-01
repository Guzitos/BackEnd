const express = require("express")

const server = express()

//Rotas
 server.get('/usuario', (request,response) => {
    
   console.log(request.query.usuario)
   return response.send(request.query.usuario)
 });

server.listen(3000)     