//   /Users/37529/mongodb/bin/mongod.exe --dbpath=/Users/37529/mongodb-data

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true, 
})



