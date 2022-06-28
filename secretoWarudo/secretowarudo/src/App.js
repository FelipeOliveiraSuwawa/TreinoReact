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
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetter] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters,setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score,setScore] = useState(0)

  const pickWordCategory = ()=>{
    console.log(words)
    //pegar uma categoria aleatoria
    const categories = Object.keys(words) /* categories vai pegar o o words q recebeu é o wordlist importado e vai pegar as keys delas que sao nos caso os temas */
    // console.log(Object.keys)
    console.log(categories)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length )]
    console.log(category);

    // pegar uma palavra aleatoria
      const word = words[category][Math.floor(Math.random() * words[category].length )]
      console.log(word);

      return {word, category}
  }
  
  const startGame = ()=>{
    // pick word and category
      const {word, category} = pickWordCategory();
      let wordLetters = word.split("");
      wordLetters = wordLetters.map((l)=> l.toLowerCase())
      console.log(word,category)
      console.log(wordLetters);
      
      //set states
        setPickedWord(word)
        setPickedCategory(category)
        setLetter(wordLetters)

    setgameStage(stages[1].name)
  }

  // 正かどうか自動的に確認してもらうスクリプト
  const verifyLetter = (letter)=>{
    console.log(letter)
  }

  const retry = ()=>{
    setgameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game  verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
