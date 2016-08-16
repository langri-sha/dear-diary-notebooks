import React from 'react'
import ReactDOM from 'react-dom'

import style from './styles'
import {DearDiary} from './components'
import webfont from './lib/webfont'

// IIFE. Mounts the main component to the page.
(function main () {
  // Load fonts.
  webfont({
    families: ['Amatic SC:400,400i,500,700', 'Lobster:400,400i,500,700'],
    text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.!'
  })

  const container = document.createElement('div')
  container.className = style.container
  document.body.appendChild(container)

  ReactDOM.render(<DearDiary />, container)
})()
