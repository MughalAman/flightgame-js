import {React, useContext} from 'react'
import {gameContext} from '../components/Context'

function Scene1() {
    const {gameState, setGameState} = useContext(gameContext)

    return (
        <div className="scene1">
            <div className="scene1-text">
                <p>
                    You are a young and freshly graduated student, and now it is time to pay your student loan back.
                    You want to explore the world, and the first goal you have set for yourself is to travel around Europe.
                    Since you are freshly graduated, you have no money. Since this is the case, you have to start working to earn some money.
                    You have 15000 euros of unpaid loan. You can earn money while travelling.
                    The more you earn the better!
                    At the moment you are in Helsinki and here you will start earning money.
                    Good luck on your travels!!

                </p>
            </div>

            <div className="scene1-door">
                <button onClick={() => setGameState({...gameState, scene: 'scene2', map_lat: '24.957996168', map_lon: '60.316998732', money: -15000, country_code: 'FI', country_name: 'Finland', temp_c: 20, co2: 0, total_distance: 0})}>START YOUR JOURNEY</button>
            </div>
        </div>
    )
}

export default Scene1

