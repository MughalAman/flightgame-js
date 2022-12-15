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
                    Congratulations, Your student loan has been paid off! Now you can reap the rewards of your hard work.
                    The stress of a big loan is gone and your questionably earned money can go to your own enjoyment.
                    Perhaps you'd finally want to make your eternal dream of travelling the whole world true?

                    To be continued.

                </h2>
            </div>
        </div>
    )
}

export default Scene7