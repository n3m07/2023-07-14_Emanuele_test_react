import { useState } from 'react'
import './App.css'
import Day from './components/Day'
import Header from './components/Header'

function App() {
  const [days, setDays]= useState([])
  const [ipt, setIpt]= useState('')
const [number, setNumber]= useState('')

return(
  <div className='w-screen h-screen bg-slate-300'>
    <Header setIpt={setIpt} setNumber={setNumber} number={number} ipt={ipt} days={days} setDays={setDays}/>

    <div className='w-full h-[calc(100vh-60px)] border-[3px] border-black flex justify-start items-start p-4 gap-2 flex-wrap'>
      <Day days={days} setDays={setDays} setipt={setIpt} setNumber={setNumber} number={number} ipt={ipt}/>
      </div>
  </div>
)
}

export default App
