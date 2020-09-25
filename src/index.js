import { render, h } from 'preact'
import { html } from 'htm/preact'
import App from './components/App'
import { setup } from 'goober'

setup(h)
render(html`<${App}/>`, document.body)