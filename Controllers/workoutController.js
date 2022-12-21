const workout = require('../Models/WorkoutModel')

// get all data

const getworkouts = async (req, res) => {
    const user_id=req.user._id;
    try {
        const workoutdata = await workout.find({user_id}).sort({ createdAt:-1 })
        res.status(200).json(workoutdata)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
}

// get single data
const getworkout = async (req, res) => {
    try {
        const id = req.params.id
        const workoutdata = await workout.findById({ _id:id })
        res.status(200).json(workoutdata)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
}

// creating a data

const createworkout = async (req, res) => {
const {title,reps,load}= req.body;
const user_id= req.user._id;
    try {
        const newworkout = new workout({title,reps,load,user_id})
        const Workout = await newworkout.save();
        res.status(201).json(Workout)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
}

// update a record

const editworkout = async (req, res) => {
    try {
        const id = req.params.id;
        const Updatedata = await workout.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json(Updatedata)
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
}

// Delete a record

const deleteworkout=async(req,res)=>{
    try {
        const id=req.params.id;
        const deletedata=await workout.findByIdAndDelete({_id:id})
        res.status(200).json(deletedata)
        
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    getworkouts,
    getworkout,
    createworkout,
    editworkout,
    deleteworkout
}