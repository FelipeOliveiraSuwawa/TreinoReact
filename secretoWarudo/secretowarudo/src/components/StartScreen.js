import React from 'react'
import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
        <h1>言葉を当てる</h1>
        <p>スタートを押し始まるぞ</p>
        <button onClick={startGame}>Start</button>
    </div>
  )
}

export default StartScreen