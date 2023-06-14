import { useState } from 'react'
import './styles/App.scss'
import Calendar from './components/Calendar/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Calendar/>
    </div>
  )
}

export default App
