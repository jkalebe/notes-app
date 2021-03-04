require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const useRouter = require('./routes/useRouter')
const noteRouter = require('./routes/noteRoutes')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', useRouter)
app.use('/api/notes', noteRouter)

//Listen server

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

//connect to mongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to MongoDB")
})