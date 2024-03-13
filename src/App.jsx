import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {


  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const handleClick3 = (num) => {
   alert( num * 2)
    
  }

  return (
    <>
      
      <h1>React Core Concept</h1>

      <Counter></Counter>

      <Users></Users>

      <Friends></Friends>

      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => handleClick3(3)}>Click 2</button>
      
      
    </>
  )
}

export default App
    