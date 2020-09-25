/* eslint-disable no-undef */

const URL_WEATHER = 'http://localhost:3000'

export const getWeather = async woeid => {
  const resp = await fetch(`${URL_WEATHER}/weather/${woeid}`)
  return await resp.json()
}
export const getLocation = async location => {
  const resp = await fetch(`${URL_WEATHER}/weather/location/${location}`)
  return await resp.json()
}
export const getImageUrl = (abbr) => `http://www.metaweather.com/static/img/weather/png/${abbr}.png`

export default {
  getWeather,
  getLocation,
  getImageUrl
}
