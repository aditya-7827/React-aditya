import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let MyObj={
    username:"Aditya",
    age:22,
  }

  let Arr=[1,2,,30]

  return (
    <>
      <h1 className="bg-cyan-600 text-pink-700 underline">Tailwind Test</h1>
      <Card username="mukesh"></Card>
      <Card></Card>
    </>
  )
}

export default App
