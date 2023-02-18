const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 min
    max: 50,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
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