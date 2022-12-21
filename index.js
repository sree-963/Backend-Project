require('dotenv').config()


const express = require('express')




const app = express()
const cors = require('cors')





// db connection
require('./Db/connection')

//require Routes
const workoutroutes = require('./Routes/workoutRoute')
const userRoutes = require('./Routes/userRoutes');

// middlewares
app.use(express.json())
app.use(cors())

//port
const port = process.env.PORT || 7000


// APi Routes
app.use('/api/workouts', workoutroutes)
app.use('/api/user', userRoutes)
app.listen(port, () => {
    console.log('server is running on', port)

})





