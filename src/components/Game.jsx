import '../styles/Game.css'
import GameNav from './GameNav'
import {React, useState, useEffect} from 'react'
import {gameContext} from './Context'
import {getCodes, getName} from 'country-list'


// Scenes
import Scene1 from '../scenes/Scene1'
import Scene2 from '../scenes/Scene2'
import Scene3 from '../scenes/Scene3'
import Scene4 from '../scenes/Scene4'
import Scene5 from '../scenes/Scene5'
import Scene6 from '../scenes/Scene6'
import Scene7 from '../scenes/Scene7'
import Scene8 from '../scenes/Scene8'

import AudioManager from './AudioManager'

function Game() {
    const [gameState, setGameState] = useState({scene: 'scene0', money: -15000, country_code: 'FI', country_name: 'Finland', temp_c: 20})
    const countryCodes = getCodes()
    //get keypresses
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '0':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene0'}))
            case '1':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene1'}))
                break;
            case '2':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene2'}))
                break;
            case '3':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene3'}))
                break;
            case '4':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene4'}))
                break;
            case '5':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene5'}))
                break;
            case '6':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene6'}))
                break;
            case '7':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene7'}))
                break;
            case '8':
                setGameState(prevGameState => ({...prevGameState, scene: 'scene8'}))
                break;
            case 'Enter':
                setGameState(prevGameState => ({...prevGameState, money: 400}))

            default:
                break;
        }
    })

    const checkIfSavedGame = () => {
        const savedGame = localStorage.getItem('gameState')
        if (savedGame !== null && savedGame !== undefined && savedGame !== '') {
            return true
        } else {
            return false
        }
    }

    const loadSavedGame = () => {
        const savedGame = JSON.parse(localStorage.getItem('gameState'))
        console.log(savedGame)
        setGameState(prevGameState => ({...prevGameState, ...savedGame}))
    }

    const startGame = () => {
        const playerName = document.getElementById('player_name').value

        const speacialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '`', '~']
        if(playerName === '' || playerName === null || playerName === undefined || playerName.replaceAll(' ', '') === '' || playerName.split('').some(char => speacialChars.includes(char))) {
            alert('no name specified or name contains special characters')
            return
        }

        setGameState(prevGameState => ({...prevGameState, scene: 'scene1', player_name: playerName}))
    }

    return (
        <gameContext.Provider value={{gameState, setGameState}} className="game">

            {gameState.scene === 'scene0' && (
                <div className="scene0" style={{backgroundImage: "url(/images/scenes/scene_1_start_game_logo.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>

                    <div className="game-menu">
                        <div className="game-menu-container">
                        <input id="player_name" type="text" placeholder='Name'/>
                        <select id="country" onChange={(e) => {
                            setGameState(prevGameState => ({...prevGameState, player_country_code: e.target.value}))
                        } }>
                            <option value="none">Select your country</option>

                            {countryCodes.map(code => (
                                <option value={code}>{getName(code)}</option>
                            ))}
                        </select>
                        <button onClick={() => startGame()}>Play</button>
                        {checkIfSavedGame() && (
                            <button onClick={() => {
                                loadSavedGame()
                            }
                            }>Continue</button>
                        )}
                        </div>
                    </div>
                
                </div>
            )}
            
            {gameState.scene === 'scene1' && (
                localStorage.setItem('gameState', JSON.stringify(gameState)),
                <div style={{backgroundImage: "url(/images/scenes/scene_2_door.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                    <Scene1/>
                </div>
            )}

            {gameState.scene === 'scene2' && (
                localStorage.setItem('gameState', JSON.stringify(gameState)),
                <div style={{backgroundImage: 'none !imporant', backgroundColor:"#242424"}}>
                    <GameNav/>
                    <Scene2/>
                </div>
            )}

            {gameState.scene === 'scene3' && (
                localStorage.setItem('gameState', JSON.stringify(gameState)),
                <div style={{backgroundImage: "url(/images/scenes/flying.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                    <GameNav/>
                    <Scene3/>
                </div>
            )}

            {gameState.scene === 'scene4' && (
                localStorage.setItem('gameState', JSON.stringify(gameState)),
                <div style={{backgroundImage: "url(/images/scenes/scene_3_job_selector.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                    <GameNav/>
                    <Scene4/>
                </div>
            )}

            {gameState.scene === 'scene5' && (
                localStorage.setItem('gameState', JSON.stringify(gameState)),
                <div style={{backgroundImage: "url(/images/scenes/job_minigame.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                    <GameNav/>
                    <Scene5/>
                </div>
            )}

            {gameState.scene === 'scene6' && (
                localStorage.setItem('gameState', JSON.stringify(gameState)),
                <div>
                    <GameNav/>
                    <Scene6/>
                </div>
            )}

            {gameState.scene === 'scene7' && (
                <div style={{backgroundImage: "url(/images/scenes/victory.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                    <Scene7/>
                </div>
            )}

            {gameState.scene === 'scene8' && (
                <div style={{backgroundImage: "url(/images/scenes/End_Game.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                    <Scene8/>
                </div>
            )}

            <AudioManager/>

        </gameContext.Provider>
    )
}

export default Game