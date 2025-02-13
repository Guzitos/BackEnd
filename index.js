import express from "express"

const app = express()

app.use(express.json())

 const users = []

app.get("/users", (request,response)  => {
  return response.json(users)
})

app.post("/users", (request,response) => {

const {name, age} = request.body

users.push({name, age});

return response.json({name, age});
})

app.listen(3000)