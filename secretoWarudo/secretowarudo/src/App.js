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

const GuessesQty = 3

function App() {

  const [gameStage, setgameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetter] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters,setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(GuessesQty)
  const [score,setScore] = useState(0)

  const pickWordCategory = useCallback(()=>{
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
  },[words]);
  
  const startGame = useCallback(()=>{
    //clear letter
    clearLettersStates()
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
  },[pickWordCategory]);
  // 正かどうか自動的に確認してもらうスクリプト
  const verifyLetter = (letter)=>{
    console.log(letters)
    const normalizedLetter = letter.toLowerCase()

    //もう使った字かどうかチェック
    if(guessedLetters.includes(normalizedLetter)|| wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters)=>[
        ...actualGuessedLetters,
        normalizedLetter
      ])
    }
    else{
        setWrongLetters((actualWrongLetters)=>[
          ...actualWrongLetters,
          normalizedLetter
        ])
        setGuesses((actualGuesses)=> actualGuesses - 1)
    }

  };
 console.log(guessedLetters)
 console.log(wrongLetters)


  const clearLettersStates = ()=>{
    setGuessedLetters([])
    setWrongLetters([])
  } 

 useEffect(() => {
      if(guesses <=0){
        clearLettersStates();
        setgameStage(stages[2].name)
      }
 },[guesses])

  useEffect(()=>{
      const uniqueLetters = [...new Set(letters)];
      console.log(uniqueLetters)
      if(guessedLetters.length === uniqueLetters.length){
        setScore((actualScore)=> actualScore += 100);

        startGame()
      }

  },[guessedLetters,letters,startGame])



  const retry = ()=>{
    setScore(0)
    setGuesses(GuessesQty)
    
    setgameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game  verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
