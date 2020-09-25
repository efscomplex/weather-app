import { useState } from 'preact/compat'
import Weather from '../services/useWeatherService'

export default function useWeather () {
  const [weather, setWeather] = useState(undefined)

  const dispatch = async action => {
    if (action.type === 'UPDATE_LOCATION') {
      const [location] = await Weather.getLocation(action.payload)
      const currentWeather = await Weather.getWeather(location.woeid)
      const abbr = currentWeather.consolidated_weather[0].weather_state_abbr
      const imgSrc = await Weather.getImageUrl(abbr)
      setWeather(() => ({ ...currentWeather, picture: imgSrc }))
    }
  }
  const getImageUrl = Weather.getImageUrl
  return {
    weather,
    getImageUrl,
    dispatch
  }
}
