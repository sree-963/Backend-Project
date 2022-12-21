const express = require('express')

  const workout = require('../Models/WorkoutModel')
  const authUser=require("../Middleware/userMiddleware")
const router = express.Router()
// require controller
const { getworkouts, getworkout, createworkout, editworkout, deleteworkout } = require('../Controllers/workoutController')

 router.use(authUser)

//get entire records
router.get('/', getworkouts)

// get single record
router.get('/:id', getworkout)

// create a record
router.post("/", createworkout)

// update a record
router.patch("/:id", editworkout)

// Delete a record
router.delete("/:id", deleteworkout)

module.exports = router;