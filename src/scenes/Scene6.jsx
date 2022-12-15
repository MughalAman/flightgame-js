import {React, useContext, useEffect, useState} from 'react'
import {gameContext} from '../components/Context'

function Scene6() {
    const {gameState, setGameState} = useContext(gameContext)
    const [timeRemaining, setTimeRemaining] = useState(5)


    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1)
        }, 1000)

        const checkTimeInterval = setInterval(() => {
            let currentTimeRemaining = 999;
            setTimeRemaining((timeRemaining) => {currentTimeRemaining = timeRemaining; return timeRemaining})

            if (currentTimeRemaining <= 0) {
                setGameState(prevGameState => ({...prevGameState, scene: 'scene4'}))
            }
        }, 1)

        return () => {
            clearInterval(timerInterval)
            clearInterval(checkTimeInterval)
        }
    }, [])

    return (
        <div className="scene6">
            <div className="scene6-text">
                <h2>
                    {gameState.job_penalty_message}
                </h2>
            </div>
        </div>
    )
}

export default Scene6