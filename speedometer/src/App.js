import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const[speed,setSpeed]=useState(0);

  const onAccelerate=()=>{
    setSpeed(()=>{
      if(speed<200){
        return speed+10;
      }
  return speed
    })
  }

  const onBreak=()=>{
    setSpeed(()=>{
      if(speed>0){
        return speed-10;
      }
  return speed
    })

  }

  return (
    <div className='main-container'>
      <h1 className='heading'>SPEEDOMETER</h1>
      <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
      className='image'
      alt='speedometer'/>
      <h1 className='speed-heading'>Speed is {speed} mph</h1>
      <p className='limit'>Min Limit is 0mph,Max Limit is 200mph</p>
    <div>
    <button
    type="button"
    className='accelerate-btn'
    onClick={onAccelerate}>
      Accelerate
    </button>
    <button
    type="button"
    className='break-btn'
    onClick={onBreak}>
      Add Break
    </button>
    </div>
    </div>
  )
}

export default App
