import React from 'react'
import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>ゲームオーバー</h1>
      <h2>あなたのスコアは : <span>{score}</span></h2>
      <button onClick={retry}>Retry</button>
    </div>
  )
}

export default GameOver