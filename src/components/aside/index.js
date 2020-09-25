/* eslint-disable no-unused-vars */
import { html } from 'htm/preact'
import { styled } from 'goober'
import { Title, Header, Aside, CurrentWeather, Settings, Temperature, Main } from './styled'
import asideBg from '../../assets/Cloud-background.png'
import { Input } from '../../components/common/Input'

const defW = {
  consolidated_weather: [{
    weather_state_name: 'sunny',
    predictability: '4%',
    weather_state_abbr: 'c' // sunny
  }],
  parent: { title: 'Rome' }
}

export default function ({ weather = defW, weather$ }) {
  const updateLocation = ({ target }) => weather$.next({
    payload: target.value,
    type: 'UPDATE_LOCATION'
  })
  const weath = weather.consolidated_weather[0]
  const city = weather.parent.title
  const picture = weather.picture
  const state = weath.weather_state_name
  const date = weath.applicable_date

  return html`
      <${Aside}>
         <${Header}>  
            <${Input} type='text' placeholder='search for places' onInput=${updateLocation}/>
            <${Settings}> ⚙ </$>
         </$>
         <${Main}>
            <img src=${picture} class='today-pic'/>
            <${Temperature}> ${Math.round(weath.the_temp || 15)}<sup>º</sup></$>
            <span>${state}</span>
         </main>
         <footer>
            <span>${weath.applicable_date}</span>
            -
            <date>${date}</date>
            <p>${city}</p>
         </footer>
      </$>
   `
}
