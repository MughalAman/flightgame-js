import '../styles/Game.css'
import GameNav from './GameNav'
import {React, useState} from 'react'
import {gameContext} from './Context'

// Scenes
import Scene1 from '../Scenes/Scene1'
import Scene2 from '../Scenes/Scene2'
import Scene3 from '../Scenes/Scene3'



function Game({playerName}) {
    const [gameState, setGameState] = useState({scene: 'scene1', money: 1000, country_code: 'US', country_name: 'United States', temp_c: 20})

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

        </gameContext.Provider>
    )
}

export default Game