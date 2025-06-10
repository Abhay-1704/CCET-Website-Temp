import { useState } from 'react'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="btn btn-primary m-4">
        Bootstrap Button
      </button>
    </>
  )
}

export default App
