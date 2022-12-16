import {React, useContext, useState, useEffect} from 'react'
import {gameContext} from '../components/Context'
import {americanAll} from 'wordlist-js'

function Scene3() {
    const {gameState, setGameState} = useContext(gameContext)

    const [distance, setDistance] = useState(0)

    const [lives, setLives] = useState(3)        

    //wordlist of words to type
    const [wordList, setWordList] = useState([])
    const [currentWord, setCurrentWord] = useState('')

    useEffect(() => {
        const listOfWords = []

        const filterWords = americanAll.filter(word => word.length > 3 && word.length < 8)

        //Get 20 random words
        for (let i = 0; i < 20; i++) {
            //no duplicates
            const randomWord = filterWords[Math.floor(Math.random() * filterWords.length)]
            if (!listOfWords.includes(randomWord)) {
                listOfWords.push(randomWord)
            } else {
                i--
            }
        }

        setWordList(listOfWords)
        setCurrentWord(listOfWords[0])
    }, [])


    

    const handleInput = (e) => {
        if (e.target.value.includes(' ')) {
            if (e.target.value.trim() === currentWord) {
                const currentWordElement = document.getElementById('word-'+wordList.indexOf(currentWord))
                if(wordList.indexOf(currentWord) === wordList.length - 1) {
                    currentWordElement.style = 'opacity: 0.5; text-decoration: line-through 2px'
                    e.target.value = ''
                    e.target.disabled = true
                    e.target.style = 'opacity: 0.5'
                    
                    const currentDistance = distance + Math.round(gameState.distance / wordList.length)
                    setDistance(currentDistance)
                    const completedBar = document.getElementById('completed-bar')
                    completedBar.style = `width: ${currentDistance / gameState.distance * 100}%; opacity: 1`

                    setTimeout(() => {
                        setGameState({...gameState, scene: 'scene4'})
                    }, 3000)
                }else{
                    setCurrentWord(wordList[wordList.indexOf(currentWord) + 1])
                    
                    e.target.value = ''
                    currentWordElement.style = 'opacity: 0.5; text-decoration: line-through 2px'
    
                    const currentDistance = distance + Math.round(gameState.distance / wordList.length)
    
                    setDistance(currentDistance)
    
                    const completedBar = document.getElementById('completed-bar')
                    completedBar.style = `width: ${currentDistance / gameState.distance * 100}%; opacity: 1`
                    
                }
            } else {
                const currentLives = lives - 1
                setLives(currentLives)

                if (currentLives <= 0 ) {
                    setGameState({...gameState, scene: 'scene1'})
                }

                const currentWordElement = document.getElementById('word-'+wordList.indexOf(currentWord))
                if(wordList.indexOf(currentWord) === wordList.length - 1) {
                    currentWordElement.style = 'opacity: 0.5; text-decoration: line-through 2px; background-color: red'
                    e.target.value = ''
                    e.target.disabled = true
                    e.target.style = 'opacity: 0.5'
                    
                    const currentDistance = distance + Math.round(gameState.distance / wordList.length)
                    setDistance(currentDistance)
                    const completedBar = document.getElementById('completed-bar')
                    completedBar.style = `width: ${currentDistance / gameState.distance * 100}%; opacity: 1`

                    setTimeout(() => {
                        setGameState({...gameState, scene: 'scene4'})
                    }, 3000)
                }else{
                    setCurrentWord(wordList[wordList.indexOf(currentWord) + 1])
                    
                    e.target.value = ''
                    currentWordElement.style = 'opacity: 0.5; text-decoration: line-through 2px; background-color: red'
    
                    const currentDistance = distance + Math.round(gameState.distance / wordList.length)
    
                    setDistance(currentDistance)
    
                    const completedBar = document.getElementById('completed-bar')
                    completedBar.style = `width: ${currentDistance / gameState.distance * 100}%; opacity: 1`
                    
                }
            }
        }
    }

    const renderLives = () => {
        const livesArray = []
        for (let i = 0; i < lives; i++) {
            livesArray.push(<span key={i}>❤️</span>)
        }
        return livesArray
    }


    return (
        <div className="scene3">
            <div className="scene3-content">

                <div className="scene3-content-text">
                    <h1>Distance remaining: {(gameState.distance - distance) < 0 ? 0 : gameState.distance - distance} km</h1>
                    <h4>Lives: {renderLives()}</h4>
                </div>

                <div className="scene3-progress-bar">
                    <div id="completed-bar" className="js-completed-bar completed-bar">
                    <hr className="completed-bar__dashed"/>
                    <i className="completed-bar__truck">✈️</i>
                    </div>
                </div>

                <div className="scene3-content-word-list">
                    <ul>
                        {wordList.map((word, index) => (
                            <li id={'word-'+index} key={index}>{word}</li>
                        ))}
                    </ul>
                </div>

                <div className="scene3-content-input">
                    <input type="text" placeholder="Type the next word . . ." onChange={(e) => {handleInput(e)}}/>
                </div>

            </div>
        </div>
    )
}

export default Scene3