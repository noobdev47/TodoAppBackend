const express = require("express")
const Todo = require("../../models/Todo")
const router = express.Router()

router.get('/', async function (req, res) {
  const todos = await Todo.find({})

  res.status(200).send(todos)
})

module.exports = router