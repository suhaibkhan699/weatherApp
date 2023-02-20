# WeatherApp
The Weather Application fetches weather data using a third-party API key. To prevent the API key from being passed directly from the front-end and to improve performance, an API Proxy Server was implemented using Node.js. The API Proxy Server is responsible for fetching weather data from the VisualCrossingWeather API, while also implementing rate limiting and caching mechanisms.

The rate limiting mechanism is used to limit the number of requests that users can make within a fixed time. This ensures that the API is not overloaded with requests and helps prevent potential performance issues. Additionally, the caching mechanism is used to store responses for a set duration, which further improves performance by reducing the number of requests that need to be made to the VisualCrossingWeather API.

![image](https://user-images.githubusercontent.com/32563388/219830153-6c06afdb-ed62-4cf1-aa81-055d85c766ce.png)

![image](https://user-images.githubusercontent.com/32563388/219830127-5a2a225a-ab66-46ed-a039-d6af52a44de4.png)

![image](https://user-images.githubusercontent.com/32563388/220206137-6d8fb65c-621d-46d3-a726-fc904e632474.png)


