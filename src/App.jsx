import React from 'react'
import './App.css'
import './components/Titlebar'
import Titlebar from './components/Titlebar'
import Todowrapper from './components/Todowrapper'
const App = () => {
  return (
    <container>
      <Titlebar />
      <Todowrapper />
    </container>
  )
}

export default App