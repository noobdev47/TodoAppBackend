require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const allRouters = require('./v1/routes/index')

const app = express()

mongoose.connect(process.env.MONGO_CONN_URL)
.then(() => {
  console.log("Todo App Database Connected...")
})
.catch(err => {
  console.log("Todo App Database Connection Failed...")
  console.log(err)
})

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}...`)
})

app.use('/v1/todos', allRouters.todoRouter)