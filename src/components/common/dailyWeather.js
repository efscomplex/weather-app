import { styled } from 'goober'
import { html } from 'htm/preact'

const Card = styled('div')`
   padding: 2rem;
   width: 10rem;
   
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   border-radius: 9px;
   background-color: var(--primary, #333);
   color: var(--text, white);
`
export default function ({ weather, picture }) {
  const date = weather.applicable_date
  const maxTemp = Math.round(weather.max_temp)
  const minTemp = Math.round(weather.min_temp)

  return html`
      <${Card}>
         <span>${date}</span>
         <img src=${picture} />
         <span>${minTemp}  ${maxTemp}</span>
      </$>
   `
}
