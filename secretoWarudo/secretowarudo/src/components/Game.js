import React from 'react'
import './Game.css'
import { useState, useRef } from 'react'

const Game = ({ verifyLetter, pickedWord,pickedCategory,letters,guessedLetters,wrongLetters,guesses,score }) => {

  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null)
  const handleSubmit = (e)=>{
    e.preventDefault();

    verifyLetter(letter)
    setLetter('')
    letterInputRef.current.focus();
  }

  return (
    <div className='game'>
      <p className="points">
        <span>スコア:{score}</span>
      </p>
        <h1>言葉を当ててください:</h1>
        <h3 className='tip'>
          言葉のヒント <span>{pickedCategory}</span>
        </h3>
        <p>あなたはまだ{guesses}トライがあります(s).</p>
        <div className="wordContainer">
           {letters.map((letter,i)=> (
              guessedLetters.includes(letter) ? (
                <span key={i} className="letter">{letter}</span>
              ) : (
                <span key={i} className="blankSquare"></span>
              )
           ))}
        </div>
        <div className="letterContainer">
          <p>言葉の字を的確に当ててみてください:</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name='letter' maxLength="1" required onChange={(e)=>setLetter(e.target.value)} value={letter} ref={letterInputRef} />
            <p className='wo'>を</p>
            <button>やってみる</button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>すでに使った字:</p>
          {wrongLetters.map((letter,i)=>(
            <span key={i}>{letter}, </span>
          ))}
        </div>
    </div>
  )
}

export default Game