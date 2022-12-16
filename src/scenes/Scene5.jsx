import {React, useContext, useEffect, useState} from 'react'
import {gameContext} from '../components/Context'

function Scene5() {
    const {gameState, setGameState} = useContext(gameContext)
    const [timeRemaining, setTimeRemaining] = useState(60)
    const [lives, setLives] = useState(5)

    const circleShrinker = () => {
        const circles = document.querySelectorAll('.scene5-game-circle')
        
        if (gameState.job_is_bad === true) {
            circles.forEach(circle => {
                circle.setAttribute('data-scale', parseFloat(circle.getAttribute('data-scale')) - 0.0015)
                circle.style.transform = `scale(${circle.getAttribute('data-scale')})`
            })
        }else {
            circles.forEach(circle => {
                circle.setAttribute('data-scale', parseFloat(circle.getAttribute('data-scale')) - 0.0005)
                circle.style.transform = `scale(${circle.getAttribute('data-scale')})`
            })
        }
        
        //remove circles that are too small
        circles.forEach(circle => {
            if (circle.getAttribute('data-scale') < 0.05) {
                circle.remove()
                setLives(prevLives => prevLives - 1)
            }
        })

    }

    const addMoney = () => {
        setGameState(prevGameState => ({...prevGameState, money: prevGameState.money + prevGameState.job_reward}))
    }

    const handleTimer = () => {
        setTimeRemaining(prevTime => prevTime - 1);
    }

    const circleSpawner = () => {
        const game = document.querySelector('.scene5-game')
        
        const circle = document.createElement('div')
        circle.classList.add('scene5-game-circle')
        circle.setAttribute('data-scale', 1)
        circle.style.left = Math.floor(Math.random() * 80) + '%'
        circle.style.top = Math.floor(Math.random() * 80) + '%'
        circle.addEventListener('click', (e) => {
            circleClickHandler(e)
        })
        game.appendChild(circle)
    }

    const circleClickHandler = (e) => {
        if (e.target.classList.contains('scene5-game-circle')) {
            e.target.remove();
        }
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            handleTimer()
        }, 1000)

        const spawnerInterval = setInterval(() => {
            circleSpawner()
        }, 500)

        const shrinkerInterval = setInterval(() => {
            circleShrinker()
        }, 1)

        const gameHandlerInterval = setInterval(() => {
            let currentLives;
            let currentTimeRemaining;

            setLives((lives) => {currentLives = lives; return lives})
            setTimeRemaining((timeRemaining) => {currentTimeRemaining = timeRemaining; return timeRemaining})

            if (currentTimeRemaining <= 0) {
                addMoney();
                setGameState(prevGameState => ({...prevGameState, scene: 'scene2'}));
            }

            if (currentLives <= 0) {
                if (gameState.job_is_bad === true) {
                    setGameState(prevGameState => ({...prevGameState, scene: 'scene6', money: prevGameState.money - prevGameState.job_reward}))
                }else {
                    setGameState(prevGameState => ({...prevGameState, scene: 'scene6'}))
                }
            }
        }, 1)
                

        return () => {
            clearInterval(spawnerInterval)
            clearInterval(shrinkerInterval)
            clearInterval(timerInterval)
            clearInterval(gameHandlerInterval)
        }
    }, [])


    const renderLives = () => {
        const livesArray = []
        for (let i = 0; i < lives; i++) {
            livesArray.push(<span key={i}>❤️</span>)
        }
        return livesArray
    }


    return (
        <div className="scene5">
            <div className="scene5-info">
                <h1>Work 💪</h1>
                <p>Click on the circles. Failing to do so will result in you getting penalized.</p>
                <p>Time remaining: {timeRemaining}</p>
                <p>Lives: {renderLives()}</p>
            </div>

            <div className="scene5-game">

            </div>
        </div>
    )
}

export default Scene5