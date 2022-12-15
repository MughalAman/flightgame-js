import '../styles/Game.css'
import GameNav from './GameNav'
import {React, useState} from 'react'
import {gameContext} from './Context'

// Scenes
import Scene1 from '../scenes/Scene1'
import Scene2 from '../scenes/Scene2'
import Scene3 from '../scenes/Scene3'
import Scene4 from '../scenes/Scene4'
import Scene5 from '../scenes/Scene5'
import Scene6 from '../scenes/Scene6'
import Scene7 from '../scenes/Scene7'



function Game({playerName}) {
    const [gameState, setGameState] = useState({scene: 'scene1', money: 1000, country_code: 'FI', country_name: 'Finland', temp_c: 20})

    //get keypresses
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (gameState.scene === 'scene1') {
                setGameState({...gameState, scene: 'scene2'})
            } else if (gameState.scene === 'scene2') {
                setGameState({...gameState, scene: 'scene3'})
            } else if (gameState.scene === 'scene3') {
                setGameState({...gameState, scene: 'scene4'})
            } else if (gameState.scene === 'scene4') {
                setGameState({...gameState, scene: 'scene5'})
            } else if (gameState.scene === 'scene5') {
                setGameState({...gameState, scene: 'scene1'})
            }
        }
    })

    return (
        <gameContext.Provider value={{gameState, setGameState}} className="game">
            
            {gameState.scene === 'scene1' && (
                <div>
                    <Scene1/>
                </div>
            )}

            {gameState.scene === 'scene2' && (
                <div>
                    <GameNav/>
                    <Scene2/>
                </div>
            )}

            {gameState.scene === 'scene3' && (
                <div>
                    <GameNav/>
                    <Scene3/>
                </div>
            )}

            {gameState.scene === 'scene4' && (
                <div>
                    <GameNav/>
                    <Scene4/>
                </div>
            )}

            {gameState.scene === 'scene5' && (
                <div>
                    <GameNav/>
                    <Scene5/>
                </div>
            )}

            {gameState.scene === 'scene6' && (
                <div>
                    <GameNav/>
                    <Scene6/>
                </div>
            )}

            {gameState.scene === 'scene7' && (
                <div>
                    <GameNav/>
                    <Scene7/>
                </div>
            )}



        </gameContext.Provider>
    )
}

export default Game