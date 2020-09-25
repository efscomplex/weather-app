import { styled } from 'goober'
import { html } from 'htm/preact'
import Card from '@/components/common/dailyWeather'
import useWeather from '../../hooks/useWeather'

export default function ({ weather }) {
  const { getImageUrl } = useWeather()
  return html`
      <${Main}>
         <${Prevision}>
         ${weather && weather.consolidated_weather.map(
            weath => html`
               <${Card} weather=${weath} picture=${getImageUrl(weath.weather_state_abbr)}>
               </$>
         `)}
         </$>
      </$>
   `
}
const Prevision = styled('div')`
   margin: auto;
   width: 95%;
	display: flex;
	flex-wrap: wrap;
   gap: 1rem;
`
const Main = styled('main')`

`
