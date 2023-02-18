const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apiCache = require('apicache')

// env vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_VALUE = process.env.API_KEY_VALUE

// init cache
let cache = apiCache.middleware

router.get('/', cache('2 minutes'), async (req, res) => {
    try {
        const city = req.query.q
        const url = `${API_BASE_URL}${city}/today?unitGroup=metric&key=${API_KEY_VALUE}&contentType=json`
        const apiRes = await needle(url)
        const data = apiRes.body

        console.log(data.days[0].temp)

        if (process.env.NODE_ENV !== 'production') {
            console.log(url)
        }
        res.status(200).json({ city, temp: data.days[0].temp })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
})

module.exports = router
