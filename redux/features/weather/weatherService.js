import axios from "axios";

//fetch data
const fetchWeather = async () => {
    const response = await axios.get(
        'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1ca4e2dfc6e32b5b45f2d4b6495a563c'
    )
    return response.data
}

const weatherService = {
    fetchWeather
}

export default weatherService