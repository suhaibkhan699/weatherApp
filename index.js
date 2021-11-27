const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// rate limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 min
    max: 10
})

app.use(limiter)
app.set('trust proxy', 1)

// static folder
app.use(express.static('public'))

// routes
app.use('/api', require('./routes'))

// enable CORS
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})