import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let MyObj={
    profilename:"Aditya",
    age:22,
  }

  let Arr=[1,2,3]

  return (
    <>
      <h1 className="bg-cyan-600 text-pink-700 underline">Tailwind Test</h1>
      <Card username="mukesh"></Card>
      <Card username={MyObj.profilename}></Card>
    </>
  )
}

export default App
