import logo from './logo.svg';
// css
import './App.css';

//imports do react
import { useCallback, useEffect, useState } from 'react';


//importar data
import { wordsList } from './data/words'

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:3, name:'end'}
];

function App() {

  const [gameStage, setgameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  
  const startGame = ()=>{
    setgameStage(stages[1].name)
  }

  // 正かどうか自動的に確認してもらうスクリプト
  const verifyLetter = ()=>{
    setgameStage(stages[2].name)
  }

  const retry = ()=>{
    setgameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game  verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
