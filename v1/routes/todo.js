const express = require("express")
const Todo = require("../../models/Todo")
const router = express.Router()

router.get('/', async function (req, res) {
  const todos = await Todo.find({})

  res.status(200).send(todos)
})

router.post('/', async function (req, res) {
  const { title, description } = req.body

  const tempTodo = new Todo({ title: title, description: description })

  await tempTodo.save()

  res.status(200).send({ message: 'Todo Added!!!' })
})

router.get('/:id', async function (req, res) {
  const { id } = req.params

  const tempTodo = await Todo.findById(id)

  res.status(200).send(tempTodo)
})

router.delete('/:id', async function (req, res) {
  const {id} = req.params

  await Todo.findByIdAndDelete(id)

  res.status(204).send()
})

router.put('/:id', async function(req, res) {
  const {id} = req.params

  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true })

  res.status(200).send(updatedTodo)
})

module.exports = router