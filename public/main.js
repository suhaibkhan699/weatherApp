const weatherDisplay = document.querySelector('.weather')
const weatherForm = document.querySelector('#weather-form')
const cityInput = document.querySelector('#city-input')

// Fetch weather data from API
const fetchWeather = async (city) => {
    const url = `/api?q=${city}`

    try {
        const res = await fetch(url)
        const data = await res.json()

        if (data.cod === '404') {
            alert('City not found')
            return
        }

        if (data.cod === 401) {
            alert('Invalid API Key')
            return
        }

        const displayData = {
            city: data.city,
            temp: data.temp,
        }

        addWeatherToDOM(displayData)

    } catch (error) {
        alert('Too many requests, please try again after 10 minutes.')
        return
    }
}

// Add display data to DOM
const addWeatherToDOM = (data) => {
    weatherDisplay.innerHTML = `
    <h1>Weather in ${data.city}</h1>
    <h2>${data.temp} &deg;C</h2>
  `
    cityInput.value = ''
}

// Event listener for form submission
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (cityInput.value === '') {
        alert('Please enter a city')
    } else {
        fetchWeather(cityInput.value)
    }
})

// Initial fetch
fetchWeather('London')