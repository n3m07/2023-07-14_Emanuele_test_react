import { useState } from 'react'
import './App.css'
import Day from './components/Day'

function App() {
  const [days, setDays]= useState([])
return(
  <div className='w-screen h-screen bg-slate-300'>
    <header className='h-[60px] w-full flex justify-center items-center text-2xl italic bg-blue-300'>
      My Calender
    </header>

    <div className='w-full h-[calc(100vh-60px)] border-[3px] border-black flex justify-start items-start p-4 gap-2 flex-wrap'>
      <Day days={days} setDays={setDays}/>
      </div>
  </div>
)
}

export default App
