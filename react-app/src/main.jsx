import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <h1>Hello New App</h1>
  )
}

// Tree formed after Parsing
// const ReactElement = {
//   type : 'a',
//   props : {
//     href : "https://google.com",
//     target: '_blank'
//   },
//   children : 'Click me to visit google'
// }

const AnotherElement= (
  <a href="https://google.com" target='_blank'>Visit</a>
)

const user = 'vishnu'

const ReactElement = React.createElement(
  // parameters --> 1st tag, 2nd props(attributes), 3rd children(inner HTMl, the text)
  "a", {href: 'https://google.com', target: '_blank'},
  "Click me to visit google", user)


createRoot(document.getElementById('root')).render(
    ReactElement,
  )
