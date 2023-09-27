import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TrafficLight from './component/TrafficLight'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
    <TrafficLight />

</div>
  )
}

export default App
