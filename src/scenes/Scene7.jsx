import {React, useContext, useEffect, useState} from 'react'
import {gameContext} from '../components/Context'

function Scene7() {
    const {gameState, setGameState} = useContext(gameContext)
    const [timeRemaining, setTimeRemaining] = useState(10)


    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1)
        }, 1000)

        const checkTimeInterval = setInterval(() => {
            let currentTimeRemaining = 999;
            setTimeRemaining((timeRemaining) => {currentTimeRemaining = timeRemaining; return timeRemaining})

            if (currentTimeRemaining <= 0) {
                setGameState(prevGameState => ({...prevGameState, scene: 'scene8'}))
            }
        }, 1)

        return () => {
            clearInterval(timerInterval)
            clearInterval(checkTimeInterval)
        }
    }, [])

    return (
        <div className="scene7">
            <div className="scene7-text">
                <h2>
                    
                </h2>
            </div>
        </div>
    )
}

export default Scene7