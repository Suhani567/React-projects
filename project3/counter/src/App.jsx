import { useState } from 'react'
import './App.css'
import hands from './assets/image.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <img src={hands} alt="joining hands" width="200" />
        <h1>Thank You Counter</h1>
      </div>
      <h2>You said thankyou {count} times</h2>
      <button onClick = {() => setCount(count+1)}>
      Say ThankYou
      </button>
      <br />
      <br />
      <button onClick = {() => setCount(0)}>
        Reset
      </button>
    </>
  )
}

export default App
