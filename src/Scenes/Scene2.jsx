import {React, useContext} from 'react'
import {gameContext} from '../components/Context'

function Scene2() {
    const {gameState, setGameState} = useContext(gameContext)

    const updateGameState = (country_code, country_name, cost) => {
        if(gameState.money < cost) return alert('You do not have enough money to travel to this country')

        setGameState({...gameState, scene: 'scene3', country_code: country_code, country_name: country_name, money: gameState.money - cost, distance: 5000})
    }

    return (
        <div className="scene2">
            <div className="scene2-text">
                <h2>SELECT A COUNTRY TO TRAVEL TO</h2>
            </div>

            <div className="scene2-countries">

                <div className="scene2-country" onClick={() => updateGameState('US', 'United States', 900)}>
                    <div className="scene2-country-left">
                        <ul>
                            <li>Country: United States</li>
                            <li>Distance: 5000km</li>
                            <li>Price: $1000</li>
                        </ul>
                    </div>
                    <div className="scene2-country-right">
                        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" alt=" "/>
                    </div>
                </div>

                
                <div className="scene2-country" onClick={() => updateGameState('FI', 'Finland', 300)}>
                    <div className="scene2-country-left">
                        <ul>
                            <li>Country: Finland</li>
                            <li>Distance: 5000km</li>
                            <li>Price: $1000</li>
                        </ul>
                    </div>
                    <div className="scene2-country-right">
                        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg" alt=" "/>
                    </div>
                </div>

                
                <div className="scene2-country" onClick={() => updateGameState('SE', 'Sweden', 100)}>
                    <div className="scene2-country-left">
                        <ul>
                            <li>Country: Sweden</li>
                            <li>Distance: 5000km</li>
                            <li>Price: $1000</li>
                        </ul>
                    </div>
                    <div className="scene2-country-right">
                        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg" alt=" "/>
                    </div>
                </div>

            </div>

            <div className="scene2-map">
                <img src="https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db426b676b95755fb2844_Group%20805.jpg" alt="map"/>
            </div>

        </div>
    )
}

export default Scene2