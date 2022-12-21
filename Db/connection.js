const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
        console.log('connection is succeeded')
    }).catch((error) => {
        console.log('Not Found', { error })
    })
    
