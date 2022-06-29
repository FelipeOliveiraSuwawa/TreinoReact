import React from 'react'
import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>GameOver</h1>
      <h2>A sua Pontuação foi : <span>{score}</span></h2>
      <button onClick={retry}>Retry</button>
    </div>
  )
}

export default GameOver