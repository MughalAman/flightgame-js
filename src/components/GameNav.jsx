import '../styles/GameNav.css'
import {React, useContext} from 'react'
import {gameContext} from './Context'


function GameNav() {
    const {gameState, setGameState} = useContext(gameContext)
    return (
        <div className='game-nav'>
            <div className='game-nav-money'>
                <p>$ {gameState.money}</p>
            </div>

            <div className='game-nav-country'>
                <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${gameState.country_code}.svg`} alt={gameState.country_name} />
                <h3>{gameState.country_name}</h3>
            </div>

            <div className='game-nav-weather'>
                <p>{gameState.temp_c} °C</p>
            </div>

        </div>
    )
}

export default GameNav