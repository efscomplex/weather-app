/* eslint-disable no-undef */
import {
  html
} from 'htm/preact'
import {
  styled
} from 'goober'
import {
  useEffect
} from 'preact/compat'
import Aside from './aside'
import Main from './main'
import {
  config
} from '../config'
import {
  Subject
} from 'rxjs'
import {
  debounceTime
} from 'rxjs/operators'
import useWeather from '../hooks/useWeather'
import '@/styles/index.sass'

export default function () {
  const {
    weather,
    dispatch
  } = useWeather()
  const weather$ = new Subject().pipe(
    debounceTime(500)
  )
  useEffect(() => {
    weather$.subscribe(dispatch)
    return () => weather$.unsubscribe()
  })

  return html`
      <${App}>
         <${Aside} weather=${weather} weather$=${weather$}/>
         <${Main} weather=${weather}/>
      </$>
   `
}
const App = styled('div')`
   height: 100vh;
   display: grid;
   grid-template-columns: ${config.asideWidth} 1fr;
   background-color: var(--bg);
   color: var(--text);
`
