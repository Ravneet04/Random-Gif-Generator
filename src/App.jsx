import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div>
      <h1>Random Gifs</h1>
      <div>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App